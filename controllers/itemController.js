const Item = require('../models/Item');
const mongoose = require("../db/connection");

const itemcontroller = {
    index: (req, res) => {
        Item.find({}).then(items => {
            res.render('shop/main', items);
        })

    }
}

module.exports = itemcontroller;