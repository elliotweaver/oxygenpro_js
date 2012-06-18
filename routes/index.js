
var Projects = require('../models/project.js')
  , Cases = require('../models/case.js')
  , email = require('mailer');

exports.admin = require('./admin');
exports.blog = require('./blog');

exports.index = function(req, res) {
  res.render('index', { title: 'Oxygen Productions' });
};

exports.work = function(req, res) {
  Cases.find({}).where('status', 1).sort('updated', -1).exec(function(err, cases) {
    Projects.find({}).where('status', 1).sort('updated', -1).exec(function(err, projects) {
    	res.render('work', { title: 'Work', cases: cases, projects: projects });
    });
  });
};

exports.clients = function(req, res) {
  res.render('clients', { title: 'Clients' });
};

exports.about = function(req, res) {
  res.render('about', { title: 'About' });
};

exports.quote = function(req, res) {
  //validate

  //email
};