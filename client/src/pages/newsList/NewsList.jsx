import React from "react";
import News from "../news/News";
import { useSelector } from "react-redux";
import styles from './newsList.module.css'




const NewsList = () => {
  const news = useSelector((store) => store.news.news);

  return (
    <div className={styles.container}>
      <h1>Total news: {news.length} </h1>
      {news.map((el) => {
        return <News key={el.id} news={el.title} body={el.body} id={el.id} pic={el.pic}  />;
      })}
    </div>
  );
};

export default NewsList;
