import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';

import AboutUs from '../pages/aboutUs/AboutUs';
import Home from '../pages/home/Home';
import Education from '../pages/education/Education';
import Events from '../pages/events/Events';
import Donate from '../pages/donate/Donate';

import styles from './main.module.css'
import Admin from '../pages/admin/Admin';
import NewsList from '../pages/newsList/NewsList';
import AdminNewsList from '../components/adminNewsList/AdminNewsList';

const Main = () => {  

  const news = [
    { id: "1", title: "Название 1", body: "Текст статьи 1" },
    { id: "2", title: "Название 2", body: "Текст статьи 2" },
    { id: "3", title: "Название 3", body: "Текст статьи 3" },
    { id: "4", title: "Название 4", body: "Текст статьи 4" },
    { id: "5", title: "Название 5", body: "Текст статьи 5" },
  
  ];
    
  return (

     <div className={styles.wrapper}>

      <p>Hola friends! </p>
      <Link to='/'>Home</Link>
      <Link to='/news'>News</Link>
      <Link to='/events'>Events</Link>
      <Link to='/education'>Education</Link>
      <Link to='/aboutUs'>AboutUs</Link>
      <Link to='/donate'>Donate</Link>      
      <Link to='/signin'>SignIn</Link>
      <Link to='/signup'>SignUp</Link>
      <Link to='/admin'>Admin</Link>


      <Routes>
        <Route path='/' element={<Home title={'Home Page'}/>}></Route>
        <Route path='/news' element={<NewsList news={news} title={'News Page'}/>}></Route>
        <Route path='/events' element={<Events title={'Events Page'}/>}></Route>
        <Route path='/education' element={<Education title={'Education Page'}/>}></Route>
        <Route path='/aboutUs' element={<AboutUs title={'AboutUs Page'}/>}></Route>
        <Route path='/donate' element={<Donate title={'Donate Page'}/>}></Route>
        <Route path='/admin' element={<Admin title={'Admin Page'}/>}></Route>
      
        <Route path='/newnews' element={<AdminNewsList news={news}  title={'Admin Page'}/>}></Route>


        <Route path='/signin' ></Route>
        <Route path='/signup' ></Route>
      </Routes>

    </div> 
  );
};

export default Main;
