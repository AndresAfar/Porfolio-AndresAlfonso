import { useState } from 'react'
import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer.jsx'
import { Component } from './components/Navbarcom.jsx'

import { Home } from './pages/Home'
import './App.css'

function App() {
  return (
    <div className='App pb-2 bg-gray-900'>
      <Component/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
