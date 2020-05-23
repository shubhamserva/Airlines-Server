var moongoose = require('mongoose');

const passengerDetail  = moongoose.Schema({
    PNR:{
        type:String,
        required:true
    },
    fId:{
        type:String,
        required:true
    },
    pName:{
        type:String,
        required:true
    },
    Infant:{
        type:Boolean
    },
    Check_In_Status:{
        type:Boolean,
        required:true
    },
    WheelChair:{
        type:Boolean,
    },
    Services:{
        type:[],
    },
    SeatNo:{
        type:String,
        required:true
    },
    Passport:{
        type:String,
    },
    Address:{
        type:String
    },
    DOB:{
        type:String
    },
    ShopRequests:{
        type:[]
    },
})

module.exports = moongoose.model('pDetails',passengerDetail);