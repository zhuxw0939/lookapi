"use strict";

var express = require('express');
var router = express.Router();

var authModel = require('../models/auth');
var looks = require('../controllers/looks');




router.get('/index', authModel.userMustLogin, looks.index);

router.get('/api', looks.apiList);
router.get('/api/detail', looks.apiDetail);


router.post('/writeApi', looks.writeApi);





module.exports = router;



