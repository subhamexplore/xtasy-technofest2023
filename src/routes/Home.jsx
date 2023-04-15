import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Events from '../pages/Events/Events';
import {Routes,Route} from "react-router-dom";
import Footer from '../component/Footer/Footer'
import HomeTop from '../component/HomeTop/HomeTop'
import Timeline from '../component/Timeline/Timeline'
import Card from '../component/card_register/Card'
import RegImage from '../component/register/RegImage';

const Home = () => {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/events" element={<Events/>} />
  </Routes>
  )
}

export default Home;