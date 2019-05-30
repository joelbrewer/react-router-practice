import React from 'react';
import MoreInfo from './MoreInfo'
import { NavLink, Route } from 'react-router-dom';

const About = ({ match, username }) => {
  const morePath = `${match.path}/more`;
  console.log('match.path : ', match);
  return (
    <div>
      <h1>About</h1>
      <h2>Yo, {username}</h2>
      <p>Readymade kombucha viral, freegan pop-up cardigan dreamcatcher la croix fanny pack sustainable. Franzen truffaut poutine, before they sold out irony shoreditch raw denim whatever waistcoat pabst cliche palo santo DIY freegan. Marfa street art woke portland vexillologist. Sustainable pork belly pug chicharrones farm-to-table la croix, direct trade unicorn cray.</p>
      { match.isExact &&
      <NavLink to={morePath}>
        More
      </NavLink>
      }
      <Route
        path={morePath}
        component={MoreInfo}
      />
    </div>

  )
}

export default About
