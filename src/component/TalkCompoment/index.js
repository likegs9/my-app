import React from 'react';
import TalkItem from '../TalkItem/index'
export default class TalkCompoment extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.data.map((item,index)=>{
                        return <TalkItem data={item} key={index}/>
                    })
                }
            </div>
        )
    }
}