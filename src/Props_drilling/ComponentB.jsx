import React, { Component } from 'react'
import ComponentC from './ComponentC'
class ComponentB extends Component {
  render() {
    return (
      <div>
        <h2>ComponentB</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr/>
        <ComponentC harish={this.props.employee} />
      </div>
    )
  }
}

export default ComponentB