import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../Utils/firebase/firebase.utils.js'

const SignIn = () => {
    const logGoogleUser =  async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h2>Sign In Page</h2>
            <button onClick = {logGoogleUser}>Sign In with Google Pop up</button>
        </div>
    )
}


export default SignIn