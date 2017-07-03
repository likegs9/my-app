import React from 'react';
import OrderItem from '../OrderItem/index'

export default class OrderComponent extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.data.userOrder.map((item,index)=>{
                        return(
                            <OrderItem item={item} key={index} sub={this.props.sub}/>
                        )
                    })
                }
            </div>
        )
    }
}