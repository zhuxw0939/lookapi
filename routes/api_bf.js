"use strict";

var express = require('express'),
	router = express.Router(),
	crypto = require('crypto'),
	moment = require('moment'),
	async = require('async'),
	validator = require('validator'),
	init = require('../models/laji/init'),
	mongoDB = require('../common/mongoDB'),
	send = require('../models/send'),
	mydebug = require("debug")("mydebug:api");

/* list */
router.get('/list/', function(req, res, next) {
	mydebug(req.query);
	mydebug(req.query.p_id);
	async.auto({
		data_1: function(callback) {
			mongoDB.project.findOne({ id: req.query.p_id }, { _id:0 }, function(error, data){
				callback(null, data);
			});
		},
		data_2: ['data_1', function(results, callback) {
			mongoDB.projectVersion.findOne({ name: results.data_1.version }, function(error, data){
				callback(null, data);
			});
		}],
		data_3: ['data_1', 'data_2', function(results, callback) {
			mongoDB.projectGroup.find({ version_id: results.data_2.id, level: 1 },null ,{sort:{sort:-1, create_time:1}}, function(error, data){
				callback(null, data);
			});
		}],
		data_4: ['data_1', 'data_2', function(results, callback) {
			mongoDB.projectGroup.find({ version_id: results.data_2.id, level: 2 },null ,{sort:{sort:-1, create_time:1}}, function(error, data){
				callback(null, data);
			});
		}],
		data_5: function(callback) {
			var findOptions = {
				project_id: req.query.p_id,
				project_version: req.query.version
			};
			if(req.query.group){
				findOptions.group_id = req.query.group;
			}
			mongoDB.api.find( findOptions , { id:1, name:1, url:1, group_id:1, request_type:1, create_time:1, type:1 }, function(error, data){
				mydebug(data);
				callback(null, data);
			});
		}
	}, function(err, results) {
		mydebug(results);
		res.render('api/list', {
			page: 'project',
			query: req.query,
			user: checkLogin(req, res, next),
			data: results.data_1,
			dataVersion: results.data_2,
			dataGroup: results.data_3,
			dataGroupSon: results.data_4,
			dataList: results.data_5
		});
	});
});


// 详情
router.get('/detail/:id', function(req, res, next) {
	mydebug(req.params.id);
	mongoDB.api.findOne({ id : req.params.id }, function(error, data){
		mydebug(data);
		if(error){
			next(error);
		} else {
			if(data){
				res.render('api/detail', {
					page: 'project',
					user: checkLogin(req, res, next),
					data: data,
					parameter: JSON.parse(data.parameters)
				});
			} else {
				next("404");
			}
		}
	});

});



// 创建api
router.get('/create', function(req, res, next) {
	mydebug("-------------------create-----------------------");
	mydebug(req.query.group);
	mydebug(req.query.p_id);
	async.auto({
		group: function(callback) {
			mongoDB.projectGroup.find({project_id:req.query.p_id, level:1}, {_id:0,type:0,create_time:0,__v:0,sort:0}, {sort:{sort:-1, create_time:1}}, function(error, data){
				callback(null, data);
			});
		},
		groupSon: function(callback) {
			mongoDB.projectGroup.find({project_id:req.query.p_id, level:2}, {_id:0,type:0,create_time:0,__v:0,sort:0}, {sort:{sort:-1, create_time:1}}, function(error, data){
				callback(null, data);
			});
		}
	}, function(err, results) {
		mydebug(results);
		res.render('api/create', {
			page: 'project',
			query: req.query,
			user: checkLogin(req, res, next),
			data: results
		});
	});
});
router.post('/createPost', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	// [{name:x, type:x, ismust:x, info:x, default:x,}]
	var parametersArray = [];
	for(var i=0;i<req.body.parameter_name.length;i++){
		parametersArray.push({
			name: req.body.parameter_name[i],
			type: req.body.parameter_type[i],
			ismust: req.body.parameter_ismust[i],
			info: req.body.parameter_info[i],
			default: req.body.parameter_defaultvalue[i]
		});
	}
	var obj = {
		name			: req.body.name,
		url				: req.body.url,
		parameters		: JSON.stringify(parametersArray),
		group_id		: req.body.group_id,
		description		: req.body.description,
		request_type	: req.body.request_type,
		back_data		: req.body.back_data,
		back_description: req.body.back_description,
		project_id		: req.body.p_id,
		project_version	: req.body.p_version,
		writes			: req.body.writes,
		user_id			: req.body.user_id
	};
	mydebug(obj);
	mongoDB.api.create(obj, function(error, data) {
		mydebug("-----------------------------create------------------------------------");
		mydebug(error);
		mydebug(data);
		res.end(JSON.stringify({
			status: 0,
			message: "创建api成功",
			data: req.body
		}));
	});
});



// 编辑api
router.get('/update', function(req, res, next) {
	mydebug("-------------------create-----------------------");
	mydebug(req.localStorage);
	async.auto({
		// group: function(callback) {
		// 	mongoDB.projectGroup.find({project_id:req.query.p_id, level:1}, {_id:0,type:0,create_time:0,__v:0,sort:0}, {sort:{sort:-1, create_time:1}}, function(error, data){
		// 		callback(null, data);
		// 	});
		// },
		// groupSon: function(callback) {
		// 	mongoDB.projectGroup.find({project_id:req.query.p_id, level:2}, {_id:0,type:0,create_time:0,__v:0,sort:0}, {sort:{sort:-1, create_time:1}}, function(error, data){
		// 		callback(null, data);
		// 	});
		// }
		data_1: function(callback) {
			mongoDB.api.findOne({ id : req.query.id }, function(error, data){
				if(error){
					next(error);
				} else {
					if(data){
						callback(null, data);
					} else {
						next("404");
					}
				}
			});
		}
	}, function(err, results) {
		mydebug(results);
		res.render('api/update', {
			page: 'project',
			query: req.query,
			user: checkLogin(req, res, next),
			data: results.data_1,
			parameters: JSON.parse(results.data_1.parameters)
		});
	});
});
router.post('/updatePost', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	// [{name:x, type:x, ismust:x, info:x, default:x,}]
	var parametersArray = [];
	for(var i=0;i<req.body.parameter_name.length;i++){
		parametersArray.push({
			name: req.body.parameter_name[i],
			type: req.body.parameter_type[i],
			ismust: req.body.parameter_ismust[i],
			info: req.body.parameter_info[i],
			default: req.body.parameter_defaultvalue[i]
		});
	}
	mongoDB.api.update({
		id: req.body.id
	}, {
		$set : {
			name			: req.body.name,
			url				: req.body.url,
			parameters		: JSON.stringify(parametersArray),
			// group_id		: req.body.group_id,
			description		: req.body.description,
			// request_type	: req.body.request_type,
			back_data		: req.body.back_data,
			back_description: req.body.back_description,
			// project_id		: req.body.p_id,
			// project_version	: req.body.p_version,
			writes			: req.body.writes,
			update_id		: req.body.user_id
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
				message: "保存成功"
			}));
		}
	});
});


/*api测试首页*/
router.get('/test', function(req, res, next) {

	async.auto({
		data_1: function(callback) {
			var user = checkLogin(req, res, next);
			mongoDB.userEnv.find({ user_id : user.id }, { _id:0, user_id:0 }, { sort:{create_time:-1} },function(error, data){
				callback(null, data);
			});
		},
		data_2: function(callback) {
			if(req.query.id){
				mongoDB.api.findOne( { id:req.query.id } , { _id:0 }, function(error, data){
					if(data){
						callback(null, data);
					} else {
						// id不正确
						res.redirect("/api/test");
					}
				});
			} else {
				callback(null, "");
			}
		}
	}, function(err, results) {
		mydebug(results);
		// 没有传id
		if(results.data_2==""){
			res.render('api/test', {
				page: 'apitest',
				query: req.query,
				user: checkLogin(req, res, next),
				dataEnv: results.data_1
			});
		} else {
			// 获取参数的json text格式
			var parameters = JSON.parse(results.data_2.parameters);
			var backParameters = {};
			for(var i=0;i<parameters.length; i++ ){
				mydebug(parameters[i].name);
				backParameters[parameters[i].name] = parameters[i].default;
			}
			mydebug(backParameters);
			res.render('api/test', {
				page: 'apitest',
				query: req.query,
				user: checkLogin(req, res, next),
				dataEnv: results.data_1,
				parametersJson: JSON.stringify(backParameters),
				data: results.data_2
			});
		}
	});

});
/*api测试首页*/
router.post('/send', function(req, res, next) {
	mydebug(req.body);
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	// post请求
	if(req.body.request_type==1){
		send.POST({
			url: req.body.url,
			env: {
				id: req.body.env_id,
				host: req.body.env_host,
				session_id: req.body.env_session_id
			},
			cookies: req.cookies,
			data: JSON.parse(req.body.data)
		}, function(data){
			res.end(data);
		});
	}
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
