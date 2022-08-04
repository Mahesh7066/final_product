// need the router from express
const express = require('express');
const router = express.Router();

// import the controllers
const quicksearchController = require('../Controllers/quicksearch');
const filterController = require('../Controllers/filter');
const mealtypesController = require('../Controllers/mealtype');
const detailsController = require('../Controllers/details');
const menuController = require('../Controllers/Menu');
const userController = require('../Controllers/user');
const paymentController = require('../Controllers/payments');
const viewOrderController = require('../Controllers/viewOrder');
const locationController = require('../Controllers/location');

// declare the routes and bind to the controller methods
router.get('/quicksearch', quicksearchController.quicksearchSchema);
router.get('/filter/:mealId', filterController.filterByMealId);
router.get('/details/:restId', detailsController.restDetails);
router.get('/menu/:restId', menuController.restMenu);
router.get('/mealtype_id=:mealId', filterController.filterByMealId);
router.get('/viewOrder', viewOrderController.viewOrderSchema);
router.put('/updateOrder/:id', viewOrderController.updateOrderSchema);
router.get('/location', locationController.Location);
router.get('/restaurant/stateId=:stateId', detailsController.restByStateId);
// router.get('/filter/:id', filterController.filterRestaurants);
// router.get('/restmealtype/:id', mealtypesController.getAllMealtypesRest);
// router.post('/filter', restaurantController.filterRestaurans);
// router.get('/getMenuForRestaurant/:restId', menuController.getMenuForRestaurant);
router.post('/login', userController.Login);
router.post('/register', userController.Register);
router.post('/paynow', paymentController.Payment);
// router.post('/paymentCallback', paymentController.paymentCallback);

// export the router
module.exports = router;