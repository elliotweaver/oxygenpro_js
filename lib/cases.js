
var root = '/home/elliot/Documents/code/oxygenpro_js'
  , bcrypt = require('bcrypt')
  , check = require('validator').check
  , sanitize = require('validator').sanitize
  , lib = {
      common      : require('./common.js')
  }
  , fs = require('fs')
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
      record.categories = [];
	  record.name = values.name;
	  record.title = values.title;
	  record.description = values.description;
	  record.quick = values.quick;
	  var arr = values.categories.split(',');
	  for (i in arr) {
	    record.categories.push( arr[i] );
	  }
	  record.image = (lib.common.e(values.image)) ? '' : values.image.name;
	  record.save(callback);
}
exports.create = create;

/** update **/
var update = function(id, values, callback) { 
	
	  var arr = values.categories.split(',')
	    , categories = [];
	  for (i in arr) {
	    categories.push( arr[i] );
	  }
	  var fields = {};
	  fields.name = values.name;
	  fields.title = values.title;
	  fields.description = values.description;
	  fields.categories = categories;
	  fields.quick = values.quick;
	  if (values.image.name !== '') {
	    fields.image = values.image.name;
	    fs.rename(values.image.path, root+'/public/images/'+values.image.name);
	  }
	  fields.updated = Date.now();
	  Model.update(
	      { _id: id }
	    , fields
	    , {}
	    , callback
	  );
}
exports.update = update;
  
/** validate **/
var validate = function (req, callback) {
    var values = req.body;
    values.image = (lib.common.e(req.files.image)) ? '' : req.files.image;
    req.session.form.values = values;
    callback();
}
exports.validate = validate;
