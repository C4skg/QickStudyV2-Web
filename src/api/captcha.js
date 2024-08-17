import request from '@/utils/request'

export function getCaptchaImage(){
    return request({
        url: '/user/getCaptchaImage',
        method: 'get'
    })
}

export function updateCaptchaImage(){
    return request({
        url: '/user/updateCaptch',
        method: 'get'
    })
}