import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithPopup, 
    signInWithRedirect,
    GoogleAuthProvider, 
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

  export const db= getFirestore();

 export const createUserDocumentFromAuth = async (
     userAuth, 
     additionalInformation = {}
     ) => {
    if(!userAuth) return; 
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
                 createdAt,
                 ...additionalInformation
             });
         }catch(error){
             console.log('error creating user', error.message);
         }
     }
     return userDocRef;
}

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || ! password) return;
    
   return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || ! password) return;
     
    return await signInWithEmailAndPassword(auth, email, password);
   }

   export const signOutUser = async () => {
      await signOut(auth);
   }

   export const onAuthStateChangedListener = (callback) => {
       return onAuthStateChanged(auth, callback )
   }
