import React from 'react';
import ListItem from './listItem/index'
export default class ListComponent extends React.Component{
    render(){
        let {data}=this.props
        return(
            <div>
                {
                    data.map((item,index)=>{
                        return(
                            <ListItem item={item} key={index}/>
                        )
                    })
                }
            </div>
        )
    }
}