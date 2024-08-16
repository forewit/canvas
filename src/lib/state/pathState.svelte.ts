import { observable } from "$lib/Utils/observable"

const createPathState = function () {
    let path = observable({ test: true })
    
    path.get().test

    const unsub = path.subscribe(()=>{
        console.log("path changed")
    })

    return path.get()
    
}


export const pathState = createPathState()