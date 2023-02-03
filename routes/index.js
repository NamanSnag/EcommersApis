const express = require('express');
const routes = express.Router();
const {admin, createProduct, productList, deleteProduct, updateProductQuantity} = require('../controllers/admin_Controller');

routes.post('/', admin)
// create product
routes.post('/products/create', createProduct);

// get products list
routes.get('/products', productList);

// delete product
routes.delete('/products/:id', deleteProduct);

// update products quantity
routes.get('/products/:id/update_quantity', updateProductQuantity);

module.exports = routes;