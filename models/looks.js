
/**
 * Models User.
 */

var mongoDB = require('../common/mongoDB');
var logger = require('../common/logger');



/**
 * 创建Api
 */
exports.createApiSave = function (options, callback) {
	if (!options) {
		return callback();
	}
	mongoDB.apiSave.create(options, callback);
};



/**
 * 查看Api
 */
exports.getApiSaveByPid = function (p_id, callback) {
	if (!p_id) {
		return callback();
	}
	mongoDB.apiSave.find({ project_id: p_id }, {}, {sort:{time:-1}, limit: 50}, callback);
};


/**
 * 查看Api2
 */
exports.getApiSaveByPidAndUser = function (p_id, user, callback) {
	if (!p_id || !user) {
		return callback();
	}
	mongoDB.apiSave.find({ project_id: p_id, user: user}, {}, {sort:{time:-1}, limit: 50}, callback);
};


/**
 * 查看Api3
 */
exports.getApiSaveByPidAndSwaggerId = function (p_id, sw_id, callback) {
	if (!p_id || !sw_id) {
		return callback();
	}
	mongoDB.apiSave.find({ project_id: p_id, swagger_id: sw_id}, {}, {sort:{time:-1}, limit: 50}, callback);
};



/**
 * 获取Api
 */
exports.getApiSaveById = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.apiSave.findOne({ id: id }, callback);
};


