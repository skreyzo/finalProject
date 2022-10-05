import React from "react";
// import styles from "./footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div >
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to='/contact'>Contact us</Link>
        </li>
        <li className="nav-item">
          <Link to='/join'>Join us</Link>
        </li>

      </ul>
    </div>
  );
};

export default Footer;