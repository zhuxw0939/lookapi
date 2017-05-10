"use strict";

var authModel = require('../models/auth');
var projectModel = require('../models/project');
var userModel = require('../models/user');
var cacheModel = require('../models/cache');
var apiModel = require('../models/api');

// 使用 Mock
var Mock = require('mockjs');


var logger = require('../common/logger');


exports.list = function (req, res, next) {
	res.locals.pageCurrent = 'mock';

	projectModel.getProjectsByUserId(req.session.user.id, function(err, data){
		logger.info(data);
		res.render('mock/list', {
			data: data
		});
	});

};



exports.url = function (req, res, next) {
	logger.info("mock/url come +");
	logger.info(req.body);

	if(req.body.swagger_id!=undefined&&req.body.swagger_id!=""){
		logger.info("getMockData by swagger_id +++++++++++++++++++++++++++++++++++++++++++++++~");
		apiModel.getApiBySwaggerId(req.body.v_id, req.body.swagger_id, function(error, data){
			if(error){
				logger.info("getMockData is error~");
				logger.info(error);
				res.send({
					status: -1,
					message: "获取数据错误，可能是mock服务器无法链接",
					data: error
				});
			} else if(!data) {
				res.send({
					status: 1,
					message: "没有找到这个api，swagger_id："+req.body.swagger_id
				});
			} else {
				// 这个和下面的完全一样的
				// logger.info(data.mock_template);
				if(typeof(data.mock_template) == "undefined" || data.mock_template == ""){
					// 没有设置mock模板，显示默认的返回结果
					logger.info("not mock_template");
					// logger.info(data.back_data);
					res.end(data.back_data);
				} else {
					logger.info("has mock_template");
					// logger.info(data.mock_template);
					try {
						var back_data = Mock.mock(JSON.parse(data.mock_template));
						// logger.info(back_data);
						res.send(back_data);
					} catch (error){
						res.send({
							status: 2,
							message: "mock_template错误，无法解析"
						});
					}

				}
			}

		});
	} else {
		logger.info("getMockData by url +++++++++++++++++++++++++++++++++++++++++++++++~");
		if(req.method !== 'GET'){
			var v_id = req.body.v_id;
			var url = req.body.url;
		} else {
			var v_id = req.query.v_id;
			var url = req.query.url;
		}

		apiModel.getApiByUrl(v_id, url, function(error, data){
			// logger.info("getMockData back~");
			// logger.info(data);
			if(error){
				logger.info("getMockData is error~");
				logger.info(error);
				res.send({
					status: -1,
					message: "获取数据错误，可能是mock服务器无法链接",
					data: error
				});
			} else if(!data) {
				var url_full = url.split("/");
				url_full.pop();
				url_full = url_full.join("/");
				logger.info(" *** url_full ***");
				// logger.info(url_full);
				apiModel.getApiByUrlFull(v_id, url_full, function(error, data){
					if(error){
						logger.info("getMockData is error~");
						logger.info(error);
						res.send({
							status: -1,
							message: "获取数据错误，可能是mock服务器无法链接",
							data: error
						});
					} else if(!data) {
						res.send({
							status: 1,
							message: "没有找到这个api，url_full："+url_full
						});
					} else {
						// 这个和下面的完全一样的
						// logger.info(data.mock_template);
						if(typeof(data.mock_template) == "undefined" || data.mock_template == ""){
							// 没有设置mock模板，显示默认的返回结果
							logger.info("not mock_template");
							// logger.info(data.back_data);
							res.send(data.back_data);
						} else {
							logger.info("has mock_template");
							// logger.info(data.mock_template);
							try {
								var back_data = Mock.mock(JSON.parse(data.mock_template));
								// logger.info(back_data);
								res.send(back_data);
							} catch (error){
								res.send({
									status: 2,
									message: "mock_template错误，无法解析"
								});
							}

						}
					}
				});
			} else {
				// 这个和上面的完全一样的
				// logger.info(data.mock_template);
				if(typeof(data.mock_template) == "undefined" || data.mock_template == ""){
					// 没有设置mock模板，显示默认的返回结果
					logger.info("not mock_template");
					// logger.info(data.back_data);
					res.send(data.back_data);
				} else {
					logger.info("has mock_template");
					// logger.info(data.mock_template);
					try {
						var back_data = Mock.mock(JSON.parse(data.mock_template));
						// logger.info(back_data);
						res.send(back_data);
					} catch (error){
						res.send({
							status: 2,
							message: "mock_template错误，无法解析"
						});
					}

				}
			}
		});
	}


};

