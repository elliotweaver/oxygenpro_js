
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
everyauth.debug = false;
everyauth.password
  .getLoginPath('/login')
  .postLoginPath('/login')
  .loginView('login')
  .loginLocals({ title: 'Login'})
  .authenticate( function (login, password) {
    if (login == 'admin' && password == '0xygenPro') {
      var user = {};
      return user;
    }
    else {
      return ['Login Failed'];
    }
  })
  .loginSuccessRedirect('/admin')
  .getRegisterPath('/register')
  .postRegisterPath('/register')
  .registerView('register')
  .registerLocals({ title: ''})
  .extractExtraRegistrationParams( function (req) {
    return user.fields(req);
  })
  .validateRegistration( function (attr) {
    return user.validate(attr);
  })
  .registerUser( function (attr) {
    var promise = this.Promise();
    return promise;
  })
  .registerSuccessRedirect('/register');
exports.everyauth = everyauth;
