import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3010/profile", {
        method: "GET",
        credentials: "include",
      });
      
      //console.log("data:", await result.json());
      const arrais = await result.json()
      setEventUser(arrais);
      console.log("eventUser:", eventUser);
    };
    fetchData();
  }, []);

  console.log("eventUser=========>", eventUser);

  return (
    <>
  {/* {eventUser.map((el) => ( <div>{localhost + el.eventphotolink}</div> ))} */}
  <Grid container>
  <Grid item xs>
    content
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







      {/* {eventUser.map((el) => (
         
        
        <Card sx={{ display: "flex", margin: "100px" }} key={el.id}>
          <CardMedia
            component="img"
            sx={{ width: 351 }}
            image={localhost + el.eventphotolink}
            alt="There is a photo here"
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {el.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {`${el.description.slice(0, 250)}...`}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Typography component="div" variant="h6">
                {`Event date: ${el.dataTime}`}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Typography component="div" variant="h6">
                {`Address: ${el.address}`}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Stack direction="row" spacing={2}>
                <Typography component="div" variant="h6">
                  {`Tickets: ${el.ticket}`}
                </Typography>
                <Typography component="div" variant="h6">
                  {`price: ${el.price}`}
                </Typography>
                <Typography component="div" variant="h6">
                  {`totalprice: ${el['Orders.totalprice']}`}
                </Typography>
                <Typography component="div" variant="h6">
                  {`ticketQT: ${el['Orders.ticketQT']}`}
                </Typography>
                <Button size="small" component={Link} to={`/events/${el.id}`}>
                  Details
                </Button>
              </Stack>
            </Box>
          </Box>
        </Card>
      ))} */}
    
    </>
  );
};

export default Profile;
