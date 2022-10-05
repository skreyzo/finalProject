import React from 'react'
import styles from "./home.module.css";

const Home = (props) => {
  return (
    <>    
    <span className={styles.component}> {props.title}</span>
    <div>Home</div>
    </>
  )
}

export default Home