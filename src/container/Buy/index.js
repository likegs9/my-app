import React from 'react';
import DetailHeader from '../../component/DetailHeader/index';
import BuyDetail from '../../component/BuyDetail/index';
import {getInfo} from '../../fetch/getDetail'

export default class BuyComponent extends React.Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    render() {
        return (
            <div>
                <DetailHeader title="购买" history={this.props.history}/>
                {
                    this.state.data?<BuyDetail item={this.state.data} id={this.props.match.params.id} history={this.props.history}/>:<div>正在加载</div>
                }
            </div>
        )
    }

    componentWillMount(){
        this.processData(getInfo(this.props.match.params.id))
    }

    processData(result){
        result.then(res=>res.json()).then((data)=>{
            this.setState({
                data
            })
        })
    }

}