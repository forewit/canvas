import { userState } from "$lib/State/userState.svelte";
import { firebaseState } from "../firebaseState.svelte";
import { pagesState } from "$lib/State/pagesState.svelte";
import { db } from "../firebase.client";
import { doc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import { debounce } from "$lib/Utils/debouncing";


export const debounced_publishPageToFirestore = debounce(publishPageToFirestore, 2000);

async function publishPageToFirestore(id: string) {
    const user = firebaseState.user;

    if (!user) {
        console.warn("No user to publish to firestore.");
        return
    }

    if (!pagesState.pages[id]) {
        console.warn("deleting page from firestore: ", id.slice(0, 4));
        await deleteDoc(doc(db, "users", user.uid, "pages", id));
        return
    }

    firebaseState.isPublishing = true;
    const pageRef = doc(db, "users", user.uid, "pages", id);

    try {
        console.log(`Publishing page to firestore: ${id.slice(0,4)}...`);
        if (firebaseState.pageDocs[id]) {
            await updateDoc(pageRef, pagesState.pages[id]);
        } else {
            await setDoc(pageRef, pagesState.pages[id]);
        }
    } catch (err) {
        console.error("Error while publishing page to firestore", err);
    } finally {
        firebaseState.isPublishing = false;
    }
}


export const debounced_publishUserSettingsToFirestore = debounce(publishUserSettingsToFirestore, 2000);

async function publishUserSettingsToFirestore() {
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
                lastUpdated: userState.lastUpdated,
                themeName: userState.themeName,
                spellcheck: userState.spellcheck
            }
        );

    } catch (err) {
        console.error("Error while publishing settings to firestore user doc", err);
    } finally {
        firebaseState.isPublishing = false;
    }
}