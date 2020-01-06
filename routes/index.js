var express = require('express');
var router = express.Router();
var landing = require("../controllers/landing.js");
var user = require("../controllers/user.js");
var {isLoggedIn, hasAuth} = require("../middleware/hasAuth.js");

/* GET home page. */

router.get('/login', user.showLogin);
router.get('/signup', user.showSignUp);
router.post('/signup', user.signup);
router.post('/login', user.login);
router.post('/logout', user.logout);
router.get('/logout', user.logout);
router.get('/users', hasAuth, user.getUsers);

router.get('/', isLoggedIn, landing.getLanding);
router.post('/', isLoggedIn, landing.submitLead);
router.get('/leads', isLoggedIn, landing.showLeads);
router.get('/leads/:lead_id', hasAuth, landing.showLead);
router.get('/leads/:lead_id/edit',hasAuth, landing.showEditLead);
router.post('/leads/:lead_id/edit', hasAuth, landing.editLead);
router.post('/leads/:lead_id/delete', hasAuth, landing.deleteLead);
router.post('/leads/:lead_id/delete-json', hasAuth, landing.deleteLeadJson);

module.exports = router;
