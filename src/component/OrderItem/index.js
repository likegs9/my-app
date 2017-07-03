import React from 'react';
import './index.less'
export default class OrderItem extends React.Component {
    constructor(props){
        super();
        this.state={
            store:props.item.store
        }
    }

    render() {
        let {item}=this.props
        return (
            <div className="talk-out">
                <div className="order-item">
                    <img src={item.goods.img} />
                    <div>
                        <h4>{item.goods.title}</h4>
                        <p>数量：{item.count}</p>
                        <p>价格：{item.total}</p>
                    </div>
                    <div>
                        {
                            this.state.store===0?<button className="btn-true" onClick={()=>this.content()}>评价</button>:
                            this.state.store===1?'':
                            <button >已评价</button>
                        }
                    </div>
                </div>
                {
                    this.state.store===1?
                        <div className="talk">
                            <textarea ref={ref=>this.talk=ref}></textarea>
                            <div className="btn-sub">
                                <button onClick={()=>this.subBtn()}>提交</button>
                                <button onClick={()=>this.cancelContent()}>取消</button>
                            </div>
                        </div>:''
                }

            </div>
        )
    }
    content(){
        this.setState({
            store:1
        })
    }
    cancelContent(){
        this.setState({
            store:0
        })
    }

    contentTrue(){
        this.setState({
            store:2
        })
    }
    subBtn(){
       let {id}=this.props.item;
       this.props.sub(id,this.talk.value,this.contentTrue.bind(this))
    }
}