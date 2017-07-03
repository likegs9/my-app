import React from 'react';
import Star from '../Star/index';
import './index.less'
export default class TalkItem extends React.Component{
    render(){
        let {data}=this.props;
        return(
            <div className="item">
               <p>{data.username}</p>
               <p>{data.comment}</p>
               <div><Star star={data.star}/></div>
            </div>
        )
    }
}