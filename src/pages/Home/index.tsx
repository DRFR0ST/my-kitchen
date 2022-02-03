import React from "react";
import { usePosts } from "api/Post";
import styles from "./styles";
import { createUseStyles, useTheme } from "react-jss";
import { Card } from "components/shared";
import Chips from "components/shared/Chips";
import { useTopics } from "api/Topic";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useHistory } from "react-router-dom";
import { ITheme } from "types";
import Masonry from 'react-masonry-component';


// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const Home = () => {
    const classes = useStyles();
    const posts = usePosts();
    const topics = useTopics();
    const theme = useTheme() as ITheme;
    const history = useHistory();

    const navigate = (topic_id: string) => {
        history.push(`/t/${topic_id}`)
    }

    const chipsData = topics.map(topic => ({ label: topic.label, onClick: () => navigate(topic.id), icon: topic.icon as IconProp, color: topic.color }))

    return <div className={ classes.root }>
        <Chips data={chipsData} style={{ paddingLeft: theme.boundaries.rightOffset }} />
        <div className={ classes.container }>

            <h2>Featured</h2>

            <Masonry
                options={{}} // default {}
                disableImagesLoaded={false} // default false
            >
               { posts.map(post => <Card key={post.id} {...post} />) }
            </Masonry>
        </div>
    </div>
}



export default Home;