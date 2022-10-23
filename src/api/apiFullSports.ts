import axios from "axios";

const apiFullSports = axios.create({
    baseURL: "http://localhost:5000/"
});
export default apiFullSports;