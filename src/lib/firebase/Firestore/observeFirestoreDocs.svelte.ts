import { db } from "../firebase.client";
import { doc, onSnapshot, setDoc, collection, } from "firebase/firestore";
import { firebaseState } from "../firebaseState.svelte";

export const observePagesCollection = function () {
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
                console.log("Fetched firestore pageDoc" + ((change.doc.metadata.hasPendingWrites || change.doc.metadata.fromCache ? " (local):" : ":")), docId.slice(0, 4));
                firebaseState.pageDocs[docId] = docData
            }
            else if (change.type === "removed") {
                console.log("Firestore pageDoc removed" + ((change.doc.metadata.hasPendingWrites || change.doc.metadata.fromCache ? " (local):" : ":")), docId.slice(0, 4));
                delete firebaseState.pageDocs[docId];
            }
        });
    });
}

export const observeUserDoc = function () {
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
                console.log("Fetched firestore userDoc" + (userDocSnap.metadata.hasPendingWrites || userDocSnap.metadata.fromCache ? " (local):" : ":"), firebaseState.user?.email);
                const fetchedData = userDocSnap.data();
                firebaseState.userDoc = fetchedData;
            }
        },
        (error) => {
            console.error("Error while fetching firestore user doc", error)
        }
    );
}
