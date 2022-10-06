import { Routes, Link, Route } from "react-router-dom";
import { useEffect } from "react";

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


const checkIsAdmin = () => {
  // const res = await fetch('http://localhost:3100')

}

const Main = () => {

  const isAdmin = true; // захардкодил

// React.useEffect(() => {
// checkIsAdmin()
// }, [])

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

        <Route path='/admin/editaboutus' element={<EditAboutUs title={'EditAboutUs'}/>}></Route>
        <Route path='/admin/edithomepage' element={<EditHomepage title={'EditHomepage'}/>}></Route>

        <Route
          path="/newnews"
          element={
            <AdminNewsList
              title={"Admin Page"}
            />
          }
        ></Route>

        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
      </Routes>
    
 
   </>
  );
};

export default Main;
