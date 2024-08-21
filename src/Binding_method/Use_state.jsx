import React from "react";
import react, { Component } from 'react' //without blinding

class Use_state extends Component {
    state={msg:"Hello vanakkam"}
    getHandler=()=>{
        this.setState({msg:'Good Morning'})
    }
    gaHandler=()=>{
        this.setState({msg:'Good Afternoon'})
    }
    geHandler=()=>{
        this.setState({msg:'Good Evening'})
    }
    gnHandler=()=>{
        this.setState({msg:'Good Nightzzz'})
    }
    
    
  render() {
    return (
      <div>
        <h2>value:{this.state.msg}</h2>
        <input className='btn btn-primary btn-lg ml-2' onClick={this.getHandler} type="button" value="GM"/>
        <input className='btn btn-primary btn-lg ml-2' onClick={this.gaHandler} type="button" value="GA"/>
        <input className='btn btn-primary btn-lg ml-2' onClick={this.geHandler} type="button" value="GE"/>
        <input className='btn btn-primary btn-lg ml-2' onClick={this.gnHandler} type="button" value="GN"/>
        
        
      </div>
    )
  }
}

export default Use_state