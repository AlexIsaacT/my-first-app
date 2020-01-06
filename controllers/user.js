
var models = require('../models');
var bcrypt = require('bcrypt');
var passport = require('passport');
var myPassport = require('../passport_setup')(passport);
var flash = require('express-flash');

const generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

exports.showLogin = function(req, res, next) {
    res.render('user/login', { formData : {}, errors : req.flash('error') });
}

exports.showSignUp = function(req, res, next) {
     res.render('user/signup', { formData: {}, errors : {} });
}

exports.getUsers = function(req, res, next) {
    return models.User.findAll().then(users => {
        res.render('user', { users: users });
      })  
}

exports.signup = function(req, res, next) {
      return models.User.findOne({
          where : {
               isAdmin : true
          }
      }).then (user => {
        let newUser;
        if (user !== null) {
            newUser = models.User.build({
                email: req.body.email,
                password: generateHash(req.body.password)
            });				
        } else {
            newUser = models.User.build({
                email: req.body.email,
                password: generateHash(req.body.password),
                isAdmin: true
            });
        }
        return newUser.save().then(result => {
          passport.authenticate('local', {
              successRedirect : "/",
              failureRedirect : "/signup",
              failureFlash : true
          })(req, res, next);
      }).catch(error => {
          console.log(error);
      })
})
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