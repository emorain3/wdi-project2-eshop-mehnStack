const Item = require('../models/Item');
const Review = require('../models/Review');


const reviewController = {
    show: (req, res) => {
        let id = req.params.id;
        Item.findById(id).populate('reviews').then( item => {
            console.log(item)
            res.render('shop/showItem', {item})
        })
    
    },
    create: (req, res) => {
        let itemId = req.params.id;
        console.log("\n \n req.body looks like: \n" + req.body + "\n")
        Item.findById(itemId).then( item => {
            Review.create({
                author: "Anon", 
                message: req.body.message, 
            }).then( newReview => {
                item.reviews.push(newReview)
                item.save()
                res.redirect('/item/' + itemId)
            })
        })
    }
}

module.exports = reviewController