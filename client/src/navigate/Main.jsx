import { Routes, Link, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import AboutUs from "../pages/aboutUs/AboutUs";
import Home from "../pages/home/Home";
import Education from "../pages/education/Education";
import Events from "../pages/events/Events";
import Donate from "../pages/donate/Donate";
import EditAboutUs from "../pages/editAboutUs/EditAboutUs";
import EditHomepage from "../pages/editHomePage/EditHomepage";
import AddEvent from "../pages/addEvent/AddEvent";

import styles from "./main.module.css";
import Admin from "../pages/admin/Admin";
import NewsList from "../pages/newsList/NewsList";
import AdminNewsList from "../components/adminNewsList/AdminNewsList";

import Registration from "../components/registration/Registration";
import Authorization from "../components/authorization/SignIn";
// import { logout } from "../reducers/userReducer";
import { auth, logout } from "../actions/user";

import Box from "@mui/material/Box";

import EditNews from "../pages/editNews/EditNews";
import FullNews from "../pages/fullNews/FullNews";


// const checkIsAdmin = () => {
//   // const res = await fetch('http://localhost:3100')
// };

const Main = () => {

  const newsHandler = async () => {
    try {
      const response = await fetch("http://localhost:3010/admin/editnewspage", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) throw new Error(`Ошибка`);
      const data = await response.json();
      // console.log(data);
      dispatch({ type: "initState", payload: { data } });
      if (data.err) throw new Error(data.err);
    } catch (err) {
      console.log(err);
      // alert(err.message);
    }
  };

  // const isAdmin = true; // захардкодил

  const dispatch = useDispatch();

  useEffect(() =>{
    if(localStorage.getItem('token')) {
      console.log('в сторе токен есть!!!!')
      dispatch(auth())
    } else {
      console.log('в сторе токена НЕТ!!!!')
    }
  }, [])

  React.useEffect(() => {
    newsHandler();
  }, []);

  const isAuth = useSelector((state) => state.user.isAuth);
  console.log('~ isAuth', isAuth)
  const isAdmin = useSelector((state) => state.user.isAdmin);
  console.log('~ isAdmin', isAdmin)



  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            py: "20px",
            px: "15px",
          }}
        >
          <Link className={styles.nav_link} to="/">
            Home
          </Link>
          <Link className={styles.nav_link} to="/news">
            News
          </Link>
          <Link className={styles.nav_link} to="/events">
            Events
          </Link>
          <Link className={styles.nav_link} to="/education">
            Education
          </Link>
          <Link className={styles.nav_link} to="/aboutUs">
            AboutUs
          </Link>
          <Link className={styles.nav_link} to="/donate">
            Donate
          </Link>
          {!isAuth && (
            <React.Fragment>
              <Link className={styles.nav_link} to="/signin">
                SignIn
              </Link>
              <Link className={styles.nav_link} to="/signup">
                SignUp
              </Link>
            </React.Fragment>
          )}
          {isAuth && (
            <React.Fragment>
              <Link
                className={styles.nav_link}
                onClick={() => dispatch(logout())}
              >
                Logout
              </Link>
            </React.Fragment>
          )}
          {isAdmin &&(
            <React.Fragment>
          <Link className={styles.nav_link} to="/admin">
            Admin
          </Link>
            </React.Fragment>
          )}
        </Box>
      </Box>

      <Routes>
        <Route path="/" element={<Home title={"Home Page"} />}></Route>
        <Route path="/news" element={<NewsList title={"News Page"} />}></Route>
        <Route
          path="/events"
          element={<Events title={"Events Page"} />}
        ></Route>
        <Route
          path="/education"
          element={<Education title={"Education Page"} />}
        ></Route>
        <Route
          path="/aboutUs"
          element={<AboutUs title={"AboutUs Page"} />}
        ></Route>
        <Route
          path="/donate"
          element={<Donate title={"Donate Page"} />}
        ></Route>
        <Route path="/admin" element={<Admin title={"Admin Page"} />}></Route>

        <Route
          path="/admin/editaboutus"
          element={<EditAboutUs title={"EditAboutUs"} />}
        ></Route>
        <Route
          path="/admin/edithomepage"
          element={<EditHomepage title={"EditHomepage"} />}
        ></Route>
        <Route
          path="/admin/addevent"
          element={<AddEvent title={"AddEvent"} />}
        ></Route>

        <Route
          path="/admin/newnews"
          element={<AdminNewsList title={"Admin Page"} />}
        ></Route>
        <Route
          path="/signup"
          element={<Registration title={"Registration"} />}
        ></Route>
        <Route
          path="/signin"
          element={<Authorization title={"SignIn"} />}
        ></Route>
        <Route
          path="admin/admin/editnewspage/:id"
          element={<EditNews title={"Edit news title"} />}
        ></Route>
        <Route
          path="/news/:id"
          element={<FullNews title={"Full News"} />}
        ></Route>


        {/* <Route 
        path="/logout"
        element={<lo title={"Logout"} />}
        ></Route> */}
      </Routes>
    </>
  );
};

export default Main;
