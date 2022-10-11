import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPersons, addNewPerson } from "../../reducers/aboutReducer"; //импорт action
import styles from "./editaboutus.module.css";
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardItem from '../../components/cardItemAbout/CardItem_About';
import { IconButton } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { TextField } from '@mui/material';

const EditAboutUs = () => {
  const localhost = 'http://localhost:3010';
  const editPage = true;
  const dispatch = useDispatch();
  const newRosterTeam = useSelector((store) => (store.about.team));
  //console.log('YYYYYYYYYYYYYYYYYYYY')

  const [gotDataAbout, setGotDataAbout] = useState({});
  const [activeEditor, setactiveEditor] = useState(false);
  const [editorValue, setEditorValue] = useState('');
  const [file, setFile] = useState([]);
  const [nameMainPhoto, setNameMainPhoto] = useState(gotDataAbout.mainphotolink);
  const [viewSave, setViewSave] = useState(true);
  const [addToRoster, setAddToRoster] = useState(false);
  const [personFormValues, setPersonFormValues] = useState({ firstname: '', lastname: '', personimage: '' });


  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3010/about', {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      setGotDataAbout(data);
      setEditorValue(data.toptext);
      setNameMainPhoto(data.mainphotolink);

      const resOurTeam = await fetch('http://localhost:3010/about/team', {
        method: "GET",
        credentials: "include",
      });
      const dataOurTeam = (await resOurTeam.json()) || [];
      console.log('dataOurTeam>>>>>>>>>>>>>>>', dataOurTeam);
      dispatch(addPersons(dataOurTeam));
    })();
  }, []);

  const handleOpenEdit = (e) => {
    setactiveEditor(true);
  }

  const handleOnEdit = (e) => {

    setEditorValue(e.target.value);
    console.log('setEditorValue>>>>>>>>>>', editorValue);
    const value = e.target.value;
    console.log('value>>>>>>>>>>', value);
    const changed = value === gotDataAbout.toptext;
    return changed ? setViewSave(true) : setViewSave(false);

  }

  const handleSaveTopText = async (e) => {
    e.preventDefault();
    try {
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
    }
  }

  const upload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (e.target.id === 'uploadMainPhoto') {
      data.append('loading_teamPhoto', file);
      console.log('fileeeeeeeeee>>>>>>>>>', file);
      const res = await fetch('http://localhost:3010/admin/editabout', {
        method: 'POST',
        body: data
      });
      const resPhoto = await res.json();
      setNameMainPhoto(resPhoto.mainphotolink);
      console.log('resPhoto>>>>>>>>', resPhoto.mainphotolink);
    } else if (e.target.id === 'uploadPersonPhoto') {
      data.append('loading_personPhoto', file);
      data.append('personData', JSON.stringify(personFormValues));
      console.log('fileeeeeeeeee>>>>>>>>>', file);
      const res = await fetch('http://localhost:3010/admin/editabout/addperson', {
        method: 'POST',
        body: data
      });
      const resFromDB = await res.json();
      let { id, firstname, lastname, position, personimage } = resFromDB;
      console.log('resFromDB>>>>>>>>>>', firstname);
      dispatch(addNewPerson({ id, firstname, lastname, position, personimage }));
      setAddToRoster(false);
    }
  }

  const changeStatusAddCardForm = (status) => {
    if (status === 'open') {
      setAddToRoster(true);
    } else {
      setAddToRoster(false);
    }
    console.log('AddToRoster>>>>>>>>', addToRoster);
  }

  const handleOnInputDataPerson = (e) => {
    console.log('e.target.value>>>>>>>>>>', e.target.id);
    const value = e.target.value;
    if (e.target.id === 'firstName') {
      setPersonFormValues({ ...personFormValues, firstname: value });
    } else if (e.target.id === 'lastName') {
      setPersonFormValues({ ...personFormValues, lastname: value });
    } else if (e.target.id === 'position') {
      setPersonFormValues({ ...personFormValues, position: value });
    }
  }


  return (
    <>
      <Typography sx={{
        textAlign: 'center',
        fontSize: '25px',
        mb: '15px',
      }}>Редактирование страницы About Us</Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        mx: 'auto',
        alignItems: 'center'
      }}>
        <Typography sx={{
          textAlign: 'center',
          fontSize: '25px',
        }}>Edit something</Typography>
        <Box sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'end',
          width: '60%',
          mx: 'auto'
        }}>
          {!activeEditor ? (
            <>
              <Typography variant="h5" align="left" color="text.secondary" paragraph>
                {gotDataAbout.toptext}
              </Typography>
              <Button variant="contained" onClick={handleOpenEdit}>Edit</Button>
            </>
          ) :
            <>
              <TextareaAutosize
                name="editForm"
                aria-label="minimum height"
                minRows={4}
                placeholder="Your Text here..."
                style={{ width: 350 }}
                defaultValue={gotDataAbout.toptext}
                onChange={handleOnEdit}
              />
              <Button variant="contained" disabled={viewSave} onClick={handleSaveTopText}>Save</Button>
            </>
          }
        </Box>

        <div className={styles.aboutMainPicture} >
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
        </Box>

        <Box sx={{
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
          </Box>
          {!addToRoster ? (
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
            </>}
        </Box>

        <Box sx={{ mb: '50px' }}>
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
        </Box>
      </Box>
    </>
  )
}

export default EditAboutUs