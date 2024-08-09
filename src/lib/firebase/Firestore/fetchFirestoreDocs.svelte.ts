import { db } from "../firebase.client";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { getFirebaseState } from "../firebaseState.svelte";

export const fetchUserDocOnSnapshot = function () {
    const firebaseState = getFirebaseState();

    if (!firebaseState.user) {
        console.warn("No user to fetch to user doc for.");
        return ()=>{};
    }

    const userDocRef = doc(db, "users", firebaseState.user.uid);
    let userDocData = { lastUpdated: Date.now() }

    return onSnapshot(
        userDocRef,
        (userDocSnap) => {
            if (!userDocSnap.exists()) {
                console.log("Creating firestore user doc...");
                setDoc(userDocRef, userDocData, { merge: true });
            } else {
                console.log("Updating firestore user doc...");
                const fetchedData = userDocSnap.data();
                firebaseState.userDocData = fetchedData;
            }
        },
        (error) => {
            console.error("Error while updating firestore user doc", error)
        }
    );
}

// // export const syncPageDocOnSnapshot = function(id: string): {page: Promise<Page>, unsubscribe: Function} | false {
// //     if (!firebaseState.user) {
// //         console.warn("No user to fetch to page doc for.");
// //         return false;
// //     }

// //     if (!firebaseState.pages[id]) {
// //         console.warn("No page to fetch to page doc for.");
// //         return false;
// //     }

// //     const pageRef = doc(db, "users", firebaseState.user.uid, "docs", id);
// //     let page =

// //     const unsubscribe =  onSnapshot(
// //         pageRef,
// //         (pageSnap) => {
// //             if (!pageSnap.exists()) {
// //                 console.log("Creating firestore page doc...");
// //                 setDoc(pageRef, firebaseState.pages[id], { merge: true });
// //             } else {
// //                 console.log("Fetching firestore page doc...");
// //                 page = pageSnap.data() as Page;
// //             }
// //         },
// //         (error) => {
// //             console.error("Error while fetching firestore page doc", error)
// //         }
// //     );

// //     return {page, unsubscribe}
// // }




// // export async function fetchFirestoreDocs() {
// //     if (!firebaseState.user) {
// //         console.warn("No user to fetch firestore docs for.");
// //         return
// //     }

// //     firebaseState.fetchStatus = "loading";

// //     const userRef = doc(db, "users", firebaseState.user.uid);
// //     const userSnap = await getDoc(userRef);

// //     let userData = getDefaultUserData();
// //     let pages: Record<string, Page> = $state({})

// //     // create a new user doc if it doesn't exist
// //     if (!userSnap.exists()) {
// //         console.log("Creating firestore user doc...");
// //         try {
// //             await setDoc(userRef, userData, { merge: true });
// //         } catch (err) {
// //             console.error(err);
// //             firebaseState.fetchStatus = "error";
// //             throw new Error("Failed to create firestore user doc!");
// //         }
// //     }

// //     // otherwise, fetch the user doc
// //     else {
// //         console.log("Fetching firestore user doc...");
// //         const fetchedData = userSnap.data() as UserData;
// //         userData = { ...userData, ...fetchedData };

// //         // fetch each doc
// //         for (let i = 0; i < userData.docOrder.length; i++) {
// //             const id = userData.docOrder[i];

// //             try {
// //                 const docSnap = await getDoc(doc(userRef, "docs", id));
// //                 if (!docSnap.exists()) {
// //                     userData.docOrder.splice(i, 1);
// //                     i--;
// //                     continue;
// //                 }
// //                 pages[i] = docSnap.data() as Page;

// //             } catch (err) {
// //                 console.warn("Failed to fetch doc users doc list. removing it from the list.", err);
// //                 userData.docOrder.splice(i, 1);
// //                 i--;
// //             }

// //         }

// //     }

// //     firebaseState.userData = userData;
// //     firebaseState.pages = pages;
// //     firebaseState.fetchStatus = "loaded";
// // }



