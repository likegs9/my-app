import * as Types from '../action-type/store.js';
let initstate=[];
export function store(state=initstate,action){
    switch (action.type){
        case Types.STORE_Add:
            state.push(action.data)
            return state
            break;
        case Types.STORE_REMOVE:
            state=state.filter((item)=>{
                return item!=action.data
            })
            return state
        default:
            return state
    }

}