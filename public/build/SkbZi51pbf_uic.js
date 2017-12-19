/**!
 * 重构微服务-swagger 用户中心(旧)-uic v0.1
 * 接口数量 23
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



/** 
 * Created by loginUsingPOST
 *
 * 用户登录（龚德志） #2017-03-13#
 *
 * @user 	登录参数-Body
 */
exports.loginUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/auth/login",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "loginUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End loginUsingPOST */



/** 
 * Created by getUserAppRolesUsingGET
 *
 * 获取用户拥有的角色（龚德志） #2017-03-13#
 *
 * @appId 	子系统ID-String
 */
exports.getUserAppRolesUsingGET = function (data, callback) {
	servers.GET({
		url: "/uic/api/role/get-userapp-role/"+data.appId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getUserAppRolesUsingGET",
		query: {
		}
	}, callback);
};
/** End getUserAppRolesUsingGET */



/** 
 * Created by loginTestUsingPOST
 *
 * 用户登录（龚德志） #2017-05-03#
 *
 * @user 	登录参数-Body
 */
exports.loginTestUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/auth/login/logintest",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "loginTestUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End loginTestUsingPOST */



/** 
 * Created by loginProxyUsingPOST
 *
 * 代理登录功能（郑强） #2017-06-14#
 *
 * @TOKEN 	代理登录人员登录后的token-String * @proxyUserID 	代理人员的身份证号码-String
 */
exports.loginProxyUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/auth/login_proxy/"+data.proxyUserID,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "loginProxyUsingPOST",
		query: {
		}
	}, callback);
};
/** End loginProxyUsingPOST */



/** 
 * Created by initAccountRoleCacheUsingPUT
 *
 * 初始一个租户全部账号角色信息（陈显官) #2017-10-11# 
 *
 * @tenantid 	租户Id-Number
 */
exports.initAccountRoleCacheUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/uic/api/user-auth-notify/accounts/init_role",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "initAccountRoleCacheUsingPUT",
		query: {
			tenantid: data.tenantid
		}
	}, callback);
};
/** End initAccountRoleCacheUsingPUT */



/** 
 * Created by getUserAppUsingPOST
 *
 * 获取用户拥有的系统（龚德志） #2017-03-13#
 *
 */
exports.getUserAppUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/app/get-userapp",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getUserAppUsingPOST"
	}, callback);
};
/** End getUserAppUsingPOST */



/** 
 * Created by cipherLoginUsingPOST
 *
 * 用户登录（龚德志） #2017-05-03#
 *
 * @user 	登录参数-Body
 */
exports.cipherLoginUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/auth/login/cipher",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "cipherLoginUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End cipherLoginUsingPOST */



/** 
 * Created by SMSApi-sendAuthCode
 *
 * 发送一条验证码短信（古建国） #2017-08-16#
 *
 * @phoneNumber 	手机号-String
 */
exports.SMSApi_sendAuthCode = function (data, callback) {
	servers.POST({
		url: "/uic/api/sms/send_auth_code",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SMSApi-sendAuthCode",
		query: {
			phoneNumber: data.phoneNumber
		}
	}, callback);
};
/** End SMSApi-sendAuthCode */



/** 
 * Created by refreshTokenV2UsingPOST
 *
 * 用户刷新token（郑强） #2017-06-26#
 *
 * @tokenRequest 	tokenRequest-Body
 */
exports.refreshTokenV2UsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/auth/refreshTokenV2",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "refreshTokenV2UsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End refreshTokenV2UsingPOST */



/** 
 * Created by SMSApi-validSecurityStatus
 *
 * 获取手机号验证状态（古建国） #2017-08-17#
 *
 * @phoneNumber 	手机号-String
 */
exports.SMSApi_validSecurityStatus = function (data, callback) {
	servers.POST({
		url: "/uic/api/sms/valid_security_status",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SMSApi-validSecurityStatus",
		query: {
			phoneNumber: data.phoneNumber
		}
	}, callback);
};
/** End SMSApi-validSecurityStatus */



/** 
 * Created by testRedisUsingPOST
 *
 * Redis Test
 *
 */
exports.testRedisUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/sms/redis",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "testRedisUsingPOST"
	}, callback);
};
/** End testRedisUsingPOST */



/** 
 * Created by sxtBuildSessionUsingGET
 *
 * 生学堂用户获取session对象信息（龚德志） #2017-06-06#
 *
 * @accountId 	当前用户的账号ID-String
 */
exports.sxtBuildSessionUsingGET = function (data, callback) {
	servers.GET({
		url: "/uic/api/app/sxt_build_session",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "sxtBuildSessionUsingGET",
		query: {
			accountId: data.accountId
		}
	}, callback);
};
/** End sxtBuildSessionUsingGET */



/** 
 * Created by sxtBuildSessionByLoginNameUsingGET
 *
 * 生学堂用户获取session对象信息（龚德志） #2017-06-06#
 *
 * @loginName 	当前用户的登录名-String
 */
exports.sxtBuildSessionByLoginNameUsingGET = function (data, callback) {
	servers.GET({
		url: "/uic/api/app/login_name/sxt_build_session",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "sxtBuildSessionByLoginNameUsingGET",
		query: {
			loginName: data.loginName
		}
	}, callback);
};
/** End sxtBuildSessionByLoginNameUsingGET */



/** 
 * Created by initAllTenantCurrentTermUsingPUT
 *
 * 初始所有租户当前学期（龚德志) #2017-06-07# 
 *
 */
exports.initAllTenantCurrentTermUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/uic/api/user-auth-notify/accounts/init_alltenant_currentterm",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "initAllTenantCurrentTermUsingPUT"
	}, callback);
};
/** End initAllTenantCurrentTermUsingPUT */



/** 
 * Created by initAccountBasicInfoCacheUsingPUT
 *
 * 初始一个租户全部账号基本信息（陈显官) #2017-10-11# 
 *
 * @tenantid 	租户Id-Number
 */
exports.initAccountBasicInfoCacheUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/uic/api/user-auth-notify/accounts/init_basic",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "initAccountBasicInfoCacheUsingPUT",
		query: {
			tenantid: data.tenantid
		}
	}, callback);
};
/** End initAccountBasicInfoCacheUsingPUT */



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
		url: "/uic/api/auth/refresh_token",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "refreshTokenUsingGET",
		query: {
			roleId: data.roleId,
			appId: data.appId
		}
	}, callback);
};
/** End refreshTokenUsingGET */



/** 
 * Created by SMSApi-validAuthCode
 *
 * 验证验证码短信（古建国） #2017-08-16#
 *
 * @phoneNumber 	手机号-String
 * @authCode 	验证码-String
 */
exports.SMSApi_validAuthCode = function (data, callback) {
	servers.POST({
		url: "/uic/api/sms/valid_auth_code",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SMSApi-validAuthCode",
		query: {
			phoneNumber: data.phoneNumber,
			authCode: data.authCode
		}
	}, callback);
};
/** End SMSApi-validAuthCode */



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
		url: "/uic/api/auth/authority",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "authorityUsingGET",
		query: {
			appId: data.appId,
			uri: data.uri
		}
	}, callback);
};
/** End authorityUsingGET */



/** 
 * Created by mobileCipherLoginUsingPOST
 *
 * 手机端登录（龚德志） #2017-05-03#
 *
 * @loginRequest 	登录参数-Body
 */
exports.mobileCipherLoginUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/auth/mobile_login/cipher",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "mobileCipherLoginUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End mobileCipherLoginUsingPOST */



/** 
 * Created by hasAppUserUsingPOST
 *
 * 查询用户是否是应用的用户（郑强） #2017-08-24#
 *
 * @TOKEN 	TOKEN-String * @appCode 	appCode-String
 */
exports.hasAppUserUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/app-user/has-app-user",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "hasAppUserUsingPOST",
		query: {
			appCode: data.appCode
		}
	}, callback);
};
/** End hasAppUserUsingPOST */



/** 
 * Created by deleteAccountRoleCacheUsingPOST
 *
 * 删除用户的角色缓存信息（陈显官) #2017-10-10# 
 *
 * @accountIds 	用户账号ID集合-
 */
exports.deleteAccountRoleCacheUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/user-auth-notify/accounts/delete_role_cache",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "deleteAccountRoleCacheUsingPOST",
		query: {
		}
	}, callback);
};
/** End deleteAccountRoleCacheUsingPOST */



/** 
 * Created by deleteAccountBasicCacheUsingPOST
 *
 * 删除用户的基本缓存信息（陈显官) #2017-10-10#
 *
 * @accountIds 	用户账号ID集合-
 */
exports.deleteAccountBasicCacheUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/user-auth-notify/accounts/delete_basic_cache",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "deleteAccountBasicCacheUsingPOST",
		query: {
		}
	}, callback);
};
/** End deleteAccountBasicCacheUsingPOST */



/** 
 * Created by initAllParentStudentUsingPUT
 *
 * 初始全部家长学生关系（龚德志) #2017-06-07# 
 *
 */
exports.initAllParentStudentUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/uic/api/user-auth-notify/accounts/init_allparent_student",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "initAllParentStudentUsingPUT"
	}, callback);
};
/** End initAllParentStudentUsingPUT */


