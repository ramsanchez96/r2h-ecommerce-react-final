import React from 'react';

const AdminCard = (props) => {
    return (
      <div className="adminCard">
        <p className="adminCard__productId">{props.info.productId}</p>
        <p className="adminCard__title">{props.info.title}</p>
        <p className="adminCard__description">{props.info.description}</p>
        <p className="adminCard__price">${props.info.price}</p>
        <p className="adminCard__brand">{props.info.brand}</p>
        <p className="adminCard__brand">{props.info.flavored.toString()}</p>
        <p className="adminCard__imgPath">{props.info.productImages}</p>
        <button>Edit</button>
        <button onClick={props.handleProductDelete}>Delete</button>
      </div>
    );
  };

  export default AdminCard;