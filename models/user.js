
/**
 * Models User.
 */

var mongoDB = require('../common/mongoDB');
var logger = require('../common/logger');


/**
 * 根据用户Email，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} email 用户Email
 * @param {Function} callback 回调函数
 */
exports.getUserByEmail = function (email, callback) {
	if (!email) {
		return callback();
	}
	mongoDB.user.findOne({email: email}, callback);
};


/**
 * 根据用户ID，查找用户
 * Callback:
 */
exports.getUserById = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.user.findOne({id: id}, callback);
};


/**
 * 根据用户ID，查找用户信息，返回对象
 * Callback:用户信息或null
 */
exports.getUserInfo = function (id, callback) {
	if (!id) {
		return null;
	}
	mongoDB.user.findOne({id: id}, {_id:0, __v:0}, function(err, data){
		if(data){
			return data;
		} else {
			return null;
		}
	});
};

/**
 * 根据用户ID数组，返回多个用户信息
 *
 */
exports.getUsersByIds = function (idArr, callback) {
	logger.info("---------------getUsersByIds-----------------");
	logger.info(idArr);
	if (!idArr) {
		return null;
	}
	mongoDB.user.find({id: {$in: idArr}}, {name:1, email:1, id:1, _id:0}, callback);
};






/**
 * 注册用户
 *
 */
exports.createUser = function (options, callback) {
	if (!options) {
		return null;
	}
	mongoDB.user.create(options, callback);
};


/**
 * 修改个人资料
 *
 */
exports.updateUserById = function (id, obj, callback) {
	if (!id) {
		return null;
	}
	mongoDB.user.update({
		id: id
	}, {
		$set : obj
	}, callback);
};


/**
 * 检查用户输入的密码是否正确
 *
 */
exports.checkUserPassword = function (id, pass, callback) {
	if (!pass) {
		callback(false);
	}
	// 检查旧密码是否输入正确
	mongoDB.user.findOne({ id: id }, function(error, data){
		if(error){
			callback(false);
		} else {
			if(data){
				if(data.password===pass){
					// 验证正确
					callback(true);
				} else {
					callback(false);
				}
			} else {
				callback(false);
			}
		}
	});
};








/**
 * 根据用户ID，查找用户的测试环境
 * Callback:
 */
exports.getEnvByUserId = function (uid, callback) {
	if (!uid) {
		return callback();
	}
	mongoDB.userEnv.find({ user_id: uid }, {}, { sort:{create_time:-1} }, callback);
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
















/**
 * 查找所有消息
 */
exports.getMessageByUserId = function (uid, callback) {
	if (!uid) {
		return callback();
	}
	mongoDB.userMessage.find({ user_id: uid }, {}, { sort:{create_time:-1} }, callback);
};

/**
 * 查找新消息
 */
exports.getNewMessageByUserId = function (uid, callback) {
	if (!uid) {
		return callback();
	}
	mongoDB.userMessage.find({ user_id:uid, is_read:false }, {}, { sort:{create_time:-1} }, callback);
};


/**
 * 添加消息
 */
exports.createUserMessage = function (options, callback) {
	if (!options) {
		return callback();
	}
	mongoDB.userMessage.create(options, callback);
};


/**
 * 消息设为已读
 * @idArr		message_id数组
 */
exports.setMessageIsRead = function (idArr, callback) {
	if (!idArr) {
		return callback("mArr不能为空");
	}
	mongoDB.userMessage.update({id: {$in: idArr}}, {is_read: true}, {multi:true}, callback);
};

/**
 * 删除消息
 */
exports.removeMessageById = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.userMessage.remove( {id: id}, callback);
};



