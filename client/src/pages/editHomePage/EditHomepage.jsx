import React, { useState } from "react";
import styles from "./edithomepage.module.css";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const EditHomepage = () => {
  const localhost = "http://localhost:3010";

  const [textHomePage, setTextHomePage] = useState({});
  const [editHomePageText, setEditHomePageText] = useState(true);
  const [editField, setEditField] = useState({});
  const [filePhotoHome, setFilePhotoHome] = useState([]);
  const [nameHomePhoto, setNameHomePhoto] = useState(editField.bigfoto);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3010/homepage", {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];

      setEditField(data);
      setTextHomePage(data.greeting);
      setNameHomePhoto(data.bigfoto);
/*       console.log("data fetch homepage GET", data);
      console.log("textHomePage fetch homepage GET", textHomePage);
      console.log("nameHomePhoto", nameHomePhoto); */
    })();
  }, []);

  const handleEditHomePageText = () => {
    setEditHomePageText(false);
  };

  const onChangeHandler = (event) => {
    //console.log(event.target.value)
    setTextHomePage({ value: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3010/admin/edithomepage", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(textHomePage),
      });
      setEditHomePageText(!editHomePageText);

      /*       if (!response.ok)
        throw new Error(
          `Error when adding: ${response.statusText} ${response.status}`
        );      
      const data = await response.json();
      setTextHomePage(textHomePage);      
      console.log("data fetch homepage PUT", data);
      if (data.err) throw new Error(data.err); */
      //setTextHomePage({value: ''})   // очищаем поле ввода
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  //! multer upload
  const upload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("loading_greetingPhoto", filePhotoHome);
    const res = await fetch("http://localhost:3010/admin/edithomepage", {
      method: "POST",
      body: data,
    });
    const resHomePhoto = await res.json();
    setNameHomePhoto(resHomePhoto.bigfoto);
    console.log("resHomePhoto fetch POST", resHomePhoto.bigfoto);
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
        Edit Home Page
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
          {editHomePageText ? (
            <>
              <Button variant="contained" onClick={handleEditHomePageText}>
                Edit
              </Button>
            </>
          ) : (
            <>
              <form onSubmit={onSubmitHandler}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={4}
                  placeholder="Your Text here..."
                  style={{ width: 350 }}
                  defaultValue={editField.greeting}
                  onChange={onChangeHandler}
                />
                <Button variant="contained" type="submit">
                  Save
                </Button>
              </form>
            </>
          )}
        </Box>

        <div className={styles.aboutMainPicture}>
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
        </Box>
      </Box>
    </>
  );
};

export default EditHomepage;
