"use strict";

var request = require('request');
var fs=require('fs');
var eventproxy = require('eventproxy');
var moment = require('moment');
var _ = require('lodash');



var config=require('../common/config');
var apiModel = require('../models/api');
var makingApiModel = require('../models/makingapi');
var projectModel = require('../models/project')

var logger = require('../common/logger');





// swagger导入api
exports.swaggerImport = function (req, res, next) {

	// 读取swaggerApi文档
	if(req.body.swagger_url==undefined || req.body.swagger_url==""){
		res.send({
			status: "3",
			message: "swagger地址不能为空"
		});
		return false;
	}

	// 读取swaggerApi文档
	request.get({
		url: req.body.swagger_url,
		qs: {}
	}, function (error, response, body) {
		// logger.info(error);
		// logger.info(response);
		// logger.info(body);
		try{
			var data = JSON.parse(body);
		} catch (error){
			res.send({
				status: "1",
				message: "swagger地址错误，无法获取数据"
			});
			return false;
		}
		if(data.tags==undefined||data.paths==undefined){
			res.send({
				status: "2",
				message: "swagger无法获取数据"
			});
			return false;
		}

		/**
		 * 读取swagger.doc文档成功
		 *
		 * */

		// 根据swagger创建栏目
		exports.createSwaggerImportGroup(data, req, function(data, tags){
			logger.info("createApiGroup back ++++++");
			logger.info("共成功创建 "+ tags.length + " 个栏目");
			// logger.info(tags);

			if(typeof data != "object"){
				logger.info("创建栏目失败，导入中止");
				logger.info(data);
				next(data);
				return false;
			}

			// 创建api
			exports.createSwaggerImportApi(data, req, tags, function(saveFileName, pathsIndex){
				logger.info("createApiPP back ++++++");
				logger.warn(saveFileName);
				res.send({
					status: "0",
					message: "数据导入中，请稍后查看",
					data: saveFileName
				});
				var _req = req;
				setTimeout(() => {
					logger.info("10秒后开始写入导入记录");
					logger.info('public/build/'+saveFileName+'.txt');
					fs.readFile('public/build/'+saveFileName+'.txt', function(error, data){

						data += "";
						if(error){
							logger.error(error);
						} else {
							let reCancelNum = new RegExp("不导入这个接口","g");
							let reCancelArray = data.match(reCancelNum);
							var count_cancel = !reCancelArray ? 0 : reCancelArray.length;

							let reCreateNum = new RegExp("【创建接口】","g");
							let reCreateArray = data.match(reCreateNum);
							var count_create = !reCreateArray ? 0 : reCreateArray.length;

							let reUpdateNum = new RegExp("【更新接口】","g");
							let reUpdateArray = data.match(reUpdateNum);
							var count_update = !reUpdateArray ? 0 : reUpdateArray.length;

							projectModel.updateGroupSwaggerHistory(_req.body.g_id, {
								import_time: 	new Date(),
								update_id: 		_req.session.user.id,
								update_name:	_req.session.user.name,
								count_all: 		pathsIndex,
								count_cancel: 	count_cancel,
								count_create: 	count_create,
								count_update: 	count_update,
								count_fail: 	Number(pathsIndex)-(count_cancel+count_create+count_update),
								file_name: 		saveFileName
							}, function(err, bData){
								logger.error(err);
							})
						}
					});
				}, 10000);

			});
		});
	});
};


// swagger扫描，检查项目中是否有垃圾api存在
exports.swaggerRun = function (req, res, next) {

	/** 这块的代码一样*/
	// 读取swaggerApi文档
	if(req.body.swagger_url==undefined || req.body.swagger_url==""){
		res.send({
			status: "3",
			message: "swagger地址不能为空"
		});
		return false;
	}

	// 读取swaggerApi文档
	request.get({
		url: req.body.swagger_url,
		qs: {}
	}, function (error, response, body) {
		// logger.info(error);
		// logger.info(response);
		// logger.info(body);
		try{
			var data = JSON.parse(body);
		} catch (error){
			res.send({
				status: "1",
				message: "swagger地址错误，无法获取数据"
			});
			return false;
		}
		if(data.tags==undefined||data.paths==undefined){
			res.send({
				status: "2",
				message: "swagger无法获取数据"
			});
			return false;
		}
		/** 这块的代码一样*/

		/**
		 * 读取swagger.doc文档成功
		 *
		 * */

		// logger.info(data);
		logger.info("createApiGroup back ++++++");


		var backArray = [];
		var paths = data.paths;

		var ep = new eventproxy();
		ep.fail(next);

		// 异步读api
		// apiModel.getApisByVid(req.body.v_id, ep.done('data1'));

		projectModel.getGroupByFatherId( req.body.g_id, ep.done('data2') );
		ep.all('data2', function (data2) {
			logger.info(data2.length);

			var allGroupArray = [req.body.g_id];
			for(var j=0;j<data2.length;j++){
				allGroupArray.push(data2[j].id);
			}

			apiModel.getApisByType(req.body.p_id, req.body.v_id, allGroupArray, 0, function(error, data1){
				for(var i=0;i<data1.length;i++){
					backArray.push(data1[i].id);
				}
				logger.info(backArray);

				var pathsLength = 0;
				for (var url in paths){
					// if(url=="/api/v1/question/save/{courseId}" || url=="/api/v1/common/list_instructors/{phase}" || url=="/api/v1/setting-touched-line/create/{examId}" || url=="/api/v1/setting-class-part/page") {
					if(1) {
						pathsLength++;
						// 根据请求方式获取数据
						var nextObject;
						if(paths[url].get != undefined) {
							nextObject = paths[url].get;
						} else if (paths[url].post != undefined) {
							nextObject = paths[url].post;
						} else if (paths[url].put != undefined) {
							nextObject = paths[url].put;
						} else if (paths[url].delete != undefined) {
							nextObject = paths[url].delete;
						} else if (paths[url].patch != undefined) {
							nextObject = paths[url].patch;
						} else {
							logger.info("不支持的请求类型");
							nextObject = "";
						}
						findThisApiIsOreNot(nextObject.operationId);
					}
				}

				ep.after('got_tags', pathsLength, function (list) {
					// logger.info("***************************** got_tags over *******************************");
					// logger.info(backArray.length);
					// logger.info(list.length);
					try {
						var backIds = arrayMinus(backArray, list);

						if(backArray.length<list.length){
							res.send({
								status: 1,
								message: "swagger文档中的api数量小于目前版本的api数量，请重新导入后再扫描！",
								data: backIds
							});
						} else {
							res.send({
								status: 0,
								message: "返回成功",
								data: backIds
							});
						}
					} catch (error) {
						res.send({
							status: 2,
							message: "返回失败",
							error: error
						});
					}

					function arrayMinus(arr1, arr2) {
						var set1 = new Set(arr1);
						var set2 = new Set(arr2);
						var subset = [];
						for (let item of set1) {
							if (!set2.has(item)) {
								subset.push(item);
							}
						}
						return subset;
					}
				});

				function findThisApiIsOreNot(swagger_id){
					// logger.info(swagger_id);
					apiModel.getApiBySwaggerId(req.body.v_id, swagger_id, function(error, data){
						if(error) {
							logger.info(error);
						} else if(data) {
							// backArray = backArray.filter(function(i){return i==data.id});
							ep.emit('got_tags', data.id);
						} else {
							ep.emit('got_tags');
						}
					});
				}
			});



		});

		// 首先根据v_id查找这个版本下type不等于2的所有api，并将api的id和swagger_id记录下来

		// 循环从swagger地址中返回的data.operationId，从mongodb中查找版本号为v_id，且type!=2的api接口是否存在
		// 有的话跳过，不存在的话记录下来


		return false;

	});
};

// 内部模块 -- 创建栏目
exports.createSwaggerImportGroup = function (data, req, callback) {

	var tags = data.tags;
	// logger.info(tags);

	var ep = new eventproxy();
	ep.fail(callback);

	ep.after('got_tags', tags.length, function (list) {
		// logger.info(list);
		callback(data, tags);
	});
	for (var i=0;i<tags.length;i++) {
		var description = tags[i].description;
		// logger.info(description);

		backCreate(description);

	}

	function backCreate(description){
		// 根据名称查询是否已经有该栏目了，有的话则不再创建，把该栏目的id和tags绑定
		projectModel.getGroupByName(req.body.v_id, description, function(error, findData){
			// logger.info(findData);
			if(error){
				// logger.info("*** 1 ***");
				// logger.info(error);
				ep.emit('got_tags', data);
			} else if(findData){ //有了栏目id了
				// logger.info("*** 2 ***");
				for(var j=0;j<tags.length;j++){
					if(tags[j].description==findData.name){
						tags[j].id=findData.id
					}
				}
				ep.emit('got_tags', data);
			} else {
				// logger.info("*** 3 ***");
				// 每次写入一个栏目
				projectModel.createGroup({
					name		: description,
					project_id	: req.body.p_id,
					level		: (req.body.g_id==undefined||req.body.g_id=="") ? 1 : 2,
					father_id	: (req.body.g_id==undefined||req.body.g_id=="") ? 0 : req.body.g_id,
					version_id	: req.body.v_id
				}, function(err, backdata){
					if(err){
						// logger.info(err);
					} else {
						// logger.info("添加栏目成功");
						// logger.info(backdata);
						for(var j=0;j<tags.length;j++){
							if(tags[j].description==backdata.name){
								tags[j].id=backdata.id
							}
						}
					}
					ep.emit('got_tags', data);
				});
			}
		});
	}

};



// 内部模块 -- 创建api
exports.createSwaggerImportApi = function (data, req, tags, callback) {
	logger.info("------------------- 创建api coming ----------------------");

	// mytest
	/*apiModel.getApiById("r10mMZKzne", function(error, data1){
		apiModel.getApiById("S1CV9lYGng", function(error2, data2){
			getUpdateInfo(data1, data2);
		});
	});
	return false;*/



	// api，以url为单位，以对象的方式存在，一个对象名就是一个url /api/v1/common/list_instructors/{phase}
	var paths = data.paths;

	// 方法片段，以方法名为单位，以对象的方式存在，一个对象名就是一个方法名 ExamScoreSuccessTableHeaderDTO
	var definitions = data.definitions;

	// logger.info(paths);
	// logger.info(definitions);

	var pathsIndex = 0;
	var saveFileName = String(Math.floor(Math.random()*100000));

	for (let url in paths){
		// if(url=="/api/v1/question/save/{courseId}" || url=="/api/v1/common/list_instructors/{phase}" || url=="/api/v1/setting-touched-line/create/{examId}" || url=="/api/v1/setting-class-part/page") {
		logger.debug("开始导入这个url："+url);
		if(1) {
			for(let pathType in paths[url] ){
				createApiStepONE( url, pathType, paths[url][pathType], saveFileName);
			}
		}
		pathsIndex++;
	}

	fs.writeFile('public/build/'+saveFileName+'.txt', "共扫描接口数量："+pathsIndex+"\r\n\r\n", function(){
		callback(saveFileName, pathsIndex);
	});




/*
	var setLock = setInterval(zxw, 1000);

	function zxw(backIndex, backArray){
		console.warn(backIndex);
		console.warn(backArray.length);
		if(backIndex==backArray.length){
			console.warn("backIndex==backArray.length");
			clearInterval(setLock);
		}
	}*/






	function createApiStepONE(url, pathType, urlData, saveFileName){
		// *** 首先根据url检查这个api是否在这个项目版本中已经存在
		// 不存在进入创建流程
		// 存在时比较时间是否有修改，有修改时更新api，否则跳过


		// 根据请求方式获取数据
		var urlDataNextKey;

		if(pathType === "get") {
			urlDataNextKey = urlData;
		} else if (pathType === "post") {
			urlDataNextKey = urlData;
		} else if (pathType === "put") {
			urlDataNextKey = urlData;
		} else if (pathType === "delete") {
			urlDataNextKey = urlData;
		} else if (pathType === "patch") {
			urlDataNextKey = urlData;
		} else {
			logger.info("不支持的请求类型");
			urlDataNextKey = "";
		}

		// if(urlData.get != undefined) {
		// 	urlDataNextKey = urlData.get;
		// } else if (urlData.post != undefined) {
		// 	urlDataNextKey = urlData.post;
		// } else if (urlData.put != undefined) {
		// 	urlDataNextKey = urlData.put;
		// } else if (urlData.delete != undefined) {
		// 	urlDataNextKey = urlData.delete;
		// } else if (urlData.patch != undefined) {
		// 	urlDataNextKey = urlData.patch;
		// } else {
		// 	logger.info("不支持的请求类型");
		// 	urlDataNextKey = "";
		// }

		var swagger_id = urlDataNextKey.operationId;

		var ep = new eventproxy();
		ep.fail(callback);

		// 异步读api
		apiModel.getApiBySwaggerId(req.body.v_id, swagger_id, ep.done('data1'));
		ep.all('data1', function (data1) {
			if(data1){
				// 存在api
				if(req.body.must==1){
					// api的url发生变化，要更新这个接口
					let logs = "※【更新接口】 =>  强制更新接口must=1"+url;
					// step_1 将旧api的type改为2
					apiModel.updateApi(data1.id, {
						type: 2
					}, function(error, data){
						if(error){
							logger.info(" /*********** 将旧api的type改为2时失败");
							logger.info(error);
							logs += "\r\n\t将旧api（"+data1.id+"）标记为过期时失败";
							fs.appendFile('public/build/'+saveFileName+'.txt', logs+"\r\n");
						} else {
							logger.info(" /*********** 将旧api的type改为2时成功!!!");
							logs += "\r\n\t已将旧api（"+data1.id+"）标记为过期";

							fs.appendFile('public/build/'+saveFileName+'.txt', logs+"\r\n");
						}
					});
					createApiStepTWO(url, pathType, urlData, data1);
				} else if(data1.url!=url){
					// api的url发生变化，要更新这个接口
					let logs = "※【更新接口】 =>  这个接口的url发生了变化"+url;
					// step_1 将旧api的type改为2
					apiModel.updateApi(data1.id, {
						type: 2
					}, function(error, data){
						if(error){
							logger.info(" /*********** 将旧api的type改为2时失败");
							logger.info(error);
							logs += "\r\n\t将旧api（"+data1.id+"）标记为过期时失败";
							fs.appendFile('public/build/'+saveFileName+'.txt', logs+"\r\n");
						} else {
							logger.info(" /*********** 将旧api的type改为2时成功!!!");
							logs += "\r\n\t已将旧api（"+data1.id+"）标记为过期";

							fs.appendFile('public/build/'+saveFileName+'.txt', logs+"\r\n");
						}
					});
					createApiStepTWO(url, pathType, urlData, data1);
				} else {
					if(data1.swagger_time==undefined || data1.swagger_time==""){
						// api不存在swagger_time字段，认为这个接口没有完成，并且没有更新
						let logs = "不导入这个接口 => 未标注完成时间 "+url;
						logger.info(logs);

						fs.appendFile('public/build/'+saveFileName+'.txt', logs+"\r\n");
					} else if( urlDataNextKey!="" && (data1.swagger_time == makingSwaggerTime(urlDataNextKey.summary)) ) {
						// swagger_time相同，认为这个接口没有更新
						let logs = "不导入这个接口 => 未更新 "+url;

						fs.appendFile('public/build/'+saveFileName+'.txt', logs+"\r\n");
					} else {
						// swagger_time不相同，认为这个接口有更新
						let logs = "※【更新接口】 =>  这个接口有更新"+url;
						// step_1 将旧api的type改为2
						apiModel.updateApi(data1.id, {
							type: 2
						}, function(error, data){
							if(error){
								logger.info(" /*********** 将旧api的type改为2时失败");
								logger.info(error);
								logs += "\r\n\t将旧api（"+data1.id+"）标记为过期时失败";
								fs.appendFile('public/build/'+saveFileName+'.txt', logs+"\r\n");
							} else {
								logger.info(" /*********** 将旧api的type改为2时成功!!!");
								logs += "\r\n\t已将旧api（"+data1.id+"）标记为过期";

								fs.appendFile('public/build/'+saveFileName+'.txt', logs+"\r\n");
							}
						});
						createApiStepTWO(url, pathType, urlData, data1);
					}
				}
			} else {
				// 不存在，直接创建新接口
				let logs = "※【创建接口】 =>  开始创建这个新接口"+url;
				logger.info(logs);

				createApiStepTWO(url, pathType, urlData);
				fs.appendFile('public/build/'+saveFileName+'.txt', logs+"\r\n");
			}

		});
	}

	function getUpdateInfo(data, dataOld){
		if(!data || !dataOld){
			return false;
		}
		try {
			var backArray = [];
			if(data.url != dataOld.url){
				backArray.push("修改了url");
			}
			if(data.request_type != dataOld.request_type){
				backArray.push("修改了请求方式");
			}
			if(data.description!=dataOld.description){
				backArray.push("修改了描述信息");
			}
			if(data.back_data!=dataOld.back_data){
				backArray.push("修改了返回值");
			}
			/*if(JSON.stringify(data.parameters)!=JSON.stringify(dataOld.parameters) && data.parameters!=dataOld.parameters){
				backArray.push("修改了参数");
			}*/
			if(backArray.length>0){
				apiModel.updateApi(data.id, {
					swagger_upinfo: backArray.join(",")
				}, function(error, backData){
				});
			}
		} catch (error){
			logger.error(error);
		}
	}

	function createApiStepTWO(url, pathType, urlData, oldApi){

		// *** api创建流程
		var backData = {};

		// logger.info("即将导入这个接口："+url);
		// logger.info(urlData);

		// 获取url_full
		backData.url_full = makingUrlFull(url);

		// 根据请求方式获取数据
		if(pathType === "get") {
			backData.request_type = 2;
		} else if (pathType === "post") {
			backData.request_type = 1;
		} else if (pathType === "put") {
			backData.request_type = 3;
		} else if (pathType === "delete") {
			backData.request_type = 4;
		} else if (pathType === "patch") {
			backData.request_type = 7;
		} else {
			logger.info("不支持的请求类型");
			backData.request_type = 0;
		}

		// 根据tags获取group_id
		backData.group_id = makingGroupId(urlData.tags[0]);

		backData.url = url;
		backData.name = urlData.summary;
		backData.description = urlData.description;
		backData.swagger_id = urlData.operationId;
		backData.swagger_time = makingSwaggerTime(urlData.summary);



		// 参数
		var parametersObject = urlData.parameters;
		// 返回
		var responsesObject = urlData.responses;
		if (responsesObject["200"] != undefined) {
			responsesObject = responsesObject["200"];
		} else {
			logger.info("responsesObject 格式错误，没有正确200的返回结果");
		}

		// logger.info(parametersObject);
		// logger.info(makingFullObject(parametersObject));
		// logger.info(responsesObject);
		// logger.info(makingFullObject(responsesObject));


		/*取参数*/
		if (parametersObject != undefined) {
			var parametersArray = [];
			for (var m = 0; m < parametersObject.length; m++) {
				var default_p = "";
				var default_p_object = "";
				var type = "";
				if (parametersObject[m].schema != undefined && parametersObject[m].schema.type != undefined) {
					// logger.info("************************ coming 1 **************************************");
					if (parametersObject[m].schema.type == "number" || parametersObject[m].schema.type == "integer") {
						type = 1;
					} else if (parametersObject[m].schema.type == "string") {
						type = 2;
					} else if (parametersObject[m].schema.type == "boolean") {
						type = 3;
					} else if (parametersObject[m].schema.type == "array") {
						type = 5;
					} else if (parametersObject[m].schema.type == "object") {
						type = 6;
					} else {
						type = 0;
					}
				} else if (parametersObject[m].schema != undefined && parametersObject[m].schema["$ref"] != undefined) {
					// logger.info("************************ coming 2 **************************************");
					var paramstr = parametersObject[m].schema["$ref"].split("/");
					paramstr = paramstr[paramstr.length - 1];
					// logger.info(paramstr);
					// logger.info(definitions[paramstr]);
					if (definitions[paramstr] != undefined) {
						// logger.info("************************ coming 22 +++++++++++++++++ **************************************");
						// logger.info(definitions[paramstr]);
						var checkspData = makingFullObject(definitions[paramstr]);
						default_p_object = checkspData;
						// logger.info(JSON.stringify(checkspData));
						checkspData = makingUseObject(checkspData);
						// logger.info(JSON.stringify(checkspData));
						default_p = JSON.stringify(checkspData);
						// logger.info(default_p);
					}
					type = 6;
				} else if (parametersObject[m].type != undefined) {
					// logger.info("************************ coming 3 **************************************");
					if (parametersObject[m].type == "number" || parametersObject[m].type == "integer") {
						type = 1;
					} else if (parametersObject[m].type == "string") {
						type = 2;
					} else if (parametersObject[m].type == "boolean") {
						type = 3;
					} else if (parametersObject[m].type == "array") {
						type = 5;
					} else {
						type = 0;
					}
				} else {
					// logger.info("************************ coming 4 **************************************");
					type = 0;
				}
				var inType = "";
				inType = parametersObject[m].in!=undefined ? parametersObject[m].in : "";

				var isdefault = "";
				if (parametersObject[m].default != undefined) {
					isdefault = parametersObject[m].default;
				}
				var ismust = "";
				if (parametersObject[m].required) {
					ismust = 1;
				} else {
					ismust = 2;
				}
				parametersArray.push({
					name: parametersObject[m].name,
					type: type,
					in_type: inType,
					ismust: ismust,
					info: parametersObject[m].description,
					default: default_p != "" ? default_p : isdefault,
					default_object: default_p_object
					//default : default_p
				});
			}
			backData.parametersObject = parametersArray;
		} else {
			backData.parametersObject = [];
		}

		// logger.info("********************************** backData.parametersObject *************************************************************************************************************8");
		// logger.info(backData.parametersObject);


		// 取返回值
		if (responsesObject.schema != undefined && responsesObject.schema["$ref"] != undefined) {
			// logger.info(" *** 1 *** ");

			var str = responsesObject.schema["$ref"].split("/");
			str = str[str.length - 1];
			str = makingFullObject(definitions[str]);
			// logger.info(str);

			backData.back_description = str;

			if (responsesObject.schema.type != undefined && responsesObject.schema.type == "array") {
				var checkDataArray = [];
				checkDataArray.push(makingUseObject(str));
				backData.back_data = JSON.stringify(checkDataArray);
			} else {
				backData.back_data = JSON.stringify(makingUseObject(str));
			}
		} else if (responsesObject.schema != undefined && responsesObject.schema.items != undefined && responsesObject.schema.items["$ref"] != undefined) {
			// logger.info(" *** 2 *** ");

			var str = responsesObject.schema.items["$ref"].split("/");
			str = str[str.length - 1];
			str = makingFullObject(definitions[str]);
			// logger.info(str);

			backData.back_description = str;

			if (responsesObject.schema.type != undefined && responsesObject.schema.type == "array") {
				var checkDataArray = [];
				checkDataArray.push(makingUseObject(str));
				backData.back_data = JSON.stringify(checkDataArray);
			} else {
				backData.back_data = JSON.stringify(makingUseObject(str));
			}

		} else if (responsesObject.schema != undefined && responsesObject.schema.type != undefined) {
			// logger.info(" *** 3 *** ");
			backData.back_description = responsesObject.schema.type;
			backData.back_data = responsesObject.schema.type;
		} else {
			// logger.info(" *** 4 *** ");

			backData.back_description = "not find";
			backData.back_data = "not find";
		}

		// 添加创建和修改时间
		backData.updates = [{
			update_type: "auto create",
			update_name: "swagger",
			update_time: new Date(),
			update_info: "form "+req.session.user.name+" import !"
		}];
		if(oldApi!=undefined){
			backData.updates[0].update_old = oldApi.id;
			backData.fun_name = oldApi.fun_name;
			backData.writes = oldApi.writes;
			backData.mock_template = oldApi.mock_template;
		}

		if(typeof backData == "object"){
			try {
				// logger.info(JSON.stringify(backData));
			} catch (error) {
				logger.info(error);
				logger.info("================================================= 有一个没有导入成功 ================================================= 有一个没有导入成功 ================================================= 有一个没有导入成功 ================================================= 有一个没有导入成功 ================================================= 有一个没有导入成功 ================================================= 有一个没有导入成功 ================================================= 有一个没有导入成功 ================================================= 有一个没有导入成功 ================================================================================");
				return false;
			}
		} else {
			// logger.info(backData);
		}

		createApiStepTHREE(backData, oldApi);


	}

	function createApiStepTHREE(backData, oldApi){
		apiModel.createApi({
			name: backData.name,
			url: backData.url,
			url_full: backData.url_full,
			request_type: backData.request_type,
			description: backData.description,
			group_id: backData.group_id,
			parameters: backData.parametersObject,
			back_data: JSON.stringify(backData.back_data),
			back_description: JSON.stringify(backData.back_description),
			fun_name: backData.fun_name,
			writes: backData.writes,
			mock_template: backData.mock_template,
			create_id: req.session.user.id,
			create_name: "swagger",
			project_id: req.body.p_id,
			version_id: req.body.v_id,
			swagger_id: backData.swagger_id,
			swagger_time: backData.swagger_time,
			updates: backData.updates,
			update_time: new Date()
		}, function(err, data) {
			if (err) {
				logger.info("保存失败! ");
				logger.info(err);
			} else {
				logger.info("保存成功! "+data.id);

				// 比较更新的差异
				getUpdateInfo(data, oldApi)
			}
		});
	}

	// 获取full_url，没有返回空.
	function makingUrlFull(url){
		/** 2017.3.7-新加 */
		var full_url = url.split("/{");
		full_url = full_url[0];
		return full_url;
		/*
		var backUrl = "";
		var testUrl = url.split("/");
		var urlLastStr = testUrl[testUrl.length-1];
		if(urlLastStr.indexOf("{")!=-1 && urlLastStr.indexOf("}")!=-1){
			testUrl.pop();
			backUrl = testUrl.join("/")
		}
		return backUrl;*/
	}

	// 获取SwaggerTime，没有返回空.
	function makingSwaggerTime(name){
		// logger.info(name);
		var backUrl = "";
		var testUrl = name.split("#");
		if(testUrl.length>=2){
			backUrl = testUrl[testUrl.length-2];
		}
		return backUrl;
	}


	// 获取group_id
	function makingGroupId(tagsName){
		for (var k = 0; k < tags.length; k++) {
			if (tags[k].name == tagsName) {
				return tags[k].id;
			}
		}
	}

	// 把参数中的函数变量全部读完
	function makingFullObject(obj){
		// logger.info(" *** makingFullObject COMING *** ");
		// logger.info(obj);

		for (var index in obj.properties){
			// logger.info(index);
			if(obj.properties[index].items!=undefined && obj.properties[index].items["$ref"]!=undefined){
				// logger.info("----------- coming 1 -----------------------");
				var str = obj.properties[index].items["$ref"].split("/");
				str = str[str.length-1];
				// logger.info(str);
				if(str=="ExamQuestionComplexDTO"||str=="ExamQuestionSimpleDTO") {
					obj.properties[index].items={
						"type": "same_type",
						"description": "重复的格式!!!!!!"
					};
				} else {
					obj.properties[index].items=makingFullObject(definitions[str]);
				}
			} else if(obj.properties[index]!=undefined && obj.properties[index]["$ref"]!=undefined){
				// logger.info("+++++++++++++++ coming 2 ++++++++++++++++++++");
				var str = obj.properties[index]["$ref"].split("/");
				str = str[str.length-1];
				// logger.info(str);
				// 自己调自己的bug
				// 如我的parent的格式其实和我一样，这样会导致无限循环
				if(str=="ExamQuestionComplexDTO"||str=="ExamQuestionSimpleDTO") {
					obj.properties[index]={
						"type": "same_type",
						"description": "重复的格式!!!!!!"
					};
				} else {
					obj.properties[index]=makingFullObject(definitions[str]);
				}
			} else {
				// logger.info("+++++++++++++++ coming 3 ++++++++++++++++++++");
			}
		}

		// logger.info(" *** makingFullObject OUT *** ");
		// logger.info(obj);

		return obj;
	}

	// 将函数格式对象转为返回的json
	function makingUseObject(obj){
		// logger.info("getItems working");
		// logger.info(obj);
		// logger.info(obj.type);
		var backs = "";

		if(obj.type!=undefined && obj.type=="object" && obj.properties){
			// logger.info("object +++++++++++++++++++++");
			var newArrays = {};
			for(var newIndex in obj.properties){
				// if(obj.properties[newIndex].items!=undefined){
				// 	newArrays[newIndex]=getItems(obj.properties[newIndex].items);
				// } else {
				// 	newArrays[newIndex]=getItems(obj.properties[newIndex]);
				// }

				if(obj.properties[newIndex].items!=undefined){
					var hhDa = makingUseObject(obj.properties[newIndex].items);
				} else {
					var hhDa = makingUseObject(obj.properties[newIndex]);
				}
				if(obj.properties[newIndex].type!=undefined && obj.properties[newIndex].type=="array"){
					// logger.info("array coming -----------------------------");
					var aaArr = [];
					aaArr.push(hhDa);
					newArrays[newIndex] = aaArr;
				} else {
					newArrays[newIndex] = hhDa;
				}
			}
			backs = newArrays;
		} else if(obj.type!=undefined && obj.type=="array" && obj.properties) {
			// logger.info("array +++++++++++++++++++++");
			var newArrays = [];
			for(var newIndex in obj.properties){
				if(obj.properties[newIndex].items!=undefined){
					newArrays.push(makingUseObject(obj.properties[newIndex].items));
				} else {
					newArrays.push(makingUseObject(obj.properties[newIndex]));
				}
			}
			// logger.info(newArrays);
			backs =  newArrays;
		} else if(obj.type!=undefined){
			if(obj.description!=undefined){
				backs =  obj.type+" "+obj.description;
			} else {
				backs =  obj.type;
			}
		// } else if(obj.type!=undefined && obj.type=="string"){
		// 	backs =  "string";
		// } else if(obj.type!=undefined && obj.type=="number"||obj.type=="integer"){
		// 	// backs =  parseInt(Math.random()*1000);
		// 	backs =  "number";
		// } else if(obj.type!=undefined && obj.type=="boolean"){
		// 	backs =  "boolean";
		} else {
			backs =  obj;
		}

		// logger.info("yes 有返回");
		// logger.info(backs);
		return backs;
	}


};


















// 导出所有api
exports.writeServersApiFile = function (req, res, next) {

	var apiIds = req.body.ids.split(",");
	var fileName = req.body.v_id;
	// var fileName = req.body.v_id+String(Math.floor(Math.random()*10000));

	var ep = new eventproxy();
	ep.fail(next);

	var beforeTxt = "/**!\r\n * "+req.body.b_name+" v"+req.body.b_vname+"\r\n * 接口数量 "+req.body.b_bnumber+"\r\n * "+req.body.b_host+"\r\n *\r\n * "+moment().format('YYYY-MM-DD HH:mm:ss')+" (c) sxApi Foundation, Inc.\r\n *\r\n **/ \r\nvar servers = require('../common/servers');\r\n\r\n\r\n";

	// 【1】 首先写入文件最开始的一些注释和文字
	fs.writeFile('public/build/'+fileName+'.js', beforeTxt, ep.done('writeBefore'));

	ep.all('writeBefore', function (writeBefore) {
		// 【2】 异步并发写入所有api文件
		ep.after('got_file', apiIds.length, function (list) {
			// logger.info(list);
			res.send({
				status: 0,
				message: "已全部完成",
				data: list,
				fileName: fileName
			});
		});
		for (var i = 0; i < apiIds.length; i++) {
			// 每次写入一个api函数
			exports.makeApiFunctions(apiIds[i], fileName, function(error, data){
				ep.emit('got_file', data);
			});
		}
	});
};

// 覆盖某个api
exports.updateServersApiFile = function (req, res, next) {

	// logger.info("updateServersApiFile");
	// logger.info(req.body.id);

	var ep = new eventproxy();
	ep.fail(next);

	// 获取ApiFunctionCode
	makingApiModel.makingServersApiFunctionCode(req.body.id, 0, ep.done('data1'));
	// 先读取需要替换的js文件
	fs.readFile('public/build/'+req.body.v_id+'.js', ep.done('data2'));
	ep.all('data1', 'data2', function (data1, data2) {

		// {txt: txt, swagger_id: (data.swagger_id?data.swagger_id:data.id)}
		var backTxt = data1.txt;
		var reg_Id = data1.swagger_id;

		// logger.info("************* ********* ep.all *********************");
		// logger.info(backTxt);
		// logger.info(req.body.id);
		// logger.info(data2);
		// 将文件内容转为字符串
		data2 += "";


		// 正则查找
		var regtxt = "/Created by "+reg_Id+"[\\s\\S]*?End "+reg_Id+"/g";
		var URL_REG = eval(regtxt);
		var back_data = data2.replace(URL_REG, "Created by "+reg_Id+backTxt+"End "+reg_Id);

		// 将替换过的新的字符串重新覆盖写入旧的js文件
		fs.writeFile('public/build/'+req.body.v_id+'.js', back_data, function(err){
			res.send({
				status: 0,
				data: back_data
			})
		});
	});

};

// 内部模块 -- 异步队列写入api functions到文件
exports.makeApiFunctions = function (id, fileName, callback) {
	// id - api的id
	// 导出的api文件名

	// step:1 获取api-Code
	makingApiModel.makingServersApiFunctionCode(id, 1, function(error, data){
		if(error){
			logger.info("获取ApiFunction数据失败:"+id+" "+error);
		} else {
			// step:2 追加写入获取到的Code
			fs.appendFile('public/build/'+fileName+'.js', data.txt, function(err){
				if(err) {
					logger.info("写入ApiFunction文件失败:"+id+" "+err);
				} else {
					logger.info("已完成api: "+id);
					callback(null, "已完成api: "+id);
				}
			});
		}
	});
};














// 获取serversApi Code
exports.getServersApiFunctionCode = function (req, res, next) {
	logger.info(req.body.id); // v_id
	makingApiModel.makingServersApiFunctionCode(req.body.id, 1, function(error, data){
		logger.info(error);

		res.send({
			status: 0,
			data: data.txt
		})
	});
};


// 获取ajax Code
exports.getApiFunctionAjaxCode = function (req, res, next) {
	makingApiModel.makingApiFunctionAjaxCode(req.query.id, function(error, data) {
		if(error){
			res.send({
				status: -1,
				message: "获取失败"
			})
		} else {
			res.send({
				status: 0,
				message: "获取成功",
				data: data
			})
		}
	})
};


// 获取node Code
exports.getApiFunctionNodejsCode = function (req, res, next) {
	makingApiModel.makingApiFunctionNodeCode(req.query.id, function(error, data) {
		if(error){
			res.send({
				status: -1,
				message: "获取失败"
			})
		} else {
			res.send({
				status: 0,
				message: "获取成功",
				data: data
			})
		}
	})
};



// 获取node Code url
exports.getServersApiFunctionUrl = function (req, res, next) {
	makingApiModel.makingServersApiFunctionUrl(req.query.id, function(error, data) {
		if(error){
			res.send({
				status: -1,
				message: "获取失败"
			})
		} else {
			res.send({
				status: 0,
				message: "获取成功",
				data: data
			})
		}
	})
};


