'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    ItemMod = require('../models/items.server.model'), 
    config = require('../config/config.js'),
    Item =ItemMod.modl;

/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
    mongoose.connect(config.db.uri, { useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */
fs.readFile('items.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
    HINT: Check out this resource on fs.readFile
    //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
    HINT: Read up on JSON parsing Node.js
   */
	var itemsData, thing, id;
	itemsData = JSON.parse(data);
    for ( var i = 0; i < itemsData.entries.length; i++){
        thing = itemsData.entries[i];
	new Item({
        Title: thing.Title, 
        Price: thing.Price,
	Type:thing.Type,
        Warnings:thing.Warnings,
      }).save(function(err, thing){
        id = thing._id;
      });   
 }
});

/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */