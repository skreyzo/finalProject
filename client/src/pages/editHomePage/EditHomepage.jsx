import React from 'react'
import styles from "./edithomepage.module.css";

const EditHomepage = (props) => {
  return (    
    <div>
      <div>EditHomepage</div>
      <form>
        <input type="text" name="title" placeholder="Greetings" />
        <button type="submit">Save</button>
      </form>
      <span className={styles.component}> {props.title}</span>
    </div>
  )
}

export default EditHomepage




