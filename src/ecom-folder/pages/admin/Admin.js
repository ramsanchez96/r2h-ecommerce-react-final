import React from "react";
import AdminCard from "./AdminCard";

const Admin = (props) => {
  console.log('Admin props: %o', props);
  if (props.hasWaters === false) {
    console.log('no water');
    return null;
  }
  console.log('water');
  return (
    <div className="admin">
      <h2 className="admin__Heading">Bubbly - Hello Admin</h2>
      <div className="admin__adminCardContainer">
        {props.products.filteredWaters.map(el => <AdminCard info={el} key={el.productId}/>)}
      </div>
    </div>
  );
  }

export default Admin;
