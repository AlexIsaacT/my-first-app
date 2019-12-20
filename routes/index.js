var express = require('express');
var router = express.Router();
var landing = require("../controllers/landing.js")

/* GET home page. */
router.get('/', landing.getLanding);
router.post('/', landing.submitLead);
router.get('/leads', landing.showLeads);

module.exports = router;
