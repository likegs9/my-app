import React from 'react';
import './index.less';
import Count from './Count';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as Actions from '../../actions/userInfo.js';

class BuyDetail extends React.Component {
    constructor(){
        super();
        this.state={
            input:1,
        }
    }
    render() {
        let {item}=this.props;
        return (
            <div>
                <div className="buy-item1">
                    <img src={item.img}/>
                    <div className="buy-info">
                        <h3>{item.title}</h3>
                        <p>剩余数量：{item.count}</p>
                    </div>
                    <div className="buy-price">¥{item.price}</div>
                </div>
                <div className="buy-count">
                    <span>购买数量:</span>
                    <Count add={()=>this.add()} mins={()=>this.mins()} input={this.state.input}/>
                </div>
                <div className="total-count">
                    <div>总价：<span>¥</span><span className="total-count-price">{this.total()}</span></div>
                    <div onClick={()=>this.buy()}>购买</div>
                </div>
            </div>
        )
    }
    buy(){
        let origin=this.props.userInfo
        let result={
            id:this.props.id,
            store:0,
            goods:this.props.item,
            count:this.state.input,
            total:this.total()
        }
        if(this.props.userInfo.userOrder){
            origin.userOrder.push(result);
            this.props.userActions.userOrder(origin);
        }else{
            origin.userOrder=[result]
            this.props.userActions.userOrder(origin)
        }
        this.props.history.push('/user')
    }
    total(){
        return this.state.input*this.props.item.price
    }
    add(){
        if(this.state.input>=this.props.item.count){
            this.setState({
                input:this.props.item.count
            })
        }else{
            this.setState({
                input:this.state.input+1
            })
        }
        this.total()
    }

    mins(){
        if(this.state.input<=1){
            this.setState({
                input:1
            })
        }else{
            this.setState({
                input:this.state.input-1
            })
        }
        this.total()
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
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(BuyDetail)