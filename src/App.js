import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutsUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import HomeScreen from './Screens/HomeScreen';
import NotFound from './Screens/NotFound';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutsUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}


export default App
