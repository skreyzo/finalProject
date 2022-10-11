import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditEventDetails = () => {
  let { id } = useParams();
 // const news = useSelector((store) => store.news.news);
  //const filtered = news.filter((news) => news.id === Number(id))
  //const card = filtered[0];
//   console.log(card.title);


  return (
    <>
    <div className="box">
      <div>

      </div>
    </div>
  </>
  )
};

export default EditEventDetails;