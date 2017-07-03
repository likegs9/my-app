//处理不兼容fatch问题包
import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    })
}

function parse(obj) {
    let ary=[];
    for(let [k,v] of Object.entries(obj)){
        ary.push(`${k}=${v}`)
    }
    return ary.join('&')
}

export function post(url,obj) {
    return fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:parse(obj)
    })
}