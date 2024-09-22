import request from '@/utils/request'

export function getArticleData(){
    return request({
        url: '/article/getdata',
        method: 'get'
    })
}