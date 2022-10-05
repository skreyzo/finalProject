import React from 'react'
import styles from "./events.module.css";

const Events = (props) => {
  return (
    <>    
    <span className={styles.component}> {props.title}</span>
    <div>Events</div>
    </>
  )
}

export default Events