import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPersons, addNewPerson, delPerson } from "../../reducers/aboutReducer";
import { newContacts } from "../../reducers/contactsReducer";
import styles from "./editaboutus.module.css";
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardItem from '../../components/cardItemAbout/CardItem_About';
import { IconButton } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { TextField } from '@mui/material';
import Container from '@mui/material/Container';

const EditAboutUs = () => {
  const localhost = 'http://localhost:3010';
  const editPage = true;
  const dispatch = useDispatch();
  const newRosterTeam = useSelector((store) => (store.about.team));

  const [gotDataAbout, setGotDataAbout] = useState({});
  const [mainTextEditor, setMainTextEditor] = useState(false);
  const [editorValue, setEditorValue] = useState('');
  const [file, setFile] = useState([]);
  const [nameMainPhoto, setNameMainPhoto] = useState(gotDataAbout.mainphotolink);
  const [viewSave, setViewSave] = useState(true);
  const [addToRoster, setAddToRoster] = useState(false);
  const [personFormValues, setPersonFormValues] = useState({ firstname: '', lastname: '', personimage: '' });
  const [contactsEditor, setContactsEditor] = useState(false);
  const [contactsFormValues, setContactsFormValues] = useState({ address: '', phone: '', email: '' });

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
    //console.log('targetBtn>>>>>>', e.target.id);
    if (e.target.id === 'editTopBtn') {
      setMainTextEditor(true);
    } else if (e.target.id === 'editTopBtnClose') {
      setMainTextEditor(false);
    }
    else if (e.target.id === 'editContactsBtn') {
      setContactsEditor(true);
    } else if (e.target.id === 'editContactsBtnClose') {
      setContactsEditor(false);
    }
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
      setMainTextEditor(false);
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
    } else if (e.target.id === 'uploadContacts') {
      data.append('contacts', JSON.stringify(contactsFormValues));
      console.log('data.getAll>>>>>>>', data.getAll('contacts'));
      const res = await fetch('http://localhost:3010/admin/editabout/addcontacts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(contactsFormValues)
      });
      const resFromDB = await res.json();
      let { address, phone, email } = resFromDB;
      dispatch(newContacts({ address, phone, email }));
      setContactsEditor(false);
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

  const handleOnInputContacts = (e) => {
    console.log('e.target.value>>>>>>>>>>', e.target.id);
    const value = e.target.value;
    if (e.target.id === 'Address') {
      setContactsFormValues({ ...contactsFormValues, address: value });
    } else if (e.target.id === 'Phone') {
      setContactsFormValues({ ...contactsFormValues, phone: value });
    } else if (e.target.id === 'Email') {
      setContactsFormValues({ ...contactsFormValues, email: value });
    }
  }

  const delCard = async (id) => {
    const res = await fetch('http://localhost:3010/admin/editabout/delperson', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id })
    });
    if (res.status === 200) {
      dispatch(delPerson(id));
    }
  }

  return (
    <>
      <Container maxWidth={false} disableGutters={true}
        sx={{
          maxWidth: '1200px',
          mx: '',
          px: '10px',
        }}>
        <Typography sx={{
          textAlign: 'center',
          fontSize: '25px',
          mb: '15px',
        }}>      </Typography>

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
          }}>Edit data on About page</Typography>
          <Box sx={{
            //display: 'flex',
            //gap: '10px',
            //alignItems: 'center',
            //width: '100%',
            //mx: 'auto'
          }}>
            {!mainTextEditor ? (
              <>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <Box sx={{}}>
                    <Typography variant="h5" align="left" color="text.secondary" paragraph
                      sx={{ maxWidth: '500px' }}>
                      {gotDataAbout.toptext}
                    </Typography>
                  </Box>
                  <Button id="editTopBtn" variant="contained" onClick={handleOpenEdit}>Edit</Button>
                </Box>
              </>
            ) :
              <>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <TextareaAutosize
                    name="editForm"
                    aria-label="minimum height"
                    minRows={4}
                    placeholder="Your Text here..."
                    style={{ width: 350 }}
                    defaultValue={gotDataAbout.toptext}
                    onChange={handleOnEdit}
                  />
                  <Box sx={{
                    mt: '30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '30px',
                  }}>
                    <Button variant="contained" disabled={viewSave} onClick={handleSaveTopText}>Save</Button>
                    <Button id="editTopBtnClose" variant="contained" onClick={handleOpenEdit}>Close</Button>
                  </Box>
                </Box>
              </>
            }
          </Box>

          <div className={styles.aboutMainPicture} >
            <img src={`${localhost + nameMainPhoto}`} />
          </div>
          <Box sx={{
            display: 'flex',
            gap: '37px',
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
            alignItems: 'center',
          }}>
            <Typography sx={{
              textAlign: 'center',
              fontSize: '25px',
              py: '30px',
            }}>Our Team</Typography>
            <Box sx={{
              display: 'flex',                
              flexBasis: '50%',
              flexWrap: 'wrap',  
              gap: '50px', 
              my: '25px',
              // display: 'flex',
              // flexDirection: 'row',
              // flexWrap: 'wrap',
              // width: '100%',
              // alignItems: 'flex-start',
              justifyContent: 'center'
            }}>
              {newRosterTeam?.map((item, index) => {
                return <Box sx={{
                  display: 'flex',
                  position: 'relative',                
                //flexBasis: '50%',
                my: '10px',  
                  // flex: '33.33%',
                  // //maxWidth: '33.33%', 
                  // justifyContent: 'space-between'
                }} key={index} >
                  <CardItem id={item.id}
                    firstname={item.firstname}
                    lastname={item.lastname}
                    position={item.position}
                    image={item.personimage}
                    editpage={editPage} />
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
                  <PersonAddAlt1Icon sx={{
                    mt: '25px',
                    width: '55px',
                    height: '55px',
                  }} />
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
                          accept="image/*"
                          type="file"
                          onChange={e => { setFile(e.target.files[0]) }}
                        />
                      </Button>
                    </Box>
                    <TextField onChange={handleOnInputDataPerson} id="firstName" label="FirstName" variant="outlined" />
                    <TextField onChange={handleOnInputDataPerson} id="lastName" label="LastName" variant="outlined" />
                    <TextField onChange={handleOnInputDataPerson} id="position" label="Position" variant="outlined" />
                    <Box sx={{
                      display: 'flex',
                      gap: '10px',
                    }}>
                      <Button variant="contained"
                        component="label"
                        id='uploadPersonPhoto'
                        onClick={upload}>
                        Apply
                      </Button>
                      <Button variant="contained"
                        component="label"
                        onClick={() => changeStatusAddCardForm('close')}>
                        Close
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </>}
          </Box>
          <Box sx={{ mb: '50px' }}>
            <Typography sx={{
              textAlign: 'center',
              fontSize: '25px',
              mb: '30px'
            }}>Edit contacts</Typography>
            <Box >
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                {
                  !contactsEditor ? (
                    <>
                      <Button id="editContactsBtn" variant="contained" onClick={handleOpenEdit}>Edit</Button>
                    </>
                  ) :
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '30px',
                    }}>
                      <TextField onChange={handleOnInputContacts} id="Address" label="Address" variant="outlined" />
                      <TextField onChange={handleOnInputContacts} id="Phone" label="Phone" variant="outlined" />
                      <TextField onChange={handleOnInputContacts} id="Email" label="Email" variant="outlined" />
                      <Box sx={{
                        display: 'flex',
                        gap: '37px',
                        mx: 'auto',
                        //mt: '30px',
                      }}>
                        <Box sx={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'space-between',
                          gap: '30px',
                        }}>
                          <Button variant="contained" id='uploadContacts' onClick={upload}>Save</Button>
                          <Button id="editContactsBtnClose" variant="contained" onClick={handleOpenEdit}>Close</Button>
                        </Box>
                      </Box>
                    </Box>
                }
              </Box>
            </Box>
          </Box>
        </Box>


      </Container>

    </>
  )
}

export default EditAboutUs



