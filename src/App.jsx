// import { useState } from 'react'
import './App.css'
import React from 'react'
import NavTabs from './components/NavTabs/index.jsx'
import HeroSection from './components/Home/index.jsx'
import ProjectGallery from './components/ProjectGallery/index.jsx'
import Contact from './components/Contact/index.jsx'
import Footer from './components/Footer/index.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState('Home');

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // }
  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   } else if (currentPage  === 'Projects') {
  //     return <Project />;
  //   }
  // }

  return (
    <>
    <NavTabs />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path='/projects' element={<ProjectGallery />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

    <Footer />


    </>
  )
}

export default App
