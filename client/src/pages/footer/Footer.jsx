import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defContacts } from "../../reducers/contactsReducer";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((store) => store.contacts.contacts);
  const [dataContacts, setDataContacts] = useState({});
  console.log("contactsFooterREDUX", contacts);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3010/about", {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      const { address, phone, email } = data;
      const contacts = { address, phone, email };
      console.log("contactsFooterDB", contacts);
      dispatch(defContacts(contacts));
      //setDataContacts(contacts);
    })();
  }, []);
  return (
    <div className={styles.footer}>
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
          maxWidth: "1200px",
          mx: "",
          px: "10px",
          wordWrap: "break-word",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: "50%",
              // flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: "flex",
                flex: "50%",
                flexDirection: "column",
              }}
            >
              <Link className={styles.link} to="/contact">
                About Us
              </Link>
              <Link className={styles.link} to="/join">
                Join us
              </Link>
              <Typography>For vollunteers</Typography>
              <Typography>Ladership</Typography>
              <Typography>Information for hosts</Typography>
              <Typography>Our Mission</Typography>
              <Typography>Workaway Blog</Typography>
              <Typography>Privacy policy</Typography>
              <Typography>FAQ</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: "50%",
                flexDirection: "column",
              }}
            >
              <Typography>{contacts.address}</Typography>
              <Typography>{contacts.phone}</Typography>
              <Typography>{contacts.email}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: "50%",
              alignItems: "end",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <Typography>FOLLOW US</Typography>
              <Box
                sx={{
                  display: "flex",
                  flex: "50%",
                  gap: "10px",
                }}
              >
                <span className={styles.icon}>
                  <a href="https://ru-ru.facebook.com/"  target="_blank">
                    <img src="http://localhost:3010/img/facebook.svg" alt="" />
                  </a>
                </span>
                <span className={styles.icon}>
                  <a href="https://t.me/+VDzmJ8JzIyViOWI6"  target="_blank">
                    <img src="http://localhost:3010/img/telegram.svg" alt="" />
                  </a>
                </span>
                <span className={styles.icon}>
                  <a href="https://www.instagram.com/" target="_blank">
                    <img src="http://localhost:3010/img/instagram.svg" alt="" />
                  </a>                  
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            mt: "15px",
          }}
        >
          <Typography>
            © Copyright 2022 Community Co. All rights reserved. Community Co®
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
