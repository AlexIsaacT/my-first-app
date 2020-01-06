let createError = require('http-errors');
exports.isLoggedIn = function(req, res, next) {
    if(req.user)
         next();
    else
         next(createError(401, "You must have logged in"));
};

exports.hasAuth = function(req, res, next) {
     if (req.user && req.user.isAdmin == true)
        next();
     else
        next(createError(403, "Forbidden"));
}