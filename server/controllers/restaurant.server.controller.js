var RestaurantMod = require('../models/restaurant.server.model');
Restaurant=RestaurantMod.modl;

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

exports.readAll = function (req, res) {
	 Restaurant.find()
        .then( restaurants => {                                                                                                       
                res.send(restaurants);                                                                                                                                                                                      
        }).catch(err => {
                res.status(404).send(err.message);                                                                                                                                                                   
        }); 
};

exports.update = function(req,res){
        var restaurant = req.restaurant;
        //console.log(req.body);
        Restaurant.findByIdAndUpdate(restaurant._id, {
        name: req.body.name || restaurant.name,
       	description: req.body.description || restaurant.description,
        location:{
            addressLine1: req.body.location.addressLine1 || restaurant.location.addressLine1,
            addressLine2: req.body.location.addressLine2 || restaurant.location.addressLine2,
            city: req.body.location.city || restaurant.location.city,
            state: req.body.location.state || restaurant.location.state,
            country: req.body.location.country || restaurant.location.country,
            zipcode: req.body.location.zipcode || restaurant.location.zipcode
        },
        itemsForSale: req.body.itemsForSale || restaurant.itemsForSale,
        category: req.body.category || restaurant.category,
        pickUp: req.body.pickUp || restaurant.pickUp,
        delivery: req.body.delivery || restaurant.delivery,
        rating: req.body.rating || restaurant.rating
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
};


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

exports.restaurantByID = function(req,res,next,id){                                                                                                                                                                        
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