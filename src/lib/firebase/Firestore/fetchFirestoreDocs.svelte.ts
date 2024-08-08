import type { User } from "firebase/auth";
import { getDefaultUserData, type Doc, type UserData } from "$lib/State/userState.svelte";
import { firebaseState } from "../firebaseState.svelte";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase.client";


export async function fetchFirestoreDocs() {
    const user = firebaseState.user;
    if (!user) {
        console.warn("No user to fetch firestore docs for.");
        return
    }

    firebaseState.fetchStatus = "loading";

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    let userData = getDefaultUserData();
    let docs: Record<string, Doc> = $state({})

    // create a new user doc if it doesn't exist
    if (!userSnap.exists()) {
        console.log("Creating firestore user doc...");
        try {
            await setDoc(userRef, userData, { merge: true });
        } catch (err) {    
            console.error(err);        
            firebaseState.fetchStatus = "error";
            throw new Error("Failed to create firestore user doc!");
        }
    }

    // otherwise, fetch the user doc
    else {
        console.log("Fetching firestore user doc...");
        const fetchedData = userSnap.data() as UserData;
        userData = { ...userData, ...fetchedData };

        // fetch each doc
        for (let i = 0; i < userData.docOrder.length; i++) {
            const id = userData.docOrder[i];

            try {
                const docSnap = await getDoc(doc(userRef, "docs", id));
                if (!docSnap.exists()) {
                    userData.docOrder.splice(i, 1);
                    i--;
                    continue;
                }
                docs[i] = docSnap.data() as Doc;

            } catch (err) {
                console.warn("Failed to fetch doc users doc list. removing it from the list.", err);
                userData.docOrder.splice(i, 1);
                i--;
            }

        }

    }

    firebaseState.userData = userData;
    firebaseState.docs = docs;
    firebaseState.fetchStatus = "loaded";
}



