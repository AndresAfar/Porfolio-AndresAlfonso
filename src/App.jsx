import { useState } from 'react'
import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer.jsx'
import { Component } from './components/Navbarcom.jsx'
import { PageCV } from './components/PageCV.jsx'

import { Home } from './pages/Home'
import './App.css'

function App() {
  return (
    <>
      <main className='App bg-gray-900'>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
