import { getUserInfo as _getUserInfo } from '@/api/user'

export function getUserInfo(callback){
    _getUserInfo().then(function(response){
        console.log(response)
    })
    callback();
}

export function login(){

}

export function register(){

}

export function requireReset(){

}

export function reset(){

}

export function logout(){

}