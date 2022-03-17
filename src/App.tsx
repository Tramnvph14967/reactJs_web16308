import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'


import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'


import Homepage from './pages/HomePage'
import ProductPage from './pages/ProductPage'






function App() {
  return (
    <div className="container-fuild">
      {/* <Header />
      <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<ProductPage />}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="contact" element={<ContactPage />}/>
          </Routes>
      </main>
      <Footer /> */}

      <Routes>

        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path='product' element={<ProductPage />} />
        </Route>

        <Route path='/' element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<h1>Dashboard page</h1>} />
        </Route>

      </Routes>
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