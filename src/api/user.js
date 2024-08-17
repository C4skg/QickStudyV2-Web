import request from '@/utils/request'

export function login(data){
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function logout(){
    return request({
        url: '/user/logout',
        method: 'get'
    })
}

export function register(data){
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}

export function sendEmail(data){
    return request({
        url: "/user/register/emailCaptch",
        method: 'post',
        data
    })
}

export function doregister(data){
    return request({
        url: '/user/register/doregister',
        method: 'post',
        data
    })
}

export function getUserInfo(data){
    return request({
        url: '/user/getUserInfo',
        method: 'post',
        data
    })
}