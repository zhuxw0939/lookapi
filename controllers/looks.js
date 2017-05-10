"use strict";

var projectModel = require('../models/project');
var looksModel = require('../models/looks');
var apiModel = require('../models/api');

// 使用 Mock
var Mock = require('mockjs');


var logger = require('../common/logger');


exports.index = function (req, res, next) {
	res.locals.pageCurrent = 'looks';
	projectModel.getProjectsByUserId(req.session.user.id, function(err, data){
		logger.info(data);
		res.render('looks/index', {
			data: data
		});
	});
};


exports.apiList = function (req, res, next) {
	res.locals.pageCurrent = 'looks';
	logger.info("apiList looks");
	logger.info(req.query);

	if(req.query.token!=undefined){
		looksModel.getApiSaveByPidAndUser(req.query.p_id, req.query.token, function(err, data){
			logger.info(data);

			var looksApi = [];
			for(var i=0;i<data.length;i++){
				looksApi.push(data[i].id);
			}

			res.render('looks/list', {
				looksApis: looksApi,
				p_id: req.query.p_id,
				data: data
			});
		});
	} else {
		looksModel.getApiSaveByPid(req.query.p_id, function(err, data){
			logger.info(data);

			var looksApi = [];
			for(var i=0;i<data.length;i++){
				looksApi.push(data[i].id);
			}

			res.render('looks/list', {
				looksApis: looksApi,
				p_id: req.query.p_id,
				data: data
			});
		});
	}

};


exports.apiDetail = function (req, res, next) {
	res.locals.pageCurrent = 'looks';

	looksModel.getApiSaveById(req.query.id, function(err, data){
		logger.info(data);
		if(data){
			apiModel.getApiBySwaggerId(data.version_id, data.swagger_id, function(err2, data2){
				if(data2){
					res.render('looks/detail', {
						data: data,
						data2: data2
					});
				} else {
					res.render('looks/detail', {
						data: data
					});
				}
			});
		} else {
			res.render('looks/detail', {
				data: data
			});
		}
	});

};




exports.writeApi = function (req, res, next) {

	logger.info("writeApi come");
	logger.info(req.body);
	logger.info(req.body.user);
	logger.info(req.body.version_id);

	looksModel.createApiSave({
		requests 		: req.body.requests,
		server_type		: req.body.server_type,
		url  			: req.body.url,
		parameters		: req.body.parameters,
		back_data	 	: req.body.back_data,
		user  			: req.body.user,
		swagger_id		: req.body.swagger_id,
		send_time		: req.body.send_time,
		project_id		: req.body.project_id,
		version_id		: req.body.version_id
	}, function(err, data) {
		logger.info("-----------------------------create back------------------------------------");
		logger.info(err);
		logger.info(data);

		res.send({
			status: 0,
			message: "创建api成功",
			data: {
				"Abc": 1234
			}
		});
	});



};




