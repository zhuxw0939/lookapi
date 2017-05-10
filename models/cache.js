
/**
 * 缓存模块，从redis中读写数据.
 */

var mongoDB = require('../common/mongoDB');
var logger = require('../common/logger');



/**
 * 根据key读取redis
 */
exports.get = function (key, callback) {
	var t = new Date();
	redis.get(key, function (err, data) {
		if (err) {
			return callback(err);
		}
		if (!data) {
			return callback();
		}
		data = JSON.parse(data);
		var duration = (new Date() - t);
		logger.debug('Cache', 'get', key, (duration + 'ms').green);
		callback(null, data);
	});
};
