import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./addevent.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const AddEvent = () => {
  const localhost = "http://localhost:3010";

  //!Redux
  const dispatch = useDispatch();
  const event = useSelector((store) => store.event.event);

  const [eventValue, setEventValue] = useState({
    title: "",
    description: "",
    ticket: 0,
    price: 0,
    address: "",
  });
  const [filePhotoEvent, setFilePhotoEvent] = useState(null);
  const [listOfEvent, setListOfEvent] = useState([]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setEventValue({ ...eventValue, [name]: value });
  };

  React.useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3010/eventpage", {
        method: "GET",
        credentials: "include",
      });
      const dataEvent = (await res.json()) || [];
      //! dispatch({ type: "initState", payload: { data } });
      setListOfEvent(dataEvent);
      dispatch({ type: "INIT_EVENT", payload: { dataEvent } });
    })();
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    //!redux
    dispatch({ type: "ADD_EVENT", payload: { eventValue } });
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
      setEventValue({
        title: "",
        description: "",
        ticket: 0,
        price: 0,
        address: "",
      });
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const delEventHandler = async (id) => {
    try {
      const response = await fetch("http://localhost:3010/admin/addevent", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) dispatch({ type: "DELETE_EVENT", payload: { id } });
    } catch (err) {
      console.log(err);
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

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {event.map((el, index) => (
              <Grid xs={2} sm={4} md={4} key={index}>
                <Paper elevation={5} style={{ width: 200 }}>
                  Title: {el.title}
                  <br />
                  Ticket: {el.ticket}
                  <br />
                  Price: {el.price}
                  <br />
                  <Button
                    size="small"
                    component={Link}
                    to={`/admin/addevent/${el.id}`}
                  >
                    Details
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => delEventHandler(el.id)}
                  >
                    Delete
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          {listOfEvent.map((el) => {
            return;
          })}
        </Typography>
      </Box>
    </>
  );
};

export default AddEvent;
