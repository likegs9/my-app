import {get,post} from './index.js'

export function getAd(){
    return get('/api/ad')
}

export function getList(city,page){
    return get('/api/list/'+city+'/'+page)
}

export function pubAd(){
    return get('/api/pubad')
}

export function content(obj){
    return post('/api/content/',obj)
}

