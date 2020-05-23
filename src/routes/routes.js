const express = require('express');
const router = express.Router();
const bodyParser  = require('body-parser');

const detailsController = require('../controller/Details')

router.use(bodyParser.json());
router.post('/addPassenger',detailsController.addPassenger);
router.get('/getFlights',detailsController.getFlights);
router.get('',detailsController.test);
router.get('/test',detailsController.test1);
router.post('/addFlight',detailsController.addFlights);
router.get('/getPassengers',detailsController.getPassengers);
router.get('/deleteFlight',detailsController.deleteFlights);
router.post('/updatePassenger',detailsController.updatePassenger)




module.exports = router;