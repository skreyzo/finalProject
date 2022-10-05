import { Routes, Link, Route } from "react-router-dom";

<<<<<<< HEAD
import AboutUs from '../pages/aboutUs/AboutUs';
import Home from '../pages/home/Home';
import Education from '../pages/education/Education';
import Events from '../pages/events/Events';
import Donate from '../pages/donate/Donate';
import EditAboutUs from '../pages/editAboutUs/EditAboutUs';
import EditHomepage from '../pages/editHomePage/EditHomepage';

import styles from './main.module.css'
import Admin from '../pages/admin/Admin';
import NewsList from '../pages/newsList/NewsList';
import AdminNewsList from '../components/adminNewsList/AdminNewsList';
import Box from '@mui/material/Box';

const Main = () => {

  const news = [
    { id: "1", title: "Название 1", body: "Текст статьи 1" },
    { id: "2", title: "Название 2", body: "Текст статьи 2" },
    { id: "3", title: "Название 3", body: "Текст статьи 3" },
    { id: "4", title: "Название 4", body: "Текст статьи 4" },
    { id: "5", title: "Название 5", body: "Текст статьи 5" },

  ];

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          py: '20px',
          px: '15px'
        }}>
          <Link className={styles.nav_link} to='/'>Home</Link>
          <Link className={styles.nav_link} to='/news'>News</Link>
          <Link className={styles.nav_link} to='/events'>Events</Link>
          <Link className={styles.nav_link} to='/education'>Education</Link>
          <Link className={styles.nav_link} to='/aboutUs'>AboutUs</Link>
          <Link className={styles.nav_link} to='/donate'>Donate</Link>
          <Link className={styles.nav_link} to='/signin'>SignIn</Link>
          <Link className={styles.nav_link} to='/signup'>SignUp</Link>
          <Link className={styles.nav_link} to='/admin'>Admin</Link>
        </Box>
      </Box>

      <Routes>
        <Route path='/' element={<Home title={'Home Page'} />}></Route>
        <Route path='/news' element={<NewsList news={news} title={'News Page'} />}></Route>
        <Route path='/events' element={<Events title={'Events Page'} />}></Route>
        <Route path='/education' element={<Education title={'Education Page'} />}></Route>
        <Route path='/aboutUs' element={<AboutUs title={'AboutUs Page'} />}></Route>
        <Route path='/donate' element={<Donate title={'Donate Page'} />}></Route>
        <Route path='/admin' element={<Admin title={'Admin Page'} />}></Route>
        <Route path='/newnews' element={<AdminNewsList news={news} title={'Admin Page'} />}></Route>
        <Route path='/admin/editaboutus' element={<EditAboutUs title={'EditAboutUs'}/>}></Route>
        <Route path='/admin/edithomepage' element={<EditHomepage title={'EditHomepage'}/>}></Route>
=======
import AboutUs from "../pages/aboutUs/AboutUs";
import Home from "../pages/home/Home";
import Education from "../pages/education/Education";
import Events from "../pages/events/Events";
import Donate from "../pages/donate/Donate";

import styles from "./main.module.css";
import Admin from "../pages/admin/Admin";
import NewsList from "../pages/newsList/NewsList";
import AdminNewsList from "../components/adminNewsList/AdminNewsList";

const Main = () => {

  //! доделать после привзки редакса
  // const deleteNews = (e) => {
  //   const filteredNews = newsData.filter(
  //     (nws) => nws.value !== nws.target.textContent
  //   );
  //   setNewsData(filteredNews);
  // };
  
  const addNewsHandler = (data) => {

  };
  
  //! доделать после привзки редакса


  return (
    <div className={styles.wrapper}>
      <p>Hola friends! </p>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/events">Events</Link>
      <Link to="/education">Education</Link>
      <Link to="/aboutUs">AboutUs</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/signin">SignIn</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/admin">Admin</Link>

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
          path="/newnews"
          element={
            <AdminNewsList
              addNewsHandler={addNewsHandler}
              title={"Admin Page"}
            />
          }
        ></Route>
>>>>>>> origin/develop

        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
      </Routes>
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> origin/develop
  );
};

export default Main;
