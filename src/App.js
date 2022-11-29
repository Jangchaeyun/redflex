import Aos from 'aos';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutsUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import AddVideo from './Screens/Dashboard/Admin/AddVideo';
import Categories from './Screens/Dashboard/Admin/Categories';
import Dashboard from './Screens/Dashboard/Admin/Dashboard';
import Users from './Screens/Dashboard/Admin/Users';
import VideosList from './Screens/Dashboard/Admin/VideoList';
import FavoriteVideos from './Screens/Dashboard/FavoriteVideos';
import Password from './Screens/Dashboard/Password';
import Profile from './Screens/Dashboard/Profile';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import NotFound from './Screens/NotFound';
import Register from './Screens/Register';
import SingleVideo from './Screens/SingleVideo';
import VideosPage from './Screens/Videos';
import WatchPage from './Screens/WatchPage';

function App() {
  Aos.init();
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
      <Route path="/password" element={<Password />} />
      <Route path="/favorites" element={<FavoriteVideos />} />
      <Route path="/videoslist" element={<VideosList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/users" element={<Users />} />
      <Route path="/addvideo" element={<AddVideo />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}


export default App
