import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { IPost } from "api/Post";
import Flex from "../Flex";
import { useHistory } from "react-router-dom";
import Ink from "react-ink";

const useStyles = createUseStyles(styles);

export type TSlimCardProps = IPost & { onClick?: () => void };

const SlimCard = (props: TSlimCardProps) => {
    const classes = useStyles();
    const history = useHistory();

    const navigate = (path: string) => () => {
        history.push(path)
    }

    const handleClick = () => {
        props.onClick && props.onClick();
        navigate(`/p/${props.id}`)();
    }


    return <div className={ classes.root } onClick={handleClick} >
        <Flex justifyContent="flex-start" width="100%" alignItems="center" style={{ position: "relative" }}>
            <div className={classes.imageWrapper}>
                <img alt="thumbnail" className={ classes.image } src={props.thumbnail_url} />
            </div>
        
            <Flex flexDirection="column" className={classes.contentWrapper}>
                <Flex alignItems="center" style={{height: "70%"}}>
                    <h4 style={{padding: "0px 24px", margin: 0}}>{ props.title }</h4>
                </Flex>

                <Flex alignItems="center" style={{height: "30%"}} justifyContent="flex-end" className={classes.footerWrapper}>
                    <img alt="author" src={props.author?.avatar_url} className={classes.avatar} />
                    <p>by { props.author?.name }</p>
                </Flex>
            </Flex>
        </Flex>
        <Ink />
    </div>
}

export default SlimCard;