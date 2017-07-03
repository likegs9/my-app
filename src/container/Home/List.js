import React from 'react';
import ListComponent from '../../component/ListComponent/index';
import {getList} from '../../fetch/getHome';
import LoadMore from '../../component/LoadMore/index'
let style={width:"100%",height:"35px",padding:"0 10px",boxSizing:"border-box",color:"#c88825"}
export default class List extends React.Component{
    constructor(){
        super();
        this.state={
            page:0,
            hasMore:true,
            data:[],
            isLoading:true
        }
    }

    render(){
        return(
            <div>
                <h3 style={style}>附近商家</h3>
                {
                   this.state.data.length? <ListComponent data={this.state.data}/>:<div>正在加载</div>
                }
                <LoadMore hasMore={this.state.hasMore} isLoading={this.state.isLoading} loadMore={this.loadMore.bind(this)}/>
            </div>
        )
    }
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true
        },()=>{
            this.processDate(getList(this.props.cityName,this.state))
        })
    }

    componentDidMount(){
        this.processDate(getList(this.props.cityName,0))
    }

    processDate(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                data:this.state.data.concat(data),
                hasMore:hasMore,
                //正在加载数据的时候不让在往下滑了
                isLoading:false
            })
        })
    }
}