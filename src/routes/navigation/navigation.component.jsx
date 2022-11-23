import "./navigation.styles.scss";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/Logo.svg"
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.styles";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="links-container">
                    <Link className="link" to="/shop">
                        Shop
                    </Link>
                    { currentUser ? (<span className="link" onClick={signOutUser}>Sign out</span>
                    ):(
                    <Link className="link" to="/auth">SignIn</Link>)}
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/> }
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;