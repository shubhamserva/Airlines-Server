const Response = require('../response');
const flights = require('../models/Flights');
const updateServices = require("../services/UpdateServices");




function getFlights(req,res) {
    const response = new Response();
    updateServices.getFlights().then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "Flights Fetched";
        res.status(200).json(response);
    })
}

function addFlights(req, res) {
    const response = new Response();
    updateServices.saveFlights(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "Flight added successfully";
        res.status(200).json(response);
    })

}

function test(req,res) {
    res.send("here test");
}
function updatePassenger(req, res) {
    const response = new Response();
    //console.log("update cntoler");
    updateServices.updatePassenger(req.body).then((result) => {
        response.data.result = result;
        response.status.statusCode = 200;
        response.status.message = "Passenger updated successfully";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to Update user";
        res.status(500).json(err);
    })
}
function addPassenger(req, res) {
    const response = new Response();
    updateServices.addPassenger(req.body).then((result) => {
        response.data.result = result;
        response.status.statusCode = 200;
        response.status.message = "Passenger added successfully";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to Add user";
        res.status(500).json(err);
    })


}
function getPassengers(req,res){
    
    const response = new Response();
    updateServices.getPassengers(req.query).then((result)=>{
        response.data.result = result;
        response.status.statusCode = 200;
        response.status.message = "Passenger Details fetched";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to fetch list";
        res.status(500).json(err);
    })
}
function deleteFlights(req){
    const response = new Response();
    updateServices.deleteFlights(req.query).then((result)=>{
        response.data.result = result;
        response.status.statusCode = 200;
        response.status.message = "Flight Deleted ";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to Delete Flight";
        res.status(500).json(err);
    })
}

function addShopItem(req,res) {
    const response = new Response();
    updateServices.addShopItem(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "Shopping Item Added";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to add Shopping Item";
        res.status(500).json(err);
    })
}

function addService(req,res) {
    const response = new Response();
    updateServices.addService(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "service Added";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to Add Service";
        res.status(500).json(err);
    })
}
function checkIn(req,res) {
    const response = new Response();
    updateServices.checkIn(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "checkIn Completed";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to Check-In";
        res.status(500).json(err);
    })
}
function changeSeat(req,res) {
    const response = new Response();
    updateServices.changeSeat(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "Seat Updated";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to update Seat";
        res.status(500).json(err);
    })
}
function updateMeal(req,res) {
    const response = new Response();
    updateServices.updateMeal(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "Meals Fetched";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to Fetch Meal";
        res.status(500).json(err);
    })
}

function getServices(req,res) {
   
    const response = new Response();
    updateServices.getServices(req.query).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "SERvices Fetched";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to Fetch SERVICES";
        res.status(500).json(err);
    })
}
function addAncillaryServices(req,res) {
    const response = new Response();
    updateServices.addAncillaryServices(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "SERvices addded";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to add SERVICES";
        res.status(500).json(err);
    })
}
function removeAncillaryItems(req,res) {
    const response = new Response();
    updateServices.removeAncillaryItems(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "SERvices removed";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to remove";
        res.status(500).json(err);
    })
}
function getFlightDetails (req,res) {
    const response = new Response();
    updateServices.removeAncillaryItems(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "SERvices removed";
        res.status(200).json(response);
    }).catch((err) => {
        response.status.statusCode = '500';
        response.status.message = "unable to remove";
        res.status(500).json(err);
    })
}





module.exports = { getFlights,addPassenger,test,addFlights,
                    getPassengers,deleteFlights,updatePassenger,
                    addShopItem,addService,checkIn,getServices,
                    updateMeal,addAncillaryServices,removeAncillaryItems,
                    getFlightDetails}