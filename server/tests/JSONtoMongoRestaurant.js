'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Restaurant = require('../models/RestaurantSchema.js'), 
    config = require('../config/config.js');

mongoose.set('useCreateIndex',true);
/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
mongoose.connect(config.db.uri,{useNewUrlParser: true});
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */
fs.readFile('restaurantSchemaTests.json','utf8',function(err,data){
  if(err){
    console.error(err);
    throw(err);
  }
  var restaurantData=JSON.parse(data);
  var array=restaurantData.entries;

  array.forEach(function(element){
    var current=new Restaurant(element);
    current.save(function(err){
      if(err) throw err;
    });
  });

});
/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */