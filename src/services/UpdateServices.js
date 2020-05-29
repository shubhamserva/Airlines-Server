const flights = require("../models/Flights");
const passengerDetails = require("../models/passengerDetails")

function addPassenger(req) {
    return new Promise((resolve, reject) => {
        const passenger = new passengerDetails(req);
        passenger.save((err, result) => {
            if (!err) {
                //console.log("Data inserted is ", result);
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
        //console.log("the update p details are");
        console.log(req)
        const passenger = new passengerDetails(req);
        passengerDetails.findOneAndUpdate({ "PNR": req.PNR }, {
            $set: {
                "Name": req.Name, "Passport": req.PassportNo, "Address": req.Address,
            }
        }, (err, result) => {
            if (!err) {
                //console.log("Data inserted is ", result);
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
        flights.find({}, (err, result) => {
            if (!err) {
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}
function getPassengers(req) {
    return new Promise((resolve, reject) => {
        passengerDetails.find({ "fId": req.flightId }).
            then((result) => {
                resolve(result);
            }).catch((err) => {
                //console.log("error is " + err);
                reject(error);
            })
    })
}
function addFlights(req) {
    return new Promise((resolve, reject) => {
        const Flight = new flights(req);
        Flight.save((err, result) => {
            if (!err) {
                //console.log("Data from DB is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })

}
function deleteFlights(req) {
    //console.log("the requested data is" + req.flightId);
    return new Promise((resolve, reject) => {
        flights.deleteOne({ "fId": req.flightId }, (err, result) => {
            if (!err) {
                //console.log("Data from DB is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}


function addShopItem(req) { 
    return new Promise((resolve, reject) => {
        
        const passenger = new passengerDetails(req);
        passengerDetails.findOneAndUpdate({ "PNR": req.PNR }, 
        { $push: {
                "ShopRequests": req.ShoppingItem
            }
        }, (err, result) => {
            if (!err) {
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}

function addService(req) {
    return new Promise((resolve, reject) => {
        //console.log("the add service data is");
        //console.log(req)
        const passenger = new passengerDetails(req);
        passengerDetails.findOneAndUpdate({ "PNR": req.PNR }, {
            $push: {
                "Services": req.ServiceName
            }
        }, (err, result) => {
            if (!err) {
                //console.log("added service is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}

function checkIn(req) {
    return new Promise((resolve, reject) => {
        //console.log("the Seat to update");
        //console.log(req.SeatNo);
        passengerDetails.findOneAndUpdate({ "PNR": req.PNR }, {
            $set: {
                "SeatNo": req.SeatNo
            }
        }, (err, result) => {
            if (!err) {
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}

function updateMeal(req) {
    return new Promise((resolve, reject) => {
        passengerDetails.findOneAndUpdate({ "PNR": req.PNR }, {
            $set: {
                "food": req.Meal.Services,
            }
        }, (err, result) => {
            if (!err) {
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}
function getServices(req) {
    return new Promise((resolve, reject) => {
        flights.find({ "fId": req.flightId }).
            then((result) => {
                resolve(result);
            }).catch((err) => {
                //console.log("error is " + err);
                reject(error);
            })
    })
}

function addAncillaryServices(req) {
    return new Promise((resolve, reject) => {
        flights.findOneAndUpdate({ "fId": req.fId }, 
        { $push: {
                [req.type]: req.Service.Services
            }
        }, (err, result) => {
            if (!err) {
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}
function removeAncillaryItems(req) {
    //console.log("aaya2");
    return new Promise((resolve, reject) => {
       // var type1 = req.type;
        //console.log("tye is",req.type);
        //console.log("request her in servc",req)
        flights.findOneAndUpdate({ "fId": req.fId }, 
        { $pull: {
                [req.type]: req.Service
            }
        }, (err, result) => {
            if (!err) {
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}

module.exports = {
    addPassenger, getFlights, addFlights,
    getPassengers, deleteFlights, updatePassenger,
    addShopItem, addService, checkIn, updateMeal,
    getServices,addAncillaryServices,removeAncillaryItems

}