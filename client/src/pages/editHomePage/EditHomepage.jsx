import React, { useState } from 'react'
import styles from "./edithomepage.module.css";
import { useDispatch } from "react-redux";

const EditHomepage = () => {

const dispatch = useDispatch();

  const [values, setValue] = useState({ value: '' });

  const onChangeHandler = (event) => {
    //console.log(event.target.value)
    setValue({ value:  event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!values.value) return alert('The field can not be empty');

    try {
      //dispatch(setLoading(true));
      const response = await fetch("http://localhost:3100/admin/edithomepage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...values, done: false}),
      });
      if (!response.ok)
        throw new Error(
          `Error when adding: ${response.statusText} ${response.status}`
        );
      const data = await response.json();
      if (data.err) throw new Error(data.err);

      //dispatch(addTodo(data.todo)); // запись с redux
      setValue({value: ''})   // очищаем поле ввода

    } catch (err) {
      console.log(err);
      alert(err.message);
    } finally {
      //dispatch(setLoading(false));
    }
  };

  return (    
    <div>
      <div>EditHomepage</div>
      <form
      onSubmit={onSubmitHandler}
      >
        <textarea 
          onChange={onChangeHandler}
          rows="10" cols="70" 
          type="text" name="addGreatings" 
          placeholder="Greetings" 
          />
        <button type="submit">Save</button>
        <button type="submit">Edit</button>
      </form>      
    </div>
  )
}

export default EditHomepage




