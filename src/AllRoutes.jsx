import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/homepage/Home'
import About from '../src/pages/aboutpage/About'
import Header from './components/Header';
import ContactUs from './pages/contactpage/ContactUs';
import Archives from './pages/archivespage/Archives'
import Footer from './components/Footer';
import MembershipForm from './pages/membershippage/Membership';

const AllRoutes = () => {
    
  return (
  <>
      
      <Header/>
      <Routes>
          
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact_us' element={<ContactUs/>}></Route>
          <Route path='/about_the_stage' element={<About/>} ></Route>
          <Route path='/archives_the_stage' element={<Archives/>}></Route>
          <Route path='/membership_the_stage' element={<MembershipForm/>}></Route>
      </Routes>
      <Footer/>
  </>
  )
}

export default AllRoutes