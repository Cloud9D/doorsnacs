var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    Item = require('../models/items.server.model.js');

/* Global variables */
var app, agent, item, id;
Item = Item.modl;

/* Unit tests for testing server side routes for the listings API */
describe('Item CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });

  it('should it able to retrieve all item', function(done) {
    agent.get('/api/item')
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.body.should.have.length(3);
        done();
      });
  });
  it('should be able to retrieve a single item', function(done) {
    Item.findOne({Title: 'Garnola'}, function(err, item) {
      if(err) {
        console.log(err);
      } else {
        agent.get('/api/item/' + item._id)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.Title.should.equal('Garnola');
            res.body.Price.should.equal(5.99);
            res.body._id.should.equal(item._id.toString());
            done();
          });
      }
    });
  });

  it('should be able to save a listing', function(done) {
    var item = {
      Title: 'test', 
      Price: 37.01  
    };
    agent.post('/api/item')
      .send(item)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.Title.should.equal('test');
        res.body.Price.should.equal(37.01);
        id = res.body._id;
        done();
      });
  });



  it('should be able to update a item', function(done) {
    var updatedItem = { 
      Price: 37.44
    };

    agent.put('/api/item/' + id)
      .send(updatedItem)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.Title.should.equal('test');
        res.body.Price.should.equal(37.44);
	done();
      });
  });

  it('should be able to delete a item', function(done) {
    agent.delete('/api/item/' + id)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);

        agent.get('/api/item/' + id) 
          .expect(400)
          .end(function(err, res) {
            id = undefined;
            done();
          });
      })
  });
  after(function(done) {
    	if(id) {
      		Listing.deleteOne({_id: id}, function(err){
        		if(err) throw err;
        		next();
  	        });
	}else done();
   }); 
});