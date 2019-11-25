var  restaurant = require('../controllers/restaurant.server.controller.js'),
    express = require('express'), 
    router = express.Router();

router.route('/')
  	.get(restaurant.readAll)
	.post(restaurant.create);
router.route('/:restaurantId')
	.get(restaurant.read)
	.put(restaurant.update)
	.delete(restaurant.delete);
router.param('restaurantId',restaurant.restaurantByID); 
module.exports = router;