import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPersons } from "../../reducers/aboutReducer";
import styles from "./aboutus.module.css";
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import CardItem from '../../components/cardItemAbout/CardItem_About';

import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const AboutUs = () => {
  const localhost = 'http://localhost:3010';
  const editPage = false;
  const dispatch = useDispatch();

  const newRosterTeam = useSelector((store) => (store.about.team));

  const [gotData, setgotData] = useState({});
  const [nameMainPhoto, setNameMainPhoto] = useState('');

  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3010/about', {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      //console.log('data:', data);
      setgotData(data);
      setNameMainPhoto(localhost + data.mainphotolink);

      const resOurTeam = await fetch('http://localhost:3010/about/team', {
        method: "GET",
        credentials: "include",
      });
      const dataOurTeam = (await resOurTeam.json()) || [];
      //console.log('dataOurTeam>>>>>>>>>>>>>>>', dataOurTeam);
      dispatch(addPersons(dataOurTeam));
    })();
  }, []);

  return (
    <>
      <div className={styles.aboutMainPicture} >
        <img src={`${nameMainPhoto}`} />
      </div>
      {/* <span className={styles.component} > {props.title}</span> */}
      {/* <div>AboutUs</div> */}
      <Typography variant="h5" align="left" color="text.secondary" paragraph>
        {gotData.toptext}
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {newRosterTeam.map((item, index) => {
            return <Box key={index} >
              <CardItem id={item.id}
                firstname={item.firstname}
                lastname={item.lastname}
                position={item.position}
                image={item.personimage}
                editpage={editPage}
              />
            </Box>
          })}
        </Box>
      </Box>
      <Typography variant="h5" align="left" color="text.secondary" paragraph>
        {gotData.bottomtext}
      </Typography>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        my: '50px',
      }}>
        <Box sx={{
          flexBasis: '50%',
          ml: '10%',
        }}>
          <Typography sx={{
            textAlign: 'center',
            fontSize: '25px',
          }}>Contacts</Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <Typography>Address</Typography>
            <Typography>Phone</Typography>
            <Typography>Email</Typography>
          </Box>
        </Box>
        <Box sx={{
          flexBasis: '50%',
        }}>
          <Typography sx={{
            textAlign: 'center',
            fontSize: '25px',
          }}>Follow Us</Typography>
          <Box sx={{
            textAlign: 'center',
          }}>
            <IconButton >
              <FacebookIcon />
            </IconButton>
            <IconButton >
              <TelegramIcon />
            </IconButton>
            <IconButton >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AboutUs;