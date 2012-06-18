exports.users = require('./users.js');
exports.cases = require('./cases.js');
exports.posts = require('./posts.js');
exports.projects = require('./projects.js');
exports.index = function(req, res) {
	res.redirect('/admin/users');
};