import request from '@/utils/request'

export function login(data){
    return request({
        url: 'api/user/login',
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

export function signin(data){
    return request({
        url: '/user/signin',
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