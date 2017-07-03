import React from 'react';
import './index.less';
import {Link} from 'react-router-dom'
export default class HomeHeader extends React.Component{
    render(){
        return(
            <div className="home-header">
                <Link to="/city">
                    {this.props.cityName}<i className="iconfont icon-xiasanjiao-copy"></i>
                </Link>
                <input type="text" placeholder="请输入查找的内容" onKeyDown={this.query.bind(this)}/>
                <Link to='/user'>
                    <i className="iconfont icon-accountfilling"></i>
                </Link>
            </div>
        )
    }

    query(e){
        if(e.keyCode==13){
            let val=e.target.value;
            this.props.query(val)
        }

    }
}