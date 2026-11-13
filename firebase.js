
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

import {
    getAuth,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_EXISTING_FIREBASE_API_KEY",
    authDomain: "gapx1-8c9dd.firebaseapp.com",
    projectId: "gapx1-8c9dd",
    storageBucket: "gapx1-8c9dd.firebasestorage.app",
    messagingSenderId: "839139904",
    appId: "1:839139904:web:1d4f80649570115d4e15a5",
    measurementId: "G-1N4YCFQ0EL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);


// Anonymous authentication
export async function signInUserAnonymously() {
    if (auth.currentUser) {
        return auth.currentUser;
    }

    const credential = await signInAnonymously(auth);
    return credential.user;
}


// Save research information
export async function saveResearchRecord(researchData) {
    const user = await signInUserAnonymously();

    const researchCollection = collection(
        db,
        "users",
        user.uid,
        "research"
    );

    const documentData = {
        researchType: researchData.researchType || "",
        researchTopic: researchData.researchTopic || "",
        researchPdfName: researchData.researchPdfName || "",
        selectedSources: Array.isArray(researchData.selectedSources)
            ? researchData.selectedSources
            : [],
        createdAt: serverTimestamp()
    };

    const documentReference = await addDoc(
        researchCollection,
        documentData
    );

    return documentReference.id;
}


// Retrieve research information
export async function getResearchRecords() {
    const user = await signInUserAnonymously();

    const researchCollection = collection(
        db,
        "users",
        user.uid,
        "research"
    );

    const snapshot = await getDocs(researchCollection);

    return snapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
}


// Update selected research sources in an existing record
export async function updateResearchSources(researchId, selectedSources) {
    const user = await signInUserAnonymously();

    if (!researchId) {
        throw new Error("Research record ID is missing.");
    }

    const researchDocument = doc(
        db,
        "users",
        user.uid,
        "research",
        researchId
    );

    await updateDoc(researchDocument, {
        selectedSources: selectedSources
    });

    return true;
}
