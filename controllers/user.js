
exports.showLogin = function(req, res, next) {
    res.render('user/login', { formData : {}, errors : {} });
}

exports.showSignUp = function(req, res, next) {
     res.render('user/signup', { formData: {}, errors : {} });
}