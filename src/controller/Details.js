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
    console.log("The req is"+ req.body);
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

function test1(req,res) {
    res.send("here test 1");
}

function updatePassenger(req, res) {
    const response = new Response();
    console.log("update cntoler");
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
module.exports = { getFlights,
                   addPassenger,
                test,
                test1,
                addFlights,
                getPassengers,
                deleteFlights,
                updatePassenger}