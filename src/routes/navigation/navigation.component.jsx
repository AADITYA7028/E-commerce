import {NavContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/Logo.svg"
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

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