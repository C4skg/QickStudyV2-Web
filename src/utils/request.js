import axios from "axios";
import Swal from "sweetalert2";

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL || '/api',
    timeout: 3000 // ms
})

//requests interceptor
service.interceptors.request.use(
    config => {
        //add or do something befroe request is sent
        // const url = new URL(config.url);
        config.headers.set("Access-Control-Allow-Origin","*");
        config.headers.set("Access-Control-Allow-Methods", "GET, POST");
        config.headers.set("Access-Control-Allow-Headers", "Content-Type");
        config.headers.set("Content-Type","application/x-www-form-urlencoded");
        return config;
    },
    error => {
        console.log('error in request interceptor')
        return Promise.reject(error.response)
    }
)

//response interceptor
service.interceptors.response.use(
    response => {
        if(response.status == 500){
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "test",
                showConfirmButton: false,
                toast: true,
                timer: 1500
            });
        }
        const data = response.data;
        return data;
    },
    error => {
        if (error.response.status == 404){
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `未找到接口`,
                showConfirmButton: false,
                toast: true,
                timer: 1500
            })
        }
        return Promise.reject(error);
    }
)

export default service