import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDispatch } from "react-redux";
import { delPerson } from "../../reducers/aboutReducer";

const CardItem = (props) => {
  console.log('props', props);
  const localhost = 'http://localhost:3010';
  const dispatch = useDispatch();

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
      <Card sx={{
        height: '100%',
        width: '100%',
        // position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: '45px'
      }}>
        <CardMedia
          component="img"
          image={localhost + props.image}
          alt="photo"
          sx={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
          }}
          />
        <CardContent >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.firstname}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {props.lastname}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {props.email}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {props.position}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
        </CardActions>
        {props.editpage ? (
          <>
            <IconButton onClick={() => delCard(props.id)} color="primary"
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}>
              <DeleteIcon />
            </IconButton>
          </>
        ) : ''}
      </Card>
    </>
  )
}

export default CardItem




