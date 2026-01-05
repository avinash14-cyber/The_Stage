import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/homepage/Home'
import Preloader from './components/Preloader';

const AllRoutes = () => {
    const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }
  return (
    <Routes>
        
        <Route path='/' element={<Home/>}></Route>

    </Routes>
  )
}

export default AllRoutes