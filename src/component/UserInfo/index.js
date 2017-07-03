import React from 'react';
import './index.less'
export default class UserInfo extends React.Component {
    render() {
        return (
            <div className="user-info">
                <p>用户：{this.props.data.username}</p>
                <p>所在城市：{this.props.data.cityName}</p>
            </div>
        )
    }
}