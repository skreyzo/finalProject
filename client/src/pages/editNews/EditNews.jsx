import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditNews = () => {
  let { id } = useParams();
  const news = useSelector((store) => store.news.news);
  const filtered = news.filter((news) => news.id === Number(id));
  const card = filtered[0];

  return (
    <>
      <div className="box">
        <div>
          <p>{card ? card.title : "идет загрузка"}</p>
          <button>Edit title</button>

          <p>{card ? card.body : "идет загрузка"}</p>
          <button>Edit body</button>

        </div>
      </div>
    </>
  );
};

export default EditNews;
