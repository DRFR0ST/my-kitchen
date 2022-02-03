import Color from "color";

declare module 'classnames';

export interface ITheme {
    palette: {
        primary: Color<string>,
        secondary: Color<string>,
        background: Color<string>
    }

    boundaries: {
        width: string,
        padding: string,
        rightOffset: string
    }

    shadow: string[]
}

// export type TThemeColor = {
//     main: Color<string>;
//     darker: string;
//     lighter: string;
//     rgb: { r: number, g: number, b: number } | null
//     text: string;
//     inverted: string;
// }
