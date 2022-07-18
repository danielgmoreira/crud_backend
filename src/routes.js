const { Router } = require('express');
const routes = Router();

const ProductsController = require('./controllers/ProductController');
const AddressController = require('./controllers/AddressController');

routes.post('/products', ProductsController.store);
routes.get('/products', ProductsController.index);
routes.get('/products/update/:id', ProductsController.getById);
routes.get('/products/view/:id', ProductsController.getById);
routes.put('/products/update/:id', ProductsController.update);
routes.delete('/products/delete/:id', ProductsController.delete);

routes.post('/customers/:customer_id/addressses', AddressController.store);

module.exports = routes