import React from 'react'
import react,{ Component } from 'react'
 class ExMessage extends Component {
    state={
         msg:"hello vanakkam🙏🏻🫶🏻"
    }
    getHandler=()=>{
        this.setState({msg:"Good Morning breo"})
    }
    geHandler=()=>{
        this.setState({msg:"Good Nightzzzz breo"})
    }
    gHandler=()=>{
      this.setState({msg:"Have some koffee breo ☕"})
  }
    
  render() {
    return (
      <div>
        <h2>value:{this.state.msg}</h2>
        <button className='btn btn-primary' onClick={this.getHandler}>GM</button>
        <button className='btn btn-warning' onClick={this.geHandler}>GN</button>
        <button className='btn btn-success' onClick={this.gHandler}>Dumpin</button>
      </div>
    )
  }
}

export default ExMessage