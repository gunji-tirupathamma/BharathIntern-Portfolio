import React from 'react'
import Header from './components/Header/Header'
import TopContainer from './components/TopContainer/TopContainer'
import Skills from './components/SkillsContainer/Skills'
import Projects from './components/ProjectsContainer/Projects'
import Experience from './components/ExperienceContainer/Experience'
import Contact from './components/ContactInfo/Contact'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <TopContainer />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
