var Item = require('../models/items.server.model.js')

exports.create = function(req, res) {
	var item = new Item(req.bod);
	item.save(function(err){
    		if(err){
			console.log(err);
			res.status(400).send(err);
		}else{
			res.json(item);
			console.log(item);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.item);
};