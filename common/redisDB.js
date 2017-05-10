'use strict';

var express = require('express');
var redis = require('redis');

var config = require('../common/config');
var logger = require('../common/logger');




var client = redis.createClient(config.redisClientOptions);
client.on("error", function (err) {
	logger.info("Redis error - " + err);
});
client.on('ready', function(res){
	//logger.info('Redis ready');
});
client.on("connect", function(res){
	//logger.info('Redis connect');
	// do something
});


// get
exports.get = function(key, callback) {
	var t = new Date();
	client.get(key, function (err, data) {
		if(err) {
			return callback(err);
		}
		if (!data) {
			return callback();
		}
		data = JSON.parse(data);
		logger.debug('redis', '::: get :::', key, ((new Date() - t) + 'ms').green);
		callback(null, data);
	});
};

// set
exports.set = function(key, value, time, callback) {
	var t = new Date();

	if (typeof time === 'function') {
		callback = time;
		time = null;
	}
	callback = callback || function(){};
	value = JSON.stringify(value);

	if (!time) {
		client.set(key, value, callback);
	} else {
		client.setex(key, time, value, callback);
	}

	logger.debug('redis', '::: set :::', key, ((new Date() - t) + 'ms').green);
};


// 写入-String
exports.save = function(key, value) {
	// 不处理错误信息，即写入错误的也不管
	client.set(key, value, function (err, reply) {
		if(err) {
			logger.info(err);
			return next(new Error('redis保存数据失败 '+err));
		} else {
			logger.info(reply);
		}
	});
};

// 写入-String
// @time		key的生存时间(单位：秒)
exports.saveTtl = function(key, time, value) {
	// 不处理错误信息，即写入错误的也不管
	client.setex(key, time, value, function (err, reply) {
		if(err) {
			logger.info(err);
			return next(new Error('redis保存数据失败 '+err));
		} else {
			logger.info(reply);
		}
	});
};






