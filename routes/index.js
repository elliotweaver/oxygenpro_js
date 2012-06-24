
var Projects = require('../models/project.js')
  , Cases = require('../models/case.js')
  , nodemailer = require('nodemailer')
  , common = require('../lib/common.js')
  , check = require('validator').check
  , sanitize = require('validator').sanitize;

exports.admin = require('./admin');
exports.blog = require('./blog');

exports.login = function(req, res, next) {
  if (req.loggedIn === true) {
    res.redirect('/admin');
  }
  else {
    res.render('login', { title: 'Oxygen Productions' });
    next();
  }
};

exports.index = function(req, res, next) {
  res.render('index', { title: 'Oxygen Productions' });
  next();
};

exports.work = function(req, res, next) {
  Cases.find({}).where('status', 1).sort('updated', -1).exec(function(err, cases) {
    Projects.find({}).where('status', 1).sort('updated', -1).exec(function(err, projects) {
    	res.render('work', { title: 'Work', cases: cases, projects: projects });
    });
  });
  next();
};

exports.clients = function(req, res, next) {
  res.render('clients', { title: 'Clients' });
  next();
};

exports.about = function(req, res, next) {
  res.render('about', { title: 'About' });
  next();
};

exports.quote = function(req, res, next) {

  var values = req.body.quote;
  var pass = true;
  
  try {
    values.name = sanitize(values.name).xss().trim();
    check(values.name).notNull();
  } catch (e) {
    pass = false;
    req.session.flash.error.push("Quote: Name can't be left blank." );
  }
  
  try {
    values.email = sanitize(values.email).xss().trim();
    check(values.email).notNull().isEmail();
  } catch (e) {
    pass = false;
    req.session.flash.error.push( "Quote: Enter a valid email address." );
  }
  
  try {
    values.comment = sanitize(values.comment).xss().trim();
    check(values.comment).notNull();
  } catch (e) {
    pass = false;
    req.session.flash.error.push("Quote: Please provide a short description of your project." );
  }
  
  values.company = sanitize(values.company).xss().trim();
  values.url = sanitize(values.url).xss().trim();
  values.phone = sanitize(values.phone).xss().trim();
  values.deadline = sanitize(values.deadline).xss().trim();
  values.type = sanitize(values.type).xss().trim();
  values.budget = sanitize(values.budget).xss().trim();
  
  if (!pass) {
    req.session.form.values = values;
    res.redirect('/');
  }
  
  else {
    var subject = 'Website Quote Request: from ' + values.name
      , html = "<h1>Website Quote:</h1>"+
        "<p>" +
        "<strong>Name:</strong> " + values.name + "<br>" +
        "<strong>Email:</strong> " + values.email + "<br>" +
        "<strong>Company:</strong> " + values.company + "<br>" +
        "<strong>URL:</strong> " + values.url + "<br>" +
        "<strong>Phone:</strong> " + values.phone + "<br>" +
        "<strong>Budget:</strong> " + values.budget + "<br>" +
        "<strong>Deadline:</strong> " + values.deadline + "<br>" +
        "<strong>Type:</strong> " + values.type + "<br><br><br>" +
        "<strong>Description:</strong> " + values.comment + "<br>" +
        "</p>";
    
    //'janet@oxygenproductions.com, ron@oxygenproductions.com, elliot@oxygenproductions.com, patrick@oxygenproductions.com',
    
    var transport = nodemailer.createTransport("Sendmail", "/usr/sbin/sendmail");
    var message = {
        generateTextFromHTML: true,
        from: 'admin@oxygenproductions.com',
        to: 'quotes@oxygenproductions.com',
        cc: 'elliot@oxygenproductions.com',
        subject: subject, 
        html: html
    };
    transport.sendMail(message, function(error){  
      if(error){
        req.session.flash.error.push( 'There was an error processing your request.' );
        res.redirect('/');
      }
      
      message = {
          generateTextFromHTML: true,
          from: 'admin@oxygenproductions.com',
          to: values.email,
          cc: '',
          subject: 'Thank you from Oxygen Productions, Inc.', 
          html: "Thank you for you request. Someone will be in touch with you shortly."
      };
      transport.sendMail(message, function(error) {
        console.log(error);
        req.session.flash.success.push( 'Thank you! We will get back to you shortly.' );
        res.redirect('/');
      });
    });
  }
  
};