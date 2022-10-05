import React from "react";
import News from "../../pages/news/News";
import NewsForm from "../../pages/newsForm/NewsForm";

const AdminNewsList = ({ news }) => {
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

export default AdminNewsList;
