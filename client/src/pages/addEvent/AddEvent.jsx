import React, { useState } from "react";
import styles from "./addevent.module.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//import FormHelperText from "@mui/material/FormHelperText";
//import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
//import InputLabel from "@mui/material/InputLabel";

const AddEvent = () => {
  const localhost = "http://localhost:3010";

  const [title, setTitle] = useState({title: '', discription: ''});
/*   const [discription, setDiscription] = useState({});
  const [ticketQTY, setTicketQTY] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState(""); */
  //const [eventPhoto, setEventPhoto] = useState(editField.bigfoto);

  const onTitleChangeHandler = (event) => {
    setTitle({ title: event.target.value });
    console.log("title", title);
  };

/*   const onDiscriptionChangeHandler = (event) => {
    setDiscription({ discription: event.target.value });
    console.log("discription", discription);
  }; */

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3010/admin/addevent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(title),
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
              onChange={onTitleChangeHandler}
            />
            <br />
            <TextField
              id="outlined-multiline-flexible"
              label="Discription..."
              multiline                            
              style={{ width: 200 }}
              maxRows={10}
              /* value={value} */
              /* onChange={onDiscriptionChangeHandler} */
            />
            <br />
            <TextField
              id="outlined-basic"
              label="TicketQTY..."
              style={{ width: 200 }}
              variant="outlined"
              onChange={onTitleChangeHandler}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Price..."
              style={{ width: 200 }}
              variant="outlined"
              onChange={onTitleChangeHandler}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Address..."
              style={{ width: 200 }}
              variant="outlined"
              onChange={onTitleChangeHandler}
            />
            <br />

            <Button variant="contained" type="submit">
              Save
            </Button>
          </form>

          {/*           <form onSubmit={onSubmitHandler}>

            
            
            <Input
              aria-label="minimum height"
              placeholder="Title..."
              style={{ width: 350 }}
              defaultValue={editField.greeting}
              onChange={onTitleChangeHandler}
            />

            <Button variant="contained" type="submit">
              Save
            </Button>
          </form> */}
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
