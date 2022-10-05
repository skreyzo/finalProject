import React from 'react'
// import styles from "./news.module.css";

const News = (news) => {
  return (
    <>    
    <div>{news.news}</div>
    <div>{news.body}</div>
    <button>More details</button>



    </>
  )
}

export default News