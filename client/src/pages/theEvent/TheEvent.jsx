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
import style from "./theEvent.module.css";

const TheEvent = () => {
  const localhost = "http://localhost:3010/";
  let { id } = useParams();
  const [theEvent, setTheEvent] = useState({});
  console.log("paramId======>", id);

  //registration to event states
  const [regInfo, setRegInfo] = useState({ ticketQT: 0 });

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

  const onChangeRegHandler = (event) => {
    console.log("event.target=======>", event.target.value);
    setRegInfo({ ticketQT: event.target.value });
  };

  const onSubmitRegHandler = async (event) => {
    event.preventDefault();
    try {
      /*       const data = new FormData();
      console.log('regInfo============>', regInfo)
      data.append("ticketQT", regInfo);
      console.log('data============>', data) */
      //console.log('regInfo============>', regInfo)
      const response = await fetch(`http://localhost:3010/eventpage/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regInfo),
        // body: data,
      });
      setRegInfo({
        ticketQT: 0,
      });

      /*       const res = await fetch(`http://localhost:3010/eventpage/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(regInfo),
       // body: data,
      });
      setRegInfo({
        ticketQT: 0,        
      }); */
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <>
      <div className={style.text}>
        <Typography variant="h5" color="text.secondary">
          <h1>{theEvent.title}</h1>
        </Typography>
      </div>

      <div>
        <img
          className={style.img}
          src={`${localhost + theEvent.eventphotolink}`}
          alt="There is a photo here"
        />
      </div>
      <div className={style.text}>
        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          {theEvent.description}
        </Typography>
        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          Price: {theEvent.price}
        </Typography>
        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          Place: {theEvent.address}
        </Typography>
        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          Date: {theEvent.dataTime}
        </Typography>
      </div>

      {/* <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
          mb: "15px",
        }}
      >
        Add Event Page
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          mx: "auto",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          Edit something
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "end",
            width: "60%",
            mx: "auto",
          }}
        >
//           <form onSubmit={onSubmitRegHandler}>
//             <TextField
//               id="outlined-basic"
//               label="ticketQT..."
//               style={{ width: 200 }}
//               type="number"
//               variant="outlined"
//               margin="normal"
//               name="ticketQT"
//               onChange={onChangeRegHandler}
//               value={regInfo.ticketQT}
//             /> */}

      {/*             <br />
//             <Box
//               sx={{
//                 display: "flex",
//                 gap: "37px",
//                 width: "-60%",
//                 mx: "auto",
//               }}
//             >

//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <Stack spacing={3}>
//                   <DateTimePicker
//                     label="Date&Time picker"
//                     value={valueDataTime}
//                     onChange={handleChange}
//                     renderInput={(params) => <TextField {...params} />}
//                   />
//                 </Stack>
//               </LocalizationProvider>
//               <Button variant="contained" component="label">
//                 Select Event Photo
//                 <input
//                   name="eventphotolink"
//                   hidden

//                   accept="image/*"
//                   type="file"
//                   onChange={(e) => {
//                     setFilePhotoEvent(e.target.files[0]);
//                   }}
//                 />
//               </Button>
//             </Box>
//             <br /> */}

      {/* //             <Button variant="contained" type="submit" margin="normal">
//               Save
//             </Button> */}
      {/* </form>
        </Box>
      </Box> */}
    </>
  );
};

export default TheEvent;
