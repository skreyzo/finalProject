import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

const Events = () => {

  const event = useSelector((store) => store.event.event);
  console.log('event', event)

  

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://static-cse.canva.com/blob/847064/29.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {event.body} */}
          </Typography>
        </CardContent>
        <CardActions>
          <form action={`/events/${event.id}`}>
            <Button type="submit" size="small">
              More details
            </Button>
          </form>
        </CardActions>
      </Card>
    </>
  );
};

export default Events;
