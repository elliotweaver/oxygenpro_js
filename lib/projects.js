
var root = '/home/elliot/Documents/code/oxygenpro_js'
  , bcrypt = require('bcrypt')
  , check = require('validator').check
  , sanitize = require('validator').sanitize
  , lib = {
      common      : require('./common.js')
  }
  , fs = require('fs')
  , Model = require('../models/project.js')
  , ls = 'project'
  , lp = 'projects'
  , us = 'Project'
  , up = 'Projects';

/** edit **/
var edit = function(req, values, callback) {
  req.session.form.values = values;
  callback();
}
exports.edit = edit;

/** create **/
var create = function(values, callback) {
  var record = new Model();
  record.name = values.name;
  record.title = values.title;
  record.description = values.description;
  var arr = values.categories.split(',');
  for (i in arr) {
    record.categories.push( arr[i] );
  }
  record.image = (lib.common.e(values.image)) ? '' : values.image.name;
  record.photo = (lib.common.e(values.photo)) ? '' : values.photo.name;
  record.video = values.video;
  record.link = values.link;
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
  fields.categories = values.categories;
  fields.video = values.video;
  fields.link = values.link;
  fields.categories = categories;
  if (values.image.name !== '') {
    fields.image = values.image.name;
    fs.rename(values.image.path, root+'/public/images/'+values.image.name);
  }
  if (values.photo.name !== '') {
    fields.photo = values.photo.name;
    fs.rename(values.photo.path, root+'/public/images/'+values.photo.name);
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
    
    try {
      values.name = sanitize(values.name).xss().trim();
      check(values.name).notNull();
    } catch (e) {
      req.session.form.errors.name = 'Enter a valid name';
    }
    
    values.image = (lib.common.e(req.files.image)) ? '' : req.files.image;
    values.photo = (lib.common.e(req.files.photo)) ? '' : req.files.photo;
    
    if (!lib.common.e(req.session.form.errors)) {
      req.session.flash.error.push( 'Please see the errors below' );
    }
    
    req.session.form.values = values;
    callback();
}
exports.validate = validate;
