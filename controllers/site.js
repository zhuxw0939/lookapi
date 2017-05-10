"use strict";

var config=require('../common/config');
var fs=require('fs');
var eventproxy = require('eventproxy');
var moment = require('moment');

var authModel = require('../models/auth');
var projectModel = require('../models/project');
var apiModel = require('../models/api');
var cacheModel = require('../models/cache');

var logger = require('../common/logger');


exports.index = function (req, res, next) {
	res.locals.pageCurrent = 'home';
	// type=1,表示公司项目
	projectModel.getProjectsByType(1, function(err, data){
		logger.info(data);
		if(err){
			logger.info(err);
			res.render('index');
		} else {
			res.render('index', {
				Projects : data
			});
		}
	});
};

