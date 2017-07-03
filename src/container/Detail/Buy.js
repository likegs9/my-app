import React from 'react';
import './index.less'
export default class Buy extends React.Component{
    render(){
        return(
            <div className="buy">
                <div>
                    <button type="button" className="btn1" onClick={()=>this.buy()}>购买</button>
                </div>
                <div>
                    {
                        this.props.storeState?
                            <button type="button" className="btn2" onClick={this.store.bind(this)}>已收藏</button>:
                            <button type="button" className="btn2" onClick={this.store.bind(this)}>收藏</button>
                    }

                </div>
            </div>
        )
    }
    buy(){
        this.props.buy()
    }
    store(){
        this.props.store()
    }
}