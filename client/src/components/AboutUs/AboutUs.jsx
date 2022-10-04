import React from 'react'
import styles from "./aboutus.module.css";

const AboutUs = (props) => {
  return (
    <>
    <span className={styles.component} > {props.title}</span>
    <div>AboutUs</div>
    </>
 
  )
}

export default AboutUs;