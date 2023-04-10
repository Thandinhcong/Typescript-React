import axios from "axios";

// let token = JSON.parse(localStorage.getItem("user") as string);
const instance = axios.create({

    baseURL: "http://localhost:8082/api/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 3000
})
export default instance;