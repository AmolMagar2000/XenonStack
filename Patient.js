import axios from "axios";

const BASE_URL = "http://localhost:9100";
export function getPatientDetailsOnFName(fname){
    return axios.get(`${BASE_URL}/patient-fnameSearch/${fname}`);
}




