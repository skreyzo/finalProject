import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/contact">
            Contact us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/join">
            Join us
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Footer;
