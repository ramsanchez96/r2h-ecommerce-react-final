// GET::funwater.com/products = Returns json with all product information .
// GET::funwater.com/products/<productID>  =  Returns json with the information from that specific products.
// POST::funwater.com/prdoucts  =  Inserts new product onto the page.
// PUT::funwater.com/products/<productID>  =  Updates information for specified product.
// DELETE::funwater.com/products/<productID>  =  Removes the product with that ID from the data.


const fs = require('fs');
const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const schema = require('./schemas');
const {Product} = require('./schemas'); //module.exports = { Product }
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());
app.use(cors());    

// const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));

//GET:
app.get('/products', (req, res) => {
    schema.Product.find({}).exec((err, products) => {
        if(err) {
            /// throw some kind of error to user here?
            return console.log('error', err);
        }
        res.send({products});
    });
});

//GET certain products based on their ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    schema.Product.findOne({'productId': id}).exec((err, p) => {
        if(err) {
            return console.log('error', err);
        }
        console.log('found', p);
        res.send(p);
    })
});

//Deletes a product
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // const filteredProducts = products.filter(product => product.productId !== id);
    // if (filteredProducts.length === products.length) {
    //     return res.status(404).send('Unable to find ID');
    // }
    // fs.writeFileSync('./products.json', JSON.stringify(filteredProducts));
    // res.send(filteredProducts);
    schema.Product.findOneAndDelete({'productId': id}).then(personDeleted => {
        if(personDeleted){
            res.send(personDeleted)
        } else {
            res.status(404).send('error');
        }
    })
});

//adds a product
app.post('/products', (req, res) => {
    // make something like:{name: "water", id: 000}
    // expecting: {name: "water", id: 000}
    const {productId, title, description, price, brand, flavored, productImages } = req.body;
    
    const product = new Product({
        productId,
        title,
        description,
        price,
        brand,
        flavored,
        productImages
    });
    //     products.push(newProduct);
    //     fs.writeFileSync('./products.json', JSON.stringify(products));
    //     res.send(newProduct);
    // } else {
    //     return res.status(422).send('Unable to add product');
    // }
    product.save().then(productAdded => res.send(productAdded)).catch(err => res.status(400).send(err))
});

app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {title, description, price, brand, flavored, productImages} = req.body;
    schema.Product.findOne({'productId': id}).then(product => {
        if (!product) {
            return res.status(404).send('Unable to find ID');
        }
        if (title) {
            product.set({
                title
            })
        }
        if (description) {
            product.set({
                description
            })
        }
        if (price) {
            product.set({
                price
            })
        }
        if (brand) {
            product.set({
                brand
            })
        }
        if ((req.body.flavored !== undefined)) {
            product.set({
                flavored
            })
        }
        if (productImages) {
            product.set({
                productImages
            })
        }
        product.save().then(productAdded => res.send(productAdded)).catch(err => res.status(400).send(err))
    })
  });

app.listen(8080);




