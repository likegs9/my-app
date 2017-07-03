import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/userInfo';
import {getStorage} from '../local/index';
import RouterMap from '../routers/index';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            done:false,
            name:'上海'
        }
    }
    render(){
        return(
            <div>
                {this.state.done?<RouterMap/>:<div>正在加载</div>}
            </div>
        )
    }
    getLocaion(fn,that) {
        let myCity= new BMap.LocalCity();
        myCity.get(that.getCityByIP.bind(that));
    }

    getCityByIP(rs){
        let name=rs.name;
        let nameV=confirm(`是否允许访问您的地理位置？`);
        if(nameV){
            this.setState({
                name:name
            },()=>{
                this.props.userActions.userInfoActions({
                    cityName:this.state.name
                })
            })
        }else{
            this.setState({
                name:'上海'
            },()=>{
                this.props.userActions.userInfoActions({
                    cityName:'上海'
                })
            })
        }
    }
    componentDidMount(){
        let city=getStorage('cityName');
        if(city===null){
            this.getLocaion(this.getCityByIP,this);
        }
        this.setState({
            done:true
        })
    }
}

export default connect(
    (state)=>{
        //获取的是store里初始化reducer里的state
        return{
            userInfo:state.userInfo
        }
    },
    (dispatch)=>{
        return{
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)