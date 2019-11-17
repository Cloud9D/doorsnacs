                                                                          
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
    Item = require('../models/items.server.model.js'),
//var Resturant = require('../models/resturant.server.model.js'),
    itemSchema = Item.schem;
/* Create your schema */
var schem = new Schema({
        AccountID: String,
	Name: {type: String, required: true},
        Cart:[itemSchema],
//	Resturant:Resturant,
        created_at: Date,                                                  
        updated_at: Date
});
schem.pre('save', function(next) {
  
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;
 next();
});
var modl = mongoose.model('Profile', schem);

module.exports = {modl,schem};

