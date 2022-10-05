import React, { useDebugValue } from "react";
import { useState } from "react";

export default function NewsForm() {
  const [values, setValue] = useState({ title: "", body: "" });

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log('state', values);
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
      <button type="submit">Сохранить</button>
    </form>
  );
}
