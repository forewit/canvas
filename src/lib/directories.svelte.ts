import { getContext, setContext, untrack } from 'svelte';
import { getFirebaseContext } from './firebase.svelte';
import type { DocumentData } from 'firebase/firestore';
import { getPagesContext } from './pages.svelte';
import { getAppContext } from './app.svelte';

export type TreeNode = (
    | { type: "folder"; name: string; children: string[] }
    | { type: "page"; pageID: string }
);

type Directory = {
    lastUpdated: number
    tree: Record<string, TreeNode>
}

function createDirectory() {
    let lastUpdated = $state(0)
    let remoteRootUpdate = $state(true);
    let root: TreeNode = $state({ name: "Home", type: "folder", children: [] })
    let tree: Record<string, TreeNode> = $state({ "root": root })
    let currentPath: string[] = $state(["root"])
    let currentFolder = $derived(tree[currentPath[currentPath.length - 1]])

    let orphanedFolders: string[] = $derived.by(() => {
        let orphaned = Object.keys(tree).filter((folder) => folder !== "root");
        let stack = ["root"];  // Initialize stack with root folder

        while (stack.length > 0) {
            let currentFolder = stack.pop();  // Get the last folder from the stack
            if (!currentFolder || tree[currentFolder].type !== "folder") continue;
            let folder = tree[currentFolder];  // Access the current folder object

            for (let child of folder.children) {
                orphaned = orphaned.filter((orphan) => orphan !== child);
                stack.push(child);  // Add children to the stack
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
            let treeNode = tree[currentFolder];  // Access the current folder object
            if (treeNode.type === "folder") {
                for (let child of treeNode.children) {
                    stack.push(child);  // Add subfolders to the stack
                }
            } else if (treeNode.type === "page") {
                orphaned = orphaned.filter((orphan) => orphan !== treeNode.pageID);
            }
        }

        return orphaned;
    })

    let orphans: string[] = $derived.by(()=>{
        let orphaned = Object.keys(tree)
        .filter((key) => key === "root");

        let stack = ["root"];  // Initialize stack with root folder

        while (stack.length > 0) {
            let currentFolder = stack.pop();  // Get the last folder from the stack
            if (!currentFolder) continue;
            
            let node = tree[currentFolder]

            if (node.type === "folder") {
                for (let child of node.children) {
                    orphaned = orphaned.filter((orphan) => orphan !== child);
                    stack.push(child);  // Add children to the stack
                }
            }
            else if (node.type === "page") {
                orphaned = orphaned.filter((orphan) => orphan !== node.pageID);
            }
        }
        return orphaned
    })

    const firebase = getFirebaseContext()

    function sanitizeDirectory(data: DocumentData): { wasValid: boolean, sanitizedDirectory: Directory } {
        let sanitizedDirectory: Directory = {
            lastUpdated: Date.now(),
            tree: { "root": { name: "Home", type: "folder", children: [] } },
        };

        // TODO: make more robust
        const wasValid = (Object.hasOwn(data, "lastUpdated") && typeof data.lastUpdated === "number") &&
            (Object.hasOwn(data, "tree") && typeof data.tree === "object");

        if (wasValid) {
            sanitizedDirectory.lastUpdated = data.lastUpdated
            sanitizedDirectory.tree = data.tree
        }

        return { wasValid, sanitizedDirectory }
    }

    function publishRootDirectory() {
        firebase.publishDoc(["directories", "root"], { lastUpdated, tree: tree })
    }

    function addSubfolder(parent: string, title = "New Folder") {
        if (!tree[parent] || tree[parent].type !== "folder") return
        const id = crypto.randomUUID().slice(0, 8)
        tree[id] = { name: title, type: "folder", children: [] }
        tree[parent].children.push(id)
    }

    function addPageID(parent: string, pageID: string) {
        if (!tree[parent] || tree[parent].type !== "folder") return
        tree[pageID] = { type: "page", pageID: pageID }
        tree[parent].children.push(pageID)
    }

    function removeChild(parent: string, id: string) {
        if (!tree[parent] || tree[parent].type !== "folder") return
        tree[parent].children = tree[parent].children.filter(child => child !== id)
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
            tree = sanitizedDirectory.tree
        } else if (sanitizedDirectory.lastUpdated === lastUpdated) {
            console.log("directory synced with firebase", id)
        }
    })


    $effect(() => {
        // effect dependencies
        JSON.stringify(tree)

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
        get tree() { return tree },
        get currentPath() { return currentPath },
        set currentPath(value) { currentPath = value },
        get currentFolder() { return currentFolder },
        get addSubfolder() { return addSubfolder },
        get addPageID() { return addPageID },
        get removeChild() { return removeChild },
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