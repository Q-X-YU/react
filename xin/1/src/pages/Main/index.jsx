import React, { Component } from 'react'
import {getList} from '../../api/index'
export default class Main extends Component {
    state={
        listData:[]
    }
    componentDidMount(){
        this.getList()
    }
    getList(){
        getList().then(res=>{
            console.log(res)
            this.setState({
                listData:res.list
            })
        })
    }
    toDetail(item){
        console.log(11)
        this.props.history.push(`/detail/${item.id}`)
    }
    render() {
        const {listData}=this.state
        return (
            <div className="main">
                 {
                     listData.map((item,index)=><p key={index} onClick={()=>this.toDetail(item)}>
                        {item.title}
                     </p>)
                 }
            </div>
        )
    }
}
