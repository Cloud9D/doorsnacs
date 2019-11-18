var  profile = require('../controllers/profile.server.controller.js'),
    express = require('express'), 
    router = express.Router();

router.route('/')
        .get(profile.readAll)
        .post(profile.create);
router.route(/account/)
	.post(profile.readQ);
router.route('/:profileId')
        .get(profile.read)
        .put(profile.update)
        .delete(profile.delete);
router.param('profileId',profile.profileByID); 
module.exports = router;

