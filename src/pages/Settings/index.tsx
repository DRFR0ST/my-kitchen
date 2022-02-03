import React from 'react';
import styles from "./styles";
import { createUseStyles } from 'react-jss';
import { useLittera } from "react-littera";

const useStyles = createUseStyles(styles);

const translations = {
    changeLanguage: {
        pl_PL: "Zmień język",
        en_US: "Change language"
    }
}

const Settings = () => {
    const classes = useStyles();
    const [translated, , setLanguage] = useLittera(translations);

    return <div>

            <div className={classes.container}>
                
            <h4>{translated.changeLanguage}</h4>
            <button onClick={() => setLanguage("pl_PL")}>Polski</button>
            <button onClick={() => setLanguage("en_US")}>English</button>

            </div>


    </div> 

    
}



export default Settings;