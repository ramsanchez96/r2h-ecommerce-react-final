import React from 'react';

const ProductCard = (props) => {
    return (
      <div className="productCard">
        <h3>{props.info.title}</h3>
        <p>{props.info.brand}</p>
        <p>{props.info.description}</p>
        <p>${props.info.price}</p>
        <img
          src={props.info.productImages}
          alt={props.info.description}
          className="productCard__img"
        />
      </div>
    );
  };

  export default ProductCard;