"use strict";

var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var moment = require('moment');
var validator = require('validator');
var mongoDB = require('../common/mongoDB');
var mydebug = require("debug")("mydebug:user");



mydebug("-------------user--------------------------------");



// 个人中心
router.get('/center', function(req, res, next) {
	if(checkLogin(req)){
		mongoDB.user.findOne({ id: req.session.user_id }, { email:1, name:1, id:1, last_login:1 }, function(error, data){
			res.render('user/center', {
				page: 'user',
				user: checkLogin(req),
				data: data
			});
		});
	} else {
		res.redirect("/");
	}
});

router.get('/changePassword', function(req, res, next) {
	if(checkLogin(req)){
		mongoDB.user.findOne({ id: req.session.user_id }, { email:1, name:1, id:1, last_login:1 }, function(error, data){
			res.render('user/changePassword', {
				page: 'user',
				user: checkLogin(req),
				data: data
			});
		});
	} else {
		res.redirect("/");
	}
});




// 登录
router.get('/login', function(req, res, next) {
	if(checkLogin(req)){
		res.redirect("/");
		return false;
	}
	res.render('user/login', {
		page: 'login',
		user: checkLogin(req, res, next)
	});
});


// 注册
router.get('/register', function(req, res, next) {
	if(checkLogin(req)){
		res.redirect("/");
		return false;
	}
	res.render('user/register', {
		page: 'register',
		user: checkLogin(req, res, next)
	});
});


// 退出登录
router.get('/logout', function(req, res, next) {

	// 删除user的session
	delete req.session.user_id;
	delete req.session.user_type;
	delete req.session.user_name;

	// 删除user的cookie
	res.cookie('user_id', "");

	// 返回首页
	res.redirect("/");
});





// ajax注册
router.post('/api/register', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	// validator
	if(!validator.isEmail(req.body.email)){
		res.end(JSON.stringify({
			status: 1,
			message: "email格式错误"
		}));
		return false;
	}

	// 检查email是否被注册
	mongoDB.user.findOne({ email: req.body.email }, function(error, data){
		if(data){
			res.end(JSON.stringify({
				status: 1,
				message: "email已存在"
			}));
		} else {
			mongoDB.user.create({
				email		: req.body.email,
				name		: req.body.username,
				password	: md5(req.body.password)
			}, function(error, data) {
				mydebug(data);
				if(error){
					res.end(JSON.stringify({
						status: -1,
						message: "保存失败"
					}));
					next(error);
				} else {
					// 写入用户登录信息
					writeLogin(req, res, data);
					// 返回成功状态
					res.end(JSON.stringify({
						status: 0,
						message: "注册成功"
					}));
				}
			});
		}
	});
});



// ajax登录
router.post('/api/login', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	// 检查用户是否已经登录
	if (req.cookies.user_id && (req.cookies.user_id === req.session.user_id)) {
		res.end(JSON.stringify({
			status: 9,
			message: "您已经登录过了，请刷新页面重试！"
		}));
	} else {
		mongoDB.user.findOne({ email: req.body.email }, function(error, data){
			mydebug(data);
			if(error){
				res.end(JSON.stringify({
					status: -1,
					message: "登录失败"
				}));
				next(error);
			} else {
				if(data){
					if(data.password===md5(req.body.password)){
						// 写入用户登录信息
						writeLogin(req, res, data);
						// 返回成功状态
						res.end(JSON.stringify({
							status: 0,
							message: "登录成功"
						}));
					} else {
						res.end(JSON.stringify({
							status: 2,
							message: "用户名或密码错误"
						}));
					}
				} else {
					res.end(JSON.stringify({
						status: 1,
						message: "用户名不存在"
					}));
				}
			}
		});
	}
});


// ajax修改用户信息
router.post('/api/setting', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	mongoDB.user.update({
		id: req.session.user_id
	}, {
		$set : {
			name: req.body.name
		}
	}, function(error, data){
		mydebug("-----------------------------------------------------");
		mydebug(data);
		if(data.ok == 1){
			res.end(JSON.stringify({
				status: 0,
				message: "修改用户信息成功"
			}));
		}

	});
});


// ajax修改密码
router.post('/api/changePassword', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	// 检查旧密码是否输入正确
	mongoDB.user.findOne({ id: req.session.user_id }, function(error, data){
		mydebug(data);
		if(error){
			res.end(JSON.stringify({
				status: -1,
				message: "查询失败"
			}));
			next(error);
		} else {
			if(data){
				if(data.password===md5(req.body.password)){
					// 验证正确
					mongoDB.user.update({
						id: req.session.user_id
					}, {
						$set : {
							password: md5(req.body.passwordnew)
						}
					}, function(error, data){
						mydebug("-----------------------------------------------------");
						mydebug(data);
						if(data.ok == 1){
							res.end(JSON.stringify({
								status: 0,
								message: "密码修改成功"
							}));
						}
					});
				} else {
					res.end(JSON.stringify({
						status: 2,
						message: "旧密码输入错误！"
					}));
				}
			} else {
				res.end(JSON.stringify({
					status: 1,
					message: "该用户id不存在"
				}));
			}
		}
	});
});





// 环境管理
router.get('/env', function(req, res, next) {
	if(checkLogin(req)){
		var user = checkLogin(req);
		mongoDB.userEnv.find({user_id:user.id}, function(error, data){
			mydebug(data);
			if(error){
				next(error);
			} else {
				res.render('user/env', {
					page: 'user',
					user: checkLogin(req),
					data: data
				});
			}
		});
	} else {
		res.redirect("/");
	}
});
//添加环境
router.post('/envAddPost', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	mydebug(req.body);
	if(req.body.env_name==""){
		res.end(JSON.stringify({
			status: 1,
			message: "环境名称不能为空"
		}));
	} else {
		mongoDB.userEnv.create({
			name: req.body.env_name,
			user_id: req.body.user_id
		}, function(error, data){
			mydebug(error);
			mydebug(data);
			if(error){
				res.end(JSON.stringify({
					status: -1,
					message: "创建失败"
				}));
			} else {
				res.end(JSON.stringify({
					status: 0,
					message: "创建成功"
				}));
			}
		})
	}
});
//编辑环境
router.post('/envEditPost', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	mongoDB.userEnv.update({
		id : req.body.id
	}, {
		$set : {
			name: req.body.name,
			host: req.body.host,
			session_id: req.body.session_id
		}
	}, function(error, data){
		mydebug("-----------------------------------------------------");
		mydebug(data);
		if(data.ok == 1){
			res.end(JSON.stringify({
				status: 0,
				message: "修改成功"
			}));
		}
	});
});
//删除环境
router.post('/envDelPost', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	mongoDB.userEnv.remove({ id: req.body.id }, function(error, data){
		mydebug(data);
		if(error){
			res.end(JSON.stringify({
				status: 1,
				message: "删除失败"
			}));
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "删除成功"
			}));
		}
	});
});









/* 写入用户登录信息 */
function writeLogin(req, res, data){
	// 将用户的登录信息写入session
	req.session.user_id = data.id;
	req.session.user_type = data.type;
	req.session.user_name = data.name;

	// 将用户的登录id写入cookie
	res.cookie('user_id', data.id, {maxAge: 1000*60*20});
}


/* md5 */
function md5 (text) {
	return crypto.createHash('md5').update(text).digest('hex');
}


// 检查用户是否已经登录
function checkLogin(req, res, next){
	// mydebug(req.cookies);
	// mydebug(req.session);
	var user = 0;
	if(req.cookies.user_id && (req.cookies.user_id === req.session.user_id)){
		user = {
			id: req.session.user_id,
			name:  req.session.user_name,
			type:  req.session.user_type
		};
	}
	return user;
}


module.exports = router;
