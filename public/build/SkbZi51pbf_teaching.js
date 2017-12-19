/**!
 * 重构微服务-swagger 晓我课堂教学活动-teaching v0.1
 * 接口数量 82
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



/** 
 * Created by PracticeActivityApi-getTopAnalysisListByDay
 *
 * 查询解析获赞榜单 #曹超/#
 *
 * @index 	偏移时间（0为当天，1为昨天，以此类推）-String
 * @size 	榜单数量(非必填，默认为10)-String
 */
exports.PracticeActivityApi_getTopAnalysisListByDay = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teaching_activity/get_top_analysis_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getTopAnalysisListByDay",
		query: {
			index: data.index,
			size: data.size
		}
	}, callback);
};
/** End PracticeActivityApi-getTopAnalysisListByDay */



/** 
 * Created by PracticeActivityApi-saveQuestionAnalysis
 *
 * 保存我的解析 #张嘉鑫/20171129#
 *
 * @paramMyAnalysisDTO 	测验解析对象-Body
 */
exports.PracticeActivityApi_saveQuestionAnalysis = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/save_question_analysis",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-saveQuestionAnalysis",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeActivityApi-saveQuestionAnalysis */



/** 
 * Created by MaterialActivityApi-replyQuestion
 *
 * 解答提问(返回解答ID)(待联调2017-12-6) #曹超/#
 *
 * @param 	解答提问参数-Body
 */
exports.MaterialActivityApi_replyQuestion = function (data, callback) {
	servers.POST({
		url: "/teaching/api/material_activity/reply_question",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-replyQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MaterialActivityApi-replyQuestion */



/** 
 * Created by TimeShaftApi-queryStudentTimeShaft
 *
 * 查询学生时间轴上课列表 #曹超/#
 *
 */
exports.TimeShaftApi_queryStudentTimeShaft = function (data, callback) {
	servers.GET({
		url: "/teaching/api/time_shaft/query_student_time_shaft",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TimeShaftApi-queryStudentTimeShaft"
	}, callback);
};
/** End TimeShaftApi-queryStudentTimeShaft */



/** 
 * Created by MaterialActivityApi-finishMaterialActivity
 *
 * 结束材料活动 #曹超/#
 *
 * @activityId 	活动ID-String
 */
exports.MaterialActivityApi_finishMaterialActivity = function (data, callback) {
	servers.PATCH({
		url: "/teaching/api/material_activity/finish_material_activity",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-finishMaterialActivity",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End MaterialActivityApi-finishMaterialActivity */



/** 
 * Created by TeachingActivityApi-queryStudentActivityByPage
 *
 * 分页查询学生活动列表 #曹超/2017-11-28#
 *
 * @param 	查询参数-Body
 */
exports.TeachingActivityApi_queryStudentActivityByPage = function (data, callback) {
	servers.POST({
		url: "/teaching/api/teaching_activity/query_teaching_activity_page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeachingActivityApi-queryStudentActivityByPage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TeachingActivityApi-queryStudentActivityByPage */



/** 
 * Created by PracticeActivityApi-searchAnalysisByLast
 *
 * 查询最新解析 #张嘉鑫/20171204#
 *
 * @questionId 	题目id-String
 */
exports.PracticeActivityApi_searchAnalysisByLast = function (data, callback) {
	servers.GET({
		url: "/teaching/api/student_practice_activity/search_analysis_last",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-searchAnalysisByLast",
		query: {
			questionId: data.questionId
		}
	}, callback);
};
/** End PracticeActivityApi-searchAnalysisByLast */



/** 
 * Created by TimeShaftApi-queryTeacherTimeShaftByDay
 *
 * 查询教师时间轴上课列表(按天划分) #曹超/#
 *
 * @startIndex 	开始偏移量（0为当天，1为昨天，以此递增）-
 * @endIndex 	结束偏移量（0为当天，1为昨天，以此递增，不能小于startIndex）-
 */
exports.TimeShaftApi_queryTeacherTimeShaftByDay = function (data, callback) {
	servers.GET({
		url: "/teaching/api/time_shaft/query_teacher_time_shaft_day",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TimeShaftApi-queryTeacherTimeShaftByDay",
		query: {
			startIndex: data.startIndex,
			endIndex: data.endIndex
		}
	}, callback);
};
/** End TimeShaftApi-queryTeacherTimeShaftByDay */



/** 
 * Created by MaterialActivityApi-removeQuestion
 *
 * 删除提问(待联调2017-12-7) #曹超/#
 *
 * @questionId 	提问ID-String
 */
exports.MaterialActivityApi_removeQuestion = function (data, callback) {
	servers.DELETE({
		url: "/teaching/api/material_activity/remove_question",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-removeQuestion",
		query: {
			questionId: data.questionId
		}
	}, callback);
};
/** End MaterialActivityApi-removeQuestion */



/** 
 * Created by TeachingActivityApi-queryTopStudentActivityByPage
 *
 * 分页查询学生置顶活动列表 #曹超/2017-11-28#
 *
 * @page 	分页参数-Body
 */
exports.TeachingActivityApi_queryTopStudentActivityByPage = function (data, callback) {
	servers.POST({
		url: "/teaching/api/teaching_activity/query_top_student_activity_page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeachingActivityApi-queryTopStudentActivityByPage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TeachingActivityApi-queryTopStudentActivityByPage */



/** 
 * Created by MaterialActivityApi-removeReply
 *
 * 删除解答(待联调2017-12-7) #曹超/#
 *
 * @replyId 	解答ID-String
 */
exports.MaterialActivityApi_removeReply = function (data, callback) {
	servers.DELETE({
		url: "/teaching/api/material_activity/remove_reply",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-removeReply",
		query: {
			replyId: data.replyId
		}
	}, callback);
};
/** End MaterialActivityApi-removeReply */



/** 
 * Created by PracticeActivityApi-searchPracticeAnalysisDetail
 *
 * 查询学生测验解析/批阅详情(废弃，调用教师“学生作答详情”) #张嘉鑫#
 *
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_searchPracticeAnalysisDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/student_practice_activity/search_practice_analysis_detail",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-searchPracticeAnalysisDetail",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-searchPracticeAnalysisDetail */



/** 
 * Created by PracticeActivityApi-getStudentPracticeAnswerList
 *
 * 查看单个学生作答详情（批阅中） #刘世平#
 *
 * @studentId 	学生id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getStudentPracticeAnswerList = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_student_practice_answer_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getStudentPracticeAnswerList",
		query: {
			studentId: data.studentId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getStudentPracticeAnswerList */



/** 
 * Created by PracticeActivityApi-getPracticeQuestionAnalysis
 *
 * 测验小题分析 #刘世平#
 *
 * @classId 	班级id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getPracticeQuestionAnalysis = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_practice_question_analysis",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getPracticeQuestionAnalysis",
		query: {
			classId: data.classId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getPracticeQuestionAnalysis */



/** 
 * Created by MaterialActivityApi-setSummaryAnswer
 *
 * 设置总结解答(待联调2017-12-6) #曹超/#
 *
 * @questionId 	问题ID-String
 * @replyId 	解答ID-String
 * @roleType 	角色类型（1.学生 2.老师）-
 */
exports.MaterialActivityApi_setSummaryAnswer = function (data, callback) {
	servers.PATCH({
		url: "/teaching/api/material_activity/set_summary_answer",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-setSummaryAnswer",
		query: {
			questionId: data.questionId,
			replyId: data.replyId,
			roleType: data.roleType
		}
	}, callback);
};
/** End MaterialActivityApi-setSummaryAnswer */



/** 
 * Created by TimeShaftApi-queryTeacherTimeShaft
 *
 * 查询教师时间轴上课列表 #曹超/#
 *
 */
exports.TimeShaftApi_queryTeacherTimeShaft = function (data, callback) {
	servers.GET({
		url: "/teaching/api/time_shaft/query_teacher_time_shaft",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TimeShaftApi-queryTeacherTimeShaft"
	}, callback);
};
/** End TimeShaftApi-queryTeacherTimeShaft */



/** 
 * Created by MaterialActivityApi-queryMaterialActivityDetail
 *
 * 查询材料活动详情(待联调2017-11-27) #曹超/#
 *
 * @activityId 	活动id-String
 */
exports.MaterialActivityApi_queryMaterialActivityDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/query_material_activity_detail",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-queryMaterialActivityDetail",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End MaterialActivityApi-queryMaterialActivityDetail */



/** 
 * Created by PracticeActivityApi-distributePractice
 *
 * 下发试卷 #刘世平#
 *
 * @distributePractice 	批阅方式-Body
 */
exports.PracticeActivityApi_distributePractice = function (data, callback) {
	servers.POST({
		url: "/teaching/api/teacher_practice_activity/distribute_practice",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-distributePractice",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeActivityApi-distributePractice */



/** 
 * Created by PracticeActivityApi-savePracticeMarked
 *
 * 保存批阅结果 #刘世平#
 *
 * @practiceMarked 	批阅方式-Body
 */
exports.PracticeActivityApi_savePracticeMarked = function (data, callback) {
	servers.POST({
		url: "/teaching/api/teacher_practice_activity/save_practice_marked",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-savePracticeMarked",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeActivityApi-savePracticeMarked */



/** 
 * Created by TeachingActivityApi-queryTeacherSupport
 *
 * 查询教师点赞数 #曹超/#
 *
 * @teacherId 	教师ID(不传为本人)-String
 */
exports.TeachingActivityApi_queryTeacherSupport = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teaching_activity/query_teacher_support",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeachingActivityApi-queryTeacherSupport",
		query: {
			teacherId: data.teacherId
		}
	}, callback);
};
/** End TeachingActivityApi-queryTeacherSupport */



/** 
 * Created by TeachingActivityApi-queryTeacherActivityByPage
 *
 * 分页查询教师活动列表 #曹超/2017-11-16#
 *
 * @param 	查询参数-Body
 */
exports.TeachingActivityApi_queryTeacherActivityByPage = function (data, callback) {
	servers.POST({
		url: "/teaching/api/teaching_activity/query_teacher_activity_page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeachingActivityApi-queryTeacherActivityByPage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TeachingActivityApi-queryTeacherActivityByPage */



/** 
 * Created by MaterialActivityApi-queryTeacherMaterialActivity
 *
 * 教师材料活动概要查询(待联调2017-12-4) #曹超/#
 *
 * @activityId 	活动ID-String
 */
exports.MaterialActivityApi_queryTeacherMaterialActivity = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/query_teacher_material_activity",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-queryTeacherMaterialActivity",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End MaterialActivityApi-queryTeacherMaterialActivity */



/** 
 * Created by MaterialActivityApi-queryStudyList
 *
 * 查询学习清单 #曹超/#
 *
 * @page 	查询参数-Body
 */
exports.MaterialActivityApi_queryStudyList = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/query_study_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-queryStudyList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MaterialActivityApi-queryStudyList */



/** 
 * Created by TeachingActivityApi-queryTopTeacherActivityByPage
 *
 * 分页查询教师置顶活动列表 #曹超/2017-11-27#
 *
 * @page 	分页参数-Body
 */
exports.TeachingActivityApi_queryTopTeacherActivityByPage = function (data, callback) {
	servers.POST({
		url: "/teaching/api/teaching_activity/query_top_teacher_activity_page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeachingActivityApi-queryTopTeacherActivityByPage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TeachingActivityApi-queryTopTeacherActivityByPage */



/** 
 * Created by PracticeActivityApi-searchMyQuestionAnalysisList
 *
 * 查询我解析的试题列表 #张嘉鑫/20171204#
 *
 * @paramMyQuestionAnalysisDTO 	我解析的试题查询条件-Body
 */
exports.PracticeActivityApi_searchMyQuestionAnalysisList = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/search_my_analysis_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-searchMyQuestionAnalysisList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeActivityApi-searchMyQuestionAnalysisList */



/** 
 * Created by PracticeActivityApi-searchAnalysisList
 *
 * 查询题目解析列表 #张嘉鑫/20171204#
 *
 * @paramAnalysisDTO 	测验解析查询条件-Body
 */
exports.PracticeActivityApi_searchAnalysisList = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/search_analysis_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-searchAnalysisList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeActivityApi-searchAnalysisList */



/** 
 * Created by NoticeApi-getNoticeClass
 *
 * 公告关联班级查询 #李超#
 *
 * @activityId 	活动id-String
 */
exports.NoticeApi_getNoticeClass = function (data, callback) {
	servers.GET({
		url: "/teaching/api/bulletin/get_notice_class/"+data.activityId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "NoticeApi-getNoticeClass",
		query: {
		}
	}, callback);
};
/** End NoticeApi-getNoticeClass */



/** 
 * Created by PracticeActivityApi-getPracticeStudentDetail
 *
 * 测验学生小题分析 #刘世平#
 *
 * @classId 	classId-String
 * @studentId 	学生id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getPracticeStudentDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_practice_student_detail",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getPracticeStudentDetail",
		query: {
			classId: data.classId,
			studentId: data.studentId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getPracticeStudentDetail */



/** 
 * Created by VoteApi-saveVotingActivity
 *
 * 保存投票活动 #李超#
 *
 * @paramSaveVotingActivityDTO 	投票活动提交内容-Body
 */
exports.VoteApi_saveVotingActivity = function (data, callback) {
	servers.POST({
		url: "/teaching/api/vote/save_voting_activity",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "VoteApi-saveVotingActivity",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End VoteApi-saveVotingActivity */



/** 
 * Created by NoticeApi-getNoticeDetail
 *
 * 公告详情 #李超#
 *
 * @activityId 	活动id-String * @classId 	班级id-String
 */
exports.NoticeApi_getNoticeDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/bulletin/get_notice_detail/"+data.activityId+"/"+data.classId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "NoticeApi-getNoticeDetail",
		query: {
		}
	}, callback);
};
/** End NoticeApi-getNoticeDetail */



/** 
 * Created by PracticeAnswerApi-searchStudentMarkingResult
 *
 * 查询测验任务学生批阅结果(废弃，调用教师“查看单个学生批阅结果”) #张嘉鑫/#
 *
 * @paramStudentMarkingDTO 	批阅学生对象-Body
 */
exports.PracticeAnswerApi_searchStudentMarkingResult = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/search_student_marking_result",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeAnswerApi-searchStudentMarkingResult",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeAnswerApi-searchStudentMarkingResult */



/** 
 * Created by PracticeActivityApi-addAnalysisPraise
 *
 * 增加解析点赞 #张嘉鑫/20171129#
 *
 * @analysisId 	解析ID-String
 */
exports.PracticeActivityApi_addAnalysisPraise = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/add_analysis_praise",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-addAnalysisPraise",
		query: {
			analysisId: data.analysisId
		}
	}, callback);
};
/** End PracticeActivityApi-addAnalysisPraise */



/** 
 * Created by MaterialActivityApi-queryStudyDetail
 *
 * 查询材料活动学习记录 #曹超/#
 *
 * @activityId 	活动ID-String
 */
exports.MaterialActivityApi_queryStudyDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/query_study_detail",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-queryStudyDetail",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End MaterialActivityApi-queryStudyDetail */



/** 
 * Created by TeachingActivityApi-queryMaterialResourceClass
 *
 * 查询资源班级列表 #曹超/#
 *
 * @resourceId 	资源ID-String
 */
exports.TeachingActivityApi_queryMaterialResourceClass = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teaching_activity/query_material_resource_class",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeachingActivityApi-queryMaterialResourceClass",
		query: {
			resourceId: data.resourceId
		}
	}, callback);
};
/** End TeachingActivityApi-queryMaterialResourceClass */



/** 
 * Created by NoticeApi-saveNotice
 *
 * 保存公告活动 #李超#
 *
 * @paramSaveNoticeDTO 	公告活动提交内容-Body
 */
exports.NoticeApi_saveNotice = function (data, callback) {
	servers.POST({
		url: "/teaching/api/bulletin/save_notice",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "NoticeApi-saveNotice",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End NoticeApi-saveNotice */



/** 
 * Created by PracticeActivityApi-searchAnalysisRevertList
 *
 * 查询题目解析评论列表 #张嘉鑫/20171129#
 *
 * @paramAnalysisRevertDTO 	测验解析查询条件-Body
 */
exports.PracticeActivityApi_searchAnalysisRevertList = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/search_analysis_revert_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-searchAnalysisRevertList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeActivityApi-searchAnalysisRevertList */



/** 
 * Created by TimeShaftApi-saveTimeShaft
 *
 * 保存时间轴 #刘世平#
 *
 * @timeShaft 	timeShaft-Body * @paramPractice 	批阅方式-Body
 */
exports.TimeShaftApi_saveTimeShaft = function (data, callback) {
	servers.POST({
		url: "/teaching/api/time_shaft/save_time_shaft",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TimeShaftApi-saveTimeShaft",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TimeShaftApi-saveTimeShaft */



/** 
 * Created by MaterialActivityApi-publishMaterialActivity
 *
 * 发布材料活动（返回活动ID）(待联调2017-12-11) #曹超/#
 *
 * @param 	查询参数-Body
 */
exports.MaterialActivityApi_publishMaterialActivity = function (data, callback) {
	servers.POST({
		url: "/teaching/api/material_activity/publish_material_activity",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-publishMaterialActivity",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MaterialActivityApi-publishMaterialActivity */



/** 
 * Created by TimeShaftApi-queryStudentTimeShaftByDay
 *
 * 查询学生时间轴上课列表(按天划分) #曹超/#
 *
 * @startIndex 	开始偏移量（0为当天，1为昨天，以此递增）-
 * @endIndex 	结束偏移量（0为当天，1为昨天，以此递增，不能小于startIndex）-
 */
exports.TimeShaftApi_queryStudentTimeShaftByDay = function (data, callback) {
	servers.GET({
		url: "/teaching/api/time_shaft/query_student_time_shaft_day",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TimeShaftApi-queryStudentTimeShaftByDay",
		query: {
			startIndex: data.startIndex,
			endIndex: data.endIndex
		}
	}, callback);
};
/** End TimeShaftApi-queryStudentTimeShaftByDay */



/** 
 * Created by PracticeActivityApi-searchMyQuestionCollectList
 *
 * 查询我收藏的试题列表 #张嘉鑫/20171212#
 *
 * @paramMyQuestionCollectDTO 	我收藏的试题查询条件-Body
 */
exports.PracticeActivityApi_searchMyQuestionCollectList = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/search_my_collect_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-searchMyQuestionCollectList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeActivityApi-searchMyQuestionCollectList */



/** 
 * Created by TeachingActivityApi-queryPracticeResourceClass
 *
 * 查询测验班级列表 #曹超/#
 *
 * @resourceId 	资源ID-String
 */
exports.TeachingActivityApi_queryPracticeResourceClass = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teaching_activity/query_practice_resource_class",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeachingActivityApi-queryPracticeResourceClass",
		query: {
			resourceId: data.resourceId
		}
	}, callback);
};
/** End TeachingActivityApi-queryPracticeResourceClass */



/** 
 * Created by MaterialActivityApi-queryStudentMaterialActivity
 *
 * 学生材料活动概要查询(待联调2017-11-30) #曹超/#
 *
 * @activityId 	活动ID-String
 */
exports.MaterialActivityApi_queryStudentMaterialActivity = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/query_student_material_activity",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-queryStudentMaterialActivity",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End MaterialActivityApi-queryStudentMaterialActivity */



/** 
 * Created by MaterialActivityApi-agreeReply
 *
 * 赞同解答 #曹超/#
 *
 * @replyId 	解答ID-String
 */
exports.MaterialActivityApi_agreeReply = function (data, callback) {
	servers.PATCH({
		url: "/teaching/api/material_activity/agree_reply",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-agreeReply",
		query: {
			replyId: data.replyId
		}
	}, callback);
};
/** End MaterialActivityApi-agreeReply */



/** 
 * Created by PracticeActivityApi-getPracticeStudentAnalysis
 *
 * 测验学生分析 #刘世平#
 *
 * @classId 	班级id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getPracticeStudentAnalysis = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_practice_student_analysis",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getPracticeStudentAnalysis",
		query: {
			classId: data.classId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getPracticeStudentAnalysis */



/** 
 * Created by PracticeActivityApi-getTeacherPracticeMarkedSummary
 *
 * 获得教师测验活动概要（已批阅） #刘世平#
 *
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getTeacherPracticeMarkedSummary = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_teacher_practice_marked_summary",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getTeacherPracticeMarkedSummary",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getTeacherPracticeMarkedSummary */



/** 
 * Created by PracticeActivityApi-urgePractice
 *
 * 收缴测验 #刘世平#
 *
 * @classId 	班级id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_urgePractice = function (data, callback) {
	servers.POST({
		url: "/teaching/api/teacher_practice_activity/collect_practice",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-urgePractice",
		query: {
			classId: data.classId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-urgePractice */



/** 
 * Created by TimeShaftApi-queryTimeShaftDetail
 *
 * 查询时间轴详情 #曹超/#
 *
 * @timeShaftId 	时间轴Id-String
 */
exports.TimeShaftApi_queryTimeShaftDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/time_shaft/query_time_shaft_detail",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TimeShaftApi-queryTimeShaftDetail",
		query: {
			timeShaftId: data.timeShaftId
		}
	}, callback);
};
/** End TimeShaftApi-queryTimeShaftDetail */



/** 
 * Created by MaterialActivityApi-askQuestion
 *
 * 发起提问(返回提问ID) #曹超/2017-12-4#
 *
 * @param 	提问内容参数-Body
 */
exports.MaterialActivityApi_askQuestion = function (data, callback) {
	servers.POST({
		url: "/teaching/api/material_activity/ask_question",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-askQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MaterialActivityApi-askQuestion */



/** 
 * Created by ActivityActorApi-pushAnalysisActivityActor
 *
 * 邀请某人参与解析 #张嘉鑫/#
 *
 * @questionId 	题目id-String
 * @accountId 	邀请人ID-String
 */
exports.ActivityActorApi_pushAnalysisActivityActor = function (data, callback) {
	servers.GET({
		url: "/teaching/api/actor/push_analysis_activity_actors",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ActivityActorApi-pushAnalysisActivityActor",
		query: {
			questionId: data.questionId,
			accountId: data.accountId
		}
	}, callback);
};
/** End ActivityActorApi-pushAnalysisActivityActor */



/** 
 * Created by PracticeActivityApi-getPracticeSubmitInfo
 *
 * 获得班级测验提交情况 #刘世平#
 *
 * @classId 	班级id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getPracticeSubmitInfo = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_practice_submit_info",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getPracticeSubmitInfo",
		query: {
			classId: data.classId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getPracticeSubmitInfo */



/** 
 * Created by MaterialActivityApi-queryMaterialActivityStudyDetail
 *
 * 查询材料学情统计 #曹超/#
 *
 * @activityId 	活动ID-String
 * @classId 	班级ID-String
 */
exports.MaterialActivityApi_queryMaterialActivityStudyDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/query_material_activity_study_detail",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-queryMaterialActivityStudyDetail",
		query: {
			activityId: data.activityId,
			classId: data.classId
		}
	}, callback);
};
/** End MaterialActivityApi-queryMaterialActivityStudyDetail */



/** 
 * Created by PracticeActivityApi-saveOrCancelQuestionAnalysisCollect
 *
 * 收藏/取消试题(废弃，调用档案馆收藏接口) #张嘉鑫/20171129#
 *
 * @questionId 	题目id-String
 * @status 	状态-Boolean
 */
exports.PracticeActivityApi_saveOrCancelQuestionAnalysisCollect = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/save_analysis_collect",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-saveOrCancelQuestionAnalysisCollect",
		query: {
			questionId: data.questionId,
			status: data.status
		}
	}, callback);
};
/** End PracticeActivityApi-saveOrCancelQuestionAnalysisCollect */



/** 
 * Created by VoteApi-saveStudentBallot
 *
 * 学生投票 #李超#
 *
 * @activityId 	活动id-String * @voteOptionId 	投票选项Id-String
 */
exports.VoteApi_saveStudentBallot = function (data, callback) {
	servers.POST({
		url: "/teaching/api/vote/save_student_ballot/"+data.activityId+"/"+data.voteOptionId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "VoteApi-saveStudentBallot",
		query: {
		}
	}, callback);
};
/** End VoteApi-saveStudentBallot */



/** 
 * Created by MaterialActivityApi-queryQuestionByPage
 *
 * 分页查询提问列表(待联调2017-12-5) #曹超/#
 *
 * @param 	查询提问参数-Body
 */
exports.MaterialActivityApi_queryQuestionByPage = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/query_question_page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-queryQuestionByPage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MaterialActivityApi-queryQuestionByPage */



/** 
 * Created by PracticeActivityApi-searchStudentPracticeSheet
 *
 * 查询学生测验答题卡详情 #张嘉鑫/20171206#
 *
 * @activityId 	活动id-String
 * @studentId 	学生id-String
 */
exports.PracticeActivityApi_searchStudentPracticeSheet = function (data, callback) {
	servers.GET({
		url: "/teaching/api/student_practice_activity/search_student_practice_sheet",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-searchStudentPracticeSheet",
		query: {
			activityId: data.activityId,
			studentId: data.studentId
		}
	}, callback);
};
/** End PracticeActivityApi-searchStudentPracticeSheet */



/** 
 * Created by PracticeAnswerApi-saveMarkingResult
 *
 * 保存批阅结果(废弃，调用教师保存批阅) #张嘉鑫#
 *
 * @paramMarkingResultDTO 	批阅结果-Body
 */
exports.PracticeAnswerApi_saveMarkingResult = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/save_marking_result",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeAnswerApi-saveMarkingResult",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeAnswerApi-saveMarkingResult */



/** 
 * Created by VoteApi-getBallotDetail
 *
 * 查看选票详情 #李超#
 *
 * @activityId 	活动id-String * @voteOptionId 	投票选项Id-String
 */
exports.VoteApi_getBallotDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/vote/get_ballot_detail/"+data.activityId+"/"+data.voteOptionId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "VoteApi-getBallotDetail",
		query: {
		}
	}, callback);
};
/** End VoteApi-getBallotDetail */



/** 
 * Created by MaterialActivityApi-updateStudyDetail
 *
 * 更新材料活动学习记录 #曹超/#
 *
 * @param 	查询参数-Body
 */
exports.MaterialActivityApi_updateStudyDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/update_study_detail",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-updateStudyDetail",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MaterialActivityApi-updateStudyDetail */



/** 
 * Created by PracticeActivityApi-getPracticeQuestionDetail
 *
 * 查询测验任务单题明细 #张嘉鑫/20171207#
 *
 * @questionId 	题目id-String
 */
exports.PracticeActivityApi_getPracticeQuestionDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/student_practice_activity/get_practice_question_detail",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getPracticeQuestionDetail",
		query: {
			questionId: data.questionId
		}
	}, callback);
};
/** End PracticeActivityApi-getPracticeQuestionDetail */



/** 
 * Created by PracticeActivityApi-getStudentPracticeInfo
 *
 * 查看单个学生批阅结果 #刘世平#
 *
 * @studentId 	学生id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getStudentPracticeInfo = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_student_practice_info",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getStudentPracticeInfo",
		query: {
			studentId: data.studentId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getStudentPracticeInfo */



/** 
 * Created by PracticeActivityApi-saveStudentPracticeAnswer
 *
 * 保存提交学生测验答案 #张嘉鑫/20171208#
 *
 * @practiceAnswersDTO 	学生测验答案-Body
 */
exports.PracticeActivityApi_saveStudentPracticeAnswer = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/save_student_practice_answer",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-saveStudentPracticeAnswer",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeActivityApi-saveStudentPracticeAnswer */



/** 
 * Created by ActivityActorApi-getPracticeActivityActors
 *
 * 查询邀请解析人列表(废弃！改为直接从ums获取全校师生) #张嘉鑫/#
 *
 * @activityId 	活动id-String
 * @actorName 	邀请人名称-String
 */
exports.ActivityActorApi_getPracticeActivityActors = function (data, callback) {
	servers.GET({
		url: "/teaching/api/actor/get_activity_actors",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ActivityActorApi-getPracticeActivityActors",
		query: {
			activityId: data.activityId,
			actorName: data.actorName
		}
	}, callback);
};
/** End ActivityActorApi-getPracticeActivityActors */



/** 
 * Created by MaterialActivityApi-queryQuestionReplyByPage
 *
 * 分页查询解答列表(待联调2017-12-5) #曹超/#
 *
 * @param 	param-Body * @page 	查询回复参数-Body
 */
exports.MaterialActivityApi_queryQuestionReplyByPage = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/query_question_reply_page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-queryQuestionReplyByPage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MaterialActivityApi-queryQuestionReplyByPage */



/** 
 * Created by PracticeActivityApi-getPracticeMarkInfo
 *
 * 获得班级测验批阅情况 #刘世平#
 *
 * @classId 	班级id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getPracticeMarkInfo = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_practice_mark_info",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getPracticeMarkInfo",
		query: {
			classId: data.classId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getPracticeMarkInfo */



/** 
 * Created by PracticeActivityApi-searchStudentPracticeResume
 *
 * 查询学生测验概述 #张嘉鑫/20171129#
 *
 * @activityId 	活动id-String
 * @classId 	班级id-String
 */
exports.PracticeActivityApi_searchStudentPracticeResume = function (data, callback) {
	servers.GET({
		url: "/teaching/api/student_practice_activity/search_student_practice_resume",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-searchStudentPracticeResume",
		query: {
			activityId: data.activityId,
			classId: data.classId
		}
	}, callback);
};
/** End PracticeActivityApi-searchStudentPracticeResume */



/** 
 * Created by PracticeActivityApi-searchStudentPracticeInfo
 *
 * 查询学生测验详情 #张嘉鑫/20171205#
 *
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_searchStudentPracticeInfo = function (data, callback) {
	servers.GET({
		url: "/teaching/api/student_practice_activity/search_student_practice_info",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-searchStudentPracticeInfo",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-searchStudentPracticeInfo */



/** 
 * Created by PracticeActivityApi-saveAnalysisRevert
 *
 * 保存我的评论 #张嘉鑫/20171129#
 *
 * @paramRevertDTO 	解析评论对象-Body
 */
exports.PracticeActivityApi_saveAnalysisRevert = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/save_analysis_revert",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-saveAnalysisRevert",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeActivityApi-saveAnalysisRevert */



/** 
 * Created by PracticeAnswerApi-savePracticeMarkType
 *
 * 保存批阅方式和参考学生 #刘世平#
 *
 * @practiceMarkType 	批阅方式-Body
 */
exports.PracticeAnswerApi_savePracticeMarkType = function (data, callback) {
	servers.POST({
		url: "/teaching/api/teacher_practice_activity/save_practice_mark_type",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeAnswerApi-savePracticeMarkType",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PracticeAnswerApi-savePracticeMarkType */



/** 
 * Created by PracticeActivityApi-getPracticeClassList
 *
 * 获得参与测验班级列表 #刘世平#
 *
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getPracticeClassList = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_practice_class_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getPracticeClassList",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getPracticeClassList */



/** 
 * Created by MaterialActivityApi-scoreQuestion
 *
 * 提问评分 #曹超/#
 *
 * @replyId 	replyId-String
 * @questionId 	提问ID-String
 * @score 	分数（1-5）只能为整数-String
 */
exports.MaterialActivityApi_scoreQuestion = function (data, callback) {
	servers.PATCH({
		url: "/teaching/api/material_activity/score_question",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-scoreQuestion",
		query: {
			replyId: data.replyId,
			questionId: data.questionId,
			score: data.score
		}
	}, callback);
};
/** End MaterialActivityApi-scoreQuestion */



/** 
 * Created by PracticeActivityApi-getPaperQuestionList
 *
 * 查询测验任务试题 #张嘉鑫/20171211#
 *
 * @activityId 	活动id-String
 * @questionId 	题目id-String
 */
exports.PracticeActivityApi_getPaperQuestionList = function (data, callback) {
	servers.GET({
		url: "/teaching/api/student_practice_activity/find_questions_activity_id",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getPaperQuestionList",
		query: {
			activityId: data.activityId,
			questionId: data.questionId
		}
	}, callback);
};
/** End PracticeActivityApi-getPaperQuestionList */



/** 
 * Created by VoteApi-getStudentVotingDetail
 *
 * 学生端投票详情 #李超#
 *
 * @classId 	班级id-String * @activityId 	活动id-String
 */
exports.VoteApi_getStudentVotingDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/vote/get_student_voting_detail/"+data.activityId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "VoteApi-getStudentVotingDetail",
		query: {
		}
	}, callback);
};
/** End VoteApi-getStudentVotingDetail */



/** 
 * Created by MaterialActivityApi-addInStudyList
 *
 * 加入学习清单 #曹超/#
 *
 * @activityId 	活动ID-String
 */
exports.MaterialActivityApi_addInStudyList = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/add_in_study_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-addInStudyList",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End MaterialActivityApi-addInStudyList */



/** 
 * Created by PracticeActivityApi-downloadPracticeResource
 *
 * 缓存测验 #张嘉鑫#
 *
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_downloadPracticeResource = function (data, callback) {
	servers.POST({
		url: "/teaching/api/student_practice_activity/download_practice_resource",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-downloadPracticeResource",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-downloadPracticeResource */



/** 
 * Created by MaterialActivityApi-removeOutStudyList
 *
 * 移除学习清单 #曹超/#
 *
 * @activityId 	活动ID-String
 */
exports.MaterialActivityApi_removeOutStudyList = function (data, callback) {
	servers.GET({
		url: "/teaching/api/material_activity/remove_out_study_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MaterialActivityApi-removeOutStudyList",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End MaterialActivityApi-removeOutStudyList */



/** 
 * Created by PracticeActivityApi-getPracticeQuestionDetail_1
 *
 * 小题作答详情 #刘世平#
 *
 * @classId 	classId-String
 * @questionId 	小题id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_getPracticeQuestionDetail_1 = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/get_practice_question_detail",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-getPracticeQuestionDetail_1",
		query: {
			classId: data.classId,
			questionId: data.questionId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-getPracticeQuestionDetail_1 */



/** 
 * Created by VoteApi-getVotingClass
 *
 * 投票关联班级查询 #李超#
 *
 * @activityId 	活动id-String
 */
exports.VoteApi_getVotingClass = function (data, callback) {
	servers.GET({
		url: "/teaching/api/vote/get_voting_class/"+data.activityId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "VoteApi-getVotingClass",
		query: {
		}
	}, callback);
};
/** End VoteApi-getVotingClass */



/** 
 * Created by NoticeApi-getNoticeDetail_1
 *
 * 保存阅读公告记录 #李超#
 *
 * @activityId 	公告活动id-String
 */
exports.NoticeApi_getNoticeDetail_1 = function (data, callback) {
	servers.PUT({
		url: "/teaching/api/bulletin/save_notice_read_record/"+data.activityId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "NoticeApi-getNoticeDetail_1",
		query: {
		}
	}, callback);
};
/** End NoticeApi-getNoticeDetail_1 */



/** 
 * Created by VoteApi-getVotingDetail
 *
 * 投票详情 #李超#
 *
 * @activityId 	活动id-String * @classId 	班级id-String
 */
exports.VoteApi_getVotingDetail = function (data, callback) {
	servers.GET({
		url: "/teaching/api/vote/get_voting_detail/"+data.activityId+"/"+data.classId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "VoteApi-getVotingDetail",
		query: {
		}
	}, callback);
};
/** End VoteApi-getVotingDetail */



/** 
 * Created by PracticeActivityApi-publishPracticeResult
 *
 * 发布测验结果 #刘世平#
 *
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_publishPracticeResult = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teacher_practice_activity/publish_practice_result",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-publishPracticeResult",
		query: {
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-publishPracticeResult */



/** 
 * Created by TeachingActivityApi-queryStudentResourceCount
 *
 * 查询学生首页资源数量 #曹超/#
 *
 */
exports.TeachingActivityApi_queryStudentResourceCount = function (data, callback) {
	servers.GET({
		url: "/teaching/api/teaching_activity/query_student_resource_count",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TeachingActivityApi-queryStudentResourceCount"
	}, callback);
};
/** End TeachingActivityApi-queryStudentResourceCount */



/** 
 * Created by PracticeActivityApi-urgePractice_1
 *
 * 催缴测验 #刘世平#
 *
 * @classId 	班级id-String
 * @activityId 	活动id-String
 */
exports.PracticeActivityApi_urgePractice_1 = function (data, callback) {
	servers.POST({
		url: "/teaching/api/teacher_practice_activity/urge_practice",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PracticeActivityApi-urgePractice_1",
		query: {
			classId: data.classId,
			activityId: data.activityId
		}
	}, callback);
};
/** End PracticeActivityApi-urgePractice_1 */


