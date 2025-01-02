import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments, faVideo, faUsers, faLifeRing } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="Navabar">
      <div className="Navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" className="Logo" />
      </div>
      <ul className="Navbar-menu">
        <li className="Navbar-menu-list activate">
          <a href="#"><FontAwesomeIcon icon={faEnvelope} /> Mail</a>
        </li>
        <li className="Navbar-menu-list">
          <a href="#"><FontAwesomeIcon icon={faComments} /> Chat</a>
        </li>
        <li className="Navbar-menu-list">
          <a href="#"><FontAwesomeIcon icon={faVideo} /> Meet</a>
        </li>
        <li className="Navbar-menu-list">
          <a href="#"><FontAwesomeIcon icon={faUsers} /> Space</a>
        </li>
        <li className="Navbar-menu-list">
          <a href="#"><FontAwesomeIcon icon={faLifeRing} /> Help</a>
        </li>
      </ul>
      <button>Sign in</button>
    </div>
  );
}

export default Navbar;
