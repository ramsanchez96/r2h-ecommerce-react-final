import React from "react";
import AdminCard from "./AdminCard";

const Admin = props => {

  let handleAddItemButton = e => {
    e.preventDefault();
    console.log("Hello");
  };

  console.log("Admin props: %o", props);
  if (props.hasWaters === false) {
    console.log("no water");
    return null;
  }
  console.log("water");
  console.log("props:", props);


  return (
    <div className="admin">
      <h2 className="admin__Heading">Bubbly - Hello Admin</h2>
      <button onClick={handleAddItemButton}>Add an Item</button>
      <div className="admin__adminCardContainer" />

      {props.products.waters.map(el => (
        <AdminCard
          info={el}
          key={el.productId}
          handleProductDelete={props.products.handleProductDelete}
          handleProductUpdate={props.products.handleProductUpdate}
        />
      ))}

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
          <label htmlFor="flavored">Flavored:
            <label>True:
              <input type="radio" name="flavored" id="flavored" value="true" required/>
            </label>
            <label>False:
              <input type="radio" name="flavored" id="flavored" value="false" required/>
            </label>
          </label>
        </div>

        <div>
          <label htmlFor="productImages">Local Product Image Path:</label>
          <input
            type="text"
            name="productImages"
            id="productImages"
            placeholder="Local Product Image Path"
            required
          />
        </div>

        <div className="formSubmit">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Admin;
