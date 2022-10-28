import { useState } from "react";
import {signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Forminput from "../form-input/forminput.component";
import "./sign-in.styles.scss"; 
import Button from "../button/button.component";

const defaultFormFeilds ={
    email:"",
    password:"",
}

const Signin = ( ) => {
    const [formFields, setFormFields] = useState(defaultFormFeilds);

    const {displayName, email, password, confirmPassword} = formFields;

    const signInWithGoogle = async(e) =>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            setFormFields(defaultFormFeilds);
        }catch(error){
            switch (error.code) {
                case "auth/wrong-password":
                    console.log("incorrect password")
                    break;
            
                case "auth/user-not-found":
                    console.log("no user is assosiated with this email")
                    break;
            
                default:
                    console.log(error)
                    break;
            }
        }
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
        console.log(formFields);
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an Account</h2>
            <span>Sign up with ur email and password</span>
            <form onSubmit={handleSubmit}> 
                <Forminput label="Email" type="email" name="email" value={email} onChange={handleChange} required/>
                <Forminput label="Passowrd" type="password" name="password" value={password} onChange={handleChange} required/>
                <div className="buttons-container">
                    <Button buttonType="submit">Sign up</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
        </form>
        </div>
    )
}

export default Signin;