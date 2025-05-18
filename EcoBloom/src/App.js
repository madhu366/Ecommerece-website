import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'; // Keep this route
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import pc_banner from './components/Assets/pc_banner.png';
import hk_banner from './components/Assets/hk_banner.png';
import go_banner from './components/Assets/go_banner.png';
import { Routes, Route } from 'react-router-dom';
import ShopContextProvider from './Context/ShopContext';


function App() {
  return (
    <ShopContextProvider> 
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/personal-care' element={<ShopCategory banner={pc_banner} category="Personal Care" />} />
          <Route path='/home-kitchen' element={<ShopCategory banner={hk_banner} category="Home & Kitchen" />} />
          <Route path='/gardening-outdoor' element={<ShopCategory banner={go_banner} category='Gardening & Outdoor' />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path="/signup" element={<LoginSignUp />} />
          <Route path='/cart' element={<Cart />} /> {/* Keep this route */}
        </Routes>
        <Footer />
      </div>
    </ShopContextProvider>
  );
}

export default App;
