import React, { useState } from 'react'
import styles from "./edithomepage.module.css";

const EditHomepage = () => {

  const [values, setValue] = useState({ value: '' });

  const onChangeHandler = (event) => {
    //console.log(event.target.value)
    setValue({ value:  event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(event.target)
    if (!values.value) return alert('Поле не может быть пустым');

    try {
      
      const response = await fetch("http://localhost:3100/admin/edithomepage", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...values, done: false}),
      });
      if (!response.ok)
        throw new Error(
          `Ошибка при добавлении: ${response.statusText} ${response.status}`
        );
      const data = await response.json();
      if (data.err) throw new Error(data.err);
      
      setValue({value: ''})   // очищаем поле ввода

    } catch (err) {
      console.log(err);
      alert(err.message);
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




