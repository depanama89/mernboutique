import React from 'react'
import  {Link, NavLink}from  "react-router-dom"
import {GiShoppingBag,GiShoppingCart} from "react-icons/gi"
import { useAuth } from '../../context/auth'
import { toast } from 'react-toastify'

const Header = () => {
  const [auth,setAuth]=useAuth()

  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:''
    })
    localStorage.removeItem('auth')
    toast.success('Logout successfully')
  }
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">ff</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link to="" className="navbar-brand">
               <GiShoppingCart/>Ecommerce App
              </Link>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="" className="nav-link " >
                  Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category" className="nav-link " >
                  category
                  </NavLink>
                </li>
                { 
                  !auth.user ? (<>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link" >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" >
                      Login
                    </NavLink>
                  </li>
                  
                  </>) :(
                  <>
                  <li className="nav-item dropdown">
                      <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {auth?.user.username}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink 
                            to={`/Dashboard/${
                              auth?.user?.role === 1 ? 'admin':"user"
                            }`} className="dropdown-item" href="#">
                            Dashboard
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink onClick={handleLogout}  to="/login" className="dropdown-item" >
                            Logout
                          </NavLink>
                        </li>
                        
                      </ul>
                  </li>
                    
                  </>)
                }
   
                <li className="nav-item">
                  <NavLink to="/cart" className="nav-link" >
                    cart (0)
                  </NavLink>
                </li>
              </ul>
              
            </div>
        </div>
      </nav>

    </div>
  )
}

export default Header