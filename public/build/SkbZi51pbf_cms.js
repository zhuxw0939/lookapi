/**!
 * 重构微服务-swagger 生学网(堂)内容管理-cms v0.1
 * 接口数量 79
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



/** 
 * Created by backstage-BackBannerApi-disable
 *
 * 禁用一条横幅 #吴昂/#
 *
 * @bannerId 	横幅ID-String
 */
exports.backstage_BackBannerApi_disable = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/bannerApi/disable/"+data.bannerId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackBannerApi-disable",
		query: {
		}
	}, callback);
};
/** End backstage-BackBannerApi-disable */



/** 
 * Created by Backstage-TopicApilistModuleTopics
 *
 * 通过区域和应用类型查询话题列表API  #向发钧#
 *
 * @queryTopicListDTO 	查询话题列表-Body
 */
exports.Backstage_TopicApilistModuleTopics = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/topicApi/listModuleTopics",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "Backstage-TopicApilistModuleTopics",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End Backstage-TopicApilistModuleTopics */



/** 
 * Created by Backstage-TopicApicreateTopic
 *
 * 创建话题API  #向发钧#
 *
 * @createTopicDTO 	创建话题参数对象-Body
 */
exports.Backstage_TopicApicreateTopic = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/topicApi/createTopic",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "Backstage-TopicApicreateTopic",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End Backstage-TopicApicreateTopic */



/** 
 * Created by CommentApi-list
 *
 * 按条件查询违规comment列表 #吴昂/#
 *
 * @commentQueryDTO 	查询对象-Body
 */
exports.CommentApi_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/accusationApi/list/comment",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CommentApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End CommentApi-list */



/** 
 * Created by backstage-BackCommentApi-excel-export
 *
 * 导出解析 #吴昂/#
 *
 */
exports.backstage_BackCommentApi_excel_export = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/commentApi/excel/export",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackCommentApi-excel-export"
	}, callback);
};
/** End backstage-BackCommentApi-excel-export */



/** 
 * Created by backstage-BackBannerApi-modify
 *
 * 修改一个横幅 #吴昂/#
 *
 * @bannerModifyDTO 	横幅对象-Body
 */
exports.backstage_BackBannerApi_modify = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/bannerApi/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackBannerApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackBannerApi-modify */



/** 
 * Created by TopicApi-remove
 *
 * 根据话题ID删除话题数据 #向发钧#
 *
 * @topicId 	话题ID-String
 */
exports.TopicApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/topicApi/remove/"+data.topicId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TopicApi-remove",
		query: {
		}
	}, callback);
};
/** End TopicApi-remove */



/** 
 * Created by backstage-BackLabelApi-create
 *
 * 创建一个标签 #吴昂/#
 *
 * @labelInsertDTO 	模型对象-Body
 */
exports.backstage_BackLabelApi_create = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/labelApi/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackLabelApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackLabelApi-create */



/** 
 * Created by Backstage-TopicApimodify
 *
 * 修改话题内容 #向发钧#
 *
 * @topicDTO 	topicDTO-Body * @createTopicDTO 	修改话题内容-Body
 */
exports.Backstage_TopicApimodify = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/topicApi/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "Backstage-TopicApimodify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End Backstage-TopicApimodify */



/** 
 * Created by backstage-isAboveCo-config
 *
 * 保存是否置于公司级banner之上的设置 #吴昂/#
 *
 * @areaId 	要修改的行政区划ID-String
 * @appType 	app终端类型：家长端，老师端，学生端-Number
 * @isAboveCo 	设置参数：机构级是banner是否置于公司级之上-Boolean
 */
exports.backstage_isAboveCo_config = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/bannerApi/isAboveCo",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-isAboveCo-config",
		query: {
			areaId: data.areaId,
			appType: data.appType,
			isAboveCo: data.isAboveCo
		}
	}, callback);
};
/** End backstage-isAboveCo-config */



/** 
 * Created by backstage-BackSensitiveWordsApi-excel-import
 *
 * Excel表导入敏感词 #吴昂/#
 *
 */
exports.backstage_BackSensitiveWordsApi_excel_import = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/sensitiveWordsApi/excel/import",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackSensitiveWordsApi-excel-import"
	}, callback);
};
/** End backstage-BackSensitiveWordsApi-excel-import */



/** 
 * Created by Backstage-findTopicByComplex
 *
 * 通过复杂查询条件从ES中查询Topic话题列表API  #向发钧#
 *
 * @paramTopicDTO 	查询话题列表-Body
 */
exports.Backstage_findTopicByComplex = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/topicApi/findTopicByComplex",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "Backstage-findTopicByComplex",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End Backstage-findTopicByComplex */



/** 
 * Created by backstage-BackSensitiveWordsApi-list
 *
 * 按条件查询sensitiveWords列表 #吴昂/#
 *
 * @sensitiveWordsQueryDTO 	查询对象-Body
 */
exports.backstage_BackSensitiveWordsApi_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/sensitiveWordsApi/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackSensitiveWordsApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackSensitiveWordsApi-list */



/** 
 * Created by backstage-BackCommentApi-cancelTop
 *
 * （取消）置顶 #吴昂/#
 *
 * @commentId 	对象ID-String
 */
exports.backstage_BackCommentApi_cancelTop = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/commentApi/cancelTop/"+data.commentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackCommentApi-cancelTop",
		query: {
		}
	}, callback);
};
/** End backstage-BackCommentApi-cancelTop */



/** 
 * Created by TopicApi-listRecommendTopics
 *
 * 今日推荐话题列表API  #向发钧#
 *
 * @recommendTopicListDTO 	查询话题列表-Body
 */
exports.TopicApi_listRecommendTopics = function (data, callback) {
	servers.POST({
		url: "/cms/api/topicApi/listRecommendTopics",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TopicApi-listRecommendTopics",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TopicApi-listRecommendTopics */



/** 
 * Created by backstage-BackCommentApi-detail
 *
 * comment详情 #吴昂/#
 *
 * @commentId 	对象ID-String
 */
exports.backstage_BackCommentApi_detail = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/commentApi/detail/"+data.commentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackCommentApi-detail",
		query: {
		}
	}, callback);
};
/** End backstage-BackCommentApi-detail */



/** 
 * Created by backstage-BackCommentApi-delete
 *
 * 删除评论 #吴昂/#
 *
 * @idList 	对象ID列表-
 */
exports.backstage_BackCommentApi_delete = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/backstage/commentApi/delete",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackCommentApi-delete",
		query: {
			idList: data.idList
		}
	}, callback);
};
/** End backstage-BackCommentApi-delete */



/** 
 * Created by Backstage-TopicApisetTop-cancel
 *
 * 根据话题ID设置话题取消置顶 #吴昂#
 *
 * @topicId 	话题ID-String
 */
exports.Backstage_TopicApisetTop_cancel = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/topicApi/cancelTop/"+data.topicId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "Backstage-TopicApisetTop-cancel",
		query: {
		}
	}, callback);
};
/** End Backstage-TopicApisetTop-cancel */



/** 
 * Created by backstage-BackSensitiveWordsApi-delete
 *
 * 删除敏感词 #吴昂/#
 *
 * @idList 	敏感词ID列表-
 */
exports.backstage_BackSensitiveWordsApi_delete = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/backstage/sensitiveWordsApi/delete",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackSensitiveWordsApi-delete",
		query: {
			idList: data.idList
		}
	}, callback);
};
/** End backstage-BackSensitiveWordsApi-delete */



/** 
 * Created by CommentApi-list_1
 *
 * 按条件查询违规reply列表 #吴昂/#
 *
 * @commentQueryDTO 	查询对象-Body
 */
exports.CommentApi_list_1 = function (data, callback) {
	servers.POST({
		url: "/cms/api/accusationApi/list/reply",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CommentApi-list_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End CommentApi-list_1 */



/** 
 * Created by CommentApi-list4Message
 *
 * 话题评论列表 #吴昂/#
 *
 * @contentId 	对象ID-String
 */
exports.CommentApi_list4Message = function (data, callback) {
	servers.GET({
		url: "/cms/api/commentApi/message/list/"+data.contentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CommentApi-list4Message",
		query: {
		}
	}, callback);
};
/** End CommentApi-list4Message */



/** 
 * Created by BannerApi-list
 *
 * 按类型查询banner列表 #吴昂/#
 *
 * @appType 	应用类型-String
 * @size 	展示条数-String
 */
exports.BannerApi_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/bannerApi/list/banner",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "BannerApi-list",
		query: {
			appType: data.appType,
			size: data.size
		}
	}, callback);
};
/** End BannerApi-list */



/** 
 * Created by TopicApi-listModuleTopics_1
 *
 * 通过模块查询话题列表API  #向发钧#
 *
 * @moduleTopicListDTO 	查询话题列表-Body
 */
exports.TopicApi_listModuleTopics_1 = function (data, callback) {
	servers.POST({
		url: "/cms/api/topicApi/listModuleTopics",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TopicApi-listModuleTopics_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TopicApi-listModuleTopics_1 */



/** 
 * Created by backstage-BackCommentApi-top
 *
 * 置顶 #吴昂/#
 *
 * @commentId 	对象ID-String
 */
exports.backstage_BackCommentApi_top = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/commentApi/top/"+data.commentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackCommentApi-top",
		query: {
		}
	}, callback);
};
/** End backstage-BackCommentApi-top */



/** 
 * Created by BannerApi-SplashScreen
 *
 * 查询闪屏 #吴昂/#
 *
 * @appType 	应用类型-String
 * @size 	展示条数-String
 */
exports.BannerApi_SplashScreen = function (data, callback) {
	servers.POST({
		url: "/cms/api/bannerApi/list/splashScreen",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "BannerApi-SplashScreen",
		query: {
			appType: data.appType,
			size: data.size
		}
	}, callback);
};
/** End BannerApi-SplashScreen */



/** 
 * Created by backstage-BackCommentApi-scoreComment
 *
 * 查询成绩点评列表 #吴昂/#
 *
 * @commentQueryDTO 	查询对象-Body
 */
exports.backstage_BackCommentApi_scoreComment = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/commentApi/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackCommentApi-scoreComment",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackCommentApi-scoreComment */



/** 
 * Created by LabelApi-remove
 *
 * 删除标签 #向发钧#
 *
 * @labelId 	标签ID-String
 */
exports.LabelApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/labelApi/remove/"+data.labelId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "LabelApi-remove",
		query: {
		}
	}, callback);
};
/** End LabelApi-remove */



/** 
 * Created by LabelApi-createLabel
 *
 * 创建标签API  #向发钧#
 *
 * @name 	标签名字-String
 */
exports.LabelApi_createLabel = function (data, callback) {
	servers.POST({
		url: "/cms/api/labelApi/createLabel",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "LabelApi-createLabel",
		query: {
		}
	}, callback);
};
/** End LabelApi-createLabel */



/** 
 * Created by Backstage-findReplyByComplex
 *
 * 通过复杂查询条件从ES中查询reply回复列表API  #向发钧#
 *
 * @paramReplyDTO 	查询话题列表-Body
 */
exports.Backstage_findReplyByComplex = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/replyApi/findReplyByComplex",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "Backstage-findReplyByComplex",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End Backstage-findReplyByComplex */



/** 
 * Created by OperationApi-praise-list_1
 *
 * 查询点赞人员列表 #吴昂/#
 *
 * @operationQueryDTO 	查询对象-Body
 */
exports.OperationApi_praise_list_1 = function (data, callback) {
	servers.POST({
		url: "/cms/api/operationApi/list/praise",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OperationApi-praise-list_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End OperationApi-praise-list_1 */



/** 
 * Created by attachementApi-create
 *
 * 附件相关的API  #吴昂#
 *
 * @attachmentInsertDTO 	attachmentInsertDTO-Body * @AttachmentInsertDTO 	创建附件-Body
 */
exports.attachementApi_create = function (data, callback) {
	servers.POST({
		url: "/cms/api/attachementApi/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "attachementApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End attachementApi-create */



/** 
 * Created by backstage-BackBannerApi-create
 *
 * 创建一个横幅 #吴昂/#
 *
 * @bannerInsertDTO 	横幅对象-Body
 */
exports.backstage_BackBannerApi_create = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/bannerApi/create/banner",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackBannerApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackBannerApi-create */



/** 
 * Created by backstage-BackMessageApi-pushMsg-detail
 *
 * PUSH消息详情 #吴昂/#
 *
 * @msgId 	对象ID-String
 */
exports.backstage_BackMessageApi_pushMsg_detail = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/message/pushMsg/list/"+data.msgId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackMessageApi-pushMsg-detail",
		query: {
		}
	}, callback);
};
/** End backstage-BackMessageApi-pushMsg-detail */



/** 
 * Created by Backstage-TopicApiremove
 *
 * 根据话题ID删除话题数据 #向发钧#
 *
 * @topicId 	话题ID-String
 */
exports.Backstage_TopicApiremove = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/backstage/topicApi/remove/"+data.topicId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "Backstage-TopicApiremove",
		query: {
		}
	}, callback);
};
/** End Backstage-TopicApiremove */



/** 
 * Created by backstage-BackMessageApi-pushMsg-list
 *
 * PUSH消息列表 #吴昂/#
 *
 */
exports.backstage_BackMessageApi_pushMsg_list = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/message/pushMsg/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackMessageApi-pushMsg-list"
	}, callback);
};
/** End backstage-BackMessageApi-pushMsg-list */



/** 
 * Created by backstage-BackModuleApi-list
 *
 * 按条件查询module列表 #吴昂/#
 *
 * @moduleQueryDTO 	查询对象-Body
 */
exports.backstage_BackModuleApi_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/moduleApi/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackModuleApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackModuleApi-list */



/** 
 * Created by backstage-BackModuleApi-modify
 *
 * 修改一个模块 #吴昂/#
 *
 * @moduleDTO 	模型对象-Body
 */
exports.backstage_BackModuleApi_modify = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/moduleApi/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackModuleApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackModuleApi-modify */



/** 
 * Created by TopicApi-getTopicDetail
 *
 * 查询话题详情  #向发钧#
 *
 * @topicId 	话题ID-String
 */
exports.TopicApi_getTopicDetail = function (data, callback) {
	servers.GET({
		url: "/cms/api/topicApi/getTopicDetail/"+data.topicId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TopicApi-getTopicDetail",
		query: {
		}
	}, callback);
};
/** End TopicApi-getTopicDetail */



/** 
 * Created by backstage-BackModuleApi-delete
 *
 * 删除模块 #吴昂/#
 *
 * @idList 	模块ID列表-
 */
exports.backstage_BackModuleApi_delete = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/backstage/moduleApi/delete",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackModuleApi-delete",
		query: {
			idList: data.idList
		}
	}, callback);
};
/** End backstage-BackModuleApi-delete */



/** 
 * Created by backstage-BackMessageApi-create
 *
 * 创建一条自定义PUSH消息 #吴昂/#
 *
 * @messageInsertDTO 	PUSH消息对象-Body
 */
exports.backstage_BackMessageApi_create = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/message/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackMessageApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackMessageApi-create */



/** 
 * Created by TopicApi-setTop
 *
 * 根据话题ID设置话题置顶 #向发钧#
 *
 * @topicId 	话题ID-String
 */
exports.TopicApi_setTop = function (data, callback) {
	servers.GET({
		url: "/cms/api/topicApi/setTop/"+data.topicId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TopicApi-setTop",
		query: {
		}
	}, callback);
};
/** End TopicApi-setTop */



/** 
 * Created by CommentApi-detail
 *
 * 查询评论详情 #吴昂/#
 *
 * @commentId 	对象ID-String
 */
exports.CommentApi_detail = function (data, callback) {
	servers.GET({
		url: "/cms/api/commentApi/detail/"+data.commentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CommentApi-detail",
		query: {
		}
	}, callback);
};
/** End CommentApi-detail */



/** 
 * Created by TopicApi-createTopic
 *
 * 创建话题API  #向发钧#
 *
 * @createTopicDTO 	创建话题参数对象-Body
 */
exports.TopicApi_createTopic = function (data, callback) {
	servers.POST({
		url: "/cms/api/topicApi/createTopic",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TopicApi-createTopic",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TopicApi-createTopic */



/** 
 * Created by ReplyApi-detail
 *
 * 查询回复详情 #吴昂/#
 *
 * @replyId 	对象ID-String
 */
exports.ReplyApi_detail = function (data, callback) {
	servers.GET({
		url: "/cms/api/replyApi/detail/"+data.replyId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ReplyApi-detail",
		query: {
		}
	}, callback);
};
/** End ReplyApi-detail */



/** 
 * Created by AccusationApi-createAccusation
 *
 * 举报相关的API  #向发钧#
 *
 * @createAccusationDTO 	创建举报记录-Body
 */
exports.AccusationApi_createAccusation = function (data, callback) {
	servers.POST({
		url: "/cms/api/accusationApi/createAccusation",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AccusationApi-createAccusation",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AccusationApi-createAccusation */



/** 
 * Created by ReplyApi-list-At-rootId
 *
 * 根节点下的回复列表 #吴昂/#
 *
 * @rootId 	rootId-String * @commentId 	对象ID-String
 */
exports.ReplyApi_list_At_rootId = function (data, callback) {
	servers.GET({
		url: "/cms/api/replyApi/list/"+data.rootId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ReplyApi-list-At-rootId",
		query: {
		}
	}, callback);
};
/** End ReplyApi-list-At-rootId */



/** 
 * Created by ReplyApi-list
 *
 * 评论回复列表 #吴昂/#
 *
 * @commentId 	对象ID-String
 */
exports.ReplyApi_list = function (data, callback) {
	servers.GET({
		url: "/cms/api/replyApi/list/"+data.commentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ReplyApi-list",
		query: {
		}
	}, callback);
};
/** End ReplyApi-list */



/** 
 * Created by backstage-BackReplyApi-list
 *
 * 按条件查询reply列表 #吴昂/#
 *
 * @replyQueryDTO 	查询列表-Body
 */
exports.backstage_BackReplyApi_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/replyApi/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackReplyApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackReplyApi-list */



/** 
 * Created by backstage-BackCommentApi-list
 *
 * 按条件查询comment列表 #吴昂/#
 *
 * @commentQueryDTO 	查询对象-Body
 */
exports.backstage_BackCommentApi_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/commentApi/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackCommentApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackCommentApi-list */



/** 
 * Created by backstage-BackAttachmentApi-list
 *
 * 按条件查询attachment列表 #吴昂/#
 *
 * @attachmentQueryDTO 	查询对象-Body
 */
exports.backstage_BackAttachmentApi_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/attachmentApi/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackAttachmentApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackAttachmentApi-list */



/** 
 * Created by CommentApi-list_2
 *
 * 按条件查询comment列表 #吴昂/#
 *
 * @commentQueryDTO 	查询对象-Body
 */
exports.CommentApi_list_2 = function (data, callback) {
	servers.POST({
		url: "/cms/api/commentApi/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CommentApi-list_2",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End CommentApi-list_2 */



/** 
 * Created by backstage-BackCommentApi-modify
 *
 * comment内容修改 #吴昂#
 *
 * @commentInsertDTO 	comment象-Body
 */
exports.backstage_BackCommentApi_modify = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/commentApi/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackCommentApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackCommentApi-modify */



/** 
 * Created by moduleApi-listBaseModuleDTOs
 *
 * 查询基础模块列表 #向发钧#
 *
 */
exports.moduleApi_listBaseModuleDTOs = function (data, callback) {
	servers.GET({
		url: "/cms/api/moduleApi/listBaseModuleDTOs",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "moduleApi-listBaseModuleDTOs"
	}, callback);
};
/** End moduleApi-listBaseModuleDTOs */



/** 
 * Created by ReplyApi-myList
 *
 * 话题回复列表 #吴昂/#
 *
 * @commentId 	对象ID-String
 */
exports.ReplyApi_myList = function (data, callback) {
	servers.GET({
		url: "/cms/api/replyApi/mine/list/"+data.commentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ReplyApi-myList",
		query: {
		}
	}, callback);
};
/** End ReplyApi-myList */



/** 
 * Created by backstage-BackLabelApi-modify
 *
 * 修改一个标签 #吴昂/#
 *
 * @labelInsertDTO 	模型对象-Body
 */
exports.backstage_BackLabelApi_modify = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/labelApi/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackLabelApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackLabelApi-modify */



/** 
 * Created by backstage-BackBannerApi-enable
 *
 * 启用一条横幅 #吴昂/#
 *
 * @bannerId 	横幅ID-String
 */
exports.backstage_BackBannerApi_enable = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/bannerApi/enable/"+data.bannerId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackBannerApi-enable",
		query: {
		}
	}, callback);
};
/** End backstage-BackBannerApi-enable */



/** 
 * Created by backstage-BackModuleApi-create
 *
 * 创建一个模块 #吴昂/#
 *
 * @moduleInsertDTO 	模型对象-Body
 */
exports.backstage_BackModuleApi_create = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/moduleApi/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackModuleApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackModuleApi-create */



/** 
 * Created by backstage-BackReplyApi-delete
 *
 * 删除回复 #吴昂/#
 *
 * @idList 	对象ID列表-
 */
exports.backstage_BackReplyApi_delete = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/backstage/replyApi/delete",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackReplyApi-delete",
		query: {
			idList: data.idList
		}
	}, callback);
};
/** End backstage-BackReplyApi-delete */



/** 
 * Created by backstage-BackSensitiveWordsApi-excel-export
 *
 * 导出敏感词 #吴昂/#
 *
 */
exports.backstage_BackSensitiveWordsApi_excel_export = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/sensitiveWordsApi/excel/export",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackSensitiveWordsApi-excel-export"
	}, callback);
};
/** End backstage-BackSensitiveWordsApi-excel-export */



/** 
 * Created by ContentStampApi-createContentStamp
 *
 * 创建内容印章API  #向发钧#
 *
 * @createStampDTO 	创建内容标签-Body
 */
exports.ContentStampApi_createContentStamp = function (data, callback) {
	servers.POST({
		url: "/cms/api/contentStampApi/createContentStamp",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ContentStampApi-createContentStamp",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ContentStampApi-createContentStamp */



/** 
 * Created by backstage-BackBannerApi-delete
 *
 * 删除横幅 #吴昂/#
 *
 * @idList 	横幅ID列表-Body
 */
exports.backstage_BackBannerApi_delete = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/backstage/bannerApi/delete",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackBannerApi-delete",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackBannerApi-delete */



/** 
 * Created by backstage-BackBannerApi-create_1
 *
 * 创建一个闪屏 #吴昂/#
 *
 * @bannerInsertDTO 	横幅对象-Body
 */
exports.backstage_BackBannerApi_create_1 = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/bannerApi/create/splashScreen",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackBannerApi-create_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackBannerApi-create_1 */



/** 
 * Created by Backstage-TopicApisetTop
 *
 * 根据话题ID设置话题置顶 #向发钧#
 *
 * @topicId 	话题ID-String
 */
exports.Backstage_TopicApisetTop = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/topicApi/setTop/"+data.topicId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "Backstage-TopicApisetTop",
		query: {
		}
	}, callback);
};
/** End Backstage-TopicApisetTop */



/** 
 * Created by moduleApi-listChildModuleDTOs
 *
 * 通过模块ID查询子模块列表 #向发钧#
 *
 * @moduleId 	模块ID-String
 */
exports.moduleApi_listChildModuleDTOs = function (data, callback) {
	servers.GET({
		url: "/cms/api/moduleApi/listChildModuleDTOs/"+data.moduleId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "moduleApi-listChildModuleDTOs",
		query: {
		}
	}, callback);
};
/** End moduleApi-listChildModuleDTOs */



/** 
 * Created by OperationApi-createOperation
 *
 * 创建操作记录API  #向发钧#
 *
 * @createOperationDTO 	创建操作记录-Body
 */
exports.OperationApi_createOperation = function (data, callback) {
	servers.POST({
		url: "/cms/api/operationApi/createOperation",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OperationApi-createOperation",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End OperationApi-createOperation */



/** 
 * Created by ContentStampApi-remove
 *
 * 删除内容印章 #向发钧#
 *
 * @contentStampId 	内容印章ID-String
 */
exports.ContentStampApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/contentStampApi/remove/"+data.contentStampId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ContentStampApi-remove",
		query: {
		}
	}, callback);
};
/** End ContentStampApi-remove */



/** 
 * Created by backstage-BackAttachmentApi-create
 *
 * 创建一个附件 #吴昂/#
 *
 * @attachmentInsertDTO 	附件对象-Body
 */
exports.backstage_BackAttachmentApi_create = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/attachmentApi/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackAttachmentApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackAttachmentApi-create */



/** 
 * Created by TopicApi-listModuleTopics
 *
 * 通过区域和应用类型查询话题列表API  #向发钧#
 *
 * @queryTopicListDTO 	查询话题列表-Body
 */
exports.TopicApi_listModuleTopics = function (data, callback) {
	servers.POST({
		url: "/cms/api/topicApi/listAreaModuleTopics",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TopicApi-listModuleTopics",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TopicApi-listModuleTopics */



/** 
 * Created by backstage-BackLabelApi-delete
 *
 * 删除标签 #吴昂/#
 *
 * @idList 	标签ID列表-
 */
exports.backstage_BackLabelApi_delete = function (data, callback) {
	servers.DELETE({
		url: "/cms/api/backstage/labelApi/delete",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackLabelApi-delete",
		query: {
			idList: data.idList
		}
	}, callback);
};
/** End backstage-BackLabelApi-delete */



/** 
 * Created by OperationApi-praise-list
 *
 * 个人中心-我的收藏 #吴昂/#
 *
 * @operationQueryDTO 	查询对象-Body
 */
exports.OperationApi_praise_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/operationApi/list/collect",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OperationApi-praise-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End OperationApi-praise-list */



/** 
 * Created by backstage-BackSensitiveWordsApi-create
 *
 * 创建一个敏感词 #吴昂/#
 *
 * @sensitiveWordsInsertDTO 	模型对象-Body
 */
exports.backstage_BackSensitiveWordsApi_create = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/sensitiveWordsApi/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackSensitiveWordsApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackSensitiveWordsApi-create */



/** 
 * Created by backstage-BackSensitiveWordsApi-modify
 *
 * 修改一个敏感词 #吴昂/#
 *
 * @sensitiveWordsInsertDTO 	模型对象-Body
 */
exports.backstage_BackSensitiveWordsApi_modify = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/sensitiveWordsApi/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackSensitiveWordsApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackSensitiveWordsApi-modify */



/** 
 * Created by TopicApi-modify
 *
 * 修改话题内容 #向发钧#
 *
 * @topicDTO 	topicDTO-Body * @createTopicDTO 	修改话题内容-Body
 */
exports.TopicApi_modify = function (data, callback) {
	servers.POST({
		url: "/cms/api/topicApi/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TopicApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TopicApi-modify */



/** 
 * Created by backstage-BackBannerApi-list
 *
 * 按条件查询banner列表 #吴昂/#
 *
 * @bannerQueryDTO 	查询对象-Body
 */
exports.backstage_BackBannerApi_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/bannerApi/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackBannerApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackBannerApi-list */



/** 
 * Created by backstage-BackBannerApi-sort
 *
 * 保存移动修改(上移下移) #吴昂/#
 *
 * @list 	横幅列表-Body
 */
exports.backstage_BackBannerApi_sort = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/bannerApi/sort",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackBannerApi-sort",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackBannerApi-sort */



/** 
 * Created by backstage-BackLabelApi-list
 *
 * 按条件查询label列表 #吴昂/#
 *
 * @labelQueryDTO 	查询对象-Body
 */
exports.backstage_BackLabelApi_list = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/labelApi/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackLabelApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End backstage-BackLabelApi-list */



/** 
 * Created by backstage-BackTopicApi-detail
 *
 * topic详情 #吴昂/#
 *
 * @topicId 	对象ID-String
 */
exports.backstage_BackTopicApi_detail = function (data, callback) {
	servers.GET({
		url: "/cms/api/backstage/topicApi/detail/"+data.topicId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "backstage-BackTopicApi-detail",
		query: {
		}
	}, callback);
};
/** End backstage-BackTopicApi-detail */



/** 
 * Created by Backstage-findCommentByComplex
 *
 * 通过复杂查询条件从ES中查询Comment话题列表API  #向发钧#
 *
 * @paramCommentDTO 	查询评论列表-Body
 */
exports.Backstage_findCommentByComplex = function (data, callback) {
	servers.POST({
		url: "/cms/api/backstage/commentApi/findCommentByComplex",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "Backstage-findCommentByComplex",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End Backstage-findCommentByComplex */



/** 
 * Created by LabelApi-modifyLabel
 *
 * 修改标签API  #向发钧#
 *
 * @labelInsertDTO 	标签对象-Body
 */
exports.LabelApi_modifyLabel = function (data, callback) {
	servers.POST({
		url: "/cms/api/labelApi/modifyLabel",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "LabelApi-modifyLabel",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End LabelApi-modifyLabel */


