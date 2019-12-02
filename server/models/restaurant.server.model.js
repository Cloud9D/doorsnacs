
var mongoose=require('mongoose'),
	Schema=mongoose.Schema,
	itemMod=require('../models/items.server.model');
//the enums for category
const Categories=Object.freeze({
	Mexican: 'Mexican',
	Asian: 'Asian',
	Italian: 'Italian',
	'Fast Food': 'Fast Food',
	Breakfast: 'Breakfast',
	Lunch: 'Lunch',
	Dinner: 'Dinner',
	Sweets: 'Sweets'
})

var schem=new Schema({
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
	itemsForSale: [itemMod.schem],
	category: [{type: String, enum: Object.values(Categories)}],
	pickUp: {type: Boolean, default: false},
	delivery: {type: Boolean, default: false},
	rating: {type: Number, default: -1},
	created_at: Date
});

//before saving, add created_at date
schem.pre('save',function(next,err){
	var currentDate=new Date();

	this.created_at=currentDate;

	next();
})

var modl=mongoose.model('RestaurantListing',schem);

module.exports={schem,modl};