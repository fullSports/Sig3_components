import React, { useContext, createContext, useState, useEffect } from 'react';
type PropsConext = {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
};
const defaultvalue = {
	theme: localStorage.getItem('theme') !== 'light' ? 'dark' : 'light',
	setTheme: () => {},
};
const ThemeContext = createContext<PropsConext>(defaultvalue);

interface IProps {
	children: React.ReactNode;
}
const ThemeContextProvider: React.FC<IProps> = ({ children }) => {
	const [theme, setTheme] = useState(defaultvalue.theme);
	console.log(theme);

	useEffect(() => {
		const root = window.document.documentElement;
		const removeOldTheme = theme === 'light' ? 'dark' : 'light';
		root.classList.add(removeOldTheme);
		root.classList.remove(theme);
		localStorage.removeItem('theme');
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
export { ThemeContextProvider };
export default ThemeContext;
export function useTheme() {
	return useContext(ThemeContext);
}
