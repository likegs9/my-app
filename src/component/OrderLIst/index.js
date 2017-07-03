import React from 'react';
import OrderComponent from '../OrderComponent/index';
let style={width:"100%",height:"50px",lineHeight:"50px",padding:"10px",boxSizing:"border-box"}
export default class OrderLIst extends React.Component {
    render() {
        return (
            <div>
                <h3 style={style}>我的订单</h3>
                {
                    this.props.data?<OrderComponent data={ this.props.data} sub={this.props.sub}/>:<div>您还没有订单</div>
                }
            </div>
        )
    }
}