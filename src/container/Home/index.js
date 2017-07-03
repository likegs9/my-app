import React from 'react';
import {connect} from 'react-redux';
import HomeHeader from '../../component/HomeHeader/index.js';
import Slider from '../../component/Slider/index';
import Ad from './Ad';
import List from './List'
import {pubAd} from '../../fetch/getHome.js'
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    render(){
        //从根路由跳转过来的组件,默认会传this.props.history
        return(
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history} query={this.querySearch.bind(this)} />
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }

    querySearch(query){
        let reg=/^\s*$/g
        if(reg.test(query)){
            return
        }
        this.props.history.push('/search/all/'+query)
    }
}

export default connect(
    (state)=>{
        return{
            userInfo:state.userInfo
        }
    }
)(Home)