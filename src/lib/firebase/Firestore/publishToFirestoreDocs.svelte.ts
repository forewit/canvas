import type { UserData } from "$lib/State/userState.svelte";
import { firebaseState } from "../firebaseState.svelte";
import { db } from "../firebase.client";
import { doc, updateDoc, collection } from "firebase/firestore";

export async function publishFirestoreDocs() {
    console.log("Publishing data to firestore...");

    const user = firebaseState.user;
    const docs = firebaseState.docs;
    const userData = firebaseState.userData;

    if (!user || !docs || !userData) {
        console.warn("No userData or docs to publish to firestore.");
        return
    }

    firebaseState.publishStatus = "saving";

    try {
        // updating the user doc
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, userData);

        // updating each doc
        const docsCollection = collection(userRef, "docs");
        Object.entries(docs).forEach(async ([id, document]) => {
            const docRef = doc(docsCollection, id);
            await updateDoc(docRef, document);
        })

        firebaseState.publishStatus = "saved";
    } catch (err) {
        console.error(err);
        firebaseState.publishStatus = "error";
        throw new Error("Failed to publish to firestore!");
    }
}