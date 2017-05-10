
/**
 * res.locals 模块
 * 主要用于向页面发送常用数据
 */


var config = require('../common/config');

var logger = require('../common/logger');



/**
 * api-routes
 */
var apiCurrent = "project";
exports.apiCreate = function (req, res, next) {
	res.locals.pageCurrent = apiCurrent;
	res.locals.formCurrent = "create";
	res.locals.options = config.options;
	next();
};
exports.apiUpdate = function (req, res, next) {
	res.locals.pageCurrent = apiCurrent;
	res.locals.formCurrent = "update";
	res.locals.options = config.options;
	next();
};
exports.apiTest = function (req, res, next) {
	res.locals.pageCurrent = "apitest";
	res.locals.options = config.options;
	next();
};


exports.projectUpdate = function (req, res, next) {
	res.locals.pageCurrent = "project";
	res.locals.query = req.query;
	next();
};
exports.projectVersion = function (req, res, next) {
	res.locals.pageCurrent = "project";
	res.locals.query = req.query;
	next();
};
exports.projectTeam = function (req, res, next) {
	res.locals.pageCurrent = "project";
	res.locals.query = req.query;
	next();
};


