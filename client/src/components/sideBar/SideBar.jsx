import styles from "./sideBar.module.css";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


// const useStyles = styles(() => ({
//     root: {
//         backgroundColor: "rgb(255, 255, 255, 0.2)"
//     }
// }))

const Sidebar = ({mode,setMode}) => {
    // const classes = useStyles()
    
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }, marginTop: "50px" }}>
      <Box width="50px" borderRadius="20px" bgcolor="none" mt="50px" position="fixed" zIndex="99">
        <List>
          <ListItem disablePadding >
            <ListItemButton className={styles.ListItemButton} 
            component={Link} to="/">
              <ListItemIcon >
                <HomeOutlinedIcon className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Homepage" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} 
            component={Link} to="/news">
              <ListItemIcon>
                <AnnouncementOutlinedIcon className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Pages" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} component={Link} to="/events">
              <ListItemIcon>
                <LocalActivityOutlinedIcon className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Groups" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} component={Link} to="/education">
              <ListItemIcon>
                <SchoolOutlinedIcon className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Marketplace" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} component={Link} to="/aboutUs">
              <ListItemIcon>
                <Diversity2OutlinedIcon className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Friends" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} component={Link} to="/donate">
              <ListItemIcon>
                <CurrencyExchangeOutlinedIcon className={styles.icon__sideBare}/>
              </ListItemIcon>
              {/* <ListItemText primary="Settings" /> */}
            </ListItemButton>
          </ListItem>          
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;