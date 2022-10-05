import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Link to="/newnews">New News</Link>
      <Link to="/newevent">New Event</Link>
      <Link to="/editcont">Edit Contacts</Link>
    </div>
  );
};

export default Admin;
