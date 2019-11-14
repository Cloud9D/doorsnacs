
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;
const Warnings = Object.freeze({
	Peanut : 'Peanut',
	Shellfish : 'Shellfish',
	Gluten : 'Gluten' 
});
/* Create your schema */
var itemSchema = new Schema({
        Title: {type: String, required: true},
        Price:{type: Number, required: true},
        Type:[{type: String, required:true}],
        Warnings:[{type:String, required:true}],
        Picture:String,
        created_at: Date,                                                  
        updated_at: Date
});
itemSchema.pre('save', function(next) {
  
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;
 next();
});
var Item = mongoose.model('Item', itemSchema);

module.exports = Item;