
var Posts = require('../../models/post.js')
  , url = require('url')
  , lib = {
      common      : require('../../lib/common.js')
  };

exports.index = function(req, res) {
  var query = Posts.find({}).where('status', 1).sort('created', -1);
  var qs = url.parse(req.url, true).query;
  if (qs['tag']) {
    query.where('tags').in([ qs['tag'] ])
  }
  query.exec(function(err, posts) {
    if (lib.common.e(posts)) {
      posts = 'none';
    }
    Posts.find({}).where('status', 1).where('featured', 1).sort('created', -1).exec(function(err, featured) {
      res.render('blog/index', { title: 'Blog', posts: posts, featured: featured });
    });
  });
};

exports.post = function(req, res) {
  res.render('blog/post', { title: 'Blog Post' });
};