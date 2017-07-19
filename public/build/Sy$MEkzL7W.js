/**!
 * 生学堂-h5 v1.0
 * 接口数量 102
 * http://127.0.0.1:3200/api/list?p_id=r1eGNJf8X$&v_id=Sy$MEkzL7W&g_id=ryePryGLmb
 *
 * 2017-06-21 15:26:47 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../common/servers');



/** 
 * Created by SkeQ3yjDmW
 *
 * 成绩点评-单科-各分类下学生信息
 *
 * @examId 	考试id-Number
 * @examLevel 	考试级别：0-市级，1-区县级，2-校级，3-班级-Number
 * @baseClassId 	云平台班级id-Number
 * @upNum 	进步名次阈值-Number
 * @downNum 	下滑名次阈值-Number
 * @baseSubjectId 	云平台学科id-Number
 * @orgId 	组织机构id-Number
 */
exports.SkeQ3yjDmW = function (data, callback) {
	servers.GET({
		url: "/restful/getTeacherScoreRemarkStudentsBySingle.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			examLevel: data.examLevel,
			baseClassId: data.baseClassId,
			upNum: data.upNum,
			downNum: data.downNum,
			baseSubjectId: data.baseSubjectId,
			orgId: data.orgId
		}
	}, callback);
};
/** End SkeQ3yjDmW */



/** 
 * Created by BJ6ZGnksvQb
 *
 * 分享-保存播放记录
 *
 * @speakId 	学霸说说的ID-Number
 */
exports.BJ6ZGnksvQb = function (data, callback) {
	servers.GET({
		url: "/restful/mobile/xbController/savePlayRecord.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId
		}
	}, callback);
};
/** End BJ6ZGnksvQb */



/** 
 * Created by HyoffnJjwm$
 *
 * 保存学霸说说的举报
 *
 * @speakId 	学霸说ID-Number
 * @content 	举报内容-String
 */
exports.HyoffnJjwm$ = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/saveReport.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId,
			content: data.content
		}
	}, callback);
};
/** End HyoffnJjwm$ */



/** 
 * Created by BJ0Mf2Jow7Z
 *
 * 分享-查询一个说说的详情
 *
 * @speakId 	说说id-Number
 */
exports.BJ0Mf2Jow7Z = function (data, callback) {
	servers.GET({
		url: "/restful/mobile/xbController/getOneSpeak.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId
		}
	}, callback);
};
/** End BJ0Mf2Jow7Z */



/** 
 * Created by rkrNf2kivmb
 *
 * 查询当前登陆教师关联的所有科目信息
 *
 */
exports.rkrNf2kivmb = function (data, callback) {
	servers.POST({
		url: "/mobile/commonController/getOneTeacherAllSubjects.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End rkrNf2kivmb */



/** 
 * Created by SJvfznkiwXZ
 *
 * 查询一个教师的成绩点评列表--老师
 *
 * @pageNumber 	页码-Number
 * @pageSize 	每页数量-Number
 */
exports.SJvfznkiwXZ = function (data, callback) {
	servers.POST({
		url: "/mobile/scoreRemarkController/getScoreRemarksForTeacher.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			pageNumber: data.pageNumber,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End SJvfznkiwXZ */



/** 
 * Created by SknlM21oPQW
 *
 * 保存学生评测卡选项-老师
 *
 * @studentId 	学生id-String
 * @option 	评测卡选项-String
 * @ceId 	评测id（第一次扫描时，没有评测id则不传，第二次扫描时传入上次返回的评测id）-Number
 */
exports.SknlM21oPQW = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/saveStudentOption.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			studentId: data.studentId,
			option: data.option,
			ceId: data.ceId
		}
	}, callback);
};
/** End SknlM21oPQW */



/** 
 * Created by BkANfnkiPX$
 *
 * 保存成绩点评的回复-共用
 *
 * @scoreRemarkId 	成绩点评ID-Number
 * @parentCommentId 	所属回复的评论-Number
 * @content 	评论的内容-String
 */
exports.BkANfnkiPX$ = function (data, callback) {
	servers.POST({
		url: "/mobile/scoreRemarkController/saveComment.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			scoreRemarkId: data.scoreRemarkId,
			parentCommentId: data.parentCommentId,
			content: data.content
		}
	}, callback);
};
/** End BkANfnkiPX$ */



/** 
 * Created by HyYZGh1swXZ
 *
 * 保存学霸说说评论的举报
 *
 * @speakCommentId 	学霸说评论的ID-Number
 * @content 	举报内容-String
 */
exports.HyYZGh1swXZ = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/saveCommentReport.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakCommentId: data.speakCommentId,
			content: data.content
		}
	}, callback);
};
/** End HyYZGh1swXZ */



/** 
 * Created by SySrf2yoD7$
 *
 * 分享-查询一个说说评论列表
 *
 * @speakId 	说说id-Number
 * @pageNumber 	页码-Number
 * @pageSize 	每页数量-Number
 */
exports.SySrf2yoD7$ = function (data, callback) {
	servers.GET({
		url: "/restful/mobile/xbController/getOneSpeakComments.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId,
			pageNumber: data.pageNumber,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End SySrf2yoD7$ */



/** 
 * Created by S1LGG2yovXW
 *
 * 查询成绩点评的考试列表-老师
 *
 * @baseClassId 	基础班级id-Number
 * @pageNumber 	页码-Number
 * @pageSize 	每页数量-Number
 */
exports.S1LGG2yovXW = function (data, callback) {
	servers.POST({
		url: "/mobile/scoreRemarkController/getExamList.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			baseClassId: data.baseClassId,
			pageNumber: data.pageNumber,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End S1LGG2yovXW */



/** 
 * Created by ByQ2yoPXW
 *
 * 市级-查询市级考试
 *
 * @startTime 	待查询考试时间起点，即只需要这个参数之后的考试-String
 * @endTime 	-String
 * @examIds 	-String
 * @tenantId 	-Number
 */
exports.ByQ2yoPXW = function (data, callback) {
	servers.GET({
		url: "/restful/getCityExams.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			startTime: data.startTime,
			endTime: data.endTime,
			examIds: data.examIds,
			tenantId: data.tenantId
		}
	}, callback);
};
/** End ByQ2yoPXW */



/** 
 * Created by SypVzh1ivQb
 *
 * 查询一个成绩点评的详情--共用
 *
 * @id 	点评的id-Number
 */
exports.SypVzh1ivQb = function (data, callback) {
	servers.POST({
		url: "/mobile/scoreRemarkController/getOneScoreRemarkDetail.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			id: data.id
		}
	}, callback);
};
/** End SypVzh1ivQb */



/** 
 * Created by SJWQhyjDXZ
 *
 * 分享-成为学霸
 *
 * @accountId 	学霸账号id-Number
 * @examId 	考试ID-Number
 */
exports.SJWQhyjDXZ = function (data, callback) {
	servers.GET({
		url: "/restful/mobile/xbController/getXbStudentInfo.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			accountId: data.accountId,
			examId: data.examId
		}
	}, callback);
};
/** End SJWQhyjDXZ */



/** 
 * Created by B19lMn1ovX$
 *
 * 获取已扫描的的学生列表-老师
 *
 * @ceId 	评测id-String
 */
exports.B19lMn1ovX$ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getScanStudentList.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			ceId: data.ceId
		}
	}, callback);
};
/** End B19lMn1ovX$ */



/** 
 * Created by H1KGGn1sw7Z
 *
 * 查询一次考试中某个人说说列表
 *
 * @accountId 	学生账号id-Number
 * @examId 	考试id-Number
 * @subjectId 	学科id，不传值时查询全部学科-Number
 * @pageNumber 	页码-Number
 * @pageSize 	每页数量-Number
 */
exports.H1KGGn1sw7Z = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getOneStudentSpeaks.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			accountId: data.accountId,
			examId: data.examId,
			subjectId: data.subjectId,
			pageNumber: data.pageNumber,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End H1KGGn1sw7Z */



/** 
 * Created by Hk6SG2ysD7W
 *
 * 保存成绩点评--老师
 *
 * @examId 	考试id-Number
 * @examName 	考试名称-String
 * @examLevel 	考试级别 0-市级，1-区县级，2-校级，3-班级-Number
 * @examTime 	考试时间-String
 * @classId 	点评班级-Number
 * @className 	点评班级名称-String
 * @subjectId 	点评科目id，整体使用-1-Number
 * @subjectName 	点评科目名称，整体使用"整体"-String
 * @satisfactionDegree 	考试满意度-Number
 * @content 	点评内容-String
 * @studentAccountIds 	英文逗号连接的学生账号id-String
 * @classPhaseName 	班级学段名称-String
 */
exports.Hk6SG2ysD7W = function (data, callback) {
	servers.POST({
		url: "/mobile/scoreRemarkController/saveScoreRemark.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			examName: data.examName,
			examLevel: data.examLevel,
			examTime: data.examTime,
			classId: data.classId,
			className: data.className,
			subjectId: data.subjectId,
			subjectName: data.subjectName,
			satisfactionDegree: data.satisfactionDegree,
			content: data.content,
			studentAccountIds: data.studentAccountIds,
			classPhaseName: data.classPhaseName
		}
	}, callback);
};
/** End Hk6SG2ysD7W */



/** 
 * Created by BJDxf2kiPXb
 *
 * 删除评测
 *
 * @ceId 	评测id-Number
 */
exports.BJDxf2kiPXb = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/deleteEvaluationById.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			ceId: data.ceId
		}
	}, callback);
};
/** End BJDxf2kiPXb */



/** 
 * Created by SyiQMhJovQ$
 *
 * 查询一个说说评论列表
 *
 * @speakId 	说说id-Number
 */
exports.SyiQMhJovQ$ = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getOneSpeakComments.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId
		}
	}, callback);
};
/** End SyiQMhJovQ$ */



/** 
 * Created by rkwVznJjv7Z
 *
 * 教师查询小组对比详情
 *
 * @groupId 	小组ID，只能对比两个小组 用"，"分隔-String
 * @classId 	班级ID-String
 * @courseId 	学科ID-String
 * @begin_Time 	如要查询时间段内数据，需传入开始时间，结束时间。格式：“2017-01-01”-String
 * @end_Time 	如要查询时间段内数据，需传入开始时间，结束时间。格式：“2017-01-01”-String
 */
exports.rkwVznJjv7Z = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getGroupContrast.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			groupId: data.groupId,
			classId: data.classId,
			courseId: data.courseId,
			begin_Time: data.begin_Time,
			end_Time: data.end_Time
		}
	}, callback);
};
/** End rkwVznJjv7Z */



/** 
 * Created by SJImf2JiP7b
 *
 * 删除成绩点评-家长
 *
 * @scoreRemarkId 	点评ID-Number
 */
exports.SJImf2JiP7b = function (data, callback) {
	servers.GET({
		url: "/mobile/examCommentController/deleteTeacherScoreRemarkById.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			scoreRemarkId: data.scoreRemarkId
		}
	}, callback);
};
/** End SJImf2JiP7b */



/** 
 * Created by Sy4rz2koDX$
 *
 * 区县级-根据比例查询区县级考试学霸人数
 *
 * @examId 	区县级考试id-Number
 * @ratio 	超越率-Number
 * @tenantid 	-Number
 */
exports.Sy4rz2koDX$ = function (data, callback) {
	servers.GET({
		url: "/restful/getCountyXbStudentNum.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			ratio: data.ratio,
			tenantid: data.tenantid
		}
	}, callback);
};
/** End Sy4rz2koDX$ */



/** 
 * Created by r1cBz3yjwXb
 *
 * 获取考试吐槽评论列表-学生
 *
 * @examId 	考试id-Number
 * @queryStartId 	下一个查询点-Number
 * @pageSize 	每页返回数量-Number
 * @examlevel 	考试级别-Number
 */
exports.r1cBz3yjwXb = function (data, callback) {
	servers.GET({
		url: "/mobile/examCommentController/getStudentComment.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			queryStartId: data.queryStartId,
			pageSize: data.pageSize,
			examlevel: data.examlevel
		}
	}, callback);
};
/** End r1cBz3yjwXb */



/** 
 * Created by HybSfh1oP7W
 *
 * 查询登陆用户未读的学霸说点赞数量
 *
 */
exports.HybSfh1oP7W = function (data, callback) {
	servers.GET({
		url: "/mobile/xbController/getUnReadThumbsUpNumber.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End HybSfh1oP7W */



/** 
 * Created by SJwrMnkjv7$
 *
 * 获取一个家长话题数据
 *
 * @topicId 	家长话题ID-Number
 */
exports.SJwrMnkjv7$ = function (data, callback) {
	servers.GET({
		url: "mobile/parentTopicController/getSingleParentTopic.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			topicId: data.topicId
		}
	}, callback);
};
/** End SJwrMnkjv7$ */



/** 
 * Created by r1WVfnJiDQb
 *
 * 分享-保存赞成
 *
 * @speakId 	学霸说说的ID-Number
 * @isAgree 	是否赞同,如果没有传递此参数，则默认为赞同-Boolean
 */
exports.r1WVfnJiDQb = function (data, callback) {
	servers.GET({
		url: "/restful/mobile/xbController/saveThumbsUp.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId,
			isAgree: data.isAgree
		}
	}, callback);
};
/** End r1WVfnJiDQb */



/** 
 * Created by BJBZfnJiP7b
 *
 * 获取课堂测评列表-老师
 *
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 */
exports.BJBZfnJiP7b = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getEvaluationList.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End BJBZfnJiP7b */



/** 
 * Created by SynfMnyowmZ
 *
 * 更改家长点击过学生学霸说状态（家长调用）
 *
 * @examId 	考试id-Number
 */
exports.SynfMnyowmZ = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/updateParentClick.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId
		}
	}, callback);
};
/** End SynfMnyowmZ */



/** 
 * Created by BJgbf3JiwXb
 *
 * 查询历次考试列表
 *
 * @pageNumber 	页码-Number
 * @pageSize 	每页数量-Number
 */
exports.BJgbf3JiwXb = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getExamList.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			pageNumber: data.pageNumber,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End BJgbf3JiwXb */



/** 
 * Created by H177hyoPXW
 *
 * 保存家长话题评论
 *
 * @topicId 	家长话题ID-Number
 * @content 	评论内容-String
 * @parentCommentId 	评论的父评论ID-Number
 */
exports.H177hyoPXW = function (data, callback) {
	servers.GET({
		url: "mobile/parentTopicController/saveParentTopicComment.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			topicId: data.topicId,
			content: data.content,
			parentCommentId: data.parentCommentId
		}
	}, callback);
};
/** End H177hyoPXW */



/** 
 * Created by Hko$MnkjP7W
 *
 * 市级-查询市级考试学霸账号id
 *
 * @examId 	考试id-Number
 * @ratio 	超越率-Number
 * @tenantId 	-Number
 */
exports.Hko$MnkjP7W = function (data, callback) {
	servers.GET({
		url: "/restful/getCityXbAccountId.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			ratio: data.ratio,
			tenantId: data.tenantId
		}
	}, callback);
};
/** End Hko$MnkjP7W */



/** 
 * Created by rkYHf3JiPQ$
 *
 * 发布课堂评测-老师
 *
 * @jsonParam 	{    "ceId": "int, 评测id(必传)",    "ceTitle": "String, 评测名称(必传)",    "baseClassId": "班级id(必传)",    "baseClassName": "班级名称(必传)",    "baseBookId": "教材id",    "baseBookName": "教材名称",    "baseBookChapterId": "章节id",    "baseBookChapterName": "章节名称",    "baseBookSectionId": "小节id",    "baseBookSectionName": "小节名称","questionNumber": "题数"}-String
 */
exports.rkYHf3JiPQ$ = function (data, callback) {
	servers.POST({
		url: "/mobile/evaluationController/saveEvaluation.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			jsonParam: data.jsonParam
		}
	}, callback);
};
/** End rkYHf3JiPQ$ */



/** 
 * Created by Hk6zG3kjPQb
 *
 * 区县级-查询区县级考试学霸账号id
 *
 * @examId 	考试id-Number
 * @ratio 	超越率-Number
 * @tenantId 	-Number
 */
exports.Hk6zG3kjPQb = function (data, callback) {
	servers.GET({
		url: "/restful/getCountyXbAccountId.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			ratio: data.ratio,
			tenantId: data.tenantId
		}
	}, callback);
};
/** End Hk6zG3kjPQb */



/** 
 * Created by SkWxf2yoDmW
 *
 * 查看一次考试未上传解析的科目及统计
 *
 * @exam_id 	-String
 */
exports.SkWxf2yoDmW = function (data, callback) {
	servers.GET({
		url: "/mobile/analysisController/queryStatistics4ExamHasNoAnalysises.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			exam_id: data.exam_id
		}
	}, callback);
};
/** End SkWxf2yoDmW */



/** 
 * Created by BkuGG3JsDXZ
 *
 * 查询评论消息列表
 *
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 */
exports.BkuGG3JsDXZ = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getOneAccountSpeakComments.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End BkuGG3JsDXZ */



/** 
 * Created by BkgQMhkjDQb
 *
 * 获取发布的家长话题列表
 *
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 * @topicProgramaId 	家长话题栏目ID-Number
 */
exports.BkgQMhkjDQb = function (data, callback) {
	servers.GET({
		url: "mobile/parentTopicController/getParentTopics.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			queryStartId: data.queryStartId,
			topicProgramaId: data.topicProgramaId
		}
	}, callback);
};
/** End BkgQMhkjDQb */



/** 
 * Created by Bk5mfnkiPXZ
 *
 * 查询当前账号是否是学霸
 *
 * @examId 	考试id-Number
 */
exports.Bk5mfnkiPXZ = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getIsXb.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId
		}
	}, callback);
};
/** End Bk5mfnkiPXZ */



/** 
 * Created by SJa7fhysP7b
 *
 * 保存播放记录
 *
 * @speakId 	学霸说说ID-Number
 */
exports.SJa7fhysP7b = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/savePlayRecord.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId
		}
	}, callback);
};
/** End SJa7fhysP7b */



/** 
 * Created by r13WMnyow7W
 *
 * 成绩点评-总分-各分类下学生信息
 *
 * @examId 	考试id-Number
 * @examLevel 	考试级别：0-市级，1-区县级，2-校级，3-班级-Number
 * @baseClassId 	云平台班级id-Number
 * @upNum 	进步名次阈值-Number
 * @downNum 	下滑名次阈值-Number
 * @orgId 	组织机构id-Number
 */
exports.r13WMnyow7W = function (data, callback) {
	servers.GET({
		url: "/restful/getTeacherScoreRemarkStudentsByTotal.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			examLevel: data.examLevel,
			baseClassId: data.baseClassId,
			upNum: data.upNum,
			downNum: data.downNum,
			orgId: data.orgId
		}
	}, callback);
};
/** End r13WMnyow7W */



/** 
 * Created by rkUxz2koPQW
 *
 * 查询当前登陆学生的所有科目信息
 *
 */
exports.rkUxz2koPQW = function (data, callback) {
	servers.POST({
		url: "/mobile/commonController/getOneStudentAllSubjects.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End rkUxz2koPQW */



/** 
 * Created by rylEfh1sPQZ
 *
 * 家长接收的未读的成绩点评数量
 *
 */
exports.rylEfh1sPQZ = function (data, callback) {
	servers.GET({
		url: "/restful/getUnReadScoreRemarkNumberForParent.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End rylEfh1sPQZ */



/** 
 * Created by Sktlz3ysvmb
 *
 * 查询小组的排名情况-学生
 *
 * @reportId 	评测报告id-String
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-String
 * @courseId 	学科id-Number
 */
exports.Sktlz3ysvmb = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getGroupRankByStudent.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			reportId: data.reportId,
			queryStartId: data.queryStartId,
			courseId: data.courseId
		}
	}, callback);
};
/** End Sktlz3ysvmb */



/** 
 * Created by SyGrM3JoD7Z
 *
 * 保存学霸说说
 *
 * @examId 	考试id-Number
 * @subjectId 	学科id-Number
 * @programaId 	栏目id-Number
 * @type 	说说类型：2-视频，3音频-Number
 * @url 	说说地址-String
 * @duration 	说说的时长（单位秒）-Number
 */
exports.SyGrM3JoD7Z = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/saveSpeak.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			subjectId: data.subjectId,
			programaId: data.programaId,
			type: data.type,
			url: data.url,
			duration: data.duration
		}
	}, callback);
};
/** End SyGrM3JoD7Z */



/** 
 * Created by HJugzhyjPXZ
 *
 * 获取课堂评测列表-家长、学生
 *
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 * @courseId 	学科id（不传则查询全部学科）-Number
 */
exports.HJugzhyjPXZ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getEvaluationListByStudent.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			queryStartId: data.queryStartId,
			courseId: data.courseId
		}
	}, callback);
};
/** End HJugzhyjPXZ */



/** 
 * Created by S1OWM3JsD7b
 *
 * 查询最近有学霸说的考试信息
 *
 */
exports.S1OWM3JsD7b = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getTheLatestExam.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End S1OWM3JsD7b */



/** 
 * Created by S14Zfn1ovQ$
 *
 * 学生的考试列表信息
 *
 */
exports.S14Zfn1ovQ$ = function (data, callback) {
	servers.GET({
		url: "/mobile/commonController/getStudentNewPublish.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End S14Zfn1ovQ$ */



/** 
 * Created by B18Zf2Jow7W
 *
 * 查询小组成员排名情况-老师
 *
 * @groupId 	小组id-Number
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 * @classReportId 	班级评测报告id-Number
 */
exports.B18Zf2Jow7W = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getGroupMemberRank.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			groupId: data.groupId,
			queryStartId: data.queryStartId,
			classReportId: data.classReportId
		}
	}, callback);
};
/** End B18Zf2Jow7W */



/** 
 * Created by Bk_SMnJiwXb
 *
 * 查询学校老师完成度详情
 *
 * @reportId 	完成度报告id-Number
 * @schoolId 	学校id-Number
 * @gradeId 	年级id-Number
 * @courseId 	科目id-Number
 * @queryStartId 	开始条数-Number
 * @pageSize 	每页条数-String
 */
exports.Bk_SMnJiwXb = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getSchoolTeacherPercent.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			reportId: data.reportId,
			schoolId: data.schoolId,
			gradeId: data.gradeId,
			courseId: data.courseId,
			queryStartId: data.queryStartId,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End Bk_SMnJiwXb */



/** 
 * Created by HkQ4f3kiw7Z
 *
 * 查看一个学科上传的老师解析详情
 *
 * @exam_id 	-String
 * @course_name 	-String
 */
exports.HkQ4f3kiw7Z = function (data, callback) {
	servers.GET({
		url: "/mobile/analysisController/queryAnalysisDetails4Course.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			exam_id: data.exam_id,
			course_name: data.course_name
		}
	}, callback);
};
/** End HkQ4f3kiw7Z */



/** 
 * Created by S1oBfn1sPmW
 *
 * 保存考试吐槽评论-学生
 *
 * @examId 	考试ID-Number
 * @parentCommentId 	所属回复评论-Number
 * @content 	评论内容-String
 * @examlevel 	考试级别-Number
 */
exports.S1oBfn1sPmW = function (data, callback) {
	servers.POST({
		url: "/mobile/examCommentController/saveStudentComment.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			parentCommentId: data.parentCommentId,
			content: data.content,
			examlevel: data.examlevel
		}
	}, callback);
};
/** End S1oBfn1sPmW */



/** 
 * Created by HJJ4fn1iDm$
 *
 * 区县级-查询区县级考试
 *
 * @tenantId 	租户id-Number
 * @startTime 	待查询考试时间起点，即只需要这个参数之后的考试-String
 * @endTime 	待查询考试时间结束点，即只需要这个参数之后的考试-String
 * @examIds 	此次查询排除的考试科目-String
 */
exports.HJJ4fn1iDm$ = function (data, callback) {
	servers.GET({
		url: "/restful/getCountyExams.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			tenantId: data.tenantId,
			startTime: data.startTime,
			endTime: data.endTime,
			examIds: data.examIds
		}
	}, callback);
};
/** End HJJ4fn1iDm$ */



/** 
 * Created by SkNmf2JoDQb
 *
 * 查询学校领导查看学校各科目评测完成度列表
 *
 * @schoolId 	学校id-Number
 * @gradeId 	年级id-Number
 * @dateType 	日期种类:    WEEK:近一周,    MONTH:一月,TERM:一学期 -String
 * @queryStartId 	当前条数-Number
 * @pageSize 	当前页数，默认为10-Number
 */
exports.SkNmf2JoDQb = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getSchoolLeaderPercentReport.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			schoolId: data.schoolId,
			gradeId: data.gradeId,
			dateType: data.dateType,
			queryStartId: data.queryStartId,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End SkNmf2JoDQb */



/** 
 * Created by S1t4znJiw7W
 *
 * 教育局领导查询学校完成度对比接口
 *
 * @begin_Time 	按时间筛选。格式：“2017-01-01”-String
 * @end_Time 	按时间筛选。格式：“2017-01-01”-String
 * @grade_id 	年级ID-String
 * @school_id 	对比学校ID，只能传入2个。中间“，”分割-String
 */
exports.S1t4znJiw7W = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getSchoolPcContrastByLeader.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			begin_Time: data.begin_Time,
			end_Time: data.end_Time,
			grade_id: data.grade_id,
			school_id: data.school_id
		}
	}, callback);
};
/** End S1t4znJiw7W */



/** 
 * Created by By0BzhkjvQ$
 *
 * 查询某次考试所有科的学霸列表
 *
 * @examId 	考试id-Number
 */
exports.By0BzhkjvQ$ = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getOneExamAllSubjectSpeaks.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId
		}
	}, callback);
};
/** End By0BzhkjvQ$ */



/** 
 * Created by Hy_mMhkjwQb
 *
 * 查询一个成绩点评的回复列表-共用
 *
 * @queryStartId 	查询起点，不传表示第一页-Number
 * @pageSize 	每页数量-Number
 * @scoreRemarkId 	点评ID-Number
 */
exports.Hy_mMhkjwQb = function (data, callback) {
	servers.POST({
		url: "/mobile/scoreRemarkController/getComments.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			queryStartId: data.queryStartId,
			pageSize: data.pageSize,
			scoreRemarkId: data.scoreRemarkId
		}
	}, callback);
};
/** End Hy_mMhkjwQb */



/** 
 * Created by S17BM2JowQ$
 *
 * 市级-根据比例查询市级考试学霸人数
 *
 * @examId 	市级考试id-Number
 * @ratio 	超越率-Number
 * @tenantId 	-Number
 */
exports.S17BM2JowQ$ = function (data, callback) {
	servers.GET({
		url: "/restful/geCitytXbStudentNum.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			ratio: data.ratio,
			tenantId: data.tenantId
		}
	}, callback);
};
/** End S17BM2JowQ$ */



/** 
 * Created by S1vbz2kowQZ
 *
 * 按照学生维度查询测评报告明细-学生、家长
 *
 * @reportId 	报告id-Number
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 */
exports.S1vbz2kowQZ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getReportDetailByStudent.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			reportId: data.reportId,
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End S1vbz2kowQZ */



/** 
 * Created by BJONf3koD7$
 *
 * 按照班级维度查询测评报告明细-老师
 *
 * @reportId 	测评报告id-Number
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 */
exports.BJONf3koD7$ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getReportDetailByClass.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			reportId: data.reportId,
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End BJONf3koD7$ */



/** 
 * Created by r1IBz2JoD7b
 *
 * 登陆
 *
 * @username 	用户名-String
 * @password 	密码-String
 * @device_id 	设备id-String
 * @app_type 	1.安卓老师端2.安卓学生端3.安卓家长端4.苹果老师端5.苹果学生端6.苹果家长端'-Number
 * @needSchoolRoles 	是否需要查询角色，只有为true时才会查询-Boolean
 * @version 	App的版本-String
 */
exports.r1IBz2JoD7b = function (data, callback) {
	servers.POST({
		url: "/userController/loginAjax.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			username: data.username,
			password: data.password,
			device_id: data.device_id,
			app_type: data.app_type,
			needSchoolRoles: data.needSchoolRoles,
			version: data.version
		}
	}, callback);
};
/** End r1IBz2JoD7b */



/** 
 * Created by rkMMM2yiwQW
 *
 * 教育局领导查询学校完成度列表
 *
 * @grade_id 	按年级筛选，年级ID，若多个年级，ID用“，”分割-String
 * @begin_Time 	按时间筛选。格式：“2017-01-01”-String
 * @end_Time 	按时间筛选。格式：“2017-01-01”-String
 * @queryStartId 	如需分页，需要传入该参数-Number
 */
exports.rkMMM2yiwQW = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getSchoolPcAllByLeader.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			grade_id: data.grade_id,
			begin_Time: data.begin_Time,
			end_Time: data.end_Time,
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End rkMMM2yiwQW */



/** 
 * Created by B1HXznkswQZ
 *
 * 根据班级查询学生的排名情况-老师
 *
 * @classReportId 	测评报告id-Number
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 */
exports.B1HXznkswQZ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getStudentRank.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			classReportId: data.classReportId,
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End B1HXznkswQZ */



/** 
 * Created by rJagG3yovQb
 *
 * 获取老师收的鲜花列表-老师
 *
 */
exports.rJagG3yovQb = function (data, callback) {
	servers.GET({
		url: "/mobile/examCommentController/getTeacherFlowerList.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End rJagG3yovQb */



/** 
 * Created by H1y$GnyoDQ$
 *
 * 查询成绩点评家长选择列表-总分--老师
 *
 * @examId 	考试id-Number
 * @examLevel 	考试级别：0-市级，1-区县级，2-校级，3-班级-Number
 * @baseClassId 	云平台考试班级id-Number
 */
exports.H1y$GnyoDQ$ = function (data, callback) {
	servers.POST({
		url: "/mobile/scoreRemarkController/getParentSeletesForTotal.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			examLevel: data.examLevel,
			baseClassId: data.baseClassId
		}
	}, callback);
};
/** End H1y$GnyoDQ$ */



/** 
 * Created by ryj4fh1iwmb
 *
 * 获取家长助威-家长
 *
 * @examId 	考试ID-Number
 * @queryStartId 	下一个查询点-Number
 * @pageSize 	每页返回数量-Number
 * @examlevel 	考试级别-Number
 */
exports.ryj4fh1iwmb = function (data, callback) {
	servers.GET({
		url: "/mobile/examCommentController/getParentComment.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			queryStartId: data.queryStartId,
			pageSize: data.pageSize,
			examlevel: data.examlevel
		}
	}, callback);
};
/** End ryj4fh1iwmb */



/** 
 * Created by SJBfMnJjwm$
 *
 * 获取考试点评中点评对象列表-老师
 *
 */
exports.SJBfMnJjwm$ = function (data, callback) {
	servers.GET({
		url: "/mobile/examCommentController/getTeacherScoreRemarkObjectList.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End SJBfMnJjwm$ */



/** 
 * Created by S1lzM3Jjwmb
 *
 * 获取测评报告列表
 *
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 */
exports.S1lzM3Jjwmb = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getEvaluationReportList.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End S1lzM3Jjwmb */



/** 
 * Created by HknBG2kovmW
 *
 * 查询成绩点评家长选择列表-单科--老师
 *
 * @examId 	考试id-Number
 * @examLevel 	考试级别：0-市级，1-区县级，2-校级，3-班级-Number
 * @baseClassId 	云平台考试班级id-Number
 * @baseSubjectId 	云平台学科id-Number
 */
exports.HknBG2kovmW = function (data, callback) {
	servers.POST({
		url: "/mobile/scoreRemarkController/getParentSeletesForSingle.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			examLevel: data.examLevel,
			baseClassId: data.baseClassId,
			baseSubjectId: data.baseSubjectId
		}
	}, callback);
};
/** End HknBG2kovmW */



/** 
 * Created by rJ$LG2JswQb
 *
 * 保存赞成
 *
 * @speakId 	学霸说ID-Number
 * @isAgree 	是否赞同,如果没有传递此参数，则默认为赞同-Boolean
 */
exports.rJ$LG2JswQb = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/saveThumbsUp.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId,
			isAgree: data.isAgree
		}
	}, callback);
};
/** End rJ$LG2JswQb */



/** 
 * Created by ryyLzh1ovmW
 *
 * 查询一次考试可选择科目和栏目
 *
 * @examId 	考试id-Number
 */
exports.ryyLzh1ovmW = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getSubjectsAndProgramas.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId
		}
	}, callback);
};
/** End ryyLzh1ovmW */



/** 
 * Created by S1$fMh1owQ$
 *
 * 获取章节和小节信息-老师
 *
 * @teachMaterialId 	教材id-Number
 */
exports.S1$fMh1owQ$ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getMaterialChaptersByTeachMaterialId.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			teachMaterialId: data.teachMaterialId
		}
	}, callback);
};
/** End S1$fMh1owQ$ */



/** 
 * Created by HJMef3yjD7W
 *
 * 查看一个学科未上传解析的题目
 *
 * @exam_id 	-String
 * @course_name 	-String
 */
exports.HJMef3yjD7W = function (data, callback) {
	servers.GET({
		url: "/mobile/analysisController/queryStatistics4CourseHasNoAnalysises.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			exam_id: data.exam_id,
			course_name: data.course_name
		}
	}, callback);
};
/** End HJMef3yjD7W */



/** 
 * Created by H1NVG2yiDmZ
 *
 * 查询个人中心首页信息
 *
 */
exports.H1NVG2yiDmZ = function (data, callback) {
	servers.POST({
		url: "/mobile/commonController/getMyInfo.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End H1NVG2yiDmZ */



/** 
 * Created by ByRxfhJswQW
 *
 * 更新老师绑定信息-老师
 *
 */
exports.ByRxfhJswQW = function (data, callback) {
	servers.POST({
		url: "/mobile/examCommentController/updateTeacherBindInfo.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End ByRxfhJswQW */



/** 
 * Created by B1MWfhJjDX$
 *
 * 查看考试解析最多学科
 *
 * @exam_id 	-String
 */
exports.B1MWfhJjDX$ = function (data, callback) {
	servers.GET({
		url: "/mobile/analysisController/queryCoursesHavingMaxAnalysises.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			exam_id: data.exam_id
		}
	}, callback);
};
/** End B1MWfhJjDX$ */



/** 
 * Created by r1MNfnJswXb
 *
 * 获取一个家长话题所有的评论
 *
 * @topicId 	家长话题ID-Number
 * @queryStartId 	评论内容-String
 */
exports.r1MNfnJswXb = function (data, callback) {
	servers.GET({
		url: "mobile/parentTopicController/getParentTopicComments.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			topicId: data.topicId,
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End r1MNfnJswXb */



/** 
 * Created by rJhVMnJiDX$
 *
 * 保存家长助威-家长
 *
 * @examId 	考试ID-String
 * @parentCommentId 	所属回复评论-String
 * @content 	评论内容-String
 * @examlevel 	考试级别-Number
 */
exports.rJhVMnJiDX$ = function (data, callback) {
	servers.POST({
		url: "/mobile/examCommentController/saveParentComment.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			parentCommentId: data.parentCommentId,
			content: data.content,
			examlevel: data.examlevel
		}
	}, callback);
};
/** End rJhVMnJiDX$ */



/** 
 * Created by BJg8G3kiwmb
 *
 * 保存评论
 *
 * @speakId 	学霸说ID-Number
 * @parentCommentId 	所属回复评论-Number
 * @content 	评论内容-String
 */
exports.BJg8G3kiwmb = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/saveComment.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId,
			parentCommentId: data.parentCommentId,
			content: data.content
		}
	}, callback);
};
/** End BJg8G3kiwmb */



/** 
 * Created by BJsxMnkoPX$
 *
 * 老师查询学生对比详情
 *
 * @stuIds 	学生ID，只能对比两个学生 用"，"分隔-String
 * @courseId 	对比科目ID-String
 * @begin_Time 	若要查询时间段类对比数据，需传入开始时间，结束时间。格式：“2017-12-01”-String
 * @end_Time 	若要查询时间段类对比数据，需传入开始时间，结束时间。格式：“2017-12-01”-String
 */
exports.BJsxMnkoPX$ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getStuContrast.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			stuIds: data.stuIds,
			courseId: data.courseId,
			begin_Time: data.begin_Time,
			end_Time: data.end_Time
		}
	}, callback);
};
/** End BJsxMnkoPX$ */



/** 
 * Created by SJhXz31oDQW
 *
 * 查询登陆用户的未读的学霸说评论数量
 *
 */
exports.SJhXz31oDQW = function (data, callback) {
	servers.GET({
		url: "/mobile/xbController/getUnReadCommentNumber.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End SJhXz31oDQW */



/** 
 * Created by Sk7WGhkiv7Z
 *
 * 查询当前登陆教师是不是班主任
 *
 */
exports.Sk7WGhkiv7Z = function (data, callback) {
	servers.POST({
		url: "/mobile/commonController/getOneHeaderTeacherAllClasses.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End Sk7WGhkiv7Z */



/** 
 * Created by r1mQzhyiwQW
 *
 * 查询小组的排名情况-老师
 *
 * @classReportId 	测评报告id-Number
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 */
exports.r1mQzhyiwQW = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getGroupRankByTeacher.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			classReportId: data.classReportId,
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End r1mQzhyiwQW */



/** 
 * Created by BJ1fM2yswmb
 *
 * 查询学校领导查看学校各科目老师对比
 *
 * @reportId 	报告id-Number
 * @schoolId 	学校id-Number
 * @gradeId 	年级id-String
 * @courseId 	科目id-Number
 * @teacherId 	老师id，只能对比两个老师 用","分隔-String
 */
exports.BJ1fM2yswmb = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getCompareSchoolTeacherPercent.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			reportId: data.reportId,
			schoolId: data.schoolId,
			gradeId: data.gradeId,
			courseId: data.courseId,
			teacherId: data.teacherId
		}
	}, callback);
};
/** End BJ1fM2yswmb */



/** 
 * Created by HJtQz3yiv7Z
 *
 * 查询一个家长的成绩点评列表-家长
 *
 * @pageNumber 	页码-Number
 * @pageSize 	每页数量-Number
 */
exports.HJtQz3yiv7Z = function (data, callback) {
	servers.POST({
		url: "/mobile/scoreRemarkController/getScoreRemarksForParent.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			pageNumber: data.pageNumber,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End HJtQz3yiv7Z */



/** 
 * Created by SkyXznJoDXb
 *
 * 修改教师的任课信息
 *
 * @schoolSubjectId 	科目id-String
 * @accountId 	用户id-String
 * @termId 	学期id-String
 * @classesIds 	班级id，多个班级以逗号拼接。如1,2,3-String
 */
exports.SkyXznJoDXb = function (data, callback) {
	servers.GET({
		url: "/restful/registerController/courseChangeApply.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			schoolSubjectId: data.schoolSubjectId,
			accountId: data.accountId,
			termId: data.termId,
			classesIds: data.classesIds
		}
	}, callback);
};
/** End SkyXznJoDXb */



/** 
 * Created by r1qGGh1swmW
 *
 * 查询未读消息数量（包括总数和各分类的数量）
 *
 */
exports.r1qGGh1swmW = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getUnReadMsgTotal.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End r1qGGh1swmW */



/** 
 * Created by Hk7gz3kswm$
 *
 * 查询当前登陆教师所有班级-包括班长任的班
 *
 */
exports.Hk7gz3kswm$ = function (data, callback) {
	servers.POST({
		url: "/mobile/commonController/getOneTeacherAllClassesAndHeader.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End Hk7gz3kswm$ */



/** 
 * Created by Hy$Xf31jPQZ
 *
 * 查询课堂评测报告班级对比
 *
 * @reportId 	要对比的报告id-Number
 * @reportType 	报告的类型:周报0 月报1-String
 */
exports.Hy$Xf31jPQZ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getCompareClassReport.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			reportId: data.reportId,
			reportType: data.reportType
		}
	}, callback);
};
/** End Hy$Xf31jPQZ */



/** 
 * Created by SySlznkovXW
 *
 * 查询当前登陆教师关联的所有班级信息
 *
 */
exports.SySlznkovXW = function (data, callback) {
	servers.POST({
		url: "/mobile/commonController/getOneTeacherAllClasses.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End SySlznkovXW */



/** 
 * Created by HkW$z2kiPQW
 *
 * 查询一个说说的详情
 *
 * @speakId 	说说id-Number
 */
exports.HkW$z2kiPQW = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getOneSpeak.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			speakId: data.speakId
		}
	}, callback);
};
/** End HkW$z2kiPQW */



/** 
 * Created by SkfQ3JoP7W
 *
 * 查询教育局领导最新发布
 *
 * @orgId 	-String
 */
exports.SkfQ3JoP7W = function (data, callback) {
	servers.POST({
		url: "http://192.168.2.56:8080/SXT/mobile/commonController/getJyjldNewPublish.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			orgId: data.orgId
		}
	}, callback);
};
/** End SkfQ3JoP7W */



/** 
 * Created by rJzQz31oDQZ
 *
 * 教育局领导查询学校完成度详情
 *
 * @grade_id 	按年级筛选，年级ID，若多个年级，ID用“，”分割-String
 * @begin_Time 	按时间筛选。格式：“2017-01-01”-String
 * @end_Time 	按时间筛选。格式：“2017-01-01”-String
 */
exports.rJzQz31oDQZ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getEvaluationPcByLeader.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			grade_id: data.grade_id,
			begin_Time: data.begin_Time,
			end_Time: data.end_Time
		}
	}, callback);
};
/** End rJzQz31oDQZ */



/** 
 * Created by Sy4fz2yovX$
 *
 * 获取消息模板-老师
 *
 * @queryStartId 	下一个查询点-Number
 * @pageSize 	每页数量-Number
 */
exports.Sy4fz2yovX$ = function (data, callback) {
	servers.GET({
		url: "/mobile/examCommentController/getMessageTemplateList.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			queryStartId: data.queryStartId,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End Sy4fz2yovX$ */



/** 
 * Created by HJxBM2kjvQZ
 *
 * 查询一次考试中某科说说列表
 *
 * @examId 	考试id-Number
 * @subjectId 	学科id-Number
 * @programaId 	学科栏目id-Number
 * @pageNumber 	页码-Number
 * @pageSize 	每页数量-Number
 */
exports.HJxBM2kjvQZ = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getSpeaksByOneExam.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			examId: data.examId,
			subjectId: data.subjectId,
			programaId: data.programaId,
			pageNumber: data.pageNumber,
			pageSize: data.pageSize
		}
	}, callback);
};
/** End HJxBM2kjvQZ */



/** 
 * Created by rkQzGnksDmZ
 *
 * 根据班级课程查询学生的排名情况-学生家长
 *
 * @reportId 	-Number
 * @classId 	-Number
 * @courseId 	-Number
 * @queryStartId 	-Number
 */
exports.rkQzGnksDmZ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getStudentRankByClassCourse.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			reportId: data.reportId,
			classId: data.classId,
			courseId: data.courseId,
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End rkQzGnksDmZ */



/** 
 * Created by Sy5VGnyswQW
 *
 * 获取老师的教材信息-老师
 *
 */
exports.Sy5VGnyswQW = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getTeachMaterials.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End Sy5VGnyswQW */



/** 
 * Created by HykHfhkjvmb
 *
 * 查询学霸说点赞消息列表
 *
 * @queryStartId 	用于进行查询分页数据时使用（从当前记录查询分页数据）-Number
 */
exports.HykHfhkjvmb = function (data, callback) {
	servers.POST({
		url: "/mobile/xbController/getOneAccountThumbsUps.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			queryStartId: data.queryStartId
		}
	}, callback);
};
/** End HykHfhkjvmb */



/** 
 * Created by BkwQGn1iPm$
 *
 * 获取考试点评列表-老师
 *
 */
exports.BkwQGn1iPm$ = function (data, callback) {
	servers.GET({
		url: "/mobile/examCommentController/getTeacherScoreRemarkListByTeacher.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End BkwQGn1iPm$ */



/** 
 * Created by r1Elzhysvmb
 *
 * 查看所有考试学科的解析统计
 *
 */
exports.r1Elzhysvmb = function (data, callback) {
	servers.GET({
		url: "/mobile/analysisController/queryAnalysisStatistics4Exam.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End r1Elzhysvmb */



/** 
 * Created by HyI4GnysvQZ
 *
 * 获取课堂评测分析结果-老师
 *
 * @ceId 	评测id-Number
 */
exports.HyI4GnysvQZ = function (data, callback) {
	servers.GET({
		url: "/mobile/evaluationController/getEvaluationAnalysis.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: "",
		query: {
			ceId: data.ceId
		}
	}, callback);
};
/** End HyI4GnysvQZ */



/** 
 * Created by rJA$fnyjwXb
 *
 * 获取所有的家长话题分类
 *
 */
exports.rJA$fnyjwXb = function (data, callback) {
	servers.GET({
		url: "mobile/parentTopicController/getAllTopicPrograma.do",
		token: !data.TOKEN?"":data.TOKEN,
		swaggerId: ""
	}, callback);
};
/** End rJA$fnyjwXb */


