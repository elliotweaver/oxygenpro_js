
var bcrypt = require('bcrypt')
  , check = require('validator').check
  , sanitize = require('validator').sanitize
  , lib = {
      common      : require('./common.js')
  }
  , Model = require('../models/user.js')
  , ls = 'user'
  , lp = 'users'
  , us = 'User'
  , up = 'Users';

/** edit **/
var edit = function(req, values, callback) {
  req.session.form.values = values;
  callback();
}
exports.edit = edit;

/** create **/
var create = function(values, callback) {
  var password = values.password;
  delete values[password];
  values.salt = bcrypt.genSaltSync(10);
  values.hash = bcrypt.hashSync(password, values.salt);
  var record = new Model();
  record.email = values.email;
  record.password = values.hash;
  record.save(callback(err));
}
exports.create = create;

/** update **/
var update = function(id, values, callback) { 
  var fields = {};
  fields.email = values.email;
  var password = values.password;
  values.salt = bcrypt.genSaltSync(10);
  values.hash = bcrypt.hashSync(password, values.salt);
  fields.password = values.hash;
  Model.update({ _id: id }, fields, {}, callback);
}
exports.update = update;
  
/** validate **/
var validate = function (req, callback) {
    var values = req.body;
    
    try {
      values.email = sanitize(values.email).xss().trim();
      check(values.email).notNull().isEmail();
    } catch (e) {
      req.session.form.errors.email = 'Enter a valid email';
    }
      
    try {
      values.password = sanitize(values.password).xss().trim();
      check(values.password).notNull();
    } catch (e) {
      req.session.form.errors.password = 'Enter a valid password';
    }
      
    try {
      values.password2 = sanitize(values.password2).xss().trim();
      check(values.password2).notNull();
    } catch (e) {
      req.session.form.errors.password2 = 'Enter a valid password';
    }
      
    if (values.password !== values.password2) {
      req.session.form.errors.password2 = "Password doesn't match";
    }
    
    if(req.method == 'POST') {
    
      var query = Model.find({});
      query.where('email', values.email);
      query.limit(1);
      query.exec(function (err, docs) {
        if (!lib.common.isempty(docs)) {
          if (docs[0]._id != req.params.id) {
            req.session.form.errors.email = 'An account with that email already exists';
          }
        }
        if (!lib.common.isempty(req.session.form.errors)) {
          req.session.flash.error.push( 'Please see the errors below' );
        }
        req.session.form.values = values;
        callback();
      });
      
    }
    
    else {
      if (!lib.common.isempty(req.session.form.errors)) {
        req.session.flash.error.push( 'Please see the errors below' );
      }
      req.session.form.values = values;
      callback();
    }

}
exports.validate = validate;
