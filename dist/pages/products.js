import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import styled from 'styled-components';
import Card from '../components/Card.jsx';
import Navbar from '../components/Navbar.jsx';
import cardData from '../data/cardData.js'; // Importing cardData array

const Product = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(ProductsContainer, null, /*#__PURE__*/React.createElement(Header, {
    headerImage: "./images/medical-equipment.jpg"
  }), /*#__PURE__*/React.createElement(IntroContainer, null, /*#__PURE__*/React.createElement("h3", null, "Products"), /*#__PURE__*/React.createElement("p", null, "Specializing in a wide range of non-pharma products and select pharmaceuticals, we are committed to enhancing lives and promoting well-being. With a focus on innovation and quality, we strive to provide effective healthcare solutions to our communities. Embrace a healthier future with us as we continue to bring solutions that empower society and promote a healthier, happier life for all. Together, let's build a better world of health and well-being.")), /*#__PURE__*/React.createElement(NonPharmaContainer, null, /*#__PURE__*/React.createElement(DescriptionContainer, null, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("span", null, "Non "), " - Pharmaceuticals"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), cardData.map((card, index) => /*#__PURE__*/React.createElement(Card, {
    key: index,
    img: card.img,
    alt: card.alt,
    sizesAvailable: card.sizesAvailable,
    typesAvailable: card.typesAvailable,
    content: card.description
  })))), /*#__PURE__*/React.createElement(Footer, null));
};
Product.propTypes = {
  headerImage: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  sizesAvailable: PropTypes.arrayOf(PropTypes.string),
  typesAvailable: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string
};
const ProductsContainer = styled.div`
    h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 35px;
        font-weight: 200;
        line-height: 35px;
        color: rgb(59, 94, 103);
    }

    p {
        font-family: 'Poppins', sans-serif;
        color: #033B4A;
        width: 100%;
        font-size: 15px;
        font-weight: 400;
        line-height: 27px;
    }
`;
const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 200px;
`;
const NonPharmaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 200px;
    background-color: #f5f5f5;
`;
const DescriptionContainer = styled.div`
    padding: 10px 0 10px 0;
    text-align: right;
`;
export default Product;