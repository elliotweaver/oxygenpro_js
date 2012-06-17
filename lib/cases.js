
var bcrypt = require('bcrypt')
  , check = require('validator').check
  , sanitize = require('validator').sanitize
  , lib = {
      common      : require('./common.js')
  }
  , Model = require('../models/case.js')
  , ls = 'case'
  , lp = 'cases'
  , us = 'Case'
  , up = 'Cases';

/** edit **/
var edit = function(req, values, callback) {
  req.session.form.values = values;
  callback();
}
exports.edit = edit;

/** create **/
var create = function(values, callback) {
  var record = new Model();
  record.job = values.job;
  record.price = values.price;
  record.lead = values.lead;
  record.contractor = values.contractor;
  record.payment = values.payment;
  record.save(callback);
}
exports.create = create;

/** update **/
var update = function(id, values, callback) { 
  Model.findById(id, function (err, doc) {
    doc.job = values.job;
    doc.price = values.price;
    doc.lead = values.lead;
    doc.contractor = values.contractor;
    doc.payment = values.payment;
    doc.updated = Date.now();
    doc.save(callback);
  });
}
exports.update = update;
  
/** validate **/
var validate = function (req, callback) {

    var values = req.body;
    
    try {
      values.lead = sanitize(values.lead).xss().trim();
      check(values.lead).notNull();
    } catch (e) {
      req.session.form.errors.lead = 'Enter a valid lead id';
    }
    
    if (!lib.common.isempty(req.session.form.errors)) {
      req.session.flash.error.push( 'Please see the errors below' );
    }
    
    req.session.form.values = values;
    callback();
}
exports.validate = validate;
