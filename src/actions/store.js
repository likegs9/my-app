import * as Types from '../action-type/store.js'

export function add(data) {
    return{
        type:Types.STORE_Add,
        data:data
    }
}

export function remove(data) {
    return{
        type:Types.STORE_REMOVE,
        data:data
    }
}