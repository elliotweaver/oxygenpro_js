
var Projects = require('../models/project.js')
  , Cases = require('../models/case.js')
  , nodemailer = require('nodemailer');

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

//Create a SMTP transport object
  var transport = nodemailer.createTransport("SMTP", {
          service: 'Gmail', // use well known service
          auth: {
              user: "elliot@oxygenproductions.com",
              pass: "?/l45\URYg5qkx"
          }
      });

  console.log('SMTP Configured');

  // Message object
  var message = {
      
      // sender info
      from: 'Sender Name <sender@example.com>',
      
      // Comma separated list of recipients
      to: '"Receiver Name" <receiver@example.com>',
      
      // Subject of the message
      subject: 'Nodemailer is unicode friendly ✔', //

      headers: {
          'X-Laziness-level': 1000
      },

      // plaintext body
      text: 'Hello to myself!',
      
      // HTML body
      html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+
           '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@node"/></p>',
      
      // An array of attachments
      attachments:[
          
          // String attachment
          {
              fileName: 'notes.txt',
              contents: 'Some notes about this e-mail',
              contentType: 'text/plain' // optional, would be detected from the filename
          },
          
          // Binary Buffer attachment
          {
              fileName: 'image.png',
              contents: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                                   '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                                   'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),
              
              cid: 'note@node' // should be as unique as possible
          },
          
          // File Stream attachment
          {
              fileName: 'nyan cat ✔.gif',
              filePath: __dirname+"/nyan.gif",
              cid: 'nyan@node' // should be as unique as possible
          }
      ]
  };

  console.log('Sending Mail');
  transport.sendMail(message, function(error){
      if(error){
          console.log('Error occured');
          console.log(error.message);
          return;
      }
      console.log('Message sent successfully!');
      
      // if you don't want to use this transport object anymore, uncomment following line
      //transport.close(); // close the connection pool
  });
  
};