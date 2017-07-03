import Reducers from '../reducers/index';
import {createStore} from 'redux';
export function configStore(initState) {
    return createStore(Reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined)
}