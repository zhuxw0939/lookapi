'use strict';

var express = require('express');
var async = require('async');
var request = require('request');

var config = require('../common/config');

var logger = require('../common/logger');








/*
 *** POST
 *
 * 【常用于自定义的请求，自己处理返回结果】
 * use : 常规用法，传一个obj进来，返回post请求的data结果。
 * back : json（标准的返回格式）
 * error : 如果请求失败，则返回标准的错误信息\
 *
 * status:0		成功
 * status:-1	sessionid失效
 * status:1		请求失败
 * status:>1	请求结果失败
 *
 *
 *
	 send.POST({
		 url: "XXX",
		 cookies: req.cookies,
		 data: JSON.parse(req.body.data)
	 }, function(data){
		 res.end(data);
	 });
 *
*/
exports.POST = function(obj, callback){

	logger.info(obj);
	var sessionID = obj.env.session_id;
	var serverURL =  obj.env.host;
	if(!sessionID){
		callback(JSON.stringify({
			status: -1,
			message: "sessionid为空",
			data: ""
		}));
	}
	if(!serverURL){
		serverURL = config.server.host;
	}
	logger.info(sessionID);
	logger.info(serverURL);

	logger.info("-------------------------------------------");

	var url = serverURL+obj.url;
	var urlData = obj.data;
	logger.info("POST: "+url);
	logger.info(urlData);

	request.post({
		url: url,
		qs: urlData,
		headers: {
			'X-Custom-Header': 'Bumbaway atuna',
			'Content-Type': 'application/json',
			'Cookie': 'sessionid='+sessionID
		}
	}, function (error, response, body) {
		logger.info(" POST: ~~~~~~ back ");
		logger.info(body);
		if(error){
			logger.info("error: "+error);
			callback(JSON.stringify({
				status: 1,
				message: "数据获取失败",
				data: JSON.stringify(error)
			}))	;
		} else {
			try {
				var body = JSON.parse(body);
				callback(JSON.stringify({
					status: 0,
					message: "",
					data: body
				}));
			} catch(error) {
				logger.info(error);
				logger.info("catch error: "+"数据获取错误");
				if(body=="") {
					callback(JSON.stringify({
						status: 2,
						message: "数据获取错误，返回为空!",
						data: body
					}));
				} else {
					callback(JSON.stringify({
						status: 3,
						message: "数据获取错误，可能是url或参数错误，或者返回数据不是一个标准的json格式!",
						data: body
					}));
				}
			}
		}
	});
};



exports.GET = function(obj, callback){
	logger.info(obj);
	if(obj.url==""){
		return callback(JSON.stringify({
			status: -1,
			message: "url不能为空"
		}));
	}

	var getUrl = obj.url;
	if(obj.env.host){
		getUrl = obj.env.host+getUrl;
	}

	if(obj.data){
		getUrl += "?"
		for(var item in obj.data){
			getUrl += item+'='+obj.data[item]+'&'
		}
	}
	logger.info("-------------------gogogogoog");
	logger.info(getUrl);
	request.get({
		url: getUrl,
		headers: {
			apikey: '8dc31abb44e07f2bbefb7e0af68c6271'
		}
	}, function (error, response, body) {
		logger.info("-------------------backback");
		logger.info(body);
		logger.info(response);
		logger.info(error);
		if(error){
			callback(JSON.stringify({
				status: -3,
				message: "数据获取错误",
				data: error
			}));
		} else {
			try {
				body = JSON.parse(body);
				callback(JSON.stringify({
					status: 0,
					message: "",
					data: body
				}));
			} catch(error) {
				logger.info(error);
				logger.info("catch error: "+"数据获取错误");
				if(body=="") {
					callback(JSON.stringify({
						status: 2,
						message: "数据获取错误，返回为空!",
						data: body
					}));
				} else {
					callback(JSON.stringify({
						status: 3,
						message: "数据获取错误，可能是url或参数错误，或者返回数据不是一个标准的json格式!",
						data: body
					}));
				}
			}
		}
	});
};


