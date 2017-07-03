import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
import {store} from './store.js'

export default combineReducers({
    userInfo:userInfo,
    store:store
})