import axios from 'axios';
//https://back-end-full-sports.vercel.app/
setInterval(async () => {
	const teste = await axios.post('http://localhost:5000/auth/login-app', {
		clientID: String(process.env.REACT_APP_CLIENTID),
		clientSecret: String(process.env.REACT_APP_CLIENSECRET),
	});
	console.log(teste.data.access_token);
	sessionStorage.setItem('access_token', teste.data.access_token);
}, 7200);

const apiFullSports = axios.create({
	baseURL: 'http://localhost:5000/',
	headers: {
		Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
	},
});
apiFullSports.defaults.headers['Access-Control-Allow-Origin'] = '*';
export default apiFullSports;
