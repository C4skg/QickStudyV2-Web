import CryptoJS from "crypto-js";

const DES_KEY = "db4849a8-dcc7-4fee-a4da-93b494d375a4";

export function DES_Encrypt(data){
    return CryptoJS.DES.encrypt(data,DES_KEY).toString();
}

export function DES_Decrypt(data){
    return CryptoJS.DES.decrypt(data,DES_KEY).toString(
        CryptoJS.enc.Utf8
    );
}