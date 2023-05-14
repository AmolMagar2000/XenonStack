import axios from "axios";


const BASE_URL = "http://localhost:9100";
export function AddContactus(contact){
    console.log(contact);
    return axios.post(`${BASE_URL}/contactus`,contact)
}

