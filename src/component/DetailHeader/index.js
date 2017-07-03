import React from 'react';
import './index.less'
export default class DetailHeader extends React.Component{
    render(){
        return(
            <div className="header">
               <span className="iconfont icon-back" onClick={()=>this.go()}></span>
               <span>{this.props.title}</span>
            </div>
        )
    }

    go(){
        if(this.props.route){
            this.props.history.push(this.props.route)
        }else{
            this.props.history.go(-1)
        }
    }
}