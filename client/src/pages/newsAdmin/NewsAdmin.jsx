import React from "react";
import { useDispatch } from "react-redux";
// import styles from "./news.module.css";

const NewsAdmin = (news) => {
  const newsId = news.newsId;
  const dispatch = useDispatch();

  return (
    <>
      <div>{news.news}</div>
      <div>{news.body}</div>
      <button
        onClick={() =>
          dispatch({ type: "DELETE_NEWS", payload: { id: newsId } })
        }
      >
        Delete
      </button>
      <button>Edit</button>
    </>
  );
};

export default NewsAdmin;
