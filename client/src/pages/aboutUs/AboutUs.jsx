import React from 'react'
import styles from "./aboutus.module.css";
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

import CardItem from '../../components/cardItemAbout/CardItem_About';
import images from '../../community.jpg';

const AboutUs = () => {
  //console.log('img', img);
  return (
    <>
      <div className={styles.aboutMainPicture}></div>
      {/* <span className={styles.component} > {props.title}</span> */}
      {/* <div>AboutUs</div> */}
      <Box sx={{
        display: 'flex',
      }}>
        <CardItem />
        <CardItem />
      </Box>
    </>
  )
}

export default AboutUs;