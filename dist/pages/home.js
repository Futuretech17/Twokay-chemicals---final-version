import React from 'react';
import Header from '../components/Header.jsx';
import Body from '../components/Body.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import styled from 'styled-components';
import ProductsCard from '../components/ProductsCard.jsx';
const Home = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Header, {
    headerImage: "./images/header-pic2.jpg"
  }), /*#__PURE__*/React.createElement(Body, {
    title: "Empowering Health Enhancing Lives",
    description: "Your One-Stop Destination for Exceptional Healthcare Solutions",
    headingPartOne: "Welcome to ",
    headingPartTwo: "Twokay chemicals",
    content: "A distinguished pharmaceutical distributor and wholesale chemist, embarked on its journey in 1992 and has since grown into a leading player in the healthcare industry. Guided by a mission to conduct business with a caring heart, the company is committed to providing high-quality healthcare solutions that positively impact the lives of patients and healthcare professionals alike."
  }), /*#__PURE__*/React.createElement(ProductsDiv, null, /*#__PURE__*/React.createElement("div", {
    className: "product-title"
  }, /*#__PURE__*/React.createElement("h1", null, "Our products")), /*#__PURE__*/React.createElement("div", {
    className: "productsection"
  }, /*#__PURE__*/React.createElement(ProductsCard, {
    Img: "../images/hospital disposables.jpeg",
    alt: "Photo of hospital disposables",
    title: "Hospital disposables",
    description: " Experience unparalleled hygiene and safety with our top-quality hospital disposables: gloves, masks, syringes, and gowns."
  }), /*#__PURE__*/React.createElement(ProductsCard, {
    Img: "../images/pharmaceuticals.jpg",
    alt: "Photo of select pharmaceuticals",
    title: "Pharmaceuticals ",
    description: "Experience the transformative impact of our pharmaceuticals. Our products are dedicated to enhancing your health and well-being journey."
  }))), /*#__PURE__*/React.createElement(ValuePropotionDiv, null, /*#__PURE__*/React.createElement("div", {
    className: "products-intro-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "titlesection"
  }, /*#__PURE__*/React.createElement("h1", null, "Why Us?"), /*#__PURE__*/React.createElement("p", null, "Discover the compelling reasons why Twokay Chemicals stands out as your trusted partner in pharmaceutical distribution and medical equipment supply. Explore our core strengths, values, and the unique advantages that set us apart in the healthcare industry.")), /*#__PURE__*/React.createElement("div", {
    className: "contentsectioncontainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contentcontainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contentsection"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../images/high-quality.png",
    alt: "best quality"
  })), /*#__PURE__*/React.createElement("h2", null, "Reliable Quality Assurance"), /*#__PURE__*/React.createElement("p", null, "Twokay Chemicals is committed to ensuring that every pharmaceutical product and medical equipment we offer undergoes rigorous quality control measures to meet and exceed industry standards.")), /*#__PURE__*/React.createElement("div", {
    className: "contentsection"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../images/product-development.png",
    alt: "best quality"
  })), /*#__PURE__*/React.createElement("h2", null, "Extensive Product Portfolio"), /*#__PURE__*/React.createElement("p", null, "With an extensive range of hospital disposables and pharmaceuticals we provide comprehensive solutions for healthcare institutions. Our diverse product selection caters to a wide spectrum of medical needs, simplifying procurement for our clients."))), /*#__PURE__*/React.createElement("div", {
    className: "contentcontainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contentsection"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../images/experience.png",
    alt: "best quality"
  })), /*#__PURE__*/React.createElement("h2", null, "Proven Track Record"), /*#__PURE__*/React.createElement("p", null, "With over three decades of experience, Twokay Chemicals has established a solid reputation for reliability and integrity in the pharmaceutical distribution industry. Our long-standing relationships with clients and partners are a testament to our commitment to excellence.")), /*#__PURE__*/React.createElement("div", {
    className: "contentsection"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../images/target-audience.png",
    alt: "best quality"
  })), /*#__PURE__*/React.createElement("h2", null, "Customer-Centric Approach"), /*#__PURE__*/React.createElement("p", null, "Our unwavering focus on customer satisfaction means that we work closely with our clients to understand their unique needs. We are dedicated to providing personalized solutions, exceptional service, and prompt support to ensure their success.")))))), /*#__PURE__*/React.createElement(Footer, null));
};
const ValuePropotionDiv = styled.div`
width: 100wv;
height: auto;

.products-intro-container {
    margin: 100px 200px;


    .contentsectioncontainer {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .contentcontainer {
        display: flex;
        padding-bottom: 20px;
        width: 100%;
        justify-content: space-between;

        @media (max-width:1000px){
            display:flex;
            flex-direction: column;
            
            :last-child {
                margin-bottom: 0;
            }
        }
    }

    .contentsection {
        display: flex;
        flex-direction: column;
        width: 48%;
        background-color: #e8f2f1;
        border-radius: 10px;
        padding: 10px;


        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;

            img {
                height: 40px;
                width: 40px;
                
            }

        }

        
        
    
        h1{
            color: #474747;
            font-family: 'Allura', cursive;
            font-weight: 300;
            line-height: 40px;
            font-size: 40px;
        }
    
        h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 35px;
            color: rgb(59, 94, 103);
            text-align: center;
            padding: 10px;
        }
    
        p {
            color: #474747;
            text-align:justify;
            line-height: 27px;
            text-align: justify;
        }

    @media (max-width: 1000px){ 
        width: 100%;
        margin-bottom: 20px;

    }
    }

@media (max-width:1000px) {
    margin: 0;
    
}
}

.titlesection {
    padding-bottom: 50px;

    h1 {
        font-family: Playfair Display,serif;
        font-weight: 300;
        line-height: 48px;
        font-size: 45px;
        color: #2a2a2a;
    }

    p {
        text-align: justify;
        line-height: 27px;
        color: #474747;
        line-height: 27px;
    }

    @media (max-width:1000px) {
        h1 {
            font-size: 35px;
            text-align: center;
        }
    }
}

@media (max-width: 1000px) {
    margin: 20px 50px;
}
`;
const ProductsDiv = styled.div`
margin: 100px 200px;
color: #033B4A;

.productsection {
    height: auto;
    display: flex;
    justify-content: space-between;


    @media (max-width:1000px) {
        display:flex;
        flex-direction: column;

    }
}

.product-title {
    font-family: Playfair Display,serif;
    font-weight: 300;
    line-height: 48px;
    font-size: 45px;
    color: #033B4A;
    padding-bottom: 20px;
}

@media (max-width: 1000px) {
    margin: 0 50px;

    h1 {
        text-align:center;
    }
}





`;
export default Home;