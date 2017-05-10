"use strict";

var express = require('express'),
	router = express.Router(),
	crypto = require('crypto'),
	moment = require('moment'),
	async = require('async'),
	validator = require('validator'),
	init = require('../models/laji/init'),
	mongoDB = require('../common/mongoDB'),
	mydebug = require("debug")("mydebug:project");


// 首页
router.get('/index', function(req, res, next) {
	mongoDB.project.find({ user_id: req.session.user_id }, { id:1, name:1, version:1, column:1, type:1, create_time:1 }, {sort:{create_time:-1}, limit: 50}, function(error, data){
		mydebug(data);
		res.render('project/index', {
			page: 'project',
			user: checkLogin(req, res, next),
			data: data
		});
	});
});



// 创建项目
router.get('/create', function(req, res, next) {
	res.render('project/create', {
		page: 'project',
		user: checkLogin(req, res, next)
	});
});
router.post('/createPost', function(req, res, next) {
	// 创建项目
	mongoDB.project.create({
		name			: req.body.name,
		column			: req.body.column,
		version			: req.body.version,
		user_id			: req.session.user_id,
		password		: req.body.password
	}, function(error, data) {
		mydebug(data);

		mongoDB.projectVersion.create({
			name		: req.body.version,
			project_id	: data.id
		}, function(error2, data2) {
			if(error2){
				res.end(JSON.stringify({
					status: -1,
					message: "保存失败"
				}));
				next(error);
			} else {
				// 返回成功状态
				init.showMessage(res, '创建项目成功！', '返回项目列表', '/project/index', 'ok');
			}
		});
	});
});



// 项目设置
router.get('/update/', function(req, res, next) {
	mydebug("---------------------------update------------------");
	mongoDB.project.findOne({ id: req.query.p_id }, { id:1, name:1, version:1, column:1, password:1, type:1, create_time:1 }, function(error, data){
		mydebug(data);
		res.render('project/update', {
			page: 'project',
			query: req.query,
			user: checkLogin(req, res, next),
			data: data
		});
	});
});
// 编辑项目
router.post('/updatePost', function(req, res, next) {
	mongoDB.project.update({
		id: req.body.p_id
	}, {
		$set : {
			name		: req.body.name,
			column		: req.body.column,
			password	: req.body.password
		}
	}, function(error, data) {
		mydebug(data);

		if(error){
			res.end(JSON.stringify({
				status: -1,
				message: "保存失败"
			}));
			next(error);
		} else {
			// 返回成功状态
			init.showMessage(res, '编辑项目成功！', '返回项目列表', '/project/index', 'ok');
		}
	});
});





// 版本管理
router.get('/version/', function(req, res, next) {
	mydebug("---------------------------version------------------");
	mydebug(req.query.p_id);
	async.parallel({
		data_1: function(callback) {
			mongoDB.project.findOne({ id: req.query.p_id }, { id:1, name:1, version:1 }, function(error, data){
				callback(null, data);
			});
		},
		data_2: function(callback) {
			mongoDB.projectVersion.find({ project_id: req.query.p_id }, function(error, data){
				callback(null, data);
			});
		}
	}, function (err, result) {
		mydebug(result);
		res.render('project/version', {
			page: 'project',
			query: req.query,
			user: checkLogin(req, res, next),
			data: result.data_1,
			versions: result.data_2
		});
	});
});
// 创建新版本号
router.post('/versionAddPost', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	mongoDB.project.findOne({ name: req.body.newversion }, function(error, data){
		mydebug(data);
		if(data){
			res.end(JSON.stringify({
				status: -1,
				message: "已经存在该版本号了!"
			}));
			return false;
		} else {
			mongoDB.projectVersion.create({
				name		: req.body.newversion,
				project_id	: req.body.p_id
			}, function(error, data) {
				mydebug(data);
				if(error){
					res.end(JSON.stringify({
						status: -1,
						message: "保存失败"
					}));
					next(error);
				} else {
					res.end(JSON.stringify({
						status: 0,
						message: "创建新版本成功"
					}));
				}
			});
		}
	});
});
// 设置某版本号为默认版本
router.post('/versionSetDefaultPost', function(req, res, next) {
	// mydebug(req.body.id);
	// mydebug(req.body.version);

	mydebug("-----------------------a-------------------");
	mydebug(req.body.p_id);
	mydebug(req.body.version);

	mongoDB.project.update({
		id: req.body.p_id
	}, {
		$set : {
			version	: req.body.version
		}
	}, function(error, data) {
		mydebug(data);
		if(error){
			res.end(JSON.stringify({
				status: -1,
				message: "保存失败"
			}));
			next(error);
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "设置某版本号为默认版本成功"
			}));
		}
	});
});
// 删除某版本号
router.post('/versionDelPost', function(req, res, next) {
	mongoDB.projectVersion.remove({
		id: req.body.id
	}, function(error, data){
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



// 添加栏目
router.post('/groupAddPost', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	mongoDB.projectGroup.create({
		name		: req.body.group_name,
		project_id	: req.body.p_id,
		level		: req.body.father_id==0?1:2,
		father_id	: req.body.father_id,
		version_id	: req.body.version_id
	}, function(error, data) {
		mydebug(data);
		if(error){
			res.end(JSON.stringify({
				status: -1,
				message: "保存失败"
			}));
			next(error);
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "添加栏目成功"
			}));
		}
	});
	return false;
});
// 编辑栏目
router.post('/groupEditPost', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	mongoDB.projectGroup.update({
		id: req.body.group_id
	}, {
		$set : {
			name		: req.body.group_name,
			sort		: req.body.group_sort
		}
	}, function(error, data) {
		mydebug(data);
		if(error){
			res.end(JSON.stringify({
				status: -1,
				message: "保存失败"
			}));
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "修改成功"
			}));
		}
	});
});
// 删除栏目
router.post('/delGroupPost', function(req, res, next) {
	mongoDB.projectGroup.remove({
		id: req.body.id
	}, function(error, data){
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

// 删除项目
router.post('/delProject', function(req, res, next) {
	mydebug(req.body.id);
	// 硬删除
	mongoDB.project.remove({ id: req.body.id }, function(error, data){
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

	return false;
});










// 检查用户是否已经登录
function checkLogin(req, res, next){
	// mydebug(req.cookies);
	// mydebug(req.session);
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


