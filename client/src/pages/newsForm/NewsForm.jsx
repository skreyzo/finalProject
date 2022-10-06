import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

//todo сделать защиту от добавления новости из пустых строчек
export default function NewsForm() {
  const [values, setValue] = useState({ title: "", body: "" });

  const dispatch = useDispatch();



  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_NEWS", payload: { values }})


    setValue({ title: "", body: "" });
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setValue({ ...values, [name]: value });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        onChange={onChangeHandler}
        type="text"
        name="title"
        value={values.title}
        placeholder="Название поста..."
      />
      <input
        onChange={onChangeHandler}
        type="text"
        name="body"
        value={values.body}
        placeholder="Текст поста..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
