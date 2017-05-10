
/**
 * 用户的测试环境.
 */

var mongoDB = require('../../common/mongoDB');
var logger = require('../../common/logger');


/**
 * 根据用户ID，查找用户的测试环境
 * Callback:
 */
exports.getEnvByUserId = function (uid, callback) {
	if (!uid) {
		return callback();
	}
	mongoDB.userEnv.find({ user_id: uid }, callback);
};


/**
 * 添加环境
 */
exports.createUserEnv = function (options, callback) {
	if (!options) {
		return callback();
	}
	mongoDB.userEnv.create(options, callback);
};

/**
 * 编辑环境
 */
exports.updateEnvPost = function (id, options, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.userEnv.update({
		id : id
	}, {
		$set : options
	}, callback);
};

/**
 * 删除环境
 */
exports.removeEnvPost = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.userEnv.remove( {id: id}, callback);
};


