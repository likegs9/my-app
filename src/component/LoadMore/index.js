import React from 'react';
import './index.less'
export default class LoadMore extends React.Component{
    render(){
        let {hasMore}=this.props
        return(
            <div className="hasmore">
                {
                    hasMore?<div ref="more">加载更多</div>:<div>我是有底线的</div>
                }
            </div>
        )
    }
    fn(){
        clearInterval(this.timer)
        this.timer=setTimeout(()=>{
            if(this.props.isLoading) return;
            let screen=window.screen.height;
            if(this.refs.more){
                let top=this.refs.more.getBoundingClientRect().top;
                if(top<=screen){
                    this.props.loadMore()
                }
            }

        },50)
    }

    componentDidMount(){
        window.addEventListener('scroll',this.fn.bind(this))
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.fn)
    }

}