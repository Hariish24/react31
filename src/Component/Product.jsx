import React, { useState } from 'react'

const Product = () => {
    let [Product_Name,setName] = useState('Royal Enfield®️')
    let updateHandler=(P_name)=>{
        setName(P_name)
    }
  return (
    <div style={{background:'silver'}}>
        <h1>Products</h1>
        <h2 style={{background:'', color:'white'}}>Product Name: {Product_Name}</h2>
        <img onClick={updateHandler.bind(null,"Silver Red bullet 350")} src="https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/new/military-silver-red/military-silver-red-00.webp" alt="red bullet"  width={450}/>
        <img onClick={updateHandler.bind(null,"Silver black bullet 350")} src="https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/new/military-silver-black/military-silver-black_00.webp" alt="silver bullet" width={450} />
        <img onClick={updateHandler.bind(null," Black gold bullet 350")} src="https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/black-gold/black-gold-000.webp" alt="black gold bullet" width={450} />
    </div>

  )
}

export default Product
