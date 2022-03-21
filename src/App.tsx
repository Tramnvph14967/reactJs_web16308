import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'


import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'


import Homepage from './pages/website/HomePage'
import ProductPage from './pages/website/ProductPage'
import ProductDetail from './pages/website/ProductDetail'




import ProductManager from './pages/admin/ProductManager'


import { ProductType } from './pages/types/products'
import { list, remove } from './api/product'


function App() {

  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  const removeItem = (id) => {
    remove(id);
    //reRender
    setProducts(products.filter(item => item.id !== id));

    //setProduct()
  }



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
      {/* <div>
  {products.map(item =>item.name)}
</div> */}
      <Routes>

        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />

          <Route path="product">
            <Route index element={<ProductPage />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Route>

        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<h1>Dashboard page</h1>} />
          <Route path="product" element={<ProductManager products={products} onRemove={removeItem} />} />
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