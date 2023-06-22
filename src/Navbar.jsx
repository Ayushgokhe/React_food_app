import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

const Navbar = () => {
  return (
    <>
      <div className="container_fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav_bc">
              <div className="container-fluid">
                <div>
                  <img src="https://st2.depositphotos.com/1496387/10676/v/450/depositphotos_106767710-stock-illustration-cook-chef-vector-logo-restaurant.jpg" style={{width:'83px',margin: '0px 12px 0px 0px'}} alt="" />
                <NavLink className="navbar-brand" to="/">Wolf Bi</NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="contact">Sign up</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
