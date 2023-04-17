import {useContext, createContext, useState, useEffect} from 'react';
import React from "react"
import PropTypes from 'prop-types';
const ThemeContext = createContext();
ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default function ThemeContextProvider({children}){
    
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") !== "light" ? "dark" : "light"
    );

    console.log(theme)

    useEffect(() =>{
        const root = window.document.documentElement;

        const removeOldTheme = theme === "light" ? "dark" : "light"

        root.classList.add(removeOldTheme)
        root.classList.remove(theme)
        localStorage.removeItem("theme")
        localStorage.setItem("theme", theme)
    },[theme]);
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext);
}