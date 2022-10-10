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
      <form action="admin/editnewspage/{el.id}">
      <button type="submit">Edit news</button>
    </form>






  </>
  );
};

export default NewsAdmin;
