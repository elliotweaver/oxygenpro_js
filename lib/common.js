
var e = function(o) {
  for (i in o) {
    return false;
  }
  return true;
}
exports.e = e;

var flashInit = function(req, res, next) {
  if ('undefined' === typeof req.session.show) {
    req.session.show = 1;
  }
  if ('undefined' === typeof req.session.flash) {
    req.session.flash = {};
  }
  if ('undefined' === typeof req.session.flash.error) {
    req.session.flash.error = [];
  }
  if ('undefined' === typeof req.session.flash.info) {
    req.session.flash.info = [];
  }
  if ('undefined' === typeof req.session.flash.warning) {
    req.session.flash.warning = [];
  }
  if ('undefined' === typeof req.session.flash.success) {
    req.session.flash.success = [];
  }
  if ('undefined' === typeof req.session.form) {
    req.session.form = {};
  }
  if ('undefined' === typeof req.session.form.errors) {
    req.session.form.errors = {};
  }
  if ('undefined' === typeof req.session.form.values) {
    req.session.form.values = {};
  }
  next();
}
exports.flashInit = flashInit;

var flashFlush = function(req, res) {
  req.session.flash = {};
  req.session.flash.error = [];
  req.session.flash.info = [];
  req.session.flash.warning = [];
  req.session.flash.success = [];
  req.session.form = {};
  req.session.form.errors = {};
  req.session.form.values = {};
}
exports.flashFlush = flashFlush;

var everyauth = require('everyauth');
everyauth.debug = true;
everyauth.password
  .getLoginPath('/user/login')
  .postLoginPath('/user/login')
  .loginView('user/login')
  .loginLocals({ title: 'Login'})
  .authenticate( function (login, password) {
    // Either, we return a user or an array of errors if doing sync auth.
    // Or, we return a Promise that can fulfill to promise.fulfill(user) or promise.fulfill(errors)
    // `errors` is an array of error message strings
    //
    // e.g., 
    // Example 1 - Sync Example
    // if (usersByLogin[login] && usersByLogin[login].password === password) {
    //   return usersByLogin[login];
    // } else {
    //   return ['Login failed'];
    // }
    //
    // Example 2 - Async Example
    // var promise = this.Promise()
    // YourUserModel.find({ login: login}, function (err, user) {
    //   if (err) return promise.fulfill([err]);
    //   promise.fulfill(user);
    // }
    // return promise;
  })
  .loginSuccessRedirect('/user')

    // If login fails, we render the errors via the login view template,
    // so just make sure your loginView() template incorporates an `errors` local.
    // See './example/views/login.jade'

  .getRegisterPath('/user/register')
  .postRegisterPath('/user/register')
  .registerView('user/register')
  .registerLocals({ title: 'Signup Today!'})
  .extractExtraRegistrationParams( function (req) {
    return user.fields(req);
  })
  .validateRegistration( function (attr) {
    return user.validate(attr);
  })
  .registerUser( function (attr) {
    var promise = this.Promise();
    user.save(attr, promise);
    return promise;
    
  })
  .registerSuccessRedirect('/user');
exports.everyauth = everyauth;
