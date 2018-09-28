// var mongoose = require('mongoose');


// var contactModel = mongoose.model({
//     firstName: String,
//     lastName: String,
//     email: String,
//     work: String,
//     brand: String,
//     comments: String
// });

// var contactInfo = mongoose.model('contactInfo', contactModel);

// module.exports = contactInfo;

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const mongoose = require("mongoose");

const contactInfo = mongoose.model("contactInfo", {
    firstName: String,
    lastName: String,
    email: String,
    work: String,
    comments: String
});

module.exports = { contactInfo };