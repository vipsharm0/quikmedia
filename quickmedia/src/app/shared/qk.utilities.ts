import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class utils{
    
    private wrapkey(key){
       return `--:${key}:--`;
    }
    encryptdata(keys, value){
        var key = CryptoJS.enc.Utf8.parse(keys);
        var iv = CryptoJS.enc.Utf8.parse(keys);
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), this.wrapkey(key),
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }

    decryptdata(keys, value){
        var key = CryptoJS.enc.Utf8.parse(keys);
        var iv = CryptoJS.enc.Utf8.parse(keys);
        var decrypted = CryptoJS.AES.decrypt(value, this.wrapkey(key), {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    
        return decrypted.toString(CryptoJS.enc.Utf8)
    }
}