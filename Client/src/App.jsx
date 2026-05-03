import React, { use } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import InterviewPage from './pages/InterviewPage.jsx'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice.js';

export const ServerUrl = 'http://localhost:5000';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/profile", { withCredentials: true });
        dispatch(setUserData(result.data));
      } catch (error) {
        console.error('Error fetching user profile:', error);
        dispatch(setUserData(null));
      }
    }
    getUser();
  }, [dispatch])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/interview' element={<InterviewPage />} />
    </Routes>
  )
}

export default App
