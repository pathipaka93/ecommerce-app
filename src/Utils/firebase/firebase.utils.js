import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJK1ZAeKB0Yc-AaQMZa6ietZR5-IKp8HI",
    authDomain: "spathipa-ecomm.firebaseapp.com",
    projectId: "spathipa-ecomm",
    storageBucket: "spathipa-ecomm.appspot.com",
    messagingSenderId: "878680535123",
    appId: "1:878680535123:web:863f05ec8c9724cc26d6a6"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db= getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
     const userDocRef = doc(db, 'users', userAuth.uid);

     console.log(userDocRef)
     const userSnapshot = await getDoc(userDocRef);

     // if user data exists, then return userDocRef
     // if user data does not exist, then create/set doc with data from userauth(userSnapshot)
     if(!userSnapshot.exists()){
         const { displayName, email}  = userAuth;
         const createdAt = new Date();
         try{
             await setDoc( userDocRef, {
                 displayName,
                 email,
                 createdAt
             });
         }catch(error){
             console.log('error creating user', error.message);
         }
     }
     return userDocRef;

  }