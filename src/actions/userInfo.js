import * as Types from '../action-type/userInfo';

export function userInfoActions(data) {
    return{
        type:Types.UPDATE_CITY,
        data:data
    }
}

export function userLogin(username) {
    return {
        type:Types.UPDATE_LOGIN,
        data:username
    }
}

export function userOrder(obj) {
    return {
        type:Types.UPDATE_ORDER,
        data:obj
    }
}