import React from 'react';
import './index.less';
import {Link} from 'react-router-dom'
export default class ListItem extends React.Component{
    render(){
        let {img,title,subTitle,distance,id,price,number}=this.props.item;
        return(
            <div className="item" style={{borderTop:"1px solid #f9f9f9"}}>
                <Link to={'/detail/'+id}>
                    <img src={img} title={title}/>
                    <div className="center">
                        <p>{title}</p>
                        <p>{subTitle}</p>
                        <p>¥ {price}</p>
                    </div>
                    <div className="right">
                        <p>距离:</p>
                        <p>{distance}</p>
                        <p>已售数量:</p>
                        <p>{number}</p>
                    </div>
                </Link>
            </div>
        )
    }
}