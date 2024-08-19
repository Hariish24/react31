import react, { Component } from 'react'

 class WithblindingEx extends Component {
    state={msg:"hello man"}
    getHandler=(value)=>{
        this.setState({msg:value})
    }

  render() {
    return (
      <div>
        <h2>Message value:{this.state.msg}</h2>
        <input className='btn btn-dark' onClick={this.getHandler.bind(this,"Good Morning")} type="button" value="GM"/>
        <input className='btn btn-dark' onClick={this.getHandler.bind(this,"Good Afternoon")} type="button" value="GA"/>
        <input className='btn btn-dark' onClick={this.getHandler.bind(this,"Good Evening")} type="button" value="GE"/>
        <input className='btn btn-dark' onClick={this.getHandler.bind(this,"Good Nightzz ")} type="button" value="GN"/>
      </div>
    )
  }
}

export default WithblindingEx