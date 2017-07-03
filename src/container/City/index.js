import React from 'react';
import DetailHeader from '../../component/DetailHeader/index'
import './index.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as Actions from '../../actions/userInfo.js'
class City extends React.Component {
    render() {
        return (
            <div>
                <DetailHeader title="选择城市" history={this.props.history}/>
                <h4>请选择城市:</h4>
                <ul className="city-list" ref={ref=>{this.city=ref}} onClick={this.chioce.bind(this)}>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>广东</li>
                    <li>天津</li>
                    <li>河南</li>
                    <li>河北</li>
                    <li>广东</li>
                    <li>深圳</li>
                    <li>湖北</li>
                    <li>江苏</li>
                    <li>江西</li>
                    <li>西藏</li>
                    <li>安徽</li>
                    <li>新疆</li>
                    <li>湖南</li>
                    <li>浙江</li>
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let cityName=this.props.userInfo.cityName
        let c=Array.from(this.city.getElementsByTagName('li'));
        cityName=c.find((item)=>{
            return item.innerHTML===cityName
        })
        cityName.className='chioce-city'
    }

    chioce(e){
        console.log(e.target.nodeName)
        if(e.target.nodeName === 'LI'){
           this.props.Actions.userInfoActions({cityName:e.target.innerHTML});
           this.props.history.push('/')
        }
    }
}

export default connect(
    state=>{
        return{
            userInfo:state.userInfo
        }
    },
    dispatch=>{
        return{
            Actions:bindActionCreators(Actions,dispatch)
        }
    }
)(City)