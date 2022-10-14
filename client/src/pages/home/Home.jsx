import React, { useState } from "react";
import styles from "./home.module.css";

import { Box, CardMedia, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Image from 'mui-image'

import Typography from "@mui/material/Typography";

const Home = () => {
  const localhost = "http://localhost:3010/";

  const [textHomePage, setTextHomePage] = useState({});
  const [nameHomePhoto, setNameHomePhoto] = useState("");

  React.useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3010/homepage", {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      // console.log('data:', data);
      setTextHomePage(data);
      setNameHomePhoto(localhost + data.bigfoto);
      console.log('data.bigfoto======>', data.bigfoto)
    })();
  }, []);

  return (
    <>
      <div className={styles.aboutMainPicture}>
        <img src={`${nameHomePhoto}`} alt="There is a photo here" />
      </div>

      {/* <Typography variant="h5" align="left" color="text.secondary" paragraph>
        {textHomePage.greeting}
      </Typography> */}
      <hr></hr>
      <Box 
      width='90vw'
      
      margin="5vw">
        <div className={styles.box}>
          <div className={styles.box__image}>
            <Image src="http://localhost:3010/img/finalProject-home-aboutUs.jpg" alt="photo-homepage-aboutUs" />
          </div>
          <div className={styles.box__info}>
            <Typography position="relative" /* marginLeft="15vw" */ /* marginRight="5vw" */ fontSize="60px" fontWeight="900" textAlign="end" 
            marginBottom="30px">About us</Typography>
            {/* <hr width="70px" margin="" color="#007FFF"/> */}
            <Typography position="relative" marginLeft="3vw" fontSize="30px" fontWeight="900" color="#007FFF" textAlign="end">We are The London <br></br>Community Foundation </Typography>
          </div>
        </div>
        <div className={styles.desc}>
          <p >We're passionate about London, its people, its communities and its vitality. But we also know that it's a place that can exclude and marginalise. We believe London’s small community organisations play a vital role in addressing exclusion and disadvantage, helping to tackle social problems that are best served by people with the trust, reach, and time to provide the support that is needed.</p>
          <Button variant="outlined" component={Link} to={`/aboutUs`}>Read more about us</Button>
        </div>
      </Box>
      <hr width="1000px" margin="0" color="#007FFF"/>
       <Box 
      width='90vw'
     
      margin="5vw">
        <div className={styles.box}>
          
          <div className={styles.box__info}>
            <Typography position="relative" /* marginLeft="15vw" */ /* marginRight="5vw" */ fontSize="60px" fontWeight="900" textAlign="start" marginBottom="30px">News</Typography>
              <Typography position="relative" /* marginLeft="3vw" */ fontSize="30px" fontWeight="900" color="#007FFF" textAlign="start">10 top tips for National <br></br>Inclusion Week 2022 </Typography>
          </div>
          <div className={styles.box__image}>
            <Image src="http://localhost:3010/img/finalProject-home-news.jpg" alt="photo-homepage-news" />
          </div>
        </div>
        <div className={styles.desc}>
          <Button variant="outlined" component={Link} to={`/news`}>Read more news</Button>
          <p>As National Inclusion Week draws closer (26 September-2 October), Inclusive Employers, as the founders of National Inclusion, want to ensure organisations have all they need to celebrate, showcase and progress your inclusion journey.
          Here we share some of our consultants top tips for making the most of the week.

          Read on and you'll be ready to get your National Inclusion Week 2022 plans underway!</p>
          
        </div>
      </Box>
      <hr width="500px" margin="0 auto" color="#007FFF"/>
       <Box 
      width='90vw'
      
      margin="5vw"
      paddingBottom="70px">
        <div className={styles.box}>
          <div className={styles.box__image}>
            <Image src="http://localhost:3010/img/finalProject-home-events.avif" alt="photo-homepage-events" />
          </div>
          <div className={styles.box__info}>
            <Typography position="relative" /* marginLeft="15vw" */ /* marginRight="5vw" */ fontSize="60px" fontWeight="900" textAlign="end" marginBottom="30px" >Events</Typography>
            {/* <hr width="70px" margin="" color="#007FFF"/> */}
            <Typography position="relative" marginLeft="3vw" fontSize="30px" fontWeight="900" color="#007FFF" textAlign="end">Social Media Monetisation <br></br>Unlocked - London </Typography>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Join the hundreds of business owners who have already used the social media monetisation system to create amazing results!

          A full day of free business training for business owners looking to stop wasting money on ads that don't convert and to stop posting content for the sake of it. This simple 4-step system will give you the structure you need to successfully monetise your social media.</p>
          <Button variant="outlined" component={Link} to={`/events`}>More events</Button>
        </div>
      </Box>
    </>
  );
};

export default Home;
