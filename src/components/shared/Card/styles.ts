import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        position: "relative",
        width: "32%",
        minWidth: "310px",
        height: "auto",
        cursor: "pointer",
        borderRadius: "8px",
        boxShadow: theme.shadow[1],
        margin: "10px 5px",
        backgroundColor: "#FFF",
        //flexGrow: 1,
        "@media (max-width: 620px)": {
            width: "100%",
        },
        "@media (min-width: 621px and max-width: 970)": {
            width: "50%",
        },
    },
    
    imageWrapper: {
        position: "relative",
        borderRadius: "8px 8px 0 0",
        flex: 1, 
        width: "100%",
        height: "300px",
        overflow: "hidden",
    },

    contentWrapper: {
        backgroundColor: "#FFF",
        padding: "10px 12px"
        
    },
    
    footerWrapper: {
        backgroundColor: "rgba(200, 200, 200, 0.15)",
        borderTop: "1px solid rgba(0, 0, 0, 0.02)",
        borderRadius: "0 0 8px 8px",
        padding: "8px 16px",
        "& p": {
            margin: 0,
            opacity: 0.6,
            fontSize: "14px"
        }
    },

    footerAvatar: {
        width: "24px",
        height: "24px",
        borderRadius: "24px",
        marginRight: "8px",
    },

    image: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "auto",
        height: "300px",
        userSelect: "none"
    },

    featured: {
        width: "100%"
    },

    badgeRoot: {
        display: "flex",
    
        justifyContent:"center",
        alignItems: "center",
        position: "absolute",
        right: "15px",
        top: "10px",
        padding: "0 12px",
        fontWeight: "bold",
        height: "32px",
        width: "auto",
        minWidth: "64px",
        maxWidth: "30%",
        borderRadius: "32px",
        fontSize: "14px",
        backgroundColor: theme.palette.primary.toString(),
        color: theme.palette.primary.isLight() ? "#000" : "#FFF",
        zIndex: 900,
        boxShadow: theme.shadow[2]
    }

});