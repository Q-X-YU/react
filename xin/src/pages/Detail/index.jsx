import React, { Component } from 'react'
import {getDetail} from '../../api'
import Dialog from '../Dialog/index'
export default class Detail extends Component {
    state={
        id:"",
        detailData:[],
        isShow:false
    }
   componentDidMount(){
       const id=this.props.match.params.id;
       getDetail({id}).then(res=>{
           console.log(res)
           this.setState({
               detailData:res
           })
           console.log(this.state.detailData,'detail')
       })
   }
   toDialog(){
       this.setState({
           isShow:!this.isShow
       })
   }
    render() {
        const {detailData,isShow}=this.state
        console.log(this.props)
        console.log(this.state.detailData.children)
        return (
            <div>
                <p onClick={()=>this.toDialog()}>{detailData.title}</p>
                {/* <p>{detailData.children.info}</p> */}
                <div>
                {/* {
                        detailData.children.forEach((item,index)=><li>
                            {item.info}
                        </li>)
                    } */}
                </div>
                {/* //注意isShow为真 弹框才出现 */}
                {
                   isShow&&<Dialog/>
                }
            </div>
        )
    }
}
