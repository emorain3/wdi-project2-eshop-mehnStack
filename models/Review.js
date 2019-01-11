const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Review = new Schema({
    author: String, 
    message: String, 
    
})




module.exports = mongoose.model('Review', Review)