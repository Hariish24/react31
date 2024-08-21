import React, { useState } from 'react'
import Axios from 'axios'

const Users = () => {
    let [users,setUsers]= useState([])
    let getUsers=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch((err)=>{})
    }
  return (
    <div>
        <h1>Users Component</h1>
        <pre>{JSON.stringify(users)}</pre>
        <button className="btn btn-success mb-4" onClick={getUsers}> click Here to get User data</button>
        
        <table className="table">
            <thead className='bg-secondary text-white'> 
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length > 0 ? <>
                    {
                        users.map((user,index)=>{
                            return<tr>
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
  )
}

export default Users