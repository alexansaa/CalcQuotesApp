import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator'},
  { path: 'quotes', text: 'Quotes' },
];

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <React.Fragment key={link.text}>
                <li>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar