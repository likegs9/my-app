import {get} from './index.js';

export function getInfo(id) {
    return get('/api/detail/info/'+id)
}

export function getTalk(id,page){
    return get('/api/detail/talk/'+id+'/'+page)
}