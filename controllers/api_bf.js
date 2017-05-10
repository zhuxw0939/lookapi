"use strict";

var async = require('async');
var request = require('request');

var config = require('../common/config');

var authModel = require('../models/auth');
var userModel = require('../models/user');
var projectModel = require('../models/project');
var apiModel = require('../models/api');
var sendModel = require('../models/send');
var message = require('../models/message');

var logger = require('../common/logger');

// 列表
exports.list = function (req, res, next) {
	if( !req.query.p_id ){
		return next("项目id不能为空");
	}
	if( !req.query.v_id ){
		projectModel.getProjectById(req.query.p_id, function(err, data){
			if(err){
				return next(err);
			}
			if(data){
				return res.redirect(req.baseUrl+req.path+"?p_id="+req.query.p_id+"&v_id="+data.version_id)
			} else {
				return next("参数错误");
			}
		});
	} else {
		async.auto({
			data_1: function(callback) {
				// 获取项目
				projectModel.getProjectById(req.query.p_id, function(err, data){
					if(err){
						return next(err);
					}
					if(data){
						callback(null, data);
					} else {
						return next("参数错误");
					}
				});
			},
			data_2: function(callback) {
				// 获取所有版本号
				projectModel.getVersionsByPid(req.query.p_id, function(err, data){
					if(err){
						return next(err);
					}
					if(data){
						callback(null, data);
					} else {
						return next("参数错误");
					}
				});
			},
			data_3: function(callback) {
				// 获取所有一级栏目
				projectModel.getGroupByVersionId(req.query.v_id, 1, function(err, data) {
					callback(null, data);
				});
			},
			data_4: function(callback) {
				// 获取所有二级栏目
				projectModel.getGroupByVersionId(req.query.v_id, 2, function(err, data) {
					callback(null, data);
				});
			},
			data_5: function(callback) {
				// 获取api数据
				apiModel.getApis(req.query.p_id, req.query.v_id, req.query.g_id, function(err, data){
					callback(null, data);
				});
			}
		}, function(err, results) {
			res.render('api/list', {
				pageCurrent: 'project',
				query: req.query,
				data: results.data_1,
				versionList: results.data_2,
				groupList: results.data_3,
				groupSonList: results.data_4,
				apiList: results.data_5
			});
		});
	}
};
// 详情
exports.detail = function (req, res, next) {
	res.locals.options = config.options;

	async.auto({
		data_1: function(callback) {
			// 获取api
			apiModel.getApiById(req.params.id, function(err, data){
				if(err){
					return next(err);
				} else {
					if(data){
						callback(null, data);
					} else {
						return next("找不到这个api");
					}
				}
			});
		},
		data_2: ["data_1", function(results, callback) {
			// 获取所有一级栏目
			projectModel.getGroupByVersionId(results.data_1.version_id, 1, function(err, data) {
				callback(null, data);
			});
		}],
		data_3: ["data_1", function(results, callback) {
			// 获取所有二级栏目
			projectModel.getGroupByVersionId(results.data_1.version_id, 2, function(err, data) {
				callback(null, data);
			});
		}]
	}, function(err, results){
		res.render('api/detail', {
			pageCurrent: 'project',
			query: {
				p_id: results.data_1.project_id,
				v_id: results.data_1.version_id,
				g_id: results.data_1.group_id
			},
			groupList: results.data_2,
			groupSonList: results.data_3,
			data: results.data_1,
			parameter: results.data_1.parameters
		});
	});
};




// 创建api
exports.create = function (req, res, next) {

	if( !req.query.p_id || !req.query.v_id ){
		// return next("参数错误");
		logger.debug("p_id或v_id为空");
		// 如果还没有项目那就不能创建，要先创建一个项目
	}
	async.auto({
		data_1: function(callback){
			// 获取所有一级栏目
			projectModel.getGroupByVersionId(req.query.v_id, 1, function(err, data){
				callback(null, data);
			});
		},
		data_2: function(callback) {
			if(req.query.g_id){
				// 如果传了栏目id,返回栏目信息
				projectModel.getGroupById(req.query.g_id, function(err, data){
					callback(null, data);
				});
			} else {
				callback(null);
			}
		},
		data_3: ['data_2', function(results, callback){
			// 如果传的栏目id是二级栏目,则返回子栏目信息
			if(results.data_2 && results.data_2.father_id && results.data_2.father_id!=0){
				projectModel.getGroupByFatherId(results.data_2.father_id, function(err, data){
					callback(null, data);
				});
			} else {
				callback();
			}
		}],
		data_4: function(callback) {
			// 获取我的所有项目
			projectModel.getProjectsByUserId(req.session.user.id, function(err, data){
				if(data.length>0){
					callback(null, data);
				} else {
					// 如果还没有项目那就不能创建Api，要先创建一个项目
					return message.error(res, "请先创建一个项目吧", "/project/create", "马上创建");
				}
			});
		},
		data_5: ["data_4", function(results, callback) {
			// 获取项目的版本号
			if(req.query.v_id){
				projectModel.getVersionsByPid(req.query.p_id, function(err, data){
					callback(null, data);
				});
			} else {
				projectModel.getVersionsByPid(results.data_4[0].id, function(err, data){
					callback(null, data);
				});
			}
		}]
	}, function(err, results){
		res.render('api/create', {
			query: req.query,
			myProject: results.data_4,
			myVersion: results.data_5,
			group: {
				baseGroup: results.data_1,
				myGroup: results.data_2,
				sonGroup: results.data_3
			}
		});
	});
};
// 创建api-提交
exports.createPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	logger.info(req.body);

	logger.info("-=-=-==============================");

	// 字段校验
	if(!req.body.url || !req.body.chose_v_id || !req.body.name){
		res.end(JSON.stringify({
			status: 1,
			message: "字段不能为空"
		}));
		return false;
	}

	// 判断url是否重复
	apiModel.getApisByUrl(req.body.chose_v_id, req.body.url, function(error, data){
		if(data.length>0){
			res.end(JSON.stringify({
				status: 3,
				message: "这个url和版本项目中的其它url重复了！",
				data: data
			}));
		} else {

			// 生成参数数组
			var parametersArray = "";
			if(req.body.parameter_name){
				parametersArray = [];
				// 只有一个参数
				if( typeof(req.body.parameter_name) == "string"){
					parametersArray.push({
						name: req.body.parameter_name,
						type: req.body.parameter_type,
						ismust: req.body.parameter_ismust,
						info: req.body.parameter_info,
						default: req.body.parameter_defaultvalue
					});
				} else {
					for(var i=0;i<req.body.parameter_name.length;i++){
						parametersArray.push({
							name: req.body.parameter_name[i],
							type: req.body.parameter_type[i],
							ismust: req.body.parameter_ismust[i],
							info: req.body.parameter_info[i],
							default: req.body.parameter_defaultvalue[i]
						});
					}
				}
			}
			logger.info(parametersArray);

			apiModel.createApi({
				name			: req.body.name,
				url				: req.body.url,
				parameters		: parametersArray,
				group_id		: req.body.group_sonid ? req.body.group_sonid : req.body.group_id,
				description		: req.body.description,
				request_type	: req.body.request_type,
				back_data		: req.body.back_data,
				back_description: req.body.back_description,
				writes			: req.body.writes,
				mock_template	: req.body.mock_template,
				project_id		: req.body.chose_p_id,
				version_id		: req.body.chose_v_id,
				create_id		: req.body.user_id,
				create_name		: req.body.user_name,
				update_id		: req.body.user_id,
				update_name		: req.body.user_name
			}, function(err, data) {
				logger.info("-----------------------------create------------------------------------");
				logger.info(err);
				logger.info(data);
				res.end(JSON.stringify({
					status: 0,
					message: "创建api成功",
					data: req.body
				}));
			});

		}
	});
};

// 编辑api
exports.update = function (req, res, next) {
	if(!req.query.id){
		return next("参数错误");
	}

	async.auto({
		data_1: ['data_4', function(results, callback){
			// 获取所有一级栏目
			projectModel.getGroupByVersionId(results.data_4.version_id, 1, function(err, data){
				callback(null, data);
			});
		}],
		data_2: ['data_4', function(results, callback) {
			if(results.data_4.group_id){
				// 如果该api有栏目id,返回栏目信息
				projectModel.getGroupById(results.data_4.group_id, function(err, data){
					callback(null, data);
				});
			} else {
				callback(null);
			}
		}],
		data_3: ['data_2', function(results, callback){
			// 如果传的栏目id是二级栏目,则返回子栏目信息
			if(results.data_2 && results.data_2.father_id && results.data_2.father_id!=0){
				projectModel.getGroupByFatherId(results.data_2.father_id, function(err, data){
					callback(null, data);
				});
			} else {
				callback();
			}
		}],
		data_4: function(callback) {
			apiModel.getApiById(req.query.id, function(err, data){
				if(err){
					return next(err);
				}
				if (data){
					callback(null, data);
				} else {
					return next("没有这个api");
				}
			});
		},
		data_5: ['data_4', function(results, callback){
			projectModel.getVersionsByPid(results.data_4.project_id, function(err, data){
				callback(null, data);
			});
		}],
		data_6: function(callback) {
			// 获取我的所有项目
			projectModel.getProjectsByUserId(req.session.user.id, function(err, data){
				callback(null, data);
			});
		},
	}, function(err, results){
		logger.info(results)
		logger.info("==========================+++++++++++==")
		logger.info(results.data_4.parameters)
		logger.info(typeof(results.data_4.parameters))
		res.render('api/update', {
			query: req.query,
			group: {
				baseGroup: results.data_1,
				myGroup: results.data_2,
				sonGroup: results.data_3
			},
			data: results.data_4,
			myVersion: results.data_5,
			myProject: results.data_6,
			parameterList: results.data_4.parameters
		});
	});
};
// 编辑api-提交
exports.updatePost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	// 字段校验
	if(!req.body.url || !req.body.v_id || !req.body.name || !req.body.id){
		res.end(JSON.stringify({
			status: 1,
			message: "字段不能为空"
		}));
		return false;
	}

	// 判断url是否重复
	apiModel.getApisByUrl(req.body.v_id, req.body.url, function(error, data) {

		if ( data.length>=1 && data[0].id==req.body.v_id ) {
			res.end(JSON.stringify({
				status: 3,
				message: "这个url和版本项目中的其它url重复了！",
				data: data
			}));
		} else {
			var parametersArray = "";
			if (req.body.parameter_name) {
				parametersArray = [];
				// 只有一个参数
				if (typeof(req.body.parameter_name) == "string") {
					parametersArray.push({
						name: req.body.parameter_name,
						type: req.body.parameter_type,
						ismust: req.body.parameter_ismust,
						info: req.body.parameter_info,
						default: req.body.parameter_defaultvalue
					});
				} else {
					for (var i = 0; i < req.body.parameter_name.length; i++) {
						parametersArray.push({
							name: req.body.parameter_name[i],
							type: req.body.parameter_type[i],
							ismust: req.body.parameter_ismust[i],
							info: req.body.parameter_info[i],
							default: req.body.parameter_defaultvalue[i]
						});
					}
				}
			}
			logger.info(parametersArray);
			apiModel.updateApi(req.body.id, {
				name: req.body.name,
				url: req.body.url,
				parameters: parametersArray,
				group_id: req.body.group_sonid ? req.body.group_sonid : req.body.group_id,
				description: req.body.description,
				request_type: req.body.request_type,
				back_data: req.body.back_data,
				back_description: req.body.back_description,
				writes: req.body.writes,
				mock_template : req.body.mock_template,
				update_id: req.body.user_id,
				update_name: req.body.user_name,
				update_time: new Date()
			}, function (err, data) {
				logger.info(err);
				logger.info(data);
				if (err) {
					res.end(JSON.stringify({
						status: -1,
						message: "保存失败"
					}));
				} else {
					res.end(JSON.stringify({
						status: 0,
						message: "保存成功"
					}));
				}
			});
		}
	});
};


// 删除api-提交
exports.removeApiPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	if(!req.body.id){
		res.end(JSON.stringify({
			status: -1,
			message: "id不能为空"
		}));
		return false;
	}
	apiModel.removeApiById(req.body.id, function(err, data){
		res.end(JSON.stringify({
			status: 0,
			message: "删除成功"
		}));
	});
};



// 接口测试
exports.test = function (req, res, next) {
	async.auto({
		data_1: function(callback) {
			if(req.session.user){
				userModel.getEnvByUserId(req.session.user.id, function(err, data){
					callback(null, data);
				});
			} else {
				callback(null, "");
			}
		},
		data_2: function(callback) {
			if(req.query.id){
				apiModel.getApiById(req.query.id, function(err, data){
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
		// 没有传id
		if(results.data_2==""){
			res.render('api/test', {
				query: req.query,
				dataEnv: results.data_1
			});
		// 传了id
		} else {
			// 获取参数的json text格式
			var parameters = results.data_2.parameters;
			// var backParameters = {};
			// for(var i=0;i<parameters.length; i++ ){
			// 	backParameters[parameters[i].name] = parameters[i].default;
			// }
			res.render('api/test', {
				query: req.query,
				dataEnv: results.data_1,
				// parameterJson: JSON.stringify(backParameters),
				data: results.data_2,
				parameterList: parameters
			});
		}
	});
};

// 发送测试请求
exports.testSend = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	logger.info("coming coming");

	if(!req.body.url){
		res.end(JSON.stringify({
			status: 1,
			message: "请求url不能为空"
		}));
		return false;
	}
	// post请求
	if(req.body.request_type==1){
		var options = {};

		if(req.body.url){
			options.url = req.body.url
		}
		if(req.body.env_id){
			options.env = {
				id: req.body.env_id,
				host: req.body.env_host,
				session_id: req.body.env_session_id
			}
		}
		if(req.body.data){
			options.data = JSON.parse(req.body.data)
		}

		sendModel.POST(options, function(data){
			res.end(data);
		});
	} else if(req.body.request_type==2) {
		sendModel.GET({
			url: req.body.url,
			env: {
				id: req.body.env_id,
				host: req.body.env_host,
				session_id: req.body.env_session_id
			},
			data: JSON.parse(req.body.data)
		}, function(data){
			res.end(data);
		});
	} else if(req.body.request_type==0){
		res.end(JSON.stringify({
			status: -2,
			message: "必须选择一种请求方式！"
		}));
	} else {
		res.end(JSON.stringify({
			status: -2,
			message: "抱歉，暂不支持这种请求方式！"
		}));
	}
};


// 发送测试请求
exports.importApi = function (req, res, next) {

	var _res = res;
	request.get({
		url: "http://192.168.2.82:8012/v2/api-docs",
		qs: {}
	}, function (error, response, body) {

		// logger.info(error);
		// logger.info(response);
		// logger.info(body);

		var data = JSON.parse(body);
		var tags = data.tags;
		var paths = data.paths;

		// logger.info(typeof(paths));
		var backData = [];
		for (var index in paths){
			// logger.info(index);
			// logger.info(paths[index]);
			if(paths[index].get!=undefined){
				backData.push({
					url: index,
					name: paths[index].get.tags[0],
					summary: paths[index].get.summary,
					description: paths[index].get.description
				});
			} else if(paths[index].post!=undefined){
				backData.push({
					url: index,
					name: paths[index].post.tags[0],
					summary: paths[index].post.summary,
					description: paths[index].post.description
				});
			}
		}

		logger.info(backData[0]);
		// for(var i=0;i<backData.length;i++){
		for(var i=0;i<3;i++){
			var url = backData[i].url;
			apiModel.createApi({
				name: backData[i].name,
				url: backData[i].url,
				description: backData[i].description,
				project_id		: "Skx0xRrOKl",
				version_id		: "SJbCxAS_Yg",
				update_time: new Date()
			}, function(err, data) {
				// _res.write("<br>保存失败! "+i+" "+url);
				// logger.info(_res);

				if (err) {
					logger.info("保存失败! "+i+" "+url);
				} else {
					logger.info("保存成功! "+i+" "+url);
				}
			});
		}
		//
		// res.send({
		// 	status: -1,
		// 	message: "抱歉，暂不支持这种请求方式！",
		// 	data: backData
		// });


		// var backData = [];
		// for(var i=0;i<tags.length;i++){
		// 	var name1 = tags[i].name;
		// 	logger.info(name1+" coming ++++++ "+i);
		// 	logger.info(paths);
		// 	var pathArray = [];
		// 	for(var j=0;j<paths.length;j++){
		// 		logger.info(paths[j]);
		// 		logger.info(paths[j].get);
		// 		logger.info(paths[j].get.tags[0]);
		// 		if(name1==paths[j].get.tags[0]){
		// 			pathArray.push(paths[j].get);
		// 		}
		// 	}
		// 	logger.info(pathArray);
		// 	backData.push({
		// 		name: name1,
		// 		description: tags[i].description,
		// 		apis: pathArray
		// 	});
		// }





		/*var backData = [];
		for(var i=0;i<tags.length;i++){
			var name1 = tags[i].name;
			logger.info(name1+" coming ++++++ "+i);
			logger.info(paths);
			var pathArray = [];
			for(var j=0;j<paths.length;j++){
				logger.info(paths[j]);
				logger.info(paths[j].get);
				logger.info(paths[j].get.tags[0]);
				if(name1==paths[j].get.tags[0]){
					pathArray.push(paths[j].get);
				}
			}
			logger.info(pathArray);
			backData.push({
				name: name1,
				description: tags[i].description,
				apis: pathArray
			});
		}

		res.send({
			status: -1,
			message: "抱歉，暂不支持这种请求方式！",
			data: paths
		});*/
	});



};


