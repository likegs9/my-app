import React from 'react';
import SearchHeader from '../../component/searchHeader';
import {getSerch} from '../../fetch/search.js'
import SearchComponent from '../../component/searchComponent/index'
export default class Search extends React.Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div>
                <SearchHeader history={this.props.history} query={this.props.match.params.keywords} search={this.processData.bind(this)}/>
                <div>
                    <h4>查询结果</h4>
                    {
                        this.state.data.map((item,index)=>{
                            return(
                                <SearchComponent item={item} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentWillMount(){
        let keyWords=this.props.match.params.keywords
        this.processData(keyWords)
    }
    processData(keyWords){
        getSerch(keyWords).then(res=>res.json()).then(({data})=>{
            this.setState({
                data:data
            })
        })
    }
}