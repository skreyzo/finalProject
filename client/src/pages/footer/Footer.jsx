import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defContacts } from "../../reducers/contactsReducer";
import styles from "./footer.module.css";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((store) => (store.contacts.contacts));
  const [dataContacts, setDataContacts] = useState({});
  console.log('contactsFooterREDUX', contacts)

  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3010/about', {
        method: "GET",
        credentials: "include",
      });
      const data = (await res.json()) || [];
      const {address, phone, email} = data;
      const contacts = {address, phone, email};
      console.log('contactsFooterDB', contacts)
      dispatch((defContacts(contacts)));
      //setDataContacts(contacts);     
    })();
  }, []);
  return (
    <div className={styles.footer}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{
          display: 'flex',
          flex: '50%',
          // flexDirection: 'column',
        }}>
          <Box sx={{
            display: 'flex',
            flex: '50%',
            flexDirection: 'column',
          }}>
            <Link className={styles.link} to='/contact'>Contact us</Link>
            <Link className={styles.link} to='/join'>Join us</Link>
          </Box>
          <Box sx={{
            display: 'flex',
            flex: '50%',
            flexDirection: 'column',
          }}>
            <Typography>{contacts.address}</Typography>
            <Typography>{contacts.phone}</Typography>
            <Typography>{contacts.email}</Typography>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          flex: '50%',
          gap: '10px',
          flexDirection: 'column',
        }}>
          <Box sx={{
            display: 'flex',
            flex: '50%',
            gap: '10px',
            justifyContent: 'end',            
          }}>
            <span className={styles.icon}>
              <img src="http://localhost:3010/img/facebook.svg" alt="" />
            </span>
            <span className={styles.icon}>
              <img src="http://localhost:3010/img/telegram.svg" alt="" />
            </span>
            <span className={styles.icon}>
              <img src="http://localhost:3010/img/instagram.svg" alt="" />
            </span>
          </Box>          
        </Box>
      </Box>
      <Box sx={{
        textAlign: 'center',
        mt: '15px'
    }}>
            <Typography >
            © Copyright 2022 Community Co. All rights reserved. Community Co®
            </Typography>
          </Box>

    </div>
  );
};

export default Footer;