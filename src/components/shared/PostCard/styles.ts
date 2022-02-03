import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        cursor: "pointer",
        margin: "20px 0",
        flexBasis: "45%",
        borderRadius: "12px",
        position: "relative",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        "@media only screen and (max-width: 620px)": {
            flexBasis: "100%",
        }
    },  
    image: {
        position: "absolute",
        width: "100%",
        height: "auto",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    imageWrapper: {
        width: "50%",
        overflow: "hidden",
        height: "270px",
        position: "relative",
        cursor: "pointer",
        borderRadius: "12px 0 0 12px",
        "@media only screen and (max-width: 620px)": {
            width: "100%",
            borderRadius: "12px 12px 0 0",
            height: "180px"
        }
    },
    title: {
        color: "black",
        textDecoration: "none",
        fontSize: "24px",
        fontWeight: "bold"
    },
    featured: {
        width: "100%",
        flexBasis: "100%",
        borderColor: theme.palette.primary.toString()
    },
    contentWrapper: {
        position: "relative",
        width: "45%",
        padding: "24px 12px",
        "@media only screen and (max-width: 620px)": {
            width: "auto",
        }
    }

});