"use strict";

var async = require('async');
var validator = require('validator');
var _ = require('lodash');
var authModel = require('../models/auth');
var userModel = require('../models/user');
var cacheModel = require('../models/cache');
var message = require('../models/message');
var mailModel = require('../models/mail');
var projectModel = require('../models/project');
var apiModel = require('../models/api');

var logger = require('../common/logger');

// 我的项目首页
exports.index = function (req, res, next) {
	res.locals.pageCurrent = 'project';
	projectModel.getProjectsByUserId(req.session.user.id, function(err, data){
		logger.info(data);
		res.render('project/index', {
			data: data
		});
	});
};


// 项目设置
exports.update = function (req, res, next) {
	if(!req.query.p_id){
		next("项目id不能为空");
		return false;
	}
	projectModel.getProjectById(req.query.p_id, function(err, data){
		if(data){
			res.render('project/update', {
				data: data
			});
		} else {
			next("不存在这个项目");
		}
	});
};
exports.updatePost = function (req, res, next) {
	if (!validator.trim(req.body.name)) {
		return message.error(res, '项目名称不能为空！', '-1');
	}
	projectModel.updateProject(req.body.p_id, {
		name		: req.body.name,
		column		: req.body.column,
		type		: req.body.type,
		password	: req.body.password
	}, function(err, data){
		if(err){
			return message.error(res, err, '-1');
		} else {
			return message.success(res, '保存成功！', '/project/index', '返回项目列表');
		}
	});
};



// 新建项目
exports.create = function (req, res, next) {
	res.locals.pageCurrent = 'project';
	res.render('project/create');
};
// 新建项目-post提交
exports.createPost = function (req, res, next) {

	if (!validator.trim(req.body.name)) {
		return message.error(res, '项目名称不能为空！', '-1');
	}
	if (!validator.trim(req.body.v_name)) {
		return message.error(res, '默认版本号不能为空！', '-1');
	}

	async.auto({
		createProject: function(callback) {
			// 创建项目
			projectModel.createProject({
				name			: req.body.name,
				column			: req.body.column,
				user_id			: req.session.user.id,
				user_name		: req.session.user.name,
				password		: req.body.password
			}, function(err, data){
				callback(null, data);
			});
		},
		createVersion: ['createProject', function(results, callback) {
			// 创建版本
			projectModel.createVersion({
				name		: req.body.v_name,
				project_id	: results.createProject.id
			}, function(err, data){
				callback(null, data);
			});
		}],
		updateProjectVersionId: ['createProject', 'createVersion', function(results, callback) {
			// 写入默认版本id
			projectModel.updateProject(results.createProject.id, {
				version_id: results.createVersion.id,
				version_name: results.createVersion.name
			}, function(err, data){
				callback(null, data);
			});
		}]
	}, function(err, results) {
		if(err){
			next(err);
		} else {
			return message.success(res, '创建成功！', '/project/index', '返回项目列表');
		}
	});
};



// 删除项目 ajax
exports.removeProject = function (req, res, next) {
	projectModel.removeProjectById(req.body.id, function(err, data){
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
	});
};




// 项目版本管理
exports.version = function (req, res, next) {
	async.parallel({
		projectData: function(callback) {
			projectModel.getProjectById(req.query.p_id, function(err, data){
				callback(null, data);
			});
		},
		versionData: function(callback) {
			projectModel.getVersionsByPid(req.query.p_id, function(err, data){
				callback(null, data);
			});
		}
	}, function (err, result) {
		res.render('project/version', {
			data: result.projectData,
			versions: result.versionData
		});
	});
};
// 创建
exports.createVersionPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	async.auto({
		findData: function(callback) {
			projectModel.getVersionByName(req.body.p_id, req.body.newversion, function(err, data){
				callback(null, data);
			});
		},
		createVersion: ['findData', function(results, callback) {
			if(results.findData){
				res.end(JSON.stringify({
					status: -1,
					message: "已经存在该版本号了!"
				}));
				return false;
			}
			projectModel.createVersion({
				name		: req.body.newversion,
				project_id	: req.body.p_id
			}, function(err, data){
				callback(null, data);
			});
		}]
	}, function (err, result) {
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
	});
};
// 删除
exports.removeVersionPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	projectModel.removeVersionById(req.body.id, function(err, data){
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
// 设置某版本号为默认版本
exports.setDefaultVersionPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	if( !req.body.p_id || !req.body.v_id ){
		res.end(JSON.stringify({
			status: 1,
			message: "参数错误"
		}));
		return false;
	}
	projectModel.setDefaultVersionById(req.body.p_id, req.body.v_id, req.body.v_name, function(err, data){
		if(err){
			res.end(JSON.stringify({
				status: -1,
				message: "保存失败"
			}));
			next(err);
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "设置某版本号为默认版本成功"
			}));
		}
	});
};
// 获取某个项目下的所有版本号
exports.getProjectVersions = function (req, res, next) {
	if( !req.body.p_id){
		return res.send({
			status: 1,
			message: "参数错误"
		});
	}
	projectModel.getVersionsByPid(req.body.p_id, function(err, data){
		if(err){
			res.send({
				status: -1,
				message: "获取某个项目下的所有版本号失败"
			});
		} else {
			res.send({
				status: 0,
				data: data
			});
		}
	});
};





// 创建栏目
exports.createGroupPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	projectModel.createGroup({
		name		: req.body.group_name,
		project_id	: req.body.p_id,
		level		: req.body.father_id==0?1:2,
		father_id	: req.body.father_id,
		version_id	: req.body.v_id
	}, function(err, data){
		if(err){
			res.end(JSON.stringify({
				status: -1,
				message: "保存失败"
			}));
			next(err);
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "添加栏目成功"
			}));
		}
	});
};
// 编辑栏目
exports.updateGroupPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	projectModel.updateGroup(req.body.group_id, {
		name			: req.body.group_name,
		sort			: req.body.group_sort,
		swagger_url		: req.body.swagger_url,
		servers_api_path: req.body.servers_api_path
	}, function(err, data) {
		if(err){
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
};
// 删除栏目
exports.removeGroupPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	projectModel.removeGroupById(req.body.id, function(err, data){
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
// 删除多个栏目
exports.removeGroupsPost = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	projectModel.removeGroupByIds(req.body.ids, function(err, data){
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
// 删除多个apis为空的栏目
exports.removeNoApisGroupsPost = function (req, res, next) {
	var ids = req.body.ids;
	if(!ids){
		return res.send({
			status: 1,
			message: "没有栏目可供删除"
		});
	}
	ids = ids.split(",");
	for(var i=0; i<ids.length; i++){
		var p_id = ids[i];
		exports.removeNoApisGroupsFunction(p_id);
	}
	return res.send({
		status: 0,
		message: "删除成功"
	});
};
exports.removeNoApisGroupsFunction = function (p_id) {
	apiModel.getApisByIdGroupId(p_id, function(err, data){
		logger.debug("getApisByIdGroupId back");
		logger.debug(p_id);
		logger.debug(err);
		logger.debug(data);
		if(!err && data.length===0){
			projectModel.removeGroupById(p_id, function(){});
		}
	});
};


// 获取所有一级栏目
exports.getGroupList = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	if(!req.body.v_id){
		res.end(JSON.stringify({
			status: 2,
			message: "项目版本号不能为空"
		}));
	}
	projectModel.getGroupByVersionId(req.body.v_id, (!req.body.level ? 0 : req.body.level), function(err, data){
		if(err){
			res.end(JSON.stringify({
				status: -1,
				message: err
			}));
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "获取成功",
				data: data
			}));
		}
	});
};


// 根据某一级栏目id获取该栏目的二级栏目
exports.getGroupSonList = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	if(!req.body.f_id){
		res.end(JSON.stringify({
			status: 1,
			message: "f_id不能为空"
		}));
	}
	projectModel.getGroupByFatherId(req.body.f_id, function(err, data){
		if(err){
			res.end(JSON.stringify({
				status: -1,
				message: err
			}));
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "获取成功",
				data: data
			}));
		}
	});
};



// 根据gid获取GroupInfo
exports.getGroupInfo = function (req, res, next) {
	if(!req.body.g_id){
		return res.send({
			status: 1,
			message: "g_id不能为空"
		});
	}
	projectModel.getGroupById(req.body.g_id, function(error, data){
		if(error){
			return next(error);
		}
		res.send({
			status: 0,
			message: "success",
			data: data
		});
	})
	
};










// 协作管理-team
exports.team = function (req, res, next) {
	res.locals.pageCurrent = 'project';

	async.auto({
		getProject: function(callback) {
			projectModel.getProjectById(req.query.p_id, function(err, data){
				callback(null, data);
			});
		},
		getTeamAdmins: ['getProject', function(results, callback) {
			if(results.getProject.team_ids.length>0){
				logger.info("-------------------------has team_ids-----------------------------");
				userModel.getUsersByIds(results.getProject.team_ids, function(err, data){
					callback(null, data);
				});
			} else {
				logger.info("-------------------------no team_ids-----------------------------");
				callback(null, null);
			}
		}]
	}, function(error, results) {
		logger.info(error);
		logger.info(results);
		if(error){
			next(error);
		} else {
			res.render('project/team', {
				data: results.getProject,
				teamAdmins: results.getTeamAdmins
			});
		}
	});
};
// 添加项目协作成员-第一步，给对方发送Message
exports.sendJoinTeamMessage = function (req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	async.auto({
		getUserId: function(callback) {
			userModel.getUserByEmail(req.body.email, function(err, data){
				callback(null, data);
			});
		},
		createMessage: ['getUserId', function(results, callback) {
			if(!results.getUserId){
				callback(null);
				return false;
			}
			// 创建message
			userModel.createUserMessage({
				title		: "系统消息",
				info		: "用户"+req.session.user.name+"邀请您加入项目【"+req.body.p_name+"】，加入项目可以对项目和api进行修改和添加。",
				link		: req.body.p_id,
				user_id		: results.getUserId.id,
				send_id		: req.session.user.id,
				send_name	: req.session.user.name
			}, function(err, data){
				logger.info(err);
				logger.info(data);

				callback(null, data);
			});
		}]
	}, function(error, results) {
		if(error){
			next(error);
			res.end(JSON.stringify({
				status: -1,
				message: "发送失败",
				error: error
			}));
		} else {
			if(!results.getUserId){
				res.end(JSON.stringify({
					status: 1,
					message: "发送失败，输入的邮件地址错误"
				}));
			} else {
				res.end(JSON.stringify({
					status: 0,
					message: "发送成功"
				}));

				// 后台挂起发送mail
				if(req.body.is_sendmail=="on"){
					logger.info("-----------------------now send mail------------------------------");
					mailModel.sendJoinProjectMessage(req.body.email, req.body.p_id, req.body.p_name, req.session.user.name);
				}
			}
		}
	});
};
// 添加项目协作成员-第二步，用户点击确定同意加入
exports.joinTeam = function (req, res, next) {
	projectModel.userJoinTeam(req.session.user.id, req.body.p_id, function(error, data){
		logger.info(error);
		logger.info(data);
		if(error){
			next(error);
			res.end(JSON.stringify({
				status: -1,
				message: "加入项目失败",
				error: error
			}));
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "加入项目成功"
			}));
		}
	});
};
// 删除项目协作成员
exports.removeTeamAdmin = function (req, res, next) {
	logger.debug(req.body);
	projectModel.removeTeamAdmin(req.body.p_id, req.body.u_id, function(error, data){
		console.info(error);
		console.info(data);
		if(error){
			next(error);
			res.end(JSON.stringify({
				status: -1,
				message: "删除失败",
				error: error
			}));
		} else {
			res.end(JSON.stringify({
				status: 0,
				message: "删除成功"
			}));
		}
	});
};



// 查看某个栏目的swagger导入记录
exports.GroupSwaggerHistory = function (req, res, next) {
	projectModel.getGroupById(req.query.id, function(error, data){
		if(error){
			return next(error);
		}
		_.reverse(data.swagger_history);
		res.render('project/swaggerhistory', {
			data: data
		});
	})
};


