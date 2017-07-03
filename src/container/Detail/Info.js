import React from 'react';
import {getInfo} from '../../fetch/getDetail';
import InfoComponent from '../../component/InfoComponent/index'
export default class Info extends React.Component {
    constructor(){
        super();
        this.state={
            data:null
        }
    }
    render() {
        return (
            <div>
                {this.state.data?<InfoComponent data={this.state.data}/>:<div>正在加载</div>}

            </div>
        )
    }
    componentDidMount(){
        this.progressDetail(getInfo(this.props.id))
    }

    progressDetail(result){
        result.then(res=>res.json()).then((item)=>{
            this.setState({
                data:item
            })
        })
    }
}