/**!
 * 找麻将 v1.0
 * 接口数量 30
 * http://172.16.10.31:3300/api/list?p_id=Hkldi9aJUl&v_id=rybdiqTyUx
 *
 * 2017-04-28 18:03:12 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../common/servers');



/** 
 * Created by r1gHN3a1Lx
 *
 * 用户模块 -  登陆
 *
 * @user 	手机号码-String * @password 	密码-String
 */
exports.loginByUser = function (data, callback) {
	servers.POST({
		url: "/api/0/user/login",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End r1gHN3a1Lx */



/** 
 * Created by rJlyvoTyLg
 *
 * 用户模块 - 发送注册短信验证码
 *
 * @phone 	手机号码-String
 */
exports.rJlyvoTyLg = function (data, callback) {
	servers.POST({
		url: "/api/0/user/send_valid_sms",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End rJlyvoTyLg */



/** 
 * Created by Bye0w3wrFe
 *
 * 第一步 -- 发布招募信息-保存用户二维码
 *
 * @url 	微信个人二维码名片链接地址-String * @image 	用户上传的原图片-String * @auth_token 	验证串-String * @step 	当前第几步-Number
 */
exports.sendRecruitBindQrcode = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/bind_qrcode",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End Bye0w3wrFe */



/** 
 * Created by rkeu0AVytl
 *
 * 图片上传
 *
 * @type 	0 图片-Number * @file 	文件-
 */
exports.rkeu0AVytl = function (data, callback) {
	servers.POST({
		url: "/api/runtimefile/create",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End rkeu0AVytl */



/** 
 * Created by B1xvJWOStg
 *
 * 第零步 -- 发布招募信息-绑定游戏地区
 *
 * @loc_provinces 	四川-String * @loc_city 	成都-String * @loc_area 	高新区-String * @lat 	经度-Number * @lng 	维度-Number * @auth_token 	-String * @id 	消息id-String * @step 	当前第几步-String
 */
exports.sendRecruitBindLoc = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/bind_loc",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End B1xvJWOStg */



/** 
 * Created by H1eJWCr_5l
 *
 * 招募信息-获取附近招募信息
 *
 * @page 	-String * @loc_provinces 	- * @loc_city 	- * @loc_area 	- * @score 	- * @is_validate 	- * @mj_sp 	-String * @auth_token 	-String * @lat 	-String * @lng 	-String
 */
exports.getSideRecruitList = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/near",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End H1eJWCr_5l */



/** 
 * Created by S1l1CqXe5g
 *
 * 钱包 - 充值
 *
 * @auth_token 	验证串-String * @fees 	值-Number * @summary 	描述-String
 */
exports.vbankRecharge = function (data, callback) {
	servers.POST({
		url: "/api/0/vbank/recharge",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End S1l1CqXe5g */



/** 
 * Created by rklvyOXxcx
 *
 * 钱包 - 钱包余额
 *
 * @auth_token 	验证串-String
 */
exports.vbankGetMyFees = function (data, callback) {
	servers.POST({
		url: "/api/0/vbank/get",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End rklvyOXxcx */



/** 
 * Created by SJx9tPS2ue
 *
 * 首页-banner广告
 *
 */
exports.getIndexBanner = function (data, callback) {
	servers.POST({
		url: "/api/0/ad/list",
		
token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End SJx9tPS2ue */



/** 
 * Created by HJl4a053ul
 *
 * 招募信息-获取招募详情
 *
 * @id 	游戏id-Number * @auth_token 	验证串-String
 */
exports.getRecruitDetail = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/get",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End HJl4a053ul */



/** 
 * Created by HJebFCeZCg
 *
 * 钱包 - 我的额外收入
 *
 * @auth_token 	验证参数-String
 */
exports.HJebFCeZCg = function (data, callback) {
	servers.POST({
		url: "/api/0/vbank/extend_benefits",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End HJebFCeZCg */



/** 
 * Created by ryghST6kIl
 *
 * 用户模块 -  修改图片
 *
 * @auth_token 	-String * @value 	-String
 */
exports.ryghST6kIl = function (data, callback) {
	servers.POST({
		url: "/api/0/user/modify/image",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End ryghST6kIl */



/** 
 * Created by SkeuOVEx9x
 *
 * 钱包 -  消费
 *
 * @auth_token 	验证-String * @fees 	扣费-Number * @summary 	备注-String * @target 	其他id-String
 */
exports.SkeuOVEx9x = function (data, callback) {
	servers.POST({
		url: "/api/0/vbank/charge",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End SkeuOVEx9x */



/** 
 * Created by Hye3ns61Ig
 *
 * 用户模块  - 通过手机号码注册
 *
 * @phone 	手机号码-String * @password 	密码-String * @code 	短信码-String * @invite_code 	邀请码-String
 */
exports.registerByPhone = function (data, callback) {
	servers.POST({
		url: "/api/0/user/registerByPhone",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End Hye3ns61Ig */



/** 
 * Created by rkx4j$U_cg
 *
 * 招募信息-删除我发布的招募信息
 *
 * @auth_token 	验证参数-String * @id 	招募id-String
 */
exports.deleteMyRecruit = function (data, callback) {
	if(data.auth_token==undefined || data.id==undefined){
		return callback("参数错误");
	}
	servers.POST({
		url: "/api/0/recruit/delete",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End rkx4j$U_cg */



/** 
 * Created by r1gIwpQg9x
 *
 * 钱包 - 流水
 *
 * @auth_token 	验证-String
 */
exports.vbankGetWaterList = function (data, callback) {
	servers.POST({
		url: "/api/0/vbank/detail",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End r1gIwpQg9x */



/** 
 * Created by HyxO0gOl5x
 *
 * 用户模块 - 我购买的产品(麻将群信息)
 *
 * @auth_token 	验证串-String * @page 	page-Number
 */
exports.userGetMyBuysRecruit = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/mybuys",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End HyxO0gOl5x */



/** 
 * Created by BkeZbmOrYl
 *
 * 第三步 -- 发布招募信息-绑定游戏玩法
 *
 * @play_types 	玩法-String * @id 	信息id-String * @auth_token 	验证串-String * @step 	当前是第几步-Number
 */
exports.sendRecruitBindGamePlayTypes = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/bind_game_play_types",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End BkeZbmOrYl */



/** 
 * Created by Hkx9FhaJUe
 *
 * 用户模块  - 注销
 *
 * @auth_token 	-String
 */
exports.Hkx9FhaJUe = function (data, callback) {
	servers.GET({
		url: "/api/0/user/logout",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End Hkx9FhaJUe */



/** 
 * Created by BJgzvzdBYe
 *
 * 第二步 -- 发布招募信息-绑定游戏
 *
 * @mj_sp 	游戏平台-String * @id 	消息id-String * @auth_token 	-String * @step 	当前第几步-Number
 */
exports.sendRecruitBindGameSp = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/bind_game_sp",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End BJgzvzdBYe */



/** 
 * Created by rkgHXVurFx
 *
 * 第四步 --发布招募信息-绑定群资料
 *
 * @group_name 	群信息-String * @score 	分-Number * @summary 	介绍-String * @id 	当前信息id-String * @auth_token 	验证串-String * @step 	当前那步-String
 */
exports.sendRecruitBindGroupInfo = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/bind_group_info",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End rkgHXVurFx */



/** 
 * Created by HylNK0TkUg
 *
 * 用户模块 - 重置密码
 *
 * @phone 	-String * @password 	-String * @code 	短信-String
 */
exports.userResetPassword = function (data, callback) {
	servers.POST({
		url: "/api/0/user/resetPasswordBySMS",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End HylNK0TkUg */



/** 
 * Created by SJx4dgrnue
 *
 * 招募信息-获取列表
 *
 * @page 	页数-Number * @loc_provinces 	-String * @loc_city 	-String * @loc_area 	-String * @score 	-Number * @is_validate 	1 认证-Number * @mj_sp 	麻将平台-String * @auth_token 	验证串-String * @lat 	纬度-Number * @lng 	经度-Number * @play_types 	游戏玩法-String
 */
exports.getRecruitList = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/list",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End SJx4dgrnue */



/** 
 * Created by SkxpaR6yUl
 *
 * 用户模块 - 我的信息
 *
 * @auth_token 	-String
 */
exports.userGetMyInfo = function (data, callback) {
	servers.GET({
		url: "/api/0/user/me",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End SkxpaR6yUl */



/** 
 * Created by SJxvyTaJUl
 *
 * 用户模块 - 修改信息
 *
 * @auth_token 	-String * @value 	-String
 */
exports.SJxvyTaJUl = function (data, callback) {
	servers.POST({
		url: "/api/0/user/modify/name",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End SJxvyTaJUl */



/** 
 * Created by rJe6HDrJFl
 *
 * 招募信息-获取麻将游戏平台列表
 *
 * @provinces 	省份用,分割-String
 */
exports.getGamesSpList = function (data, callback) {
	servers.GET({
		url: "/api/0/gamesp/list",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End rJe6HDrJFl */



/** 
 * Created by HJe9fA6J8x
 *
 * 用户模块 - 修改密码发送短信
 *
 * @phone 	-String
 */
exports.HJe9fA6J8x = function (data, callback) {
	servers.POST({
		url: "/api/0/user/send_findpassword_sms",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End HJe9fA6J8x */



/** 
 * Created by ryxd4jvlqx
 *
 * 用户模块 - 我发布的麻将
 *
 * @auth_token 	-String * @page 	分页-Number
 */
exports.userGetMyRecruit = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/me",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End ryxd4jvlqx */



/** 
 * Created by H1lJAIaIYg
 *
 * 第六步 -- 发布招募信息 - 添加用户自定义麻将
 *
 * @id 	信息id-String * @auth_token 	-String * @mj_sp 	产品名称-String * @play_types 	玩法用,分割-String * @step 	当前那步-Number
 */
exports.snedRecruitBindDiyGame = function (data, callback) {
	servers.POST({
		url: "/api/0/recruit/bind_diy_game",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End H1lJAIaIYg */



/** 
 * Created by SJxdApp1Ix
 *
 * 用户模块 - 修改密码
 *
 * @auth_token 	-String * @value 	新密码-String * @value2 	老密码-String
 */
exports.userChangePassword = function (data, callback) {
	servers.POST({
		url: "/api/0/user/modify/password",
		token: !data.TOKEN?"":data.TOKEN
	}, callback);
};
/** End SJxdApp1Ix */


