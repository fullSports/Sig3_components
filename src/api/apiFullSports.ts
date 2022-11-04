import axios from "axios";

const apiFullSports = axios.create({
    baseURL: process.env.APP_URL || "http://localhost:5000/"
});
apiFullSports.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default apiFullSports;