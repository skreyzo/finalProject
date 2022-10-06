import React from "react";
import { useSelector } from 'react-redux'
import NewsAdmin from "../../pages/newsAdmin/NewsAdmin";
import NewsForm from "../../pages/newsForm/NewsForm";

const AdminNewsList = () => {

    const news = useSelector((store) => store.news)

  return (
    <div>
      <NewsForm />
      <h1>Всего новостей: {news.length} </h1>
      {news.map((el) => {
        return <NewsAdmin key={el.id} news={el.title} body={el.body} newsId={el.id} />;
      })}
    </div>
  );
};

export default AdminNewsList;
