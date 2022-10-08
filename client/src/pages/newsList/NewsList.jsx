import React from "react";
import News from "../news/News";

const NewsList = ({ newsData }) => {


  return (
    <div>
      <h1>Всего новостей: {newsData.length} </h1>
      {newsData.map((el) => {
        return <News key={el.id} news={el.title} body={el.body}  />;
      })}
    </div>
  );
};

export default NewsList;
