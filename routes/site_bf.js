"use strict";

var express = require('express');
var router = express.Router();
var mydebug = require("debug")("mydebug:index");

var logger = require('../common/logger');
require('colors');


// 首页
router.get('/', function(req, res, next) {






	res.render('index', {
		page: 'home',
		user: checkLogin(req, res, next)
	});
});



// 检查用户是否已经登录
function checkLogin(req, res, next){
	mydebug(req.cookies);
	mydebug(req.session);
	var user = 0;
	if(req.cookies.user_id && (req.cookies.user_id === req.session.user_id)){
		user = {
			id: req.session.user_id,
			name:  req.session.user_name,
			level:  req.session.user_level
		};

		res.cookie('session_id', req.cookies.session_id, {maxAge: 1000*60*20});
		res.cookie('user_id', req.cookies.user_id, {maxAge: 1000*60*20});
	}
	return user;
}


module.exports = router;


