import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        height: "120px",
        width: "100%",
        zIndex: 950,
        position: "relative"
    },
    logo: {
        color: theme.palette.primary.toString(),
        cursor: "pointer",
        userSelect: "none",
        fontSize: "42px",
        fontFamily: "'Sarabun', sans-serif",
        margin: 0
    },
    container: {
        maxWidth: theme.boundaries.width,
        margin: "0 auto",
        padding: `0 ${theme.boundaries.padding}`   
    },
    icon: {
        margin: "0 5px"
    },



    input: {
        outline: "none",
        border: 0,
        height: "64px",
        fontSize: "28px",
        backgroundColor: theme.palette.background.toString(),
        width: "100%",
        
    },
    
    inputWrapper: {
        padding: "0 32px",
        boxShadow: theme.shadow[1],
        backgroundColor: theme.palette.background.toString(),
        borderRadius: "32px",
    },

    outputWrapper: {
        position: "relative",
        marginTop: "15px",
        backgroundColor: theme.palette.background.toString(),
        borderRadius: "8px",
        height: "calc(80vh - 64px)",
        overflowY: "auto",
        padding: "32px 24px"
    },

    nothingText: {
        margin: "10px",
    },

    empty: {
        width: "100%",
        height: "100%",
        "& img": {
            width: "300px",
        }
    }
    
});