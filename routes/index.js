var express = require('express');
var router = express.Router();
var landing = require("../controllers/landing.js")

/* GET home page. */
router.get('/', landing.getLanding);
router.post('/', landing.submitLead);
router.get('/leads', landing.showLeads);
router.get('/leads/:lead_id', landing.showLead);
router.get('/leads/:lead_id/edit', landing.showEditLead);
router.post('/leads/:lead_id/edit', landing.editLead);
router.post('/leads/:lead_id/delete', landing.deleteLead);
router.post('/leads/:lead_id/delete-json', landing.deleteLeadJson);

module.exports = router;
