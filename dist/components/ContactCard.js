import React from 'react';
import styled from 'styled-components';
const ContactCard = props => {
  return /*#__PURE__*/React.createElement(ContactCardContainer, null, /*#__PURE__*/React.createElement(Icon, null, /*#__PURE__*/React.createElement("img", {
    src: props.Img,
    alt: props.alt
  })), /*#__PURE__*/React.createElement(IconTitle, null, /*#__PURE__*/React.createElement("h4", null, props.IconTitle)), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("p", null, props.Content)), /*#__PURE__*/React.createElement(Contacts, null, /*#__PURE__*/React.createElement("p", null, props.Contact)));
};
const ContactCardContainer = styled.div`
background-color: #f5f5f5;
width: 500px;
height: 300px;
text-align: center;
padding: 20px;
margin: 10px;
border-radius: 25px;

&:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}


p {
    font-family: 'Poppins', sans-serif;
    color: #033B4A;
    font-size:15px;
    font-weight: 400;
    line-height: 27px;
    font-wrap: break-word;
    margin: 10px;
    text-align: center;
}

h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
    color: rgb(59, 94, 103);
}

img {
    max-width: 30px;
    max-height: 30px;
}

@media (max-width: 1000px) {
    width: auto;
}
`;
const Icon = styled.div`
`;
const IconTitle = styled.div`
`;
const Content = styled.div``;
const Contacts = styled.div`
padding: 15px 0 0 0;
cursor: pointer;
`;
export default ContactCard;