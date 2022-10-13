import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addPersons, addNewPerson } from "../../reducers/aboutReducer"; //импорт action
import styles from "./profile.module.css";

import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardItem from "../../components/cardItemAbout/CardItem_About";
import { IconButton } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { TextField } from "@mui/material";

const Profile = () => {
  const localhost = "http://localhost:3010/";

  const [gotUserData, setGotUserData] = useState({});
  const [activeUserEditor, setActiveUserEditor] = useState(true);
  const [file, setFile] = useState([]);
  const [userMainPhoto, setUserMainPhoto] = useState(gotUserData.userphotolink);
  const [userValue, setUserValue] = useState({
    firstName: "",
    lastName: "",
    isAdmin: false,
  });  

  const handleOpenUserEdit = (e) => {
    setActiveUserEditor(false);
  };

  const handleEditUser = (event) => {
    const { name, value } = event.target;
    setUserValue({ ...userValue, [name]: value });
    console.log('userValue=======>', userValue)
  };

  const onSubmitPutUserInfoHandler = async (event) => {
    event.preventDefault();
    try {
/*         const data = new FormData();
        data.append("firstname", userValue.firstName);
        data.append("lastname", userValue.lastName);  */       
        const response = await fetch("http://localhost:3010/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userValue),
        //body: data,
      });
      console.log('response==========>', response)
      setUserValue({
        firstName: "",
        lastName: "",
      });
      //setActiveUserEditor(!activeUserEditor);

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



  React.useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3010/profile", {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      console.log("data========>", data);
      setGotUserData(data);
      console.log("gotUserData===========>", gotUserData);
      /*       setUserValue(data.email);
      setUserMainPhoto(data.userphotolink); */

      /*       const resOurTeam = await fetch('http://localhost:3010/about/team', {
        method: "GET",
        credentials: "include",
      });
      const dataOurTeam = (await resOurTeam.json()) || [];
      console.log('dataOurTeam>>>>>>>>>>>>>>>', dataOurTeam);
      dispatch(addPersons(dataOurTeam)); */
    })();
  }, []);

  /*   const handleOpenEdit = (e) => {
    setactiveEditor(true);
  } */



/*   const handleEditUser = (e) => {

    setUserValue(e.target.value);
    console.log("setEditorValue>>>>>>>>>>", setUserValue);
    const value = e.target.value;
    console.log("value>>>>>>>>>>", value);
    const changed = value === gotUserData.email;
  }; */

  const handleSaveUserInfo = async (e) => {
    e.preventDefault();
    /*     try {
      const res = await fetch('http://localhost:3010/admin/editabout', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nameField: 'topText', editorValue
        }),
      });
      if (!res.ok)
        throw new Error('Данные не удалось изменить');
      const data = await res.json();
      console.log('data>>>>>>>>>>>>>>>', data);
      setactiveEditor(false);
      setGotDataAbout(data)
    } catch (err) {
      console.log(err);
      alert(err.message);
    } */
  };

  /*   React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3010/profile', {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      console.log(data)
      setGotUserData(data);
      console.log('GotUserData', gotUserData)
      setUserValue(data.toptext);
      setUserMainPhoto(data.mainphotolink);

      const resOurTeam = await fetch('http://localhost:3010/about/team', {
        method: "GET",
        credentials: "include",
      });
      const dataOurTeam = (await resOurTeam.json()) || [];
      console.log('dataOurTeam>>>>>>>>>>>>>>>', dataOurTeam);
      dispatch(addPersons(dataOurTeam));
    })();
  }, []); */

  /*   React.useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3010/eventpage/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const [data] = (await res.json()) || [];      
      setTheEvent(data);          
    })();
  }, []); */

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
          mb: "15px",
        }}
      >
        Редактирование страницы About Us
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
          {activeUserEditor ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Firstname: {gotUserData.firstName}</Typography>
                <Typography>Lastname: {gotUserData.lastName}</Typography>
                <Button variant="contained" onClick={handleOpenUserEdit}>
                  Edit
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "end",
                  width: "60%",
                  mx: "auto",
                }}
              >
                <form onSubmit={onSubmitPutUserInfoHandler}>
                  <TextField
                    id="outlined-basic"
                    label="firstname..."
                    style={{ width: 200 }}
                    variant="outlined"
                    margin="normal"
                    name="firstName"
                    onChange={handleEditUser}
                    value={gotUserData.firsName}
                  />

                  <TextField
                    id="outlined-basic"
                    label="lastname..."
                    style={{ width: 200 }}
                    variant="outlined"
                    margin="normal"
                    name="lastName"
                    onChange={handleEditUser}
                    value={gotUserData.lastName}
                  />                 
                  {/*             <Box
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
            </Box> */}                  
                  <Button variant="contained" type="submit" margin="normal">
                    Save
                  </Button>
                </form>
              </Box>

              {/*               <TextareaAutosize
                name="editForm"
                aria-label="minimum height"
                minRows={4}
                placeholder="Your Text here..."
                style={{ width: 350 }}
                defaultValue={gotUserData.email}
                onChange={handleEditUser}
              />
              <Button variant="contained" onClick={handleSaveUserInfo}>Save</Button> */}
            </>
          )}
        </Box>

        {/*         <div className={styles.aboutMainPicture} >
          <img src={`${localhost + nameMainPhoto}`} />
        </div>
        <Box sx={{
          display: 'flex',
          gap: '37px',
          width: '60%',
          mx: 'auto'
        }}>

          <Button variant="contained" component="label" >
            Select Main Photo
            <input name="loading_teamPhoto"
              hidden
              accept="image/*"
              type="file"
              onChange={e => { setFile(e.target.files[0]) }}
            />
          </Button>
          <Button variant="contained"
            component="label"
            id='uploadMainPhoto'
            onClick={upload}>
            Upload
          </Button>
        </Box> */}

        {/*         <Box sx={{
          mb: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography sx={{
            textAlign: 'center',
            fontSize: '25px',
            py: '30px',
            mx: 'auto'
          }}>Our Team</Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            {newRosterTeam.map((item, index) => {
              return <Box key={index} >
                <CardItem id={item.id} 
                  firstname={item.firstname}
                  lastname={item.lastname}
                  position={item.position}
                  image={item.personimage}
                  editpage={editPage}
                />
              </Box>
            })}
          </Box> */}
        {/*  {!addToRoster ? (
            <>
              <IconButton onClick={() => changeStatusAddCardForm('open')} color="primary"
                sx={{
                  width: '55px',
                  height: '55px',
                }}>
                <PersonAddAlt1Icon />
              </IconButton>
            </>
          ) :
            <>
              <Box sx={{
                margin: '50px',
              }}>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                  Добавление нового сотрудника
                </Typography>

                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  alignItems: 'center',
                  //width: '60%',
                  mx: 'auto'
                }}>
                  <Box sx={{
                    display: 'flex',
                    gap: '10px',
                  }}>
                    <Button variant="contained" component="label" >
                      Select Person Photo
                      <input name="loading_personPhoto"
                        hidden
                        require
                        accept="image/*"
                        type="file"
                        onChange={e => { setFile(e.target.files[0]) }}
                      />
                    </Button>
                  </Box>
                  <TextField onChange={handleOnInputDataPerson} id="firstName" label="FirstName" variant="outlined" />
                  <TextField onChange={handleOnInputDataPerson} id="lastName" label="LastName" variant="outlined" />
                  <TextField onChange={handleOnInputDataPerson} id="position" label="Position" variant="outlined" />
                  <Button variant="contained"
                    component="label"
                    id='uploadPersonPhoto'
                    onClick={upload}>
                    Apply
                  </Button>
                </Box>
              </Box>
            </>} */}
        {/* </Box> */}

        {/*  <Box sx={{ mb: '50px' }}>
          <Typography sx={{
            textAlign: 'center',
            fontSize: '25px',
            py: '30px'
          }}>Edit contacts</Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
            gap: '70px',
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <Typography>Address</Typography>
              <Typography>Phone</Typography>
              <Typography>Email</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'end', gap: '10px' }}>
              <Button variant="contained">Save</Button>
              <Button variant="contained">Edit</Button>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </>
  );
};

export default Profile;
