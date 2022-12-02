import {NavContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles";
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/Logo.svg"
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <NavContainer>
                <LogoContainer to="/">
                    <Logo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        Shop
                    </NavLink>
                    { currentUser ? (<NavLink as="span" className="link" onClick={signOutUser}>Sign out</NavLink>
                    ):(
                    <NavLink className="link" to="/auth">SignIn</NavLink>)}
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/> }
            </NavContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;