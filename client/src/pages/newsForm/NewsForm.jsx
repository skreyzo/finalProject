import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function NewsForm() {
  const [values, setValue] = useState({ title: "", body: "" });
  // console.log(values.title);
  const dispatch = useDispatch();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_NEWS", payload: { values } });
    //todo сделать защиту от добавления новости из пустых строчек
console.log(event);
    // if (event.value) return alert('Поле не может быть пустым');
    try {
      const response = await fetch("http://localhost:3100/admin/editnewspage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });
      if (!response.ok)
        throw new Error(
          `Ошибка при добавлении: ${response.statusText} ${response.status}`
        );
      const data = await response.json();
      if (data.err) throw new Error(data.err);

      setValue({ title: "", body: "" });
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
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
