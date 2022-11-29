import {useContext, createContext, useState, useEffect} from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({children}){
    
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") !== "light" ? "dark" : "dark"
    );

    console.log(theme)

    useEffect(() =>{
        const root = window.document.documentElement;

        const removeOldTheme = theme === "light" ? "dark" : "light"

        root.classList.add(removeOldTheme)
        root.classList.remove(theme)

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