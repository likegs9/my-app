import React from 'react';
import {getTalk} from '../../fetch/getDetail.js';

import TalkCompoment from '../../component/TalkCompoment/index';
import LoadMore from '../../component/LoadMore/index'
export default class Talk extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            isLoading:true,
            hasMore:true,
            page:0
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.data?<TalkCompoment data={this.state.data}/>:<div>正在加载</div>
                }
                <LoadMore hasMore={this.state.hasMore} loadMore={()=>this.loadMore()} isLoading={this.props.isLoading}/>
            </div>
        )
    }

    componentDidMount(){
        this.processDate(getTalk(this.props.id,0))
    }

    processDate(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                data:this.state.data.concat(data),
                hasMore,
                //第一次可执行加载更多,之后加载完数据,改变isLoading:false,当页面滚动触发<LoadMore/>的滚动事件,先判断isLoading:false值 然后才会执行loadMore方法,先让isLoading,执行回调的时候加载完数据局在改为false
                isLoading:false
            })
        })
    }

    loadMore(){
        this.setState({
            page:this.state.page+1,
            //执行加载更多方法必须在上一次加载更多完成之后才能执行
            isLoading:true,
        },()=>{
            this.processDate(getTalk(this.props.id,this.state.page));
        })
    }

}