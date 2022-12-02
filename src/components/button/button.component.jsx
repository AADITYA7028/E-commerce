import {BaseButton, GoogleSignInButton, invertedButton} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.gogoole) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: invertedButton,
    }[buttonType]
);

const Button = ({buttonType, children, ...otherprops}) => {
    const CustomButton = getButton(buttonType);
    return (<CustomButton {...otherprops}>{children}</CustomButton>)
}

export default Button;