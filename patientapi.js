import axios from "axios";


const BASE_URL = "http://localhost:9100/Addpatient";
export function Addpatientdata(data){
    return axios.post(BASE_URL ,data)
}
