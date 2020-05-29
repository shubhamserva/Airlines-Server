const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb')
const flight = require('./src/models/Flights');
const passenger = require('./src/models/passengerDetails');
const uri = "mongodb+srv://shubham:test123@airline-server-j8sd4.mongodb.net/AirlinesData?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5555;
const app = express();
app.use(bodyParser.json());

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,
                        'useFindAndModify': false, 'useCreateIndex': true});
const connection = mongoose.connection;
connection.once("open", function() {
  //console.log("Connected to Database");
  app.listen(PORT,()=>{
        //console.log("Airline server running at "+ PORT);
      })
  }).catch((err) => {
      //console.log("Not Connected to Database ERROR! ", err);
  });


app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });
const routes = require('./src/routes/routes');
app.use('/',routes);  

 //<<------------------USed to add flights data to DB----------------->
// let data  = {
//   "fId":"IN9098",
//   "fName":"INDIGO",
//   "fTime":"21:00 HRS",
//   "fDate":"5/1/2020",
//   "fServices":['Pani','Water'],
//   "fMeals":['Maggie','Juice'],
//   "fShoppingItems":['Magzine','Doll']
// }
// var Flight = new flight(data);
// Flight.save((err,res)=>{
//   //console.log("the err is"+ err);
//   //console.log("the result is "+ res);
// })

//<<<<<-------Add passenger Data to DB------------------>
// let pData  = {
// "fId" :"IN9098",
// "pName":"Baccha",
// "PNR":"NEW909",
// "Infant":"false",
// "Check_In_Status":"false",
// "WheelChair":"false",
// "Services":"",
// "SeatNo":"",
// "Passport":"",
// "Address":"",
// "DOB":"1/1/2000",
// "ShopRequests":"",
// "food":"Water"

// }
// var pdata = new passenger(pData);
// pdata.save((err,res)=>{
//   //console.log("the err is"+ err);
//   //console.log("the result is "+ res);
// })

module.exports = app;