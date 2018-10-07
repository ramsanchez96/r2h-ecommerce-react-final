//PRODUCTS API 'DESIGN':

// GET::funwater.com/products = Returns json with all product information .
// GET::funwater.com/products/<productID>  =  Returns json with the information from that specific products.
// POST::funwater.com/prdoucts  =  Inserts new product onto the page.
// PUT::funwater.com/products/<productID>  =  Updates information for specified product.
// DELETE::funwater.com/products/<productID>  =  Removes the product with that ID from the data.

const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const schema = require("./productSchema");
const { Product } = require("./productSchema"); //module.exports = { Product }
const { contactInfo } = require("./contactSchema");
const cors = require("cors");
mongoose.connect(
  "mongodb://localhost:27017/products",
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//PRODUCTS

//GET:
app.get("/products", (req, res) => {
  schema.Product.find({}).exec((err, products) => {
    if (err) {
      return console.log("error", err);
    }
    res.send({ products });
  });
});

//GET certain products based on their ID
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  schema.Product.findOne({ productId: id }).exec((err, p) => {
    if (err) {
      return console.log("error", err);
    }
    console.log("found", p);
    res.send(p);
  });
});

//Deletes a product
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  schema.Product.findOneAndDelete({ productId: id }).then(itemDeleted => {
    if (itemDeleted) {
      res.send(itemDeleted);
    } else {
      res.status(404).send("error");
    }
  });
});

//adds a product
app.post("/products", (req, res) => {
  const {
    productId,
    title,
    description,
    price,
    brand,
    flavored,
    productImages
  } = req.body;

  const product = new Product({
    productId,
    title,
    description,
    price,
    brand,
    flavored,
    productImages
  });
  product.save().then(() => {
    res.status(200).redirect("http://localhost:3000/admin");
  });
});

//Edits a product
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const {
    title,
    description,
    price,
    brand,
    flavored,
    productImages
  } = req.body;
  schema.Product.findOne({ productId: id }).then(product => {
    if (!product) {
      return res.status(404).send("Unable to find ID");
    }
    if (title) {
      product.set({
        title
      });
    }
    if (description) {
      product.set({
        description
      });
    }
    if (price) {
      product.set({
        price
      });
    }
    if (brand) {
      product.set({
        brand
      });
    }
    if (req.body.flavored !== undefined) {
      product.set({
        flavored
      });
    }
    if (productImages) {
      product.set({
        productImages
      });
    }
    product
      .save()
      .then(productAdded => res.send(productAdded))
      .catch(err => res.status(400).send(err));
  });
});

//CONTACT

app.post("/formSubmit", (req, res) => {
  const { firstName, lastName, email, work, comments } = req.body;

  const newContactInfo = new contactInfo({
    firstName,
    lastName,
    email,
    work,
    comments
  });
  newContactInfo.save().then(() => {
    res.status(200).redirect("http://localhost:3000/contact");
  });
});

app.get("/contacts", (req, res) => {
  contactInfo.find({}).exec((err, contactInfo) => {
    if (err) {
      return console.log("error", err);
    }
    res.send({ contactInfo });
  });
});

app.listen(8080);
