import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Properties from './Pages/Properties.jsx';
import Footer from './components/footer/Footer.jsx';
import PropertyDetail from './Pages/PropertyDetail.jsx';
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import { CartProvider } from './context/CartContext';
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
