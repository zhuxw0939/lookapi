'use strict';

var express = require('express');
var async = require('async');
var eventproxy = require('eventproxy');
var request = require('request');

var config = require('../common/config');
var redisDB = require('../common/redisDB');
var logger = require('../common/logger');



// POST
exports.POST = function(obj, callback){
	exports.sendRequest(obj, callback, "post");
};

// GET
exports.GET = function(obj, callback){
	exports.sendRequest(obj, callback, "get");
};

// 需要考虑redis的post方法
exports.sendRequest = function(obj, callback, type){

	// 请求完毕是否向redis中写入数据
	var redisWrite = false;

	async.auto({
		getRedis: function(callback) {
			if(obj.redis){
				redisDB.get(obj.redis, function(error, data) {
					if(error){
						callback(error);
					} else {
						if(data) {
							callback(null, data);
						} else {
							// 设置了从redis中取值，但是没有取到值
							// 此时就需要给redis中写入新post取到的值
							redisWrite = true;
							callback(null);
						}
					}
				});
			} else {
				callback(null);
			}
		},
		getPost: ['getRedis', function(results, callback) {
			if(results.getRedis){
				logger.info("将从redis中取值:");
				logger.info(results.getRedis);

				// 保存api，仅debug环境
				if(config.debug){
					apiSaves("POST", "redis", obj.redis, obj.data, results.getRedis);
				}
				callback(null, results.getRedis);
			} else if(config.mock.open){
				logger.info("将从mock中取值:");
				var formData = {
					url: obj.url,
					v_id: config.mock.v_id,
					data: obj.data
				};
				logger.info(config.mock.host);
				logger.info(formData);

				// 开始post请求
				var t = new Date();
				request.post({
					url: config.mock.host,
					form: formData,
					headers: config.mock.headers
				}, function (error, response, body) {

					var rTime = new Date()-t;
					logger.info("从mock中取值 back+++");
					logger.debug('POSTMock', '::: back :::', obj, ( rTime + 'ms').green);
					logger.info(body);

					// 保存api，仅debug环境
					if(config.debug){
						apiSaves("POST", "mock", config.mock.host, formData, body, rTime);
					}
					goBack(error, response, body, callback);

				});
			} else {
				logger.info("将从servers中取值:");

				// 开始post请求
				var t = new Date();
				if(type=="post"){
					request.post({
						url: config.servers.host+obj.url,
						form: obj.data,
						headers: config.servers.headers
					}, function (error, response, body) {

						var rTime = new Date()-t;
						logger.debug('POST', '::: back :::', obj, ( rTime + 'ms').green);
						logger.info(body);

						// 保存api，仅debug环境
						if(config.debug){
							apiSaves("POST", "servers", config.servers.host+obj.url, obj.data, body, rTime);
						}

						goBack(error, response, body, callback);
					});
				} else if(type=="get"){
					request.get({
						url: config.servers.host+obj.url,
						qs: obj.data
					}, function (error, response, body) {

						var rTime = new Date()-t;
						logger.debug('GET', '::: back :::', obj, ( rTime + 'ms').green);
						logger.info(body);

						// 保存api，仅debug环境
						if(config.debug){
							apiSaves("GET", "servers", config.servers.host+obj.url, obj.data, body, rTime);
						}

						goBack(error, response, body, callback);
					});
				}
			}
		}]
	}, function(error, results) {
		if(error){
			callback(error);
		} else {
			callback(null, results.getPost);
		}
	});
};

function goBack(error, response, body, callback){
	if(error){
		logger.info("POST: ~~~~~~ error: "+error);
		callback('获取数据失败');
	} else {
		try {
			var bodyObject = JSON.parse(body);
			callback(null, bodyObject);
		} catch(error) {
			logger.info("catch error: ");
			logger.info(error);
			if(body=="") {
				callback('返回为空!');
			} else {
				callback('返回数据不是一个标准的json格式!');
			}
		}
	}
}


exports.ajaxGet = function(url, obj, callback){

	logger.info("--------------- ajaxGet-----------------");
	logger.info(url);
	logger.info(obj);

	var reg = /((https|http):\/\/)/g;
	if(!reg.test(url)){
		logger.info("url不是以http://https://开头");
		url = config.servers.host+url;
	} else {
		logger.info("url以http://开头");
	}

	logger.info(url);

	// url = config.servers.host+url+"?auth_token="+obj.auth_token;

	// auth

	// 开始post请求
	var t = new Date();
	request.get({
		url: url,
		qs: obj
	}, function (error, response, body) {
		logger.debug('ajaxGet', '::: back ::: '+url, obj, ((new Date() - t) + 'ms').green);
		logger.info(body);

		goBack(error, response, body, callback);
	});
};
function apiSaves(sendType, serverType, url, data, body, time){
	// logger.info("apiSaves function");
	// logger.info(sendType);
	// logger.info(serverType);
	// logger.info(url);
	// logger.info(data);
	// logger.info(body);
	// logger.info(time);

	// 开始post请求
	var t = new Date();
	request.post({
		url: config.mock.saveApiHost,
		form: {
			requests : sendType,
			server_type : serverType,
			url : url,
			parameters : JSON.stringify(data),
			back_data : body,
			send_time : time,
			project_id : config.mock.p_id
		},
		headers: config.mock.headers
	}, function (error, response, body) {
		var rTime = new Date()-t;
		if(error){
			logger.info(error);
		} else {
			logger.info("apiSaves success "+rTime+"ms");
		}
		// logger.info("apiSaves back+++");
		// logger.debug('apiSaves', '::: back :::', url, ( rTime + 'ms').green);
		// logger.info(body);
	});
}
