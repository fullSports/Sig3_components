import axios from "axios";

const apiFullSports = axios.create({
    baseURL: "http://localhost:5000/"
});
apiFullSports.defaults.headers.post['Acess-Control-Allow-Origin'] = '*';
export default apiFullSports;