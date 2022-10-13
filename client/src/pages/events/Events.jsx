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

const Events = () => {
  const localhost = "http://localhost:3010/";
  const dispatch = useDispatch();
  const eventStore = useSelector((store) => store.event.event);

  const [event, setEvent] = useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3010/eventpage", {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      //console.log("data:", data);
      setEvent(data); 
      dispatch(initEvents(data));  
    })();
  }, []);

  return (
    <>
      {eventStore.map((el) => (
        
        <Card sx={{ display: "flex", margin: "50px" }} key={el.id}>
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
                <Button size="small" component={Link} to={`/events/${el.id}`}>
                  Details
                </Button>
              </Stack>
            </Box>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default Events;
