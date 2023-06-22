import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <h3>Welf Bi</h3>
        <p>Copyright &copy;2023 Welf Bi, Inc</p>
        <ul className='footer_ui'>
            <li><NavLink to="#">Legal Stuff</NavLink></li>|
            <li><NavLink to="#">Privacy Policy</NavLink></li>|
            <li><NavLink to="#">Security</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Footer
