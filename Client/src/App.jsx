import React, { use } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import InterviewPage from './pages/InterviewPage.jsx'
import InterviewHistory from './pages/InterviewHistory.jsx'
import Pricing from './pages/Pricing.jsx'
import InterviewReport from './pages/InterviewReport.jsx'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice.js';

export const ServerUrl = 'https://interviewpro-rp0p.onrender.com';

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
      <Route path='/history' element={<InterviewHistory />} />
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/report/:id' element={<InterviewReport/>}/>
    </Routes>
  )
}

export default App
