import { userState } from "$lib/State/userState.svelte";
import { firebaseState } from "../firebaseState.svelte";
import { pagesState } from "$lib/State/pagesState.svelte";
import { db } from "../firebase.client";
import { doc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import { debounce } from "$lib/Utils/debouncing";

const DEBOUNCE_DELAY = 1000;


let pendingPublishes: Record<string, Function> = {};
export const publishPageToFirestore = (id: string) => {
    if (pendingPublishes[id]) return

    pendingPublishes[id] = debounce(() => {
        delete pendingPublishes[id];
        _publishPageToFirestore(id);
    }, DEBOUNCE_DELAY);

    pendingPublishes[id]();
}

async function _publishPageToFirestore(id: string) {
    const user = firebaseState.user;

    if (!user) {
        console.warn("No user to publish to firestore.");
        return
    }

    if (!pagesState.get()[id]) {
        console.warn("deleting page from firestore: ", id.slice(0, 4));
        await deleteDoc(doc(db, "users", user.uid, "pages", id));
        firebaseState.isPublishing = false;
        return
    }

    firebaseState.isPublishing = true;
    const pageRef = doc(db, "users", user.uid, "pages", id);

    try {
        console.log(`Publishing page to firestore: ${id.slice(0, 4)}...`);
        const pageData = {
            lastUpdated: pagesState.get()[id].lastUpdated,
            title: pagesState.get()[id].title,
            content: pagesState.get()[id].content
        }
        if (firebaseState.pageDocs.get()[id]) {
            await updateDoc(pageRef, pageData);
        } else {
            await setDoc(pageRef, pageData);
        }
    } catch (err) {
        console.error("Error while publishing page to firestore", err);
    } finally {
        firebaseState.isPublishing = false;
    }
}

export const publishUserSettingsToFirestore = debounce(_publishUserSettingsToFirestore, DEBOUNCE_DELAY);

async function _publishUserSettingsToFirestore() {
    const user = firebaseState.user;

    if (!user) {
        console.warn("No user to publish to firestore.");
        return
    }

    firebaseState.isPublishing = true;
    const userRef = doc(db, "users", user.uid);

    try {
        console.log("Publishing user State to firestore user doc...");
        await updateDoc(
            userRef,
            {
                lastUpdated: userState.get().lastUpdated,
                themeName: userState.get().themeName,
                spellcheck: userState.get().spellcheck,
                root: userState.get().root,
            }
        );

    } catch (err) {
        console.error("Error while publishing settings to firestore user doc", err);
    } finally {
        firebaseState.isPublishing = false;
    }
}