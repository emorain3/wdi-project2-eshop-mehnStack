const Item = require('../models/Item');


const itemController = {
    index: (req, res) => {
        Item.find({}).then(items => {
            res.render('shop/main', items);
        })

    }
}

module.exports = itemController