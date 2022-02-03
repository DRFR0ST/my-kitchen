import React from "react";
import styles from "./styles";
import { createUseStyles } from "react-jss";
import Ink from "react-ink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import cx from "classnames";

type TIconButtonProps = {
    name: IconProp;
    onClick: () => void
    className?: string;
    style?: object;
}

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const IconButton = ({ name, onClick, className, style }: TIconButtonProps) => {
    const classes = useStyles();
    // TODO: Add styling.
    // TODO: Implement icons.
    // TODO: Just finish the thang..

    const rootClasses = cx(classes.root, className);

    return  <button onClick={ onClick } className={ rootClasses } style={ style }>
                <FontAwesomeIcon icon={ name } size="lg" />
                <Ink />
            </button>
}

export default IconButton;
