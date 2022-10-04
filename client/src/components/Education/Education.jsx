import React from 'react'
import styles from "./education.module.css";

const Education = (props) => {
  return (
    <>    
    <span className={styles.component}> {props.title}</span>
    <div>Education</div>
    </>
  )
}

export default Education