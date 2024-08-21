import React from 'react'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './index'
import About from './about'
import Services from './services'
import Contact from './contact'
import NewUsers from './NewUsers'
import Users from './NewUsers'
const NavBar = () => {
  return <div>
         <BrowserRouter>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to="/index" className='navbar-brand'>GAGAZ™️🦖</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li><Link to="/index" className='nav-link'>Home</Link></li>
                        <li><Link to="/about" className='nav-link'>About</Link></li>
                        <li><Link to="/services" className='nav-link'>Services</Link></li>
                        <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                        <li><Link to="/Users" className='nav-link'>Users</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="index" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="Users" element={<NewUsers />}/>

            </Routes>
            </BrowserRouter>
          </div>
}

export default NavBar