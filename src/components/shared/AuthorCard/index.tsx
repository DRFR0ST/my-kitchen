import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import Flex from "../Flex";
import { IAuthor } from "api/Author";

const useStyles = createUseStyles(styles);

const AuthorCard = (props: IAuthor) => {
    const classes = useStyles();

    return <div className={classes.root}>
         <Flex alignItems="center" className={classes.container}>
            <img src={props.avatar_url} alt="author avatar" className={classes.avatar} />
            <div className={classes.contentWrapper}>
                <h3>{props.name} {props.surname}</h3>
                <p>Posts published: {props?.posts?.length}</p>
            </div>
        </Flex>
    </div>
}

export default AuthorCard;