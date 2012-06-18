
var root = '/home/elliot/Documents/code/oxygenpro_js'
  , bcrypt = require('bcrypt')
  , check = require('validator').check
  , sanitize = require('validator').sanitize
  , lib = {
      common      : require('./common.js')
  }
  , fs = require('fs')
  , Model = require('../models/post.js')
  , ls = 'post'
  , lp = 'posts'
  , us = 'Post'
  , up = 'Posts';

/** edit **/
var edit = function(req, values, callback) {
  req.session.form.values = values;
  callback();
}
exports.edit = edit;

/** create **/
var create = function(values, callback) {
	var record = new Model();	
  record.tags = [];
	record.title = values.title;
	record.featured = values.featured;
	record.slug = values.slug;
	record.post = values.post;
	record.summary = values.summary;
	record.author = values.author;
	var arr = values.tags.split(',');
	for (i in arr) {
	  record.tags.push( arr[i] );
	}
	record.save(callback);
}
exports.create = create;

/** update **/
var update = function(id, values, callback) { 
	var arr = values.tags.split(',')
	  , tags = [];
	for (i in arr) {
	  tags.push( arr[i] );
	}
	var fields = {};
	fields.title = values.title;
	fields.featured = values.featured;
	fields.slug = values.slug;
	fields.post = values.post;
	fields.summary = values.summary;
	fields.tags = tags;
	fields.author = values.author;
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
  if (values.featured !== '1') {
    values.featured = 0;
  }
  else {
    values.featured = 1;
  }
  req.session.form.values = values;
  callback();
}
exports.validate = validate;
