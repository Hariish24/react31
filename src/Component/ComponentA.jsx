//drilling method
import React, { Component } from 'react'
import ComponentB from './ComponentB'
 class ComponentA extends Component {
    employee={
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  }
    location=["Bangalore","Chennai","Pune","Nodia"]
    
  render() {
    return (
      <div>
        <h2>Employee Details</h2>
         <h2>ComponentA</h2>
         <hr/>
        <ComponentB props={this.employee} props1={this.location}/>
      </div>
    )
  }
}

export default ComponentA