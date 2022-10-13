import React, { useState } from "react";
import styles from "./home.module.css";

import { Box, CardMedia } from "@mui/material";
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
      //console.log('data:', data);
      setTextHomePage(data);
      setNameHomePhoto(data.bigfoto);
    })();
  }, []);

  return (
    <>
      <div className={styles.aboutMainPicture}>
        <img src={`${localhost + nameHomePhoto}`} alt="There is a photo here" />
      </div>

      {/* <Typography variant="h5" align="left" color="text.secondary" paragraph>
        {textHomePage.greeting}
      </Typography> */}

      <Box
      border="solid 3px red"
      width='100vw'
      height="80vh"
      >
        <Box display="flex" >
          <Box 
          width='40vw'
          height="40vh">
            <Image src="../../public/img/sahiy-header.jpg" alt="sahiy-header" />
          </Box>
          <Box >
            <Typography position="relative" marginLeft="500px" fontSize="60px" fontWeight="900">About us</Typography>
            <Typography position="relative" marginLeft="500px" fontSize="60px" fontWeight="900">About us</Typography>
          </Box>
        </Box>
        
       
        
      </Box>
    </>
  );
};

export default Home;
