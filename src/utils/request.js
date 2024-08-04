import axios from "axios";

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL || '/',
    timeout: 3000 // ms
})

//requests interceptor
service.interceptors.request.use(
    config => {
        //add or do something befroe request is sent
        config.headers.set("Access-Control-Allow-Origin","*");
        config.headers.set("Access-Control-Allow-Methods", "GET, POST");
        config.headers.set("Access-Control-Allow-Headers", "Content-Type");
        return config;
    },
    error => {
        console.log('error in request interceptor')
        return Promise.reject(error)
    }
)

//response interceptor
service.interceptors.response.use(
    response => {
        const data = response.data;

        return data;
    },
    error => {
        return Promise.reject(error);
    }
)

export default service