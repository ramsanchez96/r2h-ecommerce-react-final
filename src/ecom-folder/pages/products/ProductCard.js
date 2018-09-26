import React from 'react';

const ProductCard = (props) => {
    return (
      <div className="productCard">
        <h3 className="productCard__heading">{props.info.title}</h3>
        <p className="productCard__brand">{props.info.brand}</p>
        <p className="productCard__description">{props.info.description}</p>
        <p className="productCard__price">${props.info.price}</p>
        <img
          src={props.info.productImages}
          alt={props.info.description}
          className="productCard__img"
        />
      </div>
    );
  };

  export default ProductCard;