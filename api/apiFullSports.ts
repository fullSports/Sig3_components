import axios from 'axios';
//https://back-end-full-sports.vercel.app/

const apiFullSports = axios.create({
	baseURL: 'https://back-end-full-sports.vercel.app/',
	headers: {
		Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
	},
});
apiFullSports.defaults.headers['Access-Control-Allow-Origin'] = '*';
export default apiFullSports;
