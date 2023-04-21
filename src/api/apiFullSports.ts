import axios from 'axios';
// const url = "https://back-end-full-sports.vercel.app"  || "http://localhost:5000/";
const apiFullSports = axios.create({
	baseURL: 'https://back-end-full-sports.vercel.app/',
});
apiFullSports.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default apiFullSports;
