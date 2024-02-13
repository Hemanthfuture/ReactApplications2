import React from "react";
import './style.css';

import UseLocalStorage from "./UseLocalStorage"

export default function ChangeTheTheme(){

    const [theme,setTheme] = UseLocalStorage('theme','light');
    function handleTheme(){
        setTheme(theme==='dark'?'light':'dark');
    }
    console.log(theme);

    return(
        <div className="themecontainer" dark_theme={theme}>
            <div className="changingTheme">

            <p>
                Hello World!
            </p>
            <button onClick={handleTheme}  >Change Theme</button>
            </div>
        </div>
    )
}


