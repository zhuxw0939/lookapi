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

// DELETE
exports.DELETE = function(obj, callback){
	exports.sendRequest(obj, callback, "delete");
};

// 需要考虑redis的post方法
exports.sendRequest = function(obj, callback, type){

	if(typeof(obj.body)=="object"){
		for(let prop in obj.body){
			if(obj.body[prop]===""){
				logger.info("body参数中："+prop+"属性为空，已忽略！");
				delete obj.body[prop];
			}
		}
	}
	if(typeof(obj.query)=="object"){
		for(let prop in obj.query){
			if(obj.query[prop]===""){
				logger.info("form参数中："+prop+"属性为空，已忽略！");
				delete obj.query[prop];
			}
		}
	}

	// 请求完毕是否向redis中写入数据
	var redisWrite = false;


	if( (config.mock.open&&(obj.servers==undefined||obj.servers!=true)) || obj.mock!=undefined&&obj.mock==true ){
		// } else if(config.mock.open){
		logger.info("将从mock中取值:");
		var formData = {
			url: obj.url,
			v_id: config.mock.v_id,
			swagger_id: obj.swaggerId!=undefined?obj.swaggerId:"",
			data: obj.data
		};
		logger.info(config.mock.url);
		logger.info(formData);

		// 开始post请求
		var t = new Date();
		request.post({
			url: config.mock.url,
			form: formData,
			headers: config.mock.headers
		}, function (error, response, body) {

			var rTime = new Date()-t;
			logger.info('POSTMock', '::: back :::', obj, ( rTime + 'ms').green);
			logger.info(JSON.stringify(obj, null, "\t"));
			logger.info(body);

			// 保存api，仅debug环境
			if(config.debug){
				apiSaves("POST", "mock", config.mock.url, obj, body, rTime);
			}
			goBack(error, response, body, callback);

		});
	} else {

		let url = obj.host!=undefined ? obj.host+obj.url : config.servers.host+obj.url;
		let bodyObj = obj.body;
		let queryObj = obj.query;
		let headers = obj.header!=undefined ? obj.header : config.servers.headers;
		logger.info("从servers端发送post:"+url);

		if(obj.token!=undefined){
			headers.TOKEN = obj.token;
		}

		// 组装参数
		var sendObj;
		if(type=="post"){
			sendObj = {
				url: url,
				json: true,
				headers: headers
			};
			// 如果传了body
			if(bodyObj){
				sendObj.body = bodyObj
			}
			if(queryObj){
				var formPropsIndex=0;
				for(var formProps in queryObj){
					if(formPropsIndex==0){
						sendObj.url += "?"+formProps+"="+queryObj[formProps]
					} else {
						sendObj.url += "&"+formProps+"="+queryObj[formProps]
					}
					formPropsIndex ++ ;
				}
			}
		} else if(type=="get"){
			if(queryObj){
				var formPropsIndex=0;
				for(var formProps in queryObj){
					if(formPropsIndex==0){
						url += "?"+formProps+"="+queryObj[formProps]
					} else {
						url += "&"+formProps+"="+queryObj[formProps]
					}
					formPropsIndex ++ ;
				}
			}
			sendObj = {
				url: url,
				headers: headers
			};
			// 如果传了body则忽略form
			/*if(queryObj){
			 sendObj.qs = queryObj
			 }*/
		} else if(type=="delete"){
			sendObj = {
				url: url,
				headers: headers
			};
			// 如果传了body则忽略form
			if(queryObj){
				sendObj.qs = queryObj
			}
		}
		// logger.warn(sendObj);

		// 开始post请求
		var t = new Date();
		if(type=="post"){
			request.post(sendObj, function (error, response, body) {

				var rTime = new Date()-t;
				logger.info('POST', '::: back :::', ( rTime + 'ms').green);
				logger.info(JSON.stringify(sendObj, null, "\t"));
				logger.info(body);
				logger.info(( rTime + 'ms').magenta);

				// 保存api，仅debug环境
				if(config.debug && config.mock!=undefined && config.mock.saveApiHost){
					apiSaves("POST", "servers", config.servers.host+obj.url, obj, body, rTime);
				}

				goBack(error, response, body, callback);
			});
		} else if(type=="get"){
			request.get(sendObj, function (error, response, body) {

				var rTime = new Date()-t;
				logger.info('GET', '::: back :::', ( rTime + 'ms').green);
				logger.info(JSON.stringify(sendObj, null, "\t"));
				logger.info(body);
				logger.info(( rTime + 'ms').magenta);

				// 保存api，仅debug环境
				if(config.debug && config.mock!=undefined && config.mock.saveApiHost){
					apiSaves("GET", "servers", config.servers.host+obj.url, obj, body, rTime);
				}

				goBack(error, response, body, callback);
			});
		} else if(type=="delete"){
			request.delete(sendObj, function (error, response, body) {

				var rTime = new Date()-t;
				logger.info('DELETE', '::: back :::', ( rTime + 'ms').green);
				logger.info(JSON.stringify(sendObj, null, "\t"));
				logger.info(body);
				logger.info(( rTime + 'ms').magenta);

				// 保存api，仅debug环境
				if(config.debug && config.mock!=undefined && config.mock.saveApiHost){
					apiSaves("DELETE", "servers", config.servers.host+obj.url, obj, body, rTime);
				}

				goBack(error, response, body, callback);
			});
		}

	}

};


exports.testServersBack = function (req, res, next, error, data) {

	if(!data) {
		if(req.method !== 'GET'){
			res.status(405).send({
				status: -1,
				message: "serversApi返回data为空",
				data: data
			});
			return false;
		} else {
			next("serversApi返回data为空");
			return false;
		}
	} else if(typeof(data)!="object") {
		res.send({
			status: 0,
			message: "返回不是一个标准的json格式",
			data: data
		});
		return false;
	} else {
		if(data.status=="400"){
			res.send({
				status: 400,
				message: "没有返回200状态",
				data: data
			});
			return false;
		}
	}
	return true;
};



function goBack(error, response, body, callback){
	if(error){
		logger.info("Servers goBack: ~~~~~~ error: "+error);
		// callback('获取数据失败');
		callback(error);
	} else {
		try {
			if(typeof(body) == "object"){
				callback(null, body);
			} else {
				var bodyObject = JSON.parse(body);
				callback(null, bodyObject);
			}
		} catch(error) {
			logger.error("servers goBack catch error: ");
			logger.error(error);
			if(body==undefined) {
				logger.warn('返回为undefined!');
				callback(null, body);
			} else if (body=="") {
				logger.warn('返回为空字符串!');
				callback(null, body);
			} else {
				callback(null, body);
				// callback('返回不是一个标准的json格式：'+body);
				// callback(body);
			}
		}
	}
	return false;


	if(error){
		logger.info("Servers goBack: ~~~~~~ error: "+error);
		// callback('获取数据失败');
		callback(error);
	} else {
		try {
			if(typeof(body) == "object"){
				callback(null, body);
			} else {
				var bodyObject = JSON.parse(body);
				callback(null, bodyObject);
			}
		} catch(error) {
			logger.error("servers goBack catch error: ");
			logger.error(error);
			if(body==undefined) {
				callback('返回为undefined!');
			} else if (body=="") {
				callback('返回为空字符串!');
			} else {
				callback(null, body);
				// callback('返回不是一个标准的json格式：'+body);
				// callback(body);
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
	return false;


	var parametersData = {};
	if(serverType=="mock" && data.url){
		parametersData.url = data.url;
	}
	if(data.token){
		parametersData.TOKEN = data.token;
	}
	if(data.form && typeof(data.form)=="object" && JSON.stringify(data.form)!="{}"){
		parametersData.form = data.form;
	}
	if(data.body && typeof(data.form)=="object" && JSON.stringify(data.body)!="{}"){
		parametersData.body = data.body;
	}


	// 开始post请求
	var t = new Date();
	request.post({
		url: config.mock.saveApiHost,
		form: {
			requests : sendType,
			server_type : serverType,
			url : url,
			parameters : JSON.stringify(parametersData),
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
