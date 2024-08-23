import { getContext, setContext } from 'svelte';

type Folder = {
    folders?: Record<string, Folder>
    ids?: string[]
}

class Directory {
    root: Folder = $state({})
    path: string[] = $state([])

    constructor() {
        // runs on mount
        $effect(()=>{

        })
    }

    private uniqueFolderName(folder: Folder, name: string) {
        if (!folder.folders || folder.folders[name] === undefined) {
            return name
        }
        let i = 1
        while (folder.folders[name + i] !== undefined) {
            i++
        }
        return `${name} (${i})`
    }

    getFolder(path: string[]) {
        let folder = this.root
        for (let i = 0; i < path.length; i++) {
            if (!folder.folders || folder.folders[path[i]] === undefined) {
                throw new Error("Cannot get folder, path is not valid!")
            }
            folder = folder.folders[path[i]]
        }
        return folder
    }

    newFolder(name = "New Folder", path?: string[]) {
        let folder = this.getFolder(path || this.path)
        if (!folder.folders) folder.folders = {}
        folder.folders[this.uniqueFolderName(folder, name)] = {}
    }

    deleteFolder(name: string, path?: string[]) {
        let folder = this.getFolder(path || this.path)
        if (!folder.folders || folder.folders[name] === undefined) {
            console.warn("No folder to delete")
            return
        }
        delete folder.folders[name]
    }

    newFile(id: string, path?: string[]) {
        let folder = this.getFolder(path || this.path)
        if (!folder.ids) folder.ids = []
        folder.ids.push(id)
    }

    deleteFile(id: string, path?: string[]) {
        let folder = this.getFolder(path || this.path)
        if (!folder.ids || folder.ids.includes(id) === false) return
        folder.ids = folder.ids.filter(i => i !== id)
    }
}

const DIRECTORY_KEY = Symbol('folderStore')

export const setDirectoryContext = () => {
    const nDirectory = new Directory()
    return setContext(DIRECTORY_KEY, nDirectory)
}

export const getDirectoryContext = (): Directory => {
    return getContext(DIRECTORY_KEY)
}