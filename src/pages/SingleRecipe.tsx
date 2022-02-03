import React from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { ITheme } from "../types";
import ReactMarkdown from "react-markdown";
import { useRecipe } from "../api/Recipe";
import { AuthorCard } from "components/shared";

const useStyles = createUseStyles((theme: ITheme) => ({
    root: {
        position: "relative",
        maxWidth: "100%"
    },
    container: {
        maxWidth: "100%",
        margin: "0 auto",
        padding: `0 15%`,
        top: "-90px",
        position: "relative",
        
        "@media (min-width: 1200px)": {
            maxWidth: "2000px",
            width: "1170px",
        },

        "@media (min-width: 992px)": {
            maxWidth: "750px",
        },

        "@media (min-width: 768px)": {
            maxWidth: "750px",
            width: "750px",
        },

        "@media (min-width: 749px)": {
            maxWidth: "748px",
        },




        
        


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
        top: "-120px",
        height: "300px",
        overflow: "hidden",
        
        "@media only screen and (min-width: 620px)": {
            maxWidth: theme.boundaries.width,
            margin: "0 auto",
            padding: `0 ${theme.boundaries.padding}`
        }
    },
    // Style your own markdown.
    markdown: {
        "& img": {
            maxWidth: "100%",
        }
    }
}));

const SingleRecipe = () => {
    const { id } = useParams();
    const classes = useStyles();
    
    const recipe = useRecipe(id);

    return <div className={classes.root}>
        <div className={classes.imageWrapper}>
            <img alt="thumbnail" src={recipe.thumbnail_url} className={classes.image} />
        </div>
        <div className={classes.container}>
            <h2>{recipe.title}</h2>
            <ReactMarkdown className={classes.markdown} source={recipe.content} />

            {recipe.author && <AuthorCard {...recipe.author} />}
        </div>
    </div>
}

export default SingleRecipe;