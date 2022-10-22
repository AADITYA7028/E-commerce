import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Signin = () =>{
const logGoogleUser = async () =>{
    // const response = await signInWithGooglePopup();
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
}

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>
                google
            </button>
        </div>
    )
}

export default Signin;