import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = ({ img, alt, title, content, sizesAvailable, typesAvailable }) => {
    return (
        <CardContainer>
            <CardImage src={img} alt={alt} />
            <Separator />
            <CardText>
                <h4>{title}</h4>
                {sizesAvailable && sizesAvailable.length > 0 && (
                    <SizesAvailable>
                        <h5>Sizes Available:</h5>
                        <ul>
                            {sizesAvailable.map((size, index) => (
                                <li key={index}>{size}</li>
                            ))}
                        </ul>
                    </SizesAvailable>
                )}
                <p>{content}</p>
                {typesAvailable && typesAvailable.length > 0 && (
                    <TypesAvailable>
                        <h4>Types Available:</h4>
                        <ul>
                            {typesAvailable.map((type, index) => (
                                <li key={index}>{type}</li>
                            ))}
                        </ul>
                    </TypesAvailable>
                )}
            </CardText>
        </CardContainer>
    );
};

Card.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    sizesAvailable: PropTypes.arrayOf(PropTypes.string),
    typesAvailable: PropTypes.arrayOf(PropTypes.string),
};

const CardContainer = styled.div`
    height: 100%; 
    display: flex; 
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    h4 {
        color: black;
    }

    h5 {
        color: rgb(59, 94, 103);
    }

    p {
        font-family: 'Poppins', sans-serif;
        color: #033B4A;
        width: 100%;
        font-size:15px;
        font-weight: 400;
        line-height: 27px;
        font-wrap: break-word;
        margin: 10px;
        text-align: center;
    }

    li {
        color: black;
        list-style-type: none;
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 25px;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

const CardText = styled.div`
    padding: 20px;
    text-align: center;
`;

const SizesAvailable = styled.div`
    margin-top: 10px;
`;

const TypesAvailable = styled.div`
    margin-top: 10px;
`;

const Separator = styled.div`
    height: 1px;
    background-color: #ccc;
    margin: 10px auto; /* Adjust margin to center the separator */
    width: 50%; /* Adjust width of the separator */
`;

export default Card;






// import React from 'react';
// import styled from 'styled-components';

// const Card = (props) => {
//     return (
//         <CardContainer>
//             <img src= {props.img} alt={props.alt} />
//             <h3>{props.title}</h3>
//             <p>{props.content}</p>
//         </CardContainer>
//     )
// };

// const CardContainer = styled.div`
// width: 25%;
// height: auto;
// padding: 10px;
// border-radius: 50px;

// img {
//     width: 100%;
//     height: 300px;
//     object-fit: contain;
//     background-color: #fff;
//     border-radius: 25px;

//     &:hover {
//         opacity: .5;
//         cursor: pointer;
//     }
// }

// h3 {
//     font-family: 'Poppins', sans-serif;
//     font-size: 35px;
//     font-weight: 200;
//     line-height: 35px;
//     color: rgb(59, 94, 103);
// }

// p {
//     font-family: 'Poppins', sans-serif;
//     color: #033B4A;
//     width: 100%;
//     font-size:15px;
//     font-weight: 400;
//     line-height: 27px;
//     font-wrap: break-word;
//     margin: 10px;
//     text-align: center;
// }
// `

// export default Card;