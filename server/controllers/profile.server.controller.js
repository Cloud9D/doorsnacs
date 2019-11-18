var ProfileMod = require('../models/profile.server.model.js');
var Profile = ProfileMod.modl;
exports.create = function(req, res) {
        var profile = new Profile(req.body);
        profile.save()
        .then(profile =>{
                console.log(profile);
                res.send(profile);
        }).catch(err =>{
                console.log(err);
                res.status(404).send(err.message);
        });
};
exports.readQ= function(req,res){
	Profile.findOne(req.querry).exec(function(err, profile) {
                if(err) {
                res.status(400).send(err);
                } else {
                 console.log(profile);
                 res.send( profile);
                }
	});
};
exports.read = function(req, res) {
        var profile = req.profile;
        res.send(profile);
};
exports.readAll = function (req, res) {
         Profile.find()
        .then( profiles => {                                                                                                       
                res.send(profiles);                                                                                                                                                                                     
        }).catch(err => {
                res.status(404).send(err.message);                                                                                                                                                                   
        }); 
};
exports.update = function(req,res){
        var profile = req.profile;
        //console.log(req.body);
        Profile.findByIdAndUpdate(profile._id, {
        Name: req.body.Name || profile.Name,
       	Cart: req.body.Cart || profile.Cart,
    }, {new: true})
    .then(i => {
        if(!i) {
            return res.status(404).send({
                message: "Profile not found with id " + profile._id
            });
        }
	console.log(i);
        res.send(i);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Profile  not found with id " + profile._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Profile with id " + profile._id
        });
    });
        updated_t: Date.now();
};
exports.delete = function(req,res){                                                                                                                                                                                  
        var profile =req.profile
        Profile.findByIdAndRemove(profile._id)
        .then( profile => {
                // if not Profiles in query id was incorrect 
                if(!profile) 
                        return res.status(404).send({message: "Profile not found with id " + req.params.ProfileId});
                res.send({message: "Profile deleted"});
        }).catch(err => {
                if(err.kind === 'ObjectId'|| err.name === 'NotFound')
                        return res.status(404).send({message: "Profile not found with id " + req.params.ProfileId});
                res.status(500).send(err.message);
        });     
};
exports.profileByID = function(req,res,next,id){                                                                                                                                                                        
        Profile.findById(id).exec(function(err, profile) {
                if(err) {
                res.status(400).send(err);
                } else {
                 console.log(profile);
                 req.profile = profile;
                next();
        }
  });   
}