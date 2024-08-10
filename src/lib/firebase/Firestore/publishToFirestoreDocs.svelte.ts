 import { getUserState } from "$lib/State/userState.svelte";
 import { getFirebaseState } from "../firebaseState.svelte";
 import { db } from "../firebase.client";
 import { doc, updateDoc, collection } from "firebase/firestore";


export async function publishUserSettingsToFirestore() {
    
    const firebaseState = getFirebaseState();
    const userState = getUserState();
    const user = firebaseState.user;

    if (!user) {
        console.warn("No user to publish to firestore.");
        return
    }

    if (!userState.settings) {
        console.warn("No settings to publish to firestore user doc.");
        return
    }

    firebaseState.isPublishing = true;
    const userRef = doc(db, "users", user.uid);

    try {
        console.log("Publishing settings to firestore user doc...");
        console.log({ settings: userState.settings });
        await updateDoc(userRef, { settings: userState.settings, lastUpdated: userState.lastUpdated });

    } catch (err) {
        console.error("Error while publishing settings to firestore user doc",err);
    } finally {
        firebaseState.isPublishing = false;
    }
}


// import { firebaseState } from "../firebaseState.svelte";
// import { db } from "../firebase.client";
// import { doc, updateDoc, collection } from "firebase/firestore";



// export async function publishFirestoreDocs() {
//     console.log("Publishing data to firestore...");

//     const user = firebaseState.user;
//     const pages = firebaseState.pages;
//     const userData = firebaseState.userData;

//     if (!user || !pages || !userData) {
//         console.warn("No userData or docs to publish to firestore.");
//         return
//     }

//     firebaseState.publishStatus = "saving";

//     try {
//         // updating the user doc
//         const userRef = doc(db, "users", user.uid);
//         await updateDoc(userRef, userData);

//         // updating each doc
//         const docsCollection = collection(userRef, "docs");
//         Object.entries(pages).forEach(async ([id, document]) => {
//             const docRef = doc(docsCollection, id);
//             await updateDoc(docRef, document);
//         })

//         firebaseState.publishStatus = "saved";
//     } catch (err) {
//         console.error(err);
//         firebaseState.publishStatus = "error";
//         throw new Error("Failed to publish to firestore!");
//     }
// }