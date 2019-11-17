
var mongoose=require('mongoose'),
	Schema=mongoose.Schema,
	item=require('../models/items.server.model');

//the enums for category
const Categories=Object.freeze({
	Mexican: 'Mexican',
	Asian: 'Asian',
	'Fast Food': 'Fast Food',
	Breakfast: 'Breakfast',
	Lunch: 'Lunch',
	Dinner: 'Dinner'
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
	items: [item.itemSchema],
	category: [{type: String, enum: Object.values(Categories)}],
	pickUp: Boolean,
	delivery: Boolean,
	rating: {type: Number, default: -1},
	created_at: Date
});

//before saving, add created_at date
restaurantSchema.pre('save',function(next,err){
	var currentDate=new Date();

	this.created_at=currentDate;

	next();
})

var RestaurantListing=mongoose.model('RestaurantListing',restaurantSchema);

module.exports=RestaurantListing;