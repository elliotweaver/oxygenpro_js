
/**
 * Module dependencies.
 */

var express     = require('express')
  , mongoose    = require('mongoose')
  , http        = require('http')
  , routes      = require('./routes')
  , common      = require('./lib/common.js')
  , everyauth   = common.everyauth;

var app = express();

mongoose.connect('mongodb://oxygen:0xygenPro@ds033607.mongolab.com:33607/oxygenpro');

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  //app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser({ keepExtensions: true }));
  app.locals.use(function(req, res) {
    res.locals.sess = req.session;
    res.locals.token = req.session._csrf;
  });
  app.use(express.static(__dirname + '/public'));
  app.use(express.methodOverride());
  app.use(express.cookieParser('zSaOy~CQ2HQ-UZY)fa|m|ywBZ%vwr7w8jS*A'));
  app.use(express.session());
  app.use(everyauth.middleware());
  app.use(express.csrf());
  app.use(app.router);
  
});

var isAdmin = function(req, res, next) {
  if (req.loggedIn === true) {
    next();
  }
  else {
    res.redirect('/login');
  }
}

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', common.flashInit, routes.index, common.flashFlush);
app.get('/work', common.flashInit, routes.work, common.flashFlush);
app.get('/clients', common.flashInit, routes.clients, common.flashFlush);
app.get('/about',common.flashInit,  routes.about, common.flashFlush);
app.post('/quote', common.flashInit, routes.quote, common.flashFlush);

/* /blog */
app.get('/blog',common.flashInit,  routes.blog.index, common.flashFlush);
app.get('/blog/:slug',common.flashInit,  routes.blog.post, common.flashFlush);

/* /login */
app.get ('/login', common.flashInit, routes.login, common.flashFlush);
app.post ('/login', common.flashInit, routes.loginPost, common.flashFlush);

/* /admin */
app.get ('/admin', common.flashInit, routes.admin.index, common.flashFlush);

/** /admin/users **/
app.get ('/admin/users', common.flashInit, isAdmin, routes.admin.users.index, common.flashFlush);
app.get ('/admin/users/add', common.flashInit, isAdmin, routes.admin.users.add, common.flashFlush);
app.post('/admin/users/add', common.flashInit, isAdmin, routes.admin.users.create, common.flashFlush);
app.get ('/admin/users/:id', common.flashInit, isAdmin, routes.admin.users.show, common.flashFlush);
app.get ('/admin/users/:id/edit', common.flashInit, isAdmin, routes.admin.users.edit, common.flashFlush);
app.put ('/admin/users/:id/edit', common.flashInit, isAdmin, routes.admin.users.update, common.flashFlush);
app.get ('/admin/users/:id/delete', common.flashInit, isAdmin, routes.admin.users.del, common.flashFlush);
app.del ('/admin/users/:id/delete', common.flashInit, isAdmin, routes.admin.users.destroy, common.flashFlush);

/** /admin/projects **/
app.get ('/admin/projects', common.flashInit, isAdmin, routes.admin.projects.index, common.flashFlush);
app.get ('/admin/projects/add', common.flashInit, isAdmin, routes.admin.projects.add, common.flashFlush);
app.post('/admin/projects/add', common.flashInit, isAdmin, routes.admin.projects.create, common.flashFlush);
app.get ('/admin/projects/:id', common.flashInit, isAdmin, routes.admin.projects.show, common.flashFlush);
app.get ('/admin/projects/:id/edit', common.flashInit, isAdmin, routes.admin.projects.edit, common.flashFlush);
app.put ('/admin/projects/:id/edit', common.flashInit, isAdmin, routes.admin.projects.update, common.flashFlush);
app.get ('/admin/projects/:id/delete', common.flashInit, isAdmin, routes.admin.projects.del, common.flashFlush);
app.del ('/admin/projects/:id/delete', common.flashInit, isAdmin, routes.admin.projects.destroy, common.flashFlush);

/** /admin/cases **/
app.get ('/admin/cases', common.flashInit, isAdmin, routes.admin.cases.index, common.flashFlush);
app.get ('/admin/cases/add', common.flashInit, isAdmin, routes.admin.cases.add, common.flashFlush);
app.post('/admin/cases/add', common.flashInit, isAdmin, routes.admin.cases.create, common.flashFlush);
app.get ('/admin/cases/:id', common.flashInit, isAdmin, routes.admin.cases.show, common.flashFlush);
app.get ('/admin/cases/:id/edit', common.flashInit, isAdmin, routes.admin.cases.edit, common.flashFlush);
app.put ('/admin/cases/:id/edit', common.flashInit, isAdmin, routes.admin.cases.update, common.flashFlush);
app.get ('/admin/cases/:id/delete', common.flashInit, isAdmin, routes.admin.cases.del, common.flashFlush);
app.del ('/admin/cases/:id/delete', common.flashInit, isAdmin, routes.admin.cases.destroy, common.flashFlush);

/** /admin/posts **/
app.get ('/admin/posts', common.flashInit, isAdmin, routes.admin.posts.index, common.flashFlush);
app.get ('/admin/posts/add', common.flashInit, isAdmin, routes.admin.posts.add, common.flashFlush);
app.post('/admin/posts/add', common.flashInit, isAdmin, routes.admin.posts.create, common.flashFlush);
app.get ('/admin/posts/:id', common.flashInit, isAdmin, routes.admin.posts.show, common.flashFlush);
app.get ('/admin/posts/:id/edit', common.flashInit, isAdmin, routes.admin.posts.edit, common.flashFlush);
app.put ('/admin/posts/:id/edit', common.flashInit, isAdmin, routes.admin.posts.update, common.flashFlush);
app.get ('/admin/posts/:id/delete', common.flashInit, isAdmin, routes.admin.posts.del, common.flashFlush);
app.del ('/admin/posts/:id/delete', common.flashInit, isAdmin, routes.admin.posts.destroy, common.flashFlush);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
