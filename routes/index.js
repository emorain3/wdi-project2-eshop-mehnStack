let express = require('express')
let router = express.Router()

const itemController = require('../controllers/itemController')
const reviewController = require('../controllers/reviewController')


//  MAIN PAGE
router.get('/', itemController.index);
router.post('/', itemController.create);

//  EDIT PAGE
router.get('/:id', itemController.edit);
router.post('/:id', itemController.update);
router.delete('/:id', itemController.delete);

// REVIEW/ ITEM SHOW PAGE
router. get('/item/:id', reviewController.show)
router. put('/item/:id', reviewController.create)
module.exports = router