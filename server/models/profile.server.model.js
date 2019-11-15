                                                                          
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
var Item = require('../models/items.server.model.js'),
var Resturant = require('../models/resturant.server.model.js');
/* Create your schema */
var profileSchema = new Schema({
        AccountID: String
	Name: {type: String, required: true},
        Cart:[Item],
	Resturant:Resturant,
        created_at: Date,                                                  
        updated_at: Date
});
profileSchema.pre('save', function(next) {
  
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;
 next();
});
var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

