import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'blue',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'blue',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
      
    },
  },
});

const Input = (props) => {
  return (
    <Box
      component="form"
      sx={{
        marginTop: '100px',
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr', mt: '10px' },
        gap: 2,
      }}
    >
        <CssTextField 
        onChange={(event)=> props.setValue(event.target.value)}
        type={props.type} label={props.label}/>
    </Box>
  );
}

export default Input;
