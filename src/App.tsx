import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'


import Homepage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'



import Header from './components/Header'
import Footer from './components/footer'

function App() {
  return (
    <div className="container-fuild">
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<ProductPage />}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="contact" element={<ContactPage />}/>
          </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
/**
 * B1: npm i react-router-dom
 * B2: wrapper các ứng dụng sử dụng react-router-dom : 
 *    - Truy cập file main.tsx : 
 *      + import { BrowserRouter } from 'react-router-dom';
 *      + <BrowserRouter><App /></BrowserRouter>
 * B3: Sử dụng Component Routes, Route, NavLink
 */