import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/homepage/Home'

import Header from './components/Header';
import ContactUs from './pages/contactpage/ContactUs';

const AllRoutes = () => {
    
  return (
  <>
      
      <Header/>
      <Routes>
          
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact_us' element={<ContactUs/>}></Route>
      </Routes>
  </>
  )
}

export default AllRoutes