import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/contact">
            Contact us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/join">
            Join us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
