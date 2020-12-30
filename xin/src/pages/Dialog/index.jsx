import React, { Component } from 'react'
import './style.css'
import {getAdd} from '../../api'
export default class Dailog extends Component {
    closeDialog(){
      this.props.closeDialog()
    }
    changeAdd(item){
        getAdd({
            id:item.id,
            info:this.props.info.info
        }).then(res=>{
            console.log(res)
        })
    }
    render() {
        const {info={},addList}=this.props
        console.log(this.props.closeDialog,'clo')
        return (
            <div className="dialog" style={{background:info.background}}>
                <p onClick={()=>this.closeDialog()}>关闭</p>
                <img src={info.img} alt=""/>
                <p>{info.info}</p>
                <p>{info.title}</p>
                <p>
                    {/* {
                        addList.map((item,index)=><p onClick={()=>this.changeAdd(item)}>{item.title}</p>)
                    } */}
                </p>
            </div>
        )
    }
}
