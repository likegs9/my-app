import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import Home from '../container/Home/index';
import Detail from '../container/Detail';
import Login from '../container/Login'
import BuyComponent from '../container/Buy';
import User from '../container/User';
import City from '../container/City';
import Search from '../container/Search';

export default class RouterMap extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/Login/:route?' component={Login}/>
                        <Route path='/buy/:id' component={BuyComponent}/>
                        <Route path='/user' component={User}/>
                        <Route path='/city' component={City}/>
                        <Route path='/search/:kind/:keywords?' component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}