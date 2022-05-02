import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBNHmrbsM2TjrKo2UoH4zPY4T8ZOZT8IRo',
    authDomain: 'ecommerce-demo-db-66de4.firebaseapp.com',
    projectId: 'ecommerce-demo-db-66de4',
    storageBucket: 'ecommerce-demo-db-66de4.appspot.com',
    messagingSenderId: '733328434388',
    appId: '1:733328434388:web:aef411c30b04cf0faec741',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async userAuth => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (e) {
            console.log('error creating the user', e.message);
        }
    }

    return userDocRef;
};
