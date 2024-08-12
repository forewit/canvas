import { db } from "../firebase.client";
import { doc, onSnapshot, setDoc, collection,  } from "firebase/firestore";
import { firebaseState } from "../firebaseState.svelte";

export const fetchPagesCollectionOnSnapshot = function () {
    if (!firebaseState.user) {
        console.warn("No user to fetch to page doc for.");
        return () => { };
    }

    const pagesRef = collection(db, "users", firebaseState.user.uid, "pages")

    return onSnapshot(pagesRef, (pagesSnap) => {
        pagesSnap.docChanges().forEach((change) => {
            const docData = change.doc.data()
            const docId = change.doc.id

            if (change.type === "added" || change.type === "modified") {
                firebaseState.pageDocs[docId] = docData;
            }
            if (change.type === "removed") {
                delete firebaseState.pageDocs[docId];
            }
        });
    });
}

export const fetchUserDocOnSnapshot = function () {
    if (!firebaseState.user) {
        console.warn("No user to fetch to user doc for.");
        return () => { };
    }

    const userDocRef = doc(db, "users", firebaseState.user.uid);

    return onSnapshot(
        userDocRef,
        (userDocSnap) => {
            if (!userDocSnap.exists()) {
                console.log("Creating firestore user doc...");
                setDoc(userDocRef, {}, { merge: true });
            } else {
                console.log("Firestore user doc updated.");
                const fetchedData = userDocSnap.data();
                firebaseState.userDoc = fetchedData;
            }
        },
        (error) => {
            console.error("Error while updating firestore user doc", error)
        }
    );
}
