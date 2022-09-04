import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from '../../Utils/firebase/firebase.utils.js'

const SignIn = () => {
    useEffect( () => {
        const xyz = async () => { 
            const response = await getRedirectResult(auth);
            console.log(response);
            if(response){
                const userDocRef = createUserDocumentFromAuth(response.user)
            }
        }
        xyz();
    },[]);

    const logGoogleUser =  async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h2>Sign In Page</h2>
            <button onClick = {logGoogleUser}>Sign In with Google Pop up</button>
            <br/>
            <br/>
            <button onClick = {signInWithGoogleRedirect}>Sign In with Google Redirect</button>

        </div>
    )
}


export default SignIn