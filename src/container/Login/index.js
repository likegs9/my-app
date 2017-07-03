import React from 'react';
import DetailHeader from '../../component/DetailHeader/index'
import LoginComponent from '../../component/LoginComponent/index';
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo'
import {bindActionCreators} from 'redux'
class Login extends React.Component {
    constructor(){
        super();
        this.state={
            login:false//默认不显示登录组件
        }
    }
    render() {
        return (
            <div>
                <DetailHeader history={this.props.history} title="登录" route="/"/>
                {
                    this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div>正在加载</div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.checkLogin()
    }

    checkLogin(){
        if(this.props.userInfo.username){
            return this.props.history.push('/user')
        }
        this.setState({
            login:true
        })
    }

    login(username){
        this.props.userActions.userLogin({username});
        if(this.props.match.params.route){
            this.props.history.push(decodeURIComponent(this.props.match.params.route))
        }else{
            this.props.history.push('/user')
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
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(Login)