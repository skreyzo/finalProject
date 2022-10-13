import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./NewsForm.module.css";

export default function NewsForm() {
  const [values, setValue] = useState({ title: "", body: "" });
  // console.log(values.title);
  const dispatch = useDispatch();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_NEWS", payload: { values } });
    //todo сделать защиту от добавления новости из пустых строчек
    // if (event.value) return alert('Поле не может быть пустым');
    try {
      const response = await fetch("http://localhost:3010/admin/editnewspage", {
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
    <>


      <div className={styles.container}>
        <h1>Add a new post</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              onChange={onChangeHandler}
              type="text"
              name="title"
              value={values.title}
              placeholder="Title..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              onChange={onChangeHandler}
              type="text"
              name="body"
              value={values.body}
              placeholder="Description..."
              rows="3"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
