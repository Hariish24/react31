import React from 'react'
const ComponentD = (props) => {
  return (
    <div>
        <h2>ComponentD</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Employee id:1</h2>
        <h2>Employee Name:Leanne Graham</h2>
        <h2>Employee location:{props.location}</h2>

    </div>
  )
}
export default ComponentD