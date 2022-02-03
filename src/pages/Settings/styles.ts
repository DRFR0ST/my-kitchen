import { ITheme } from "../../types";

export default (theme: ITheme) => ({

    root: {
        
    },

    container: {
        maxWidth: theme.boundaries.width,
        margin: "0 auto",
        padding: `0 ${theme.boundaries.padding}`   
    },





});
