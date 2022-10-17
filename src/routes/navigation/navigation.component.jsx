import "./navigation.styles.scss";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/Logo.svg"

const Navigation = () => {

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
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;