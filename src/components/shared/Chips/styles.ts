import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        position: "relative",
        display: "block",
        margin: "0 0 5% 0",
        overflowX: "auto",
        overflowY: "hidden",
        padding: "0 0 15px 0",

        "&:hover": {
            '&::-webkit-scrollbar': {
                backgroundColor: theme.palette.background.toString(),
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.primary.toString() // TODO: theme.palette.background.darker,
            }
        },

        '&::-webkit-scrollbar': {
            height: "6px",
            backgroundColor: "transparent",
            transition: "backgroundColor 255ms ease",
        },

        '&::-webkit-scrollbar-thumb': {
            borderRadius: "10px",
            backgroundColor: "transparent", // TODO: theme.palette.background.darker,
            transition: "backgroundColor 255ms ease",
        }
    },

    chipWrapper: {
        padding: "0px",
        margin: "0px",
    },
    
    chip: {
        position: "relative",
        margin: "0 4px",
        float: "left",
        // backgroundColor: "rgba(0,0,0,.10)",
        border: "1px solid rgba(0,0,0,.10)",
        borderRadius: "32px",
        height: "32px",
        width: "auto",
        paddingRight: "16px",
        paddingBottom: "0px",
        lineHeight: "32px",
        transition: "all 0.2s ease",
        listStyle: "none",
        cursor: "pointer",
        textShadow: "1px 1px 1px rgba(0,0,0,0.004)",

        "&:hover, &:active": {
            borderColor: theme.palette.secondary.toString(),

            "& svg path": {
                fill: theme.palette.secondary.toString(),
                transition: "all 155ms ease"
            }
        }

        // "&:active": {
        //     backgroundColor: "rgba(0,0,0,.20)",
        //     color: "rgba(0,0,0,.20)"
        //   }
    },

    image: {
        float: "left",
        height: "32px",
        width: "32px",
        borderRadius: "50%",
        userSelect: "none"
    },

    chipText: {
        marginLeft: "8px",
        fontSize: "14px",
        userSelect: "none"
    },

    chipIcon: {
        position: "relative",
        width: "32px",
        height: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "32px",
        marginRight: "4px",
        border: "1px solid rgba(0,0,0,.10)",
        "& svg path": {
            fill: "rgba(0, 0, 0, 0.3)",
            transition: "all 155ms ease"
        }
    }


});