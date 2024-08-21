import React from 'react'
import Teacher from "./Component/Teacher";
import ExMessage from "./Component/ExMessage";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import PlusMinus from './Component/PlusMinus';
import Use_state from './Binding_method/Use_state';
import WithblindingEx from './Component/WithblindingEx';
import BlindUsingFun from './Binding_method/BlindUsingFun';
import ComponentA from './Props_drilling/ComponentA';
import EmployeeData from './Component/EmployeeData';
import Product from './Component/Product';
import Users from './User/Users';
import Users_usingCls from './User/Users_usingCls';
import NavBar from './NavBar/NavBar';
let App= ()=>{
    return <div >
        {/* <h1>App Component</h1> */}
        {/* <h1 style={{color:'red'}}>Royal Enfield®️ </h1> */}
        
        <NavBar />

    </div>

}
export default App