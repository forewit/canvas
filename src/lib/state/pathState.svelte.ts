import { userState } from "$lib/State/userState.svelte";

type Folder = {
    ids?: string[]
    folders?: Record<string, Folder>
}

let root: Folder = {
    folders: {
        "my documents": {
            ids: ["1", "2", "3"],
        },
        "my pages": {}
    },
    ids: ["A", "B", "C"]
}

export type Directory = {
    name: string
    subDirectories: Record<string, Directory>
    pageIDs: string[]
}

function createPathState() {
    let root: Directory = $derived(userState.get().root)
    let currentPath: string[] = $state([])

    const getDirectory = function (path: string[]) {
        let dir = root
        for (const id in path) {
            dir = dir.subDirectories[path[id]]
        }
        return dir
    }

    let currentDirectory: Directory = $derived.by(() => getDirectory(currentPath));

    const deleteDirectory = function (id: string) {
        let dir = getDirectory(currentPath)
        delete dir.subDirectories[id]
    }

    const addDirectory = function (name = "New Folder") {
        let dir = getDirectory(currentPath)
        dir.subDirectories[crypto.randomUUID().slice(0, 8)] = {
            name,
            subDirectories: {},
            pageIDs: []
        }
    }

    return {
        get root() { return root },
        get currentPath() { return currentPath },
        set currentPath(value) { currentPath = value },
        get currentDirectory() { return currentDirectory },
        get getDirectory() { return getDirectory },
        get addDirectory() { return addDirectory },
        get deleteDirectory() { return deleteDirectory },
    }
}

export const pathState = createPathState();
