import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homePage'
import ProductPage from './pages/productPage'
import AboutPage from './pages/aboutPage'
import ContactPage from './pages/contactPage'

function App() {
  return (
    <div className="container">
      <header>
        <ul className="main">
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<ProductPage />}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="contact" element={<ContactPage />}/>
          </Routes>
      </main>
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