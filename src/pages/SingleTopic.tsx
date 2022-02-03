import React from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { ITheme } from "../types";
import { useTopic } from "api/Topic";
import { Card, Flex } from "components/shared";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = createUseStyles((theme: ITheme) => ({
    root: {
        


        // "& p": {
        //     opacity: 0.5
        // }
    },
    container: {
        maxWidth: theme.boundaries.width,
        margin: "0 auto",
        padding: `0 ${theme.boundaries.padding}`
    },
    image: {
        width: "100%",
        height: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    },
    imageWrapper: {
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden"
    }
}));

const SingleTopic = () => {
    const { id } = useParams();
    const classes = useStyles();

    const topic = useTopic(id);

    return <div className={classes.root}>
        <div className={classes.container}>
            <Flex alignItems="center" style={{marginBottom: "15px"}}>
                {topic.icon && <FontAwesomeIcon icon={topic.icon} size="2x" />}
                <h2 style={{margin: 0, marginLeft: "12px"}}>{topic.label}</h2>
            </Flex>
            <Flex justifyContent="center" alignItems="baseline" flexWrap="wrap" width="101%">
                {topic.childPosts.map(post => <Card {...post} />)}
            </Flex>

        </div>
    </div>
}

export default SingleTopic;