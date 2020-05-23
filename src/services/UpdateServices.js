const flights = require("../models/Flights");
const passengerDetails = require("../models/passengerDetails")

function addPassenger(req) {
    return new Promise((resolve, reject) => {   
        const passenger = new passengerDetails(req);
        passenger.save((err, result) => {
            if (!err) {
                console.log("Data inserted is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}
function updatePassenger(req) {
    return new Promise((resolve, reject) => {
        console.log("the update p details are");
        console.log(req)
       const passenger = new passengerDetails(req);
        passengerDetails.findOneAndUpdate({"PNR":req.PNR},{$set:{
            "Name":req.pName,"Passport":req.Passport,"Address":req.Address,
        }},(err, result) => {
            if (!err) {
                console.log("Data inserted is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}
function getFlights() { 
    return new Promise((resolve, reject) => {
        flights.find({},(err, result) => {
            if (!err) {
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}
function getPassengers(req){
    console.log("the requested data is"+ req.flightId);
    return new Promise((resolve,reject)=>{
        passengerDetails.find({"fId" : req.flightId}).
        then((result)=>{
            console.log("DAta from server is");
            console.log(result);
                resolve(result);
        }).catch((err)=>{
            console.log("error is " + err);
            reject(error);
        })
    })
}
function addFlights(req)
{   
    return new Promise((resolve, reject) => {
        const Flight = new flights(req);
        Flight.save((err, result) => {
            if (!err) {
                console.log("Data from DB is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })

}
function deleteFlights(req){
    console.log("the requested data is"+ req.flightId);
    return new Promise((resolve, reject) => {
        flights.deleteOne({"fId":req.flightId },(err, result) => {
            if (!err) {
                console.log("Data from DB is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}

module.exports= {addPassenger,
    getFlights,
    addFlights,
    getPassengers,
    deleteFlights,
    updatePassenger}