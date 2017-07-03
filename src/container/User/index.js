import React from 'react';
import DetailHeader from '../../component/DetailHeader/index';
import UserInfo from '../../component/UserInfo/index';
import OrderLIst from '../../component/OrderLIst/index';
import {connect} from 'react-redux';
import {content} from '../../fetch/getHome.js'
let style={width:"100%",height:"50px",textAlign:"center",color:"#ccc",lineHeight:"50px"}
 class User extends React.Component {
    componentDidMount(){
        this.checkLogin()
    }
    checkLogin(){
        if(!this.props.userInfo.username){
            this.props.history.push('/Login')
        }
    }
    render() {
        return (
            <div>
                <DetailHeader title="用户中心" history={this.props.history} route="/"/>
                <UserInfo data={this.props.userInfo}/>
                {
                    this.props.userInfo.userOrder?<OrderLIst data={this.props.userInfo} sub={this.submitBtn.bind(this)}/>:<div style={style}>您还没有订单哦~</div>
                }

            </div>
        )
    }

     submitBtn(id,contentValue,callback){
         content({id,contentValue}).then(res=>res.json()).then((item)=>{
             callback(item)
         })

     }
}

export default connect(
    state=>{
        return{
            userInfo:state.userInfo
        }
    }
)(User)