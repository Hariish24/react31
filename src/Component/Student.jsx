import React, { Component } from 'react'

class Student extends Component {
  render(props) {
    return (
      <div>
        <h2>Student Component</h2>
        <h2>Student Id:{this.props.id}</h2>
        <h2>Student Name,:{this.props.Name}</h2>
      </div>
    )
  }
}

export default Student