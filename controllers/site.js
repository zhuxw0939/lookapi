"use strict";

var config=require('../common/config');
var fs=require('fs');
var eventproxy = require('eventproxy');
var moment = require('moment');

var authModel = require('../models/auth');
var projectModel = require('../models/project');
var apiModel = require('../models/api');
var cacheModel = require('../models/cache');


var ejs = require('ejs');

var logger = require('../common/logger');



ejs.filters.dateformat = function(obj, format) {
	if (format == undefined) {
		format = 'YYYY-MM-DD HH:mm:ss';
	}
	var ret = moment(obj).format(format);
	return ret == 'Invalid date' ? '0000-00-00 00:00:00' : ret;
};


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


exports.json_abc = function (req, res, next) {
	res.send({
		"swagger": "2.0",
		"info": {
			"description": "",
			"version": "0.1",
			"title": "SXT"
		},
		"host": "localhost:8080",
		"basePath": "/SXT",
		"tags": [
			{
				"name": "系统登录",
				"description": "",
				"sortWeight": 1
			},
			{
				"name": "基础信息",
				"description": "包括班级、科目等",
				"sortWeight": 2
			},
			{
				"name": "个人中心",
				"description": "",
				"sortWeight": 3
			},
			{
				"name": "学霸说-列表",
				"description": "",
				"sortWeight": 4
			},
			{
				"name": "学霸说-发布",
				"description": "",
				"sortWeight": 5
			},
			{
				"name": "学霸说-查看",
				"description": "",
				"sortWeight": 6
			},
			{
				"name": "学霸说-分享",
				"description": "",
				"sortWeight": 7
			},
			{
				"name": "学霸说-互动",
				"description": "",
				"sortWeight": 8
			},
			{
				"name": "家长话题",
				"description": "",
				"sortWeight": 9
			},
			{
				"name": "成绩点评",
				"description": "",
				"sortWeight": 10
			},
			{
				"name": "课堂及时评测",
				"description": "",
				"sortWeight": 11
			},
			{
				"name": "考试吐槽",
				"description": "",
				"sortWeight": 12
			},
			{
				"name": "家长助威",
				"description": "",
				"sortWeight": 13
			},
			{
				"name": "家校消息",
				"description": "",
				"sortWeight": 14
			},
			{
				"name": "成绩分析提供的接口",
				"description": "",
				"sortWeight": 15
			},
			{
				"name": "真题解析",
				"description": "",
				"sortWeight": 16
			},
			{
				"name": "教育局领导角色",
				"description": "主要针对于教育局领导角色提供的API",
				"sortWeight": 17
			}
		],
		"schemes": [],
		"consumes": [],
		"produces": [],
		"paths": {
			"/mobile/analysisController/queryAnalysisDetails4Course.do": {
				"get": {
					"tags": [
						"真题解析"
					],
					"summary": "查看一个学科上传的老师解析详情",
					"description": "",
					"operationId": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "exam_id",
							"in": "path",
							"description": "",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "course_name",
							"in": "path",
							"description": "",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"json": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"data\": [\n            {\n                \"schoolnameName\": \"绵阳中学\", \n                \"teacherName\": \"马红梅\", \n                \"totalNum\": 26, \n                \"details\": {\n                    \"PICTURE\": {\n                        \"analysisCount\": 5, \n                        \"resourceTypeName\": \"图片\", \n                        \"resourceType\": 1\n                    }, \n                    \"VIDEO\": {\n                        \"analysisCount\": 18, \n                        \"resourceTypeName\": \"视频\", \n                        \"resourceType\": 2\n                    }, \n                    \"WORDS\": {\n                        \"analysisCount\": 0, \n                        \"resourceTypeName\": \"文字\", \n                        \"resourceType\": 4\n                    }, \n                    \"AUDIO\": {\n                        \"analysisCount\": 3, \n                        \"resourceTypeName\": \"音频\", \n                        \"resourceType\": 3\n                    }\n                }\n            }\n        ], \n        \"examName\": \"绵阳市高2013级第二次诊断性考试\"\n    }, \n    \"errorCode\": \"\", \n    \"msg\": \"操作成功\", \n    \"obj\": \"\", \n    \"pageNumber\": 0, \n    \"queryStartId\": \"\", \n    \"rows\": [ ], \n    \"success\": true, \n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "finish",
					"devStatusName": "开发完成",
					"showDevStatus": true,
					"label": "",
					"developer": "",
					"modifyDate": "2017-06-12 16:31:04"
				}
			},
			"/mobile/analysisController/queryAnalysisStatistics4Exam.do": {
				"get": {
					"tags": [
						"真题解析"
					],
					"summary": "查看所有考试学科的解析统计",
					"description": "",
					"operationId": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"json": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"attributes\": {\n    \"data\": [\n      {\n        \"courseName\": \"英语(文)\",\n        \"totalNum\": 115,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 115,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"英语\",\n        \"totalNum\": 115,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 115,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"数学(文)\",\n        \"totalNum\": 39,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 1,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 33,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 5,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"生物\",\n        \"totalNum\": 31,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 3,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 28,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"化学\",\n        \"totalNum\": 26,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 5,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 18,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 3,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"语文\",\n        \"totalNum\": 24,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 23,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 1,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"地理\",\n        \"totalNum\": 22,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 22,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"政治\",\n        \"totalNum\": 20,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 20,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"物理\",\n        \"totalNum\": 20,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 20,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"数学(理)\",\n        \"totalNum\": 18,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 16,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 2,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      },\n      {\n        \"courseName\": \"历史\",\n        \"totalNum\": 17,\n        \"details\": {\n          \"PICTURE\": {\n            \"analysisCount\": 4,\n            \"resourceTypeName\": \"图片\",\n            \"resourceType\": 1\n          },\n          \"VIDEO\": {\n            \"analysisCount\": 1,\n            \"resourceTypeName\": \"视频\",\n            \"resourceType\": 2\n          },\n          \"AUDIO\": {\n            \"analysisCount\": 12,\n            \"resourceTypeName\": \"音频\",\n            \"resourceType\": 3\n          },\n          \"WORDS\": {\n            \"analysisCount\": 0,\n            \"resourceTypeName\": \"文字\",\n            \"resourceType\": 4\n          }\n        }\n      }\n    ],\n    \"examName\": \"绵阳市高2013级第二次诊断性考试\"\n  },\n  \"errorCode\": \"\",\n  \"msg\": \"操作成功\",\n  \"obj\": \"\",\n  \"pageNumber\": 0,\n  \"queryStartId\": \"\",\n  \"rows\": [],\n  \"success\": true,\n  \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "finish",
					"devStatusName": "开发完成",
					"showDevStatus": true,
					"label": "",
					"developer": "",
					"modifyDate": "2017-06-12 16:30:54"
				}
			},
			"/mobile/analysisController/queryCoursesHavingMaxAnalysises.do": {
				"get": {
					"tags": [
						"真题解析"
					],
					"summary": "查看考试解析最多学科",
					"description": "查询有最多真题解析（老师所做的解析）的科目",
					"operationId": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "exam_id",
							"in": "path",
							"description": "",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"json": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"data\": [\n            {\n                \"analysisCount\": 115, \n                \"courseName\": \"英语(文)\"\n            }, \n            {\n                \"analysisCount\": 115, \n                \"courseName\": \"英语\"\n            }\n        ], \n        \"parallelMaxs\": 2, \n        \"examName\": \"绵阳市高2013级第二次诊断性考试\"\n    }, \n    \"errorCode\": \"\", \n    \"msg\": \"操作成功\", \n    \"obj\": \"\", \n    \"pageNumber\": 0, \n    \"queryStartId\": \"\", \n    \"rows\": [ ], \n    \"success\": true, \n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "finish",
					"devStatusName": "开发完成",
					"showDevStatus": true,
					"label": "",
					"developer": "吴昂",
					"modifyDate": "2017-06-12 16:30:32"
				}
			},
			"/mobile/analysisController/queryStatistics4CourseHasNoAnalysises.do": {
				"get": {
					"tags": [
						"真题解析"
					],
					"summary": "查看一个学科未上传解析的题目",
					"description": "",
					"operationId": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "exam_id",
							"in": "path",
							"description": "",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "course_name",
							"in": "path",
							"description": "",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"json": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"data\": [\n            {\n                \n                \"courseName\": \"化学\",                \n                \"questionNo\": \"10.4\"\n            }, \n            {\n                 \"courseName\": \"化学\", \n                \"questionNo\": \"11.1\"\n            }\n        ]\n    }, \n    \"errorCode\": \"\", \n    \"msg\": \"操作成功\", \n    \"obj\": \"\", \n    \"pageNumber\": 0, \n    \"queryStartId\": \"\", \n    \"rows\": [ ], \n    \"success\": true, \n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "finish",
					"devStatusName": "开发完成",
					"showDevStatus": true,
					"label": "",
					"developer": "",
					"modifyDate": "2017-06-12 16:31:00"
				}
			},
			"/mobile/analysisController/queryStatistics4ExamHasNoAnalysises.do": {
				"get": {
					"tags": [
						"真题解析"
					],
					"summary": "查看一次考试未上传解析的科目及统计",
					"description": "",
					"operationId": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "exam_id",
							"in": "path",
							"description": "",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"json": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"attributes\": {\n    \"data\": [\n      {\n        \"analysisCount\": \"\",\n        \"courseName\": \"化学\",\n        \"examName\": \"\",\n        \"noAnalysisCount\": 2,\n        \"questionNo\": \"\",\n        \"resourceType\": \"\",\n        \"resourceTypeName\": \"\",\n        \"schoolName\": \"\",\n        \"teacherName\": \"\"\n      },\n      {\n        \"analysisCount\": \"\",\n        \"courseName\": \"数学(理)\",\n        \"examName\": \"\",\n        \"noAnalysisCount\": 4,\n        \"questionNo\": \"\",\n        \"resourceType\": \"\",\n        \"resourceTypeName\": \"\",\n        \"schoolName\": \"\",\n        \"teacherName\": \"\"\n      }\n    ]\n  },\n  \"errorCode\": \"\",\n  \"msg\": \"操作成功\",\n  \"obj\": \"\",\n  \"pageNumber\": 0,\n  \"queryStartId\": \"\",\n  \"rows\": [],\n  \"success\": true,\n  \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "finish",
					"devStatusName": "开发完成",
					"showDevStatus": true,
					"label": "",
					"developer": "",
					"modifyDate": "2017-06-12 16:31:08"
				}
			},
			"/mobile/commonController/getMyInfo.do": {
				"post": {
					"tags": [
						"个人中心"
					],
					"summary": "查询个人中心首页信息",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"myInfo\": {\n            \"accountId\": \"int,用户账号id\",\n            \"accountName\": \"string,用户姓名\",\n            \"portraitPath\": \"string,头像地址\",\n            \"schoolName\": \"string,学校名称\",\n            \"className\": \"string,班级名称（学生和老师才有值）\",\n            \"analysisTotal\": \"int,解析总数（学生和老师才有值）\",\n            \"collectionTotal\": \"int,解析收藏总数（学生和老师才有值）\",\n            \"gainAgreeTotal\": \"int,获得解析赞成的总数（学生用户才有值）\",\n            \"subjectName\": \"string,任教科目（老师才有值）\"\n        }\n    },\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 10:12:12"
				}
			},
			"/mobile/commonController/getOneHeaderTeacherAllClasses.do": {
				"post": {
					"tags": [
						"基础信息"
					],
					"summary": "查询当前登陆教师是不是班主任",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "object",
								"format": "",
								"required": false,
								"description": "",
								"title": "default",
								"properties": {
									"attributes": {
										"type": "object",
										"format": "",
										"required": false,
										"description": "具体结果",
										"title": "attributes",
										"properties": {
											"isClassHeader": {
												"type": "boolean",
												"required": false,
												"description": "是否是版主任"
											},
											"classesList": {
												"type": "array",
												"format": "",
												"required": false,
												"description": "班主任管理的班级列表",
												"items": {
													"required": false,
													"title": "classesList",
													"properties": {
														"id": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "班级id"
														},
														"classname": {
															"type": "string",
															"required": false,
															"description": "班级名称"
														},
														"cityGradeId": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "市级年级id"
														},
														"schoolGradeId": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "校级年级id"
														}
													}
												}
											}
										}
									},
									"msg": {
										"type": "string",
										"required": false,
										"description": "查询结果消息"
									},
									"success": {
										"type": "boolean",
										"required": false,
										"description": "查询结果状态"
									}
								}
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-23 16:09:26"
				}
			},
			"/mobile/commonController/getOneStudentAllSubjects.do": {
				"post": {
					"tags": [
						"基础信息"
					],
					"summary": "查询当前登陆学生的所有科目信息",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "object",
								"format": "",
								"required": false,
								"description": "",
								"title": "default",
								"properties": {
									"attributes": {
										"type": "object",
										"format": "",
										"required": false,
										"description": "具体结果",
										"title": "attributes",
										"properties": {
											"subjects": {
												"type": "array",
												"format": "",
												"required": false,
												"description": "科目数组",
												"items": {
													"required": false,
													"title": "subjects",
													"properties": {
														"id": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "科目市级id"
														},
														"name": {
															"type": "string",
															"required": false,
															"description": "科目名称"
														},
														"type": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "学科类型"
														},
														"phase": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "学段"
														}
													}
												}
											}
										}
									},
									"msg": {
										"type": "string",
										"required": false,
										"description": "查询结果消息"
									},
									"success": {
										"type": "boolean",
										"required": false,
										"description": "查询结果状态"
									}
								}
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-23 14:57:13"
				}
			},
			"/mobile/commonController/getOneTeacherAllClasses.do": {
				"post": {
					"tags": [
						"基础信息"
					],
					"summary": "查询当前登陆教师关联的所有班级信息",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "object",
								"format": "",
								"required": false,
								"description": "",
								"title": "default",
								"properties": {
									"attributes": {
										"type": "object",
										"format": "",
										"required": false,
										"description": "具体信息",
										"title": "attributes",
										"properties": {
											"classes": {
												"type": "array",
												"format": "",
												"required": false,
												"description": "班级列表",
												"items": {
													"required": false,
													"title": "classes",
													"properties": {
														"id": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "班级基础id"
														},
														"studentnum": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "班级人数"
														},
														"classname": {
															"type": "string",
															"required": false,
															"description": "班级名称"
														},
														"cityGradeId": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "市级年级id"
														},
														"type": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "是否分科;0表示不分科;1表示文科;2表示理科"
														},
														"schoolGradeId": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "校级年级id"
														}
													}
												}
											}
										}
									},
									"msg": {
										"type": "string",
										"required": false,
										"description": "查询结果消息"
									},
									"success": {
										"type": "boolean",
										"required": false,
										"description": "查询结果状态"
									}
								}
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-23 14:57:05"
				}
			},
			"/mobile/commonController/getOneTeacherAllClassesAndHeader.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "查询当前登陆教师所有班级-包括班长任的班",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"classes\": [\n            {\n                \"id\": \"int,班级基础id\",\n                \"classId\": \"int,班级基础id,与上面id值相同\",\n                \"classname\": \"string,班级名称\",\n                \"classPhaseName\": \"string,班级学段名称\",\n                \"cityGradeId\": \"integer,市级年级id\",\n                \"schoolGradeId\": \"integer,校级年级id\",\n                \"studentnum\": \"integer,班级人数\",\n                \"type\": \"integer,是否分科;0表示不分科;1表示文科;2表示理科\",\n                \"isHeader\": \"boolean,是否是该班班主任\",\n                \"isTeaching\": \"boolean,是否在该班任教\",\n                \"subjectId\": \"int,任教科目id\",\n                \"subjectName\": \"string,任教科目名称\"\n            }\n        ]\n    },\n    \"msg\": \"string,查询结果消息\",\n    \"success\": \"boolean,查询结果状态\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-27 18:03:03"
				}
			},
			"/mobile/commonController/getOneTeacherAllSubjects.do": {
				"post": {
					"tags": [
						"基础信息"
					],
					"summary": "查询当前登陆教师关联的所有科目信息",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "object",
								"format": "",
								"required": false,
								"description": "",
								"title": "default",
								"properties": {
									"attributes": {
										"type": "object",
										"format": "",
										"required": false,
										"description": "具体结果",
										"title": "attributes",
										"properties": {
											"subjects": {
												"type": "array",
												"format": "",
												"required": false,
												"description": "科目数组",
												"items": {
													"required": false,
													"title": "subjects",
													"properties": {
														"id": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "科目市级id"
														},
														"name": {
															"type": "string",
															"required": false,
															"description": "科目名称"
														},
														"type": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "学科类型"
														},
														"phase": {
															"type": "integer",
															"format": "int32",
															"required": false,
															"description": "学段"
														}
													}
												}
											}
										}
									},
									"msg": {
										"type": "string",
										"required": false,
										"description": "查询结果消息"
									},
									"success": {
										"type": "boolean",
										"required": false,
										"description": "查询结果状态"
									}
								}
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-23 14:56:57"
				}
			},
			"/mobile/commonController/getStudentNewPublish.do": {
				"get": {
					"tags": [
						"基础信息"
					],
					"summary": "学生的考试列表信息",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"exams\": [\n            {\n                \"assignment_state\": \"\",\n                \"base_class_id\": \"\",\n                \"examlevel\": 2,\n                \"examtype\": \"\",\n                \"from_name\": \"\",\n                \"gradeid\": \"\",\n                \"id\": 755,\n                \"name\": \"普通网悦考试123456\",\n                \"termid\": \"\",\n                \"time\": \"2016-12-07 00:00:00\",\n                \"type\": 2,\n                \"expectReleaseTime\": \"string, 预计发布时间\",\n                \"schoolOrClassCount\": \"int, 参考班级或者学校数量，校级考试显示为班级数量，其他则为学校数量\",\n                \"state\": \"int, 发布状态（7为已发布，其他为未发布）\",\n                \"studentCount\": \"int, 参考人数\",\n                \"commentNumber\": \"int, 考试的评论数量（学生端调用为考试吐槽数量，家长端调用为家长助威数量）\",\n                \"studentHaveScore\": \"boolean, 学生是否有成绩\"\n            }\n        ],\n        \"reallyQuestions\": []\n    },\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"\",\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-12-08 16:59:35"
				}
			},
			"/mobile/evaluationController/deleteEvaluationById.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "删除评测",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "ceId",
							"in": "formData",
							"description": "评测id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"attributes\": {},\n  \"msg\": \"操作成功\",\n  \"pageNumber\": 1,\n  \"rows\": [],\n  \"success\": true,\n  \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 9,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-01 16:55:41"
				}
			},
			"/mobile/evaluationController/getCompareClassReport.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "查询课堂评测报告班级对比",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "reportId",
							"in": "path",
							"description": "要对比的报告id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "reportType",
							"in": "path",
							"description": "报告的类型:周报0 月报1",
							"required": true,
							"type": "string",
							"default": "0",
							"format": ""
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"\",\n    \"rows\": [\n        {\n            \"classes\": [\n                {\n                    \"classId\": 1973,\n                    \"className\": \"高2015级19班\",\n                    \"rank\": 1\n                }\n            ],\n            \"reportId\": 33,\n            \"reportName\": \"1月第三周测评报告\"\n        },\n        {\n            \"classes\": [\n                {\n                    \"classId\": 1973,\n                    \"className\": \"高2015级19班\",\n                    \"rank\": 1\n                }\n            ],\n            \"reportId\": 32,\n            \"reportName\": \"1月第二周测评报告\"\n        },\n        {\n            \"classes\": [\n                {\n                    \"classId\": 1973,\n                    \"className\": \"高2015级19班\",\n                    \"rank\": 1\n                }\n            ],\n            \"reportId\": 31,\n            \"reportName\": \"12月第四周测评报告\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 3\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 17,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-03-02 17:07:44"
				}
			},
			"/mobile/evaluationController/getCompareSchoolTeacherPercent.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "查询学校领导查看学校各科目老师对比",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "reportId",
							"in": "formData",
							"description": "报告id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "schoolId",
							"in": "formData",
							"description": "学校id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "gradeId",
							"in": "formData",
							"description": "年级id",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "courseId",
							"in": "formData",
							"description": "科目id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "teacherId",
							"in": "formData",
							"description": "老师id，只能对比两个老师 用\",\"分隔",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"\",\n    \"rows\": [\n        {\n            \"endDate\": \"2017-03-01\",\n            \"reportId\": 6,\n            \"teacherPercents\": [\n                {\n                    \"className\": \"高2015级19班\",\n                    \"gradeId\": 3,\n                    \"gradeName\": \"高2015级\",\n                    \"percent\": 0.005,\n                    \"reportId\": 6,\n                    \"teacherId\": 50750,\n                    \"teacherName\": \"侯伟锋\"\n                },\n                {\n                    \"className\": \"高2015级1班\",\n                    \"gradeId\": 3,\n                    \"gradeName\": \"高2015级\",\n                    \"percent\": 0.05,\n                    \"reportId\": 6,\n                    \"teacherId\": 50852,\n                    \"teacherName\": \"莫春英\"\n                }\n            ],\n            \"startDate\": \"2017-02-22\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 1\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 20,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-03-06 13:54:23"
				}
			},
			"/mobile/evaluationController/getEvaluationAnalysis.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "获取课堂评测分析结果-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "ceId",
							"in": "formData",
							"description": "评测id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"ceId\": \"int,评测id\",\n        \"ceTitle\": \"string,课堂及时评测1\",\n        \"createTime\": \"string,评测创建时间\",\n        \"baseClassId\": \"int,班级id\",\n        \"baseClassName\": \"string,班级名称\",\n        \"baseCourseId\": \"int,科目id\",\n        \"baseCourseName\": \"string, 科目名称\",\n        \"baseBookId\": \"int,教材id\",\n        \"baseBookName\": \"string,教材名字\",\n        \"baseBookChapterId\": \"int,章节id\",\n        \"baseBookChapterName\": \"string,章节名字\",\n        \"baseBookSectionId\": \"int,小节id\",\n        \"baseBookSectionName\": \"string,小节名字\",\n        \"joinStudentNumber\": \"int, 参与学生人数\"\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"optionRatio\": \"double, 选择率百分比（保留两位小数）\",\n            \"option\": \"string, 选项（排序正序）\",\n            \"optionNumber\": \"int, 该选项的人数\",\n            \"studentNames\": \"string, 该选项的人，（名字会以顿号拼接返回，如张三、李四、王五）\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 7,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-24 11:36:38"
				}
			},
			"/mobile/evaluationController/getEvaluationList.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "获取课堂测评列表-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "1",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"ceId\": \"int, 评测id\",\n            \"ceTitle\": \"string, 评测名称\",\n            \"joinStudentNumber\": \"int, 参与学生数量\",\n            \"ceStatus\": \"int, 评测状态（1：未发布，2：已发布）\",\n            \"createTime\": \"string, 创建时间\",\n            \"baseClassId\": \"int, 班级id\",\n            \"baseClassName\": \"string, 班级名称\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-24 11:35:35"
				}
			},
			"/mobile/evaluationController/getEvaluationListByStudent.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "获取课堂评测列表-家长、学生",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int64"
						},
						{
							"name": "courseId",
							"in": "formData",
							"description": "学科id（不传则查询全部学科）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"ceId\": \"int,评测id\",\n            \"ceTitle\": \"string,课堂及时评测1\",\n            \"createTime\": \"string,评测创建时间\",\n            \"baseClassId\": \"int,班级id\",\n            \"baseClassName\": \"string,班级名称\",\n            \"baseCourseId\": \"int,科目id\",\n            \"baseCourseName\": \"string, 科目名称\",\n            \"option\": \"string,评测得分\",\n            \"baseBookId\": \"int,教材id\",\n            \"baseBookName\": \"string,教材名字\",\n            \"baseBookChapterId\": \"int,章节id\",\n            \"baseBookChapterName\": \"string,章节名字\",\n            \"baseBookSectionId\": \"int,小节id\",\n            \"baseBookSectionName\": \"string,小节名字\",\n            \"questionNumber\": \"int, 题数\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 8,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-24 11:36:22"
				}
			},
			"/mobile/evaluationController/getEvaluationPcByLeader.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "教育局领导查询学校完成度详情",
					"description": "教育局领导查询学校完成度详情。可传入开始时间（begin_Time），结束时间（end_Time），按时间筛选。时间格式：“2017-12-01”。可传入“grade_id”按年级筛选，若多个年级，年级ID用“，”分割。",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "grade_id",
							"in": "formData",
							"description": "按年级筛选，年级ID，若多个年级，ID用“，”分割",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "begin_Time",
							"in": "formData",
							"description": "按时间筛选。格式：“2017-01-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "end_Time",
							"in": "formData",
							"description": "按时间筛选。格式：“2017-01-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"5\",\n    \"rows\": [\n        {\n            \"beginTime\": \"2017-02-22\",\n            \"createTime\": \"2017-03-01\",\n            \"endTime\": \"2017-03-01\",\n            \"gradeId\": 3,\n            \"gradeName\": \"高2015级\",\n            \"id\": 6,\n            \"schoolList\": [\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 6,\n                    \"schoolId\": 19,\n                    \"schoolName\": \"绵阳中学\"\n                }\n            ]\n        },\n        {\n            \"beginTime\": \"2017-02-22\",\n            \"createTime\": \"2017-03-01\",\n            \"endTime\": \"2017-03-01\",\n            \"gradeId\": 2,\n            \"gradeName\": \"高2014级\",\n            \"id\": 5,\n            \"schoolList\": [\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 5,\n                    \"schoolId\": 19,\n                    \"schoolName\": \"绵阳中学\"\n                }\n            ]\n        }\n    ],\n    \"success\": true,\n    \"total\": 2\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 23,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-03-03 14:57:11"
				}
			},
			"/mobile/evaluationController/getEvaluationReportList.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "获取测评报告列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"attributes\": {},\n  \"msg\": \"操作成功\",\n  \"pageNumber\": 1,\n  \"rows\": [\n    {\n      \"reportId\": \"int, 测评报告id\",\n      \"reportName\": \"string, 测评报告名称\",\n      \"createTime\": \"string, 创建时间\"\n    }\n  ],\n  \"success\": true,\n  \"queryStartId\":5,\n  \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 10,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-12-05 15:13:37"
				}
			},
			"/mobile/evaluationController/getGroupContrast.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "教师查询小组对比详情",
					"description": "老师查询小组对比详情，默认返回最近4次。若要查询多次，需要传入开始时间（begin_Time），结束时间（end_Time）。时间格式：“2017-12-01”",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "groupId",
							"in": "formData",
							"description": "小组ID，只能对比两个小组 用\"，\"分隔",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "classId",
							"in": "formData",
							"description": "班级ID",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "courseId",
							"in": "formData",
							"description": "学科ID",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "begin_Time",
							"in": "formData",
							"description": "如要查询时间段内数据，需传入开始时间，结束时间。格式：“2017-01-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "end_Time",
							"in": "formData",
							"description": "如要查询时间段内数据，需传入开始时间，结束时间。格式：“2017-01-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"\",\n    \"rows\": [\n        {\n            \"groupReportVOs\": [\n                {\n                    \"atPoints\": \"\",\n                    \"groupId\": 160,\n                    \"groupName\": \"测试小组一组\",\n                    \"id\": \"\",\n                    \"isExist\": false,\n                    \"rank\": 2,\n                    \"rankCompare\": \"\"\n                },\n                {\n                    \"atPoints\": \"\",\n                    \"groupId\": 162,\n                    \"groupName\": \"测试小组二组\",\n                    \"id\": \"\",\n                    \"isExist\": false,\n                    \"rank\": 2,\n                    \"rankCompare\": \"\"\n                }\n            ],\n            \"id\": 32,\n            \"reportName\": \"1月第二周测评报告\"\n        },\n        {\n            \"groupReportVOs\": [\n                {\n                    \"atPoints\": \"\",\n                    \"groupId\": 160,\n                    \"groupName\": \"测试小组一组\",\n                    \"id\": \"\",\n                    \"isExist\": false,\n                    \"rank\": 2,\n                    \"rankCompare\": \"\"\n                },\n                {\n                    \"atPoints\": \"\",\n                    \"groupId\": 162,\n                    \"groupName\": \"测试小组二组\",\n                    \"id\": \"\",\n                    \"isExist\": false,\n                    \"rank\": 2,\n                    \"rankCompare\": \"\"\n                }\n            ],\n            \"id\": 33,\n            \"reportName\": \"1月第三周测评报告\"\n        },\n        {\n            \"groupReportVOs\": [\n                {\n                    \"atPoints\": \"\",\n                    \"groupId\": 160,\n                    \"groupName\": \"测试小组一组\",\n                    \"id\": \"\",\n                    \"isExist\": false,\n                    \"rank\": 2,\n                    \"rankCompare\": \"\"\n                },\n                {\n                    \"atPoints\": \"\",\n                    \"groupId\": 162,\n                    \"groupName\": \"测试小组二组\",\n                    \"id\": \"\",\n                    \"isExist\": false,\n                    \"rank\": 4,\n                    \"rankCompare\": \"\"\n                }\n            ],\n            \"id\": 30,\n            \"reportName\": \"12月第三周测评报告\"\n        },\n        {\n            \"groupReportVOs\": [\n                {\n                    \"atPoints\": \"\",\n                    \"groupId\": 160,\n                    \"groupName\": \"测试小组一组\",\n                    \"id\": \"\",\n                    \"isExist\": false,\n                    \"rank\": 2,\n                    \"rankCompare\": \"\"\n                },\n                {\n                    \"atPoints\": \"\",\n                    \"groupId\": 162,\n                    \"groupName\": \"测试小组二组\",\n                    \"id\": \"\",\n                    \"isExist\": false,\n                    \"rank\": 2,\n                    \"rankCompare\": \"\"\n                }\n            ],\n            \"id\": 31,\n            \"reportName\": \"12月第四周测评报告\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 4\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 22,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-03-03 11:41:07"
				}
			},
			"/mobile/evaluationController/getGroupMemberRank.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "查询小组成员排名情况-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "groupId",
							"in": "formData",
							"description": "小组id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "classReportId",
							"in": "formData",
							"description": "班级评测报告id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"id\": \"int, 测评报告学生id\",\n            \"studentName\": \"int, 学生姓名\",\n            \"atPoints\": \"double, 折合分\",\n            \"rank\": \"int, 排名\",\n            \"rankCompare\": \"int, 排名对比\"\n        }\n    ],\n    \"success\": true,\n    \"queryStartId\": 5,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 14,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-12-05 15:14:09"
				}
			},
			"/mobile/evaluationController/getGroupRankByStudent.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "查询小组的排名情况-学生",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "reportId",
							"in": "formData",
							"description": "评测报告id",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "courseId",
							"in": "formData",
							"description": "学科id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"groupId\": \"int, 小组id\",\n            \"groupName\": \"int, 小组名称\",\n            \"atPoints\": \"double, 折合分\",\n            \"rank\": \"int, 排名\",\n            \"rankCompare\": \"int, 排名对比\",\n            \"isExist\": \"boolean, 是否在当前这个小组\"\n        }\n    ],\n    \"success\": true,\n    \"queryStartId\": 5,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 16,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-12-06 16:07:57"
				}
			},
			"/mobile/evaluationController/getGroupRankByTeacher.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "查询小组的排名情况-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "classReportId",
							"in": "formData",
							"description": "测评报告id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"groupId\": \"int, 小组id\",\n            \"groupName\": \"string, 小组名称\",\n            \"atPoints\": \"double, 折合分\",\n            \"rank\": \"int, 排名\",\n            \"rankCompare\": \"int, 排名对比\"\n        }\n    ],\n    \"success\": true,\n    \"queryStartId\": 5,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 13,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-12-06 16:06:50"
				}
			},
			"/mobile/evaluationController/getMaterialChaptersByTeachMaterialId.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "获取章节和小节信息-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "teachMaterialId",
							"in": "formData",
							"description": "教材id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"chapterId\": \"integer,章节id\",\n            \"sort\": \"integer,排序\",\n            \"level\": \"integer,层级\",\n            \"children\": [\n                {}\n            ],\n            \"chaptername\": \"string,章节名称\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-24 11:36:09"
				}
			},
			"/mobile/evaluationController/getReportDetailByClass.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "按照班级维度查询测评报告明细-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "reportId",
							"in": "formData",
							"description": "测评报告id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"reportId\": \"int, 测评报告id\",\n        \"ceNumber\": \"int, 测评报告次数\",\n        \"reportType\": \"int, 测评报告类型（周报=0、月报=1）\"\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"classReportId\": \"int, 班级测评报告Id\",\n            \"classId\": \"int, 班级id\",\n            \"className\": \"string, 班级名称\",\n            \"rank\": \"int, 排名\",\n            \"rankCompare\": \"int, 排名对比\",\n            \"ceNumber\": \"int, 测评次数\",\n            \"atPoints\": \"double, 折合分\",\n            \"optionA\": \"int, 选项A次数\",\n            \"optionB\": \"int, 选项B次数\",\n            \"optionC\": \"int, 选项C次数\",\n            \"optionD\": \"int, 选项D次数\",\n            \"optionCompareA\": \"int, 选项A次数对比\",\n            \"optionCompareB\": \"int, 选项B次数对比\",\n            \"optionCompareC\": \"int, 选项C次数对比\",\n            \"optionCompareD\": \"int, 选项D次数对比\"\n        }\n    ],\n    \"success\": true,\n    \"queryStartId\": 5,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 11,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-12-05 15:13:49"
				}
			},
			"/mobile/evaluationController/getReportDetailByStudent.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "按照学生维度查询测评报告明细-学生、家长",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "reportId",
							"in": "formData",
							"description": "报告id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"reportId\": \"int, 测评报告id\",\n        \"ceNumber\": \"int, 测评报告次数\",\n        \"reportType\": \"int, 测评报告类型（周报、月报）\"\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"id\": \"int, 学生测评报告Id\",\n            \"courseId\": \"int, 学科id\",\n            \"courseName\": \"string, 学科名称\",\n            \"rank\": \"int, 排名\",\n            \"rankCompare\": \"int, 排名对比\",\n            \"ceNumber\": \"int, 测评次数\",\n            \"atPoints\": \"double, 折合分\",\n            \"lastAtPoints\": \"double, 前一次的折合分\",\n            \"optionA\": \"int, 选项A次数\",\n            \"optionB\": \"int, 选项B次数\",\n            \"optionC\": \"int, 选项C次数\",\n            \"optionD\": \"int, 选项D次数\",\n            \"optionCompareA\": \"int, 选项A次数对比\",\n            \"optionCompareB\": \"int, 选项B次数对比\",\n            \"optionCompareC\": \"int, 选项C次数对比\",\n            \"optionCompareD\": \"int, 选项D次数对比\"\n        }\n    ],\n    \"success\": true,\n    \"queryStartId\": 5,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 15,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-12-05 15:14:16"
				}
			},
			"/mobile/evaluationController/getScanStudentList.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "获取已扫描的的学生列表-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "ceId",
							"in": "formData",
							"description": "评测id",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"sum\": \"int, 已扫描的总人数\",\n        \"A\": \"int, 选项A数量\",\n        \"B\": \"int, 选项B数量\",\n        \"C\": \"int, 选项C数量\",\n        \"D\": \"int, 选项D数量\",\n        \"ceId\": \"int, 评测id\",\n        \"ceTitle\": \"string, 评测标题\",\n        \"classId\": \"int, 班级id\",\n        \"className\": \"string, 班级名称\"\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"ceId\": \"int, 评测id\",\n            \"studentId\": \"int, 学生id\",\n            \"studentName\": \"string, 学生姓名\",\n            \"option\": \"string, 学生选项\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-24 11:35:45"
				}
			},
			"/mobile/evaluationController/getSchoolLeaderPercentReport.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "查询学校领导查看学校各科目评测完成度列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "schoolId",
							"in": "path",
							"description": "学校id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "gradeId",
							"in": "path",
							"description": "年级id",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "dateType",
							"in": "path",
							"description": "日期种类:    WEEK:近一周,    MONTH:一月,TERM:一学期 ",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "queryStartId",
							"in": "path",
							"description": "当前条数",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "当前页数，默认为10",
							"required": false,
							"type": "integer",
							"default": "10",
							"format": "int32"
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"\",\n    \"rows\": [\n        {\n            \"createDate\": \"2017-03-01 15:32:54\",\n            \"endDate\": \"2017-03-01\",\n            \"id\": 6,\n            \"reportName\": \"3月第四周高2015级测评完成度报告\",\n            \"schoolGradePercentVos\": [\n                {\n                    \"courseId\": 280,\n                    \"courseName\": \"语文\",\n                    \"gradeId\": 3,\n                    \"gradeName\": \"高2015级\",\n                    \"percent\": 0.25,\n                    \"reportId\": 6\n                },\n                {\n                    \"courseId\": 281,\n                    \"courseName\": \"数学\",\n                    \"gradeId\": 3,\n                    \"gradeName\": \"高2015级\",\n                    \"percent\": 2.25,\n                    \"reportId\": 6\n                },\n                {\n                    \"courseId\": 282,\n                    \"courseName\": \"英语\",\n                    \"gradeId\": 3,\n                    \"gradeName\": \"高2015级\",\n                    \"percent\": 0.5,\n                    \"reportId\": 6\n                }\n            ],\n            \"startDate\": \"2017-02-22\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 1\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 18,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-03-02 17:14:30"
				}
			},
			"/mobile/evaluationController/getSchoolPcAllByLeader.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "教育局领导查询学校完成度列表",
					"description": "教育局领导查询学校完成度列表。如需分页，需传入queryStartId参数。可传入grade_id参数，根据年级查询",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "grade_id",
							"in": "formData",
							"description": "按年级筛选，年级ID，若多个年级，ID用“，”分割",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "begin_Time",
							"in": "formData",
							"description": "按时间筛选。格式：“2017-01-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "end_Time",
							"in": "formData",
							"description": "按时间筛选。格式：“2017-01-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "如需分页，需要传入该参数",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"5\",\n    \"rows\": [\n        {\n            \"beginTime\": \"2017-02-22\",\n            \"createTime\": \"2017-03-01 15:32:54\",\n            \"endTime\": \"2017-03-01\",\n            \"gradeId\": 3,\n            \"gradeName\": \"高2015级\",\n            \"id\": 6,\n            \"percent\": 0.005,\n            \"reportId\": 6,\n            \"schoolId\": 19,\n            \"schoolName\": \"绵阳中学\"\n        },\n        {\n            \"beginTime\": \"2017-02-22\",\n            \"createTime\": \"2017-03-01 15:32:54\",\n            \"endTime\": \"2017-03-01\",\n            \"gradeId\": 2,\n            \"gradeName\": \"高2014级\",\n            \"id\": 5,\n            \"percent\": 0.005,\n            \"reportId\": 5,\n            \"schoolId\": 19,\n            \"schoolName\": \"绵阳中学\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 2\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 24,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-03-03 17:10:49"
				}
			},
			"/mobile/evaluationController/getSchoolPcContrastByLeader.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "教育局领导查询学校完成度对比接口",
					"description": "教育局领导查询学校完成度对比接口。默认返回近4次对比，如需查询多次，需传入begin_Time，end_Time。格式：“2017-01-01”",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "begin_Time",
							"in": "formData",
							"description": "按时间筛选。格式：“2017-01-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "end_Time",
							"in": "formData",
							"description": "按时间筛选。格式：“2017-01-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "grade_id",
							"in": "formData",
							"description": "年级ID",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "school_id",
							"in": "formData",
							"description": "对比学校ID，只能传入2个。中间“，”分割",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"\",\n    \"rows\": [\n        {\n            \"beginTime\": \"2017-02-22\",\n            \"createTime\": \"2017-03-01\",\n            \"endTime\": \"2017-03-01\",\n            \"gradeId\": 3,\n            \"gradeName\": \"高2015级\",\n            \"id\": 6,\n            \"schoolList\": [\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 6,\n                    \"schoolId\": 19,\n                    \"schoolName\": \"绵阳中学\"\n                },\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 7,\n                    \"schoolId\": 29,\n                    \"schoolName\": \"南山中学\"\n                }\n            ]\n        },\n        {\n            \"beginTime\": \"2017-02-22\",\n            \"createTime\": \"2017-03-01\",\n            \"endTime\": \"2017-03-01\",\n            \"gradeId\": 3,\n            \"gradeName\": \"高2015级\",\n            \"id\": 6,\n            \"schoolList\": [\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 6,\n                    \"schoolId\": 19,\n                    \"schoolName\": \"绵阳中学\"\n                },\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 7,\n                    \"schoolId\": 29,\n                    \"schoolName\": \"南山中学\"\n                }\n            ]\n        },\n        {\n            \"beginTime\": \"2017-02-22\",\n            \"createTime\": \"2017-03-01\",\n            \"endTime\": \"2017-03-01\",\n            \"gradeId\": 3,\n            \"gradeName\": \"高2015级\",\n            \"id\": 6,\n            \"schoolList\": [\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 6,\n                    \"schoolId\": 19,\n                    \"schoolName\": \"绵阳中学\"\n                },\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 7,\n                    \"schoolId\": 29,\n                    \"schoolName\": \"南山中学\"\n                }\n            ]\n        },\n        {\n            \"beginTime\": \"2017-02-22\",\n            \"createTime\": \"2017-03-01\",\n            \"endTime\": \"2017-03-01\",\n            \"gradeId\": 3,\n            \"gradeName\": \"高2015级\",\n            \"id\": 6,\n            \"schoolList\": [\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 6,\n                    \"schoolId\": 19,\n                    \"schoolName\": \"绵阳中学\"\n                },\n                {\n                    \"percent\": 0.005,\n                    \"reportId\": 7,\n                    \"schoolId\": 29,\n                    \"schoolName\": \"南山中学\"\n                }\n            ]\n        }\n    ],\n    \"success\": true,\n    \"total\": 4\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 25,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-03-03 18:15:26"
				}
			},
			"/mobile/evaluationController/getSchoolTeacherPercent.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "查询学校老师完成度详情",
					"description": "查询评测完成度报告各老师完成度详情",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "reportId",
							"in": "formData",
							"description": "完成度报告id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "schoolId",
							"in": "formData",
							"description": "学校id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "gradeId",
							"in": "formData",
							"description": "年级id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "courseId",
							"in": "formData",
							"description": "科目id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "开始条数",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页条数",
							"required": false,
							"type": "string",
							"default": "10",
							"format": ""
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"\",\n    \"rows\": [\n        {\n            \"className\": \"高2015级1班\",\n            \"gradeId\": 3,\n            \"gradeName\": \"高2015级\",\n            \"percent\": 0.25,\n            \"reportId\": 6,\n            \"teacherId\": 50807,\n            \"teacherName\": \"席容\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 1\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 19,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-03-02 17:21:41"
				}
			},
			"/mobile/evaluationController/getStuContrast.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "老师查询学生对比详情",
					"description": "老师查询学生对比详情，默认返回最近4次。若要查询多次，需要传入开始时间（begin_Time），结束时间（end_Time）。时间格式：“2017-12-01”",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "stuIds",
							"in": "formData",
							"description": "学生ID，只能对比两个学生 用\"，\"分隔",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "courseId",
							"in": "formData",
							"description": "对比科目ID",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "begin_Time",
							"in": "formData",
							"description": "若要查询时间段类对比数据，需传入开始时间，结束时间。格式：“2017-12-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "end_Time",
							"in": "formData",
							"description": "若要查询时间段类对比数据，需传入开始时间，结束时间。格式：“2017-12-01”",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"errorCode\": \"\",\n    \"msg\": \"操作成功\",\n    \"obj\": \"\",\n    \"pageNumber\": 0,\n    \"queryStartId\": \"\",\n    \"rows\": [\n        {\n            \"id\": 32,\n            \"reportName\": \"1月第二周测评报告\",\n            \"stu\": [\n                {\n                    \"atPoints\": \"\",\n                    \"id\": \"\",\n                    \"rank\": 8,\n                    \"rankCompare\": \"\",\n                    \"studentId\": 95768,\n                    \"studentName\": \"古友鹏\"\n                },\n                {\n                    \"atPoints\": \"\",\n                    \"id\": \"\",\n                    \"rank\": 4,\n                    \"rankCompare\": \"\",\n                    \"studentId\": 98156,\n                    \"studentName\": \"王馨漪\"\n                }\n            ]\n        },\n        {\n            \"id\": 33,\n            \"reportName\": \"1月第三周测评报告\",\n            \"stu\": [\n                {\n                    \"atPoints\": \"\",\n                    \"id\": \"\",\n                    \"rank\": 8,\n                    \"rankCompare\": \"\",\n                    \"studentId\": 95768,\n                    \"studentName\": \"古友鹏\"\n                },\n                {\n                    \"atPoints\": \"\",\n                    \"id\": \"\",\n                    \"rank\": 4,\n                    \"rankCompare\": \"\",\n                    \"studentId\": 98156,\n                    \"studentName\": \"王馨漪\"\n                }\n            ]\n        },\n        {\n            \"id\": 30,\n            \"reportName\": \"12月第三周测评报告\",\n            \"stu\": [\n                {\n                    \"atPoints\": \"\",\n                    \"id\": \"\",\n                    \"rank\": 14,\n                    \"rankCompare\": \"\",\n                    \"studentId\": 98156,\n                    \"studentName\": \"王馨漪\"\n                },\n                {\n                    \"atPoints\": \"\",\n                    \"id\": \"\",\n                    \"rank\": 6,\n                    \"rankCompare\": \"\",\n                    \"studentId\": 95768,\n                    \"studentName\": \"古友鹏\"\n                }\n            ]\n        },\n        {\n            \"id\": 31,\n            \"reportName\": \"12月第四周测评报告\",\n            \"stu\": [\n                {\n                    \"atPoints\": \"\",\n                    \"id\": \"\",\n                    \"rank\": 6,\n                    \"rankCompare\": \"\",\n                    \"studentId\": 95768,\n                    \"studentName\": \"古友鹏\"\n                },\n                {\n                    \"atPoints\": \"\",\n                    \"id\": \"\",\n                    \"rank\": 4,\n                    \"rankCompare\": \"\",\n                    \"studentId\": 98156,\n                    \"studentName\": \"王馨漪\"\n                }\n            ]\n        }\n    ],\n    \"success\": true,\n    \"total\": 4\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 21,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-03-03 10:13:55"
				}
			},
			"/mobile/evaluationController/getStudentRank.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "根据班级查询学生的排名情况-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "classReportId",
							"in": "formData",
							"description": "测评报告id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"id\": \"int, 测评报告学生id\",\n            \"studentName\": \"string, 学生姓名\",\n            \"atPoints\": \"double, 折合分\",\n            \"rank\": \"int, 排名\",\n            \"rankCompare\": \"int, 排名对比\"\n        }\n    ],\n    \"success\": true,\n    \"queryStartId\": 5,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 12,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-12-05 16:37:03"
				}
			},
			"/mobile/evaluationController/getStudentRankByClassCourse.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "根据班级课程查询学生的排名情况-学生家长",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "reportId",
							"in": "formData",
							"description": "",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "classId",
							"in": "formData",
							"description": "",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "courseId",
							"in": "formData",
							"description": "",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"返回结果": {
							"description": "",
							"sortWeight": 1
						}
					},
					"sortWeight": 26,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2017-05-16 15:55:01"
				}
			},
			"/mobile/evaluationController/getTeachMaterials.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "获取老师的教材信息-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"teachMaterialId\": \"int,教材id\",\n            \"name\": \"string,教材名称\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-24 11:35:50"
				}
			},
			"/mobile/evaluationController/saveEvaluation.do": {
				"post": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "发布课堂评测-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "jsonParam",
							"in": "formData",
							"description": "{    \"ceId\": \"int, 评测id(必传)\",    \"ceTitle\": \"String, 评测名称(必传)\",    \"baseClassId\": \"班级id(必传)\",    \"baseClassName\": \"班级名称(必传)\",    \"baseBookId\": \"教材id\",    \"baseBookName\": \"教材名称\",    \"baseBookChapterId\": \"章节id\",    \"baseBookChapterName\": \"章节名称\",    \"baseBookSectionId\": \"小节id\",    \"baseBookSectionName\": \"小节名称\",\"questionNumber\": \"题数\"}",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"attributes\": {},\n  \"msg\": \"操作成功\",\n  \"pageNumber\": 1,\n  \"rows\": [],\n  \"success\": true,\n  \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 6,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-24 11:36:16"
				}
			},
			"/mobile/evaluationController/saveStudentOption.do": {
				"get": {
					"tags": [
						"课堂及时评测"
					],
					"summary": "保存学生评测卡选项-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "studentId",
							"in": "formData",
							"description": "学生id",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "option",
							"in": "formData",
							"description": "评测卡选项",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "ceId",
							"in": "formData",
							"description": "评测id（第一次扫描时，没有评测id则不传，第二次扫描时传入上次返回的评测id）",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"ceId\": \"int, 评测id\",\n        \"studentName\": \"string, 学生姓名\",\n        \"ceTitle\": \"string, 评测标题\",\n        \"classId\": \"int, 班级id\",\n        \"className\": \"string, 班级名称\"\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 10\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-24 11:35:40"
				}
			},
			"/mobile/examCommentController/deleteTeacherScoreRemarkById.do": {
				"get": {
					"tags": [
						"成绩点评"
					],
					"summary": "删除成绩点评-家长",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "scoreRemarkId",
							"in": "formData",
							"description": "点评ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 10,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 17:06:11"
				}
			},
			"/mobile/examCommentController/getMessageTemplateList.do": {
				"get": {
					"tags": [
						"家校消息"
					],
					"summary": "获取消息模板-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "下一个查询点",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页数量",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 17:15:16"
				}
			},
			"/mobile/examCommentController/getParentComment.do": {
				"get": {
					"tags": [
						"家长助威"
					],
					"summary": "获取家长助威-家长",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "下一个查询点",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页返回数量",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "examlevel",
							"in": "formData",
							"description": "考试级别",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"attributes\": {},\n  \"msg\": \"操作成功\",\n  \"pageNumber\": 1,\n  \"rows\": [\n    {\n      \"commentId\": \"评论id\",\n      \"accountId\": \"int,评论人账号id\",\n      \"accountName\": \"string,评论人姓名\",\n      \"portraitPath\": \"string,评论人头像地址\",\n      \"accountSchoolName\": \"string,评论人学校名称\",\n      \"content\": \"string,评论内容\",\n      \"createTime\": \"date,评论时间\",\n      \"isDelete\": \"boolean,是否删除\",\n      \"isPass\": \"boolean,是否审核通过\",\n      \"isSee\": \"boolean,是否查看\",\n      \"floor\": \"int,楼层\",\n      \"parent\": \"object,回复的评论，结构同上面\"\n    }\n  ],\n  \"success\": true,\n  \"total\": \"int,总记录数量\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 16:44:19"
				}
			},
			"/mobile/examCommentController/getStudentComment.do": {
				"get": {
					"tags": [
						"考试吐槽"
					],
					"summary": "获取考试吐槽评论列表-学生",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "下一个查询点",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页返回数量",
							"required": false,
							"type": "integer",
							"default": "10",
							"format": "int32"
						},
						{
							"name": "examlevel",
							"in": "formData",
							"description": "考试级别",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"commentId\": \"评论id\",\n            \"accountId\": \"int,评论人账号id\",\n            \"accountName\": \"string,评论人姓名\",\n            \"portraitPath\": \"string,评论人头像地址\",\n            \"accountSchoolName\": \"string,评论人学校名称\",\n            \"artorscience\": \"int,0未分科 1文科 2理科\",\n            \"content\": \"string,评论内容\",\n            \"createTime\": \"date,评论时间\",\n            \"isDelete\": \"boolean,是否删除\",\n            \"isPass\": \"boolean,是否审核通过\",\n            \"isSee\": \"boolean,是否查看\",\n            \"floor\": \"int,楼层\",\n            \"parent\": \"object,回复的评论，结构同上面\"\n        }\n    ],\n    \"success\": true,\n    \"total\": \"int,总记录数量\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 17:53:29"
				}
			},
			"/mobile/examCommentController/getTeacherFlowerList.do": {
				"get": {
					"tags": [
						"家校消息"
					],
					"summary": "获取老师收的鲜花列表-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 17:15:39"
				}
			},
			"/mobile/examCommentController/getTeacherScoreRemarkListByTeacher.do": {
				"get": {
					"tags": [
						"家校消息"
					],
					"summary": "获取考试点评列表-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 17:15:26"
				}
			},
			"/mobile/examCommentController/getTeacherScoreRemarkObjectList.do": {
				"get": {
					"tags": [
						"家校消息"
					],
					"summary": "获取考试点评中点评对象列表-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 17:15:33"
				}
			},
			"/mobile/examCommentController/saveParentComment.do": {
				"post": {
					"tags": [
						"家长助威"
					],
					"summary": "保存家长助威-家长",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试ID",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "parentCommentId",
							"in": "formData",
							"description": "所属回复评论",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "content",
							"in": "formData",
							"description": "评论内容",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "examlevel",
							"in": "formData",
							"description": "考试级别",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"attributes\": {},\n  \"msg\": \"操作成功\",\n  \"pageNumber\": 0,\n  \"rows\": [],\n  \"success\": true,\n  \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 16:44:54"
				}
			},
			"/mobile/examCommentController/saveStudentComment.do": {
				"post": {
					"tags": [
						"考试吐槽"
					],
					"summary": "保存考试吐槽评论-学生",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "parentCommentId",
							"in": "formData",
							"description": "所属回复评论",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "content",
							"in": "formData",
							"description": "评论内容",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "examlevel",
							"in": "formData",
							"description": "考试级别",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"attributes\": {},\n  \"msg\": \"操作成功\",\n  \"pageNumber\": 0,\n  \"rows\": [],\n  \"success\": true,\n  \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 13:58:04"
				}
			},
			"/mobile/examCommentController/updateTeacherBindInfo.do": {
				"post": {
					"tags": [
						"个人中心"
					],
					"summary": "更新老师绑定信息-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {},
					"sortWeight": 7,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-11-22 17:37:13"
				}
			},
			"/mobile/scoreRemarkController/getComments.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "查询一个成绩点评的回复列表-共用",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "queryStartId",
							"in": "query",
							"description": "查询起点，不传表示第一页",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "pageSize",
							"in": "query",
							"description": "每页数量",
							"required": false,
							"type": "integer",
							"default": "10",
							"format": "int32"
						},
						{
							"name": "scoreRemarkId",
							"in": "query",
							"description": "点评ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"rows\": [\n        {\n            \"commentId\": \"评论id\",\n            \"accountId\": \"int,评论人账号id\",\n            \"accountName\": \"string,评论人姓名\",\n            \"portraitPath\": \"string,评论人头像地址\",\n            \"accountType\": \"int,评论人类型1、学生；3、家长\",\n            \"accountSchoolName\": \"string,评论人学校名称\",\n            \"content\": \"string,评论内容\",\n            \"createTime\": \"date,评论时间\",\n            \"isDelete\": \"boolean,是否删除\",\n            \"isPass\": \"boolean,是否审核通过\",\n            \"isSee\": \"boolean,是否查看\",\n            \"floor\": \"int,楼层\",\n            \"parent\": \"object,回复的评论，结构同上面\"\n        }\n    ],\n    \"msg\": \"string,查询结果消息\",\n    \"success\": \"boolean,查询结果状态\",\n    \"pageNumber\": \"integer,当前页码\",\n    \"total\": \"integer,总记录数\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 9,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 15:21:45"
				}
			},
			"/mobile/scoreRemarkController/getExamList.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "查询成绩点评的考试列表-老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "baseClassId",
							"in": "formData",
							"description": "基础班级id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "pageNumber",
							"in": "formData",
							"description": "页码",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int32"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页数量",
							"required": true,
							"type": "integer",
							"default": "10",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"rows\": [\n        {\n            \"examId\": \"long,考试id\",\n            \"examLevel\": \"int,考试级别（0-市级，1-区县级，2-校级，3-班级）\",\n            \"examName\": \"string,考试名称\",\n            \"examTime\": \"date,考试时间，如2016-09-30 00:00:00\",\n            \"examType\": \"考试类型（0表示普通考试，1表示网阅考试）\",\n            \"gradeId\": \"考试年级\",\n            \"termId\": \"考试学期\"\n        }\n    ],\n    \"success\": true,\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"total\": 12\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-27 17:13:53"
				}
			},
			"/mobile/scoreRemarkController/getOneScoreRemarkDetail.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "查询一个成绩点评的详情--共用",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "id",
							"in": "query",
							"description": "点评的id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"scoreRemark\": {\n            \"id\": \"long,点评ID\",\n            \"remarkId\": \"long,点评ID,与上面id值相同\",\n            \"content\": \"string,点评内容\",\n            \"createTime\": \"date,创建日期\",\n            \"accountId\": \"integer,教师账号id\",\n            \"accountName\": \"string,教师姓名\",\n            \"accountSchoolId\": \"int,教师学校id\",\n            \"accountSchoolName\": \"string,教师学校名称\",\n            \"accountPortraitPath\": \"string,教师头像\",\n            \"examId\": \"integer,考试id\",\n            \"examName\": \"string,考试名称\",\n            \"examLevel\": \"int,考试级别\",\n            \"examTime\": \"date,考试时间\",\n            \"subjectId\": \"int,点评科目id\",\n            \"subjectName\": \"string,点评科目名称\",\n            \"classId\": \"int,点评班级id\",\n            \"className\": \"string,点评班级名称\",\n            \"classPhaseName\": \"string,点评班级学段\",\n            \"satisfactionDegree\": \"integer,考试满意度\",\n            \"studentNum\": \"int,点评学生总数\",\n            \"viewTotal\": \"integer,已阅总数\",\n            \"commentTotal\": \"integer,评论总数\"\n        }\n    },\n    \"msg\": \"string,查询结果消息\",\n    \"success\": \"boolean,查询结果状态\",\n    \"pageNumber\": \"integer,当前页码\",\n    \"total\": \"integer,总记录数\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 8,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 15:21:52"
				}
			},
			"/mobile/scoreRemarkController/getParentSeletesForSingle.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "查询成绩点评家长选择列表-单科--老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "examLevel",
							"in": "formData",
							"description": "考试级别：0-市级，1-区县级，2-校级，3-班级",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "baseClassId",
							"in": "formData",
							"description": "云平台考试班级id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "baseSubjectId",
							"in": "formData",
							"description": "云平台学科id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"catagories\": \"array,结构与总分getParentSeletesForTotal相同\"\n    },\n    \"msg\": \"string,查询结果消息\",\n    \"success\": \"boolean,查询结果状态\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 14:32:21"
				}
			},
			"/mobile/scoreRemarkController/getParentSeletesForTotal.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "查询成绩点评家长选择列表-总分--老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "examLevel",
							"in": "formData",
							"description": "考试级别：0-市级，1-区县级，2-校级，3-班级",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "baseClassId",
							"in": "formData",
							"description": "云平台考试班级id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"catagories\": [\n            {\n                \"catagroyName\": \"string,分类名称\",\n                \"parents\": [\n                    {\n                        \"studentAccountId\": \"integer,学生账号id\",\n                        \"studentName\": \"string,学生姓名\",\n                        \"reg\": \"boolean,家长是否注册\"\n                    }\n                ]\n            }\n        ]\n    },\n    \"msg\": \"string,查询结果消息\",\n    \"success\": \"boolean,查询结果状态\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 14:33:01"
				}
			},
			"/mobile/scoreRemarkController/getScoreRemarksForParent.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "查询一个家长的成绩点评列表-家长",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "pageNumber",
							"in": "formData",
							"description": "页码",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int32"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页数量",
							"required": true,
							"type": "integer",
							"default": "10",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"rows\": [\n        \"object,结构同一个成绩点评的详情getOneScoreRemarkDetail.do中scoreRemark\"\n    ],\n    \"msg\": \"string,查询结果消息\",\n    \"success\": \"boolean,查询结果状态\",\n    \"pageNumber\": \"integer,当前页码\",\n    \"total\": \"integer,总记录数\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 7,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 14:24:09"
				}
			},
			"/mobile/scoreRemarkController/getScoreRemarksForTeacher.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "查询一个教师的成绩点评列表--老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "pageNumber",
							"in": "formData",
							"description": "页码",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int32"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页数量",
							"required": true,
							"type": "integer",
							"default": "10",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"rows\": [\n        \"object,结构同一个成绩点评的详情getOneScoreRemarkDetail.do中scoreRemark\"\n    ],\n    \"msg\": \"string,查询结果消息\",\n    \"success\": \"boolean,查询结果状态\",\n    \"pageNumber\": \"integer,当前页码\",\n    \"total\": \"integer,总记录数\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 6,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 14:24:42"
				}
			},
			"/mobile/scoreRemarkController/saveComment.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "保存成绩点评的回复-共用",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "scoreRemarkId",
							"in": "formData",
							"description": "成绩点评ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "parentCommentId",
							"in": "formData",
							"description": "所属回复的评论",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "content",
							"in": "formData",
							"description": "评论的内容",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"msg\": \"string,执行结果消息\",\n    \"success\": \"boolean,执行结果状态\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 11,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 15:21:39"
				}
			},
			"/mobile/scoreRemarkController/saveScoreRemark.do": {
				"post": {
					"tags": [
						"成绩点评"
					],
					"summary": "保存成绩点评--老师",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "examName",
							"in": "formData",
							"description": "考试名称",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "examLevel",
							"in": "formData",
							"description": "考试级别 0-市级，1-区县级，2-校级，3-班级",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "examTime",
							"in": "formData",
							"description": "考试时间",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "classId",
							"in": "formData",
							"description": "点评班级",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "className",
							"in": "formData",
							"description": "点评班级名称",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "subjectId",
							"in": "formData",
							"description": "点评科目id，整体使用-1",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "subjectName",
							"in": "formData",
							"description": "点评科目名称，整体使用\"整体\"",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "satisfactionDegree",
							"in": "formData",
							"description": "考试满意度",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "content",
							"in": "formData",
							"description": "点评内容",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "studentAccountIds",
							"in": "formData",
							"description": "英文逗号连接的学生账号id",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "classPhaseName",
							"in": "formData",
							"description": "班级学段名称",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "object",
								"format": "",
								"required": false,
								"description": "",
								"title": "default",
								"properties": {
									"msg": {
										"type": "string",
										"required": false,
										"description": "执行结果消息"
									},
									"success": {
										"type": "boolean",
										"required": false,
										"description": "执行结果状态"
									}
								}
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-23 18:01:40"
				}
			},
			"/mobile/xbController/getExamList.do": {
				"post": {
					"tags": [
						"学霸说-列表"
					],
					"summary": "查询历次考试列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "pageNumber",
							"in": "formData",
							"description": "页码",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int32"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页数量",
							"required": true,
							"type": "integer",
							"default": "10",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [\n        {\n            \"id\": \"long,考试主键id\",\n            \"name\": \"string,考试名称\",\n            \"type\": \"int,考试类型：1、市级；2、区县级\",\n            \"examTime\": \"date,考试时间\",\n            \"takeInNum\": \"int,实际参加学霸人数\",\n            \"scoreExamId\": \"long,成绩分析考试id\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 1\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-07 22:43:01"
				}
			},
			"/mobile/xbController/getIsXb.do": {
				"post": {
					"tags": [
						"学霸说-列表"
					],
					"summary": "查询当前账号是否是学霸",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"isXb\": \"boolean,是否是学霸\",\n        \"isTakeIn\": \"boolean,是否已经发表过学霸说\",\n        \"isParentClick\": \"boolean,家长是否点击过孩子的学霸说\",\n        \"student\": {\n            \"accountId\": \"int,学生账号id\",\n            \"accountName\": \"string,学生姓名\",\n            \"portraitPath\": \"string,头像地址\",\n            \"schoolName\": \"string,学校名称 \"\n        }\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:24:05"
				}
			},
			"/mobile/xbController/getOneAccountSpeakComments.do": {
				"post": {
					"tags": [
						"个人中心"
					],
					"summary": "查询评论消息列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"queryStartId\": \"12\",\n    \"rows\": [\n        {\n            \"commentId\": 12,\n            \"commentName\": \"高瀚月\",\n            \"commentCatagory\": 1,\n            \"commentPortraitPath\": \"\",\n            \"commentSchoolName\": \"南山中学\",\n            \"commentCreateTime\": \"2016-09-13 17:25:48\",\n            \"commentContent\": \"高瀚月来评论郑羽婷的说说了，楼上说的对！！！！\",\n            \"commentIsDelete\": false,\n            \"comment_target_type\": \"string,评论类型(家长用户才有值)：xb_speak-学霸说，parent_topic-家长话题\",\n            \"speak\": {\n                \"speakName\": \"郑羽婷\",\n                \"speakCatagory\": 1,\n                \"speakPortraitPath\": \"\",\n                \"speakSchoolName\": \"南山中学\",\n                \"speakId\": 1,\n                \"speakType\": 2,\n                \"speakUrl\": \"test/51045/12441223324243444000.mp4\",\n                \"speakOriginalUrl\": \"test/51045/51045_20160119212104905.mp4\",\n                \"speakFirstFrameUrl\": \"\",\n                \"speakDuration\": \"int,说说的时长\",\n                \"speakCommentTotal\": \"int,评论总数\",\n                \"speakPlayTotal\": \"int,播放次数\",\n                \"speakThumbsUpTotal\": \"int,赞成总数\",\n                \"speakCreateTime\": \"2016-09-09 22:06:41\",\n                \"speakIsDelete\": false\n            },\n            \"parent\": {\n                \"commentId\": 11,\n                \"commentName\": \"郑羽婷\",\n                \"commentCatagory\": 1,\n                \"commentPortraitPath\": \"\",\n                \"commentSchoolName\": \"南山中学\",\n                \"commentCreateTime\": \"2016-09-13 17:22:37\",\n                \"commentContent\": \"郑羽婷自己对自己的学霸说进行了评论。。。。。\",\n                \"commentIsDelete\": false\n            },\n            \"topic\": {\n                \"id\": \"long,话题id\"\n            },\n            \"analysis\": {\n                \"accountId\": \"int, 解析人id\",\n                \"questionId\": \"int, 问题id\",\n                \"analysisSchoolName\": \"string, 学校名称\",\n                \"analysisCatagory\": \"int, 用户类型\",\n                \"analysisCreateTime\": \"string, 解析创建时间\",\n                \"accountName\": \"string, 解析人姓名\",\n                \"analysisPortraitPath\": \"string, 头像\",\n                \"analysisClassName\": \"string, 班级名称\",\n                \"analysisContent\": \"string, 内容\",\n                \"analysisId\": \"int, 解析id\",\n                \"analysisUrl\": \"string, 资源地址\",\n                \"analysisType\": \"int, 资源类型， 1图片 2视频 3音频\"\n            }\n        }\n    ],\n    \"msg\": \"操作成功\",\n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-14 10:00:28"
				}
			},
			"/mobile/xbController/getOneAccountThumbsUps.do": {
				"post": {
					"tags": [
						"个人中心"
					],
					"summary": "查询学霸说点赞消息列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"queryStartId\": \"39\",\n    \"rows\": [\n        {\n            \"thumbsUpName\": \"任韦台\",\n            \"thumbsUpCatagory\": 1,\n            \"thumbsUpPortraitPath\": \"test/407070/407070_20160928145504687.png\",\n            \"thumbsUpSchoolName\": \"永新小学\",\n            \"thumbsUpMsg\": \"赞了您的学霸说\",\n            \"thumbsUpCreateTime\": \"2016-09-28 17:09:52\",\n            \"thumbsIsAgree\": true,\n            \"speak\": {\n                \"speakName\": \"任韦台\",\n                \"speakCatagory\": 1,\n                \"speakPortraitPath\": \"test/407070/407070_20160928145504687.png\",\n                \"speakSchoolName\": \"永新小学\",\n                \"speakId\": 87,\n                \"speakType\": 3,\n                \"speakUrl\": \"test/407070/407070_20160928165332036.mp3\",\n                \"speakOriginalUrl\": \"test/407070/407070_20160928165332036.wav\",\n                \"speakFirstFrameUrl\": \"\",\n                \"speakDuration\": 8,\n                \"speakCommentTotal\": 0,\n                \"speakPlayTotal\": 3,\n                \"speakThumbsUpTotal\": 1,\n                \"speakCreateTime\": \"2016-09-28 16:55:15\",\n                \"speakIsDelete\": false\n            },\n            \"analysis\": {\n                \"accountId\": \"int, 解析人id\",\n                \"questionId\": \"int, 问题id\",\n                \"analysisSchoolName\": \"string, 学校名称\",\n                \"analysisCatagory\": \"int, 用户类型\",\n                \"analysisCreateTime\": \"string, 解析创建时间\",\n                \"accountName\": \"string, 解析人姓名\",\n                \"analysisPortraitPath\": \"string, 头像\",\n                \"analysisClassName\": \"string, 班级名称\",\n                \"analysisContent\": \"string, 内容\",\n                \"analysisId\": \"int, 解析id\",\n                \"analysisUrl\": \"string, 资源地址\",\n                \"analysisType\": \"int, 资源类型， 1图片 2视频 3音频\"\n            }\n        }\n    ],\n    \"success\": true,\n    \"msg\": \"操作成功\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 6,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 15:43:42"
				}
			},
			"/mobile/xbController/getOneExamAllSubjectSpeaks.do": {
				"post": {
					"tags": [
						"学霸说-列表"
					],
					"summary": "查询某次考试所有科的学霸列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"subjects\": [\n            {\n                \"subjectId\": \"long,学科主键id\",\n                \"subjectName\": \"string,学科名称\",\n                \"takeInNum\": \"int,参与总人数\",\n                \"students\": [\n                    {\n                        \"accountId\": \"int,学生账号id\",\n                        \"accountName\": \"string,学生姓名\",\n                        \"portraitPath\": \"string,头像地址\"\n                    }\n                ]\n            }\n        ]\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:04:42"
				}
			},
			"/mobile/xbController/getOneSpeak.do": {
				"post": {
					"tags": [
						"学霸说-查看"
					],
					"summary": "查询一个说说的详情",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "formData",
							"description": "说说id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"speak\": {\n            \"speakId\": \"long,说说id\",\n            \"duration\": \"int,说说时长（单位秒）\",\n            \"type\": \"int,说说类型：2、视频；3、音频\",\n            \"url\": \"string,说说URL\",\n            \"firstFrameUrl\": \"说说视频的首桢图地址,可能没有值\",\n            \"createTime\": \"date,发布时间\",\n            \"accountId\": \"int,发布者账号ID\",\n            \"accountName\": \"string,发布者姓名\",\n            \"portraitPath\": \"string,发布者头像地址\",\n            \"schoolId\": \"int,发布者学校id\",\n            \"schoolName\": \"string,发布者学校名称\",\n            \"thumbsUpTotal\": \"int,点赞总数\",\n            \"commentTotal\": \"int,评论总数\",\n            \"playTotal\": \"int,播放总数\",\n            \"isDelete\": \"boolean,是否删除\",\n            \"isPass\": \"boolean,是否审核通过\",\n            \"programaId\": \"long,栏目id\",\n            \"programaName\": \"string,栏目名称\",\n            \"subjectId\": \"long,学科id\",\n            \"subjectName\": \"string,学科名称\",\n            \"isThumbsUp\": \"boolean,当前查询者是否对该说说点过赞\"\n        }\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:27:58"
				}
			},
			"/mobile/xbController/getOneSpeakComments.do": {
				"post": {
					"tags": [
						"学霸说-查看"
					],
					"summary": "查询一个说说评论列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "formData",
							"description": "说说id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        {\n            \"commentId\": \"评论id\",\n            \"accountId\": \"int,评论人账号id\",\n            \"accountName\": \"string,评论人姓名\",\n            \"portraitPath\": \"string,评论人头像地址\",\n            \"accountType\": \"int,评论人类型1、学生；3、家长\",\n            \"accountSchoolName\": \"string,评论人学校名称\",\n            \"content\": \"string,评论内容\",\n            \"createTime\": \"date,评论时间\",\n            \"isDelete\": \"boolean,是否删除\",\n            \"isPass\": \"boolean,是否审核通过\",\n            \"isSee\": \"boolean,是否查看\",\n            \"floor\": \"int,楼层\",\n            \"parent\": \"object,回复的评论，结构同上面\"\n        }\n    ],\n    \"success\": true,\n    \"total\": \"int,总记录数量\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:50:45"
				}
			},
			"/mobile/xbController/getOneStudentSpeaks.do": {
				"post": {
					"tags": [
						"学霸说-查看"
					],
					"summary": "查询一次考试中某个人说说列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "accountId",
							"in": "formData",
							"description": "学生账号id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "subjectId",
							"in": "formData",
							"description": "学科id，不传值时查询全部学科",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "pageNumber",
							"in": "formData",
							"description": "页码",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int32"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页数量",
							"required": true,
							"type": "integer",
							"default": "10",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        \"说说结构同getOneSpeak.do接口中的speak\"\n    ],\n    \"success\": true,\n    \"total\": \"int,总记录数量\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:22:02"
				}
			},
			"/mobile/xbController/getSpeaksByOneExam.do": {
				"post": {
					"tags": [
						"学霸说-查看"
					],
					"summary": "查询一次考试中某科说说列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "subjectId",
							"in": "formData",
							"description": "学科id",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "programaId",
							"in": "formData",
							"description": "学科栏目id",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "pageNumber",
							"in": "formData",
							"description": "页码",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "pageSize",
							"in": "formData",
							"description": "每页数量",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 1,\n    \"rows\": [\n        \"说说结构同getOneSpeak.do接口中的speak\"\n    ],\n    \"success\": true,\n    \"total\": \"int,总记录数量\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:21:53"
				}
			},
			"/mobile/xbController/getSubjectsAndProgramas.do": {
				"post": {
					"tags": [
						"学霸说-发布"
					],
					"summary": "查询一次考试可选择科目和栏目",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"examId\": \"long,考试id\",\n        \"examName\": \"string,考试名称\",\n        \"subjects\": [\n            {\n                \"subjectId\": \"long,学科id\",\n                \"subjectName\": \"string,学科名称\",\n                \"programas\": [\n                    {\n                        \"programaId\": \"int,栏目id\",\n                        \"programaName\": \"string,栏目名称\"\n                    }\n                ]\n            }\n        ]\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 10:57:55"
				}
			},
			"/mobile/xbController/getTheLatestExam.do": {
				"post": {
					"tags": [
						"学霸说-列表"
					],
					"summary": "查询最近有学霸说的考试信息",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"hasOne\": \"boolean, 是否有数据\",\n        \"exam\": {\n            \"id\": \"long,考试主键id\",\n            \"name\": \"string,考试名称\"\n        }\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:23:25"
				}
			},
			"/mobile/xbController/getUnReadCommentNumber.do": {
				"get": {
					"tags": [
						"个人中心"
					],
					"summary": "查询登陆用户的未读的学霸说评论数量",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"number（未读的说说评论数量）\": 69\n    }, \n    \"msg\": \"成功\", \n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 15:43:22"
				}
			},
			"/mobile/xbController/getUnReadMsgTotal.do": {
				"post": {
					"tags": [
						"个人中心"
					],
					"summary": "查询未读消息数量（包括总数和各分类的数量）",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"unReadTotalNumber\": \"int,所有未读消息总数\",\n        \"thumbsUpUnReadNumber\": \"int,学霸说点赞未读总数,学生才有值\",\n        \"commentUnReadNumber\": \"int,学霸说评论未读总数\",\n        \"scoreRemarkUnReadNumber\": \"int,成绩点评未读总数\",\n \"parentReceivedScoreRemarkUnReadNumber\": \"int,家长接收的未读的教师点评总数\"\n    },\n    \"msg\": \"操作成功\",\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 15:43:08"
				}
			},
			"/mobile/xbController/getUnReadThumbsUpNumber.do": {
				"get": {
					"tags": [
						"个人中心"
					],
					"summary": "查询登陆用户未读的学霸说点赞数量",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"number（未读的点赞数量）\": 69\n    }, \n    \"msg\": \"成功\", \n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 15:43:14"
				}
			},
			"/mobile/xbController/saveComment.do": {
				"post": {
					"tags": [
						"学霸说-互动"
					],
					"summary": "保存评论",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "formData",
							"description": "学霸说ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "parentCommentId",
							"in": "formData",
							"description": "所属回复评论",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "content",
							"in": "formData",
							"description": "评论内容",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:45:57"
				}
			},
			"/mobile/xbController/saveCommentReport.do": {
				"post": {
					"tags": [
						"学霸说-互动"
					],
					"summary": "保存学霸说说评论的举报",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakCommentId",
							"in": "formData",
							"description": "学霸说评论的ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "content",
							"in": "formData",
							"description": "举报内容",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"msg\": \"保存成功\",\n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-22 18:13:19"
				}
			},
			"/mobile/xbController/savePlayRecord.do": {
				"post": {
					"tags": [
						"学霸说-互动"
					],
					"summary": "保存播放记录",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "formData",
							"description": "学霸说说ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:45:13"
				}
			},
			"/mobile/xbController/saveReport.do": {
				"post": {
					"tags": [
						"学霸说-互动"
					],
					"summary": "保存学霸说说的举报",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "formData",
							"description": "学霸说ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "content",
							"in": "formData",
							"description": "举报内容",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"msg\": \"保存成功\",\n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-22 18:13:25"
				}
			},
			"/mobile/xbController/saveSpeak.do": {
				"post": {
					"tags": [
						"学霸说-发布"
					],
					"summary": "保存学霸说说",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "subjectId",
							"in": "formData",
							"description": "学科id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "programaId",
							"in": "formData",
							"description": "栏目id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "type",
							"in": "formData",
							"description": "说说类型：2-视频，3音频",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "url",
							"in": "formData",
							"description": "说说地址",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "duration",
							"in": "formData",
							"description": "说说的时长（单位秒）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"msg\": \"String,执行结果消息\",\n    \"success\": \"boolean,执行结果状态\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-07 23:09:53"
				}
			},
			"/mobile/xbController/saveThumbsUp.do": {
				"post": {
					"tags": [
						"学霸说-互动"
					],
					"summary": "保存赞成",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "formData",
							"description": "学霸说ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "isAgree",
							"in": "formData",
							"description": "是否赞同,如果没有传递此参数，则默认为赞同",
							"required": false,
							"type": "boolean",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 11:44:21"
				}
			},
			"/mobile/xbController/setUnReadCommentReadedOfAccount.do": {
				"post": {
					"tags": [
						"个人中心"
					],
					"summary": "设置登陆用户的评论全部为已读状态",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"msg\": \"操作成功\",\n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 9,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-14 10:50:42"
				}
			},
			"/mobile/xbController/setUnReadThumbsUpReadedOfAccount.do": {
				"post": {
					"tags": [
						"个人中心"
					],
					"summary": "设置登陆用户的赞全部为已读状态",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"msg\": \"操作成功\",\n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 8,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-10-14 10:50:34"
				}
			},
			"/mobile/xbController/updateParentClick.do": {
				"post": {
					"tags": [
						"学霸说-列表"
					],
					"summary": "更改家长点击过学生学霸说状态（家长调用）",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "formData",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "object",
								"format": "",
								"required": false,
								"description": "",
								"title": "default",
								"properties": {
									"msg": {
										"type": "string",
										"required": false,
										"description": "执行结果消息"
									},
									"success": {
										"type": "boolean",
										"required": false,
										"description": "执行结果状态"
									}
								}
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-14 11:33:39"
				}
			},
			"/restful/geCitytXbStudentNum.do": {
				"get": {
					"tags": [
						"成绩分析提供的接口"
					],
					"summary": "市级-根据比例查询市级考试学霸人数",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "query",
							"description": "市级考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "ratio",
							"in": "query",
							"description": "超越率",
							"required": true,
							"type": "number",
							"default": "",
							"format": "double"
						},
						{
							"name": "tenantId",
							"in": "query",
							"description": "",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"num\": \"int,实际学霸人数\"\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-09 09:33:08"
				}
			},
			"/restful/getCityExams.do": {
				"get": {
					"tags": [
						"成绩分析提供的接口"
					],
					"summary": "市级-查询市级考试",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "startTime",
							"in": "query",
							"description": "待查询考试时间起点，即只需要这个参数之后的考试",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "endTime",
							"in": "query",
							"description": "",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "examIds",
							"in": "query",
							"description": "",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "tenantId",
							"in": "query",
							"description": "",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"exams\": [\n            {\n                \"id\": \"long,考试id\",\n                \"name\": \"string,考试名称\",\n                \"studentcount\": \"int,参考总人数\",\n                \"starttime\": \"date,考试时间\",\n                \"gradeid\": \"int,市级年级id\",\n                \"courses\": [\n                    {\n                        \"id\": \"int,学科id\",\n                        \"courseid\": \"int,市级学科id\",\n                        \"coursename\": \"string,学科名称\"\n                    }\n                ]\n            }\n        ]\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-09 09:33:00"
				}
			},
			"/restful/getCityXbAccountId.do": {
				"get": {
					"tags": [
						"成绩分析提供的接口"
					],
					"summary": "市级-查询市级考试学霸账号id",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "query",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "ratio",
							"in": "query",
							"description": "超越率",
							"required": true,
							"type": "number",
							"default": "",
							"format": "double"
						},
						{
							"name": "tenantId",
							"in": "query",
							"description": "",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"students\": [\n            {\n                \"id\": \"int,区县学生id\",\n                \"name\": \"string,学生姓名\",\n                \"rollno\": \"string,基础学籍号\",\n                \"artorscience\": \"int,文理科属性,0-不分文理, 1-文科, 2-理科\"\n            }\n        ]\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-09 09:33:17"
				}
			},
			"/restful/getCountyExams.do": {
				"get": {
					"tags": [
						"成绩分析提供的接口"
					],
					"summary": "区县级-查询区县级考试",
					"description": "比市级多返回一个（区县组织机构id）",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "tenantId",
							"in": "query",
							"description": "租户id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "startTime",
							"in": "query",
							"description": "待查询考试时间起点，即只需要这个参数之后的考试",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "endTime",
							"in": "query",
							"description": "待查询考试时间结束点，即只需要这个参数之后的考试",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "examIds",
							"in": "query",
							"description": "此次查询排除的考试科目",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"exams\": [\n            {\n                \"id\": \"long,考试id\",\n                \"name\": \"string,考试名称\",\n                \"studentcount\": \"int,参考总人数\",\n                \"starttime\": \"date,考试时间\",\n                \"gradeid\": \"int,市级年级id\",\n                \"orgid\": \"int,区县组织机构id\",\n                \"courses\": [\n                    {\n                        \"id\": \"long,学科id\",\n                        \"courseid\": \"int,基础学科id\",\n                        \"coursename\": \"string,学科名称\"\n                    }\n                ]\n            }\n        ]\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-09 19:19:35"
				}
			},
			"/restful/getCountyXbAccountId.do": {
				"get": {
					"tags": [
						"成绩分析提供的接口"
					],
					"summary": "区县级-查询区县级考试学霸账号id",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "query",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "ratio",
							"in": "query",
							"description": "超越率",
							"required": true,
							"type": "number",
							"default": "",
							"format": "double"
						},
						{
							"name": "tenantId",
							"in": "query",
							"description": "",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"students\": [\n            {\n                \"id\": \"int,区县学生id\",\n                \"name\": \"string,学生姓名\",\n                \"rollno\": \"string,基础学籍号\",\n                \"artorscience\": \"int,文理科属性,0-不分文理, 1-文科, 2-理科\"\n            }\n        ]\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 6,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-09 19:19:54"
				}
			},
			"/restful/getCountyXbStudentNum.do": {
				"get": {
					"tags": [
						"成绩分析提供的接口"
					],
					"summary": "区县级-根据比例查询区县级考试学霸人数",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "query",
							"description": "区县级考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "ratio",
							"in": "query",
							"description": "超越率",
							"required": true,
							"type": "number",
							"default": "",
							"format": "double"
						},
						{
							"name": "tenantid",
							"in": "query",
							"description": "",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"num\": \"int,实际学霸人数\"\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-09 19:19:44"
				}
			},
			"/restful/getTeacherScoreRemarkStudentsBySingle.do": {
				"get": {
					"tags": [
						"成绩分析提供的接口"
					],
					"summary": "成绩点评-单科-各分类下学生信息",
					"description": "1、全班是指参加考试的所有人\n2、进步下滑是与上次同级别考试单科全班排名进行比较\n3、偏科生是指总分上了某条优生线，但单科没上",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "query",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "examLevel",
							"in": "query",
							"description": "考试级别：0-市级，1-区县级，2-校级，3-班级",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "baseClassId",
							"in": "query",
							"description": "云平台班级id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "upNum",
							"in": "query",
							"description": "进步名次阈值",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "downNum",
							"in": "query",
							"description": "下滑名次阈值",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "baseSubjectId",
							"in": "query",
							"description": "云平台学科id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "orgId",
							"in": "query",
							"description": "组织机构id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"studentInfo\": {\n            \"all,全班\": [\n                \"string,学生学籍号\"\n            ],\n            \"ups,进步大的\": [\n                \"string,学生学籍号\"\n            ],\n            \"downs,下滑大的\": [\n                \"string,学生学籍号\"\n            ],\n            \"excellents,特优生\": [\n                \"string,学生学籍号\"\n            ],\n            \"unbalancedes,偏科生\": [\n                {\n                    \"name\": \"string,名称，如A优\",\n                    \"rollnos\": [\n                        \"string,学生学籍号\"\n                    ]\n                }\n            ]\n        }\n    },\n    \"msg\": \"string,查询结果消息\",\n    \"success\": \"boolean,查询结果状态\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 8,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 16:49:00"
				}
			},
			"/restful/getTeacherScoreRemarkStudentsByTotal.do": {
				"get": {
					"tags": [
						"成绩分析提供的接口"
					],
					"summary": "成绩点评-总分-各分类下学生信息",
					"description": "1、全班是指所有人\n2、进步下滑是与上次同级别考试总分全班排名进行比较",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "examId",
							"in": "query",
							"description": "考试id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "examLevel",
							"in": "query",
							"description": "考试级别：0-市级，1-区县级，2-校级，3-班级",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "baseClassId",
							"in": "query",
							"description": "云平台班级id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "upNum",
							"in": "query",
							"description": "进步名次阈值",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "downNum",
							"in": "query",
							"description": "下滑名次阈值",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "orgId",
							"in": "query",
							"description": "组织机构id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"studentInfo\": {\n            \"all,全班\": [\n                \"string,学生学籍号\"\n            ],\n            \"ups,进步大的\": [\n                \"string,学生学籍号\"\n            ],\n            \"downs,下滑大的\": [\n                \"string,学生学籍号\"\n            ],\n            \"excellents,特优生\": [\n                \"string,学生学籍号\"\n            ],\n            \"stepOnLines,踩线生\": [\n                {\n                    \"name\": \"string,踩线名称，如踩A线生\",\n                    \"rollnos\": [\n                        \"string,学生学籍号\"\n                    ]\n                }\n            ]\n        }\n    },\n    \"msg\": \"string,查询结果消息\",\n    \"success\": \"boolean,查询结果状态\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 7,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-26 16:46:19"
				}
			},
			"/restful/getUnReadScoreRemarkNumberForParent.do": {
				"get": {
					"tags": [
						"成绩点评"
					],
					"summary": "家长接收的未读的成绩点评数量",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"number\": 2\n    },\n    \"msg\": \"操作成功\",\n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 12,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-28 16:42:40"
				}
			},
			"/restful/mobile/xbController/getOneSpeak.do": {
				"get": {
					"tags": [
						"学霸说-分享"
					],
					"summary": "分享-查询一个说说的详情",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "query",
							"description": "说说id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "返回结构同查看中的/mobile/xbController/getOneSpeak.do",
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 13:44:35"
				}
			},
			"/restful/mobile/xbController/getOneSpeakComments.do": {
				"get": {
					"tags": [
						"学霸说-分享"
					],
					"summary": "分享-查询一个说说评论列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "query",
							"description": "说说id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "pageNumber",
							"in": "query",
							"description": "页码",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int32"
						},
						{
							"name": "pageSize",
							"in": "query",
							"description": "每页数量",
							"required": true,
							"type": "integer",
							"default": "10",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "返回结构同查看中/mobile/xbController/getOneSpeakComments.do",
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 13:44:04"
				}
			},
			"/restful/mobile/xbController/getXbStudentInfo.do": {
				"get": {
					"tags": [
						"学霸说-分享"
					],
					"summary": "分享-成为学霸",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "accountId",
							"in": "query",
							"description": "学霸账号id",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						},
						{
							"name": "examId",
							"in": "query",
							"description": "考试ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int32"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"msg\": \"成功\",\n    \"obj\": {\n        \"accountName\": \"邓智友\",\n        \"examName\": \"绵阳市高2013级第二次诊断性考试\"\n    },\n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-08 13:49:39"
				}
			},
			"/restful/mobile/xbController/savePlayRecord.do": {
				"get": {
					"tags": [
						"学霸说-分享"
					],
					"summary": "分享-保存播放记录",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "query",
							"description": "学霸说说的ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"msg\": \"操作成功\",\n  \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-09 10:20:27"
				}
			},
			"/restful/mobile/xbController/saveThumbsUp.do": {
				"get": {
					"tags": [
						"学霸说-分享"
					],
					"summary": "分享-保存赞成",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "speakId",
							"in": "query",
							"description": "学霸说说的ID",
							"required": true,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "isAgree",
							"in": "query",
							"description": "是否赞同,如果没有传递此参数，则默认为赞同",
							"required": false,
							"type": "boolean",
							"default": "true",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"msg\": \"操作成功\",\n  \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-09 10:19:43"
				}
			},
			"/restful/registerController/courseChangeApply.do": {
				"get": {
					"tags": [
						"基础信息"
					],
					"summary": "修改教师的任课信息",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "schoolSubjectId",
							"in": "formData",
							"description": "科目id",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "accountId",
							"in": "formData",
							"description": "用户id",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "termId",
							"in": "formData",
							"description": "学期id",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "classesIds",
							"in": "formData",
							"description": "班级id，多个班级以逗号拼接。如1,2,3",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"您在当前学期已经申请课程调整，请等待审核!\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": false,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 6,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-12-27 16:48:54"
				}
			},
			"/userController/loginAjax.do": {
				"post": {
					"tags": [
						"系统登录"
					],
					"summary": "登陆",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "username",
							"in": "formData",
							"description": "用户名",
							"required": true,
							"type": "string",
							"default": "511623199702252974",
							"format": ""
						},
						{
							"name": "password",
							"in": "formData",
							"description": "密码",
							"required": true,
							"type": "string",
							"default": "123456",
							"format": ""
						},
						{
							"name": "device_id",
							"in": "formData",
							"description": "设备id",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "app_type",
							"in": "formData",
							"description": "1.安卓老师端2.安卓学生端3.安卓家长端4.苹果老师端5.苹果学生端6.苹果家长端'",
							"required": true,
							"type": "integer",
							"default": "2",
							"format": "int32"
						},
						{
							"name": "needSchoolRoles",
							"in": "formData",
							"description": "是否需要查询角色，只有为true时才会查询",
							"required": false,
							"type": "boolean",
							"default": "false",
							"format": ""
						},
						{
							"name": "version",
							"in": "formData",
							"description": "App的版本",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"classInfo\": {\n            \"classId\": 62,\n            \"className\": \"高2013级62班\"\n        },\n        \"schoolRoleCodes\": [],\n        \"appid\": 4,\n        \"catagorys\": [\n            1\n        ],\n        \"account\": {\n            \"idnumber\": \"511623199702252974\",\n            \"phonenumber\": \"15982622868\",\n            \"artorscience\": 1,\n            \"testonly\": \"学籍号\",\n            \"catagory\": 1,\n            \"studentid\": \"510700200410110363\",\n            \"isreg\": true,\n            \"organization\": {\n                \"phase\": \"4\",\n                \"code\": \"0001\",\n                \"level\": 3,\n                \"id\": 17,\n                \"sort\": 1,\n                \"text\": \"南山中学\"\n            },\n            \"name\": \"谭逸凡\",\n            \"isfresh\": 1,\n            \"id\": 14,\n            \"state\": 1,\n            \"companyAdmin\": false,\n            \"tenant\": {\n                \"phase\": \"\",\n                \"synch\": true,\n                \"level\": 1,\n                \"orgCode\": \"008410207\",\n                \"name\": \"绵阳市教科所\",\n                \"id\": 2,\n                \"caCode\": \"MYSJKS\"\n            }\n        }\n    },\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 0,\n    \"rows\": [],\n    \"success\": true,\n    \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-07 20:13:26"
				}
			},
			"http://192.168.2.56:8080/SXT/mobile/commonController/getJyjldNewPublish.do": {
				"post": {
					"tags": [
						"教育局领导角色"
					],
					"summary": "查询教育局领导最新发布",
					"description": "",
					"operationId": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/x-www-form-urlencoded"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "orgId",
							"in": "formData",
							"description": "",
							"required": false,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"返回最新发布结构": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n  \"attributes\": {\n    \"assignments\": [],\n    \"exams\": [\n      {\n        \"assignment_state\": \"\",\n        \"baseCourseId\": \"\",\n        \"baseCourseName\": \"\",\n        \"base_class_id\": \"\",\n        \"commentNumber\": \"\",\n        \"examLevel\": 0,\n        \"examlevel\": 0,\n        \"examtype\": 1,\n        \"expectReleaseTime\": \"06.14 10:24\",\n        \"from_name\": \"\",\n        \"gradeid\": \"\",\n        \"id\": \"59409852da1f9d766db552e7\",\n        \"name\": \"规则1\",\n        \"schoolOrClassCount\": 4,\n        \"state\": 7,\n        \"studentCount\": 7508,\n        \"termid\": \"\",\n        \"time\": \"06.12\",\n        \"type\": 2\n      }\n    ],\n    \"reallyQuestions\": []\n  },\n  \"errorCode\": \"\",\n  \"msg\": \"操作成功\",\n  \"obj\": \"\",\n  \"pageNumber\": 0,\n  \"queryStartId\": \"\",\n  \"rows\": [],\n  \"success\": true,\n  \"total\": 0\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "finish",
					"devStatusName": "开发完成",
					"showDevStatus": true,
					"label": "",
					"developer": "向发钧",
					"modifyDate": "2017-06-16 11:11:57"
				}
			},
			"mobile/parentTopicController/getAllTopicPrograma.do": {
				"get": {
					"tags": [
						"家长话题"
					],
					"summary": "获取所有的家长话题分类",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"msg\": \"操作成功\",\n    \"rows\": [\n        {\n            \"name\": \"拖延症\",\n            \"id\": 1,\n            \"sort\": 1\n        }\n    ],\n    \"success\": true,\n    \"total\": 1\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 5,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-23 15:08:01"
				}
			},
			"mobile/parentTopicController/getParentTopicComments.do": {
				"get": {
					"tags": [
						"家长话题"
					],
					"summary": "获取一个家长话题所有的评论",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "topicId",
							"in": "formData",
							"description": "家长话题ID",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int64"
						},
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "评论内容",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"queryStartId\": \"2\",\n    \"rows\": [\n        {\n            \"id\": 3,\n            \"commentId\": 3,\n            \"accountId\": 23,\n            \"accountName\": \"郑羽婷\",\n            \"accountType\": 1,\n            \"portraitPath\": \"头像地址\",\n            \"accountSchoolId\": 17,\n            \"accountSchoolName\": \"南山中学\",\n            \"createTime\": \"2016-09-22 22:16:20\",\n            \"content\": \"测试BBBB\",\n            \"isDelete\": false,\n            \"floor\": 0,\n            \"parent\": \"{结构同上面}\"\n        }\n    ],\n    \"success\": true,\n    \"msg\": \"操作成功\"\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 3,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-23 15:35:30"
				}
			},
			"mobile/parentTopicController/getParentTopics.do": {
				"get": {
					"tags": [
						"家长话题"
					],
					"summary": "获取发布的家长话题列表",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "queryStartId",
							"in": "formData",
							"description": "用于进行查询分页数据时使用（从当前记录查询分页数据）",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						},
						{
							"name": "topicProgramaId",
							"in": "formData",
							"description": "家长话题栏目ID",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"pageNumber\": 2,\n    \"queryStartId\": \"31\",\n    \"rows\": [\n        {\n            \"topicProgramaName(栏目名称)\": \"拖延症\",\n            \"createTime（创建时间）\": \"2016-09-22 20:29:07\",\n            \"isDelete（是否删除）\": 0,\n            \"tenantId（租户ID）\": 2,\n            \"coverPictureUrl（封面图片）\": \"/test/test.jpg\",\n            \"seeTotal（查看总数）\": 22,\n            \"createAccountId（创建人账号ID）\": 23,\n            \"commentTotal（评论总数）\": 33,\n            \"id（话题ID）\": 1,\n            \"title（话题标题）\": \"专治拖延1\",\n            \"topicProgramaId(栏目ID)\": 1,\n            \"content(话题内容)\": \"专治拖延1专治拖延1专治拖延1专治拖延1专治拖延1\"\n        },\n        {\n            \"topicProgramaName\": \"拖延症\",\n            \"createTime\": \"2016-09-22 20:29:07\",\n            \"isDelete\": 0,\n            \"tenantId\": 2,\n            \"coverPictureUrl\": \"/test/test.jpg\",\n            \"seeTotal\": 22,\n            \"createAccountId\": 23,\n            \"commentTotal\": 33,\n            \"id\": 2,\n            \"title\": \"专治拖延2\",\n            \"topicProgramaId\": 1,\n            \"content\": \"专治拖延1专治拖延1专治拖22222\"\n        },\n        {\n            \"topicProgramaName\": \"拖延症\",\n            \"createTime\": \"2016-09-22 20:29:07\",\n            \"isDelete\": 0,\n            \"tenantId\": 2,\n            \"coverPictureUrl\": \"/test/test.jpg\",\n            \"seeTotal\": 22,\n            \"createAccountId\": 23,\n            \"commentTotal\": 33,\n            \"id\": 3,\n            \"title\": \"专治拖3\",\n            \"topicProgramaId\": 1,\n            \"content\": \"专治拖延1专治拖3333222\"\n        }\n    ],\n    \"success\": true,\n    \"total\": 3\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 1,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-22 20:53:55"
				}
			},
			"mobile/parentTopicController/getSingleParentTopic.do": {
				"get": {
					"tags": [
						"家长话题"
					],
					"summary": "获取一个家长话题数据",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "topicId",
							"in": "formData",
							"description": "家长话题ID",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {\n        \"obj\": {\n            \"topicProgramaName\": \"拖延症\", \n            \"createTime\": \"2016-09-22 20:29:07\", \n            \"isDelete\": 0, \n            \"tenantId\": 2, \n            \"coverPictureUrl\": \"/test/test.jpg\", \n            \"seeTotal\": 22, \n            \"createAccountId\": 23, \n            \"commentTotal\": 33, \n            \"id\": 1, \n            \"title\": \"专治拖延1\", \n            \"topicProgramaId\": 1, \n            \"content\": \"专治拖延1专治拖延1专治拖延1专治拖延1专治拖延1\"\n        }\n    }, \n    \"msg\": \"操作成功\", \n    \"pageNumber\": 0, \n    \"queryStartId\": \"\", \n    \"rows\": [ ], \n    \"success\": true, \n    \"total\": 0\n}\n"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 2,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-22 21:15:31"
				}
			},
			"mobile/parentTopicController/saveParentTopicComment.do": {
				"get": {
					"tags": [
						"家长话题"
					],
					"summary": "保存家长话题评论",
					"description": "",
					"schemes": [
						"http"
					],
					"consumes": [
						"application/json"
					],
					"produces": [
						"application/json"
					],
					"parameters": [
						{
							"name": "topicId",
							"in": "formData",
							"description": "家长话题ID",
							"required": true,
							"type": "integer",
							"default": "1",
							"format": "int64"
						},
						{
							"name": "content",
							"in": "formData",
							"description": "评论内容",
							"required": true,
							"type": "string",
							"default": "",
							"format": ""
						},
						{
							"name": "parentCommentId",
							"in": "formData",
							"description": "评论的父评论ID",
							"required": false,
							"type": "integer",
							"default": "",
							"format": "int64"
						}
					],
					"responses": {
						"default": {
							"description": "",
							"schema": {
								"type": "cust",
								"format": "json",
								"required": false,
								"description": "",
								"content": "{\n    \"attributes\": {},\n    \"msg\": \"操作成功\",\n    \"success\": true\n}"
							},
							"sortWeight": 1
						}
					},
					"sortWeight": 4,
					"devStatus": "none",
					"devStatusName": "不显示",
					"showDevStatus": false,
					"modifyDate": "2016-09-22 22:00:05"
				}
			}
		},
		"definitions": {},
		"errorCodes": [],
		"apiEnvs": [
			{
				"name": "default",
				"baseUrl": "http://localhost:8080/SXT",
				"sortWeight": 1,
				"mock": false,
				"status": "on"
			},
			{
				"name": "mock环境",
				"baseUrl": "http://www.sosoapi.com/pass/mock/2753/",
				"sortWeight": 2147483647,
				"mock": true
			}
		]
	})
};

