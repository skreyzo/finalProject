import React from 'react'
import styles from "./donate.module.css";

const Donate = (props) => {
  return (
    <>
    <span className={styles.component} > {props.title}</span>
    <div>Donate</div>
    </>
 
  )
}

export default Donate;