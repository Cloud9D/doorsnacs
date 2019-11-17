var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    Item = require('../models/items.server.model.js'),
`   Profile = require('../models/profile.server.model.js');

/* Global variables */
var app, agent, item, id, id2;
Item = Item.modl;
Profile = Item.modl;
/* Unit tests for testing server side routes for the listings API */
describe('Item CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });
  it('should be able to save item', function(done) {
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
  it('should be able to save profile and read', function(done) {
   Item.findOne({Title:'test'},function(err,item){
      if(err) {
        console.log(err);
      } else {
	var profile ={
	  Name: 'Marco',
	  Cart: [item]
	}
        agent.post('/api/profile/')
	  .send(profile)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.Name.should.equal('Marco');
            res.body.Cart[0].Title.should.equal('test');
            res.body.Cart[0].Price.should.equal(37.01);
            res.body.Cart[0]._id.should.equal(item._id.toString();
	    id2= res.body._id;
        });
	agent.get('/api/profile/'+ id2)
	  .send(profile)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.Name.should.equal('Marco');
            res.body.Cart[0].Title.should.equal('test');
            res.body.Cart[0].Price.should.equal(37.01);
            res.body.Cart[0]._id.should.equal(item._id.toString();
            done();
         });
      }
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
  it('should be able to update a item', function(done) {
    var updatedItem = { 
      Price: 37.44
    };
    Item.findOne({Title: 'Garnola'}, function(err, item) {
      if(err) {
        console.log(err);
      } else {
	var profile;
	agent.get('/api/profile/' + id2)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res.body._id);
            res.body.Name.should.equal('Marco');                                                          
            profile = res.body;
	    });
	profile.Cart.push(item);     
        agent.put('/api/profile/' + id2)
      	  .send(profile)
      	  .expect(200)
      	  .end(function(err, res) {
            should.not.exist(err);
            should.exist(res.body._id);
            res.body.Cart[1].Title.should.equal(item.Title);                                                              
            res.body.Cart[1].Price.should.equal(item.Price);
            done();
      	    });      
      }
    });
  });
  it('should be able to delete a item', function(done) {
    agent.delete('/api/profile/' + id2)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
                                                                                                                                                       
        agent.get('/api/profile/' + id2) 
          .expect(400)
          .end(function(err, res) {
            id = undefined;
            done();
          });
      })
  });
  after(function(done) {
        if(id) {
                Item.deleteOne({_id: id}, function(err){
                        if(err) throw err;
                        next();
                });
        }if(id2) {
                Profile.deleteOne({_id: id2}, function(err){
                        if(err) throw err;
                        next();
                });
	else done();
   }); 
});