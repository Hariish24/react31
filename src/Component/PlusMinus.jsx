import React from "react";
import react, { Component } from 'react'

 class PlusMinus extends Component {
    state={qty:1}
    incrementHandler=()=>{
        this.setState({qty:this.state.qty +1})
    }
    decrementHandler=()=>{
        this.setState({qty:this.state.qty -1})
    }
  render() {
    return (
      <div>
          <h2>Increment Decrement</h2>
          
        <button className="btn btn-success" onClick={this.incrementHandler}>+</button>{
            this.state.qty
        }
        <button className="btn btn-danger" onClick={this.decrementHandler}>-</button>
      </div>
    )
  }
}

export default PlusMinus