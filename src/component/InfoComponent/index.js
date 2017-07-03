import React from 'react';
import Star from '../Star/index';
import './index.less'
export default class InfoComponent extends React.Component{
    render(){
        let {data}=this.props
        return(
            <div className="info">
                <div className="info_top">
                    <img src={data.img}/>
                    <div className="info-center">
                        <h3>{data.title}</h3>
                        <Star star={data.star}/>
                        <p>{data.subTitle}</p>
                    </div>
                    <p className="price">¥{data.price}</p>
                </div>
                <div  className="trans" dangerouslySetInnerHTML={{__html:data.desc}}>
                </div>
            </div>
        )
    }
}