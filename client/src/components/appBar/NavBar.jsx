import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  Container,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import { ModeNight } from "@mui/icons-material";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth, logout } from "../../actions/user";
import { useDispatch } from "react-redux";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const NavBar = ({ mode, setMode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("в сторе токен есть!!!!");
      dispatch(auth());
    } else {
      console.log("в сторе токена НЕТ!!!!");
    }
  }, []);

  const isAuth = useSelector((state) => state.user.isAuth);
  console.log("~ isAuth", isAuth);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  console.log("~ isAdmin", isAdmin);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "rgba(255,255,255,0.7)",
        color: "#007FFF",
        borderStyle: "solid",
        borderColor: "#f5f5f5",
        borderWidth: "0",
        borderBottomWidth: "thin",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container fixed style={{ minWidth: "97vw" }}>
        {/* <Box> */}

        {/* </Box> */}
        <StyledToolbar>
          <Typography style={{ flexGrow: 1 }} variant="h6">
            My Comunity
          </Typography>
          {/* <Box>
          <ListItem disablePadding width="30px">
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </Box> */}
          {!isAuth && (
            <>
              <Box>
                <Link
                  style={{
                    color: "#007FFF",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                  to="/signin"
                >
                  Sign In
                </Link>

                <Link
                  style={{
                    color: "#007FFF",
                    textDecoration: "none",
                    marginLeft: "20px",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                  to="/signup"
                >
                  Sign Up
                </Link>
              </Box>
            </>
          )}
          {isAuth && (
            <>
              <Box>
                <Link
                  style={{
                    color: "#007FFF",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                  // className={styles.nav_link}
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Link>
                <Link
                  style={{
                    color: "#007FFF",
                    textDecoration: "none",
                    marginLeft: "20px",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                  to="/profile/2"
                >
                  Profile
                </Link>
              </Box>
            </>
          )}

          {isAdmin && (
            <>
              <Box>
                <Link
                  style={{
                    color: "#007FFF",
                    textDecoration: "none",
                    marginLeft: "20px",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                  // className={styles.nav_link}
                  to="/admin"
                >
                  Admin
                </Link>
              </Box>
            </>
          )}
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
