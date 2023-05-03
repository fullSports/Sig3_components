import axios from 'axios';
//https://back-end-full-sports.vercel.app/
const apiFullSports = axios.create({
	baseURL: 'http://localhost:5000/',
});
apiFullSports.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default apiFullSports;
