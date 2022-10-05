import React from "react";
import News from "../news/News";
import NewsForm from "../newsForm/NewsForm";

const NewsList = ({ news }) => {
  return (
    <div>
      <NewsForm />
      <h1>Всего новостей: {news.length} </h1>
      {news.map((el) => {
        return <News key={el.id} news={el.title} body={el.body} />;
      })}
    </div>
  );
};

export default NewsList;
