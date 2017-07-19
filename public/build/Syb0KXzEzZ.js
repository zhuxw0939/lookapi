/**!
 * swagger导入测试- 第三轮 v1.1
 * 接口数量 42
 * http://127.0.0.1:3200/api/list?p_id=r1gCYmM4zW&v_id=Syb0KXzEzZ
 *
 * 2017-06-20 20:34:05 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../common/servers');



/** 
 * Created by ApplicationApi-postOneApplication
 *
 * 新增应用 #2017-06-16#
 *
 * @applicationRequest 	applicationRequest-Body
 */
exports.ApplicationApi_postOneApplication = function (data, callback) {
	servers.POST({
		url: "/api/applications/create",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationApi-postOneApplication",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ApplicationApi-postOneApplication */



/** 
 * Created by TerminalManagementControllerApi-updateBundTerminal
 *
 * 更新绑定终端 #2017-06-15#
 *
 * @updateBundTerminalConditionDto 	updateBundTerminalConditionDto-Body
 */
exports.TerminalManagementControllerApi_updateBundTerminal = function (data, callback) {
	servers.PUT({
		url: "/api/updateBundTerminal",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TerminalManagementControllerApi-updateBundTerminal",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TerminalManagementControllerApi-updateBundTerminal */



/** 
 * Created by TerminalManagementControllerApi-getTerminalStatus
 *
 * 查询相应用户与设备的绑定状态 #2017-06-15#
 *
 * @channelId 	终端设备码-String
 */
exports.TerminalManagementControllerApi_getTerminalStatus = function (data, callback) {
	servers.GET({
		url: "/api/getTerminalStatus",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TerminalManagementControllerApi-getTerminalStatus",
		query: {
			channelId: data.channelId
		}
	}, callback);
};
/** End TerminalManagementControllerApi-getTerminalStatus */



/** 
 * Created by editWebsiteRuleUsingPATCH
 *
 * 新增/修改网址规则 #2017-6-13#(已完成)
 *
 * @websiteRuleRequest 	websiteRuleRequest-Body
 */
exports.editWebsiteRuleUsingPATCH = function (data, callback) {
	servers.PATCH({
		url: "/mdc/api/website_rule/edit_detail",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "editWebsiteRuleUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End editWebsiteRuleUsingPATCH */



/** 
 * Created by ApplicationApi-patchOneApplicationById
 *
 * 修改应用 目前应用不支持修改 #2017-06-16#
 *
 * @applicationId 	applicationId-Number * @applicationRequest 	applicationRequest-Body
 */
exports.ApplicationApi_patchOneApplicationById = function (data, callback) {
	servers.PUT({
		url: "/api/applications/modify/"+data.applicationId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationApi-patchOneApplicationById",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ApplicationApi-patchOneApplicationById */



/** 
 * Created by ApplicationTypeApi-postOneApplicationType
 *
 * 新增应用类型 #2017-06-13#
 *
 * @applicationTypeRequest 	applicationTypeRequest-Body
 */
exports.ApplicationTypeApi_postOneApplicationType = function (data, callback) {
	servers.POST({
		url: "/api/application_types/create",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeApi-postOneApplicationType",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ApplicationTypeApi-postOneApplicationType */



/** 
 * Created by editSystemRuleUsingPATCH
 *
 * 保存系统规则 #2017-6-8#
 *
 * @systemRuleRequest 	systemRuleRequest-Body
 */
exports.editSystemRuleUsingPATCH = function (data, callback) {
	servers.PATCH({
		url: "/mdc/api/system_rule/edit",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "editSystemRuleUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End editSystemRuleUsingPATCH */



/** 
 * Created by ApplicationTypeApi-deleteOneApplicationTypeById
 *
 * 删除应用类型 #2017-06-13#
 *
 * @applicationTypeId 	applicationTypeId-Number
 */
exports.ApplicationTypeApi_deleteOneApplicationTypeById = function (data, callback) {
	servers.DELETE({
		url: "/api/application_types/delete/"+data.applicationTypeId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeApi-deleteOneApplicationTypeById",
		query: {
		}
	}, callback);
};
/** End ApplicationTypeApi-deleteOneApplicationTypeById */



/** 
 * Created by ApplicationTypeApi-getAllApplicationTypesByQuery
 *
 * 查询应用类型列表 #2017-06-13#
 *
 * @applicationTypeCondition 	applicationTypeCondition-Body
 */
exports.ApplicationTypeApi_getAllApplicationTypesByQuery = function (data, callback) {
	servers.POST({
		url: "/api/application_types/find",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeApi-getAllApplicationTypesByQuery",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ApplicationTypeApi-getAllApplicationTypesByQuery */



/** 
 * Created by IndexAPI-getHomepageByQuery
 *
 * 根据角色&用户获得终端预警数量 #2017-06-13#
 *
 * @homepageRequest 	homepageRequest-Body
 */
exports.IndexAPI_getHomepageByQuery = function (data, callback) {
	servers.POST({
		url: "/api/homepage",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "IndexAPI-getHomepageByQuery",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End IndexAPI-getHomepageByQuery */



/** 
 * Created by ApplicationTypeApi-getOneApplicationTypeById
 *
 * 查询应用类型 #2017-06-13#
 *
 * @applicationTypeId 	applicationTypeId-Number
 */
exports.ApplicationTypeApi_getOneApplicationTypeById = function (data, callback) {
	servers.GET({
		url: "/api/application_types/find/"+data.applicationTypeId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeApi-getOneApplicationTypeById",
		query: {
		}
	}, callback);
};
/** End ApplicationTypeApi-getOneApplicationTypeById */



/** 
 * Created by getWebsiteRuleUsingGET_1
 *
 * 查询学校网址规则 #2017-6-15#(已完成)
 *
 * @orgId 	orgId-Number
 * @level 	级别（2.学校；3.班级）-Number
 * @classId 	classId-Number
 */
exports.getWebsiteRuleUsingGET_1 = function (data, callback) {
	servers.GET({
		url: "/mdc/api/website_rule/get",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "getWebsiteRuleUsingGET_1",
		query: {
			orgId: data.orgId,
			level: data.level,
			classId: data.classId
		}
	}, callback);
};
/** End getWebsiteRuleUsingGET_1 */



/** 
 * Created by ApplicationApi-deleteOneApplicationById
 *
 * 删除应用 #2017-06-16#
 *
 * @applicationId 	applicationId-Number
 */
exports.ApplicationApi_deleteOneApplicationById = function (data, callback) {
	servers.DELETE({
		url: "/api/applications/delete/"+data.applicationId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationApi-deleteOneApplicationById",
		query: {
		}
	}, callback);
};
/** End ApplicationApi-deleteOneApplicationById */



/** 
 * Created by TimePlanAPI-getOneTimePlanById
 *
 * 查询时段详情 #2017-06-13#
 *
 * @orgId 	orgId-Number
 */
exports.TimePlanAPI_getOneTimePlanById = function (data, callback) {
	servers.GET({
		url: "/api/time_plan/"+data.orgId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TimePlanAPI-getOneTimePlanById",
		query: {
		}
	}, callback);
};
/** End TimePlanAPI-getOneTimePlanById */



/** 
 * Created by RuleApi-updateRuleSystemApplicationList
 *
 * 修改学校系统默认应用规则 #2017-6-19#
 *
 * @ruleSystemApplicationRequests 	ruleSystemApplicationRequests-
 */
exports.RuleApi_updateRuleSystemApplicationList = function (data, callback) {
	servers.POST({
		url: "/mdc/api/rule_system_application/edit",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "RuleApi-updateRuleSystemApplicationList",
		query: {
		}
	}, callback);
};
/** End RuleApi-updateRuleSystemApplicationList */



/** 
 * Created by ApplicationTypeApi-patchOneApplicationTypeById
 *
 * 修改应用类型 #2017-06-13#
 *
 * @applicationTypeId 	applicationTypeId-Number * @applicationTypeRequest 	applicationTypeRequest-Body
 */
exports.ApplicationTypeApi_patchOneApplicationTypeById = function (data, callback) {
	servers.PUT({
		url: "/api/application_types/modify/"+data.applicationTypeId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeApi-patchOneApplicationTypeById",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ApplicationTypeApi-patchOneApplicationTypeById */



/** 
 * Created by editAppRuleDetailUsingPATCH
 *
 * 修改应用规则详情 #2017-6-9#
 *
 * @appRuleDetailRequest 	appRuleDetailRequest-Body
 */
exports.editAppRuleDetailUsingPATCH = function (data, callback) {
	servers.PATCH({
		url: "/mdc/api/app_rule/edit_detail",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "editAppRuleDetailUsingPATCH",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End editAppRuleDetailUsingPATCH */



/** 
 * Created by TimePlanAPI-postOneApplicationType
 *
 * 保存时段 #2017-06-13#
 *
 * @timePlanDto 	timePlanDto-Body
 */
exports.TimePlanAPI_postOneApplicationType = function (data, callback) {
	servers.POST({
		url: "/api/time_plan",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TimePlanAPI-postOneApplicationType",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TimePlanAPI-postOneApplicationType */



/** 
 * Created by SystemSettingControllerApi-getThreshold
 *
 * 查询学校预警阀值 #2017-06-16#
 *
 */
exports.SystemSettingControllerApi_getThreshold = function (data, callback) {
	servers.GET({
		url: "/api/getThreshold",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "SystemSettingControllerApi-getThreshold"
	}, callback);
};
/** End SystemSettingControllerApi-getThreshold */



/** 
 * Created by TerminalManagementControllerApi-updateTerminalStatus
 *
 * 终端心跳交互接口 #2017-06-15#
 *
 * @updateTerminalStatusConditionDto 	updateTerminalStatusConditionDto-Body
 */
exports.TerminalManagementControllerApi_updateTerminalStatus = function (data, callback) {
	servers.POST({
		url: "/api/updateTerminalStatus",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TerminalManagementControllerApi-updateTerminalStatus",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TerminalManagementControllerApi-updateTerminalStatus */



/** 
 * Created by SystemSettingControllerApi-saveOrUpdateThreshold
 *
 * 设置预警阀值 #2017-06-16#
 *
 * @setThresholdConditionDto 	setThresholdConditionDto-Body
 */
exports.SystemSettingControllerApi_saveOrUpdateThreshold = function (data, callback) {
	servers.PUT({
		url: "/api/saveOrUpdateThreshold",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "SystemSettingControllerApi-saveOrUpdateThreshold",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End SystemSettingControllerApi-saveOrUpdateThreshold */



/** 
 * Created by ApplicationApi-postAnalysisApplication
 *
 * 上传并解析应用 #2017-06-16#
 *
 * @apk 	apk-String
 */
exports.ApplicationApi_postAnalysisApplication = function (data, callback) {
	servers.GET({
		url: "/api/applications/analysis",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationApi-postAnalysisApplication",
		query: {
			apk: data.apk
		}
	}, callback);
};
/** End ApplicationApi-postAnalysisApplication */



/** 
 * Created by getRuleValidateDetailUsingPOST
 *
 * 规则生效明细查看 #2017-6-12#
 *
 * @ruleValidateDto 	ruleValidateDto-Body
 */
exports.getRuleValidateDetailUsingPOST = function (data, callback) {
	servers.POST({
		url: "/mdc/api/rule/validate_detail",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "getRuleValidateDetailUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End getRuleValidateDetailUsingPOST */



/** 
 * Created by getAppRuleDetailUsingGET
 *
 * 查询应用规则详情 #2017-6-9#(已完成)
 *
 * @appRuleId 	appRuleId-Number
 */
exports.getAppRuleDetailUsingGET = function (data, callback) {
	servers.GET({
		url: "/mdc/api/app_rule/get_detail/"+data.appRuleId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "getAppRuleDetailUsingGET",
		query: {
		}
	}, callback);
};
/** End getAppRuleDetailUsingGET */



/** 
 * Created by UserRoleAPI-getOrgById
 *
 * 组织机构班级 #2017-06-13#
 *
 */
exports.UserRoleAPI_getOrgById = function (data, callback) {
	servers.GET({
		url: "/api/user_org",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "UserRoleAPI-getOrgById"
	}, callback);
};
/** End UserRoleAPI-getOrgById */



/** 
 * Created by getAppRuleUsingGET
 *
 * 查询应用规则 #2017-6-9#(已完成)
 *
 * @orgId 	组织机构ID-Number * @level 	组织机构级别（1.公司；2.学校；3.班级）-Number
 */
exports.getAppRuleUsingGET = function (data, callback) {
	servers.GET({
		url: "/mdc/api/app_rule/get/"+data.orgId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "getAppRuleUsingGET",
		query: {
			level: data.level
		}
	}, callback);
};
/** End getAppRuleUsingGET */



/** 
 * Created by publishRuleUsingPOST
 *
 * 发布规则 #2017-6-14#
 *
 * @orgId 	orgId-Number * @level 	应用级别（1.公司；2.学校；3.班级）-Number
 */
exports.publishRuleUsingPOST = function (data, callback) {
	servers.POST({
		url: "/mdc/api/rule/publish/"+data.orgId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "publishRuleUsingPOST",
		query: {
			level: data.level
		}
	}, callback);
};
/** End publishRuleUsingPOST */



/** 
 * Created by ApplicationApi-getAllApplicationsByQuery
 *
 * 查询应用列表 #2017-06-16#
 *
 * @applicationCondition 	applicationCondition-Body
 */
exports.ApplicationApi_getAllApplicationsByQuery = function (data, callback) {
	servers.POST({
		url: "/api/applications",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationApi-getAllApplicationsByQuery",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ApplicationApi-getAllApplicationsByQuery */



/** 
 * Created by getWebsiteRuleUsingGET
 *
 * 查询网址规则 #2017-6-13#(已完成)
 *
 * @ruleWebsiteId 	ruleWebsiteId-Number
 */
exports.getWebsiteRuleUsingGET = function (data, callback) {
	servers.GET({
		url: "/mdc/api/website_rule/get/"+data.ruleWebsiteId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "getWebsiteRuleUsingGET",
		query: {
		}
	}, callback);
};
/** End getWebsiteRuleUsingGET */



/** 
 * Created by RuleApi-getRuleSystemApplicationList
 *
 * 查询学校系统默认应用规则 #2017-6-19#
 *
 */
exports.RuleApi_getRuleSystemApplicationList = function (data, callback) {
	servers.GET({
		url: "/mdc/api/rule_system_application/get",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "RuleApi-getRuleSystemApplicationList"
	}, callback);
};
/** End RuleApi-getRuleSystemApplicationList */



/** 
 * Created by TerminalManagementControllerApi-queryTerminal
 *
 * 终端查询 #2017-06-15#
 *
 * @terminalConditionDto 	terminalConditionDto-Body
 */
exports.TerminalManagementControllerApi_queryTerminal = function (data, callback) {
	servers.POST({
		url: "/api/queryTerminal",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TerminalManagementControllerApi-queryTerminal",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TerminalManagementControllerApi-queryTerminal */



/** 
 * Created by ApplicationTypeApi-getApplicationTypeSelectList
 *
 * 查询所有应用类型列表 #2017-06-13#
 *
 */
exports.ApplicationTypeApi_getApplicationTypeSelectList = function (data, callback) {
	servers.GET({
		url: "/api/application_types/find_all",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeApi-getApplicationTypeSelectList"
	}, callback);
};
/** End ApplicationTypeApi-getApplicationTypeSelectList */



/** 
 * Created by TerminalManagementControllerApi-bundTerminal
 *
 * 绑定终端 #2017-06-15#
 *
 * @bundTerminalConditionDto 	bundTerminalConditionDto-Body
 */
exports.TerminalManagementControllerApi_bundTerminal = function (data, callback) {
	servers.PUT({
		url: "/api/bundTerminal",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TerminalManagementControllerApi-bundTerminal",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TerminalManagementControllerApi-bundTerminal */



/** 
 * Created by getRuleSuccessRateUsingGET
 *
 * 查询规则成功生效率 #2017-6-12#
 *
 * @ruleValidateDto 	ruleValidateDto-Body
 */
exports.getRuleSuccessRateUsingGET = function (data, callback) {
	servers.GET({
		url: "/mdc/api/rule/success",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "getRuleSuccessRateUsingGET",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End getRuleSuccessRateUsingGET */



/** 
 * Created by getSystemRuleListUsingGET
 *
 * 查询系统规则列表 #2017-6-8#(已完成)
 *
 * @schoolId 	schoolId-Number
 */
exports.getSystemRuleListUsingGET = function (data, callback) {
	servers.GET({
		url: "/mdc/api/system_rule/getList",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "getSystemRuleListUsingGET",
		query: {
			schoolId: data.schoolId
		}
	}, callback);
};
/** End getSystemRuleListUsingGET */



/** 
 * Created by getRuleUsingPOST
 *
 * 获取规则 #2017-6-14#
 *
 * @studentId 	studentId-Number
 */
exports.getRuleUsingPOST = function (data, callback) {
	servers.POST({
		url: "/mdc/api/rule/obtain/"+data.studentId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "getRuleUsingPOST",
		query: {
		}
	}, callback);
};
/** End getRuleUsingPOST */



/** 
 * Created by getSystemRuleUsingGET
 *
 * 查询系统规则 #2017-6-8#(已完成)
 *
 * @schoolId 	非必传，不传时为默认取系统策略-Number
 * @validateTime 	生效时段(0.所有时段 1.在校时段 2.非在校时段) -Number
 */
exports.getSystemRuleUsingGET = function (data, callback) {
	servers.GET({
		url: "/mdc/api/system_rule/get",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "getSystemRuleUsingGET",
		query: {
			schoolId: data.schoolId,
			validateTime: data.validateTime
		}
	}, callback);
};
/** End getSystemRuleUsingGET */



/** 
 * Created by ApplicationTypeAPI-getApplicationSelectList
 *
 * 查询应用下拉列表 #2017-06-14#
 *
 */
exports.ApplicationTypeAPI_getApplicationSelectList = function (data, callback) {
	servers.GET({
		url: "/api/applications/find_all_select",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationTypeAPI-getApplicationSelectList"
	}, callback);
};
/** End ApplicationTypeAPI-getApplicationSelectList */



/** 
 * Created by UserRoleAPI-getOrgById_1
 *
 * 用户类型 #2017-06-13#
 *
 */
exports.UserRoleAPI_getOrgById_1 = function (data, callback) {
	servers.GET({
		url: "/api/user_type/find",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "UserRoleAPI-getOrgById_1"
	}, callback);
};
/** End UserRoleAPI-getOrgById_1 */



/** 
 * Created by TerminalManagementControllerApi-unbundTerminal
 *
 * 解绑终端 #2017-06-15#
 *
 * @unbundTerminalQueryDto 	unbundTerminalQueryDto-Body
 */
exports.TerminalManagementControllerApi_unbundTerminal = function (data, callback) {
	servers.DELETE({
		url: "/api/unbundTerminal",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TerminalManagementControllerApi-unbundTerminal",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TerminalManagementControllerApi-unbundTerminal */



/** 
 * Created by ApplicationApi-getOneApplicationById
 *
 * 查询应用 #2017-06-16#
 *
 * @applicationId 	applicationId-Number
 */
exports.ApplicationApi_getOneApplicationById = function (data, callback) {
	servers.GET({
		url: "/api/applications/find/"+data.applicationId,
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "ApplicationApi-getOneApplicationById",
		query: {
		}
	}, callback);
};
/** End ApplicationApi-getOneApplicationById */



/** 
 * Created by TerminalManagementControllerApi-statisticsTerminalAlarm
 *
 * 预警终端数据查询 #2017-06-15#
 *
 */
exports.TerminalManagementControllerApi_statisticsTerminalAlarm = function (data, callback) {
	servers.POST({
		url: "/api/statisticsTerminalAlarm",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "TerminalManagementControllerApi-statisticsTerminalAlarm"
	}, callback);
};
/** End TerminalManagementControllerApi-statisticsTerminalAlarm */


