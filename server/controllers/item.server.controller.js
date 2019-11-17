
var ItemMod = require('../models/items.server.model.js');
var Item = ItemMod.modl;
exports.create = function(req, res) {
	var item = new Item(req.body);
	item.save()
	.then(item =>{
		console.log(item);
		res.send(item);
	}).catch(err =>{
    		console.log(err);
                res.status(404).send(err.message);
	});
};

exports.read = function(req, res) {
	var item = req.item;
	res.send(item);
};
exports.readAll = function (req, res) {
	 Item.find()
        .then( items => {                                                                                                       
                res.send(items);                                                                                                                                                                                      
        }).catch(err => {
                res.status(404).send(err.message);                                                                                                                                                                   
        }); 
};
exports.update = function(req,res){
	var item = req.item;
	//console.log(req.body);
	Item.findByIdAndUpdate(item._id, {
        Title: req.body.Title||item.Title,
        Price: req.body.Price||item.Price,
	Type: req.body.Type || item.Type,
	Warnings: req.body.Warnings || item.Warnings
    }, {new: true})
    .then(i => {
        if(!i) {
            return res.status(404).send({
                message: "Item not found with id " + item._id
            });
        }
        res.send(i);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Item  not found with id " + item._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Item with id " + item._id
        });
    });
	updated_t: Date.now();
};
exports.delete = function(req,res){
	var item =req.item
	Item.findByIdAndRemove(item._id)
	.then( item => {
		// if not items in query id was incorrect 
		if(!item) 
			return res.status(404).send({message: "Item not found with id " + req.params.itemId});
		res.send({message: "item deleted"});
	}).catch(err => {
		if(err.kind === 'ObjectId'|| err.name === 'NotFound')
			return res.status(404).send({message: "Item not found with id " + req.params.itemId});
		res.status(500).send(err.message);
	});	
};
exports.itemByID = function(req,res,next,id){
 	Item.findById(id).exec(function(err, item) {
    		if(err) {
      		res.status(400).send(err);
    		} else {
		 console.log(item);
     		 req.item = item;
      		next();
    	}
  });
};