import { getContext, setContext, untrack } from 'svelte';
import { getFirebaseContext } from './firebase.svelte';
import type { DocumentData } from 'firebase/firestore';

export type Folder = {
    folders?: Record<string, Folder>,
    ids?: string[],
}

type Directory = {
    lastUpdated: number
    root: Folder
}

function createDirectories() {
    let lastUpdated = $state(0)
    let root: Folder = $state({})
    let currentPath: string[] = $state([])
    let currentFolder = $derived(getFolder(currentPath))

    const firebase = getFirebaseContext()

    firebase.subscribeToDirectoriesCollection(syncDirectory)

    function syncDirectory(id: string, type: "added" | "modified" | "removed") {
        if (id !== "root") {
            console.warn("Only root directory is currently supported")
            return
        }

        let firebaseDirectory = firebase.directoriesCollection["root"]

        if (type === "removed" || !firebaseDirectory) {
            console.warn("Root directory does not exist! publishing new root")
            firebase.publishDataToDirectoryDoc("root", {lastUpdated, root})
            return
        }

        let { wasValid, sanitizedDirectory } = sanitizeDirectory(firebaseDirectory)

        if (!wasValid) {
            console.warn("Sanitized invalid root directory", firebase.directoriesCollection["root"], sanitizedDirectory)
            firebase.publishDataToDirectoryDoc("root", sanitizedDirectory)
            return
        }

        if (sanitizedDirectory.lastUpdated < lastUpdated) {
            firebase.publishDataToDirectoryDoc("root", {lastUpdated, root})
        } else if (sanitizedDirectory.lastUpdated > lastUpdated) {
            root = sanitizedDirectory.root
            lastUpdated = sanitizedDirectory.lastUpdated
        } else if (sanitizedDirectory.lastUpdated === lastUpdated) {
            console.log("root directory synced with firebase")
        }
    }

    function sanitizeDirectory(dir: DocumentData): { wasValid: boolean, sanitizedDirectory: Directory } {
        let wasValid = true;
        let sanitizedDirectory: Directory = {
            lastUpdated: Date.now(),
            root: {},
        };

        if (Object.hasOwn(dir, "lastUpdated") && typeof dir.lastUpdated === "number") {
            sanitizedDirectory.lastUpdated = dir.lastUpdated
        } else {
            wasValid = false
        }

        if (Object.hasOwn(dir, "root") && typeof dir.root === "object") {
            sanitizedDirectory.root = dir.root
        } else {
            wasValid = false
        }

        return { wasValid, sanitizedDirectory }
    }

    function getFolder(path: string[]): Folder  {
        let folder = root
        for (let i = 0; i < path.length; i++) {
            if (!folder.folders) throw new Error("Folder does not exist")
            folder = folder.folders[path[i]]
            if (!folder) throw new Error("Folder does not exist")
        }
        return folder
    }

    function sanitizeFolderName(title: string, path: string[]): string {
        let sanitizedTitle = title
        let folder = getFolder(path)

        if (!folder.folders) {
            return sanitizedTitle
        }

        let i = 1;
        while (folder.folders[sanitizedTitle]) {
            sanitizedTitle = `${title} (${i})`
            i++
        }

        return sanitizedTitle
    }

    function newFolder(title = "New Folder") {
        const safeTitle = sanitizeFolderName(title, currentPath)
        let folder = getFolder(currentPath)
        if (!folder.folders) folder.folders = {}
        folder.folders[safeTitle] = {}
    }

    $effect.root(() => {
        $effect.pre(() => {
            root

            console.log("ROOT UPDATED", JSON.stringify(root))

            untrack(() => {
                if (lastUpdated === 0) return
                // NEED TO CHECK IF THIS IS DUE TO PUBLISHING
                lastUpdated = Date.now()
                syncDirectory("root", "modified")
            })
        })
    })

    return {
        get root() { return root },
        get currentPath() { return currentPath },
        get currentFolder() { return currentFolder },
        get newFolder() { return newFolder },
        get getFolder() { return getFolder },
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