import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';

import AboutUs from '../AboutUs/AboutUs';
import Home from '../Home/Home';
import News from '../News/News';
import Education from '../Education/Education';
import Events from '../Events/Events';
import Donate from '../Donate/Donate';

import styles from './Main.module.css'

const Main = () => {  
    
  return (

     <div className={styles.wrapper}>

      <p>Hola friends! </p>
      <Link to='/'>Home</Link>
      <Link to='/news'>News</Link>
      <Link to='/events'>Evants</Link>
      <Link to='/education'>Education</Link>
      <Link to='/aboutUs'>AboutUs</Link>
      <Link to='/donate'>Donate</Link>      
      <Link to='/signin'>SignIn</Link>
      <Link to='/signup'>SignUp</Link>

      <Routes>
        <Route path='/' element={<Home title={'Home Page'}/>}></Route>
        <Route path='/news' element={<News title={'News Page'}/>}></Route>
        <Route path='/events' element={<Events title={'Events Page'}/>}></Route>
        <Route path='/education' element={<Education title={'Education Page'}/>}></Route>
        <Route path='aboutUs' element={<AboutUs title={'AboutUs Page'}/>}></Route>
        <Route path='/donate' element={<Donate title={'Donate Page'}/>}></Route>
        <Route path='/signin' ></Route>
        <Route path='/signup' ></Route>
      </Routes>

    </div> 
  );
};

export default Main;
