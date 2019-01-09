const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Item = new Schema({
    name: String, 
    description: String, 
    image_url: String, 
    category: String, // Want to make into an enum
    price: Number, 
})




module.exports = mongoose.model('Item', Item)