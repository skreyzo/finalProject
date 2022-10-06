import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const EditAboutUs = () => {

  const [gotData, setgotData] = useState({});
  const [editTopText, setEditTopText] = useState(false);
  const [editField, setEditField] = useState('');  

  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3010/about', {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      console.log('data:', data);
      setgotData(data);
      setEditField(data.toptext);
    })();
  }, []);

  console.log('editTopText', editTopText);
  const handleEditTopText = (e) => {    
    setEditTopText(true);
    //console.log('editTopText', editTopText);
  }

  const handleSaveTopText = async (e) => {
    
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
          {/* <TextareaAutosize
            aria-label="minimum height"
            minRows={4}
            placeholder="Your Text here..."
            style={{ width: 350 }}
          /> */}
          
          {!editTopText ? (
            <>
              <Typography variant="h5" align="left" color="text.secondary" paragraph>
                {gotData.toptext}
              </Typography>
            </>
          ) :
            <>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                placeholder="Your Text here..."
                style={{ width: 350 }}
                defaultValue = {gotData.toptext}
                onChange={(e) => setEditField( e.target.value )}
              />
            </>
          }          

          <Button variant="contained" onClick={handleSaveTopText}>Save</Button>
          <Button variant="contained" onClick={handleEditTopText}>Edit</Button>
        </Box>

        <Box sx={{
          display: 'flex',
          gap: '37px',
          width: '60%',
          mx: 'auto'
        }}>
          <Button variant="contained" component="label">
            Upload Big Photo
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button variant="contained" component="label">
            Upload Team Photo
            <input hidden accept="image/*" multiple type="file" />
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