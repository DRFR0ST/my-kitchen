import React from 'react';
import Chip, { IChipProps } from "./Chip";
import { createUseStyles } from 'react-jss';
import styles from "./styles";
import Flex from '../Flex';

const useStyles = createUseStyles(styles);

const Chips = ({data, style}: {data: IChipProps[], style: object}) => {
    const classes = useStyles();

    return <Flex justifyContent="flex-start" alignItems="center" flexWrap="nowrap" className={classes.root} style={style}>
            { data.map((el, i) => <Chip key={el.label + i} {...el} />) }
    </Flex>
}



export default Chips;