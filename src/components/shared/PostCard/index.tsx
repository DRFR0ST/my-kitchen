import React from "react";
import { IPost } from "api/Post";
import { useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { Flex } from "components/shared";
import moment from "moment";
import cx from "classnames";
import { useMediaQuery } from "@react-hook/media-query";
import Ink from "react-ink";

const useStyles = createUseStyles(styles);

const PostCard = (props: IPost & { featured?: boolean }) => {
    const history = useHistory();
    const classes = useStyles();
    
    const isMobile = useMediaQuery('only screen and (max-width: 620px)')

    const navigate = () => {
        history.push(`/p/${props.id}`);
    }

    const rootClasses = cx(classes.root, { [classes.featured]: props.featured });

    return <Flex onClick={navigate} justifyContent={isMobile ? "flex-start" : "space-between"} flexDirection={isMobile ? "column" : "row"} className={ rootClasses }>

                <div className={ classes.imageWrapper } onClick={navigate}>
                    <img alt="thumbnail" className={ classes.image } src={props.thumbnail_url} />
                    <Ink />
                </div>

                <div className={ classes.contentWrapper }>
                    <h2 style={{margin: 0}} className={ classes.title }>{props.title}</h2>
                    <p>{props.author?.name} {props.author?.surname}</p>
                    <p>{props.topics[0].label}</p>
                    <img alt="author" src={props.author?.avatar_url} style={{width: "64px", height: "64px", borderRadius: "64px"}} />
                    <p>{ moment(props.created_at).fromNow() }</p>
                </div>
            </Flex>
    
}

export default PostCard;