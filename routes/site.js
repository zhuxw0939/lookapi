"use strict";

var express = require('express');
var router = express.Router();

var authModel = require('../models/auth');
var site = require('../controllers/site');




// router.get('/', authModel.userRequired, site.index);
router.get('/', site.index);




router.get('/json/abc/', site.json_abc);



module.exports = router;



