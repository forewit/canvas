import { getContext, setContext, untrack } from 'svelte';
import { getFirebaseContext } from './firebase.svelte';
import type { DocumentData } from 'firebase/firestore';
import { toStore } from 'svelte/store';


type Folder = {
    title: string
    subfolders?: Folder[],
    ids?: string[],
}

type Directory = {
    lastUpdated: number
    root: Folder
}

function createDirectories() {
    let lastUpdated = $state(0)
    let root: Folder = $state({ title: "root" })
    let currentPath: string[] = $state([])
    let currentFolder = $derived(getFolder(currentPath))
    let remoteRootUpdate = $state(true);

    const firebase = getFirebaseContext()

    function getFolder(path: string[]): Folder {
        let folder: Folder | undefined = root
        for (let i = 0; i < path.length; i++) {
            folder = folder.subfolders?.find((subfolder) => subfolder.title === path[i])
            if (folder === undefined) throw new Error("Folder does not exist")
        }
        return folder
    }

    function sanitizeDirectory(data: DocumentData): { wasValid: boolean, sanitizedDirectory: Directory } {
        let sanitizedDirectory: Directory = {
            lastUpdated: Date.now(),
            root: { title: "root" },
        };

        // TODO: make more robust
        const wasValid = (Object.hasOwn(data, "lastUpdated") && typeof data.lastUpdated === "number") &&
            (Object.hasOwn(data, "root") && typeof data.root === "object");

        if (wasValid) {
            sanitizedDirectory.lastUpdated = data.lastUpdated
            sanitizedDirectory.root = data.root
        }

        return { wasValid, sanitizedDirectory }
    }

    function sanitizeFolderName(title: string, path: string[]): string {
        let sanitizedTitle = title
        let folder = getFolder(path)

        if (!folder.subfolders) {
            return sanitizedTitle
        }

        let i = 1;
        while (folder.subfolders.some((subfolder) => subfolder.title === sanitizedTitle)) {
            sanitizedTitle = `${title} (${i})`
            i++
        }

        return sanitizedTitle
    }

    function publishRootDirectory() {
        firebase.publishDoc(["directories", "root"], { lastUpdated, root })
    }

    function addSubfolder(title = "New Folder") {
        const safeTitle = sanitizeFolderName(title, currentPath)
        if (!currentFolder.subfolders) currentFolder.subfolders = []
        currentFolder.subfolders.push({ title: safeTitle })
    }

    function removeSubfolder(title: string) {
        if (!currentFolder.subfolders) return
        currentFolder.subfolders = currentFolder.subfolders.filter((subfolder) => subfolder.title !== title)
        if (currentFolder.subfolders.length === 0) delete currentFolder.subfolders
    }

    function addPageID(id: string) {
        if (!currentFolder.ids) currentFolder.ids = []
        currentFolder.ids.push(id)
    }

    function removeDocID(id: string) {
        if (!currentFolder.ids) return
        currentFolder.ids = currentFolder.ids.filter((docID) => docID !== id)
        if (currentFolder.ids.length === 0) delete currentFolder.ids
    }

    function goto(path: string[]) {
        currentPath = path
    }

    firebase.subscribeToCollection(["directories"], (id, doc) => {
        if (id !== "root") {
            console.warn("Only root directory is currently supported")
            return
        }

        if (doc === null) {
            console.warn("Root directory does not exist! publishing new root")
            publishRootDirectory()
            return
        }

        let { wasValid, sanitizedDirectory } = sanitizeDirectory(doc)

        if (!wasValid) {
            console.warn("Ignoring invalid root directory", doc)
            return
        }

        if (sanitizedDirectory.lastUpdated < lastUpdated) {
            publishRootDirectory();
        } else if (sanitizedDirectory.lastUpdated > lastUpdated) {
            console.log("root directory updated")
            remoteRootUpdate = true
            lastUpdated = sanitizedDirectory.lastUpdated
            root = sanitizedDirectory.root
        } else if (sanitizedDirectory.lastUpdated === lastUpdated) {
            console.log("directory synced with firebase", id)
        }
    })


    $effect(() => {
        // effect dependencies
        JSON.stringify(root)

        untrack(() => {
            if (remoteRootUpdate) {
                remoteRootUpdate = false
                return;
            }
            lastUpdated = Date.now()
            publishRootDirectory();
        })
    })

    return {
        get root() { return root },
        get currentPath() { return currentPath },
        get goto() { return goto },
        get currentFolder() { return currentFolder },
        get addSubfolder() { return addSubfolder },
        get removeSubfolder() { return removeSubfolder },
        get addPageID() { return addPageID },
        get removeDocID() { return removeDocID },
    }
}

const DIRECTORIES_KEY = Symbol('directories')

export const setDirectoriesContext = () => {
    const nDirectories = createDirectories();
    return setContext(DIRECTORIES_KEY, nDirectories)
}

export const getDirectoriesContext = (): ReturnType<typeof setDirectoriesContext> => {
    return getContext(DIRECTORIES_KEY)
}