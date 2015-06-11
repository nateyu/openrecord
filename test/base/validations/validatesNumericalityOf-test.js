var should = require('should');

var Store = require('../../../lib/store');


describe('validatesNumericalityOf()', function(){
  
  describe('allow_null', function(){
    var store = new Store();
    store.Model('User', function(){
      this.attribute('attr', Number);
      this.validatesNumericalityOf('attr', {allow_null: true, eq: 2});  
    });
    
    var User, valid, invalid;
    before(function(next){
      store.ready(function(){
        
        User = store.Model('User');
        valid = new User();
        invalid = new User({attr: 99});      
      
        next();
      });
    });
    
  
  
    it('returns true on valid records', function(done){
      valid.isValid(function(valid){
        valid.should.be.true;
        done();
      });
    });
  
    it('returns false on invalid records', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        done();
      });
    });
  
    it('returns the right error message', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        invalid.errors.should.have.property('attr');
        done();
      });
    });
  });
  
  
  describe('gt', function(){
    var store = new Store();
    store.Model('User', function(){
      this.attribute('attr', Number);
      this.validatesNumericalityOf('attr', {gt: 2});  
    });
    
    var User, valid, invalid;
    before(function(next){
      store.ready(function(){
      
        User = store.Model('User');
        valid = new User({attr: 10});
        invalid = new User({attr: 2});
      
        next();
      });
    });
    
  
  
    it('returns true on valid records', function(done){
      valid.isValid(function(valid){
        valid.should.be.true;
        done();
      });
    });
  
    it('returns false on invalid records', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        done();
      });
    });
  
    it('returns the right error message', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        invalid.errors.should.have.property('attr');
        done();
      });
    });
  });
  
  
  
  describe('gte', function(){
    var store = new Store();
    store.Model('User', function(){
      this.attribute('attr', Number);
      this.validatesNumericalityOf('attr', {gte: 2});  
    });

    var User, valid, invalid;
    before(function(next){
      store.ready(function(){
      
        User = store.Model('User');
        valid = new User({attr: 2});
        invalid = new User({attr: 0});
      
        next();
      });
    });
    
  
  
    it('returns true on valid records', function(done){
      valid.isValid(function(valid){
        valid.should.be.true;
        done();
      });
    });
  
    it('returns false on invalid records', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        done();
      });
    });
  
    it('returns the right error message', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        invalid.errors.should.have.property('attr');
        done();
      });
    });
  });
  
  
  
  describe('gte', function(){
    var store = new Store();
    store.Model('User', function(){
      this.attribute('attr', Number);
      this.validatesNumericalityOf('attr', {lt: 3});  
    });

    var User, valid, invalid;
    before(function(next){
      store.ready(function(){
      
        User = store.Model('User');
        valid = new User({attr: 2});
        invalid = new User({attr: 3});
      
        next();
      });
    });
    
  
  
    it('returns true on valid records', function(done){
      valid.isValid(function(valid){
        valid.should.be.true;
        done();
      });
    });
  
    it('returns false on invalid records', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        done();
      });
    });
  
    it('returns the right error message', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        invalid.errors.should.have.property('attr');
        done();
      });
    });
  });
  
  
  
  describe('gte', function(){
    var store = new Store();
    store.Model('User', function(){
      this.attribute('attr', Number);
      this.validatesNumericalityOf('attr', {lte: 3});  
    });

    var User, valid, invalid;
    before(function(next){
      store.ready(function(){
      
        User = store.Model('User');
        valid = new User({attr: 3});
        invalid = new User({attr: 4});
      
        next();
      });
    });
    
  
  
    it('returns true on valid records', function(done){
      valid.isValid(function(valid){
        valid.should.be.true;
        done();
      });
    });
  
    it('returns false on invalid records', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        done();
      });
    });
  
    it('returns the right error message', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        invalid.errors.should.have.property('attr');
        done();
      });
    });
  });
  
  
  describe('gte', function(){
    var store = new Store();
    store.Model('User', function(){
      this.attribute('attr', Number);
      this.validatesNumericalityOf('attr', {even: true});  
    });

    var User, valid, invalid;
    before(function(next){
      store.ready(function(){
      
        User = store.Model('User');
        valid = new User({attr: 4});
        invalid = new User({attr: 3});
      
        next();
      });
    });
    
  
  
    it('returns true on valid records', function(done){
      valid.isValid(function(valid){
        valid.should.be.true;
        done();
      });
    });
  
    it('returns false on invalid records', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        done();
      });
    });
  
    it('returns the right error message', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        invalid.errors.should.have.property('attr');
        done();
      });
    });
  });
  
  
  
  describe('gte', function(){
    var store = new Store();
    store.Model('User', function(){
      this.attribute('attr', Number);
      this.validatesNumericalityOf('attr', {odd: true});  
    });

    var User, valid, invalid;
    before(function(next){
      store.ready(function(){
      
        User = store.Model('User');
        valid = new User({attr: 3});
        invalid = new User({attr: 4});
      
        next();
      });
    });
    
  
  
    it('returns true on valid records', function(done){
      valid.isValid(function(valid){
        valid.should.be.true;
        done();
      });
    });
  
    it('returns false on invalid records', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        done();
      });
    });
  
    it('returns the right error message', function(done){
      invalid.isValid(function(valid){
        valid.should.be.false;
        invalid.errors.should.have.property('attr');
        done();
      });
    });
  });
  
});