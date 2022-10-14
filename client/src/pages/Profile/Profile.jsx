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
import { CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


const Profile = () => {

  const localhost = "http://localhost:3010/";
  // const dispatch = useDispatch();
  //const eventUserStore = useSelector((store) => store.event.event);

  const [eventUser, setEventUser] = useState([]);

  console.log("eventUser=========>", eventUser);
  const [person, setPerson] = useState({});


  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3010/profile", {
        method: "GET",
        credentials: "include",
      });
      const arrais = await result.json()
      setEventUser(arrais);
      console.log("eventUser:", eventUser);
    };
    
    const resUser = await fetch('http://localhost:3010/profile/', {
        method: "GET",
        credentials: "include",
      });
      const userData = (await resUser.json()) || [];
      console.log('data:', userData);
      const { id, firstName, lastName, email, userphotolink } = userData
      setPerson({ id, firstName, lastName, email, userphotolink });
    });
    fetchData();    
  }, []);

  return (
    <>
  {/* {eventUser.map((el) => ( <div>{localhost + el.eventphotolink}</div> ))} */}
  <Grid container>
  <Grid item xs>
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
            // editpage={editPage} 
            />
      </Box>  
 </Box>
  </Grid>
  <Divider orientation="vertical" flexItem>
    
  </Divider>
  <Grid item xs>
    {eventUser.map((el) => (  <Card sx={{ maxWidth: 345 , margin: "100px"}} key={el.id}>
      
      <CardActionArea component={Link} to={`/events/${el.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={localhost + el.eventphotolink}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {el.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {`${el.description.slice(0, 50)}...`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {`Event date: ${el.dataTime}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {`Address: ${el.address}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {`ticketQT: ${el['Orders.ticketQT']}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {`totalprice: ${el['Orders.totalprice']}`}
          </Typography>          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
      
    </Card> ))}
  </Grid>
</Grid>
    </>
  );
};

export default Profile;
