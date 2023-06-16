import axios from 'axios';

const UpdateToken = async () => {
	return axios
		.post('https://back-end-full-sports.vercel.app/auth/login-app', {
			clientID: String(process.env.REACT_APP_CLIENTID),
			clientSecret: String(process.env.REACT_APP_CLIENSECRET),
		})
		.then((res) => {
			sessionStorage.setItem('access_token', res.data.access_token);
			window.location.reload();
		});
};
export default UpdateToken;
