
var Posts = require('../../models/post.js');

exports.index = function(req, res) {
  Posts.find({}).where('status', 1).sort('created', -1).exec(function(err, posts) {
    Posts.find({}).where('status', 1).where('featured', 1).sort('created', -1).exec(function(err, featured) {
      res.render('blog/index', { title: 'Blog', posts: posts, featured: featured });
    });
  });
};

exports.post = function(req, res) {
  res.render('blog/post', { title: 'Blog Post' });
};