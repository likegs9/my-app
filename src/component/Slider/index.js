import React,{Component} from 'react';
import './index.less';
import ReactSwipe from 'react-swipe'
import {pubAd} from '../../fetch/getHome.js'
export default class Slider extends React.Component{
    constructor(){
        super();
        this.state={
            index:0,
        }
    }
    componentWillMount(){
        this.prossDate(pubAd())
    }
    prossDate(result){
        result.then(res=>res.json()).then(({data})=>{
            this.setState({
                data:data
            },()=>{

            })

        })
    }
    render(){
        let opts={
            continuous:false,
            callback:(index)=>{
                this.setState({
                    index:index
                })
            }
        }
        return(
            <div>
                {
                   this.state.data?
                       <ReactSwipe className='carousel' swipeOptions={opts}>
                           {
                               this.state.data.map((item,index)=>{
                                   return (
                                       <div className="pub-ad" key={index}>
                                           <img src={item.img}/>
                                       </div>)
                               })
                           }
                       </ReactSwipe>:'正在加载'
                }

                <ul className="opts">
                    <li className={this.state.index==0?'active':''}></li>
                    <li className={this.state.index==1?'active':''}></li>
                    <li className={this.state.index==2?'active':''}></li>
                </ul>
            </div>
        )
    }
}