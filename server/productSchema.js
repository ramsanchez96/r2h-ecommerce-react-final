var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  productId: Number,
  title: String,
  description: String,
  price: Number,
  brand: String,
  flavored: Boolean,
  productImages: String
});

var Product = mongoose.model("Product", productSchema);

module.exports.productSchema = productSchema;
module.exports.Product = Product;

var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/test",
  { useNewUrlParser: true }
);
