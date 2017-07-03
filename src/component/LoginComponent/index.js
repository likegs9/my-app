import React from 'react';
import './index.less'
export default class LoginComponent extends React.Component {
    constructor(){
        super();
        this.state={
            val:''
        }

    }
    render() {
        return (
            <div className="login-input">
                <p>用户名：</p>
                <input type="text" value={this.state.val}  onChange={(e)=>this.getVal(e)} placeholder="请输入用户名"/>

                <button onClick={()=>this.login()}>登录</button>
            </div>
        )
    }
    getVal(e){
        this.setState({
            val:e.target.value
        })
    }

    login(){
        this.props.login(this.state.val)
    }
}