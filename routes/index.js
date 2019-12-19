var express = require('express');
var router = express.Router();

/* GET home page. */
var landing = require("../controllers/landing.js")
router.get('/', landing.get_landing);

module.exports = router;
