
var models = require('../models');
var bcrypt = require('bcrypt');
var passport = require('passport');
var myPassport = require('../passport_setup')(passport);
var flash = require('connect-flash');

const generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

exports.showLogin = function(req, res, next) {
    res.render('user/login', { formData : {}, errors : {} });
}

exports.showSignUp = function(req, res, next) {
     res.render('user/signup', { formData: {}, errors : {} });
}

exports.signup = function(req, res, next) {
      const newUser = models.User.build({
          email : req.body.email,
          password : generateHash(req.body.password)
      });
      return newUser.save().then(result => {
          passport.authenticate('local', {
              successRedirect : "/",
              failureRedirect : "/signup",
              failureFlash : true
          })(req, res, next);
      });
}

exports.login = function(req, res, next) {
    passport.authenticate('local', {
        successRedirect : "/",
        failureRedirect : "/login",
        failureFlash : true
    })(req, res, next);
}

exports.logout = function(req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/login');
}