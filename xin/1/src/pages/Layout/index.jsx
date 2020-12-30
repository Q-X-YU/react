import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
export default class Layout extends Component {
    state={
        list:[]
    }
    componentDidMount(){
      this.setState({
          list:this.props.routes
      })
    }
    render() {
        console.log(this.props)
        const {list}=this.state
        return (
            <div className="layout">
                <div className="left">
                    <div className="left_item">
                        {
                            list.map((item,index)=>
                            <NavLink key={index} to={item.path}>{item.title}</NavLink>
                            )
                        }
                    </div>
                </div>
                <div className="right">
                  {
                      this.props.children
                  }
                </div>
            </div>
        )
    }
}
