
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
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
import styles from "./sideBar.module.css";

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
                <Home className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Homepage" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} 
            component={Link} to="/news">
              <ListItemIcon>
                <Article className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Pages" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} component={Link} to="/events">
              <ListItemIcon>
                <Group className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Groups" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} component={Link} to="/education">
              <ListItemIcon>
                <Storefront className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Marketplace" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} component={Link} to="/aboutUs">
              <ListItemIcon>
                <Person className={styles.icon__sideBare}/>
              </ListItemIcon>
             {/*  <ListItemText primary="Friends" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={styles.ListItemButton} component={Link} to="/donate">
              <ListItemIcon>
                <Settings className={styles.icon__sideBare}/>
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