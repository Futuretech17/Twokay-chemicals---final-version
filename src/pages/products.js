import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import styled from 'styled-components';
import Card from '../components/Card.jsx';
import Navbar from '../components/Navbar.jsx';
import cardData from '../data/cardData.js'; // Importing cardData array

const Product = () => {
    return (
        <div>
            <Navbar />
            <ProductsContainer>
                <Header headerImage='./images/medical-equipment.jpg' />
                <IntroContainer>
                    <h3>Products</h3>
                    <p>Specializing in a wide range of non-pharma products and
                        select pharmaceuticals, we are committed to enhancing lives and
                        promoting well-being. With a focus on innovation and quality, we
                        strive to provide effective healthcare solutions to our communities.
                        Embrace a healthier future with us as we continue to bring solutions
                        that empower society and promote a healthier, happier life for all.
                        Together, let's build a better world of health and well-being.</p>
                </IntroContainer>

                <NonPharmaContainer>
                    <DescriptionContainer>
                        <h3><span>Non </span> - Pharmaceuticals</h3>
                        <p>Unlock natural wellness with our premium non-pharmaceuticals. Backed by science, crafted with care. Elevate your health, naturally.</p>
                    </DescriptionContainer>
                    <div className='flex-container'>
                        
                        {cardData.map((card, index) => (
                            <div className='listing'>
                                <Card
                                    key={index}
                                    img={card.img}
                                    alt={card.alt}
                                    title={card.title} // Adding title prop here
                                    sizesAvailable={card.sizesAvailable}
                                    typesAvailable={card.typesAvailable}
                                    content={card.description}
                                />
                            </div>
                        ))}
                        
                    </div>
                </NonPharmaContainer>
            </ProductsContainer>
            <Footer />
        </div>
    );
};

Product.propTypes = {
    headerImage: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    sizesAvailable: PropTypes.arrayOf(PropTypes.string),
    typesAvailable: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.string,
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
    }`
 ;

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 150px;
    text-align: justify;

    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 50px 0 0 0;
        padding: 0 40px;
    
    }
`;

const NonPharmaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 150px;
    // background-color: #f5f5f5;


    .flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      
      .listing {
        width: calc(50% - 20px);
        padding: 10px;
        margin-bottom: 20px;
        box-sizing: border-box;
      }
      
      .listing img {
        width: 100%;
        height: auto; 
        max-height: 200px; 
        object-fit: cover;
      }
      
      
      .listing h2 {
        margin-top: 10px;
        font-size: 18px;
      }
      
      .listing p {
        margin: 8px 0;
        color: #666;
        font-size: 16px;
      }
      
        /* Media query for smaller screens */
    @media screen and (max-width: 767px) {
    .listing {
        width: calc(100% - 20px); /* One listing per row */
    }
    }

    /* Your existing media queries for larger screens */
    @media screen and (min-width: 768px) {
    .listing {
        width: calc(50% - 20px); /* Two listings per row */
    }
    }

    @media screen and (min-width: 992px) {
    .listing {
        width: calc(33.3333% - 20px); /* Three listings per row */
    }
    }

    @media screen and (min-width: 1200px) {
    .listing {
        width: calc(25% - 20px); /* Four listings per row */
    }
    }
      
      

    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 50px 0 0 0;
        padding: 0 40px;
    
    }`
;

const DescriptionContainer = styled.div`
    // padding: 10px 0 10px 0;
    // text-align: right;
`;



export default Product;
