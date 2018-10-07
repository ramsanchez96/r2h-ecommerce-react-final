const mongoose = require("mongoose");

const contactInfo = mongoose.model("contactInfo", {
  firstName: String,
  lastName: String,
  email: String,
  work: String,
  comments: String
});

module.exports = { contactInfo };
