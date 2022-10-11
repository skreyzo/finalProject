import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDispatch } from "react-redux";
import { delPerson } from "../../reducers/aboutReducer";

const CardItem = (props) => {
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
      <Card sx= {{
          maxWidth: 250,
          position: 'relative'
        }}>
        <CardMedia
          component="img"
          height="100"
          image={localhost + props.image}
          alt="photo" />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {`${props.firstname} ${props.lastname}`}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {props.position}
          </Typography>
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




