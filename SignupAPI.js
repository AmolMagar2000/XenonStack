// import axios from 'axios';
const BASE_URL = "http://localhost:9100/signup";

// export async function saveStudent(student){
//     return axios.post(BASE_URL,'student')
// }

// export async function getAllStudents(){
//     return axios.get(BASE_URL);
// }

export async function saveUser(user) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(user);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
