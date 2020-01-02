var express = require('express');
var router = express.Router();
var landing = require("../controllers/landing.js");
var user = require("../controllers/user.js");
/* GET home page. */
router.get('/login', user.showLogin);
router.get('/signup', user.showSignUp);
router.post('/signup', user.signup);
router.post('/login', user.login);

router.get('/', landing.getLanding);
router.post('/', landing.submitLead);
router.get('/leads', landing.showLeads);
router.get('/leads/:lead_id', landing.showLead);
router.get('/leads/:lead_id/edit', landing.showEditLead);
router.post('/leads/:lead_id/edit', landing.editLead);
router.post('/leads/:lead_id/delete', landing.deleteLead);
router.post('/leads/:lead_id/delete-json', landing.deleteLeadJson);

module.exports = router;
