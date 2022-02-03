import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        position: "relative",
        backgroundColor: theme.palette.background.toString(),
        boxShadow: theme.shadow[1],
        borderRadius: "8px",
        //padding: "0 20px",
        width: "100%",
        margin: "10px 0",
        cursor: "pointer",
        height: "90px",
    },

    imageWrapper: {
        width: "180px",
        height: "90px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px 0 0 8px"
    },

    image: {
        position: "absolute",
        width: "auto",
        height: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },

    contentWrapper: {
        width: "100%", height: "90px", position: "relative"
    },

    footerWrapper: {
        backgroundColor: "rgba(200, 200, 200, 0.15)",
        borderTop: "1px solid rgba(0, 0, 0, 0.02)",
        padding: "0 24px",
        "& p": {
            margin: 0,
            opacity: 0.6,
            fontSize: "14px"
        }
    },

    avatar: {
        width: "24px",
        height: "24px",
        borderRadius: "24px",
        marginRight: "8px",
    },

});