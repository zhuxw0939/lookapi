/**!
 * 重构微服务-swagger 珍藏档案馆-archive v0.1
 * 接口数量 34
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



/** 
 * Created by MaterialManagementApi-findResourceQuestionList
 *
 * 分页查询材料提问 #李超#
 *
 * @paramResourceQuestionDTO 	材料提问查询条件-Body
 */
exports.MaterialManagementApi_findResourceQuestionList = function (data, callback) {
	servers.POST({
		url: "/archive/api/material/find_resource_question_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialManagementApi-findResourceQuestionList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MaterialManagementApi-findResourceQuestionList */



/** 
 * Created by getPraiseResource
 *
 * 查询首页名师资源 #熊九虎#
 *
 * @param 	查询参数-Body
 */
exports.getPraiseResource = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/resource/get/praiseresource",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getPraiseResource",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End getPraiseResource */



/** 
 * Created by getIndexPageResource
 *
 * 查询最新资源 #黎文宇#
 *
 */
exports.getIndexPageResource = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/ktservice/get_indexpage_resource",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getIndexPageResource"
	}, callback);
};
/** End getIndexPageResource */



/** 
 * Created by delBookMark
 *
 * 资源删除书签 #熊九虎#
 *
 * @bookMarkId 	书签ID-String
 */
exports.delBookMark = function (data, callback) {
	servers.POST({
		url: "/archive/api/bookmark/del/"+data.bookMarkId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "delBookMark",
		query: {
		}
	}, callback);
};
/** End delBookMark */



/** 
 * Created by ArchiveApi-saveCoverInfo
 *
 * 保存封面海报相关 #张嘉鑫#
 *
 * @id 	馆藏id-String
 * @attachmentId 	附件Id-String
 */
exports.ArchiveApi_saveCoverInfo = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/save_cover",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ArchiveApi-saveCoverInfo",
		query: {
			id: data.id,
			attachmentId: data.attachmentId
		}
	}, callback);
};
/** End ArchiveApi-saveCoverInfo */



/** 
 * Created by getQuestionResource
 *
 * 查询我的试题资源列表 #黎文宇#
 *
 * @relationshiptype 	关系类型-String * @pageNumber 	页码-Number
 * @pageSize 	分页大小-Number
 */
exports.getQuestionResource = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/my_resource/get_question_resource/"+data.relationshiptype+"/"+data.type,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getQuestionResource",
		query: {
			pageNumber: data.pageNumber,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End getQuestionResource */



/** 
 * Created by saveLatelyArchive
 *
 * 保存教师常用馆藏 #熊九虎#
 *
 * @param 	馆藏保存参数-Body
 */
exports.saveLatelyArchive = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/redis/opteration/save/latelyarchive",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "saveLatelyArchive",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End saveLatelyArchive */



/** 
 * Created by addLabelForNote
 *
 * 笔记贴标签 #熊九虎#
 *
 * @param 	笔记贴标签参数-Body
 */
exports.addLabelForNote = function (data, callback) {
	servers.POST({
		url: "/archive/api/label/add/note",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "addLabelForNote",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End addLabelForNote */



/** 
 * Created by getResourceById
 *
 * 根据资源ID查询资源详细信息 #熊九虎#
 *
 * @resourceId 	resourceId-String * @param 	查询参数-String
 */
exports.getResourceById = function (data, callback) {
	servers.GET({
		url: "/archive/api/teaching/resource/get/"+data.resourceId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getResourceById",
		query: {
		}
	}, callback);
};
/** End getResourceById */



/** 
 * Created by updateHtmlZipFile
 *
 * 资源转码完成压缩接口 #熊九虎#
 *
 * @resourceId 	查询参数-String
 */
exports.updateHtmlZipFile = function (data, callback) {
	servers.GET({
		url: "/archive/api/compress/resource/zip/"+data.resourceId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "updateHtmlZipFile",
		query: {
		}
	}, callback);
};
/** End updateHtmlZipFile */



/** 
 * Created by saveLabel
 *
 * 新增标签 #熊九虎#
 *
 * @param 	标签实体-Body
 */
exports.saveLabel = function (data, callback) {
	servers.POST({
		url: "/archive/api/label/save",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "saveLabel",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End saveLabel */



/** 
 * Created by PushManagementApi-findPushList
 *
 * 查询推送查列表 #李超#
 *
 * @paramPushListDTO 	测验查询条件-Body
 */
exports.PushManagementApi_findPushList = function (data, callback) {
	servers.POST({
		url: "/archive/api/push/find_push_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PushManagementApi-findPushList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PushManagementApi-findPushList */



/** 
 * Created by findEditResourceInfo
 *
 * 根据资源ID获取编辑资源信息 #熊九虎#
 *
 * @resourceId 	资源ID-String
 */
exports.findEditResourceInfo = function (data, callback) {
	servers.GET({
		url: "/archive/api/teaching/resource/find/edit_resource/"+data.resourceId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "findEditResourceInfo",
		query: {
		}
	}, callback);
};
/** End findEditResourceInfo */



/** 
 * Created by delQuesitonResource
 *
 * 删除我的试题资源 #黎文宇#
 *
 * @questionID 	试题ID-String
 */
exports.delQuesitonResource = function (data, callback) {
	servers.GET({
		url: "/archive/api/archive/my_resource/del_question_resource/"+data.questionID,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "delQuesitonResource",
		query: {
		}
	}, callback);
};
/** End delQuesitonResource */



/** 
 * Created by PracticeManagementApi-findPracticeList
 *
 * 查询测验管理列表 #李超#
 *
 * @paramPracticeListDTO 	测验查询条件-Body
 */
exports.PracticeManagementApi_findPracticeList = function (data, callback) {
	servers.POST({
		url: "/archive/api/practice/find_practice_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeManagementApi-findPracticeList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeManagementApi-findPracticeList */



/** 
 * Created by getTeacherMostResource
 *
 * 查询30天内上传资源数最多的前几个教师 #熊九虎#
 *
 * @param 	查询参数-Body
 */
exports.getTeacherMostResource = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/resource/get/teacher",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getTeacherMostResource",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End getTeacherMostResource */



/** 
 * Created by QuestionTypeApi-deleteQuestionType
 *
 * 删除题目类型 #张嘉鑫#
 *
 * @id 	题目类型id-String
 */
exports.QuestionTypeApi_deleteQuestionType = function (data, callback) {
	servers.GET({
		url: "/archive/api/question/type/delete_by_id",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "QuestionTypeApi-deleteQuestionType",
		query: {
			id: data.id
		}
	}, callback);
};
/** End QuestionTypeApi-deleteQuestionType */



/** 
 * Created by undoPublishPaper
 *
 * 真题发布 #黎文宇#
 *
 * @resourceID 	resourceID-String
 * @paperID 	真题试卷ID-String
 */
exports.undoPublishPaper = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/my_resource/publish_paper",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "undoPublishPaper",
		query: {
			resourceID: data.resourceID,
			paperID: data.paperID
		}
	}, callback);
};
/** End undoPublishPaper */



/** 
 * Created by getResourceSortRule
 *
 * 查询教学资源排序规则 #熊九虎#
 *
 */
exports.getResourceSortRule = function (data, callback) {
	servers.GET({
		url: "/archive/api/enums/get/resourcesortrule",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getResourceSortRule"
	}, callback);
};
/** End getResourceSortRule */



/** 
 * Created by renameNote
 *
 * 重命名笔记 #熊九虎#
 *
 * @noteId 	笔记ID-String * @name 	笔记名-String
 */
exports.renameNote = function (data, callback) {
	servers.POST({
		url: "/archive/api/note/rename/"+data.noteId+"/"+data.name,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "renameNote",
		query: {
		}
	}, callback);
};
/** End renameNote */



/** 
 * Created by findLabel
 *
 * 查询标签列表、笔记数量 #熊九虎#
 *
 */
exports.findLabel = function (data, callback) {
	servers.GET({
		url: "/archive/api/label/find",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "findLabel"
	}, callback);
};
/** End findLabel */



/** 
 * Created by saveOrUpdate
 *
 * 资源保存编辑接口 #熊九虎#
 *
 * @param 	课外材料实体-Body
 */
exports.saveOrUpdate = function (data, callback) {
	servers.POST({
		url: "/archive/api/resource/operation/save_or_update",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "saveOrUpdate",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End saveOrUpdate */



/** 
 * Created by getShardQuestionByID
 *
 * 根据ID查询共享题库 #黎文宇#
 *
 * @id 	查询参数-String
 */
exports.getShardQuestionByID = function (data, callback) {
	servers.GET({
		url: "/archive/api/archive/question/get_shard_question_by_id/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getShardQuestionByID",
		query: {
		}
	}, callback);
};
/** End getShardQuestionByID */



/** 
 * Created by getHighQualityQuestions
 *
 * 查询好题推荐 #黎文宇#
 *
 * @paramHighQualityQuestionDTO 	查询参数-Body
 */
exports.getHighQualityQuestions = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/question/get_high_quality_questions",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getHighQualityQuestions",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End getHighQualityQuestions */



/** 
 * Created by findLatelyArchive
 *
 * 查询教师常用馆藏 #熊九虎#
 *
 */
exports.findLatelyArchive = function (data, callback) {
	servers.GET({
		url: "/archive/api/archive/redis/opteration/find/latelyarchive",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "findLatelyArchive"
	}, callback);
};
/** End findLatelyArchive */



/** 
 * Created by downloadPaper
 *
 * 下载试卷 #黎文宇#
 *
 * @paperID 	试卷ID-Number
 * @paperTitle 	试卷标题-String
 */
exports.downloadPaper = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/my_resource/download_paper",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "downloadPaper",
		query: {
			paperID: data.paperID,
			paperTitle: data.paperTitle
		}
	}, callback);
};
/** End downloadPaper */



/** 
 * Created by findStudentStatistic
 *
 * 课堂学生首页材料数、笔记数 #熊九虎#
 *
 * @userId 	学生ID-String
 */
exports.findStudentStatistic = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/ktservice/find/statistic/"+data.userId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "findStudentStatistic",
		query: {
		}
	}, callback);
};
/** End findStudentStatistic */



/** 
 * Created by ArchiveClient-findAreasByUser
 *
 * 查询登录人的市县校 #熊九虎#
 *
 */
exports.ArchiveClient_findAreasByUser = function (data, callback) {
	servers.GET({
		url: "/archive/api/archive/find/user_area",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ArchiveClient-findAreasByUser"
	}, callback);
};
/** End ArchiveClient-findAreasByUser */



/** 
 * Created by ArchiveApi-deleteSpecialTopic
 *
 * 删除专题 #张嘉鑫#
 *
 * @id 	馆藏关系id-String
 */
exports.ArchiveApi_deleteSpecialTopic = function (data, callback) {
	servers.DELETE({
		url: "/archive/api/archive/delete_special_topic",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ArchiveApi-deleteSpecialTopic",
		query: {
			id: data.id
		}
	}, callback);
};
/** End ArchiveApi-deleteSpecialTopic */



/** 
 * Created by PracticeManagementApi-endPracticeTask
 *
 * 结束测验任务 #李超/#
 *
 * @activityId 	活动id-String
 */
exports.PracticeManagementApi_endPracticeTask = function (data, callback) {
	servers.POST({
		url: "/archive/api/practice/end_practice_task/"+data.activityId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeManagementApi-endPracticeTask",
		query: {
		}
	}, callback);
};
/** End PracticeManagementApi-endPracticeTask */



/** 
 * Created by ArchiveApi-searchSpecialTopicList
 *
 * 查询馆藏专题列表 #张嘉鑫#
 *
 * @id 	馆藏id-String
 */
exports.ArchiveApi_searchSpecialTopicList = function (data, callback) {
	servers.GET({
		url: "/archive/api/archive/search_special_topic_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ArchiveApi-searchSpecialTopicList",
		query: {
			id: data.id
		}
	}, callback);
};
/** End ArchiveApi-searchSpecialTopicList */



/** 
 * Created by editTestPaper
 *
 * 编辑我的组卷 #黎文宇#
 *
 * @paperID 	试卷ID-String
 */
exports.editTestPaper = function (data, callback) {
	servers.GET({
		url: "/archive/api/archive/my_resource/edit_test_paper/"+data.paperID,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "editTestPaper",
		query: {
		}
	}, callback);
};
/** End editTestPaper */



/** 
 * Created by CategoryApi-createCategory
 *
 * 创建类目 #张嘉鑫/20171116#
 *
 * @categoryParam 	categoryParam-Body * @paramCategoryDTO 	学科id-Body
 */
exports.CategoryApi_createCategory = function (data, callback) {
	servers.POST({
		url: "/archive/api/category/create_category",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CategoryApi-createCategory",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End CategoryApi-createCategory */



/** 
 * Created by getCourseResourceList
 *
 * 查询课程资源列表 #黎文宇#
 *
 * @range 	0为我的资源;1为共享的资源-String * @type 	0为所有,1教案,2学案,3课件,4视频,5素材,6套卷-String * @sortway 	0最近时间, 1好评, 2使用-String
 */
exports.getCourseResourceList = function (data, callback) {
	servers.POST({
		url: "/archive/api/archive/ktservice/get_course_resource_list/"+data.range+"/"+data.type+"/"+data.sortway,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "getCourseResourceList",
		query: {
		}
	}, callback);
};
/** End getCourseResourceList */


