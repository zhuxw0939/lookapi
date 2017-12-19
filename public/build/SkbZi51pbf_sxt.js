/**!
 * 重构微服务-swagger 生学堂API-sxt v0.1
 * 接口数量 26
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



/** 
 * Created by TeacherCommentApi-publishTeacherComment
 *
 * 发布老师点评API  #向发钧#
 *
 * @publishTeacherCommentDTO 	发布老师点评参数对象-Body
 */
exports.TeacherCommentApi_publishTeacherComment = function (data, callback) {
	servers.POST({
		url: "/sxt/api/teacherCommentApi/publishTeacherComment",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeacherCommentApi-publishTeacherComment",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TeacherCommentApi-publishTeacherComment */



/** 
 * Created by AnalysisApi-statistics4ExamHasNoAnalysises
 *
 * 查看一次考试未上传解析的科目及统计 #吴昂/#
 *
 * @examId 	对象ID-String
 */
exports.AnalysisApi_statistics4ExamHasNoAnalysises = function (data, callback) {
	servers.GET({
		url: "/sxt/api/analysis/statistics4ExamHasNoAnalysises",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AnalysisApi-statistics4ExamHasNoAnalysises",
		query: {
		}
	}, callback);
};
/** End AnalysisApi-statistics4ExamHasNoAnalysises */



/** 
 * Created by AppSxtXbsApi-listXbsExamDTOs
 *
 * 创建学霸说评论API  #向发钧#
 *
 * @xbsInsertCommentDTO 	新增话题评论-Body
 */
exports.AppSxtXbsApi_listXbsExamDTOs = function (data, callback) {
	servers.POST({
		url: "/sxt/api/appSxtXbsApi/createXbsComment",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AppSxtXbsApi-listXbsExamDTOs",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AppSxtXbsApi-listXbsExamDTOs */



/** 
 * Created by AppSxtXbsApi-publishXbsExam
 *
 * 发布学霸说考试API  #向发钧#
 *
 * @scoreExamId 	考试ID-String
 */
exports.AppSxtXbsApi_publishXbsExam = function (data, callback) {
	servers.POST({
		url: "/sxt/api/appSxtXbsApi/backstage/publishXbsExam",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AppSxtXbsApi-publishXbsExam",
		query: {
		}
	}, callback);
};
/** End AppSxtXbsApi-publishXbsExam */



/** 
 * Created by MessageApi-grades4Parent
 *
 * 老师点评 #吴昂/#
 *
 * @contentId 	对象ID-String
 */
exports.MessageApi_grades4Parent = function (data, callback) {
	servers.GET({
		url: "/sxt/api/message/list/grade/parent/"+data.contentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MessageApi-grades4Parent",
		query: {
		}
	}, callback);
};
/** End MessageApi-grades4Parent */



/** 
 * Created by MessageApi-replyList
 *
 * 话题回复列表 #吴昂/#
 *
 * @baseQueryDTO 	对象ID-Body
 */
exports.MessageApi_replyList = function (data, callback) {
	servers.POST({
		url: "/sxt/api/message/list/reply",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MessageApi-replyList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MessageApi-replyList */



/** 
 * Created by AnalysisApi-coursesHavingMaxAnalysises
 *
 * 查看考试解析最多学科 #吴昂/#
 *
 * @examId 	对象ID-String
 */
exports.AnalysisApi_coursesHavingMaxAnalysises = function (data, callback) {
	servers.GET({
		url: "/sxt/api/analysis/coursesHavingMaxAnalysises",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AnalysisApi-coursesHavingMaxAnalysises",
		query: {
		}
	}, callback);
};
/** End AnalysisApi-coursesHavingMaxAnalysises */



/** 
 * Created by AppSxtXbsApi-modifyXbsRule
 *
 * 修改学霸说规则API  #向发钧#
 *
 * @scoreExamId 	考试ID-String
 */
exports.AppSxtXbsApi_modifyXbsRule = function (data, callback) {
	servers.POST({
		url: "/sxt/api/appSxtXbsApi/backstage/modifyXbsRule",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AppSxtXbsApi-modifyXbsRule",
		query: {
		}
	}, callback);
};
/** End AppSxtXbsApi-modifyXbsRule */



/** 
 * Created by AppSxtXbsApi-listXbsExamCourseDTOs
 *
 * 学霸说考试学科列表API  #向发钧#
 *
 * @scoreExamId 	考试ID-String
 */
exports.AppSxtXbsApi_listXbsExamCourseDTOs = function (data, callback) {
	servers.GET({
		url: "/sxt/api/appSxtXbsApi/listXbsExamCourseDTOs/"+data.scoreExamId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AppSxtXbsApi-listXbsExamCourseDTOs",
		query: {
		}
	}, callback);
};
/** End AppSxtXbsApi-listXbsExamCourseDTOs */



/** 
 * Created by MessageApi-pushMsg-list
 *
 * PUSH消息列表 #吴昂/#
 *
 */
exports.MessageApi_pushMsg_list = function (data, callback) {
	servers.GET({
		url: "/sxt/api/message/pushMsg/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MessageApi-pushMsg-list"
	}, callback);
};
/** End MessageApi-pushMsg-list */



/** 
 * Created by MessageApi-unreads
 *
 * 查询未读消息数量 #吴昂/#
 *
 * @moduleIds 	moduleIds- * @messageTypeList 	消息类型列表-Body
 */
exports.MessageApi_unreads = function (data, callback) {
	servers.POST({
		url: "/sxt/api/message/unreads",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MessageApi-unreads",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MessageApi-unreads */



/** 
 * Created by AnalysisApi-invite
 *
 * 邀请解析 #吴昂/#
 *
 * @contentId 	对象ID-String
 */
exports.AnalysisApi_invite = function (data, callback) {
	servers.GET({
		url: "/sxt/api/analysis/invite/"+data.contentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AnalysisApi-invite",
		query: {
		}
	}, callback);
};
/** End AnalysisApi-invite */



/** 
 * Created by MessageApi-commentList
 *
 * 话题评论列表 #吴昂/#
 *
 * @baseQueryDTO 	对象ID-Body
 */
exports.MessageApi_commentList = function (data, callback) {
	servers.GET({
		url: "/sxt/api/message/list/comment",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MessageApi-commentList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MessageApi-commentList */



/** 
 * Created by AppSxtXbsApi-listXbsCommentDTOs
 *
 * 学霸说学科说说列表API  #向发钧#
 *
 * @topicId 	学霸说话题ID-String * @xbsGroupId 	学霸说分组ID-String
 */
exports.AppSxtXbsApi_listXbsCommentDTOs = function (data, callback) {
	servers.POST({
		url: "/sxt/api/appSxtXbsApi/listXbsCommentDTOs",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AppSxtXbsApi-listXbsCommentDTOs",
		query: {
		}
	}, callback);
};
/** End AppSxtXbsApi-listXbsCommentDTOs */



/** 
 * Created by AppSxtXbsApi-createXbsRule
 *
 * 创建学霸说规则API  #向发钧#
 *
 * @scoreExamId 	考试ID-String
 */
exports.AppSxtXbsApi_createXbsRule = function (data, callback) {
	servers.POST({
		url: "/sxt/api/appSxtXbsApi/backstage/createXbsComment",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AppSxtXbsApi-createXbsRule",
		query: {
		}
	}, callback);
};
/** End AppSxtXbsApi-createXbsRule */



/** 
 * Created by AppSxtXbsApi-isXbStudent
 *
 * 是否是学霸API  #向发钧#
 *
 * @scoreExamId 	考试ID-String
 */
exports.AppSxtXbsApi_isXbStudent = function (data, callback) {
	servers.GET({
		url: "/sxt/api/appSxtXbsApi/isXbStudent/"+data.scoreExamId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AppSxtXbsApi-isXbStudent",
		query: {
		}
	}, callback);
};
/** End AppSxtXbsApi-isXbStudent */



/** 
 * Created by AnalysisApi-statistics
 *
 * 查看所有考试学科的解析统计 #吴昂/#
 *
 * @examId 	对象ID-String
 */
exports.AnalysisApi_statistics = function (data, callback) {
	servers.GET({
		url: "/sxt/api/analysis/statistics",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AnalysisApi-statistics",
		query: {
		}
	}, callback);
};
/** End AnalysisApi-statistics */



/** 
 * Created by AnalysisApi-details4Course
 *
 * 查看一个学科上传的老师解析详情 #吴昂/#
 *
 * @course_id 	对象ID-String
 */
exports.AnalysisApi_details4Course = function (data, callback) {
	servers.GET({
		url: "/sxt/api/analysis/details4Course",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AnalysisApi-details4Course",
		query: {
		}
	}, callback);
};
/** End AnalysisApi-details4Course */



/** 
 * Created by MessageApi-grades4Teacher
 *
 * 我的点评 #吴昂/#
 *
 * @contentId 	对象ID-String
 */
exports.MessageApi_grades4Teacher = function (data, callback) {
	servers.GET({
		url: "/sxt/api/message/list/grade/teacher",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MessageApi-grades4Teacher",
		query: {
		}
	}, callback);
};
/** End MessageApi-grades4Teacher */



/** 
 * Created by AnalysisApi-statistics4CourseHasNoAnalysises
 *
 * 查看一个学科未上传解析的题目 #吴昂/#
 *
 * @course_id 	对象ID-String
 */
exports.AnalysisApi_statistics4CourseHasNoAnalysises = function (data, callback) {
	servers.GET({
		url: "/sxt/api/analysis/statistics4CourseHasNoAnalysises",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AnalysisApi-statistics4CourseHasNoAnalysises",
		query: {
		}
	}, callback);
};
/** End AnalysisApi-statistics4CourseHasNoAnalysises */



/** 
 * Created by AppSxtXbsApi-listStudentXbsCommentDTOs
 *
 * 学生的学霸说说列表API  #向发钧#
 *
 * @studentId 	学生ID-String * @pageNumber 	当前页码-Number * @pageSize 	每页数量-Number
 */
exports.AppSxtXbsApi_listStudentXbsCommentDTOs = function (data, callback) {
	servers.POST({
		url: "/sxt/api/appSxtXbsApi/listStudentXbsCommentDTOs",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AppSxtXbsApi-listStudentXbsCommentDTOs",
		query: {
		}
	}, callback);
};
/** End AppSxtXbsApi-listStudentXbsCommentDTOs */



/** 
 * Created by NewPublishApi-studentXbsNumber
 *
 * 学生学霸说数量（学生个人中心） #向发钧#
 *
 */
exports.NewPublishApi_studentXbsNumber = function (data, callback) {
	servers.GET({
		url: "/sxt/api/appSxtXbsApi/studentXbsNumber",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "NewPublishApi-studentXbsNumber"
	}, callback);
};
/** End NewPublishApi-studentXbsNumber */



/** 
 * Created by TeacherCommentApi-listTeacherCommentExamDTOs
 *
 * 老师点评考试列表API  #向发钧#
 *
 * @listTeacherCommentExamDTO 	查询老师点评参数对象-Body
 */
exports.TeacherCommentApi_listTeacherCommentExamDTOs = function (data, callback) {
	servers.POST({
		url: "/sxt/api/teacherCommentApi/listTeacherCommentExamDTOs",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeacherCommentApi-listTeacherCommentExamDTOs",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TeacherCommentApi-listTeacherCommentExamDTOs */



/** 
 * Created by NewPublishApi-newPublishExam
 *
 * 查询最新发布考试 #向发钧#
 *
 * @accountId 	用户ID-String
 * @isParent 	是否是家长-Boolean
 */
exports.NewPublishApi_newPublishExam = function (data, callback) {
	servers.POST({
		url: "/sxt/api/newPublishApi/newPublishExam",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "NewPublishApi-newPublishExam",
		query: {
			accountId: data.accountId,
			isParent: data.isParent
		}
	}, callback);
};
/** End NewPublishApi-newPublishExam */



/** 
 * Created by AppSxtXbsApi-listXbsExamDTOs_1
 *
 * 学霸说考试列表API  #向发钧#
 *
 * @listXbsExamDTO 	查询话题列表-Body
 */
exports.AppSxtXbsApi_listXbsExamDTOs_1 = function (data, callback) {
	servers.POST({
		url: "/sxt/api/appSxtXbsApi/listXbsExamDTOs",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AppSxtXbsApi-listXbsExamDTOs_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AppSxtXbsApi-listXbsExamDTOs_1 */



/** 
 * Created by MessageApi-pushMsg-detail
 *
 * PUSH消息详情 #吴昂/#
 *
 * @msgId 	对象ID-String
 */
exports.MessageApi_pushMsg_detail = function (data, callback) {
	servers.GET({
		url: "/sxt/api/message/pushMsg/"+data.msgId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MessageApi-pushMsg-detail",
		query: {
		}
	}, callback);
};
/** End MessageApi-pushMsg-detail */


