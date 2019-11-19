var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    itemRouter = require('../routes/item.server.routes'),
    profileRouter = require('../routes/profile.server.routes'),
    restaurantRouter=require('../routes/restaurant.server.routes');
    cors = require("cors");

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    var app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));
    app.use(cors());
    // body parsing middleware
    app.use(bodyParser.json());

    // add a router

	app.use('/api/item', itemRouter);
	app.use('/api/profile',profileRouter);
    app.use('/api/restaurant',restaurantRouter);
    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

