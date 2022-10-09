import React, { useState } from 'react';

import styles from "./home.module.css";
import Typography from '@mui/material/Typography';

const Home = () => {

  const [textOnHomePage, setTextOnHomePage] = useState({});

  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3010/admin/edithomepage', {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      //console.log('data:', data);
      setTextOnHomePage(data);
    })();
  }, []);

  return (
    <>
      <div className={styles.aboutMainPicture}></div>

      <Typography variant="h5" align="left" color="text.secondary" paragraph>
        {textOnHomePage.greeting}
      </Typography>
    </>
  )
}

export default Home