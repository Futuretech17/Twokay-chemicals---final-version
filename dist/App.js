import React from 'react';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Home from './pages/home.js';
import Product from './pages/products.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/products",
    element: /*#__PURE__*/React.createElement(Product, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/contact",
    element: /*#__PURE__*/React.createElement(Contact, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/about",
    element: /*#__PURE__*/React.createElement(About, null)
  })));
}
;
export default App;