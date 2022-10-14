import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPersons } from "../../reducers/aboutReducer";
import styles from "./aboutus.module.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardItem from '../../components/cardItemAbout/CardItem_About';

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
      console.log('data:', data);
      setgotData(data);
      setNameMainPhoto(localhost + data.mainphotolink);

      const resOurTeam = await fetch('http://localhost:3010/about/team', {
        method: "GET",
        credentials: "include",
      });
      const dataOurTeam = (await resOurTeam.json()) || [];
      console.log('dataOurTeam>>>>>>>>>>>>>>>', dataOurTeam);
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
      <Typography variant="h5" align="center" color="text.secondary" paragraph
      >
        {gotData.toptext}
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>

        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
          px: '50px',
          justifyContent: 'center',  
          my: '70px', 
        }}>
          {newRosterTeam.map((item, index) => {
            return <Box sx={{
              flex: '33.33%', 
            }} 
              key={index} >
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
    </>
  )
}

export default AboutUs;