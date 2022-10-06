import React, { useState } from 'react'
import styles from "./edithomepage.module.css";
import { useDispatch } from "react-redux";

const EditHomepage = () => {

const dispatch = useDispatch();

  const [textHomePage, setTextHomePage] = useState({ textHP: '' });

  const onChangeHandler = (event) => {
    //console.log(event.target.value)
    setTextHomePage({ value:  event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();


     try {
      
      const response = await fetch("http://localhost:3100/admin/edithomepage", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",          
        },
        body: JSON.stringify(textHomePage),
      });
      if (!response.ok)
        throw new Error(
          `Error when adding: ${response.statusText} ${response.status}`
        );
      const data = await response.json();
      console.log(data)  
      if (data.err) throw new Error(data.err);

      //dispatch(addTodo(data.todo)); // запись с redux
      setTextHomePage({value: ''})   // очищаем поле ввода

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
       
      </form>      
    </div>
  )
}

export default EditHomepage




