import React from "react";
import { useSelector } from "react-redux";
import NewsAdmin from "../../pages/newsAdmin/NewsAdmin";
import NewsForm from "../../pages/newsForm/NewsForm";
import { useDispatch } from "react-redux";

const AdminNewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((store) => store.news);
  // const newsId = news.newsId;

  const delNewsHandler = async (id) => {
    // console.log("id", id);

    try {
      const response = await fetch("http://localhost:3010/admin/editnewspage", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) dispatch({ type: "DELETE_NEWS", payload: { id } });
      if (!response.ok)
        throw new Error(
          `Ошибка при удалении: ${response.statusText} ${response.status}`
        );
      const data = await response.json();
      if (data.err) throw new Error(data.err);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NewsForm />
      <h1>Total News: {news.length} </h1>
      {news.map((el) => {
        return (
          <NewsAdmin key={el.id} el={el} delNewsHandler={delNewsHandler} />
        );
      })}
    </div>
  );
};

export default AdminNewsList;
