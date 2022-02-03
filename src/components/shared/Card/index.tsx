import React from 'react';
import { createUseStyles } from 'react-jss';
import { IRecipe, useRecipe } from 'api/Recipe';
import Flex from '../Flex';
import cx from "classnames";

import styles from "./styles";
import Ink from 'react-ink';
import moment from "moment";
import { useHistory } from 'react-router-dom';

const useStyles = createUseStyles(styles);

export type ICardpost = IRecipe & { featured?: boolean, onClick?: () => void };

const Card = (props: ICardpost) => {
    const classes = useStyles();
    const history = useHistory();

    const recipe = useRecipe(props.id);

    const rootClasses = cx(classes.root, { [classes.featured]: props.featured });

    const navigate = (path: string) => () => {
        history.push(path)
    }

    const handleClick = () => {
        props.onClick && props.onClick();
    }

    return <div className={rootClasses} onClick={handleClick}>
        <div className={classes.imageWrapper}>
            <CardBadge label={recipe.topics[0].label} onClick={navigate(`/t/${recipe.topics[0].id}`)} />
            <Ink /> 
            <img className={classes.image} onClick={navigate(`/r/${recipe.id}`)} src={recipe.thumbnail_url} alt="thumbnail" />
        </div>
        <div className={classes.contentWrapper}>
            <h3 onClick={navigate(`/r/${recipe.id}`)}>{recipe.title}</h3>
            <p>{recipe.short}</p>
        </div>
        


        <Flex alignItems="center" justifyContent="space-between" className={classes.footerWrapper}>
            <Flex justifyContent="flex-start" alignItems="center">
                <img alt="author avatar" src={recipe.author?.avatar_url} className={classes.footerAvatar} />
                <p>by {recipe.author?.name}</p>
            </Flex>
            <div>
                <p>{moment(recipe.created_at).fromNow()}</p>
            </div>
        </Flex>
    </div>
}

const CardBadge = ({label, onClick} : {label: string, onClick: () => void}) => {
    const classes = useStyles();

    return <div className={classes.badgeRoot} onClick={onClick}>{label}
    <Ink />
    </div>
}


export default Card;