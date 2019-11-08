
var mongoose=require('mongoose'),
	Schema=mongoose.Schema;

var restaurantSchema=new Schema({
	name: {type:String, required: true},
	description: String,
	location: {
		addressLine1: {type: String, required: true},
		addressLine2: String,
		city: {type: String, required: true},
		state: {type: String, required: true},
		country: {type:String, required: true},
		zipcode: {type: Number, required: true}
	},
	category: {type: String},
	created_at: Date
});

restaurantSchema.pre('save',function(next){
	var currentDate=new Date();

	this.created_at=currentDate;

	next();
})

var RestaurantListing=mongoose.model('RestaurantListing',restaurantSchema);

module.exports=RestaurantListing;