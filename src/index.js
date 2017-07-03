import React from 'react';
import ReactDom from 'react-dom';
import {configStore} from './store/index'
import {Provider} from 'react-redux'
import App from './container/index.js';
import './reset.less'
let store=configStore()

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.querySelector('#root'))