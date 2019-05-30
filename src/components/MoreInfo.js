import React from 'react'
import { NavLink } from 'react-router-dom';

const MoreInfo = () => {
  return (
    <div>
      <h2>More Info!</h2>
      <p>Here is a bunch more info</p>
      <NavLink to="/about">
        Close
      </NavLink>
    </div>
  )
}

export default MoreInfo;
