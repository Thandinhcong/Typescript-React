import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8082/api/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQwMzRiYjQwMTdmMTcyNWFmMjI0MCIsImlhdCI6MTY4MDc3MTU4NywiZXhwIjoxNjgwODU3OTg3fQ.JPjZmMDIpHPrhEWt6hRU1_PtN1hTW6tMrnKVr4hkjBA "
    },
    timeout: 3000
})
export default instance;