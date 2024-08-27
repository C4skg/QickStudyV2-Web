import { DES_Encrypt,DES_Decrypt } from "@/utils/crypto";
export default function registerOverrides(current_app){
    // console.log(current_app)
}

(global => {
    //rewrite the JSON
    const _parse = JSON.parse;
    JSON.parse = function(text,defaults=null){
        try{
            return _parse(text);
        }catch(error){
            /**
             * if we catch the error
            */
            return defaults;
        }
    }


    // rewrite the localstorage
    const _setItem = localStorage.setItem;
    localStorage.setItem = function(key,value){
        if ( typeof value !== "string" ){
            value = JSON.stringify(value);
        }
        const _value = DES_Encrypt(value);
        
        return _setItem.call(localStorage,key,_value);
    }
    const _getItem = localStorage.getItem;
    localStorage.getItem = function(key,parse=false){
        const _value = _getItem.call(localStorage,key);
        if (!_value){
            return undefined;
        }

        if (parse){
            return JSON.parse(DES_Decrypt(_value));
        }else{
            return DES_Decrypt(_value);
        }
    }
})((0,eval('this')));