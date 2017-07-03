import {get,post} from './index.js'

export function getSerch(query){
    return get('/api/search/all/'+query)
}