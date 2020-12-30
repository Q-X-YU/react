import React, { Component } from 'react'
import './style.css'
export default class Dailog extends Component {
    closeDialog(){
   this.props.closeDialog()
   console.log(this.props)
    }
    render() {
        const {info={},closeDialog}=this.props
     
        return (
            <div className="dialog" style={{background:info.background}}>
                <p onClick={()=>this.closeDialog()}>关闭</p>
                <img src={info.img} alt=""/>
                <p>{info.info}</p>
            </div>
        )
    }
}
