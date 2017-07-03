import * as Types from '../action-type/userInfo';
let initstate={cityName:'位置'};
export function userInfo(state=initstate,action) {
    switch (action.type){
        case Types.UPDATE_CITY:
            return action.data;
        case Types.UPDATE_LOGIN:
            return Object.assign(state,action.data)
        case Types.UPDATE_ORDER:
            return action.data;
        default :
            return state
    }
}