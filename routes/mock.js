"use strict";

var express = require('express');
var router = express.Router();

var authModel = require('../models/auth');
var mock = require('../controllers/mock');




router.get('/list', authModel.userMustLogin, mock.list);





router.post('/url', mock.url);
router.get('/url', mock.url);



module.exports = router;



