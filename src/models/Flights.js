var moongoose = require('mongoose')

const flights = moongoose.Schema({
    fId :{
        type:String,
        required:true},
    fName:{
        type:String,
        required:true
    },
    fTime:{
        type:String,
        required:true
    },
    fDate:{
        type:String,
        required:true
    },
    fServices:{
        type:[],
        required:true
    },
    fMeals:{
        type:[],
        required:true
    },
    fShoppingItems:{
        type:[],
        required:true
    },
    

})

    module.exports = moongoose.model('flights',flights)