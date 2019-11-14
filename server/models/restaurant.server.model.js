
var mongoose=require('mongoose'),
	Schema=mongoose.Schema;

const Categories=Object.freeze({
	Mexican: 'Mexican',
	Asian: 'Asian',
	'Fast Food': 'Fast Food',
})

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
	category: [{type: String, enum: Object.values(Categories)}],
	pickUp: Boolean,
	delivery: Boolean,
	rating: {type: Number}, //need to see how to set it auto to blank???
	created_at: Date
});

restaurantSchema.pre('save',function(next){
	var currentDate=new Date();

	this.created_at=currentDate;

	next();
})

//need a method to create Item from within the Restaurant

var RestaurantListing=mongoose.model('RestaurantListing',restaurantSchema);

module.exports=RestaurantListing;