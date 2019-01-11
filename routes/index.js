let express = require('express')
let router = express.Router()

const itemController = require('../controllers/itemController')


//  MAIN PAGE
router.get('/', itemController.index);
router.post('/', itemController.create);


router.get('/:id', itemController.edit);
router.post('/:id', itemController.update);
router.delete('/:id', itemController.delete);


module.exports = router