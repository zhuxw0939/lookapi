/**!
 * undefined vundefined
 * 接口数量 undefined
 * http://127.0.0.1:3200/api/list?p_id=r1gCYmM4zW&v_id=Syb0KXzEzZ
 *
 * 2017-06-12 13:02:28 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../common/servers');



/** 
 * Created by postOneApplicationTypeUsingPOST_1
 *
 * 保存时段（完成）
 *
 * @X-Token 	身份认证令牌-String * @timePlanDto 	timePlanDto-Body
 */
exports.postOneApplicationTypeUsingPOST_1 = function (data, callback) {
	servers.POST({
		url: "/time_plan",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "postOneApplicationTypeUsingPOST_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End postOneApplicationTypeUsingPOST_1 */



/** 
 * Created by getAllApplicationTypesByQueryUsingGET
 *
 * 查询应用类型列表
 *
 * @X-Token 	身份认证令牌-String * @typeName 	应用类型名称-String
 * @createUserId 	应用类型创建人ID-Number
 * @page 	页码，从0开始-Number
 * @size 	分页大小-Number
 */
exports.getAllApplicationTypesByQueryUsingGET = function (data, callback) {
	servers.GET({
		url: "/application_types",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getAllApplicationTypesByQueryUsingGET",
		query: {
			typeName: data.typeName,
			createUserId: data.createUserId,
			page: data.page,
			size: data.size
		}
	}, callback);
};
/** End getAllApplicationTypesByQueryUsingGET */



/** 
 * Created by initAccountAppAndRoleUsingPUT
 *
 * 初始全部管理员账号角色与APP（龚德志) #2017-04-20# 
 *
 * @tenantid 	租户Id-Number
 */
exports.initAccountAppAndRoleUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/myuic/api/user-auth-notify/account/admin-app-role/init",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "initAccountAppAndRoleUsingPUT",
		query: {
			tenantid: data.tenantid
		}
	}, callback);
};
/** End initAccountAppAndRoleUsingPUT */



/** 
 * Created by getDefaultAppRuleUsingGET
 *
 * 查询默认应用规则
 *
 * @X-Token 	身份认证令牌-String * @schoolId 	schoolId-String
 */
exports.getDefaultAppRuleUsingGET = function (data, callback) {
	servers.GET({
		url: "/default_app_rule/get/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getDefaultAppRuleUsingGET",
		query: {
		}
	}, callback);
};
/** End getDefaultAppRuleUsingGET */



/** 
 * Created by postOneApplicationTypeUsingPOST
 *
 * 新增应用类型
 *
 * @X-Token 	身份认证令牌-String * @applicationTypeRequest 	applicationTypeRequest-Body
 */
exports.postOneApplicationTypeUsingPOST = function (data, callback) {
	servers.POST({
		url: "/application_types",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "postOneApplicationTypeUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End postOneApplicationTypeUsingPOST */



/** 
 * Created by getOneApplicationByIdUsingGET
 *
 * 查询应用
 *
 * @X-Token 	身份认证令牌-String * @applicationId 	applicationId-String
 */
exports.getOneApplicationByIdUsingGET = function (data, callback) {
	servers.GET({
		url: "/applications/"+data.applicationId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getOneApplicationByIdUsingGET",
		query: {
		}
	}, callback);
};
/** End getOneApplicationByIdUsingGET */



/** 
 * Created by deleteOneApplicationByIdUsingDELETE
 *
 * 删除应用
 *
 * @X-Token 	身份认证令牌-String * @applicationTypeId 	applicationTypeId-String
 */
exports.deleteOneApplicationByIdUsingDELETE = function (data, callback) {
	servers.DELETE({
		url: "/applications/"+data.applicationId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "deleteOneApplicationByIdUsingDELETE",
		query: {
		}
	}, callback);
};
/** End deleteOneApplicationByIdUsingDELETE */



/** 
 * Created by handleFileUploadUsingPOST
 *
 * 上传并解析应用
 *
 * @X-Token 	身份认证令牌-String * @file 	file-
 */
exports.handleFileUploadUsingPOST = function (data, callback) {
	servers.POST({
		url: "/action/applications_analysis",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "handleFileUploadUsingPOST",
		query: {
		}
	}, callback);
};
/** End handleFileUploadUsingPOST */



/** 
 * Created by getSystemRuleUsingGET
 *
 * 查询系统规则
 *
 * @X-Token 	身份认证令牌-String * @schoolId 	schoolId-String
 */
exports.getSystemRuleUsingGET = function (data, callback) {
	servers.GET({
		url: "/system_rule/get/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getSystemRuleUsingGET",
		query: {
		}
	}, callback);
};
/** End getSystemRuleUsingGET */



/** 
 * Created by editWebsiteRuleUsingPATCH
 *
 * 修改网址规则
 *
 * @X-Token 	身份认证令牌-String * @websiteRuleRequest 	websiteRuleRequest-Body
 */
exports.editWebsiteRuleUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/website_rule/edit_detail",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "editWebsiteRuleUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End editWebsiteRuleUsingPATCH */



/** 
 * Created by editSystemRuleUsingPATCH
 *
 * 保存系统策略
 *
 * @X-Token 	身份认证令牌-String * @ruleId 	ruleId-String * @ruleContext 	用户规则-String
 * @validateTime 	生效时段（1.在校 2.非在校）-Number
 * @isSame 	是否与在校保持一致-Number
 */
exports.editSystemRuleUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/system_rule/edit/"+data.ruleId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "editSystemRuleUsingPATCH",
		query: {
			ruleContext: data.ruleContext,
			validateTime: data.validateTime,
			isSame: data.isSame
		}
	}, callback);
};
/** End editSystemRuleUsingPATCH */



/** 
 * Created by getOneApplicationTypeByIdUsingGET
 *
 * 查询应用类型
 *
 * @X-Token 	身份认证令牌-String * @applicationTypeId 	applicationTypeId-Number
 */
exports.getOneApplicationTypeByIdUsingGET = function (data, callback) {
	servers.GET({
		url: "/application_types/"+data.applicationTypeId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getOneApplicationTypeByIdUsingGET",
		query: {
		}
	}, callback);
};
/** End getOneApplicationTypeByIdUsingGET */



/** 
 * Created by updateAccountUsingPUT
 *
 * 更新用户信息（龚德志) #2017-04-1#
 *
 * @accountId 	用户账号ID-Number
 */
exports.updateAccountUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/myuic/api/user-auth-notify/account",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "updateAccountUsingPUT",
		query: {
		}
	}, callback);
};
/** End updateAccountUsingPUT */



/** 
 * Created by getApplicationSelectListUsingGET
 *
 * 查询应用名称下拉列表
 *
 * @X-Token 	身份认证令牌-String
 */
exports.getApplicationSelectListUsingGET = function (data, callback) {
	servers.GET({
		url: "/action/select_list/applications",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getApplicationSelectListUsingGET",
		query: {
		}
	}, callback);
};
/** End getApplicationSelectListUsingGET */



/** 
 * Created by patchOneApplicationTypeByIdUsingPATCH
 *
 * 修改应用类型
 *
 * @X-Token 	身份认证令牌-String * @applicationTypeId 	applicationTypeId-Number * @applicationTypeRequest 	applicationTypeRequest-Body
 */
exports.patchOneApplicationTypeByIdUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/application_types/"+data.applicationTypeId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "patchOneApplicationTypeByIdUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End patchOneApplicationTypeByIdUsingPATCH */



/** 
 * Created by getApplicationVersionSelectListUsingGET
 *
 * 查询应用版本下拉列表
 *
 * @X-Token 	身份认证令牌-String * @applicationPackage 	applicationPackage-String
 */
exports.getApplicationVersionSelectListUsingGET = function (data, callback) {
	servers.GET({
		url: "/action/select_list/applications/"+data.applicationPackage,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getApplicationVersionSelectListUsingGET",
		query: {
		}
	}, callback);
};
/** End getApplicationVersionSelectListUsingGET */



/** 
 * Created by publishRuleUsingPOST
 *
 * 发布规则
 *
 * @X-Token 	身份认证令牌-String * @orgId 	orgId-String * @level 	应用级别（1.公司；2.学校；3.班级）-String
 */
exports.publishRuleUsingPOST = function (data, callback) {
	servers.POST({
		url: "/rule/publish/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "publishRuleUsingPOST",
		query: {
			level: data.level
		}
	}, callback);
};
/** End publishRuleUsingPOST */



/** 
 * Created by postOneApplicationUsingPOST
 *
 * 新增应用
 *
 * @X-Token 	身份认证令牌-String * @applicationRequest 	applicationRequest-Body
 */
exports.postOneApplicationUsingPOST = function (data, callback) {
	servers.POST({
		url: "/applications",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "postOneApplicationUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End postOneApplicationUsingPOST */



/** 
 * Created by getOneTimePlanByIdUsingGET
 *
 * 查询时段详情（完成）
 *
 * @X-Token 	身份认证令牌-String * @orgId 	orgId-Number
 */
exports.getOneTimePlanByIdUsingGET = function (data, callback) {
	servers.GET({
		url: "/time_plan/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getOneTimePlanByIdUsingGET",
		query: {
		}
	}, callback);
};
/** End getOneTimePlanByIdUsingGET */



/** 
 * Created by getRuleValidateDetailUsingGET
 *
 * 规则生效明细查看
 *
 * @X-Token 	身份认证令牌-String * @orgId 	orgId-String * @level 	应用级别（1.公司；2.学校；3.班级）-String
 */
exports.getRuleValidateDetailUsingGET = function (data, callback) {
	servers.GET({
		url: "/rule/validate_detail/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getRuleValidateDetailUsingGET",
		query: {
			level: data.level
		}
	}, callback);
};
/** End getRuleValidateDetailUsingGET */



/** 
 * Created by initAllAccountUsingPUT
 *
 * 初始全部用户信息（龚德志) #2017-04-1# 
 *
 * @tenantid 	租户Id-Number
 */
exports.initAllAccountUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/myuic/api/user-auth-notify/accounts/init",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "initAllAccountUsingPUT",
		query: {
			tenantid: data.tenantid
		}
	}, callback);
};
/** End initAllAccountUsingPUT */



/** 
 * Created by bundTermianlUsingPUT
 *
 * 绑定终端
 *
 * @X-Token 	身份认证令牌-String * @bundTermianlQueryDto 	bundTermianlQueryDto-Body
 */
exports.bundTermianlUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/bundTermianl",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "bundTermianlUsingPUT",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End bundTermianlUsingPUT */



/** 
 * Created by deleteOneApplicationTypeByIdUsingDELETE
 *
 * 删除应用类型
 *
 * @X-Token 	身份认证令牌-String * @applicationTypeId 	applicationTypeId-Number
 */
exports.deleteOneApplicationTypeByIdUsingDELETE = function (data, callback) {
	servers.DELETE({
		url: "/application_types/"+data.applicationTypeId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "deleteOneApplicationTypeByIdUsingDELETE",
		query: {
		}
	}, callback);
};
/** End deleteOneApplicationTypeByIdUsingDELETE */



/** 
 * Created by patchOneApplicationByIdUsingPATCH
 *
 * 修改应用
 *
 * @X-Token 	身份认证令牌-String * @applicationId 	applicationId-String * @applicationRequest 	applicationRequest-Body
 */
exports.patchOneApplicationByIdUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/applications/"+data.applicationId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "patchOneApplicationByIdUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End patchOneApplicationByIdUsingPATCH */



/** 
 * Created by authorityUsingGET
 *
 * 用户授权[未实现]（龚德志）
 *
 * @TOKEN 	登录获取到的token-String * @appId 	子系统ID-String
 * @uri 	终端访问API的URI-String
 */
exports.authorityUsingGET = function (data, callback) {
	servers.GET({
		url: "/myuic/api/auth/authority",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "authorityUsingGET",
		query: {
			appId: data.appId,
			uri: data.uri
		}
	}, callback);
};
/** End authorityUsingGET */



/** 
 * Created by statisticsTermianlAlarmUsingGET
 *
 * 预警终端数据查询
 *
 * @X-Token 	身份认证令牌-String * @classIds 	班级ids-
 * @typeLevel 	级别:0 学校管理员级别;1 教师级别-Number
 * @schoolId 	学校id-String
 */
exports.statisticsTermianlAlarmUsingGET = function (data, callback) {
	servers.GET({
		url: "/statisticsTermianlAlarm",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "statisticsTermianlAlarmUsingGET",
		query: {
			classIds: data.classIds,
			typeLevel: data.typeLevel,
			schoolId: data.schoolId
		}
	}, callback);
};
/** End statisticsTermianlAlarmUsingGET */



/** 
 * Created by getAllApplicationsByQueryUsingGET
 *
 * 查询应用列表
 *
 * @X-Token 	身份认证令牌-String * @typeName 	应用类型名称-String
 * @pageNumber 	页码，从0开始-Number
 * @pageSize 	分页大小-Number
 */
exports.getAllApplicationsByQueryUsingGET = function (data, callback) {
	servers.GET({
		url: "/applications",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getAllApplicationsByQueryUsingGET",
		query: {
			typeName: data.typeName,
			pageNumber: data.pageNumber,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End getAllApplicationsByQueryUsingGET */



/** 
 * Created by getAppRuleDetailUsingGET
 *
 * 查询应用规则详情
 *
 * @X-Token 	身份认证令牌-String * @appRuleId 	appRuleId-String
 */
exports.getAppRuleDetailUsingGET = function (data, callback) {
	servers.GET({
		url: "/app_rule/get_detail/"+data.appRuleId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getAppRuleDetailUsingGET",
		query: {
		}
	}, callback);
};
/** End getAppRuleDetailUsingGET */



/** 
 * Created by loginUsingPOST
 *
 * 用户登录（龚德志） #2017-03-13#
 *
 * @user 	登录参数-Body
 */
exports.loginUsingPOST = function (data, callback) {
	servers.POST({
		url: "/myuic/api/auth/login",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "loginUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End loginUsingPOST */



/** 
 * Created by updateTermianlStatusUsingPOST
 *
 * 终端心跳交互接口
 *
 * @X-Token 	身份认证令牌-String * @updateTermianlStatusQueryDto 	updateTermianlStatusQueryDto-Body
 */
exports.updateTermianlStatusUsingPOST = function (data, callback) {
	servers.POST({
		url: "/updateTermianlStatus",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "updateTermianlStatusUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End updateTermianlStatusUsingPOST */



/** 
 * Created by refreshTokenUsingGET
 *
 * 用户刷新token（龚德志） #2017-03-13#
 *
 * @TOKEN 	登录获取到的刷新token-String * @roleId 	用户要使用的角色ID-Number
 * @appId 	子系统ID,roleId不为空的时候，appId也不能为空-String
 */
exports.refreshTokenUsingGET = function (data, callback) {
	servers.GET({
		url: "/myuic/api/auth/refresh_token",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "refreshTokenUsingGET",
		query: {
			roleId: data.roleId,
			appId: data.appId
		}
	}, callback);
};
/** End refreshTokenUsingGET */



/** 
 * Created by cipherLoginUsingPOST
 *
 * 用户登录（龚德志） #2017-05-03#
 *
 * @user 	登录参数-Body
 */
exports.cipherLoginUsingPOST = function (data, callback) {
	servers.POST({
		url: "/myuic/api/auth/login/cipher",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "cipherLoginUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End cipherLoginUsingPOST */



/** 
 * Created by editDefaultAppRuleUsingPATCH
 *
 * 修改默认应用规则
 *
 * @X-Token 	身份认证令牌-String * @ruleId 	ruleId-String * @ruleContext 	用户规则-String
 */
exports.editDefaultAppRuleUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/default_app_rule/edit/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "editDefaultAppRuleUsingPATCH",
		query: {
			ruleContext: data.ruleContext
		}
	}, callback);
};
/** End editDefaultAppRuleUsingPATCH */



/** 
 * Created by editAppRuleDetailUsingPATCH
 *
 * 修改应用规则详情
 *
 * @X-Token 	身份认证令牌-String * @appRuleDetailRequest 	appRuleDetailRequest-Body
 */
exports.editAppRuleDetailUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/app_rule/edit_detail",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "editAppRuleDetailUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End editAppRuleDetailUsingPATCH */



/** 
 * Created by getWebsiteRuleUsingGET
 *
 * 查询网址规则
 *
 * @X-Token 	身份认证令牌-String * @orgId 	orgId-String * @level 	应用级别（1.公司；2.学校；3.班级）-String
 */
exports.getWebsiteRuleUsingGET = function (data, callback) {
	servers.GET({
		url: "/website_rule/get/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getWebsiteRuleUsingGET",
		query: {
			level: data.level
		}
	}, callback);
};
/** End getWebsiteRuleUsingGET */



/** 
 * Created by getApplicationTypeSelectListUsingGET
 *
 * 查询应用类型下拉列表
 *
 * @X-Token 	身份认证令牌-String
 */
exports.getApplicationTypeSelectListUsingGET = function (data, callback) {
	servers.GET({
		url: "/action/select_list/application_types",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getApplicationTypeSelectListUsingGET",
		query: {
		}
	}, callback);
};
/** End getApplicationTypeSelectListUsingGET */



/** 
 * Created by getRuleSuccessRateUsingGET
 *
 * 查询策略成功生效率
 *
 * @X-Token 	身份认证令牌-String * @orgId 	orgId-String * @level 	应用级别（1.公司；2.学校；3.班级）-String
 */
exports.getRuleSuccessRateUsingGET = function (data, callback) {
	servers.GET({
		url: "/rule/success/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getRuleSuccessRateUsingGET",
		query: {
			level: data.level
		}
	}, callback);
};
/** End getRuleSuccessRateUsingGET */



/** 
 * Created by getUserAppUsingPOST
 *
 * 获取用户拥有的系统（龚德志） #2017-03-13#
 *
 */
exports.getUserAppUsingPOST = function (data, callback) {
	servers.POST({
		url: "/myuic/api/app/get-userapp",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getUserAppUsingPOST"
	}, callback);
};
/** End getUserAppUsingPOST */



/** 
 * Created by loginTestUsingPOST
 *
 * 用户登录（龚德志） #2017-05-03#
 *
 * @user 	登录参数-Body
 */
exports.loginTestUsingPOST = function (data, callback) {
	servers.POST({
		url: "/myuic/api/auth/login/logintest",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "loginTestUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End loginTestUsingPOST */



/** 
 * Created by getAppRuleUsingGET
 *
 * 查询应用规则
 *
 * @X-Token 	身份认证令牌-String * @orgId 	orgId-String * @level 	应用级别（1.公司；2.学校；3.班级）-String
 */
exports.getAppRuleUsingGET = function (data, callback) {
	servers.GET({
		url: "/app_rule/get/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getAppRuleUsingGET",
		query: {
			level: data.level
		}
	}, callback);
};
/** End getAppRuleUsingGET */



/** 
 * Created by getHomepageByQueryUsingGET
 *
 * 根据角色&用户获得终端预警数量(完成)
 *
 * @X-Token 	身份认证令牌-String * @userId 	用户ID-String
 * @typeLevel 	级别:0 学校管理员级别;1 教师级别-Number
 * @schoolId 	学校id-String
 */
exports.getHomepageByQueryUsingGET = function (data, callback) {
	servers.GET({
		url: "/homepage",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getHomepageByQueryUsingGET",
		query: {
			userId: data.userId,
			typeLevel: data.typeLevel,
			schoolId: data.schoolId
		}
	}, callback);
};
/** End getHomepageByQueryUsingGET */



/** 
 * Created by getUserAppRolesUsingGET
 *
 * 获取用户拥有的角色（龚德志） #2017-03-13#
 *
 * @appId 	子系统ID-String
 */
exports.getUserAppRolesUsingGET = function (data, callback) {
	servers.GET({
		url: "/myuic/api/role/get-userapp-role/"+data.appId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getUserAppRolesUsingGET",
		query: {
		}
	}, callback);
};
/** End getUserAppRolesUsingGET */



/** 
 * Created by queryTermianlUsingGET
 *
 * 终端查询
 *
 * @X-Token 	身份认证令牌-String * @schooleId 	学校id-String
 * @classId 	班级id-String
 * @pageNum 	分页查询页码-Number
 * @pageSize 	分页查询页面大小-Number
 * @boundState 	设备绑定状态,0:未绑定,1:绑定-Number
 * @termianlOnLineState 	设备在线状态,0:未在线,1:在线-Number
 * @minOffLineDays 	设备离线最小天数-Number
 * @maxOffLineDays 	设备离线最大天数-Number
 * @customQueries 	自定义查询条件(学生姓名、身份证、设备mac地址)-String
 */
exports.queryTermianlUsingGET = function (data, callback) {
	servers.GET({
		url: "/query",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "queryTermianlUsingGET",
		query: {
			schooleId: data.schooleId,
			classId: data.classId,
			pageNum: data.pageNum,
			pageSize: data.pageSize,
			boundState: data.boundState,
			termianlOnLineState: data.termianlOnLineState,
			minOffLineDays: data.minOffLineDays,
			maxOffLineDays: data.maxOffLineDays,
			customQueries: data.customQueries
		}
	}, callback);
};
/** End queryTermianlUsingGET */



/** 
 * Created by getOrgByIdUsingGET
 *
 * 组织机构班级(完成)
 *
 * @X-Token 	身份认证令牌-String * @tenantId 	tenantId-String
 * @orgId 	orgId-String * @orgName 	orgName-String
 */
exports.getOrgByIdUsingGET = function (data, callback) {
	servers.GET({
		url: "/user_org/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getOrgByIdUsingGET",
		query: {
			tenantId: data.tenantId,
			orgName: data.orgName
		}
	}, callback);
};
/** End getOrgByIdUsingGET */



/** 
 * Created by unbundTermianlUsingDELETE
 *
 * 解绑终端
 *
 * @X-Token 	身份认证令牌-String * @unbundTermianlQueryDto 	unbundTermianlQueryDto-Body
 */
exports.unbundTermianlUsingDELETE = function (data, callback) {
	servers.DELETE({
		url: "/unbundTermianl",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "unbundTermianlUsingDELETE",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End unbundTermianlUsingDELETE */


