import React from "react";
import styles from "./styles";
import { createUseStyles } from "react-jss";

type TButtonProps = {
    children: React.ReactNode
}

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const Button = ({ children }: TButtonProps) => {
    const classes = useStyles();

    return <button className={ classes.root }>{children}</button>
}

export default Button;