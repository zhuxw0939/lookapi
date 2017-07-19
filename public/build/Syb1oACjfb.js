/**!
 * 晓我课堂-移动终端管控平台-swagger v1.0
 * 接口数量 49
 * http://127.0.0.1:3200/api/list?p_id=HkgyoARjzZ&v_id=Syb1oACjfb
 *
 * 2017-06-12 19:41:22 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../common/servers');



/** 
 * Created by handleFileUploadUsingPOST
 *
 * 上传并解析应用 未完成
 *
 * @file 	file-
 */
exports.handleFileUploadUsingPOST = function (data, callback) {
	servers.POST({
		url: "/action/applications_analysis",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "handleFileUploadUsingPOST",
		query: {
		}
	}, callback);
};
/** End handleFileUploadUsingPOST */



/** 
 * Created by editAppRuleDetailUsingPATCH
 *
 * 修改应用规则详情 #2017-6-9#
 *
 * @appRuleDetailRequest 	appRuleDetailRequest-Body
 */
exports.editAppRuleDetailUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/app_rule/edit_detail",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "editAppRuleDetailUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End editAppRuleDetailUsingPATCH */



/** 
 * Created by ApplicationTypeAPI-patchOneApplicationById
 *
 * 修改应用 #2017-06-12#
 *
 * @applicationId 	applicationId-Number * @applicationRequest 	applicationRequest-Body
 */
exports.ApplicationTypeAPI_patchOneApplicationById = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/applications/"+data.applicationId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeAPI-patchOneApplicationById",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ApplicationTypeAPI-patchOneApplicationById */



/** 
 * Created by ApplicationTypeAPI-patchOneApplicationTypeById
 *
 * 修改应用类型 #2017-06-09#
 *
 * @applicationTypeId 	applicationTypeId-Number * @applicationTypeRequest 	applicationTypeRequest-Body
 */
exports.ApplicationTypeAPI_patchOneApplicationTypeById = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/application_types/"+data.applicationTypeId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeAPI-patchOneApplicationTypeById",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ApplicationTypeAPI-patchOneApplicationTypeById */



/** 
 * Created by editDefaultAppRuleUsingPATCH
 *
 * 修改默认应用规则 #2017-6-9#
 *
 * @ruleId 	ruleId-String * @ruleContext 	用户规则-String
 */
exports.editDefaultAppRuleUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/default_app_rule/edit/"+data.schoolId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "editDefaultAppRuleUsingPATCH",
		query: {
			ruleContext: data.ruleContext
		}
	}, callback);
};
/** End editDefaultAppRuleUsingPATCH */



/** 
 * Created by ApplicationTypeAPI-deleteOneApplicationById
 *
 * 删除应用 #2017-06-12#
 *
 * @applicationId 	applicationId-Number
 */
exports.ApplicationTypeAPI_deleteOneApplicationById = function (data, callback) {
	servers.DELETE({
		url: "/applications/"+data.applicationId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeAPI-deleteOneApplicationById",
		query: {
		}
	}, callback);
};
/** End ApplicationTypeAPI-deleteOneApplicationById */



/** 
 * Created by editSystemRuleUsingPATCH
 *
 * 保存系统规则 #2017-6-8#
 *
 * @systemRuleRequest 	systemRuleRequest-Body
 */
exports.editSystemRuleUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/system_rule/edit/",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "editSystemRuleUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End editSystemRuleUsingPATCH */



/** 
 * Created by editWebsiteRuleUsingPATCH
 *
 * 修改网址规则 #2017-6-9#
 *
 * @websiteRuleRequest 	websiteRuleRequest-Body
 */
exports.editWebsiteRuleUsingPATCH = function (data, callback) {
	servers.UNSUPPORTEDREQUESTTYPE({
		url: "/website_rule/edit_detail",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "editWebsiteRuleUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End editWebsiteRuleUsingPATCH */



/** 
 * Created by ApplicationTypeAPI-deleteOneApplicationTypeById
 *
 * 删除应用类型 #2017-06-09#
 *
 * @applicationTypeId 	applicationTypeId-Number
 */
exports.ApplicationTypeAPI_deleteOneApplicationTypeById = function (data, callback) {
	servers.DELETE({
		url: "/application_types/"+data.applicationTypeId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeAPI-deleteOneApplicationTypeById",
		query: {
		}
	}, callback);
};
/** End ApplicationTypeAPI-deleteOneApplicationTypeById */



/** 
 * Created by initAllAccountUsingPUT
 *
 * 初始全部用户信息（龚德志) #2017-04-1# 
 *
 * @tenantid 	租户Id-Number
 */
exports.initAllAccountUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/uic/api/user-auth-notify/accounts/init",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "initAllAccountUsingPUT",
		query: {
			tenantid: data.tenantid
		}
	}, callback);
};
/** End initAllAccountUsingPUT */



/** 
 * Created by initAccountAppAndRoleUsingPUT
 *
 * 初始全部管理员账号角色与APP（龚德志) #2017-04-20# 
 *
 * @tenantid 	租户Id-Number
 */
exports.initAccountAppAndRoleUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/uic/api/user-auth-notify/account/admin-app-role/init",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "initAccountAppAndRoleUsingPUT",
		query: {
			tenantid: data.tenantid
		}
	}, callback);
};
/** End initAccountAppAndRoleUsingPUT */



/** 
 * Created by TimePlanController-postOneApplicationType
 *
 * 保存时段 #2017-06-07#
 *
 * @timePlanDto 	timePlanDto-Body
 */
exports.TimePlanController_postOneApplicationType = function (data, callback) {
	servers.POST({
		url: "/time_plan",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TimePlanController-postOneApplicationType",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TimePlanController-postOneApplicationType */


