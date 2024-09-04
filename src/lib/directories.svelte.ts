import { getContext, setContext, untrack } from 'svelte';
import { getFirebaseContext } from './firebase.svelte';
import type { DocumentData } from 'firebase/firestore';
import { getPagesContext } from './pages.svelte';
import { getAppContext } from './app.svelte';


export type Folder = {
    name: string
    color: string
    subfolders?: string[],
    pages?: string[],
}

type Directory = {
    lastUpdated: number
    folders: Record<string, Folder>
}

function createDirectory() {
    let lastUpdated = $state(0)
    let remoteRootUpdate = $state(true);
    let root: Folder = $state({ name: "Home", color: "red" })
    let folders: Record<string, Folder> = $state({ "root": root })
    let currentPath: string[] = $state(["root"])
    let currentFolder = $derived(folders[currentPath[currentPath.length - 1]])

    const app = getAppContext()

    let orphanedFolders: string[] = $derived.by(() => {
        let orphaned = Object.keys(folders).filter((folder) => folder !== "root");
        let stack = ["root"];  // Initialize stack with root folder
    
        while (stack.length > 0) {
            let currentFolder = stack.pop();  // Get the last folder from the stack
            if (!currentFolder) continue;
            let folder = folders[currentFolder];  // Access the current folder object
    
            if (folder.subfolders) {
                for (let subfolder of folder.subfolders) {
                    orphaned = orphaned.filter((orphan) => orphan !== subfolder);
                    stack.push(subfolder);  // Add subfolders to the stack
                }
            }
        }
        return orphaned;
    })

    const pages = getPagesContext()

    let orphanedPages: string[] = $derived.by(() => {
        let orphaned = Object.keys(pages)
        let stack = ["root"];  // Initialize stack with root folder
    
        while (stack.length > 0) {
            let currentFolder = stack.pop();  // Get the last folder from the stack
            if (!currentFolder) continue;
            let folder = folders[currentFolder];  // Access the current folder object
    
            if (folder.subfolders) {
                for (let subfolder of folder.subfolders) {
                    stack.push(subfolder);  // Add subfolders to the stack
                }
            }
            if (folder.pages) {
                for (let page of folder.pages) {
                    orphaned = orphaned.filter((orphan) => orphan !== page);
                }
            }
        }
    
        return orphaned;
    })

    const firebase = getFirebaseContext()

    function sanitizeDirectory(data: DocumentData): { wasValid: boolean, sanitizedDirectory: Directory } {
        let sanitizedDirectory: Directory = {
            lastUpdated: Date.now(),
            folders: { "root": { name: "Home", color: "red" } },
        };

        // TODO: make more robust
        const wasValid = (Object.hasOwn(data, "lastUpdated") && typeof data.lastUpdated === "number") &&
            (Object.hasOwn(data, "folders") && typeof data.folders === "object");

        if (wasValid) {
            sanitizedDirectory.lastUpdated = data.lastUpdated
            sanitizedDirectory.folders = data.folders
        }

        return { wasValid, sanitizedDirectory }
    }

    function publishRootDirectory() {
        firebase.publishDoc(["directories", "root"], { lastUpdated, folders })
    }

    function addSubfolder(title = "New Folder", color = app.theme.theme1) {
        const id = crypto.randomUUID().slice(0, 8)
        if (!currentFolder.subfolders) currentFolder.subfolders = []
        folders[id] = { name: title, color: color }
        currentFolder.subfolders.push(id)
    }

    function removeSubfolder(id: string) {
        if (!currentFolder.subfolders) return
        currentFolder.subfolders = currentFolder.subfolders.filter((subfolder) => subfolder !== id)
        delete folders[id]
        if (currentFolder.subfolders.length === 0) delete currentFolder.subfolders
    }

    function addPageID(id: string) {
        if (!currentFolder.pages) currentFolder.pages = []
        currentFolder.pages.push(id)
    }

    function removePageID(id: string) {
        if (!currentFolder.pages) return
        currentFolder.pages = currentFolder.pages.filter((docID) => docID !== id)
        if (currentFolder.pages.length === 0) delete currentFolder.pages
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
            folders = sanitizedDirectory.folders
        } else if (sanitizedDirectory.lastUpdated === lastUpdated) {
            console.log("directory synced with firebase", id)
        }
    })


    $effect(() => {
        // effect dependencies
        JSON.stringify(folders)

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
        get folders() { return folders },
        get currentPath() { return currentPath },
        set currentPath(value) { currentPath = value },
        get currentFolder() { return currentFolder },
        get addSubfolder() { return addSubfolder },
        get removeSubfolder() { return removeSubfolder },
        get addPageID() { return addPageID },
        get removePageID() { return removePageID },
        get orphanedFolders() { return orphanedFolders },
        get orphanedPages() { return orphanedPages },
    }
}

const DIRECTORY_KEY = Symbol('directories')

export const setDirectoryContext = () => {
    const nDirectories = createDirectory();
    return setContext(DIRECTORY_KEY, nDirectories)
}

export const getDirectoryContext = (): ReturnType<typeof setDirectoryContext> => {
    return getContext(DIRECTORY_KEY)
}