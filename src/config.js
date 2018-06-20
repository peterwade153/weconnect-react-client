import axios from "axios";

const instance = axios.create({
    baseURL:"https://weconnect-my.herokuapp.com/api/v2/"
});

// picking up the token

instance.interceptors.request.use((config)=>{
    config.headers.Authorization = localStorage.getItem("Token");
    return config;
});

export default instance