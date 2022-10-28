import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyANA46F7ccykpesFKEdLo7kPpOC8zFh9e0",
    authDomain: "crwn-db-83edf.firebaseapp.com",
    projectId: "crwn-db-83edf",
    storageBucket: "crwn-db-83edf.appspot.com",
    messagingSenderId: "640593276818",
    appId: "1:640593276818:web:45c326f9cb5677d2ad1b4b"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user, additionalInformaton) => {
    if(!user) return;
    const userDocRef = doc(db, "user", user.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = user;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{displayName, email, createdAt, ...additionalInformaton})
        }catch(error){
            console.log("error creating user", error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password);
}