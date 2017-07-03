import React from 'react';
import './count.less'
export default class Count extends React.Component {
    render() {
        return (
            <div className="count">
                <button className="count-left" onClick={()=>this.mins()}>—</button>
                <input type="text" disabled value={this.props.input}/>
                <button  className="count-right" onClick={()=>this.add()}>+</button>
            </div>
        )
    }

    add(){
        this.props.add()
    }

    mins(){
        this.props.mins()
    }
}