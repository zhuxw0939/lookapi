
/**
 * Models User.
 */

var mongoDB = require('../common/mongoDB');
var logger = require('../common/logger');



/**
 * 根据项目ID，查找项目
 */
exports.getProjectById = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.project.findOne({ id: id }, callback);
};

/**
 * 根据用户ID，查找项目
 * 包括自己创建的，和自己协作的项目
 */
exports.getProjectsByUserId = function (uid, callback) {
	if (!uid) {
		return callback();
	}
	mongoDB.project.find({"$or":[{ user_id: uid },{ team_ids: uid }]}, {}, { sort:{create_time:-1}, limit: 50 }, callback);
};

/**
 * 根据用户ID，查找项目
 * 只包括自己创建的
 */
exports.getMyProjectsByUserId = function (uid, callback) {
	if (!uid) {
		return callback();
	}
	mongoDB.project.find({ user_id: uid }, {}, { sort:{create_time:-1}, limit: 50 }, callback);
};


/**
 * 根据type，查找项目,
 * type=0 - 默认
 * type=1 - 公司项目
 */
exports.getProjectsByType = function (type, callback) {
	if (!type) {
		return callback("type不能为空");
	}
	mongoDB.project.find({ type: type }, {}, { sort:{create_time:-1}, limit: 50 }, callback);
};




/**
 * 创建项目
 * Callback:
 */
exports.createProject = function (options, callback) {
	if (!options) {
		return callback();
	}
	mongoDB.project.create(options, callback);
};

/**
 * 编辑项目
 * Callback:
 */
exports.updateProject = function (id, options, callback) {
	if (!id) {
		return callback("项目id不能为空");
	}
	mongoDB.project.update({
		id: id
	}, {
		$set : options
	}, callback);
};

/**
 * 更新项目里的创建者姓名
 * Callback:
 */
exports.updateProjectsUser = function (u_id, u_name, callback) {
	if (!u_id || !u_name) {
		return callback("id不能为空");
	}
	mongoDB.project.update({
		user_id: u_id
	}, {
		$set : {
			user_name: u_name
		}
	}, {
		multi: true
	}, callback);
};


/**
 * 添加项目协作成员
 *
 */
exports.userJoinTeam = function (u_id, p_id, callback) {
	if (!u_id || !p_id) {
		return callback("id不能为空");
	}
	mongoDB.project.update({
		id: p_id
	}, {
		$addToSet : {
			team_ids: u_id
		}
	}, callback);
};
/**
 * 删除项目协作成员
 *
 */
exports.removeTeamAdmin = function (p_id, u_id, callback) {
	if (!p_id || !u_id) {
		return callback("id不能为空");
	}
	mongoDB.project.update({
		id: p_id
	}, {
		$pull : {
			team_ids: u_id
		}
	}, callback);
};




/**
 * 删除项目
 * Callback:
 */
exports.removeProjectById = function (id, callback) {
	if (!id) {
		return callback();
	}
	// 硬删除
	mongoDB.project.remove({ id: id }, callback);
};











/**
 * 创建版本
 * Callback:
 */
exports.createVersion = function (options, callback) {
	if (!options) {
		return callback();
	}
	mongoDB.projectVersion.create(options, callback);
};

/**
 * 获取一个项目的所有版本号数据
 */
exports.getVersionsByPid = function (p_id, callback) {
	if (!p_id) {
		return callback();
	}
	mongoDB.projectVersion.find({ project_id: p_id }, callback);
};

/**
 * 根据项目id和某版本号名称获取一个版本号的数据
 */
exports.getVersionByName = function (p_id, v_name, callback) {
	if (!p_id || !v_name) {
		return callback();
	}
	mongoDB.projectVersion.findOne({ project_ic: p_id, name: v_name }, callback);
};

/**
 * 根据id删除某个版本号
 */
exports.removeVersionById = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.projectVersion.remove({ id: id }, callback);
};

/**
 * 设置某项目的某个版本号为默认
 */
exports.setDefaultVersionById = function (p_id, v_id, v_name, callback) {
	if (!p_id || !v_id || !v_name) {
		return callback("p_id或v_id或v_name不能为空");
	}
	mongoDB.project.update({
		id: p_id
	}, {
		$set : {
			version_id	: v_id,
			version_name: v_name
		}
	}, callback);
};




/**
 * 根据p_id和v_name获取版本id
 *
 * @p_id  		项目id
 * @v_name 		版本号名称
 *
 * [callback] 	版本id
 */
exports.getVersionId = function (p_id, v_name, callback) {
	if (!p_id || !v_name) {
		return callback("p_id或v_name不能为空");
	}
	mongoDB.projectVersion.findOne({ project_id: p_id, name: v_name }, function(err, data){
		if(err){
			return callback(err);
		}
		if(data && data.id){
			return callback(null, data.id);
		} else {
			return callback("没有查询到数据");
		}
	});
};





/**
 * 获取栏目-根据栏目id
 */
exports.getGroupById = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.projectGroup.findOne({id:id}, callback);
};


/**
 * 获取栏目-根据栏目名称
 */
exports.getGroupByName = function (v_id, name, callback) {
	if (!v_id || !name) {
		return callback();
	}
	mongoDB.projectGroup.findOne({version_id: v_id, name:name}, callback);
};


/**
 * 获取栏目-根据版本id
 * v_id必传
 * level必传，为空或为0时取所有
 */
exports.getGroupByVersionId = function (v_id, level, callback) {
	if (!v_id) {
		return callback();
	}
	var options = {};
	if(level==0 || level==""){
		options = {
			version_id: v_id
		};
	} else {
		options = {
			version_id: v_id,
			level: level
		};
	}
	mongoDB.projectGroup.find(options, {}, { sort:{sort:-1, create_time:1}, limit: 200 }, callback);
};


/**
 * 获取栏目-根据版本name
 * p_id必传
 * v_name必传
 * level必传，为空或为0时取所有
 */
exports.getGroupByVersionName = function (p_id, v_name, level, callback) {
	if (!p_id) {
		return callback();
	}
	// 先根据p_id和v_name获取版本号
	exports.getVersionId(p_id, v_name, function(err, v_id){
		// 再根据v_id和level获取栏目
		exports.getGroupByVersionId(v_id, level, callback);
	});
};

/**
 * 获取子栏目-根据father_id
 */
exports.getGroupByFatherId = function (f_id, callback) {
	if (!f_id) {
		return callback();
	}
	mongoDB.projectGroup.find({ father_id: f_id }, callback);
};





/**
 * 创建栏目
 */
exports.createGroup = function (options, callback) {
	if (!options) {
		return callback();
	}
	mongoDB.projectGroup.create(options, callback);
};

/**
 * 编辑栏目
 */
exports.updateGroup = function (id, options, callback) {
	if (!options) {
		return callback();
	}
	mongoDB.projectGroup.update({
		id: id
	}, {
		$set : options
	}, callback);
};

/**
 * 更新栏目swagger导入记录
 */
exports.updateGroupSwaggerHistory = function (id, arr, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.projectGroup.update({
		id: id
	}, {
		"$push" : { swagger_history: arr }
	}, callback);
};


/**
 * 删除栏目
 */
exports.removeGroupById = function (id, callback) {
	if (!id) {
		return callback();
	}
	mongoDB.projectGroup.remove({ id:id }, callback);
};

/**
 * 删除栏目-多个
 */
exports.removeGroupByIds = function (ids, callback) {
	if (!ids) {
		return callback();
	}
	ids = ids.split(",");
	mongoDB.projectGroup.remove({ id:{$in:ids} }, callback);
};





