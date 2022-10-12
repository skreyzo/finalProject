import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

const TheEvent = () => {

  const localhost = "http://localhost:3010/";
  let { id } = useParams();
  const [theEvent, setTheEvent] = useState({});
  console.log('paramId======>', id)

  React.useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3010/eventpage/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const [data] = (await res.json()) || [];      
      setTheEvent(data);          
    })();
  }, []);

  return (
    <>
    
    <div >
      <img src={`${localhost + theEvent.eventphotolink}`} alt="There is a photo here" />
    </div>

    <Typography variant="h5" align="left" color="text.secondary" paragraph>
      {theEvent.description}
    </Typography>
  </>
  
  );
};

export default TheEvent;