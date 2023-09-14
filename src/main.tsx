import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './utils/Hooks/useTheme';
import { Analytics } from '@vercel/analytics/react';
import axios from 'axios';
import React from 'react';
import './index.css'
setInterval(async () => {
  const token = await axios.post(
    'https://back-end-full-sports.vercel.app/auth/login-app',
    {
      clientID: String(process.env.VITE_APP_CLIENTID),
      clientSecret: String(process.env.VITE_APP_CLIENSECRET),
    }
  );
  console.log('token atualizado');
  sessionStorage.setItem('access_token', token.data.access_token);
}, 170000);
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
      <Analytics />
    </React.StrictMode>
  </>
);
