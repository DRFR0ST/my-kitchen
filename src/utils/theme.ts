import { ITheme } from "../types";
import Color from "color";

class DynamicTheme implements ITheme {

    palette = {
        primary: Color("#0E3D44"),
        secondary: Color("#94E79D"),
        background: Color("#f8f8f8")
    }

    boundaries = {
        width: "1240px",
        padding: "24px",
        rightOffset: getRightOffset(1240, 24) + "px"
    }

    shadow = [
        "0",
        "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    ]
    
}

const getRightOffset = (maxWidth: number, defaultOffset: number) => {
    if(maxWidth >= window.innerWidth) return defaultOffset;
    return (((window.innerWidth - maxWidth)- 16)/2) || 24;
}

export default DynamicTheme;