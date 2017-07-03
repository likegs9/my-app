import React from 'react';

export default class Star extends React.Component{
    constructor(props){
        super(props);
        let ary=[];
        //使用的是传递过来的属性不用加this获取
        for(var i=1;i<=5;i++){
            if(i<=props.star){
                ary.push(true)
            }else{
                ary.push(false)
            }
        }
        this.state={
            ary
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.ary.map((item,index)=>{
                        return (item?<i className="iconfont icon-favorite" style={{color:'red'}}  key={index}></i>:<i className="iconfont icon-favorite"  key={index}></i>)
                    })
                }
            </div>
        )
    }
}