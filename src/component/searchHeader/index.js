import React from 'react';
import './index.less'
export default class SearchHeader extends React.Component {
    constructor(props){
        super(props);
        this.state={
            val:props.query || ''
        }
    }
    render() {
        return (
            <div className="search-header">
                <span className="iconfont icon-back" onClick={()=>this.go()}></span>
                <div className="input-text">
                    <input type="text" value={this.state.val} onChange={(e)=>this.valChange(e)} onKeyUp={this.search.bind(this)}/>
                </div>

            </div>
        )
    }

    valChange(e){
        this.setState({
            val:e.target.value
        })
    }

    go(){
        this.props.history.go(-1)
    }

    search(e){
        console.log(e.target.value)
        this.props.search(e.target.value)
    }
}