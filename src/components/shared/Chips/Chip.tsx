import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from "./styles";
import Flex from '../Flex';
import Ink from "react-ink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const useStyles = createUseStyles(styles);

export type IChipProps = {
    label: string
    icon?: IconProp;
    color?: string;
    onClick: () => void
}

const Chip = ({ label, icon, color, onClick }: IChipProps) => {
    const classes = useStyles();
    
    return <Flex alignItems="center" className={classes.chip} onClick={onClick}>
        {icon && <div className={classes.chipIcon}><FontAwesomeIcon icon={icon} size="1x" /></div>}
        <span className={classes.chipText}>{label}</span>
        <Ink />
    </Flex>
}


export default Chip;
