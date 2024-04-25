
import React from 'react';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Home from './pages/home.js';
import Product from './pages/products.js';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </Router>
  );
};




export default App;
