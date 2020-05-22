import axios from "axios";

//config defaults for instance
const instance = axios.create({
    baseURL:"https://weconect-api.herokuapp.com/api/v2"
    // baseURL:"http://127.0.0.1:5000/api/v2/"
});

instance.interceptors.request.use((config)=>{
    config.headers.Authorization = localStorage.getItem("Token");
    return config;
});

export default instance;
