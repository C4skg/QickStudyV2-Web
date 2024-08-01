import axios from "axios";

const service = axios.create({
    baseURL: "",
    timeout: 5000 // ms
})

//requests interceptor
service.interceptors.request.use(
    config => {
        //add or do something befroe request is sent
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

    },
    error => {
        
    }
)

export default service