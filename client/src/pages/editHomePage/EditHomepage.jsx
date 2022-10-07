import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const EditHomepage = () => {

  const [textHomePage, setTextHomePage] = useState({});
  const [editHomePageText, setEditHomePageText] = useState(false);
  const [editField, setEditField] = useState('');
  const [file, setFile] = useState(null) 

  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3010/about', {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      console.log('data fetch homepage GET', data);
      setTextHomePage(data);
      setEditField(data.toptext);
    })();
  }, []);

  const handleEditHomePageText = () => {
    setEditHomePageText(true);    
  }

  const onChangeHandler = (event) => {
    //console.log(event.target.value)
    setTextHomePage({ value:  event.target.value });
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
      if (!response.ok)
        throw new Error(
          `Error when adding: ${response.statusText} ${response.status}`
        );
      const data = await response.json();  
      console.log('data fetch homepage PUT', data)     
      if (data.err) throw new Error(data.err);      
      setTextHomePage({value: ''})   // очищаем поле ввода
    } catch (err) {
      console.log(err);
      alert(err.message);
    } 
  };

  return (    
    <>
      <Typography sx={{
        textAlign: 'center',
        fontSize: '25px',
        mb: '15px',
      }}>Edit Home Page</Typography>

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
            <TextareaAutosize
            aria-label="minimum height"
            minRows={4}
            placeholder="Your Text here..."
            style={{ width: 350 }}
            /> 

          {!handleEditHomePageText ? (
            <>
              <Typography variant="h5" align="left" color="text.secondary" paragraph>
                {textHomePage.greeting}
              </Typography>
            </>
          ) :
            <>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                placeholder="Your Text here..."
                style={{ width: 350 }}
                defaultValue={textHomePage.greeting}
                onChange={(e) => setEditField(e.target.value)}
              />
              <Button variant="contained" onClick={onSubmitHandler}>Save</Button>
            </>
          }

          
          <Button variant="contained" onClick={handleEditHomePageText}>Edit</Button>
        </Box>
        <Box sx={{
          display: 'flex',
          gap: '37px',
          width: '60%',
          mx: 'auto'
        }}>
{/*           <form
            encType="multipart/form-data"
            onSubmit={submitPost}
          >
            <Button variant="contained" component="label" type="submit">
              Upload Big Photo
              <input name="bigPhoto" hidden 
                     accept="image/*" 
                     multiple type="file" 
                     onChange={(e) => setFile(e.target.files[0])}
                     id="bigPhoto"
                    />
            </Button>
            <Button  variant="contained" component="label" type="submit">
              Upload Team Photo
              <input name="teamPhoto" 
                     hidden accept="image/*" 
                     multiple type="file" 
                     onChange={(e) => setFile(e.target.files[0])}
                     id="file"
                     />
            </Button>
          </form> */}
        </Box>
      </Box>
    </>
/*     <div>
      <div>EditHomepage</div>
      <form
      onSubmit={onSubmitHandler}
      >
        <textarea 
          onChange={onChangeHandler}
          rows="10" cols="70" 
          type="text" name="addGreatings" 
          placeholder="Greetings" 
          />
        <button type="submit">Save</button>
       
      </form>      
    </div> */
  )
}

export default EditHomepage




