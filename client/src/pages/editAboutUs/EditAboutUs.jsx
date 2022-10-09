import React, { useState } from 'react';
import styles from "./editaboutus.module.css";
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const EditAboutUs = () => {
  const localhost = 'http://localhost:3010';

  const [gotData, setgotData] = useState({});
  const [activeEditor, setactiveEditor] = useState(false);
  const [editorValue, setEditorValue] = useState('');
  const [file, setFile] = useState([]);
  const [nameMainPhoto, setNameMainPhoto] = useState(gotData.mainphotolink);
  const [viewSave, setViewSave] = useState({showData: false});

  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3010/about', {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      setgotData(data);
      setEditorValue(data.toptext);
      setNameMainPhoto(data.mainphotolink);
    })();
  }, []);

  const handleOpenEdit = (e) => {
    setactiveEditor(true);
    //console.log('editTopText', editTopText);
  }
  const handleOnEdit = (e) => {
   setEditorValue(e.target.value);
   
 
  }
  
  const handleSaveTopText = async (e) => {
    //console.log('editField', editField);
    //e.preventDefault();
    try {
      const response = await fetch('http://localhost:3010/editabout', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nameField: 'topText', editorValue
        }),
      });
      // if (!response.ok)
      //   throw new Error(
      //     'Ошибка при добавлении: ${response.statusText} ${response.status}'
      //   );
      // const data = await response.json();
      // if (data.err) throw new Error(data.err)
      // dispatch(addTodo(data.todo))
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  const upload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('loading_teamPhoto', file);
    const res = await fetch('http://localhost:3010/editabout', {
      method: 'POST',
      body: data
    });
    const resPhoto = await res.json();
    setNameMainPhoto(resPhoto.mainphotolink);
    console.log('resPhoto>>>>>>>>', resPhoto.mainphotolink);
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
                {gotData.toptext}
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
                defaultValue={gotData.toptext}
                onChange={handleOnEdit}
              />
              <Button variant="contained" disabled={false} onClick={handleSaveTopText}>Save</Button>
            </>
          }          
        </Box>

        <div className={styles.aboutMainPicture} >
          <img src={`${localhost+nameMainPhoto}`} />
        </div>
        <Box sx={{
          display: 'flex',
          gap: '37px',
          width: '60%',
          mx: 'auto'
        }}>
          
          <Button variant="contained" component="label" >
            Select Team Photo
            <input name="loading_teamPhoto"
              hidden
              accept="image/*"
              type="file"
              onChange={e => { setFile(e.target.files[0]) }}
            />
          </Button>
          <Button variant="contained"
            component="label"
            onClick={upload}>
            Upload
          </Button>
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