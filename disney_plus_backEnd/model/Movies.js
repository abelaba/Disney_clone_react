
const mongoose = require('mongoose');

// * Movie SCHEMA

const movieSchema = new mongoose.Schema({
    backgroundImg:{
        type:String,
        
    },
    cardImg:{
        type: String,
        
    },
    description:{
        type: String,
    },
    subTitle:{
        type: String,
        
    },
    title: {
        type: String
    },
    titleImg: {
        type: String
    },
    type: {
        type: String
    }
});



module.exports = mongoose.model('movies', movieSchema);