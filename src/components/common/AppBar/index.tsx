import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { useHistory, useLocation } from "react-router-dom";
import { IconButton, Flex } from "components/shared";
import SearchInput from "./SearchInput";

type TAppBarProps = {

}

const title_map = {
    "/settings": <h2 style={{marginLeft: "8px"}}>Settings</h2> 
}

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const AppBar = (props: TAppBarProps) => {
    const [searchOpen, setSearchOpen] = useState(false);

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const navigate = (path: string) => () => {
        history.push(path);
    }

    // Set color to white if on post page.
    const navButtonStyle = {
        color: location.pathname.indexOf("/p/") > -1 ? "#FFF" : "#000"
    }

    // @ts-ignore
    const pageTitle = title_map[location.pathname] || "";

    return <>
        <Flex alignItems="center" width="100%" className={ classes.root }>
            <Flex justifyContent="space-between" alignItems="center" width="100%" className={ classes.container }>
                {location.pathname === "/" ? 
                    <h1 className={ classes.logo } onClick={navigate("/")}>Sourcer</h1> 
                    // @ts-ignore -- wtf?
                    :   <Flex alignItems="center">
                            <IconButton style={navButtonStyle} name="arrow-left" onClick={navigate("/")} />
                            {pageTitle}
                        </Flex>}
                { location.pathname !== "/settings" && 
                <Flex justifyContent="flex-end" alignItems="center">
                    <IconButton className={ classes.icon } style={navButtonStyle} name="search" onClick={() => setSearchOpen(true)} />
                    {/* <IconButton className={ classes.icon } style={navButtonStyle} name="cog" onClick={navigate("/settings")} /> */}
                </Flex> }
            </Flex>
        </Flex>
        <SearchInput open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
}

export default AppBar;
