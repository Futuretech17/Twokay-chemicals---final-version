import React from "react";
import styled from 'styled-components';
const d = new Date();
let year = d.getFullYear();
const Footer = () => {
  return /*#__PURE__*/React.createElement(FooterContainer, null, /*#__PURE__*/React.createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/React.createElement(SocialmediaContainer, null, /*#__PURE__*/React.createElement("p", null, "Twokay chemicals Ltd")), /*#__PURE__*/React.createElement(AddressContainer, null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "48 Kijabe street, Nairobi"), /*#__PURE__*/React.createElement("li", null, "Phone: +254 714 687727"), /*#__PURE__*/React.createElement("li", null, "P.O BOX 46169"), /*#__PURE__*/React.createElement("li", null, "twokay@bidii.com"))), /*#__PURE__*/React.createElement(QuicklinksContainer, null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null, "Contact Us"), /*#__PURE__*/React.createElement("li", null, "Our products"), /*#__PURE__*/React.createElement("li", null)))), /*#__PURE__*/React.createElement(CopyrightContainer, null, /*#__PURE__*/React.createElement("p", null, "Copyright \xA9 ", year, " Twokay chemicals Ltd. All rights reserved.")));
};
const FooterContainer = styled.div`

margin-top: 100px;
background-color: #21211f;
width: 100vw;
color: #e5e4e2;
font-size: 16px;
font-weight: 200;
line-height: 27px;
font-color: rgb(109, 109, 109);
padding: 50px 0 0 0;

@media (max-width:1000px){
    margin-top: 50px;
}

.flex-container{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 200px 0 200px;
    
    li {
        font-size: 13px;
        font-weight: 100;
        line-height: 30px;
        letter-spacing: 1px;
        cursor: pointer;
    }

    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 0;

        li {
            margin-right: 30px;
        }
    }
}


ul {
    list-style-type: none;
}




p {
    text-align: center; 
}

`;
const SocialmediaContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: top;
margin: 10px 10px; 
min-height: 150px;
font-size: 40px;
width: 40%;

p{
    font-family: Playfair Display,serif;
    font-size:27px;
    text-align: left;
}

@media (max-width: 1000px){
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: auto;
    
}`;
const AddressContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: top;
margin: 10px 10px; 
min-height: 150px;
width: 30%;

@media (max-width: 1000px){
    justify-content: center;
    width: 100%;
    min-height: auto;
    text-align: center;

}
`;
const QuicklinksContainer = styled.div`
display: flex;
justify-content: center;
align-items: top;
margin: 10px 10px; 
min-height: 150px;
width: 30%;

:hover {
    color: 
}

@media (max-width: 1000px){
    width: 100%;
    min-height: auto;
    margin: 0;
}
`;
const CopyrightContainer = styled.div`

text-align: center;
color: #e5e4e2;
padding: 20px 0;


p{
    font-size: 14px;

}

@media (max-width: 1000px){
    padding: 10px 40px; 
}`;
export default Footer;