import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FullNews = () => {
  let { id } = useParams();
  const news = useSelector((store) => store.news.news);
  const filtered = news.filter((news) => news.id === Number(id))
  const card = filtered[0];
//   console.log(card.title);


  return (
    <>
    <div className="box">
      <div>
        <p>{card ? card.title : "идет загрузка"}</p>

        <p>{card ? card.body : "идет загрузка"}</p>
      </div>
    </div>
  </>
  )
};

export default FullNews;
