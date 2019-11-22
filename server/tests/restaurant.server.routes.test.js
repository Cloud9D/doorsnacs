var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    RestaurantMod = require('../models/restaurant.server.model.js'),
    Restaurant=RestaurantMod.modl;
/* Global variables */
var app, agent, restaurant, id;

/* Unit tests for testing server side routes for the listings API */
describe('Restaurant CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });

  it('should it able to retrieve all restaurants', function(done) {
    agent.get('/api/restaurant')
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.body.should.have.length(2);
        done();
      });
  });

  it('should be able to retrieve a single restaurant', function(done) {
    Restaurant.findOne({name: "Mama's Best"}, function(err, restaurant) {
      if(err) {
        console.log(err);
      } else {
        agent.get('/api/restaurant/' + restaurant._id)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.name.should.equal("Mama's Best");
            res.body.description.should.equal("Only the best");
            res.body.itemsForSale[0].Title.should.equal("Apples");
            res.body.itemsForSale.length.should.equal(1);
            res.body._id.should.equal(restaurant._id.toString());
            done();
          });
      }
    });
  });

  it('should be able to save a restaurant', function(done) {
    var restaurant = {
      name: 'testRest', 
      "location":{
        "addressLine1":"Test Test",
        "city":"San Francisco",
        "state":"California",
        "country":"USA",
        "zipcode":19753
      },
      "itemsForSale":[{
        "Title":"Bananas",
        "Price":300,
        "Type": [],
        "Warnings": []
      }]
    };
    agent.post('/api/restaurant')
      .send(restaurant)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('testRest');
        res.body.rating.should.equal(-1);
        res.body.itemsForSale[0].Price.should.equal(300);
        id = res.body._id;
        done();
      });
  });

  it('should be able to update a restaurant', function(done) {
    var updatedRestaurant={
      name: 'cool kids',
      "location":{
        "addressLine1":"Update In Progress",
        "addressLine2":"Maybe tomorrow",
        "city":"Miami",
        "state":"Ohio",
        "country":"USA",
        "zipcode":435179
      },
      "itemsForSale":[{
        "Title":"Bananas",
        "Price":300,
        "Type": [],
        "Warnings": []
      },
      {
        "Title":"Edible Jackets",
        "Price":500,
        "Type": [],
        "Warnings": []
      }]
    };

    agent.put('/api/restaurant/' + id)
      .send(updatedRestaurant)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('cool kids');
        res.body.location.addressLine1.should.equal("Update In Progress");
        res.body.itemsForSale[1].Title.should.equal("Edible Jackets");
        res.body.itemsForSale.length.should.equal(2);
        done();
      });
  });

  it('should be able to delete a restaurant', function(done) {
    agent.delete('/api/restaurant/' + id)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);

        agent.get('/api/restaurant/' + id) 
          .expect(400)
          .end(function(err, res) {
            id = undefined;
            done();
          });
      })
  });
  after(function(done) {
      if(id) {
          Restaurant.deleteOne({_id: id}, function(err){
            if(err) throw err;
            next();
            });
  }else done();
   }); 
});