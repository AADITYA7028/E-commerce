import Signup from "../../components/sign-up/sign-up.component";
import Signin from "../../components/sign-in/sign-in.component";
import "./authentication.styles.scss";

const Authentication = () =>{
    return (
        <div className="authentication-container">
            <Signin></Signin>
            <Signup></Signup>
        </div>
    )
}

export default Authentication;