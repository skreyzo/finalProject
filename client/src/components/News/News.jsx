import React from 'react'
import styles from "./news.module.css";

const News = (props) => {
  return (
    <>    
    <span className={styles.component}> {props.title}</span>
    <div>News</div>
    </>
  )
}

export default News