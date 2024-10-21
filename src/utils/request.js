import axios from "axios";
import Swal from "sweetalert2";
import { tr } from "vuetify/locale";

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL || '/api',
    timeout: 5000 // ms
})

//requests interceptor
service.interceptors.request.use(
    config => {
        //add or do something befroe request is sent
        // const url = new URL(config.url);

        // 避免重复发起请求
        // ...
        //

        config.headers.set("Access-Control-Allow-Origin","*");
        config.headers.set("Access-Control-Allow-Methods", "GET, POST");
        config.headers.set("Access-Control-Allow-Headers", "Content-Type");
        config.headers.set("Content-Type","application/x-www-form-urlencoded");
        return config;
    },
    error => {
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
        return response.data;
    },

    error => {
        if (error.code == "ERR_BAD_RESPONSE"){
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `网络连接错误`,
                showConfirmButton: false,
                toast: true,
                timer: 1500
            })
        }
        else if (error.response.status == 404){
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
    },
    complete => {
        // console.log({complete})
    }
)

export default service