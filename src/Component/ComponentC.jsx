import React from 'react'
// import ComponentD from './ComponentD'

 const ComponentC = (props) => {
  return (
    <div>
        <h2>ComponenC</h2>
        <pre>{JSON.stringify(props)}</pre>
        {/* <ComponentD props={this.props} /> */}
    </div>
  )
}
export default ComponentC
