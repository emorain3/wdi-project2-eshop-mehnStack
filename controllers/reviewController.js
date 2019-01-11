const Item = require('../models/Item');
const Review = require('../models/Review');


const reviewController = {
    show: (req, res) => {
        let id = req.params.id;
        // Item.findById(id).populate('reviews').then( item => {
        //     console.log(item)
        //     res.render('shop/showItem', {item})
        // })
        Item.findById(id).then( item => {
            console.log(item)
            res.render('shop/showItem', {item})
        })
    },
}

module.exports = reviewController