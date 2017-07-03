import React from 'react';
import DetailHeader from '../../component/DetailHeader/index'
import Info from './Info';
import Buy from './Buy';
import Talk from './Talk';
import {connect} from 'react-redux';
import * as Actions from '../../actions/store.js'
import {bindActionCreators} from 'redux'
 class Detail extends React.Component{
    constructor(){
        super();
        this.state={
            store:false
        }
    }
    render(){
        return(
            <div>
                <DetailHeader history={this.props.history} title='详情'/>
                <Info id={this.props.match.params.id}/>
                <Buy buy={()=>this.buy()} id={this.props.match.params.id} store={this.store.bind(this)} storeState={this.state.store}/>
                <Talk id={this.props.match.params.id}/>
            </div>
        )
    }

    checkLogin(){
        if(this.props.userInfo.username){
            return true
        }else{
            return false
        }
    }

    buy(){
        if(this.checkLogin()){
            this.props.history.push('/buy/'+this.props.match.params.id)
        }else{
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
        }
    }

    store(){
        if(!this.checkLogin()){
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
            return;
        }
        let id=this.props.match.params.id;
        if(!this.state.store){
            this.props.storeAction.add(id)
        }else{
            this.props.storeAction.remove(id)
        }
        this.setState({
            store:!this.state.store
        })
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
            storeAction:bindActionCreators(Actions,dispatch)
        }
    }
)(Detail)