import React from 'react'
import  {Link, NavLink}from  "react-router-dom"
import {GiShoppingBag,GiShoppingCart} from "react-icons/gi"

const Header = () => {
  return (
    <div className='header'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">ff</span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link to="" className="navbar-brand">
               <GiShoppingCart/>Ecommerce App
              </Link>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink to="" className="nav-link " >
                  Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/category" className="nav-link " >
                  category
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/register" className="nav-link" >
                    Register
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/login" className="nav-link" >
                    Login
                  </NavLink>
                </li>
                <li class="nav-item">
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