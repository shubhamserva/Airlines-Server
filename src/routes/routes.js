const express = require('express');
const router = express.Router();
const bodyParser  = require('body-parser');

const detailsController = require('../controller/Details')
 
router.use(bodyParser.json());
router.post('/addPassenger',detailsController.addPassenger);
router.get('/getFlights',detailsController.getFlights);
router.get('',detailsController.test);
router.post('/addFlight',detailsController.addFlights);
router.get('/getPassengers',detailsController.getPassengers);
router.get('/deleteFlight',detailsController.deleteFlights);
router.post('/updatePassenger',detailsController.updatePassenger);

router.post('/addShopItem',detailsController.addShopItem);
router.post('/addService',detailsController.addService);
router.post('/checkIn',detailsController.checkIn);
router.post('/updateMeal',detailsController.updateMeal);
router.get('/getServices',detailsController.getServices);
router.post('/addAncillaryServices',detailsController.addAncillaryServices);
router.post('/removeAncillaryItems',detailsController.removeAncillaryItems);







module.exports = router;