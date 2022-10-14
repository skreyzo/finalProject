import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardItem from '../../components/cardItemAbout/CardItem_About';
import styles from "./profile.module.css";

import { initEvents } from "../../reducers/eventReducer";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Profile = () => {

  const localhost = "http://localhost:3010/";
  // const dispatch = useDispatch();
  //const eventUserStore = useSelector((store) => store.event.event);

  const [eventUser, setEventUser] = useState([]);
  console.log("eventUser=========>", eventUser);
  const [person, setPerson] = useState({});

  React.useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3010/eventpage", {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      console.log("data:", data);
      setEventUser(data);
      //dispatch(initEvents(data));
      console.log("eventUser:", eventUser);

      const resUser = await fetch('http://localhost:3010/profile/', {
        method: "GET",
        credentials: "include",
      });
      const userData = (await resUser.json()) || [];
      console.log('data:', userData);
      const { id, firstName, lastName, email, userphotolink } = userData
      setPerson({ id, firstName, lastName, email, userphotolink });
    })();
  }, []);

  console.log('person:', person);


  return (
    <>
      <Box>
        <Box sx={{
          display: 'flex',
          flexBasis: '50%',
          my: '10px',
          color: '#000',
        }}>
          <CardItem
            id={person.id}
            firstname={person.firstName}
            lastname={person.lastName}
            email={person.email}
            image={person.userphotolink}
            //editpage={editPage}
          />
        </Box>

        <Box>
        
      </Box>
      </Box>
    </>
  );
};

export default Profile;
