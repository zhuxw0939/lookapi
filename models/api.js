
/**
 * Models User.
 */

var mongoDB = require('../common/mongoDB');
var logger = require('../common/logger');


/**
 * 根据ID，查找Api
 */
exports.getApiById = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.api.findOne({ id: id }, callback);
};


/**
 * 根据GroupId获取Apis
 * 支持g_id为多项
 */
exports.getApisByIdGroupId = function (g_id, callback) {
	if (!g_id) {
		return callback();
	}
	var options = {};
	if(typeof g_id==="object"){
		logger.debug("===object");
		options.group_id = {$in:g_id};
	} else {
		logger.debug("!==object");
		options.group_id = g_id;
	}
	logger.debug(options);
	mongoDB.api.find(options, {}, { sort:{create_time:-1}, limit: 500 }, callback);
};

/**
 * 根据多种查询条件获取Api
 * 支持g_id为多项
 */
exports.getApis = function (p_id, v_id, g_id, callback) {
	if (!p_id) {
		return callback();
	}
	var options = {};
	if(p_id!=undefined) options.project_id = p_id;
	if(v_id!=undefined) options.version_id = v_id;
	if(g_id!=undefined && typeof(g_id)=="object"){
		options.group_id = {$in:g_id};
	} else if(g_id!=undefined) {
		options.group_id = g_id;
	}
	mongoDB.api.find(options, {}, { sort:{create_time:-1}, limit: 500 }, callback);
};


/**
 * 根据多种查询条件获取Api
 * 支持g_id为多项
 * 并且支持type
 */
exports.getApisByType = function (p_id, v_id, g_id, type, callback) {
	if (!p_id) {
		return callback();
	}
	var options = {};
	if(p_id!=undefined) options.project_id = p_id;
	if(v_id!=undefined) options.version_id = v_id;
	if(type!=undefined){
		options.type = type;
	} else {
		options.type = 0;
	}
	if(g_id!=undefined && typeof(g_id)=="object"){
		options.group_id = {$in:g_id};
	} else if(g_id!=undefined) {
		options.group_id = g_id;
	}
	mongoDB.api.find(options, {}, { sort:{create_time:-1}, limit: 500 }, callback);
};





/**
 * 根据多种查询条件获取Api
 * 支持g_id为多项
 * 并且支持type
 * 按修改时间排序
 */
exports.getApisByTypeSortByUpdate = function (p_id, v_id, g_id, type, callback) {
	if (!p_id) {
		return callback();
	}
	var options = {};
	if(p_id!=undefined) options.project_id = p_id;
	if(v_id!=undefined) options.version_id = v_id;
	if(type!=undefined){
		options.type = type;
	} else {
		options.type = 0;
	}
	if(g_id!=undefined && typeof(g_id)=="object"){
		options.group_id = {$in:g_id};
	} else if(g_id!=undefined) {
		options.group_id = g_id;
	}
	mongoDB.api.find(options, {}, { sort:{update_time:-1}, limit: 500 }, callback);
	// 和上面的函数完全一样，除了最后一行
};



/**
 * 根据v_id和url，查找Api
 * 用于新建url是查看是否有相同的api，防止添加相同的接口
 */
exports.getApisByUrl = function (v_id, url, callback) {
	if (!v_id || !url) {
		return callback();
	}
	mongoDB.api.find({ version_id: v_id, url: url, type:{ $ne:2} }, { id: 1, name: 1, _id: 0 }, callback);
};


/**
 * 根据v_id和url，查找Api，只会查找一个
 */
exports.getApiByUrl = function (v_id, url, callback) {
	if (!v_id || !url) {
		return callback();
	}
	mongoDB.api.findOne({ version_id: v_id, url: url, type:{ $ne:2} }, {}, callback);
};


/**
 * 根据v_id和swagger_id，查找Api，只会查找一个
 * 限制type==0
 */
exports.getApiBySwaggerId = function (v_id, swagger_id, callback) {
	if (!v_id || !swagger_id) {
		return callback();
	}
	mongoDB.api.findOne({ version_id: v_id, swagger_id: swagger_id, type:{ $ne:2} }, {}, callback);
};


/**
 * 根据v_id和swagger_id，查找Api，查找多个
 * 不限制type
 */
exports.getApisBySwaggerId = function (v_id, swagger_id, callback) {
	if (!v_id || !swagger_id) {
		return callback();
	}
	mongoDB.api.find({ version_id: v_id, swagger_id: swagger_id }, {}, {sort:{update_time:-1}, limit: 500}, callback);
};

/**
 * 根据v_id和url_full，查找Api，只会查找一个
 */
exports.getApiByUrlFull = function (v_id, url_full, callback) {
	if (!v_id || !url_full) {
		return callback();
	}
	mongoDB.api.findOne({ version_id: v_id, url_full: url_full, type:{ $ne:2} }, { id: 1, back_data: 1, mock_template: 1, _id: 0 }, callback);
};


/**
 * 根据v_id查找Api，查询某个版本下的所有api
 */
exports.getApisByVid = function (v_id, callback) {
	if (!v_id) {
		return callback();
	}
	mongoDB.api.find({version_id: v_id, type:{ $ne:2}}, { type:1, name:1, id:1, url:1, _id:0 }, {sort:{time:-1}, limit: 500}, callback);
};


/**
 * 根据fun_name和v_id，查找Api
 * 主要用于fun_name是否重复
 */
exports.getApisByFunName = function (v_id, fun_name, callback) {
	if (!v_id || !fun_name) {
		return callback();
	}
	mongoDB.api.find({ version_id: v_id, fun_name: fun_name, type:{ $ne:2} }, {}, callback);
};



/**
 * 创建Api
 */
exports.createApi = function (options, callback) {
	if (!options) {
		return callback();
	}
	mongoDB.api.create(options, callback);
};

/**
 * 编辑Api
 */
exports.updateApi = function (id, options, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.api.update({
		id: id
	}, {
		$set : options
	}, callback);
};

/**
 * 更新ApiUpdates
 */
exports.updateApiUpdates = function (id, arr, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.api.update({
		id: id
	}, {
		"$push" : { updates: arr }
	}, callback);
};


/**
 * 删除Api
 */
exports.removeApiById = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.api.remove({id:id}, callback);
};

/**
 * 删除Api-多个
 */
exports.removeApiByIds = function (ids, callback) {
	if (!ids) {
		return callback();
	}
	ids = ids.split(",");
	mongoDB.api.remove({id:{$in:ids}}, callback);
};


