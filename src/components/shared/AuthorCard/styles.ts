import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        backgroundColor: theme.palette.background.darken(0.05).toString(),
        borderRadius: "8px"
    },
    container: {
        maxWidth: theme.boundaries.width,
        margin: `0 auto`,
        padding: "12px 18px"
    },
    avatar: {
        width: "64px",
        height: "64px",
        borderRadius: "64px",
        marginRight: "18px",
    },
    contentWrapper: {
        "& h3": {
            margin: 0
        },
        "& p": {
            margin: 0
        }
    }

});