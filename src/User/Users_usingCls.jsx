import React, { Component } from 'react'
import  Axios  from 'axios'
class Users extends Component {
   state = {
     users:[]
   } 
   getUsers = ()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
          this.setState({users:resp.data})
        })
        .catch()
   }
  render() {
    return <div>
                <h1>Displaying Users details using class</h1>
                <h3>Users detial Component</h3>
                <pre>{JSON.stringify(this.state.users)}</pre>
                <button  className="btn btn-success" onClick={this.getUsers}>GetUsers</button>
                <table className='table'>
                    <thead className='bg-dark text-white'> 
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.length > 0 ?<>
                             {
                                this.state.users.map((user,index)=>{
                                    return <tr key={index}>
                                           <td>{user.id}</td>
                                           <td>{user.name}</td>
                                           <td>{user.email}</td>
                                           <td>{user.address.city}</td>
                                    </tr>
                                    
                                })
                             }
                               
                            </>:<React.Fragment></React.Fragment>
                            
                        }
                        
                    </tbody>
                </table>
            </div>
  }
}

export default Users