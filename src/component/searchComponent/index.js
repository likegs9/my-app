import React from 'react';
import './index.less';
import {Link} from 'react-router-dom'
export default class SearchComponent extends React.Component {
    render() {
        let {item} = this.props
        return (
            <div className="item">
                <Link to={'/detail/'+item.id}>
                    <img src={item.img} title={item.title}/>
                    <div className="center">
                        <p>{item.title}</p>
                        <p>{item.subTitle}</p>
                        <p>¥ {item.price}</p>
                    </div>
                    <div className="right">
                        <p>距离:</p>
                        <p>{item.distance}</p>
                        <p>已售数量:</p>
                        <p>{item.number}</p>
                    </div>
                </Link>
            </div>
        )
    }
}