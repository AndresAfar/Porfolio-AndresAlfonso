import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Navbar} from './components/Navbar.jsx' 

import { Footer } from './components/Footer.jsx'
import { Component } from './components/Navbarcom.jsx'


import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Component/>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
