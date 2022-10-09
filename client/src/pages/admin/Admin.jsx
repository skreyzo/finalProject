import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import AdminButton from '../../components/AdminButton';

const Admin = () => {
  return (
    <div>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10',
        width: '100%',
        py: '20px',
        px: '15px'
      }}>
        <AdminButton title="New News" path="/newnews"></AdminButton>
        <AdminButton title="Add Event" path="/admin/addevent"></AdminButton>
        <AdminButton title="Edit About Us" path="/admin/editaboutus"></AdminButton>
        <AdminButton title="Edit HomePage" path="/admin/edithomepage"></AdminButton>
      </Box>
    </div>
  );
};

export default Admin;