import React, { Component } from 'react'
import  Axios  from 'axios'
export class UserCDM extends Component {
    state={users:[]}
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            this.setState
        })
    }
  render() {
    
    return (
      <div>
        <h1>Displaying user detials using Component Did Mount</h1>
        <h2>Users Details</h2>
        <pre>{JSON.stringify}</pre>
      </div>
    )
  }
}

export default UserCDM