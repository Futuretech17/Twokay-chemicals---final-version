import React from 'react';
import styled from 'styled-components';
const ProductsCard = props => {
  return /*#__PURE__*/React.createElement(Cardcontainer, null, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.Img,
    alt: props.alt
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-description"
  }, /*#__PURE__*/React.createElement("h5", {
    class: "card-title"
  }, props.title, " "), /*#__PURE__*/React.createElement("p", {
    class: "card-text"
  }, props.description, " "))));
};
const Cardcontainer = styled.div`
    margin: 0 5px;
    width: 50%;

    img {
        height: 400px;
        object-fit: cover;
    }

    .content-description {
        height: 150px;
    }

    h5{
        text-align: center;
        padding: 5px;

    }

    p {
        text-align: justify;
        margin: 10px;
    }
    
    img:hover {
        opacity: 0.5;
    }

    @media (max-width:1000px) {
        width:100%;
        margin: 0 0 40px 0;

        img {
            height: auto;
        }
    }
`;
export default ProductsCard;