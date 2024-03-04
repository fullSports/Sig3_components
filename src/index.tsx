import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './utils/Hooks/ThemeContext';
import { Analytics } from '@vercel/analytics/react';
import axios from 'axios';
const root = createRoot(document.getElementById('root') as HTMLElement);
setInterval(async () => {
	const token = await axios.post(
		'https://back-end-full-sports.vercel.app/auth/login-app',
		{
			clientID: String(process.env.REACT_APP_CLIENTID),
			clientSecret: String(process.env.REACT_APP_CLIENSECRET),
		}
	);
	sessionStorage.setItem('access_token', token.data.access_token);
}, 7000);
root.render(
	<>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
		<Analytics />
	</>
);
