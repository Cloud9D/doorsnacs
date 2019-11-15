var  item = require('../controllers/item.server.controller.js'),
    express = require('express'), 
    router = express.Router();

router.route('/')
  	.get(item.readAll)
	.post(item.create);
router.route('/:itemId')
	.get(item.read)
	.put(item.update)
	.delete(item.delete);
router.param('itemId',item.itemByID); 
module.exports = router;