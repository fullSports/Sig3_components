import axios from "axios";

const apiFullSports = axios.create({
    baseURL: "https://backend-fullsport.herokuapp.com/"
});
apiFullSports.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default apiFullSports;