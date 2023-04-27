import axios from 'axios';
const apiFullSports = axios.create({
	baseURL: 'https://back-end-full-sports.vercel.app/',
});
apiFullSports.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default apiFullSports;
