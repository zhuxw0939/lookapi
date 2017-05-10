"use strict";

var async = require('async');
var crypto = require('crypto');
var validator = require('validator');

var authModel = require('../models/auth');
var userModel = require('../models/user');
var projectModel = require('../models/project');

var logger = require('../common/logger');


// 登录页面
exports.login = function (req, res, next) {
	res.locals.pageCurrent = 'login';
	res.render('user/login', {
		query: req.query
	});
};
// 登录验证 返回json 一般用于ajax
exports.loginPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	var email	= validator.trim(req.body.email).toLowerCase(); //强制去空格并转为小写
	var pass	= validator.trim(req.body.password);

	if (!email || !pass) {
		res.end(JSON.stringify({
			status: 9,
			message: "信息不完整。"
		}));
		return false;
	}

	// 检查用户是否已经登录
	if(req.session.user){
		res.end(JSON.stringify({
			status: 9,
			message: "您已经登录过了，请刷新页面重试！"
		}));
	} else {
		userModel.getUserByEmail(email, function (err, data) {
			logger.debug(err);
			logger.debug(data);
			if (err) {
				res.end(JSON.stringify({
					status: -1,
					message: "登录失败"
				}));
				next(err);
			} else {
				if (data) {
					if (data.password === md5(pass)) {
						// 写入用户登录信息
						authModel.writeUserSession(req, res, data);
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
};


// 注册
exports.register = function (req, res, next) {
	res.locals.pageCurrent = 'register';
	res.render('user/register');
};
// 注册提交
exports.registerPost = function (req, res, next) {
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
	userModel.getUserByEmail( req.body.email, function(err, data){
		if(data){
			res.send({
				status: 1,
				message: "email已存在"
			});
		} else {
			userModel.createUser({
				email		: req.body.email,
				name		: req.body.username,
				password	: md5(req.body.password)
			}, function(err, data){
				if(err){
					res.send({
						status: -1,
						message: "保存失败"
					});
					next(err);
				} else {
					// 写入用户登录信息
					authModel.writeUserSession(req, res, data);
					// 返回成功状态
					res.send({
						status: 0,
						message: "注册成功"
					});
				}
			});
		}
	});
};




// 退出登录
exports.logout = function (req, res, next) {
	// 删除用户登录信息
	authModel.delUserSession(req, res);

	// 返回首页
	res.redirect("/");
};


// 个人中心
exports.center = function (req, res, next) {
	res.locals.pageCurrent = 'user';
	res.render('user/center');
};
// 修改个人资料
exports.updatePost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	userModel.updateUserById(req.session.user.id, {
		name: req.body.name
	}, function(error, data){
		if(data.ok == 1){
			res.end(JSON.stringify({
				status: 0,
				message: "修改用户信息成功"
			}));
			projectModel.updateProjectsUser(req.session.user.id, req.body.name, function(err, data){
				logger.info(data);
			});
		}
	});
};
// 修改密码
exports.changePassword = function (req, res, next) {
	res.locals.pageCurrent = 'user';
	res.render('user/changePassword');
};
exports.changePasswordPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	if (!req.body.password) {
		res.end(JSON.stringify({
			status: 9,
			message: "旧密码不能为空。"
		}));
		return false;
	}
	if (!req.body.passwordnew) {
		res.end(JSON.stringify({
			status: 8,
			message: "新密码不能为空。"
		}));
		return false;
	}
	if (req.body.password == req.body.passwordnew) {
		res.end(JSON.stringify({
			status: 7,
			message: "新旧密码不能相同。"
		}));
		return false;
	}

	userModel.checkUserPassword( req.session.user.id, md5(req.body.password), function(ok){
		if(ok){
			userModel.updateUserById(req.session.user.id, {
				password: md5(req.body.passwordnew)
			}, function(error, data){
				if(data.ok == 1){
					res.end(JSON.stringify({
						status: 0,
						message: "密码修改成功"
					}));
				}
			});
		} else {
			res.end(JSON.stringify({
				status: 1,
				message: "旧密码输入错误"
			}));
		}
	});
};



// 我的测试环境
exports.env = function (req, res, next) {
	res.locals.pageCurrent = 'user';
	userModel.getEnvByUserId(req.session.user.id, function(err, data){
		res.render('user/env', {
			data: data
		});
	})
};
// 添加
exports.createEnvPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	if( !validator.trim(req.body.env_name)){
		res.end(JSON.stringify({
			status: 1,
			message: "环境名称不能为空"
		}));
		return false;
	}
	userModel.createUserEnv({
		name: req.body.env_name,
		user_id: req.body.user_id
	}, function(err, data){
		if(err){
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
};
// 编辑
exports.updateEnvPost = function (req, res, next) {
	logger.info(typeof req.body.session_id);
	logger.info(req.body.session_id);
	if( !validator.trim(req.body.name)){
		res.send({
			status: 1,
			message: "名称不能为空"
		});
		return false;
	}
	userModel.updateEnvPost(req.body.id, {
		name: req.body.name,
		host: req.body.host,
		session_id: req.body.session_id
	}, function(err, data){
		logger.info(err);
		logger.info(data);
		if(err){
			res.send({
				status: -1,
				message: "修改失败"
			});
		} else {
			if(data.ok == 1){
				res.send({
					status: 0,
					message: "修改成功"
				});
			}
		}
	})
};
// 删除
exports.removeEnvPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	userModel.removeEnvPost(req.body.id, function(err, data){
		if(err){
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
	})
};


/*我的消息*/
exports.message = function (req, res, next) {
	res.locals.pageCurrent = 'user';

	userModel.getMessageByUserId(req.session.user.id, function(err, data){
		res.render('user/message', {
			data: data
		});

		// 设置未读消息为已读，后续进程执行
		var m_ids = [];
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				if(!data[i].is_read){
					m_ids.push(data[i].id);
				}
			}
		}
		logger.info("=======================================================");
		logger.info(m_ids);
		if(m_ids.length>0){
			// 设置未读消息为已读
			userModel.setMessageIsRead(m_ids, function(err, data){
				logger.info(err);
				logger.info(data);
				logger.info("========================end==========================");
			});
		}
	})
};
/*获取新消息数量*/
exports.getMyNewMessageNumber = function (req, res, next) {
	userModel.getNewMessageByUserId(req.session.user.id, function(err, data){
		if(err){
			res.end(JSON.stringify({
				status: -1,
				message: "查询失败"
			}));
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "获取成功",
				data: data.length
			}));
		}
	})
};
// removeMessage
exports.removeMessage = function (req, res, next) {
	userModel.removeMessageById(req.body.id, function(err, data){
		if(err){
			res.end(JSON.stringify({
				status: -1,
				message: "删除失败"
			}));
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "删除成功"
			}));
		}
	});
};



/* md5 */
function md5 (text) {
	return crypto.createHash('md5').update(text).digest('hex');
}