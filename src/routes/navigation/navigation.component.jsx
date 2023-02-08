import {NavContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles";
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/Logo.svg"
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
    const {isCartOpen} = useContext(CartContext);
    console.log("////Navigation render////")
    const currentUser = useSelector(selectCurrentUser);

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
                    { currentUser ? (<NavLink as="span" className="link" onClick={signOutUser}>Sign out</NavLink>):(<NavLink className="link" to="/auth">SignIn</NavLink>)}
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/> }
            </NavContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;