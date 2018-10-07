import React from "react";
import AdminCard from "./AdminCard";
import ContactCard from "./ContactCard";

const Admin = props => {
  if (props.hasWaters === false) {
    return null;
  }

  return (
    <div className="admin">
      <h2 className="admin__Heading">Bubbly - Hello Admin</h2>
      <h3>Products:</h3>
      {props.products.waters.map(el => (
        <AdminCard
          info={el}
          key={el.productId}
          handleProductDelete={props.products.handleProductDelete}
          handleProductUpdate={props.products.handleProductUpdate}
        />
      ))}
      <div className="addItemFormContainer">
        <form
          action="http://localhost:8080/products"
          method="POST"
          name="mainForm"
          className="addItemForm"
        >
          <h2 className="addItemForm__heading">Add an Item:</h2>

          <div>
            <label htmlFor="productId">Product ID:</label>
            <input
              type="number"
              id="productId"
              name="productId"
              placeholder="Product ID"
              required
            />
          </div>

          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              required
            />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              required
            />
          </div>

          <div>
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="Brand"
              required
            />
          </div>

          <div>
            <label htmlFor="flavored" className="flavored">
              Flavored:
            </label>
            <label>True:</label>
            <input
              type="radio"
              name="flavored"
              id="flavored"
              value="true"
              required
            />
            <label>False:</label>
            <input
              type="radio"
              name="flavored"
              id="flavored"
              value="false"
              required
            />
          </div>

          <div>
            <label htmlFor="productImages">Local Product Image Path:</label>
            <input
              type="text"
              name="productImages"
              id="productImages"
              placeholder="Image Path"
              required
            />
          </div>

          <div className="formSubmit">
            <input className="submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>

      <h3 className="admin__contactHeading">Contacts:</h3>

      {props.products.contacts.contactInfo.map(el => (
        <ContactCard info={el} key={el._id} />
      ))}
    </div>
  );
};

export default Admin;
