import React from "react";
// import styles from "./news.module.css";
// import { Link } from "react-router-dom";

const News = (news) => {
  return (
    <>
      <div>{news.id}</div>
      <div>{news.news}</div>
      <div>{news.body}</div>
      <form action={`/news/${news.id}`}>
        <button>More details</button>
      </form>
    </>
  );
};

export default News;
