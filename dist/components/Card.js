import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Card = ({
  img,
  alt,
  title,
  content,
  sizesAvailable,
  typesAvailable
}) => {
  return /*#__PURE__*/React.createElement(CardContainer, null, /*#__PURE__*/React.createElement(CardImage, {
    src: img,
    alt: alt
  }), /*#__PURE__*/React.createElement(CardText, null, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, content), /*#__PURE__*/React.createElement(SizesAvailable, null, /*#__PURE__*/React.createElement("h4", null, "Sizes Available:"), /*#__PURE__*/React.createElement("ul", null, sizesAvailable && sizesAvailable.map((size, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, size)))), /*#__PURE__*/React.createElement(TypesAvailable, null, /*#__PURE__*/React.createElement("h4", null, "Types Available:"), /*#__PURE__*/React.createElement("ul", null, typesAvailable && typesAvailable.map((type, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, type))))));
};
Card.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  sizesAvailable: PropTypes.arrayOf(PropTypes.string),
  typesAvailable: PropTypes.arrayOf(PropTypes.string)
};
const CardContainer = styled.div`
    width: 25%;
    height: auto;
    padding: 10px;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
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