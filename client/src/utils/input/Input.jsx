import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#007FFF',
  },
  '& label.Mui-focused': {
    color: '#007FFF',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#007FFF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(25, 118, 210, 0.5)',
    },
    '&:hover fieldset': {
      borderColor: '#007FFF',
      boxShadow: 'rgba(25, 118, 210, 0.5) 0px 20px 15px -10px',
      //boxShadow: '#007FFF  0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
      //boxShadow: '#007FFF 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6p',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#007FFF',
      
    },

  },
});

const Input = (props) => {
  return (
    <Box
      component="form"
      sx={{
        margin: "30px",
        marginLeft: "35%"

      //   display: 'grid',
      //   gridTemplateColumns: { sm: '1fr 1fr', mt: '10px' },
      //   gap: 2,
      }}
    >
        <CssTextField 
        onChange={(event)=> props.setValue(event.target.value)}
        type={props.type} label={props.label}/>
    </Box>
  );
}

export default Input;
