"use strict";

var express = require('express'),
	router = express.Router(),
	crypto = require('crypto'),
	moment = require('moment'),
	async = require('async'),
	validator = require('validator'),
	init = require('../../models/laji/init'),
	mongoDB = require('../../common/mongoDB'),
	mydebug = require("debug")("mydebug:api");

router.get('/', function(req, res, next) {
	mydebug(req.query);
	res.render('apitest/index', {
		page: 'project',
		user: checkLogin(req, res, next)
	});
});



// 检查用户是否已经登录
function checkLogin(req, res, next){
	// mydebug(req.cookies);
	// mydebug(req.session);
	var user = 0;
	if(req.session.user){
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
