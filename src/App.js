import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutsUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import Profile from './Screens/Dashboard/Profile';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import NotFound from './Screens/NotFound';
import Register from './Screens/Register';
import SingleVideo from './Screens/SingleVideo';
import VideosPage from './Screens/Videos';
import WatchPage from './Screens/WatchPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutsUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/video/:id" element={<SingleVideo />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}


export default App
