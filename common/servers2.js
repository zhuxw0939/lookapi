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

// PUT
exports.PUT = function(obj, callback){
	exports.sendRequest(obj, callback, "put");
};

// 需要考虑redis的post方法
exports.sendRequest = function(obj, callback, type){

	// 组装参数
	var sendObj;
	if(type=="POST" || type=="PUT"){
		sendObj = {
			url: obj.url,
			json: true,
			headers: JSON.parse(obj.headers)
		};
		// 如果传了body
		if(obj.body){
			sendObj.body = JSON.parse(obj.body)
		}
	} else if(type=="GET" || type=="DELETE"){
		sendObj = {
			url: obj.url,
			headers: JSON.parse(obj.headers)
		};
	}

	if(type=="POST"){
		request.post(sendObj, function (error, response, body) {
			callback(error, body);
		});
	} else if(type=="GET"){
		request.get(sendObj, function (error, response, body) {
			logger.info(sendObj);
			logger.info(error);
			logger.info(body);
			callback(error, body);
		});
	} else if(type=="DELETE"){
		request.delete(sendObj, function (error, response, body) {
			callback(error, body);
		});
	} else if(type=="PUT"){
		request.put(sendObj, function (error, response, body) {
			callback(error, body);
		});
	}

};



