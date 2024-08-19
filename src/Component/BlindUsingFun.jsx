import react, { useState } from 'react'

const BlindUsingFun = () => {
    let [msg,setMsg]=useState("Helloooooo")
    let updateHandler=(value)=>{
        console.log(value)
        setMsg(value)

    }
  return (
    <div>
        <h2>Message Component</h2>
        <hr/>
        <h2>Message Value:{msg}</h2>
        <input className='btn btn-dark ml-2' onClick={updateHandler.bind(this,"Good Morning")} type="button" value="GM"/>
        <input className='btn btn-dark ml-2' onClick={updateHandler.bind(this,"Good Afternoon")} type="button" value="GN"/>
        <input className='btn btn-dark ml-2' onClick={updateHandler.bind(this,"Good Evening")} type="button" value="GE"/>
        <input className='btn btn-dark ml-2' onClick={updateHandler.bind(this,"Good Nightzz ")} type="button" value="GN"/>
        <input className='btn btn-success ml-2' onClick={()=>{setMsg("stay cool my friend sleep well✅")}} type="button" value="Click Here"/>
    </div>
  )
}

export default BlindUsingFun