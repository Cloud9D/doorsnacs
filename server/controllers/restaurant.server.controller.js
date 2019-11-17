var Restaurant = require('../models/restaurant.server.model');

exports.create = function(req, res) {
        var restaurant = new Restaurant(req.body);
        restaurant.save()
        .then(restaurant =>{
                console.log(restaurant);
                res.send(restaurant);
        }).catch(err =>{
                console.log(err);
                res.status(404).send(err.message);
        });
};

exports.read = function(req, res) {
        var restaurant = req.restaurant;
        res.send(restaurant);
};
/*
exports.update = function(req,res){
        var restaurant = req.restaurant;
        //console.log(req.body);
        Profile.findByIdAndUpdate(restaurant._id, {
        Name: req.body.Name || restaurant.Name,
       	Cart: req.body.Cart || restaurant.Cart,
    }, {new: true})
    .then(i => {
        if(!i) {
            return res.status(404).send({
                message: "Restaurant not found with id " + restaurant._id
            });
        }
	console.log(i);
        res.send(i);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Restaurant not found with id " + restaurant._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Restaurant with id " + restaurant._id
        });
    });
        updated_t: Date.now();
};*/

exports.delete = function(req,res){                                                                                                                                                                                  
        var restaurant =req.restaurant
        Restaurant.findByIdAndRemove(restaurant._id)
        .then( restaurant => {
                // if not Profiles in query id was incorrect 
                if(!restaurant) 
                        return res.status(404).send({message: "Restaurant not found with id " + req.params.ProfileId});
                res.send({message: "Restaurant deleted"});
        }).catch(err => {
                if(err.kind === 'ObjectId'|| err.name === 'NotFound')
                        return res.status(404).send({message: "Restaurant not found with id " + req.params.ProfileId});
                res.status(500).send(err.message);
        });     
};

exports.profileByID = function(req,res,next,id){                                                                                                                                                                        
        Restaurant.findById(id).exec(function(err, restaurant) {
                if(err) {
                res.status(400).send(err);
                } else {
                 console.log(restaurant);
                 req.restaurant = restaurant;
                next();
        }
  });   
}