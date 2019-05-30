import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div class="nav">
      <NavLink
        to="/"
        activeClassName="selected">
        Home
      </NavLink>
      <NavLink 
        to="/about">
        About
      </NavLink>
      <NavLink 
        to="/contact">
        Contact
      </NavLink>
    </div>
  )
}

export default Navigation
