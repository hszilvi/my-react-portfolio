import projectData from './projectList.json';
import './App.css'
import React from 'react'
import NavTabs from './components/NavTabs/index.jsx'
import Hero from './components/Hero/index.jsx'
import ProjectGallery from './components/ProjectGallery/index.jsx'
import Contact from './components/Contact/index.jsx'
import Footer from './components/Footer/index.jsx'
import { Routes, Route } from 'react-router-dom';
import ProjectSite from './components/ProjectSite/index.jsx';

function App() {
  return (

    <>
      <NavTabs />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/projectgallery' element={<ProjectGallery />} />
        <Route path='/world-recipes' element={<ProjectSite props={projectData[0]} />} />
        <Route path='/weather-forecast-API' element={<ProjectSite props={projectData[1]} />} />
        <Route path='/bootstrap-portfolio' element={<ProjectSite props={projectData[2]} />} />
        <Route path='/team-porfile-generator' element={<ProjectSite props={projectData[3]} />} />
        <Route path='/password-generator' element={<ProjectSite props={projectData[4]} />} />
        <Route path='/personal-website' element={<ProjectSite props={projectData[5]} />} />
        
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
