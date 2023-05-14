import axios from "axios";

const BASE_URL = "http://localhost:9100/validateuser";
export function validateUser(data) {
  
  //return axios.post(BASE_URL, data);
  return axios.get(BASE_URL,{params: {data} });
}
