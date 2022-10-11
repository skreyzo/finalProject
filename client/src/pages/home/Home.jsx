import React, { useState } from "react";
import styles from "./home.module.css";

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

      <Typography variant="h5" align="left" color="text.secondary" paragraph>
        {textHomePage.greeting}
      </Typography>
    </>
  );
};

export default Home;
