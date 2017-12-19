/**!
 * 重构微服务-swagger 云阅卷WEB-mark v0.1
 * 接口数量 57
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



/** 
 * Created by SetupApi-listSchoolMarkTeachers
 *
 * 校级新增阅卷教师（陈家友) 
 *
 * @schoolId 	学校ID-String * @baseCourseId 	基础科目ID-String
 */
exports.SetupApi_listSchoolMarkTeachers = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/list_school_mark_teachers/"+data.schoolId+"/"+data.baseCourseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-listSchoolMarkTeachers",
		query: {
		}
	}, callback);
};
/** End SetupApi-listSchoolMarkTeachers */



/** 
 * Created by ScoreApi-studentQuestionScorePage
 *
 * 查询单科阅卷成绩数据列表（陈家友) 
 *
 */
exports.ScoreApi_studentQuestionScorePage = function (data, callback) {
	servers.POST({
		url: "/mark/api/score/student_question_scores/page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScoreApi-studentQuestionScorePage"
	}, callback);
};
/** End ScoreApi-studentQuestionScorePage */



/** 
 * Created by MarkingApi-getMarkUnitProcess_1
 *
 * 查询异常卷提交信息 (陈家友) 
 *
 * @examCourseId 	科目ID-String * @secret 	密号-String
 */
exports.MarkingApi_getMarkUnitProcess_1 = function (data, callback) {
	servers.GET({
		url: "/mark/api/marking/special_mark_unit/"+data.examCourseId+"/"+data.secret,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-getMarkUnitProcess_1",
		query: {
		}
	}, callback);
};
/** End MarkingApi-getMarkUnitProcess_1 */



/** 
 * Created by SetupApi-listMarkQuestionSteps
 *
 * 查询题目步骤分（陈家友) 
 *
 * @examQuestionId 	题目ID-String
 */
exports.SetupApi_listMarkQuestionSteps = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/list_mark_question_steps/"+data.examQuestionId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-listMarkQuestionSteps",
		query: {
		}
	}, callback);
};
/** End SetupApi-listMarkQuestionSteps */



/** 
 * Created by SetupApi-listMarkRules
 *
 * 查询题组阅卷规则 (陈家友) 
 *
 * @markUnitId 	阅卷单位ID-String
 */
exports.SetupApi_listMarkRules = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/list_mark_rules/"+data.markUnitId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-listMarkRules",
		query: {
		}
	}, callback);
};
/** End SetupApi-listMarkRules */



/** 
 * Created by SetupApi-createMarkTeachers
 *
 * 生成阅卷教师临时账号（陈家友) 
 *
 * @markUnitId 	阅卷单位ID-String * @markTeacherNum 	阅卷教师数量- * @isMark 	是否阅卷-Boolean
 */
exports.SetupApi_createMarkTeachers = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/create_mark_teacher/"+data.markUnitId+"/"+data.markTeacherNum+"/"+data.isMark,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-createMarkTeachers",
		query: {
		}
	}, callback);
};
/** End SetupApi-createMarkTeachers */



/** 
 * Created by ScannerApi-scanResultPage
 *
 * 查询扫描结果数据 (陈家友) #2017-12-12#
 *
 */
exports.ScannerApi_scanResultPage = function (data, callback) {
	servers.POST({
		url: "/mark/api/scanner/scan_result_page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-scanResultPage"
	}, callback);
};
/** End ScannerApi-scanResultPage */



/** 
 * Created by ScannerApi-listScanResults
 *
 * 查询扫描结果数据 (陈家友) 
 *
 * @examCourseId 	学科ID-String * @scanAccountId 	扫描账号ID-String
 */
exports.ScannerApi_listScanResults = function (data, callback) {
	servers.GET({
		url: "/mark/api/scanner/list_scan_results/"+data.examCourseId+"/"+data.scanAccountId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-listScanResults",
		query: {
		}
	}, callback);
};
/** End ScannerApi-listScanResults */



/** 
 * Created by SetupApi-createMarkRule
 *
 * 设置题组阅卷规则 (陈家友) 
 *
 * @createdAt 	创建时间-String
 * @createdBy 	创建者-String
 * @updatedAt 	更新时间-String
 * @updatedBy 	更新者-String
 * @delFlag 	删除标记，默认为false，执行delete更新为true-Boolean
 * @id 	ID-String
 * @markUnitId 	阅卷单位ID-String
 * @markMode 	阅卷模式-Number
 * @errorCtrl 	双评误差控制：阅卷单位 题-Number
 * @errorScore 	双评误差分数-Number
 * @markTeacherNum 	阅卷教师数量-Number
 * @maxMarkNum 	最大阅卷单位数量-Number
 * @minMarkNum 	最小阅卷单位数量-Number
 * @isReview 	是否复评： 同一个人复评-Boolean
 * @reviewRatio 	复评比例-Number
 * @reviewErrorScore 	复评误差分数-Number
 */
exports.SetupApi_createMarkRule = function (data, callback) {
	servers.POST({
		url: "/mark/api/setup/create_mark_rule",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-createMarkRule",
		query: {
			createdAt: data.createdAt,
			createdBy: data.createdBy,
			updatedAt: data.updatedAt,
			updatedBy: data.updatedBy,
			delFlag: data.delFlag,
			id: data.id,
			markUnitId: data.markUnitId,
			markMode: data.markMode,
			errorCtrl: data.errorCtrl,
			errorScore: data.errorScore,
			markTeacherNum: data.markTeacherNum,
			maxMarkNum: data.maxMarkNum,
			minMarkNum: data.minMarkNum,
			isReview: data.isReview,
			reviewRatio: data.reviewRatio,
			reviewErrorScore: data.reviewErrorScore
		}
	}, callback);
};
/** End SetupApi-createMarkRule */



/** 
 * Created by ScannerApi-getPaperTemplate
 *
 * 查询学科试卷模板 (陈家友) #2017-12-11#
 *
 * @examId 	考试ID-String * @examCourseId 	学科ID-String
 */
exports.ScannerApi_getPaperTemplate = function (data, callback) {
	servers.GET({
		url: "/mark/api/scanner/get_paper_template/"+data.examId+"/"+data.examCourseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-getPaperTemplate",
		query: {
		}
	}, callback);
};
/** End ScannerApi-getPaperTemplate */



/** 
 * Created by MonitorApi-listMarkUnitStatistics
 *
 * 查询一个科目所有题组的阅卷进度 (陈显官)
 *
 * @examCourseId 	考试科目ID-String
 */
exports.MonitorApi_listMarkUnitStatistics = function (data, callback) {
	servers.GET({
		url: "/mark/api/monitor/list_mark_unit_statistics/"+data.examCourseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MonitorApi-listMarkUnitStatistics",
		query: {
		}
	}, callback);
};
/** End MonitorApi-listMarkUnitStatistics */



/** 
 * Created by ScannerApi-createScanResults
 *
 * 批量保存扫描数据 (陈家友) #2017-12-08#
 *
 * @scanResultDTOList 	scanResultDTOList-
 */
exports.ScannerApi_createScanResults = function (data, callback) {
	servers.POST({
		url: "/mark/api/scanner/create_scan_result_batch",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-createScanResults",
		query: {
		}
	}, callback);
};
/** End ScannerApi-createScanResults */



/** 
 * Created by MarkingApi-getMarkUnitProcess
 *
 * 查询试卷已处理数量总数量 (陈家友) 
 *
 * @examCourseId 	科目ID-String * @paperType 	试卷类型 0正常卷1仲裁卷2异常卷-
 */
exports.MarkingApi_getMarkUnitProcess = function (data, callback) {
	servers.GET({
		url: "/mark/api/marking/mark_unit_process/"+data.examCourseId+"/"+data.paperType,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-getMarkUnitProcess",
		query: {
		}
	}, callback);
};
/** End MarkingApi-getMarkUnitProcess */



/** 
 * Created by MonitorApi-listStudentMarkUnitAttachments
 *
 * 查询学生主观题裁切图片 (陈显官)
 *
 * @markUnitId 	阅卷单位ID-String * @secret 	学生密号-String
 */
exports.MonitorApi_listStudentMarkUnitAttachments = function (data, callback) {
	servers.GET({
		url: "/mark/api/monitor/list_student_mark_unit_attachments/"+data.markUnitId+"/"+data.secret,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MonitorApi-listStudentMarkUnitAttachments",
		query: {
		}
	}, callback);
};
/** End MonitorApi-listStudentMarkUnitAttachments */



/** 
 * Created by MarkingApi-createExpMarkUnit
 *
 * 创建异常阅卷单位 (陈家友) 
 *
 * @createdAt 	创建时间-String
 * @createdBy 	创建者-String
 * @updatedAt 	更新时间-String
 * @updatedBy 	更新者-String
 * @delFlag 	删除标记，默认为false，执行delete更新为true-Boolean
 * @id 	ID-String
 * @markUnitId 	阅卷单位ID-String
 * @examNo 	准考证号-String
 * @status 	状态-Number
 * @handler 	处理人-String
 * @type 	类型：仲裁  异常-Number
 * @remark 	备注-String
 */
exports.MarkingApi_createExpMarkUnit = function (data, callback) {
	servers.POST({
		url: "/mark/api/marking/special_mark_unit/exp_mark_unit/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-createExpMarkUnit",
		query: {
			createdAt: data.createdAt,
			createdBy: data.createdBy,
			updatedAt: data.updatedAt,
			updatedBy: data.updatedBy,
			delFlag: data.delFlag,
			id: data.id,
			markUnitId: data.markUnitId,
			examNo: data.examNo,
			status: data.status,
			handler: data.handler,
			type: data.type,
			remark: data.remark
		}
	}, callback);
};
/** End MarkingApi-createExpMarkUnit */



/** 
 * Created by ScannerApi-createScanProblem
 *
 * 保存扫描异常修改数据 (陈家友) #2017-12-08#
 *
 * @scanProblemDTO 	scanProblemDTO-Body
 */
exports.ScannerApi_createScanProblem = function (data, callback) {
	servers.POST({
		url: "/mark/api/scanner/create_scan_problem",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-createScanProblem",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ScannerApi-createScanProblem */



/** 
 * Created by SetupApi-removePaperSubjectiveLocationByTemplateId
 *
 * 删除所有主观题位置数据 (陈家友) 
 *
 * @templateId 	试卷模板ID-String
 */
exports.SetupApi_removePaperSubjectiveLocationByTemplateId = function (data, callback) {
	servers.DELETE({
		url: "/mark/api/setup/paper_subjective_location/remove_by_template_id/"+data.templateId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-removePaperSubjectiveLocationByTemplateId",
		query: {
		}
	}, callback);
};
/** End SetupApi-removePaperSubjectiveLocationByTemplateId */



/** 
 * Created by MarkingApi-downloadMarkUnits
 *
 * 试卷题组信息下载（陈家友) 
 *
 * @examCourseId 	科目ID-String * @markUnitId 	阅卷单位ID-String
 */
exports.MarkingApi_downloadMarkUnits = function (data, callback) {
	servers.GET({
		url: "/mark/api/marking/download_mark_unit",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-downloadMarkUnits",
		query: {
		}
	}, callback);
};
/** End MarkingApi-downloadMarkUnits */



/** 
 * Created by MonitorApi-pageTeacherStatistics
 *
 * 分页查询阅卷老师的阅卷情况 (陈显官)
 *
 * @pageParamDTO 	pageParamDTO-Body
 */
exports.MonitorApi_pageTeacherStatistics = function (data, callback) {
	servers.POST({
		url: "/mark/api/monitor/page_teacher_statistics",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MonitorApi-pageTeacherStatistics",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MonitorApi-pageTeacherStatistics */



/** 
 * Created by ScannerApi-createPaperModule
 *
 * 保存模块数据 (陈家友) #2017-12-08#
 *
 * @paperModuleDTO 	paperModuleDTO-Body
 */
exports.ScannerApi_createPaperModule = function (data, callback) {
	servers.POST({
		url: "/mark/api/scanner/create_paper_module",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-createPaperModule",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ScannerApi-createPaperModule */



/** 
 * Created by SetupApi-downloadMarkUnits
 *
 * 下载题组信息（陈家友) 
 *
 * @singleCourseId 	单科科目ID-String
 */
exports.SetupApi_downloadMarkUnits = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/download_mark_units/"+data.singleCourseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-downloadMarkUnits",
		query: {
		}
	}, callback);
};
/** End SetupApi-downloadMarkUnits */



/** 
 * Created by ScannerApi-createStudentPapers
 *
 * 批量保存学生试卷扫描原图 (陈家友) 
 *
 * @studentPaperDetailDTOList 	studentPaperDetailDTOList-
 */
exports.ScannerApi_createStudentPapers = function (data, callback) {
	servers.POST({
		url: "/mark/api/scanner/create_student_papers_batch",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-createStudentPapers",
		query: {
		}
	}, callback);
};
/** End ScannerApi-createStudentPapers */



/** 
 * Created by MarkingApi-listStudentPapers
 *
 * 查询学生全卷数据 (陈家友) 
 *
 * @examCourseId 	科目ID-String * @secret 	密号-String
 */
exports.MarkingApi_listStudentPapers = function (data, callback) {
	servers.GET({
		url: "/mark/api/marking/student_paper/"+data.examCourseId+"/"+data.secret,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-listStudentPapers",
		query: {
		}
	}, callback);
};
/** End MarkingApi-listStudentPapers */



/** 
 * Created by SetupApi-listMarkUnits
 *
 * 查询题组列表 (陈家友) 
 *
 * @singleCourseId 	单科科目ID-String
 */
exports.SetupApi_listMarkUnits = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/list_mark_units/"+data.singleCourseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-listMarkUnits",
		query: {
		}
	}, callback);
};
/** End SetupApi-listMarkUnits */



/** 
 * Created by MarkingApi-createMarkScore
 *
 * 保存教师阅卷成绩 (陈家友) 
 *
 * @webMarkScoreDTO 	webMarkScoreDTO-Body
 */
exports.MarkingApi_createMarkScore = function (data, callback) {
	servers.POST({
		url: "/mark/api/marking/mark_score/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-createMarkScore",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MarkingApi-createMarkScore */



/** 
 * Created by SetupApi-removeMarkQuestionStep
 *
 * 删除题目步骤分 (陈家友) 
 *
 * @id 	题目步骤分ID-String
 */
exports.SetupApi_removeMarkQuestionStep = function (data, callback) {
	servers.DELETE({
		url: "/mark/api/setup/mark_question_step/remove/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-removeMarkQuestionStep",
		query: {
		}
	}, callback);
};
/** End SetupApi-removeMarkQuestionStep */



/** 
 * Created by MarkingApi-modifyExpMarkUnit
 *
 * 保存异常卷处理结果 (陈家友) 
 *
 * @createdAt 	创建时间-String
 * @createdBy 	创建者-String
 * @updatedAt 	更新时间-String
 * @updatedBy 	更新者-String
 * @delFlag 	删除标记，默认为false，执行delete更新为true-Boolean
 * @id 	ID-String
 * @markUnitId 	阅卷单位ID-String
 * @examNo 	准考证号-String
 * @status 	状态-Number
 * @handler 	处理人-String
 * @type 	类型：仲裁  异常-Number
 * @remark 	备注-String
 */
exports.MarkingApi_modifyExpMarkUnit = function (data, callback) {
	servers.POST({
		url: "/mark/api/marking/special_mark_unit/exp_mark_unit/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-modifyExpMarkUnit",
		query: {
			createdAt: data.createdAt,
			createdBy: data.createdBy,
			updatedAt: data.updatedAt,
			updatedBy: data.updatedBy,
			delFlag: data.delFlag,
			id: data.id,
			markUnitId: data.markUnitId,
			examNo: data.examNo,
			status: data.status,
			handler: data.handler,
			type: data.type,
			remark: data.remark
		}
	}, callback);
};
/** End MarkingApi-modifyExpMarkUnit */



/** 
 * Created by MonitorApi-getMarkTotal
 *
 * 查询一个科目阅卷总量 (陈显官)
 *
 * @examCourseId 	考试科目ID-String
 */
exports.MonitorApi_getMarkTotal = function (data, callback) {
	servers.GET({
		url: "/mark/api/monitor/get_mark_total/"+data.examCourseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MonitorApi-getMarkTotal",
		query: {
		}
	}, callback);
};
/** End MonitorApi-getMarkTotal */



/** 
 * Created by ScoreApi-downloadStudentQuestionScores
 *
 * 下载阅卷成绩数据（陈家友) 
 *
 */
exports.ScoreApi_downloadStudentQuestionScores = function (data, callback) {
	servers.POST({
		url: "/mark/api/score/download_student_question_scores",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScoreApi-downloadStudentQuestionScores"
	}, callback);
};
/** End ScoreApi-downloadStudentQuestionScores */



/** 
 * Created by ScannerApi-examPage
 *
 * 查询考试列表 (陈家友) 
 *
 * @examQueryPageDTO 	examQueryPageDTO-Body
 */
exports.ScannerApi_examPage = function (data, callback) {
	servers.POST({
		url: "/mark/api/scanner/exam_page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-examPage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ScannerApi-examPage */



/** 
 * Created by SetupApi-downloadMarkTeachers
 *
 * 下载阅卷教师（陈家友) 
 *
 * @singleCourseId 	单科科目ID-String
 */
exports.SetupApi_downloadMarkTeachers = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/download_mark_teachers/"+data.singleCourseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-downloadMarkTeachers",
		query: {
		}
	}, callback);
};
/** End SetupApi-downloadMarkTeachers */



/** 
 * Created by MarkingApi-getMarkedSpeed
 *
 * 查询阅卷教师评题速度（陈家友) 
 *
 * @examId 	考试ID-String * @markTeacherId 	阅卷教师ID-String
 */
exports.MarkingApi_getMarkedSpeed = function (data, callback) {
	servers.GET({
		url: "/mark/api/marking/marked_speed/"+data.examId+"/"+data.markTeacherId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-getMarkedSpeed",
		query: {
		}
	}, callback);
};
/** End MarkingApi-getMarkedSpeed */



/** 
 * Created by MonitorApi-pageReviewErrorStatistics
 *
 * 分页查询复评误差统计 (陈显官)
 *
 * @pageParamDTO 	pageParamDTO-Body
 */
exports.MonitorApi_pageReviewErrorStatistics = function (data, callback) {
	servers.POST({
		url: "/mark/api/monitor/page_review_error_statistics",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MonitorApi-pageReviewErrorStatistics",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MonitorApi-pageReviewErrorStatistics */



/** 
 * Created by SetupApi-removeMarkTeacher
 *
 * 删除阅卷教师 (陈家友) 
 *
 * @id 	阅卷教师ID-String
 */
exports.SetupApi_removeMarkTeacher = function (data, callback) {
	servers.DELETE({
		url: "/mark/api/setup/mark_teacher/remove/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-removeMarkTeacher",
		query: {
		}
	}, callback);
};
/** End SetupApi-removeMarkTeacher */



/** 
 * Created by SetupApi-createPaperSubjectiveLocation
 *
 * 保存主观题位置数据 (陈家友) 
 *
 * @createdAt 	创建时间-String
 * @createdBy 	创建者-String
 * @updatedAt 	更新时间-String
 * @updatedBy 	更新者-String
 * @delFlag 	删除标记，默认为false，执行delete更新为true-Boolean
 * @id 	ID-String
 * @markUnitId 	阅卷单位ID-String
 * @paperTemplateId 	试卷模板ID-String
 * @volumeType 	试卷类型(AB卷)-String
 * @pageNum 	页码-Number
 * @leftTopX 	左上坐标X-Number
 * @leftTopY 	左上坐标Y-Number
 * @rightBottomX 	右下坐标X-Number
 * @rightBottomY 	右下坐标Y-Number
 * @sort 	同一个阅卷单位包含多个位置时，标识各个位置的展示顺序-Number
 * @isChooseQuestion 	是否选做题：是选做题的时候，只需要扫描结果中选做题题号为该题号的学生试卷-Boolean
 */
exports.SetupApi_createPaperSubjectiveLocation = function (data, callback) {
	servers.POST({
		url: "/mark/api/setup/create_paper_subjective_location",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-createPaperSubjectiveLocation",
		query: {
			createdAt: data.createdAt,
			createdBy: data.createdBy,
			updatedAt: data.updatedAt,
			updatedBy: data.updatedBy,
			delFlag: data.delFlag,
			id: data.id,
			markUnitId: data.markUnitId,
			paperTemplateId: data.paperTemplateId,
			volumeType: data.volumeType,
			pageNum: data.pageNum,
			leftTopX: data.leftTopX,
			leftTopY: data.leftTopY,
			rightBottomX: data.rightBottomX,
			rightBottomY: data.rightBottomY,
			sort: data.sort,
			isChooseQuestion: data.isChooseQuestion
		}
	}, callback);
};
/** End SetupApi-createPaperSubjectiveLocation */



/** 
 * Created by ScannerApi-createPaperTemplate
 *
 * 创建学科试卷模板 (陈家友) #2017-12-08#
 *
 * @webPaperTemplateDTO 	webPaperTemplateDTO-Body
 */
exports.ScannerApi_createPaperTemplate = function (data, callback) {
	servers.POST({
		url: "/mark/api/scanner/create_paper_template",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-createPaperTemplate",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ScannerApi-createPaperTemplate */



/** 
 * Created by ScoreApi-modifyStudentQuestionScores
 *
 * 修改学生主观题成绩数据 (陈家友) 
 *
 * @studentQuestionScoreDTOList 	studentQuestionScoreDTOList-
 */
exports.ScoreApi_modifyStudentQuestionScores = function (data, callback) {
	servers.POST({
		url: "/mark/api/score/student_question_score/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScoreApi-modifyStudentQuestionScores",
		query: {
		}
	}, callback);
};
/** End ScoreApi-modifyStudentQuestionScores */



/** 
 * Created by MarkingApi-listMarkedList
 *
 * 查询教师阅卷回查列表 (陈家友) 
 *
 * @markUnitId 	阅卷单位ID-String * @markTeacherId 	阅卷教师ID-String * @paperType 	试卷类型 0正常卷1仲裁卷2异常卷-
 */
exports.MarkingApi_listMarkedList = function (data, callback) {
	servers.GET({
		url: "/mark/api/marking/marked_list/"+data.markUnitId+"/"+data.markTeacherId+"/"+data.paperType,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-listMarkedList",
		query: {
		}
	}, callback);
};
/** End MarkingApi-listMarkedList */



/** 
 * Created by MarkingApi-getMarkedCount
 *
 * 查询阅卷教师已评数量（陈家友) 
 *
 * @examId 	考试ID-String * @markTeacherId 	阅卷教师ID-String
 */
exports.MarkingApi_getMarkedCount = function (data, callback) {
	servers.GET({
		url: "/mark/api/marking/marked_count/"+data.examId+"/"+data.markTeacherId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-getMarkedCount",
		query: {
		}
	}, callback);
};
/** End MarkingApi-getMarkedCount */



/** 
 * Created by ScannerApi-listPaperObjectiveLocations
 *
 * 查询客观题设置数据 (陈家友) 
 *
 * @paperTemplateId 	试卷模板ID-String
 */
exports.ScannerApi_listPaperObjectiveLocations = function (data, callback) {
	servers.GET({
		url: "/mark/api/scanner/list_paper_objective_locations/"+data.paperTemplateId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-listPaperObjectiveLocations",
		query: {
		}
	}, callback);
};
/** End ScannerApi-listPaperObjectiveLocations */



/** 
 * Created by SetupApi-modifyMarkTeacher
 *
 * 授权阅卷教师角色 (陈家友) 
 *
 * @markTeacherIds 	markTeacherIds-
 */
exports.SetupApi_modifyMarkTeacher = function (data, callback) {
	servers.POST({
		url: "/mark/api/setup/mark_teacher/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-modifyMarkTeacher",
		query: {
		}
	}, callback);
};
/** End SetupApi-modifyMarkTeacher */



/** 
 * Created by MarkingApi-removeMarkUnitRecords
 *
 * 清空题组阅卷数据 (陈家友) 
 *
 * @markUnitIdList 	markUnitIdList-
 */
exports.MarkingApi_removeMarkUnitRecords = function (data, callback) {
	servers.DELETE({
		url: "/mark/api/marking/mark_unit_record/remove",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-removeMarkUnitRecords",
		query: {
		}
	}, callback);
};
/** End MarkingApi-removeMarkUnitRecords */



/** 
 * Created by SetupApi-createMarkUnit
 *
 * 新增题组 (陈家友) 
 *
 * @createdAt 	创建时间-String
 * @createdBy 	创建者-String
 * @updatedAt 	更新时间-String
 * @updatedBy 	更新者-String
 * @delFlag 	删除标记，默认为false，执行delete更新为true-Boolean
 * @id 	ID-String
 * @singleCourseId 	单科科目，主要针对文综、理综类的组合学科-String
 * @paperTemplateId 	试卷模板ID-String
 * @name 	名称-String
 * @totalScore 	总分:此阅卷单位包含的所有题的总满分值-Number
 * @sort 	排序-Number
 */
exports.SetupApi_createMarkUnit = function (data, callback) {
	servers.POST({
		url: "/mark/api/setup/create_mark_unit",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-createMarkUnit",
		query: {
			createdAt: data.createdAt,
			createdBy: data.createdBy,
			updatedAt: data.updatedAt,
			updatedBy: data.updatedBy,
			delFlag: data.delFlag,
			id: data.id,
			singleCourseId: data.singleCourseId,
			paperTemplateId: data.paperTemplateId,
			name: data.name,
			totalScore: data.totalScore,
			sort: data.sort
		}
	}, callback);
};
/** End SetupApi-createMarkUnit */



/** 
 * Created by SetupApi-removeMarkUnit
 *
 * 删除题组 (陈家友) 
 *
 * @id 	题组ID-String
 */
exports.SetupApi_removeMarkUnit = function (data, callback) {
	servers.DELETE({
		url: "/mark/api/setup/mark_unit/remove/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-removeMarkUnit",
		query: {
		}
	}, callback);
};
/** End SetupApi-removeMarkUnit */



/** 
 * Created by ScannerApi-createPaperObjectiveLocation
 *
 * 保存客观题设置数据 (陈家友) #2017-12-08#
 *
 * @paperObjectiveLocationDTO 	paperObjectiveLocationDTO-Body
 */
exports.ScannerApi_createPaperObjectiveLocation = function (data, callback) {
	servers.POST({
		url: "/mark/api/scanner/create_paper_objective_location",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-createPaperObjectiveLocation",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ScannerApi-createPaperObjectiveLocation */



/** 
 * Created by SetupApi-listPaperTemplateAttachments
 *
 * 查询学科AB附件信息（陈家友) 
 *
 * @examCourseId 	科目ID-String
 */
exports.SetupApi_listPaperTemplateAttachments = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/list_paper_template_attachments/"+data.examCourseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-listPaperTemplateAttachments",
		query: {
		}
	}, callback);
};
/** End SetupApi-listPaperTemplateAttachments */



/** 
 * Created by ScannerApi-listCourses
 *
 * 查询考试的科目及扫描上传进度 (陈家友) 
 *
 * @examId 	考试ID-String
 */
exports.ScannerApi_listCourses = function (data, callback) {
	servers.GET({
		url: "/mark/api/scanner/list_courses/"+data.examId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-listCourses",
		query: {
		}
	}, callback);
};
/** End ScannerApi-listCourses */



/** 
 * Created by SetupApi-listMarkTeachers
 *
 * 查询阅卷教师数据（陈家友) 
 *
 * @markUnitId 	阅卷单位ID-String * @roleCode 	角色编码-String
 */
exports.SetupApi_listMarkTeachers = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/list_mark_teachers/"+data.markUnitId+"/"+data.roleCode,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-listMarkTeachers",
		query: {
		}
	}, callback);
};
/** End SetupApi-listMarkTeachers */



/** 
 * Created by MarkingApi-listMarkQuestionRecord
 *
 * 查询教师阅卷成绩 (陈家友) 
 *
 * @markUnitId 	阅卷单位ID-String * @markTeacherId 	阅卷教师ID-String * @secret 	密号-String
 */
exports.MarkingApi_listMarkQuestionRecord = function (data, callback) {
	servers.GET({
		url: "/mark/api/marking/mark_question_record/"+data.markUnitId+"/"+data.markTeacherId+"/"+data.secret,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-listMarkQuestionRecord",
		query: {
		}
	}, callback);
};
/** End MarkingApi-listMarkQuestionRecord */



/** 
 * Created by SetupApi-createMarkQuestionSteps
 *
 * 设置题目步骤分 (陈家友) 
 *
 * @markQuestionStepDTOList 	markQuestionStepDTOList-
 */
exports.SetupApi_createMarkQuestionSteps = function (data, callback) {
	servers.POST({
		url: "/mark/api/setup/create_mark_question_steps",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-createMarkQuestionSteps",
		query: {
		}
	}, callback);
};
/** End SetupApi-createMarkQuestionSteps */



/** 
 * Created by MonitorApi-listSingleCourseStatistics
 *
 * 查询一个考试所有单科的阅卷进度 (陈显官)
 *
 * @examId 	考试ID-String
 */
exports.MonitorApi_listSingleCourseStatistics = function (data, callback) {
	servers.GET({
		url: "/mark/api/monitor/list_single_course_statistics/"+data.examId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MonitorApi-listSingleCourseStatistics",
		query: {
		}
	}, callback);
};
/** End MonitorApi-listSingleCourseStatistics */



/** 
 * Created by ScannerApi-listPaperModules
 *
 * 查询试卷模块数据 (陈家友) 
 *
 * @paperTemplateId 	试卷模板ID-String
 */
exports.ScannerApi_listPaperModules = function (data, callback) {
	servers.GET({
		url: "/mark/api/scanner/list_paper_modules/"+data.paperTemplateId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScannerApi-listPaperModules",
		query: {
		}
	}, callback);
};
/** End ScannerApi-listPaperModules */



/** 
 * Created by SetupApi-removePaperSubjectiveLocation
 *
 * 删除指定主观题位置数据 (陈家友) 
 *
 * @id 	主观题位置ID-String
 */
exports.SetupApi_removePaperSubjectiveLocation = function (data, callback) {
	servers.DELETE({
		url: "/mark/api/setup/paper_subjective_location/remove/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-removePaperSubjectiveLocation",
		query: {
		}
	}, callback);
};
/** End SetupApi-removePaperSubjectiveLocation */



/** 
 * Created by ScoreApi-studentCourseScorePage
 *
 * 查询阅卷成绩数据列表（陈家友) 
 *
 */
exports.ScoreApi_studentCourseScorePage = function (data, callback) {
	servers.POST({
		url: "/mark/api/score/student_course_scores/page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ScoreApi-studentCourseScorePage"
	}, callback);
};
/** End ScoreApi-studentCourseScorePage */



/** 
 * Created by SetupApi-listPaperSubjectiveLocations
 *
 * 查询主观题位置数据（陈家友) 
 *
 * @markUnitId 	阅卷单位ID-String
 */
exports.SetupApi_listPaperSubjectiveLocations = function (data, callback) {
	servers.GET({
		url: "/mark/api/setup/list_paper_subjective_locations/"+data.markUnitId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SetupApi-listPaperSubjectiveLocations",
		query: {
		}
	}, callback);
};
/** End SetupApi-listPaperSubjectiveLocations */



/** 
 * Created by MarkingApi-listMarkTeacherTask
 *
 * 查询阅卷教师任务（陈家友) 
 *
 * @markTeacherId 	阅卷教师ID-String
 */
exports.MarkingApi_listMarkTeacherTask = function (data, callback) {
	servers.GET({
		url: "/mark/api/marking/mark_teacher_task/"+data.markTeacherId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MarkingApi-listMarkTeacherTask",
		query: {
		}
	}, callback);
};
/** End MarkingApi-listMarkTeacherTask */



/** 
 * Created by MonitorApi-pageDoubleDifferStatistics
 *
 * 分页查询双评分差统计 (陈显官)
 *
 * @pageParamDTO 	pageParamDTO-Body
 */
exports.MonitorApi_pageDoubleDifferStatistics = function (data, callback) {
	servers.POST({
		url: "/mark/api/monitor/page_double_differ_statistics",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "MonitorApi-pageDoubleDifferStatistics",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End MonitorApi-pageDoubleDifferStatistics */


