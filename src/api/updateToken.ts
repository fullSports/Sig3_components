import axios from 'axios';

const UpdateToken = async () => {
	return axios
		.post('https://back-end-full-sports.vercel.app/auth/login-app', {
			client_id: String(import.meta.env.VITE_APP_CLIENTID),
			client_secret: String(import.meta.env.VITE_APP_CLIENSECRET),
		})
		.then((res) => {
			sessionStorage.setItem('access_token', res.data.access_token);
			window.location.reload();
		});
};
export default UpdateToken;
