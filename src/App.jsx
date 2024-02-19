// import { useState } from 'react'
import './App.css'
import React from 'react'
import NavTabs from './components/NavTabs/index.jsx'
import Hero from './components/Hero/index.jsx'
import ProjectGallery from './components/ProjectGallery/index.jsx'
import Contact from './components/Contact/index.jsx'
import Footer from './components/Footer/index.jsx'
import Resume from './components/Resume/index.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {
  // const navigate = useNavigate();
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
      <Route path='/' element={<Hero />} />
      <Route path='/projectgallery' element={<ProjectGallery />} />
      <Route path='/resume' element={<Resume />} />
      {/* <Route path='/projects' element={} */}
      <Route path='/contact' element={<Contact />} />
    </Routes>

    <Footer />


    </>
  )
}

export default App
