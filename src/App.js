import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Product from './pages/ProductPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import AdminDashboard from './AdminPages/AdminDashboard'
import AddProductPage from './AdminPages/AddProductPage'
import ProductPage from './pages/ProductPage'
import AddShopOwner from './AdminPages/AddShopOwner'
import ViewShopowner from './AdminPages/ViewShopowner'
import ContactDeatils from './AdminPages/ContactDeatils'
import ViewProduct from './AdminPages/ViewProduct'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/AddProductPage" element={<AddProductPage/>} />
          <Route path="/ProductPage" element={<ProductPage/>} />
          <Route path="/ProductPage" element={<ProductPage/>} />
          <Route path="/AddShopOwner" element={<AddShopOwner/>} />
          <Route path="/ViewShopowner" element={<ViewShopowner/>} />
          <Route path="/ContactDeatils" element={<ContactDeatils/>} />
          <Route path="/ViewProduct" element={<ViewProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
