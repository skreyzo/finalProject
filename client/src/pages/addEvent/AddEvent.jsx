import React, { useState } from "react";
import styles from "./addevent.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";


const AddEvent = () => {  
  const localhost = "http://localhost:3010";

  const [eventValue, setEventValue] = useState({
    title: '',
    description: '',
    ticket: 0,
    price: 0,
    address: '',    
  });
  const [filePhotoEvent, setFilePhotoEvent] = useState(null);

  const onChangeHandler = (event) => {    
    const { name, value } = event.target;
    setEventValue({ ...eventValue, [name]: value });    
  };

  /*   const addDataHandler = (data) => {
    seteventValue((prevState) => {
      return [...prevState, {...data, id: (new Date().getTime()).toString(36)}]
    })
  } */

  /*   const onDiscriptionChangeHandler = (event) => {
    setDiscription({ discription: event.target.value });
    console.log("description", description);
  }; */
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {      
      const data = new FormData();
      data.append("loading_eventPhoto", filePhotoEvent);
      data.append("title", eventValue.title);
      data.append("description", eventValue.description);
      data.append("ticket", eventValue.ticket);
      data.append("price", eventValue.price);
      data.append("address", eventValue.address);      
      const response = await fetch("http://localhost:3010/admin/addevent", {
        method: "POST",
/*         headers: {
          "Content-Type": "application/json",
        }, */
        //body: JSON.stringify(eventValue),
        body: data,
      });
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <>
      <Typography
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
          
          <form onSubmit={onSubmitHandler}>
            <TextField
              id="outlined-basic"
              label="Title..."
              style={{ width: 200 }}
              variant="outlined"
              margin="normal"
              name="title"
              onChange={onChangeHandler}
              value={eventValue.title}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Description..."
              multiline
              style={{ width: 200 }}
              maxRows={10}
              margin="normal"
              name="description"
              onChange={onChangeHandler}
              value={eventValue.description}
            />

            <TextField
              id="outlined-basic"
              label="Ticket..."
              style={{ width: 200 }}
              variant="outlined"
              margin="normal"
              type="number"
              name="ticket"
              onChange={onChangeHandler}
              value={eventValue.ticket}
            />

            <TextField
              id="outlined-basic"
              label="Price..."
              style={{ width: 200 }}
              variant="outlined"
              margin="normal"
              type="number"
              name="price"
              onChange={onChangeHandler}
              value={eventValue.price}
            />

            <TextField
              id="outlined-basic"
              label="Address..."
              style={{ width: 200 }}
              variant="outlined"
              margin="normal"
              name="address"
              onChange={onChangeHandler}
              value={eventValue.address}
            />
            <br />
            <Box
          sx={{
            display: "flex",
            gap: "37px",
            width: "-60%",
            mx: "auto",
          }}       
          >
            <Button variant="contained" component="label">
              Select Event Photo
              <input
                name="eventphotolink"
                hidden
                accept="image/*"
                type="file"                
                onChange={(e) => {
                  setFilePhotoEvent(e.target.files[0]);
                }} 
              />
            </Button>          
        </Box>
        <br />
            <Button variant="contained" type="submit" margin="normal">
              Save
            </Button>
          </form>
        </Box>     

        {/*         <div className={styles.aboutMainPicture}>
          <img
            src={`${localhost + nameHomePhoto}`}
            alt="There is a photo here"
          />
        </div>
        <Box
          sx={{
            display: "flex",
            gap: "37px",
            width: "60%",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "37px",
              width: "60%",
              mx: "auto",
            }}
          >
            <Button variant="contained" component="label">
              Select Greeting Photo
              <input
                name="loading_teamPhoto"
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => {
                  setFilePhotoHome(e.target.files[0]);
                }}
              />
            </Button>
            <Button variant="contained" component="label" onClick={upload}>
              Upload
            </Button>
          </Box>
        </Box> */}
      </Box>
    </>
  );
};

export default AddEvent;
