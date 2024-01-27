import { useState } from 'react'
import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer.jsx'
import { Component } from './components/Navbarcom.jsx'

import { Home } from './pages/Home'
import './App.css'

function App() {
  return (
    <div className='App pb-2 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <Component/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
