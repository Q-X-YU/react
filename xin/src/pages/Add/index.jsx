import React, { Component } from 'react'
import { Input,Modal} from 'antd';
import {ImagePicker,Button} from 'antd-mobile'
import './style.css'
import Dialog from '../Dialog/index'
const { TextArea } = Input;

export default class Add extends Component {
   
   state={
       info:{
           info:"",
           img:"",
           background:""
       },
       backgroundList:[
           'red',
           'green',
           'pink',
           'skyblue',
           'blue'
       ],
       isShow:false,
       addList:[]
   }
    onChange=(file)=>{
        this.setState({
            info:{
                ...this.state.info,
                img:file[0].url
            }
        })
        console.log(file)
    }  
    toDialog=()=>{
       this.setState({
           //注意是this.state.isShow state
           isShow:!this.state.isShow
       })
    } 
    changeLi(item){
        this.setState({
            info:{
                ...this.state.info,
                background:item
            }
        })
    }
    changeIpt(e){
        this.setState({
            info:{
                ...this.state.info,
                info:e.target.value
            }
        })
    }
    changeAdd(){
        this.setState({
            addList:JSON.parse(localStorage.getItem("token")),
            isShow:!this.state.isShow
        })
        console.log(this.state.addList,'add')
    }
    render() {
        const {info,backgroundList,isShow,addList}=this.state;
        return (
            <div className='add' style={{background:info.background}}>
                <TextArea rows={4} value={info.info} onInput={(e)=>this.changeIpt(e)}></TextArea>
                <ImagePicker onChange={this.onChange}/>
                <div className="imgs">
                    <img src={info.img} alt=""/>
                </div>
                <ul className="back-box">
                  {
                      backgroundList.map((item,index)=><li
                       key={index}
                       style={{background:item,height:"20px"}}
                       className="lis"
                       onClick={()=>this.changeLi(item)}
                      >
                        
                      </li>)
                  }
                </ul>
                <Button type="primary" onClick={()=>this.toDialog()}>预览</Button>
                <Button type="primary" onClick={()=>this.changeAdd()}>添加</Button>
                <Modal></Modal>
                {
                   isShow&&<Dialog addList={addList} closeDialog={this.toDialog} info={info}/>
                }
            </div>
        )
    }
}
