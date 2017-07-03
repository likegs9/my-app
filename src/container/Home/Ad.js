import React from 'react';
import {getAd} from '../../fetch/getHome'
import './index.less'

export default class Ad extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return(
            <div className="ad">
                <h3>超值特惠</h3>
                {this.state.data.length?
                   this.state.data.map((item,index)=>{
                       return(<a href={item.link} key={index}>
                           <h4>{item.title}</h4>
                           <h6>{item.lilt}</h6>
                           <img src={item.img} title={item.title}/>
                       </a>)
                   }):
                   <div>正在加载</div>
                }
                <div className="clear"></div>
            </div>
        )
    }
    componentDidMount(){
        getAd().then(res=>res.json()).then((data)=>{
            this.setState({
                data:data
            })
        })
    }
}