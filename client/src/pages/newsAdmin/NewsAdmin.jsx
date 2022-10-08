import React from "react";
// import { useDispatch } from "react-redux";
// import styles from "./news.module.css";

const NewsAdmin = ({el,  delNewsHandler}) => {
 return (
    <>
      <div>{el.title}</div>
      <div>{el.body}</div>
      <div>
        <button onClick={() => delNewsHandler(el.id)}>Delete</button>
      </div>

      <button>Edit</button>
    </>
  );
};

export default NewsAdmin;
