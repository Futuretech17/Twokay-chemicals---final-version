import React from 'react';
import styled from 'styled-components';
const Header = props => {
  return /*#__PURE__*/React.createElement(HeaderContainer, null, /*#__PURE__*/React.createElement(HeaderImg, {
    className: "image-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.headerImage,
    alt: "Header"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative-container"
  }, /*#__PURE__*/React.createElement("h1", null, props.headertitle), /*#__PURE__*/React.createElement("p", null, props.headerdescription))));
};
const HeaderContainer = styled.div`



`;
const HeaderImg = styled.div`
width: 100%;
height: 400px;


img {
    width:100%;
    height:100%;
    object-fit:cover;
    z-index: 2;
}

@media (max-width: 1000px) {
    height: 300px;
}

`;
export default Header;