import axios from 'axios';
//https://back-end-full-sports.vercel.app/
const apiFullSports = axios.create({
	baseURL: 'https://back-end-full-sports.vercel.app/',
});
apiFullSports.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default apiFullSports;
