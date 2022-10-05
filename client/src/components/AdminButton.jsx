import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';;

const AdminButton = (props) => {
  return (
    <Button component={Link}      
      variant="contained"
      color="primary"
      to={props.path}
      sx={{
        ":hover": {
          backgroundColor: '#290000',
          color: '#FFF'
        },
        my: '10px'
      }}>
        {props.title}
    </Button>
  )
}

export default AdminButton