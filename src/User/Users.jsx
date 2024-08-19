import React, { useState } from 'react'
import Axios from 'axios'

const Users = () => {
    let [users,setUsers]= useState([])
    let getUsers=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{})
        .catch((err)=>{})
    }
  return (
    <div>
        <h1>Users Component</h1>
        <button onClick={getUsers}></button>
        <pre>{JSON.stringify(users)}</pre>
    </div>
  )
}

export default Users