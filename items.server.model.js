
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var itemSchema = new Schema({
        Title: {type: String, required: true},
	Price:ls Number,
     	Catogory:[String],
	Warnings:[String],
	DeliveryMethod: Boolean,
	Picture:{data:Buffer, contentType:String},
	Rating: Number,
	created_at: Date,                                                  
        updated_at: Date
});
listingSchema.pre('save', function(next) {
  
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;
 next();
});