"use strict";

var async = require('async');
var request = require('request');
var eventproxy = require('eventproxy');

var config = require('../common/config');

var servers = require('../common/servers');
var servers2 = require('../common/servers2');

var authModel = require('../models/auth');
var userModel = require('../models/user');
var projectModel = require('../models/project');
var apiModel = require('../models/api');
var looksModel = require('../models/looks');
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
			son_ids: function(callback) {
				// 获取子栏目
				projectModel.getGroupByFatherId(req.query.g_id, function(err, data){
					callback(null, data);
				});
			},
			data_5: ["son_ids", function(results, callback) {
				if(req.query.g_id!=undefined && req.query.g_id!=""){
					var newArray = [req.query.g_id];
					for(var i=0;i<results.son_ids.length;i++){
						newArray.push(results.son_ids[i].id);
					}
					logger.info(" ****************** son_ids ***************");
					if(req.query.sort=="update"){
						logger.info(" ****************** son_ids 1 ***************");
						apiModel.getApisByTypeSortByUpdate(req.query.p_id, req.query.v_id, newArray, req.query.type, function(err, data){
							callback(null, data);
						});
					} else {
						logger.info(" ****************** son_ids 2 ***************");
						apiModel.getApisByType(req.query.p_id, req.query.v_id, newArray, req.query.type, function(err, data){
							callback(null, data);
						});
					}
				} else {
					logger.info(" ****************** son_ids ***************");
					if(req.query.sort=="update"){
						logger.info(" ****************** son_ids 1 ***************");
						apiModel.getApisByTypeSortByUpdate(req.query.p_id, req.query.v_id, req.query.g_id, req.query.type, function(err, data){
							callback(null, data);
						});
					} else {
						logger.info(" ****************** son_ids 2 ***************");
						apiModel.getApisByType(req.query.p_id, req.query.v_id, req.query.g_id, req.query.type, function(err, data){
							callback(null, data);
						});
					}
				}
			}]
			/*data_5: function(callback) {
				apiModel.getApis(req.query.p_id, req.query.v_id, req.query.g_id, function(err, data){
					callback(null, data);
				});
			}*/
		}, function(err, results) {
			res.render('api/list', {
				pageCurrent: 'project',
				query: req.query,
				apiFunctionBackUrl: config.apiFunction.host+config.apiFunction.backUrl,
				data: results.data_1,
				versionList: results.data_2,
				groupList: results.data_3,
				groupSonList: results.data_4,
				apiList: results.data_5
			});
		});
	}
};
// swagger_list

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
		}],
		data_4: ["data_1", function(results, callback) {
			// 根据得到的api数据查找swagger_id字段
			logger.info(results.data_1);
			logger.info("********* 根据得到的api数据查找swagger_id字段 *********");
			if(results.data_1.swagger_id){
				// 从swagger_id导入的，去查找同一版本，同一swagger_id的其它api
				apiModel.getApisBySwaggerId(results.data_1.version_id, results.data_1.swagger_id, function(error, data){
					logger.info("********* back *********");
					logger.info(data);
					var updatesData = [];
					if(data!=undefined && data!="" && data.length>0){
						for(var i=0;i<data.length;i++){
							updatesData.push({
								id: data[i].id,
								data: data[i].updates
							});
						}
					}
					logger.info(updatesData);
					callback(null, updatesData);
				})
			} else {
				callback(null, [{
					id: results.data_1.id,
					data: results.data_1.updates
				}]);
			}
		}]
	}, function(err, results){
		res.render('api/detail', {
			pageCurrent: 'project',
			query: {
				p_id: results.data_1.project_id,
				v_id: results.data_1.version_id,
				g_id: results.data_1.group_id
			},
			apiFunctionBackUrl: config.apiFunction.host+config.apiFunction.backUrl,
			groupList: results.data_2,
			groupSonList: results.data_3,
			data: results.data_1,
			parameter: results.data_1.parameters,
			updatesData: results.data_4
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
						auth: req.body.parameter_auths,
						info: req.body.parameter_info,
						default: req.body.parameter_defaultvalue
					});
				} else {
					for(var i=0;i<req.body.parameter_name.length;i++){
						parametersArray.push({
							name: req.body.parameter_name[i],
							type: req.body.parameter_type[i],
							ismust: req.body.parameter_ismust[i],
							auth: req.body.parameter_auths[i],
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
				fun_name		: req.body.fun_name,
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

				var updatesArray = {
					update_type: "create",
					update_id: data.create_id,
					update_name: data.create_name,
					update_time: new Date(),
					update_info: "create a new api !"
				};

				apiModel.updateApiUpdates(data.id, updatesArray, function (err, data) {
					logger.info(" *** updateApiUpdates *** coming *** ");
					logger.info(err);
					logger.info(data);
				});

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
						auth: req.body.parameter_auths,
						info: req.body.parameter_info,
						default: req.body.parameter_defaultvalue,
						in_type: req.body.parameter_in_type,
						default_object: req.body.parameter_default_object
					});
				} else {
					for (var i = 0; i < req.body.parameter_name.length; i++) {
						parametersArray.push({
							name: req.body.parameter_name[i],
							type: req.body.parameter_type[i],
							ismust: req.body.parameter_ismust[i],
							auth: req.body.parameter_auths[i],
							info: req.body.parameter_info[i],
							default: req.body.parameter_defaultvalue[i],
							in_type: req.body.parameter_in_type[i],
							default_object: req.body.parameter_default_object[i]
						});
					}
				}
			}
			logger.info(parametersArray);

			var updatesArray = {
				update_type: "editor",
				update_id: req.body.user_id,
				update_name: req.body.user_name,
				update_time: new Date(),
				update_info: "edit something !"
			};

			apiModel.updateApi(req.body.id, {
				name: req.body.name,
				url: req.body.url,
				fun_name: req.body.fun_name,
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

			apiModel.updateApiUpdates(req.body.id, updatesArray, function (err, data) {
				logger.info(" *** updateApiUpdates *** coming *** ");
				logger.info(err);
				logger.info(data);
			});
		}
	});
};


// 删除api-提交
exports.removeApiPost = function (req, res, next) {

	if(req.session.user!=undefined && req.session.user.id!=undefined ){
		let uid = req.session.user.id;
	} else {
		let uid = "";
	}

	apiModel.getApiById(req.body.id, function(err, data){
		if(req.session.user.id==data.create_id){
			// 自己创建的api，有权限删除
			apiModel.removeApiById(req.body.id, function(err, data){
				res.send({
					status: 0,
					message: "删除成功"
				});
			});
		} else {
			// 不是自己创建的，查找这个api的项目创建者
			projectModel.getProjectById(data.project_id, function(error, p_data){
				// 创建者,有权限删除
				if(req.session.user.id==p_data.user_id){
					apiModel.removeApiById(req.body.id, function(err, data){
						res.send({
							status: 0,
							message: "删除成功"
						});
					});
				} else {
					res.send({
						status: 2,
						message: "对不起，你没有删除的权限"
					});
				}
			});
		}
	});
};

// 设置某个Api过期-提交
exports.loseApiPost = function (req, res, next) {
	apiModel.updateApi(req.body.id, {
		type: 2
	}, function (err, data) {
		if (err) {
			res.send({
				status: -1,
				message: "失败",
				data: err
			});
		} else {
			res.send({
				status: 0,
				message: "成功"
			});
		}
	});
};

// 判断fun_name是否重复
exports.testFunName = function (req, res, next) {
	if(!req.body.id){
		res.send({
			status: 1,
			message: "apiId不能为空"
		})
	} else if(!req.body.fun_name){
		res.send({
			status: 2,
			message: "fun_name不能为空"
		})
	} else {
		apiModel.getApiById(req.body.id, function(error, data){
			if(error){
				res.send({
					status: -1,
					message: "数据库错误"
				})
			} else {
				apiModel.getApisByFunName(data.version_id, req.body.fun_name, function(error, data){
					if(error){
						res.send({
							status: -1,
							message: "数据库错误"
						})
					} else {
						res.send({
							status: 0,
							data: data
						})
					}
				})
			}
		});
	}
};


// 一次删除多个api-提交
exports.removeApisPost = function (req, res, next) {

	if(!req.body.ids){
		res.send({
			status: -1,
			message: "ids不能为空"
		});
		return false;
	}

	apiModel.getApiById(req.body.ids.split(",")[0], function(err, data){
		// 取第一个api的Id，查找这个api的项目创建者
		projectModel.getProjectById(data.project_id, function(error, p_data){
			// 创建者,有权限删除
			if(req.session.user.id==p_data.user_id){
				apiModel.removeApiByIds(req.body.ids, function(err, data){
					res.send({
						status: 0,
						message: "删除成功"
					});
				});
			} else {
				res.send({
					status: 2,
					message: "对不起，你没有删除的权限"
				});
			}
		});
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
						res.redirect("/api/test");
					}
				});
			} else if(req.query.tid) {
				looksModel.getApiSaveById(req.query.tid, function(err, data){
					if(data){
						// callback(null, data);
						logger.info("data.version_iddata.version_iddata.version_id");
						logger.info(data);
						logger.info(data.version_id);
						logger.info(data.swagger_id);
						apiModel.getApiBySwaggerId(data.version_id, data.swagger_id, function(err2, data2){
							logger.info(err2);
							logger.info(data2);
							if(data2){
								callback(null, {
									data1: data,
									data2: data2
								});
							} else {
								callback(null, {
									data1: data
								});
							}
						});
					} else {
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
			if(req.query.tid){
				logger.info(results.data_2);
				res.render('api/test2', {
					query: req.query,
					dataEnv: results.data_1,
					// parameterJson: JSON.stringify(backParameters),
					data: results.data_2.data1,
					data2: results.data_2.data2,
					dataParameter: JSON.parse(results.data_2.data1.parameters),
					parameterList: parameters
				});
			} else {
				res.render('api/test', {
					query: req.query,
					dataEnv: results.data_1,
					// parameterJson: JSON.stringify(backParameters),
					data: results.data_2.data1,
					parameterList: parameters
				});
			}
		}
	});
};

// 发送测试请求
exports.testSend = function (req, res, next) {
	logger.info("testSend *******");
	logger.info(req.body);

	// 验证请求链接
	var resUrl = "";
	if(!req.body.url){
		res.send({
			status: 1,
			message: "请求url不能为空"
		});
		return false;
	} else {
		resUrl = req.body.url;
	}
	// 验证请求服务器host
	var resHost = undefined;
	if(req.body.env_host!=undefined){
		resHost = req.body.env_host;
	}
	// 验证请求header
	var resHeader = {};
	if(req.body.env_session_id!=undefined){
		try {
			resHeader = JSON.parse(req.body.env_session_id);
		} catch (error){
			logger.info("请求header不是一个json对象，参数无效。");
		}
	}
	// 验证参数
	var resData = {};
	if(req.body.data!=undefined){
		try {
			resData = JSON.parse(req.body.data);
			logger.info(resData);
		} catch (error){
			logger.info("请求参数不是一个json对象，参数无效。");
			resData = {};
		}
	}


	if(!req.body.api_id){
		return next("暂不允许非id的接口测试");
	}


	var ep = new eventproxy();
	ep.fail(next);

	apiModel.getApiById(req.body.api_id, ep.done('get_api'));

	ep.all('get_api', function (apiData) {
		projectModel.getGroupById(apiData.group_id, ep.done('get_api_group'));
	});

	ep.all('get_api', 'get_api_group', function (apiData, groupData) {
		if(groupData && groupData.father_id && groupData.father_id!=0){
			projectModel.getGroupById(groupData.father_id, ep.done('get_api_group_over'))
		} else {
			ep.emit("get_api_group_over", groupData);
		}
	});

	ep.all('get_api', 'get_api_group_over', function (apiData, groupData) {

		logger.info("eventproxy back");
		logger.info(groupData.servers_api_path);

		// 是否对url进行ptah参数替换
		if(1){
			var yesUrl = [];
			var postUrl = apiData.url;
			// logger.info("start *** *** *** ");
			// logger.info(postUrl);

			// /api/v1/student/find_student/{abcId}/{examId}/{studentId}-{questionId}-{teacherId}
			// /api/v1/student/find_student
			// /api/v1/student/find_student/'+data.examId+'/'+data.studentId
			// /api/v1/student/find_student/'+data.examId+'/'+data.studentId+'-'+data.questionId+'-'+data.teacherId

			var full_url = postUrl.split("/{");
			full_url = full_url[0];

			// 正则查找
			var regtxt = "/{[\\s\\S]*?}/g";
			var URL_REG = eval(regtxt);
			var urlIndex = 0;
			var post_url = postUrl.replace(URL_REG, function(data){
				// logger.info(data);
				urlIndex++;
				//logger.info(index);
				//data = data.replace(/[{|}]/g, "");
				//logger.info(data);

			});
			// logger.info(urlIndex);
			var forIndex = 0;
			post_url = postUrl.replace(URL_REG, function(data){
				forIndex++;
				data = data.replace(/[{|}]/g, "");
				// logger.info(data);
				yesUrl.push(data);
				if(forIndex == urlIndex){
					return '"+resData.'+data;
				} else {
					return '"+resData.'+data+'+"';
				}
			});
			if(urlIndex==0){
				post_url = '"'+groupData.servers_api_path+post_url+'"';
			} else {
				post_url = '"'+groupData.servers_api_path+post_url;
			}
			// logger.info(yesUrl);
			// logger.info(full_url);
			// logger.info(post_url);
			// logger.info("end *** *** *** ");
		}

		var url = '"' + req.body.env_host + '"+' + post_url;
		url = eval(url);
		logger.info(url);

		var queryData = {};
		for(var i=0;i<apiData.parameters.length;i++){
			let item = apiData.parameters[i];
			if(item.in_type=="query"){
				queryData[item.name] = resData[item.name];
			}
		}
		logger.info(queryData);

		// post请求
		if(req.body.request_type==1){
			servers.POST({
				url: url,
				token: resHeader,
				body: resData.body,
				query: queryData
			}, function(error, data){
				if(error){
					res.send({
						status: 1,
						message: "请求错误",
						data: error
					});
				} else {
					res.send({
						status: 0,
						message: "请求返回成功",
						data: data
					});
				}
			});
		} else if(req.body.request_type==2) {
			servers.GET({
				url: url,
				token: resHeader,
				query: queryData
			}, function(error, data){
				if(error){
					res.send({
						status: 1,
						message: "请求错误",
						data: error
					});
				} else {
					res.send({
						status: 0,
						message: "请求返回成功",
						data: data
					});
				}
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

	});




};




// 发送测试请求
exports.testSend2 = function (req, res, next) {
	logger.info("testSend2 *******");
	logger.info(req.body);
	servers2.sendRequest({
		url: req.body.url,
		headers: req.body.headers,
		body: req.body.body
	}, function(error, data){
		logger.info(data);
		if(error){
			res.send({
				status: -1,
				message: "请求错误",
				data: error
			});
		} else {
			res.send({
				status: 0,
				message: "请求成功",
				data: data
			});
		}
	}, req.body.type)
};


// 创建api栏目
exports.createGroupPP = function (data, req, callback) {
	// logger.info("创建api栏目 createGroupPP coming");

	var tags = data.tags;

	// logger.info(tags);

	var upIndex=0;
	var groupData=[];
	for(var i=0;i<tags.length;i++){
		projectModel.createGroup({
			name		: tags[i].description,
			project_id	: req.body.p_id,
			level		: (req.body.g_id==undefined||req.body.g_id=="") ? 1 : 2,
			father_id	: (req.body.g_id==undefined||req.body.g_id=="") ? 0 : req.body.g_id,
			version_id	: req.body.v_id
		}, function(err, backdata){
			if(err){
				logger.info(err);
			} else {
				// logger.info("添加栏目成功");
				// logger.info(backdata);
				upIndex++;
				// logger.info(upIndex);
				for(var j=0;j<tags.length;j++){
					if(tags[j].description==backdata.name){
						tags[j].id=backdata.id
					}
				}
				if(upIndex==tags.length){
					callback(data, tags);
				}
			}
		});
	}

};

// 导入api
exports.createApiPP = function (data, req, tags, callback) {
	// logger.info("导入api createApiPP coming");

	var paths = data.paths;
	var definitions = data.definitions;

	// logger.info(typeof(paths));
	var backData = [];
	for (var index in paths){

		// test if start
		// if(index=="/api/v1/region-paper/find_choice_question_students/{examId}-{questionId}") {
		logger.info(index);
		// logger.info(paths[index]);
		// logger.info(JSON.stringify(paths[index]));

		var url_full = "";

		var testUrl = index.split("/");
		var urlLastStr = testUrl[testUrl.length-1];
		if(urlLastStr.indexOf("{")!=-1 && urlLastStr.indexOf("}")!=-1){
			testUrl.pop();
			url_full = testUrl.join("/")
		}
		// logger.info(url_full);

		if (paths[index].get != undefined) {
			var group_id = "";
			for (var k = 0; k < tags.length; k++) {
				if (tags[k].name == paths[index].get.tags[0]) {
					group_id = tags[k].id;
				}
			}
			backData.push({
				url: index,
				url_full: url_full,
				name: paths[index].get.tags[0],
				request_type: 2,
				parameters: paths[index].get.parameters,
				summary: paths[index].get.summary,
				description: paths[index].get.description,
				g_id: group_id,
				responses: paths[index].get.responses
			});
		} else if (paths[index].post != undefined) {
			var group_id = "";
			for (var k = 0; k < tags.length; k++) {
				if (tags[k].name == paths[index].post.tags[0]) {
					group_id = tags[k].id;
				}
			}
			backData.push({
				url: index,
				url_full: url_full,
				name: paths[index].post.tags[0],
				request_type: 1,
				parameters: paths[index].post.parameters,
				summary: paths[index].post.summary,
				description: paths[index].post.description,
				g_id: group_id,
				responses: paths[index].post.responses
			});
		} else if (paths[index].delete != undefined) {
			var group_id = "";
			for (var k = 0; k < tags.length; k++) {
				if (tags[k].name == paths[index].delete.tags[0]) {
					group_id = tags[k].id;
				}
			}
			backData.push({
				url: index,
				url_full: url_full,
				name: paths[index].delete.tags[0],
				request_type: 4,
				parameters: paths[index].delete.parameters,
				summary: paths[index].delete.summary,
				description: paths[index].delete.description,
				g_id: group_id,
				responses: paths[index].delete.responses
			});
		}
		/*取参数*/
		if (backData[backData.length - 1].parameters != undefined) {
			var parametersArray = [];
			for (var m = 0; m < backData[backData.length - 1].parameters.length; m++) {
				var default_p = "";
				var default_p_object = "";
				var type = "";
				if (backData[backData.length - 1].parameters[m].schema != undefined && backData[backData.length - 1].parameters[m].schema.type != undefined) {
					// logger.info("************************ coming 1 **************************************");
					if (backData[backData.length - 1].parameters[m].schema.type == "number" || backData[backData.length - 1].parameters[m].schema.type == "integer") {
						type = 1;
					} else if (backData[backData.length - 1].parameters[m].schema.type == "string") {
						type = 2;
					} else if (backData[backData.length - 1].parameters[m].schema.type == "boolean") {
						type = 3;
					} else if (backData[backData.length - 1].parameters[m].schema.type == "array") {
						type = 5;
					} else if (backData[backData.length - 1].parameters[m].schema.type == "object") {
						type = 6;
					} else {
						type = 0;
					}
				} else if (backData[backData.length - 1].parameters[m].schema != undefined && backData[backData.length - 1].parameters[m].schema["$ref"] != undefined) {
					// logger.info("************************ coming 2 **************************************");
					var paramstr = backData[backData.length - 1].parameters[m].schema["$ref"].split("/");
					paramstr = paramstr[paramstr.length - 1];
					// logger.info(paramstr);
					// logger.info(definitions[paramstr]);
					if (definitions[paramstr] != undefined) {
						// logger.info("************************ coming 2 +++++++++++++++++ **************************************");
						// logger.info(definitions[paramstr]);
						var checkspData = checkProps(definitions[paramstr]);
						default_p_object = checkspData;
						// logger.info(JSON.stringify(checkspData));
						checkspData = getItems(checkspData);
						// logger.info(JSON.stringify(checkspData));
						default_p = JSON.stringify(checkspData);
						// logger.info(default_p);
					}
					type = 6;
				} else if (backData[backData.length - 1].parameters[m].type != undefined) {
					// logger.info("************************ coming 3 **************************************");
					if (backData[backData.length - 1].parameters[m].type == "number" || backData[backData.length - 1].parameters[m].type == "integer") {
						type = 1;
					} else if (backData[backData.length - 1].parameters[m].type == "string") {
						type = 2;
					} else if (backData[backData.length - 1].parameters[m].type == "boolean") {
						type = 3;
					} else if (backData[backData.length - 1].parameters[m].type == "array") {
						type = 5;
					} else {
						type = 0;
					}
				} else {
					// logger.info("************************ coming 4 **************************************");
					type = 0;
				}
				var isdefault = "";
				if (backData[backData.length - 1].parameters[m].default != undefined) {
					isdefault = backData[backData.length - 1].parameters[m].default;
				}
				var ismust = "";
				if (backData[backData.length - 1].parameters[m].required) {
					ismust = 1;
				} else {
					ismust = 2;
				}
				parametersArray.push({
					name: backData[backData.length - 1].parameters[m].name,
					type: type,
					ismust: ismust,
					info: backData[backData.length - 1].parameters[m].description,
					default: default_p != "" ? default_p : isdefault,
					default_object: default_p_object
					//default : default_p
				});
			}
			backData[backData.length - 1].parameters = parametersArray;
		}
		/*取返回值*/
		if (backData[backData.length - 1].responses["200"].schema != undefined && backData[backData.length - 1].responses["200"].schema["$ref"] != undefined) {
			var str = backData[backData.length - 1].responses["200"].schema["$ref"].split("/");
			str = str[str.length - 1];
			var checkData = checkProps(definitions[str]);
			backData[backData.length - 1].back_description = JSON.stringify(checkData);
			if (backData[backData.length - 1].responses["200"].schema.type != undefined && backData[backData.length - 1].responses["200"].schema.type == "array") {
				var checkDataArray = [];
				checkDataArray.push(getItems(checkData));
				backData[backData.length - 1].back_data = JSON.stringify(checkDataArray);
			} else {
				backData[backData.length - 1].back_data = JSON.stringify(getItems(checkData));
			}
		} else if (backData[backData.length - 1].responses["200"].schema != undefined && backData[backData.length - 1].responses["200"].schema.items != undefined && backData[backData.length - 1].responses["200"].schema.items["$ref"] != undefined) {
			var str = backData[backData.length - 1].responses["200"].schema.items["$ref"].split("/");
			str = str[str.length - 1];
			var checkData = checkProps(definitions[str]);
			logger.info("------------------------------ checkData bug coming ---------------------------------");
			logger.info(checkData);
			logger.info(JSON.stringify(checkData));
			backData[backData.length - 1].back_description = JSON.stringify(checkData);
			if (backData[backData.length - 1].responses["200"].schema.type != undefined && backData[backData.length - 1].responses["200"].schema.type == "array") {
				var checkDataArray = [];
				checkDataArray.push(getItems(checkData));
				backData[backData.length - 1].back_data = JSON.stringify(checkDataArray);
			} else {
				backData[backData.length - 1].back_data = JSON.stringify(getItems(checkData));
			}
		} else if (backData[backData.length - 1].responses["200"].schema != undefined && backData[backData.length - 1].responses["200"].schema.type != undefined) {
			backData[backData.length - 1].back_description = backData[backData.length - 1].responses["200"].schema.type;
			backData[backData.length - 1].back_data = backData[backData.length - 1].responses["200"].schema.type;
		} else {
			backData[backData.length - 1].back_description = "not find";
			backData[backData.length - 1].back_data = "not find";
		}
		// test if end
		//}
	}
	// logger.info(backData);

	function getItems(obj){
		// logger.info("getItems working");
		// logger.info(obj);
		// logger.info(obj.type);
		var backs = "";

		if(obj.type!=undefined && obj.type=="object" && obj.properties){
			// logger.info("object +++++++++++++++++++++");
			var newArrays = {};
			for(var newIndex in obj.properties){
				// if(obj.properties[newIndex].items!=undefined){
				// 	newArrays[newIndex]=getItems(obj.properties[newIndex].items);
				// } else {
				// 	newArrays[newIndex]=getItems(obj.properties[newIndex]);
				// }

				if(obj.properties[newIndex].items!=undefined){
					var hhDa = getItems(obj.properties[newIndex].items);
				} else {
					var hhDa = getItems(obj.properties[newIndex]);
				}
				if(obj.properties[newIndex].type!=undefined && obj.properties[newIndex].type=="array"){
					// logger.info("array coming -----------------------------");
					var aaArr = [];
					aaArr.push(hhDa);
					newArrays[newIndex] = aaArr;
				} else {
					newArrays[newIndex] = hhDa;
				}
			}
			backs = newArrays;
		} else if(obj.type!=undefined && obj.type=="array" && obj.properties) {
			// logger.info("array +++++++++++++++++++++");
			var newArrays = [];
			for(var newIndex in obj.properties){
				if(obj.properties[newIndex].items!=undefined){
					newArrays.push(getItems(obj.properties[newIndex].items));
				} else {
					newArrays.push(getItems(obj.properties[newIndex]));
				}
			}
			// logger.info(newArrays);
			backs =  newArrays;
		} else if(obj.type!=undefined && obj.type=="string"){
			backs =  "string";
		} else if(obj.type!=undefined && obj.type=="number"||obj.type=="integer"){
			// backs =  parseInt(Math.random()*1000);
			backs =  "number";
		} else if(obj.type!=undefined && obj.type=="boolean"){
			backs =  "boolean";
		} else {
			backs =  obj;
		}

		// logger.info("yes 有返回");
		// logger.info(backs);
		return backs;
	}

	function checkProps(obj){

		for (var litIndex in obj.properties){
			if(obj.properties[litIndex].items!=undefined && obj.properties[litIndex].items["$ref"]!=undefined){
				var str = obj.properties[litIndex].items["$ref"].split("/");
				str = str[str.length-1];
				obj.properties[litIndex].items=checkProps(definitions[str]);
			} else if(obj.properties[litIndex]!=undefined && obj.properties[litIndex]["$ref"]!=undefined){
				// logger.info("+++++++++++++++ this is bug 【】【】【】");
				// logger.info(obj.properties[litIndex]);
				// logger.info(obj.properties[litIndex]["$ref"]);
				var str = obj.properties[litIndex]["$ref"].split("/");
				str = str[str.length-1];
				// logger.info(str);
				// 自己调自己的bug
				// 如我的parent的格式其实和我一样，这样会导致无限循环
				if(str=="ExamQuestionComplexDTO"||str=="ExamQuestionSimpleDTO") {
					// logger.info("+++++++++++++++ this is bug 【coming】【coming】【coming】");
					// logger.info(definitions[str]);
					obj.properties[litIndex]={
						"type": "string",
						"description": "重复的格式!!!!!!"
					};
				} else {
					obj.properties[litIndex]=checkProps(definitions[str]);
				}
			}
		}
		return obj;

		return false;
		// 第一层替换
		for (var litIndex in obj.properties){
			if(obj.properties[litIndex].items!=undefined && obj.properties[litIndex].items["$ref"]!=undefined){
				var str = obj.properties[litIndex].items["$ref"].split("/");
				str = str[str.length-1];
				obj.properties[litIndex].items=definitions[str];
			} else if(obj.properties[litIndex]["$ref"]!=undefined){
				var str = obj.properties[litIndex]["$ref"].split("/");
				str = str[str.length-1];
				obj.properties[litIndex]=definitions[str];
			}
			// 第二层替换
			if(obj.properties[litIndex].items!=undefined && obj.properties[litIndex].items.properties!=undefined){
				for (var mitIndex in obj.properties[litIndex].items.properties){
					if(obj.properties[litIndex].items.properties[mitIndex].items!=undefined && obj.properties[litIndex].items.properties[mitIndex].items["$ref"]!=undefined){
						var mitstr = obj.properties[litIndex].items.properties[mitIndex].items["$ref"].split("/");
						mitstr = mitstr[mitstr.length-1];
						obj.properties[litIndex].items.properties[mitIndex].items=definitions[mitstr];
					} else if(obj.properties[litIndex].items.properties!=undefined && obj.properties[litIndex].items.properties[mitIndex]!=undefined && obj.properties[litIndex].items.properties[mitIndex]["$ref"]!=undefined){
						logger.info("bug coming++++++++++++++++++++++++++");
						logger.info(obj.properties[litIndex].items.properties[mitIndex]);
						logger.info(obj.properties[litIndex].items.properties[mitIndex]["$ref"]);
						var mitstr =obj.properties[litIndex].items.properties[mitIndex]["$ref"].split("/");
						mitstr = mitstr[mitstr.length-1];
						obj.properties[litIndex].items.properties[mitIndex]=definitions[mitstr];
					}
				}
			}
		}
		return obj;
	}




	// name			: req.body.name,
	// url				: req.body.url,
	// parameters		: parametersArray,
	// group_id		: req.body.group_sonid ? req.body.group_sonid : req.body.group_id,
	// description		: req.body.description,
	// request_type	: req.body.request_type,
	// back_data		: req.body.back_data,
	// back_description: req.body.back_description,
	// writes			: req.body.writes,
	// mock_template	: req.body.mock_template,
	// project_id		: req.body.chose_p_id,
	// version_id		: req.body.chose_v_id,
	// create_id		: req.body.user_id,
	// create_name		: req.body.user_name,
	// update_id		: req.body.user_id,
	// update_name		: req.body.user_name
	//logger.info(backData[0]);
	for(var i=0;i<backData.length;i++){
		// for(var i=0;i<2;i++){
		apiModel.createApi({
			name: backData[i].description ? backData[i].description : backData[i].summary,
			url: backData[i].url,
			url_full: backData[i].url_full,
			request_type: backData[i].request_type,
			description: backData[i].summary,
			group_id: backData[i].g_id,
			parameters: backData[i].parameters,
			back_data: backData[i].back_data,
			back_description: backData[i].back_description,
			create_id: req.session.user.id,
			create_name: "auto",
			project_id: req.body.p_id,
			version_id: req.body.v_id,
			update_time: new Date()
		}, function(err, data) {
			if (err) {
				logger.info("保存失败! "+data.id);
			} else {
				logger.info("保存成功! "+data.id);
			}
		});
	}


	callback(data);
};

// 导入-入口
exports.importApi = function (req, res, next) {
	logger.info("导入api");

	request.get({
		url: req.body.swagger_url,
		qs: {}
	}, function (error, response, body) {


		// logger.info(error);
		// logger.info(response);
		// logger.info(body);

		try{
			var data = JSON.parse(body);
		} catch (error){
			res.send({
				status: "1",
				message: "swagger地址错误，无法获取数据"
			});
			return false;
		}
		if(data.tags==undefined||data.paths==undefined){
			res.send({
				status: "2",
				message: "swagger无法获取数据"
			});
			return false;
		}



		exports.createGroupPP(data, req, function(data, tags){
			logger.info("createGroupPP back ++++++");
			exports.createApiPP(data, req, tags, function(data){
				logger.info("createApiPP back ++++++");

				res.send({
					status: "0",
					message: "数据导入中，请稍后查看"
				});

			});
		});




	});



};

exports.maketest = function (req, res, next) {
	var obj = "{\"type\":\"object\",\"properties\":{\"studentClassExamTrends\":{\"type\":\"array\",\"description\":\"学生成绩走势排名\",\"items\":{\"type\":\"object\",\"properties\":{\"classExamTrends\":{\"type\":\"array\",\"description\":\"考试排名明细\",\"items\":{\"type\":\"object\",\"properties\":{\"examId\":{\"type\":\"string\",\"description\":\"考试ID\"},\"examName\":{\"type\":\"string\",\"description\":\"考试名称\"},\"rank\":{\"type\":\"integer\",\"format\":\"int32\",\"description\":\"排名\"}}}},\"classId\":{\"type\":\"string\",\"description\":\"云平台班级ID\"},\"className\":{\"type\":\"string\",\"description\":\"班级名称\"},\"studentId\":{\"type\":\"string\",\"description\":\"学生逻辑ID\"},\"studentName\":{\"type\":\"string\",\"description\":\"学生姓名\"}}}}}}";
	obj = JSON.parse(obj);
	logger.info(obj);


	obj = getItems(obj);

	function getItems2(obj){
		logger.info("getItems2 coming");
		logger.info(obj);
		var backs = "123456";
		return backs;
		if(obj.type=="string"){
			backs =  "string"+parseInt(Math.random()*1000);
		} else if(obj.type=="number"||obj.type=="integer"){
			backs =  parseInt(Math.random()*1000);
		} else if(obj.type=="boolean"){
			backs =  "false";
		} else {
			backs =  obj;
		}
	}




	res.send({
		status: 0,
		data: obj
	})
};


exports.getApiList = function (req, res, next) {
	apiModel.getApisByVid("r1WRTCBZqe", function(err, docs){
		res.send({
			status: 0,
			data: docs
		});
	});
};









