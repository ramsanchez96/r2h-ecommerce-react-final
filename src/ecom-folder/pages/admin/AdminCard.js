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
    this.setState({ isEditing: true, info: this.props.info });
  };

  handleFieldUpdate = (fieldname, e) => {
    const newInfo = Object.assign({}, this.state.info);
    newInfo[fieldname] = e.target.value;
    this.setState({
      info: newInfo
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isEditing: false });
    this.props.handleProductUpdate(this.state.info);
  };

  handleCancelIsEditing = () => {
    this.setState({ isEditing: false });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <div className="editForm">
          <form
            // action="http://localhost:8080/products"
            // method="PUT"
            onSubmit={e => this.handleSubmit(e)}
            name="mainForm"
          >
            <p className="adminCard__productId">{this.state.info.productId}</p>

            <label htmlFor="title">Title:</label>
            <input
              type="text"
              value={this.state.info.title}
              onChange={e => this.handleFieldUpdate("title", e)}
              id="title"
              required
            />

            <label htmlFor="description">Description:</label>
            <input
              type="text"
              value={this.state.info.description}
              onChange={e => this.handleFieldUpdate("description", e)}
              id="description"
              required
            />

            <label htmlFor="price">Price:</label>
            <input
              type="text"
              value={this.state.info.price}
              onChange={e => this.handleFieldUpdate("price", e)}
              id="price"
              required
            />

            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              value={this.state.info.brand}
              onChange={e => this.handleFieldUpdate("brand", e)}
              requiered
            />

            <label htmlFor="localImagePath">Local Image Path:</label>
            <input
              type="text"
              value={this.state.info.productImages}
              onChange={e => this.handleFieldUpdate("productImages", e)}
              id="localImagePath"
              required
            />

            <button onClick={this.handleCancelIsEditing} className="adminCard__button">Cancel Edit</button>
            <input type="submit" value="Submit Change" className="adminCard__button"/>
          </form>
        </div>
      );
    } else {
      return (
        <div className="adminCard">
          <p className="adminCard__productId">{this.props.info.productId}</p>
          <p className="adminCard__title">{this.props.info.title}</p>
          <p className="adminCard__description">
            {this.props.info.description}
          </p>
          <p className="adminCard__price">${this.props.info.price}</p>
          <p className="adminCard__brand">{this.props.info.brand}</p>
          <p className="adminCard__flavored">
            {this.props.info.flavored.toString()}
          </p>
          <p className="adminCard__imgPath">{this.props.info.productImages}</p>
          <button
            onClick={this.handleEditModeToggle}
            className="adminCard__button"
          >
            Edit
          </button>
          <button
            onClick={this.props.handleProductDelete}
            className="adminCard__button"
          >
            Delete
          </button>
        </div>
      );
    }
  }
}
export default AdminCard;
