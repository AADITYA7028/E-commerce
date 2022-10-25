import "./button.styles.scss";

const BUTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"
}

const Button = ({buttonType, children, ...otherprops}) => {
    

    return(
        <button className={`button-container ${BUTON_TYPE_CLASSES[buttonType]}`}{...otherprops}>{children}</button>
    )
}

export default Button;