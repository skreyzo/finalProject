import React from "react";
import News from "../news/News";
import { useSelector } from "react-redux";



const NewsList = () => {
  const news = useSelector((store) => store.news.news);




  return (
    <div>
      <h1>Всего новостей: {news.length} </h1>
      {news.map((el) => {
        return <News key={el.id} news={el.title} body={el.body} id={el.id}  />;
      })}
    </div>
  );
};

export default NewsList;
