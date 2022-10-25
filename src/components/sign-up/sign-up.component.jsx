import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Forminput from "../form-input/forminput.component";
import "./sign-up.styles.scss"; 
import Button from "../button/button.component";

const defaultFormFeilds ={
    displayName: "",
    email:"",
    password:"",
    confirmPassword:""
}

const Signup = ( ) => {
    const [formFields, setFormFields] = useState(defaultFormFeilds);

    const {displayName, email, password, confirmPassword} = formFields;

    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(password !== confirmPassword){
            alert("passwords do not match")
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDocumentFromAuth(user, {displayName})
            setFormFields(defaultFormFeilds);
    
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("emailalready in use");
            }else{
                alert("error creating user",error); 
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
                <Forminput label="Display name" type="text" name="displayName" value={displayName} onChange={handleChange} required/>
                <Forminput label="Email" type="email" name="email" value={email} onChange={handleChange} required/>
                <Forminput label="Passowrd" type="password" name="password" value={password} onChange={handleChange} required/>
                <Forminput label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required/>
            <Button buttonType="submit">Sign up</Button>
        </form>
        </div>
    )
}

export default Signup;