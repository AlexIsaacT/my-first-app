var express = require('express');
var router = express.Router();

/* GET home page. */
var index = require("../controllers/index.js")
router.get('/', index.index);

module.exports = router;
