import React from "react";
import { useState } from "react";

//todo сделать защиту от добавления новости из пустых строчек
export default function NewsForm({addNewsHandler}) {
  const [values, setValue] = useState({ title: "", body: "" });

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addNewsHandler(values)
    setValue({ title: "", body: "" });



  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setValue({...values, [name]: value});
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
