import React, { Component } from "react";
class AdminCard extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      info: {}
    };
  }

  handleEditModeToggle = e => {
    this.setState({isEditing: true, info: this.props.info});
  }

  handleFieldUpdate = (fieldname, e) => {
    // change flavored to radio button later
    // if (fieldname === 'flavored') {
    //   if()
    // }
    const newInfo = Object.assign({}, this.state.info);
    newInfo[fieldname] = e.target.value;
    this.setState({
      info: newInfo,
    });

    //fetch call with put command
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({isEditing: false});
    this.props.handleProductUpdate(this.state.info);
  }

  handleCancelIsEditing = () => {
    this.setState({isEditing: false});
  }

  

  render() {
    if(this.state.isEditing) {
      return (
        <form
        // action="http://localhost:8080/products"
        // method="PUT"
        onSubmit={e => this.handleSubmit(e)}
        name="mainForm"
        className="addItemForm"
      >
        <p className="adminCard__productId">{this.state.info.productId}</p>

        <label htmlFor="title">Title:</label>
        <input type="text" value={this.state.info.title} onChange={e => this.handleFieldUpdate('title', e)} id="title" required/>

        <label htmlFor="description">Description:</label>
        <input type="text" value={this.state.info.description} onChange={e => this.handleFieldUpdate('description', e)} id="description" required/>

        <label htmlFor="price">Price:</label>
        <input type="text" value={this.state.info.price} onChange={e => this.handleFieldUpdate('price', e)} id="price" required/>

        <label htmlFor="brand">Brand:</label>
        <input type="text" value={this.state.info.brand} onChange={e => this.handleFieldUpdate('brand', e)} requiered />

        {/* <label htmlFor="flavored">Flavored:
          <label>True:
            <input type="radio" name="flavored" id="flavored" value="true" required/>
          </label>
          <label>False:
            <input type="radio" name="flavored" id="flavored" value="false" required/>
          </label>
        </label> */}
    
        <label htmlFor="localImagePath">Local Image Path:</label>
        <input type="text" value={this.state.info.productImages} onChange={e => this.handleFieldUpdate('productImages', e)} id="localImagePath" required/>

        <button onClick={this.handleCancelIsEditing}>Cancel Edit</button>
        <input type="submit" value="Submit Change"/>
      </form>
      );
    } else {
      return (
        <div className="adminCard">
          <p className="adminCard__productId">{this.props.info.productId}</p>
          <p className="adminCard__title">{this.props.info.title}</p>
          <p className="adminCard__description">{this.props.info.description}</p>
          <p className="adminCard__price">${this.props.info.price}</p>
          <p className="adminCard__brand">{this.props.info.brand}</p>
          <p className="adminCard__brand">{this.props.info.flavored.toString()}</p>
          <p className="adminCard__imgPath">{this.props.info.productImages}</p>
          <button onClick={this.handleEditModeToggle}>Edit</button>
          <button onClick={this.props.handleProductDelete}>Delete</button>
        </div>
      );
    }
  };
}
export default AdminCard;