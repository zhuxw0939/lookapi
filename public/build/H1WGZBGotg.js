/**!
 * 成绩分析-swagger v1.0
 * 接口数量 300
 * http://172.16.10.31:3300/api/list?p_id=BJlGbrMstg&v_id=H1WGZBGotg
 *
 * 2017-04-28 18:19:36 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../common/servers');



/** 
 * Created by PlatformClassApi-findNowByTeacher
 *
 * 查询某个老师当前学期所教班级(胡君) #2017-03-23#
 *
 * @teacherId 	老师ID-Number * @tenantId 	租户ID-Number
 */
exports.PlatformClassApi_findNowByTeacher = function (data, callback) {
	servers.GET({
		url: "/platform/api/class/find_now_by_teacher/"+data.teacherId+"/"+data.tenantId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformClassApi-findNowByTeacher",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findNowByTeacher */



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
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "initAccountAppAndRoleUsingPUT",
		query: {
			tenantid: data.tenantid
		}
	}, callback);
};
/** End initAccountAppAndRoleUsingPUT */



/** 
 * Created by ExamCommonApi-findByTimeAndCount
 *
 * 通过一个时间来查询学期(向发钧) #2017-03-09#
 *
 * @tenantId 	租户ID-Number * @count 	数量-Number * @time 	时间-Number
 */
exports.ExamCommonApi_findByTimeAndCount = function (data, callback) {
	servers.GET({
		url: "/platform/api/common/find_time/"+data.tenantId+"/"+data.count+"/"+data.time,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findByTimeAndCount",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findByTimeAndCount */



/** 
 * Created by OrganizationApi-listSchoolFirstWords
 *
 * 查询一个区县学校首字母列表 (陈显官) #2017-03-31#
 *
 * @countyId 	区县ID-Number
 * @phase 	学段，为空时查询所有学段-Number
 */
exports.OrganizationApi_listSchoolFirstWords = function (data, callback) {
	servers.GET({
		url: "/platform/api/organization/list_school_first_words",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listSchoolFirstWords",
		query: {
			countyId: data.countyId,
			phase: data.phase
		}
	}, callback);
};
/** End OrganizationApi-listSchoolFirstWords */



/** 
 * Created by OrganizationApi-listCountyAndSchoolsByOrgAndPhase
 *
 * 查询一个市级的组织机构ID和学段查询区县和学校(郑强) #2017-04-10#
 *
 * @orgId 	市级组织机构ID-Number * @phase 	学段-Number
 */
exports.OrganizationApi_listCountyAndSchoolsByOrgAndPhase = function (data, callback) {
	servers.GET({
		url: "/platform/api/organization/list_county_and_schools/"+data.orgId+"/"+data.phase,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listCountyAndSchoolsByOrgAndPhase",
		query: {
		}
	}, callback);
};
/** End OrganizationApi-listCountyAndSchoolsByOrgAndPhase */



/** 
 * Created by AnalysisStudentApi-exportStudentQuestionRatio
 *
 * 学生考试成绩概况学生小题得分率分析Excel导出 #2017-03-20#
 *
 * @param 	学生小题得分率参数对象-Body
 */
exports.AnalysisStudentApi_exportStudentQuestionRatio = function (data, callback) {
	servers.POST({
		url: "/api/student/export_student_question_ratio",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-exportStudentQuestionRatio",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-exportStudentQuestionRatio */



/** 
 * Created by AnalysisRegionApi-exportConsolidation
 *
 * 学区、乡镇、学校人员巩固率分析Excel导出 #2017-03-15#
 *
 * @param 	人员巩固率分析参数列表-Body
 */
exports.AnalysisRegionApi_exportConsolidation = function (data, callback) {
	servers.POST({
		url: "/analysis/api/region/export_consolidation",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-exportConsolidation",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionApi-exportConsolidation */



/** 
 * Created by AnalysisRegionPaperApi-findClassQuestion
 *
 * 试卷小题分析 #2017-04-05#
 *
 * @examCourseId 	考试科目ID-String * @regionId 	区域ID-String
 */
exports.AnalysisRegionPaperApi_findClassQuestion = function (data, callback) {
	servers.GET({
		url: "/api/region-paper/find_question/"+data.examCourseId+"/"+data.regionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findClassQuestion",
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findClassQuestion */



/** 
 * Created by PlatformAccountApi-findCurrentRole_1
 *
 * 查询当前用户角色信息列表(郑强) #2017-04-25#
 *
 */
exports.PlatformAccountApi_findCurrentRole_1 = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/find_current_roles",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformAccountApi-findCurrentRole_1"
	}, callback);
};
/** End PlatformAccountApi-findCurrentRole_1 */



/** 
 * Created by AnalysisMobileTargetApi-countClassTargets
 *
 * 目标参照列表统计 #2017-04-25#
 *
 * @params 	参数-Body
 */
exports.AnalysisMobileTargetApi_countClassTargets = function (data, callback) {
	servers.POST({
		url: "/api/target/count_class_targets",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTargetApi-countClassTargets",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileTargetApi-countClassTargets */



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
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getUserAppRolesUsingGET",
		query: {
		}
	}, callback);
};
/** End getUserAppRolesUsingGET */



/** 
 * Created by AnalysisMobileClassApi-findExamTotal
 *
 * 班级-总分平均分、（平均分/分数线）上线人数 #2017-04-26#
 *
 * @examId 	考试Id-String
 * @classId 	班级Id-String
 */
exports.AnalysisMobileClassApi_findExamTotal = function (data, callback) {
	servers.GET({
		url: "/analysis/api/mobile/class/find_exam_total",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileClassApi-findExamTotal",
		query: {
			examId: data.examId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisMobileClassApi-findExamTotal */



/** 
 * Created by AnalysisClassApi-exportClassAverage
 *
 * 班级-平均分分析Excel导出 #2017-04-17#
 *
 * @param 	班级平均分参数列表-Body
 */
exports.AnalysisClassApi_exportClassAverage = function (data, callback) {
	servers.POST({
		url: "/api/class/export_class_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-exportClassAverage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisClassApi-exportClassAverage */



/** 
 * Created by AnalysisPaperApi-exportClassQuestion
 *
 * 导出试卷小题分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_exportClassQuestion = function (data, callback) {
	servers.POST({
		url: "/api/paper/export_class_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportClassQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportClassQuestion */



/** 
 * Created by ExamCommonApi-listPlatformTerms
 *
 * 通过租户ID查询学期 (向发钧) #2017-03-09#
 *
 * @tenantId 	租户唯一ID-Number
 */
exports.ExamCommonApi_listPlatformTerms = function (data, callback) {
	servers.GET({
		url: "/platform/api/common/list_platform_terms/"+data.tenantId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-listPlatformTerms",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-listPlatformTerms */



/** 
 * Created by AnalysisMobileStudentApi-findTrend
 *
 * 学生-两个学生全校排名走势（孟加鑫） #2017-04-05#
 *
 * @studentIds 	学生Id集合-
 */
exports.AnalysisMobileStudentApi_findTrend = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/student/find_trend",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findTrend",
		query: {
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findTrend */



/** 
 * Created by AnalysisExcellentApi-findStudents
 *
 * 学校特优生列表查询 #2017-04-06#
 *
 * @params 	查询参数-Body
 */
exports.AnalysisExcellentApi_findStudents = function (data, callback) {
	servers.POST({
		url: "/api/excellent/find_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-findStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-findStudents */



/** 
 * Created by PlatformClassApi-findByTeacher
 *
 * 查询某个老师某个学期所教班级(胡君) #2017-03-15#
 *
 * @teacherId 	老师ID-Number * @termId 	学期ID-Number
 */
exports.PlatformClassApi_findByTeacher = function (data, callback) {
	servers.GET({
		url: "/platform/api/class/find_by_teacher/"+data.teacherId+"/"+data.termId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformClassApi-findByTeacher",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findByTeacher */



/** 
 * Created by AnalysisExcellentApi-exportStudents
 *
 * 导出学校特优生列表 #2017-03-16#
 *
 * @params 	查询参数-Body
 */
exports.AnalysisExcellentApi_exportStudents = function (data, callback) {
	servers.POST({
		url: "/api/excellent/export_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-exportStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-exportStudents */



/** 
 * Created by AnalysisMobileStudentApi-findExamCompare
 *
 * 学生-多次考试对比 #2017-04-17#
 *
 * @param 	参数列表-Body
 */
exports.AnalysisMobileStudentApi_findExamCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/student/find_exam_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findExamCompare",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findExamCompare */



/** 
 * Created by AnalysisMobileTargetApi-findClassTargets
 *
 * 目标参照列表 #2017-03-22#
 *
 * @examId 	考试id-String
 * @classId 	班级id-String
 * @examCourseId 	考试科目id-String
 */
exports.AnalysisMobileTargetApi_findClassTargets = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/target/find_class_targets",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTargetApi-findClassTargets",
		query: {
			examId: data.examId,
			classId: data.classId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End AnalysisMobileTargetApi-findClassTargets */



/** 
 * Created by AnalysisTeacherApi-exportAnalysisTeachers
 *
 * 任课教师分析 #2017-04-05#
 *
 * @param 	任课教师参数对象-Body
 */
exports.AnalysisTeacherApi_exportAnalysisTeachers = function (data, callback) {
	servers.POST({
		url: "/api/teacher/export_analysis_teachers",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisTeacherApi-exportAnalysisTeachers",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisTeacherApi-exportAnalysisTeachers */



/** 
 * Created by AnalysisMobileTeacherApi-findTeacherClassList
 *
 * 任课老师-任课老师所教班级详情列表 #2017-04-24#
 *
 * @examId 	考试Id-String
 * @teacherId 	老师Id-String
 */
exports.AnalysisMobileTeacherApi_findTeacherClassList = function (data, callback) {
	servers.GET({
		url: "/analysis/api/mobile/teacher/find_teacher_class_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTeacherApi-findTeacherClassList",
		query: {
			examId: data.examId,
			teacherId: data.teacherId
		}
	}, callback);
};
/** End AnalysisMobileTeacherApi-findTeacherClassList */



/** 
 * Created by AnalysisRegionPaperApi-exportRegionPoint
 *
 * 导出试卷知识点分析 #2017-04-05#
 *
 * @examCourseId 	考试科目ID-String * @regionId 	区域ID-String
 */
exports.AnalysisRegionPaperApi_exportRegionPoint = function (data, callback) {
	servers.GET({
		url: "/api/region-paper/export_region_point/"+data.examCourseId+"/"+data.regionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportRegionPoint",
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportRegionPoint */



/** 
 * Created by ExamScoreLineApi-downloadTemplate
 *
 * 下载分数线Excel导入模板,返回下载地址URI (郑强) #2017-03-17#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/api/setting-score-line/download_template/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-downloadTemplate",
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-downloadTemplate */



/** 
 * Created by AnalysisRegionPaperApi-findRegionPoint
 *
 * 试卷知识点分析 #2017-04-05#
 *
 * @examCourseId 	考试科目ID-String * @regionId 	区域ID-String
 */
exports.AnalysisRegionPaperApi_findRegionPoint = function (data, callback) {
	servers.GET({
		url: "/api/region-paper/find_region_point/"+data.examCourseId+"/"+data.regionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findRegionPoint",
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findRegionPoint */



/** 
 * Created by AnalysisSchoolApi-findProminent
 *
 * 学校-优生统计 #2017-04-05#
 *
 * @param 	优生统计参数列表-Body
 */
exports.AnalysisSchoolApi_findProminent = function (data, callback) {
	servers.POST({
		url: "/api/school/find_prominent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-findProminent",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-findProminent */



/** 
 * Created by ExamTargetSettingApi-save
 *
 * 成绩分析设置 - 目标参照设置创建（龚德志) #2017-03-03#
 *
 * @classTargetTable 	参照目标集合-Body
 */
exports.ExamTargetSettingApi_save = function (data, callback) {
	servers.POST({
		url: "/exam/api/target/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-save",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamTargetSettingApi-save */



/** 
 * Created by AnalysisMobileStudentApi-findStudentQuestion
 *
 * 学生试卷小题分析(刘世平) #2017-03-23#
 *
 * @classId 	班级id-String
 * @studentId 	学生id-String
 * @examCourseId 	考试科目id-String
 */
exports.AnalysisMobileStudentApi_findStudentQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/student/find_student_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findStudentQuestion",
		query: {
			classId: data.classId,
			studentId: data.studentId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findStudentQuestion */



/** 
 * Created by ExamExcellentApi-find
 *
 * 成绩分析设置 - 特优生筛选线查询（龚德志) #2017-04-14#
 *
 * @examId 	考试ID-String * @orgId 	当前机构ID-String
 */
exports.ExamExcellentApi_find = function (data, callback) {
	servers.GET({
		url: "/exam/api/setting-excellent/show/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamExcellentApi-find",
		query: {
			orgId: data.orgId
		}
	}, callback);
};
/** End ExamExcellentApi-find */



/** 
 * Created by AnalysisClassApi-findClassAverage
 *
 * 班级-平均分分析 #2017-04-17#
 *
 * @param 	班级平均分参数列表-Body
 */
exports.AnalysisClassApi_findClassAverage = function (data, callback) {
	servers.POST({
		url: "/api/class/find_class_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassAverage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassAverage */



/** 
 * Created by AnalysisClassApi-findClassCompare
 *
 * 班级-对比成绩分析 #2017-03-24#
 *
 * @param 	班级-对比成绩参数列表-Body
 */
exports.AnalysisClassApi_findClassCompare = function (data, callback) {
	servers.POST({
		url: "/api/class/find_class_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassCompare",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassCompare */



/** 
 * Created by ExamSettingExportApi-export
 *
 * 根据考试ID导出分析设置内容 (郑强) #2017-04-13#
 *
 * @examId 	考试ID-String
 */
exports.ExamSettingExportApi_export = function (data, callback) {
	servers.GET({
		url: "/exam/api/setting-export/export/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSettingExportApi-export",
		query: {
		}
	}, callback);
};
/** End ExamSettingExportApi-export */



/** 
 * Created by ExamScoreLineApi-validate
 *
 * 验证分数线列表数据 (郑强) #2017-03-18#
 *
 * @scoreLineList 	分数线列表数据-Body
 */
exports.ExamScoreLineApi_validate = function (data, callback) {
	servers.POST({
		url: "/api/setting-score-line/validate",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-validate",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-validate */



/** 
 * Created by ExamQueryApi-isCalculateOver
 *
 * 查询成绩计算是否完成 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_isCalculateOver = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/is_calculate_over/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-isCalculateOver",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-isCalculateOver */



/** 
 * Created by AnalysisMobileTouchLineApi-exportStudents
 *
 * 导出踩线生列表 #2017-03-16#
 *
 * @params 	查询参数-Body
 */
exports.AnalysisMobileTouchLineApi_exportStudents = function (data, callback) {
	servers.POST({
		url: "/api/touch-line/export_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-exportStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-exportStudents */



/** 
 * Created by AnalysisMobileExcellentApi-findHistoryExcellents
 *
 * 历次考试特优生列表
 *
 * @params 	查询参数-Body
 */
exports.AnalysisMobileExcellentApi_findHistoryExcellents = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/excellent/find_history_excellents",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileExcellentApi-findHistoryExcellents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileExcellentApi-findHistoryExcellents */



/** 
 * Created by AnalysisMobileTouchLineApi-findByRegion
 *
 * 区县踩线生列表 #2017-03-10#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisMobileTouchLineApi_findByRegion = function (data, callback) {
	servers.POST({
		url: "/api/touch-line/find_by_region",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-findByRegion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-findByRegion */



/** 
 * Created by ExamQueryApi-getCurrentExamLevels
 *
 * 查询当前角色可使用的考试级别 (陈显官) #2017-03-16#
 *
 */
exports.ExamQueryApi_getCurrentExamLevels = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/get_current_exam_levels",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-getCurrentExamLevels"
	}, callback);
};
/** End ExamQueryApi-getCurrentExamLevels */



/** 
 * Created by AnalysisClassApi-findClassScoreLine
 *
 * 班级-分数线分析 #2017-04-17#
 *
 * @param 	班级分数线参数列表-Body
 */
exports.AnalysisClassApi_findClassScoreLine = function (data, callback) {
	servers.POST({
		url: "/api/class/find_class_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassScoreLine",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassScoreLine */



/** 
 * Created by ExamExcellentApi-save
 *
 * 成绩分析设置 - 特优生筛选线设置（龚德志) #2017-03-03#
 *
 * @excellentLineList 	特优生筛选线-
 */
exports.ExamExcellentApi_save = function (data, callback) {
	servers.POST({
		url: "/exam/api/setting-excellent/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamExcellentApi-save",
		query: {
		}
	}, callback);
};
/** End ExamExcellentApi-save */



/** 
 * Created by AnalysisMobileTouchLineApi-findStudents
 *
 * 踩线生列表查询 #2017-03-10#
 *
 * @params 	查询参数-Body
 */
exports.AnalysisMobileTouchLineApi_findStudents = function (data, callback) {
	servers.POST({
		url: "/api/touch-line/find_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-findStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-findStudents */



/** 
 * Created by AnalysisExcellentApi-saveExcellent
 *
 * 保存特优生 #2017-03-18#
 *
 * @students 	特优生-Body
 */
exports.AnalysisExcellentApi_saveExcellent = function (data, callback) {
	servers.POST({
		url: "/api/excellent/save_excellent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-saveExcellent",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-saveExcellent */



/** 
 * Created by ExamSchoolDistrictApi-modifyByCreate
 *
 * 修改学区 (陈显官) #2017-03-10#
 *
 * @modifyDto 	待修改的学区信息-Body
 */
exports.ExamSchoolDistrictApi_modifyByCreate = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-district/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-modifyByCreate",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-modifyByCreate */



/** 
 * Created by ExamQuestionApi-importData
 *
 * 上传双向细目表Excel数据 (郑强) #2017-03-20#
 *
 * @importData 	双向细目表导入数据-Body
 */
exports.ExamQuestionApi_importData = function (data, callback) {
	servers.POST({
		url: "/api/question/import_data",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-importData */



/** 
 * Created by AnalysisPaperApi-findClassAbility_1
 *
 * 能力层次分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findClassAbility_1 = function (data, callback) {
	servers.POST({
		url: "/api/paper/find_class_ability",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassAbility_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassAbility_1 */



/** 
 * Created by ExamTownApi-listSchoolsPinyin
 *
 * 查询当前区县学校列表 (陈显官) #2017-04-11#
 *
 * @phases 	将要查询的多个学段-Body
 */
exports.ExamTownApi_listSchoolsPinyin = function (data, callback) {
	servers.POST({
		url: "/exam/api/town/list_schools_pinyin",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-listSchoolsPinyin",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamTownApi-listSchoolsPinyin */



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
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "refreshTokenUsingGET",
		query: {
			roleId: data.roleId,
			appId: data.appId
		}
	}, callback);
};
/** End refreshTokenUsingGET */



/** 
 * Created by OrganizationApi-listWordAndSchools
 *
 * 查询一个区县（学校首字母--学校列表） (陈显官) #2017-03-31#
 *
 * @countyId 	区县ID-Number
 * @phase 	学段，为空时查询所有学段-Number
 */
exports.OrganizationApi_listWordAndSchools = function (data, callback) {
	servers.GET({
		url: "/platform/api/organization/list_word_and_schools",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listWordAndSchools",
		query: {
			countyId: data.countyId,
			phase: data.phase
		}
	}, callback);
};
/** End OrganizationApi-listWordAndSchools */



/** 
 * Created by ExamCommonApi-findClassSubjects_1
 *
 * 根据老师ID查询当前学期老师所教科目(向发钧) #2017-03-14#
 *
 * @teacherId 	老师ID-Number * @tenantId 	租户ID-Number
 */
exports.ExamCommonApi_findClassSubjects_1 = function (data, callback) {
	servers.GET({
		url: "/platform/api/common/list_teacher_subjects/"+data.teacherId+"/"+data.tenantId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findClassSubjects_1",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findClassSubjects_1 */



/** 
 * Created by getUserAppUsingPOST
 *
 * 获取用户拥有的系统（龚德志） #2017-03-13#
 *
 */
exports.getUserAppUsingPOST = function (data, callback) {
	servers.POST({
		url: "/uic/api/app/get-userapp",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getUserAppUsingPOST"
	}, callback);
};
/** End getUserAppUsingPOST */



/** 
 * Created by AnalysisRegionPaperApi-findChoiceQuestion
 *
 * 选择题答案分布分析 #2017-04-05#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_findChoiceQuestion = function (data, callback) {
	servers.POST({
		url: "/api/region-paper/find_choice_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findChoiceQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findChoiceQuestion */



/** 
 * Created by AnalysisStudentApi-exportStudents
 *
 * 学生分析Excel导出 #2017-04-18#
 *
 * @param 	学生分析参数列表-Body
 */
exports.AnalysisStudentApi_exportStudents = function (data, callback) {
	servers.POST({
		url: "/api/student/export_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-exportStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-exportStudents */



/** 
 * Created by PlatformLevelApi-listPlatformSubjectLevels
 *
 * 根据学科ID查询能力层次(向发钧) #2017-03-09#
 *
 * @subjectId 	学科ID-Number
 */
exports.PlatformLevelApi_listPlatformSubjectLevels = function (data, callback) {
	servers.GET({
		url: "/platform/api/level/list_platform_levels/"+data.subjectId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformLevelApi-listPlatformSubjectLevels",
		query: {
		}
	}, callback);
};
/** End PlatformLevelApi-listPlatformSubjectLevels */



/** 
 * Created by AnalysisTeacherApi-findAnalysisTeachers
 *
 * 任课教师分析 #2017-04-05#
 *
 * @param 	任课教师参数对象-Body
 */
exports.AnalysisTeacherApi_findAnalysisTeachers = function (data, callback) {
	servers.POST({
		url: "/api/teacher/find_analysis_teachers",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisTeacherApi-findAnalysisTeachers",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisTeacherApi-findAnalysisTeachers */



/** 
 * Created by PlatformClassApi-findCurrentClass
 *
 * 查询当前用户的班级信息，学生端APP(胡君) #2017-03-09#
 *
 */
exports.PlatformClassApi_findCurrentClass = function (data, callback) {
	servers.GET({
		url: "/platform/api/class/find_current_class",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformClassApi-findCurrentClass"
	}, callback);
};
/** End PlatformClassApi-findCurrentClass */



/** 
 * Created by AnalysisMobileSchoolApi-findExamList
 *
 * 学校-考试列表 #2017-04-12#
 *
 * @param 	参数列表-Body
 */
exports.AnalysisMobileSchoolApi_findExamList = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/school/find_exam_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileSchoolApi-findExamList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileSchoolApi-findExamList */



/** 
 * Created by AnalysisClassApi-exportClassSection
 *
 * 班级-分数段分析Excel导出 #2017-04-17#
 *
 * @param 	班级-分数段分析参数列表-Body
 */
exports.AnalysisClassApi_exportClassSection = function (data, callback) {
	servers.POST({
		url: "/api/class/export_class_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-exportClassSection",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisClassApi-exportClassSection */



/** 
 * Created by AnalysisSchoolApi-findScoreLine
 *
 * 区县、学区、乡镇、学校分数线分析 #2017-04-13#
 *
 * @param 	分数线分析参数列表-Body
 */
exports.AnalysisSchoolApi_findScoreLine = function (data, callback) {
	servers.POST({
		url: "/api/school/find_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-findScoreLine",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-findScoreLine */



/** 
 * Created by ExamScoreLineApi-completeEdit
 *
 * 根据考试ID查询双向细目表是否已经全部编辑完成 (郑强) #2017-04-12#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_completeEdit = function (data, callback) {
	servers.GET({
		url: "/api/question/complete_edit/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-completeEdit",
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-completeEdit */



/** 
 * Created by ExamSXTApi-pagExamsByClass
 *
 * 分页查询多个班级的考试 (陈显官) #2017-04-25#
 *
 * @classIds 	多个云平台班级ID-
 * @pageNumber 	第几页，从1开始-Number
 * @pageSize 	每一页的数量-Number
 * @isJustPublish 	是否只查询发布的，默认false，查询所有考试-Boolean
 */
exports.ExamSXTApi_pagExamsByClass = function (data, callback) {
	servers.POST({
		url: "/exam/api/sxt-back/page_exams_by_class",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSXTApi-pagExamsByClass",
		query: {
			classIds: data.classIds,
			pageNumber: data.pageNumber,
			pageSize: data.pageSize,
			isJustPublish: data.isJustPublish
		}
	}, callback);
};
/** End ExamSXTApi-pagExamsByClass */



/** 
 * Created by ExamStudentImportApi-taskHandlerLocalFile
 *
 * 仅限测试 导入准考证 (龚德志) #2017-03-17# 
 *
 * @importStudent 	本地准考证文件信息-Body
 */
exports.ExamStudentImportApi_taskHandlerLocalFile = function (data, callback) {
	servers.POST({
		url: "/exam/api/examstudent/import_data/localfile",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-taskHandlerLocalFile",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamStudentImportApi-taskHandlerLocalFile */



/** 
 * Created by AnalysisBrotherSchoolApi-exportExtendStudent
 *
 * 导出兄弟学校有效上线优生对比 #2017-03-16#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_exportExtendStudent = function (data, callback) {
	servers.GET({
		url: "/api/brother-school/export_extend_students/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-exportExtendStudent",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-exportExtendStudent */



/** 
 * Created by AnalysisMobileStudentApi-findStudentAbility
 *
 * 学生能力层次分析(刘世平) #2017-03-23#
 *
 * @classId 	班级id-String
 * @studentId 	学生id-String
 * @examCourseId 	考试科目id-String
 */
exports.AnalysisMobileStudentApi_findStudentAbility = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/student/find_student_ability",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findStudentAbility",
		query: {
			classId: data.classId,
			studentId: data.studentId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findStudentAbility */



/** 
 * Created by ExamTownApi-page
 *
 * 查询当前区县乡镇分页列表 (陈显官) #2017-03-10#
 *
 * @pageDto 	pageDto-Body
 */
exports.ExamTownApi_page = function (data, callback) {
	servers.POST({
		url: "/exam/api/town/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-page",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamTownApi-page */



/** 
 * Created by ExamScoreImportApi-submitHeaders
 *
 * 导入成绩时提交缺失表头的对应数据 (陈显官) #2017-03-22#
 *
 * @headersDTO 	headersDTO-Body
 */
exports.ExamScoreImportApi_submitHeaders = function (data, callback) {
	servers.POST({
		url: "/exam/api/score-import/submit_headers",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-submitHeaders",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamScoreImportApi-submitHeaders */



/** 
 * Created by PlatformGradeApi-findBySchoolAndPhase
 *
 * 查询某学校某学段所有年级 (陈显官) #2017-03-31#
 *
 * @schoolId 	学校ID-Number * @phase 	学段-Number
 */
exports.PlatformGradeApi_findBySchoolAndPhase = function (data, callback) {
	servers.GET({
		url: "/platform/api/grade/find_by_school/"+data.schoolId+"/"+data.phase,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformGradeApi-findBySchoolAndPhase",
		query: {
		}
	}, callback);
};
/** End PlatformGradeApi-findBySchoolAndPhase */



/** 
 * Created by OrganizationApi-listChildren
 *
 * 查询一个机构的子机构列表(胡君) #2017-03-09#
 *
 * @orgId 	组织机构ID-Number
 */
exports.OrganizationApi_listChildren = function (data, callback) {
	servers.GET({
		url: "/platform/api/organization/list_children/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listChildren",
		query: {
		}
	}, callback);
};
/** End OrganizationApi-listChildren */



/** 
 * Created by ExamPaperSplitApi-tempSave
 *
 * 临时保存分卷设置 (郑强) #2017-04-21#
 *
 * @splitList 	考试计算规则列表数据-Body
 */
exports.ExamPaperSplitApi_tempSave = function (data, callback) {
	servers.POST({
		url: "/api/setting-paper-split/temp_save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-tempSave",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-tempSave */



/** 
 * Created by OrganizationApi-listBrotherSchools
 *
 * 根据学校ID和学段查询兄弟学校(郑强) #2017-04-21#
 *
 * @schoolOrgId 	学校ID-Number * @phase 	学段-Number
 */
exports.OrganizationApi_listBrotherSchools = function (data, callback) {
	servers.GET({
		url: "/platform/api/organization/list_brother_schools/"+data.schoolOrgId+"/"+data.phase,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listBrotherSchools",
		query: {
		}
	}, callback);
};
/** End OrganizationApi-listBrotherSchools */



/** 
 * Created by PlatformGradeApi-findBySchool_1
 *
 * 查询某学生所有学期 (陈显官) #2017-03-31#
 *
 * @accountId 	学生账号ID-Number
 */
exports.PlatformGradeApi_findBySchool_1 = function (data, callback) {
	servers.GET({
		url: "/platform/api/term/find_by_student/"+data.accountId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformGradeApi-findBySchool_1",
		query: {
		}
	}, callback);
};
/** End PlatformGradeApi-findBySchool_1 */



/** 
 * Created by ExamTargetSettingApi-importDataOssFile
 *
 * 成绩分析设置 - 目标参照Excel上传（龚德志) #2017-03-09#
 *
 * @classTargets 	目标设置数据-Body
 */
exports.ExamTargetSettingApi_importDataOssFile = function (data, callback) {
	servers.POST({
		url: "/exam/api/target/import-oss",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-importDataOssFile",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamTargetSettingApi-importDataOssFile */



/** 
 * Created by updateAccountUsingPUT
 *
 * 更新用户信息（龚德志) #2017-04-1#
 *
 * @accountId 	用户账号ID-Number
 */
exports.updateAccountUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/uic/api/user-auth-notify/account",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "updateAccountUsingPUT",
		query: {
		}
	}, callback);
};
/** End updateAccountUsingPUT */



/** 
 * Created by ExamScoreLineApi-getLineTypeByExam
 *
 * 根据考试ID查询该考试设置的分数线类型 (郑强) #2017-03-31#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_getLineTypeByExam = function (data, callback) {
	servers.GET({
		url: "/api/setting-score-line/get_line_type/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-getLineTypeByExam",
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-getLineTypeByExam */



/** 
 * Created by ExamCommonApi-findByTenantIdAndPhase
 *
 * 根据租户ID和学段查询所有学科(向发钧) #2017-03-09#
 *
 * @tenantId 	租户ID-Number * @phase 	学段-Number
 */
exports.ExamCommonApi_findByTenantIdAndPhase = function (data, callback) {
	servers.GET({
		url: "/platform/api/common/list_subjects/"+data.tenantId+"/"+data.phase,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findByTenantIdAndPhase",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findByTenantIdAndPhase */



/** 
 * Created by PlatformPointApi-searchPlatformSubjectPoints
 *
 * 根据学科ID，知识点搜索内容查询知识点数据 (郑强) #2017-04-11#
 *
 * @subjectId 	学科ID-Number * @searchWord 	搜索关键字-String
 */
exports.PlatformPointApi_searchPlatformSubjectPoints = function (data, callback) {
	servers.POST({
		url: "/platform/api/point/search_platform_points/"+data.subjectId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformPointApi-searchPlatformSubjectPoints",
		query: {
		}
	}, callback);
};
/** End PlatformPointApi-searchPlatformSubjectPoints */



/** 
 * Created by PlatformClassApi-findBySchool
 *
 * 查询某学校某市级年级所有班级(胡君) #2017-03-09#
 *
 * @schoolId 	学校ID-Number * @gradeId 	年级ID-Number
 */
exports.PlatformClassApi_findBySchool = function (data, callback) {
	servers.GET({
		url: "/platform/api/class/find_by_school/"+data.schoolId+"/"+data.gradeId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformClassApi-findBySchool",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findBySchool */



/** 
 * Created by AnalysisStudentApi-exportStudentPointRatio
 *
 * 学生考试成绩概况学生知识点得分率Excel导出 #2017-04-07#
 *
 * @param 	学生知识点得分率参数列表-Body
 */
exports.AnalysisStudentApi_exportStudentPointRatio = function (data, callback) {
	servers.POST({
		url: "/api/student/export_student_point_ratio",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-exportStudentPointRatio",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-exportStudentPointRatio */



/** 
 * Created by ExamCommonApi-listPhaseGrades
 *
 * 查询一个租户下某一个学段的市级年级(向发钧) #2017-03-09#
 *
 * @tenantId 	租户唯一ID-Number
 * @phase 	学段-Number
 */
exports.ExamCommonApi_listPhaseGrades = function (data, callback) {
	servers.GET({
		url: "/platform/api/common/list_phase_grades",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-listPhaseGrades",
		query: {
			tenantId: data.tenantId,
			phase: data.phase
		}
	}, callback);
};
/** End ExamCommonApi-listPhaseGrades */



/** 
 * Created by PlatformGradeApi-findBySchoolGradeLeader
 *
 * 查询某年级主任管理的所有年级 (陈显官) #2017-03-31#
 *
 * @accountId 	年级组长账号ID-Number
 */
exports.PlatformGradeApi_findBySchoolGradeLeader = function (data, callback) {
	servers.GET({
		url: "/platform/api/grade/find_by_school_grade_leader/"+data.accountId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformGradeApi-findBySchoolGradeLeader",
		query: {
		}
	}, callback);
};
/** End PlatformGradeApi-findBySchoolGradeLeader */



/** 
 * Created by AnalysisPaperApi-findSplitPaper
 *
 * 试卷主客观、分卷分析 #2017-03-10#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisPaperApi_findSplitPaper = function (data, callback) {
	servers.POST({
		url: "/api/paper/find_split_paper",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findSplitPaper",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findSplitPaper */



/** 
 * Created by AnalysisMobileStudentApi-findRankByExamId
 *
 * 生学堂-获取用户的一次考试成绩排位（孟加鑫） #2017-03-27#
 *
 * @examId 	考试Id-String
 * @accountId 	用户Id-String
 */
exports.AnalysisMobileStudentApi_findRankByExamId = function (data, callback) {
	servers.GET({
		url: "/analysis/api/mobile/student/find_rank_by_exam_id",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findRankByExamId",
		query: {
			examId: data.examId,
			accountId: data.accountId
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findRankByExamId */



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
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "loginUsingPOST",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End loginUsingPOST */



/** 
 * Created by ExamSchoolGroupApi-page
 *
 * 查询当前区县学校分类分页列表 (陈显官) #2017-03-10#
 *
 * @pageDto 	pageDto-Body
 */
exports.ExamSchoolGroupApi_page = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-group/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-page",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamSchoolGroupApi-page */



/** 
 * Created by PlatformGradeApi-findBySchool
 *
 * 查询某学校所有年级 (陈显官) #2017-03-31#
 *
 * @schoolId 	学校ID-Number
 */
exports.PlatformGradeApi_findBySchool = function (data, callback) {
	servers.GET({
		url: "/platform/api/grade/find_by_school/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformGradeApi-findBySchool",
		query: {
		}
	}, callback);
};
/** End PlatformGradeApi-findBySchool */



/** 
 * Created by OrganizationApi-findCurrentOrg
 *
 * 查询当前用户的组织机构(胡君) #2017-03-14#
 *
 */
exports.OrganizationApi_findCurrentOrg = function (data, callback) {
	servers.GET({
		url: "/platform/api/organization/find_current_org",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-findCurrentOrg"
	}, callback);
};
/** End OrganizationApi-findCurrentOrg */



/** 
 * Created by AnalysisClassApi-exportClassScoreLine
 *
 * 班级-分数线分析Excel导出 #2017-04-17#
 *
 * @param 	班级分数线参数列表-Body
 */
exports.AnalysisClassApi_exportClassScoreLine = function (data, callback) {
	servers.POST({
		url: "/api/class/export_class_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-exportClassScoreLine",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisClassApi-exportClassScoreLine */



/** 
 * Created by AnalysisPaperApi-exportSelectionQuestion
 *
 * 导出试卷选考题分析 #2017-03-17#
 *
 * @schoolId 	学校ID-String * @examCourseId 	考试科目ID-String * @classId 	班级ID-String
 */
exports.AnalysisPaperApi_exportSelectionQuestion = function (data, callback) {
	servers.GET({
		url: "/api/paper/export_selection_question/"+data.schoolId+"/"+data.examCourseId+"/"+data.classId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportSelectionQuestion",
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportSelectionQuestion */



/** 
 * Created by AnalysisStudentApi-findStudentPointRatio
 *
 * 学生考试成绩概况学生知识点得分率 #2017-04-07#
 *
 * @param 	学生知识点得分率参数列表-Body
 */
exports.AnalysisStudentApi_findStudentPointRatio = function (data, callback) {
	servers.POST({
		url: "/api/student/find_student_point_ratio",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentPointRatio",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentPointRatio */



/** 
 * Created by AnalysisSchoolApi-exportProminent
 *
 * 学校-优生统计Excel导出 #2017-04-05#
 *
 * @param 	优生统计参数列表-Body
 */
exports.AnalysisSchoolApi_exportProminent = function (data, callback) {
	servers.POST({
		url: "/api/school/export_prominent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-exportProminent",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-exportProminent */



/** 
 * Created by AnalysisExamCompareApi-findExamCompare
 *
 * 历次考试对比 #2017-04-26#
 *
 * @param 	历次考试对比参数列表-Body
 */
exports.AnalysisExamCompareApi_findExamCompare = function (data, callback) {
	servers.POST({
		url: "/api/exam-compare/find_exam_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExamCompareApi-findExamCompare",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisExamCompareApi-findExamCompare */



/** 
 * Created by AnalysisRegionPaperApi-findSelectionQuestion
 *
 * 试卷选考题分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_findSelectionQuestion = function (data, callback) {
	servers.POST({
		url: "/api/region-paper/find_selection_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findSelectionQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findSelectionQuestion */



/** 
 * Created by AnalysisClassApi-findClassExamTrend
 *
 * 班级-成绩走势排名 #2017-03-24#
 *
 * @param 	班级-成绩走势排名参数列表-Body
 */
exports.AnalysisClassApi_findClassExamTrend = function (data, callback) {
	servers.POST({
		url: "/api/class/find_class_exam_trend",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassExamTrend",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassExamTrend */



/** 
 * Created by AnalysisRegionApi-findConsolidation
 *
 * 学区、乡镇、学校人员巩固率分析 #2017-03-15#
 *
 * @param 	人员巩固率分析参数列表-Body
 */
exports.AnalysisRegionApi_findConsolidation = function (data, callback) {
	servers.POST({
		url: "/analysis/api/region/find_consolidation",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-findConsolidation",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionApi-findConsolidation */



/** 
 * Created by AnalysisCustomReportApi-findReports
 *
 * 自定义报表列表（孟加鑫） #2017-04-06#
 *
 * @param 	自定义报表参数对象-Body
 */
exports.AnalysisCustomReportApi_findReports = function (data, callback) {
	servers.POST({
		url: "/api/report/find_reports",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisCustomReportApi-findReports",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisCustomReportApi-findReports */



/** 
 * Created by AnalysisMobileTargetApi-exportClassTargets
 *
 * 导出目标参照列表 #2017-04-25#
 *
 * @params 	参数-Body
 */
exports.AnalysisMobileTargetApi_exportClassTargets = function (data, callback) {
	servers.POST({
		url: "/api/target/export_class_targets",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTargetApi-exportClassTargets",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileTargetApi-exportClassTargets */



/** 
 * Created by AnalysisBrotherSchoolApi-findScoreLine
 *
 * 兄弟学校分数线对比 #2017-03-11#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_findScoreLine = function (data, callback) {
	servers.GET({
		url: "/api/brother-school/find_score_line/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-findScoreLine",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-findScoreLine */



/** 
 * Created by AnalysisRegionPaperApi-findRegionAbility
 *
 * 能力层次分析 #2017-04-05#
 *
 * @examCourseId 	考试科目ID-String * @regionId 	区域ID-String
 */
exports.AnalysisRegionPaperApi_findRegionAbility = function (data, callback) {
	servers.GET({
		url: "/api/region-paper/find_region_ability/"+data.examCourseId+"/"+data.regionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findRegionAbility",
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findRegionAbility */



/** 
 * Created by ExamHideRatioRuleApi-create
 *
 * 保存学校超越率显示设置 (郑强) #2017-03-01#
 *
 * @examHideRatioRule 	学校超越率显示设置-Body
 */
exports.ExamHideRatioRuleApi_create = function (data, callback) {
	servers.POST({
		url: "/api/setting-ratio-rule/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamHideRatioRuleApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamHideRatioRuleApi-create */



/** 
 * Created by AnalysisStudentApi-findStudentCompare
 *
 * 学生成绩对比 #2017-03-20#
 *
 * @param 	学生成绩对比参数列表-Body
 */
exports.AnalysisStudentApi_findStudentCompare = function (data, callback) {
	servers.POST({
		url: "/api/student/find_student_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentCompare",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentCompare */



/** 
 * Created by AnalysisExcellentApi-countStudents
 *
 * 特优生总数、比率统计 #2017-04-25#
 *
 * @schoolId 	学校ID-String * @examId 	考试ID-String * @artCategory 	文理属性-Number
 */
exports.AnalysisExcellentApi_countStudents = function (data, callback) {
	servers.GET({
		url: "/api/excellent/count_students/"+data.schoolId+"/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-countStudents",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisExcellentApi-countStudents */



/** 
 * Created by ExamSchoolDistrictApi-list
 *
 * 查询当前区县学区列表 (陈显官) #2017-03-10#
 *
 */
exports.ExamSchoolDistrictApi_list = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-district/list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-list"
	}, callback);
};
/** End ExamSchoolDistrictApi-list */



/** 
 * Created by ExamPaperSplitApi-validate
 *
 * 验证分卷设置数据 (郑强) #2017-03-18#
 *
 * @splitList 	考试计算规则列表数据-Body
 */
exports.ExamPaperSplitApi_validate = function (data, callback) {
	servers.POST({
		url: "/api/setting-paper-split/validate",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-validate",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-validate */



/** 
 * Created by ExamTownApi-list
 *
 * 查询当前区县乡镇列表 (陈显官) #2017-03-10#
 *
 */
exports.ExamTownApi_list = function (data, callback) {
	servers.POST({
		url: "/exam/api/town/list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-list"
	}, callback);
};
/** End ExamTownApi-list */



/** 
 * Created by AnalysisRegionPaperApi-findQuestionStatistical
 *
 * 小题得分分布情况 #2017-04-05#
 *
 * @examId 	考试ID-String * @regionId 	区域ID-String * @questionId 	题目ID-String
 */
exports.AnalysisRegionPaperApi_findQuestionStatistical = function (data, callback) {
	servers.GET({
		url: "/api/region-paper/find_question_statistical/"+data.examId+"/"+data.regionId+"/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findQuestionStatistical",
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findQuestionStatistical */



/** 
 * Created by ExamProcessCacheNotifyApi-expiredCache
 *
 * 计算完成将缓存数据过期 (龚德志) #2017-04-20#
 *
 * @examId 	唯一ID-String
 */
exports.ExamProcessCacheNotifyApi_expiredCache = function (data, callback) {
	servers.GET({
		url: "/exam/api/cache-notify/expired-cache/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamProcessCacheNotifyApi-expiredCache",
		query: {
		}
	}, callback);
};
/** End ExamProcessCacheNotifyApi-expiredCache */



/** 
 * Created by ExamScoreLineApi-courseDropdown
 *
 * 根据考试ID查询双向细目表下拉数据 (郑强) #2017-03-20#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_courseDropdown = function (data, callback) {
	servers.GET({
		url: "/api/question/course_dropdown/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-courseDropdown",
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-courseDropdown */



/** 
 * Created by AnalysisStudentApi-findStudent
 *
 * 学生考试成绩概况 #2017-04-26#
 *
 * @examId 	考试Id-String * @studentId 	学生Id-String
 */
exports.AnalysisStudentApi_findStudent = function (data, callback) {
	servers.GET({
		url: "/api/student/find_student/"+data.examId+"/"+data.studentId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudent",
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudent */



/** 
 * Created by ExamTargetSettingApi-importData
 *
 * 成绩分析设置 - 目标参照Excel上传（龚德志) #2017-03-03#（只用于测试）
 *
 * @examId 	考试ID-String * @orgId 	当前学校ID-String * @artCategory 	0：不分科；1：文科；2：理科-Number
 * @file 	文件form-data数据流-
 */
exports.ExamTargetSettingApi_importData = function (data, callback) {
	servers.POST({
		url: "/exam/api/target/import/"+data.examId+"/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-importData",
		query: {
			artCategory: data.artCategory,
		}
	}, callback);
};
/** End ExamTargetSettingApi-importData */



/** 
 * Created by AnalysisSchoolApi-exportScoreLine
 *
 * 区县、学区、乡镇、学校分数线分析Excel导出 #2017-04-11#
 *
 * @param 	分数线分析参数列表-Body
 */
exports.AnalysisSchoolApi_exportScoreLine = function (data, callback) {
	servers.POST({
		url: "/api/school/export_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-exportScoreLine",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-exportScoreLine */



/** 
 * Created by ExamSchoolDistrictApi-create
 *
 * 新建学区 (陈显官) #2017-03-10#
 *
 * @createDto 	待新建学区信息-Body
 */
exports.ExamSchoolDistrictApi_create = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-district/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-create */



/** 
 * Created by AnalysisPaperApi-findChoiceQuestionStudents
 *
 * 选择题选项人数列表 #2017-03-09#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findChoiceQuestionStudents = function (data, callback) {
	servers.POST({
		url: "/api/paper/find_choice_question_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findChoiceQuestionStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findChoiceQuestionStudents */



/** 
 * Created by ExamCalculateRuleApi-list
 *
 * 根据考试ID查询考试的计算规则设置 (郑强) #2017-03-14#
 *
 * @examId 	考试ID-String
 */
exports.ExamCalculateRuleApi_list = function (data, callback) {
	servers.GET({
		url: "/api/setting-calculate-rule/list/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCalculateRuleApi-list",
		query: {
		}
	}, callback);
};
/** End ExamCalculateRuleApi-list */



/** 
 * Created by ExamSchoolGroupApi-remove
 *
 * 删除学校分类 (陈显官) #2017-03-10#
 *
 * @id 	学校分类ID-String
 */
exports.ExamSchoolGroupApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/exam/api/school-group/remove/"+data.id,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-remove",
		query: {
		}
	}, callback);
};
/** End ExamSchoolGroupApi-remove */



/** 
 * Created by ExamQuestionApi-findByCourse
 *
 * 根据考试科目查询双向细目表列表数据,不包含数据操作类型 (郑强) #2017-03-17#
 *
 * @courseId 	考试课程ID-String
 */
exports.ExamQuestionApi_findByCourse = function (data, callback) {
	servers.GET({
		url: "/api/question/find_by_course/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findByCourse",
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-findByCourse */



/** 
 * Created by ExamTargetSettingApi-find
 *
 * 成绩分析设置 - 目标参照设置加载（龚德志) #2017-03-03#
 *
 * @examId 	考试ID-String * @orgId 	当前学校ID-String * @artCategory 	0：不分科；1：文科；2：理科-Number
 */
exports.ExamTargetSettingApi_find = function (data, callback) {
	servers.GET({
		url: "/exam/api/target/find/"+data.examId+"/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-find",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End ExamTargetSettingApi-find */



/** 
 * Created by ExamIndexApi-countAllSemester
 *
 * 首页 - 查询校级下指定学期考试次数 #2017-03-13#
 *
 */
exports.ExamIndexApi_countAllSemester = function (data, callback) {
	servers.GET({
		url: "/api/index/count_semester_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-countAllSemester"
	}, callback);
};
/** End ExamIndexApi-countAllSemester */



/** 
 * Created by ExamStudentImportApi-listSuccess
 *
 * 查询导入成功的学生列表 (龚德志) #2017-03-17#
 *
 * @pageReq 	查询导入成功的学生参数对象-Body
 */
exports.ExamStudentImportApi_listSuccess = function (data, callback) {
	servers.POST({
		url: "/exam/api/examstudent/list_success",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-listSuccess",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamStudentImportApi-listSuccess */



/** 
 * Created by ExamTouchedLineApi-save
 *
 * 成绩分析设置 - 踩线生筛选线设置（龚德志) #2017-03-10#
 *
 * @orgTouchedLine 	分数线设置数据集合-Body
 */
exports.ExamTouchedLineApi_save = function (data, callback) {
	servers.POST({
		url: "/exam/api/touched/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTouchedLineApi-save",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamTouchedLineApi-save */



/** 
 * Created by ExamQuestionApi-findQuestion
 *
 * 根据考试试题ID查询试题 (郑强) #2017-03-17#
 *
 * @questionId 	试题ID-String
 */
exports.ExamQuestionApi_findQuestion = function (data, callback) {
	servers.GET({
		url: "/api/question/find_question/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findQuestion",
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-findQuestion */



/** 
 * Created by ExamClassLevelApi-find
 *
 * 根据班级层次ID查询班级层次数据 (郑强) #2017-03-14#
 *
 * @classLevelId 	班级层次ID-String
 */
exports.ExamClassLevelApi_find = function (data, callback) {
	servers.GET({
		url: "/api/setting-class-level/find/"+data.classLevelId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-find",
		query: {
		}
	}, callback);
};
/** End ExamClassLevelApi-find */



/** 
 * Created by ExamBasicApi-getExamDetail
 *
 * 考试详情查询 (陈显官) #2017-04-12#
 *
 * @examId 	考试ID-String
 */
exports.ExamBasicApi_getExamDetail = function (data, callback) {
	servers.GET({
		url: "/exam/api/basic/get_exam_detail/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBasicApi-getExamDetail",
		query: {
		}
	}, callback);
};
/** End ExamBasicApi-getExamDetail */



/** 
 * Created by ExamBrotherSchoolApi-save
 *
 * 成绩分析设置 - 添加兄弟学校（龚德志) #2017-03-03#
 *
 * @orgId 	当前学校的机构ID-String * @schoolList 	兄弟学校集合-
 */
exports.ExamBrotherSchoolApi_save = function (data, callback) {
	servers.POST({
		url: "/exam/api/setting-brother-school/save/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBrotherSchoolApi-save",
		query: {
		}
	}, callback);
};
/** End ExamBrotherSchoolApi-save */



/** 
 * Created by AnalysisSchoolApi-findAverage
 *
 * 区县、学区、乡镇、学校平均分分析 #2017-04-13#
 *
 * @param 	平均分分析参数列表-Body
 */
exports.AnalysisSchoolApi_findAverage = function (data, callback) {
	servers.POST({
		url: "/api/school/find_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-findAverage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-findAverage */



/** 
 * Created by ExamPaperSplitApi-list
 *
 * 根据考试科目ID查询科目的分卷设置数据 (郑强) #2017-03-15#
 *
 * @courseId 	科目ID-String
 */
exports.ExamPaperSplitApi_list = function (data, callback) {
	servers.GET({
		url: "/api/setting-paper-split/list/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-list",
		query: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-list */



/** 
 * Created by ExamQueryApi-listAllCourses
 *
 * 查询一个考试的所有科目：单科+组合 (陈显官) #2017-04-08#
 *
 * @examId 	考试ID-String * @artCategory 	科目文理属性  0：不分科；1：文科；2：理科；-1：特殊值，查询所有-Number
 */
exports.ExamQueryApi_listAllCourses = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/list_all_courses/"+data.examId+"/"+data.artCategory,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-listAllCourses",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-listAllCourses */



/** 
 * Created by ExamExcellentApi-searchStudents
 *
 * 成绩分析设置 - 特优生 - 搜索学生
 *
 * @studentInfo 	学生搜索条件-Body
 */
exports.ExamExcellentApi_searchStudents = function (data, callback) {
	servers.POST({
		url: "/exam/api/setting-excellent/student/search",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamExcellentApi-searchStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamExcellentApi-searchStudents */



/** 
 * Created by ExamStudentImportApi-listNotFound
 *
 * 查询未在基础数据找到的学生列表 (龚德志) #2017-03-17#
 *
 * @pageReq 	查查询未在基础数据找到的学生参数对象-Body
 */
exports.ExamStudentImportApi_listNotFound = function (data, callback) {
	servers.POST({
		url: "/exam/api/examstudent/list_not_found",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-listNotFound",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamStudentImportApi-listNotFound */



/** 
 * Created by AnalysisPaperApi-exportClassPoint
 *
 * 导出试卷知识点分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_exportClassPoint = function (data, callback) {
	servers.POST({
		url: "/api/paper/export_class_point",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportClassPoint",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportClassPoint */



/** 
 * Created by AnalysisRegionPaperApi-exportChoiceQuestion
 *
 * 导出选择题答案分布分析 #2017-04-05#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_exportChoiceQuestion = function (data, callback) {
	servers.POST({
		url: "/api/region-paper/export_choice_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportChoiceQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportChoiceQuestion */



/** 
 * Created by AnalysisRegionApi-exportPass
 *
 * 区县及格率分析Excel导出 #2017-04-07#
 *
 * @param 	区县及格率分析参数列表-Body
 */
exports.AnalysisRegionApi_exportPass = function (data, callback) {
	servers.POST({
		url: "/analysis/api/region/export_pass",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-exportPass",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionApi-exportPass */



/** 
 * Created by ExamPaperSplitApi-show
 *
 * 根据分卷ID查询分卷设置 (郑强) #2017-03-15#
 *
 * @splitId 	分卷ID-String
 */
exports.ExamPaperSplitApi_show = function (data, callback) {
	servers.GET({
		url: "/api/setting-paper-split/show/"+data.splitId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-show",
		query: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-show */



/** 
 * Created by ExamTownApi-modifyByCreate
 *
 * 修改乡镇 (陈显官) #2017-03-10#
 *
 * @modifyDto 	待修改的乡镇信息-Body
 */
exports.ExamTownApi_modifyByCreate = function (data, callback) {
	servers.POST({
		url: "/exam/api/town/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-modifyByCreate",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamTownApi-modifyByCreate */



/** 
 * Created by ExamScoreImportApi-getMarkStates
 *
 * 查询成绩导入状态 (陈显官) #2017-04-05#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreImportApi_getMarkStates = function (data, callback) {
	servers.GET({
		url: "/exam/api/score-import/get_mark_states/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-getMarkStates",
		query: {
		}
	}, callback);
};
/** End ExamScoreImportApi-getMarkStates */



/** 
 * Created by AnalysisMobileTouchLineApi-exportByRegion
 *
 * 导出区县踩线生列表 #2017-03-16#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisMobileTouchLineApi_exportByRegion = function (data, callback) {
	servers.POST({
		url: "/api/touch-line/export_by_region",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-exportByRegion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-exportByRegion */



/** 
 * Created by ExamProcessCacheNotifyApi-checkCache
 *
 * 查询计算需要的缓存数据是否就绪  (龚德志) #2017-04-20#
 *
 * @examId 	唯一ID-String
 */
exports.ExamProcessCacheNotifyApi_checkCache = function (data, callback) {
	servers.GET({
		url: "/exam/api/cache-notify/check-cache/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamProcessCacheNotifyApi-checkCache",
		query: {
		}
	}, callback);
};
/** End ExamProcessCacheNotifyApi-checkCache */



/** 
 * Created by AnalysisSchoolApi-findSection
 *
 * 区县、学区、乡镇、学校分数段分析 #2017-04-13#
 *
 * @param 	分数段分析参数列表-Body
 */
exports.AnalysisSchoolApi_findSection = function (data, callback) {
	servers.POST({
		url: "/api/school/find_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-findSection",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-findSection */



/** 
 * Created by AnalysisPaperApi-exportSplitPaper
 *
 * 导出试卷主客观、分卷分析 #2017-03-17#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisPaperApi_exportSplitPaper = function (data, callback) {
	servers.POST({
		url: "/api/paper/export_split_paper",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportSplitPaper",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportSplitPaper */



/** 
 * Created by AnalysisPaperApi-findClassAbility
 *
 * 能力层次分析 #2017-03-23#
 *
 * @examCourseId 	考试科目id-String
 * @classId 	班级id-String
 */
exports.AnalysisPaperApi_findClassAbility = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/paper/find_class_ability",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassAbility",
		query: {
			examCourseId: data.examCourseId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassAbility */



/** 
 * Created by ExamScoreImportApi-findNotMatchHeader
 *
 * 查询不符合的表头情况 (陈显官) #2017-03-22#
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID，网阅考试必需-String
 */
exports.ExamScoreImportApi_findNotMatchHeader = function (data, callback) {
	servers.GET({
		url: "/exam/api/score-import/find_not_match_header",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-findNotMatchHeader",
		query: {
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End ExamScoreImportApi-findNotMatchHeader */



/** 
 * Created by AnalysisPaperApi-findClassQuestion
 *
 * 试卷小题分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findClassQuestion = function (data, callback) {
	servers.POST({
		url: "/api/paper/find_class_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassQuestion */



/** 
 * Created by ExamQueryApi-listSchools
 *
 * 查询某次考试的所有参考学校 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_listSchools = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/list_schools/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-listSchools",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-listSchools */



/** 
 * Created by ExamCalculateRuleApi-save
 *
 * 保存考试的计算规则 (郑强) #2017-03-14#
 *
 * @calculateRulesList 	考试计算规则列表数据-Body
 */
exports.ExamCalculateRuleApi_save = function (data, callback) {
	servers.POST({
		url: "/api/setting-calculate-rule/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCalculateRuleApi-save",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamCalculateRuleApi-save */



/** 
 * Created by ExamScoreImportApi-listSuccessByType
 *
 * 查询导入成功的学生成绩试题分数列表 (陈显官) #2017-03-27#测试使用
 *
 * @pageParamDTO 	pageParamDTO-Body
 */
exports.ExamScoreImportApi_listSuccessByType = function (data, callback) {
	servers.POST({
		url: "/exam/api/score-import/list_success_by_type",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-listSuccessByType",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamScoreImportApi-listSuccessByType */



/** 
 * Created by AnalysisPaperApi-findSelectionQuestion
 *
 * 试卷选考题分析 #2017-03-10#
 *
 * @schoolId 	学校ID-String * @examCourseId 	考试科目ID-String * @classId 	班级ID-String
 */
exports.AnalysisPaperApi_findSelectionQuestion = function (data, callback) {
	servers.GET({
		url: "/api/paper/find_selection_question/"+data.schoolId+"/"+data.examCourseId+"/"+data.classId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findSelectionQuestion",
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findSelectionQuestion */



/** 
 * Created by AnalysisMobileTouchLineApi-findStudent
 *
 * 移动端踩线生列表查询 #2017-03-22#
 *
 * @schoolId 	学校id-String
 * @examId 	考试id-String
 * @classId 	班级id-String
 */
exports.AnalysisMobileTouchLineApi_findStudent = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/touch-line/find_student",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-findStudent",
		query: {
			schoolId: data.schoolId,
			examId: data.examId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-findStudent */



/** 
 * Created by AnalysisMobileExamApi-findClassExam
 *
 * 班级考试列表 #2017-03-22#
 *
 * @classId 	班级id-String * @pageDto 	分页参数-Body
 */
exports.AnalysisMobileExamApi_findClassExam = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/exam/find_class_exam/"+data.classId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileExamApi-findClassExam",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileExamApi-findClassExam */



/** 
 * Created by AnalysisStudentApi-findStudentClassExamTrend
 *
 * 学生成绩走势班级排名 #2017-03-22#
 *
 * @param 	学生成绩走势班级排名参数列表-Body
 */
exports.AnalysisStudentApi_findStudentClassExamTrend = function (data, callback) {
	servers.POST({
		url: "/api/student/find_student_class_exam_trend",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentClassExamTrend",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentClassExamTrend */



/** 
 * Created by ExamQuestionApi-findQuestions
 *
 * 根据考试科目查询科目的试题数据 (郑强) #2017-03-17#
 *
 * @courseId 	考试课程ID-String
 */
exports.ExamQuestionApi_findQuestions = function (data, callback) {
	servers.GET({
		url: "/api/question/find_questions/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findQuestions",
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-findQuestions */



/** 
 * Created by ExamScoreImportApi-listTableHeader
 *
 * 查询导入成功的学生成绩列表的表头 (陈显官) #2017-03-22#
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID，网阅考试必需-String
 */
exports.ExamScoreImportApi_listTableHeader = function (data, callback) {
	servers.GET({
		url: "/exam/api/score-import/list_table_header",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-listTableHeader",
		query: {
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End ExamScoreImportApi-listTableHeader */



/** 
 * Created by ExamClassPartApi-modify
 *
 * 修改学部设置 (郑强) #2017-03-15#
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.ExamClassPartApi_modify = function (data, callback) {
	servers.POST({
		url: "/api/setting-class-part/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamClassPartApi-modify */



/** 
 * Created by ExamHideRatioRuleApi-showSchoolRatioRule
 *
 * 查询学校超越率显示设置 (郑强) #2017-03-15#
 *
 */
exports.ExamHideRatioRuleApi_showSchoolRatioRule = function (data, callback) {
	servers.GET({
		url: "/api/setting-ratio-rule/find_school_ratio_rule",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamHideRatioRuleApi-showSchoolRatioRule"
	}, callback);
};
/** End ExamHideRatioRuleApi-showSchoolRatioRule */



/** 
 * Created by ExamQueryApi-getExamStudent
 *
 * 查询一个考试中一个学生的详情 (陈显官) #2017-04-18#
 *
 * @examId 	考试ID-String * @studentAccountId 	学生账号id-Number
 */
exports.ExamQueryApi_getExamStudent = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/find_student/"+data.examId+"/"+data.studentAccountId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-getExamStudent",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-getExamStudent */



/** 
 * Created by AnalysisMobileTeacherApi-findExamSingle
 *
 * 任课老师-任课老师列表 #2017-04-24#
 *
 * @examId 	考试Id-String
 * @examCourseId 	考试科目Id-String
 */
exports.AnalysisMobileTeacherApi_findExamSingle = function (data, callback) {
	servers.GET({
		url: "/analysis/api/mobile/teacher/find_teacher_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTeacherApi-findExamSingle",
		query: {
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End AnalysisMobileTeacherApi-findExamSingle */



/** 
 * Created by AnalysisStudentApi-findStudents
 *
 * 学生分析 #2017-04-26#
 *
 * @param 	学生分析参数列表-Body
 */
exports.AnalysisStudentApi_findStudents = function (data, callback) {
	servers.POST({
		url: "/api/student/find_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudents */



/** 
 * Created by ExamConsolidationApi-list
 *
 * 根据类型查询巩固率设置数据 (郑强) #2017-04-21#
 *
 * @examId 	考试ID-String * @type 	巩固率类型[3:学区, 4:乡镇, 5:学校]-Number
 */
exports.ExamConsolidationApi_list = function (data, callback) {
	servers.GET({
		url: "/exam/api/consolidation/list/"+data.examId+"/"+data.type,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamConsolidationApi-list",
		query: {
		}
	}, callback);
};
/** End ExamConsolidationApi-list */



/** 
 * Created by ExamQueryApi-getCourse
 *
 * 查询一个考试科目详情 (陈显官) #2017-03-02#
 *
 * @examCourseId 	考试科目mongo-ID-String
 */
exports.ExamQueryApi_getCourse = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/get_course/"+data.examCourseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-getCourse",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-getCourse */



/** 
 * Created by ExamClassLevelApi-create
 *
 * 保存班级层次设置 (郑强) #2017-03-15#
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.ExamClassLevelApi_create = function (data, callback) {
	servers.POST({
		url: "/api/setting-class-level/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamClassLevelApi-create */



/** 
 * Created by ExamStudentImportApi-listFail
 *
 * 查询导入失败的学生列表 (龚德志) #2017-03-17#
 *
 * @taskId 	某一次导入的结果，不传则查询数据中当前状态-String
 */
exports.ExamStudentImportApi_listFail = function (data, callback) {
	servers.GET({
		url: "/exam/api/examstudent/list_fail/"+data.taskId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-listFail",
		query: {
		}
	}, callback);
};
/** End ExamStudentImportApi-listFail */



/** 
 * Created by ExamTouchedLineApi-find
 *
 * 成绩分析设置 - 根据考试查询单个踩线设置（龚德志) #2017-03-13#
 *
 * @examId 	考试ID-String * @artCategory 	0：不分科；1：文科；2：理科-Number
 * @orgId 	机构ID，只能是区县、学校的机构ID-String
 */
exports.ExamTouchedLineApi_find = function (data, callback) {
	servers.GET({
		url: "/exam/api/touched/find/"+data.examId+"/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTouchedLineApi-find",
		query: {
			artCategory: data.artCategory,
		}
	}, callback);
};
/** End ExamTouchedLineApi-find */



/** 
 * Created by ExamSXTApi-getStudentNewExams
 *
 * 查询一个学生最近几个考试 (陈显官) #2017-04-25#
 *
 * @studentAccountId 	学生云平台账号ID-String
 * @limit 	最多的记录数量-Number
 * @isJustPublish 	是否只查询发布的，默认false，查询所有考试-Boolean
 */
exports.ExamSXTApi_getStudentNewExams = function (data, callback) {
	servers.POST({
		url: "/exam/api/sxt-back/get_student_new_exams",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSXTApi-getStudentNewExams",
		query: {
			studentAccountId: data.studentAccountId,
			limit: data.limit,
			isJustPublish: data.isJustPublish
		}
	}, callback);
};
/** End ExamSXTApi-getStudentNewExams */



/** 
 * Created by ExamCalculateRuleApi-myValidate
 *
 * 验证考试的计算规则 (郑强) #2017-03-14#
 *
 * @calculateRulesList 	考试计算规则列表数据-Body
 */
exports.ExamCalculateRuleApi_myValidate = function (data, callback) {
	servers.POST({
		url: "/api/setting-calculate-rule/validate",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCalculateRuleApi-myValidate",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamCalculateRuleApi-myValidate */



/** 
 * Created by ExamQuestionApi-save
 *
 * 保存双向细目表列表数据,保存前会根据课程ID清除原有数据 (郑强) #2017-03-20#
 *
 * @questionDetailList 	双向细目表列表数据-Body * @courseId 	科目ID-String
 */
exports.ExamQuestionApi_save = function (data, callback) {
	servers.POST({
		url: "/api/question/save/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-save",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-save */



/** 
 * Created by ExamScoreLineApi-listByExam
 *
 * 根据考试ID查询分数线设置的详细数据 (郑强) #2017-03-10#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_listByExam = function (data, callback) {
	servers.GET({
		url: "/api/setting-score-line/list/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-listByExam",
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-listByExam */



/** 
 * Created by examIndex-count_school_year
 *
 * 首页 - 按学年统计考试数量 #2017-04-24#
 *
 * @start 	开始日期-Number * @end 	结束日期-Number
 */
exports.examIndex_count_school_year = function (data, callback) {
	servers.GET({
		url: "/api/index/count_school_year/"+data.start+"/"+data.end,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "examIndex-count_school_year",
		query: {
		}
	}, callback);
};
/** End examIndex-count_school_year */



/** 
 * Created by ExamQueryApi-listClasses_1
 *
 * 查询某次考试的某个学校所有参考班级 (陈显官) #2017-04-25#
 *
 * @examId 	考试ID-String * @schoolId 	学校云平台ID-String
 */
exports.ExamQueryApi_listClasses_1 = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/list_classes_by_school/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-listClasses_1",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-listClasses_1 */



/** 
 * Created by ExamBasicApi-createExam
 *
 * 创建考试 (陈显官) #2017-03-23#
 *
 * @examCreateDTO 	examCreateDTO-Body
 */
exports.ExamBasicApi_createExam = function (data, callback) {
	servers.POST({
		url: "/exam/api/basic/create_exam",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBasicApi-createExam",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamBasicApi-createExam */



/** 
 * Created by ExamProcessCacheNotifyApi-refreshCache
 *
 * 刷新计算需要的缓存数据 (龚德志) #2017-04-20#
 *
 * @examId 	唯一ID-String
 */
exports.ExamProcessCacheNotifyApi_refreshCache = function (data, callback) {
	servers.GET({
		url: "/exam/api/cache-notify/refresh-cache/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamProcessCacheNotifyApi-refreshCache",
		query: {
		}
	}, callback);
};
/** End ExamProcessCacheNotifyApi-refreshCache */



/** 
 * Created by ExamQuestionApi-findPoints
 *
 * 根据考试试题查询与试题相关的知识点列表数据 (郑强) #2017-03-17#
 *
 * @questionId 	试题ID-String
 */
exports.ExamQuestionApi_findPoints = function (data, callback) {
	servers.GET({
		url: "/api/question/find_points/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findPoints",
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-findPoints */



/** 
 * Created by AnalysisMobileClassApi-findExamSingle
 *
 * 班级-单科考试情况列表 #2017-03-23#
 *
 * @examId 	考试Id-String
 * @classId 	班级Id-String
 */
exports.AnalysisMobileClassApi_findExamSingle = function (data, callback) {
	servers.GET({
		url: "/analysis/api/mobile/class/find_exam_single",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileClassApi-findExamSingle",
		query: {
			examId: data.examId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisMobileClassApi-findExamSingle */



/** 
 * Created by ExamStudentImportApi-importData_1
 *
 * 导入准考证-修改错误数据 (龚德志) #2017-04-14#
 *
 * @taskId 	考试ID-String * @updateErrorDataRequest 	考试集合-Body
 */
exports.ExamStudentImportApi_importData_1 = function (data, callback) {
	servers.POST({
		url: "/exam/api/examstudent/import_data/update_error_data/"+data.taskId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-importData_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamStudentImportApi-importData_1 */



/** 
 * Created by ExamQueryApi-unPublish
 *
 * 撤销考试发布 (陈显官) #2017-03-30#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_unPublish = function (data, callback) {
	servers.PUT({
		url: "/exam/api/basic/un_publish/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-unPublish",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-unPublish */



/** 
 * Created by ExamScoreImportApi-downloadFail
 *
 * 下载未导入成绩的人员名单 (陈显官) #2017-03-22#
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID，网阅考试必需-String
 */
exports.ExamScoreImportApi_downloadFail = function (data, callback) {
	servers.GET({
		url: "/exam/api/score-import/download_fail",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-downloadFail",
		query: {
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End ExamScoreImportApi-downloadFail */



/** 
 * Created by ExamClassPartApi-find
 *
 * 根据学部ID查询学部数据 (郑强) #2017-03-15#
 *
 * @classPartId 	学部ID-String
 */
exports.ExamClassPartApi_find = function (data, callback) {
	servers.GET({
		url: "/api/setting-class-part/find/"+data.classPartId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-find",
		query: {
		}
	}, callback);
};
/** End ExamClassPartApi-find */



/** 
 * Created by ExamQueryApi-getHasDistinctAndTown
 *
 * 查询当前用户所在区县是否有学区和乡镇设置 (陈显官) #2017-04-27#
 *
 */
exports.ExamQueryApi_getHasDistinctAndTown = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/get_has_distinct_town",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-getHasDistinctAndTown"
	}, callback);
};
/** End ExamQueryApi-getHasDistinctAndTown */



/** 
 * Created by ExamSchoolGroupApi-modifyByCreate
 *
 * 修改学校分类 (陈显官) #2017-03-10#
 *
 * @modifyDto 	待修改的学校分类信息-Body
 */
exports.ExamSchoolGroupApi_modifyByCreate = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-group/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-modifyByCreate",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamSchoolGroupApi-modifyByCreate */



/** 
 * Created by ExamQuestionApi-findLevels
 *
 * 根据考试试题查询与试题相关的能力层次列表数据 (郑强) #2017-03-17#
 *
 * @questionId 	试题ID-String
 */
exports.ExamQuestionApi_findLevels = function (data, callback) {
	servers.GET({
		url: "/api/question/find_levels/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findLevels",
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-findLevels */



/** 
 * Created by ExamScoreImportApi-listSuccess
 *
 * 查询导入成功的学生成绩列表 (陈显官) #2017-03-27#
 *
 * @pageParamDTO 	pageParamDTO-Body
 */
exports.ExamScoreImportApi_listSuccess = function (data, callback) {
	servers.POST({
		url: "/exam/api/score-import/list_success",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-listSuccess",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamScoreImportApi-listSuccess */



/** 
 * Created by ExamStudentImportApi-downloadTemplate
 *
 * 下载准考证导入模板 (龚德志) #2017-03-17#
 *
 * @examId 	考试mongo-ID-String
 */
exports.ExamStudentImportApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/exam/api/examstudent/download_template/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-downloadTemplate",
		query: {
		}
	}, callback);
};
/** End ExamStudentImportApi-downloadTemplate */



/** 
 * Created by ExamClassLevelApi-remove
 *
 * 根据班级层次ID删除班级层次数据 (郑强) #2017-03-15#
 *
 * @classLevelId 	根据班级层次ID-String
 */
exports.ExamClassLevelApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/api/setting-class-level/remove/"+data.classLevelId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-remove",
		query: {
		}
	}, callback);
};
/** End ExamClassLevelApi-remove */



/** 
 * Created by OrganizationApi-listCountyAndSchools
 *
 * 查询一个市级所有的区县和学校(胡君) #2017-03-16#
 *
 * @orgId 	市级组织机构ID-Number
 */
exports.OrganizationApi_listCountyAndSchools = function (data, callback) {
	servers.GET({
		url: "/platform/api/organization/list_county_and_schools/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listCountyAndSchools",
		query: {
		}
	}, callback);
};
/** End OrganizationApi-listCountyAndSchools */



/** 
 * Created by AnalysisStudentApi-findStudentRank
 *
 * 学生考试成绩概况学生全市、校、班排名 #2017-03-20#
 *
 * @schoolId 	学校Id-String * @studentId 	学生Id-String
 */
exports.AnalysisStudentApi_findStudentRank = function (data, callback) {
	servers.GET({
		url: "/api/student/find_student_rank/"+data.schoolId+"/"+data.studentId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentRank",
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentRank */



/** 
 * Created by ExamCommonApi-listPhases
 *
 * 查询所有的学段(向发钧) #2017-03-09#
 *
 */
exports.ExamCommonApi_listPhases = function (data, callback) {
	servers.GET({
		url: "/platform/api/common/list_phases",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-listPhases"
	}, callback);
};
/** End ExamCommonApi-listPhases */



/** 
 * Created by AnalysisMobileTargetApi-findClassTargets_1
 *
 * 目标参照列表 #2017-04-25#
 *
 * @params 	参数-Body
 */
exports.AnalysisMobileTargetApi_findClassTargets_1 = function (data, callback) {
	servers.POST({
		url: "/api/target/find_class_targets",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTargetApi-findClassTargets_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileTargetApi-findClassTargets_1 */



/** 
 * Created by PlatformLevelApi-listPlatformSubjectPoints
 *
 * 根据学科ID查询知识点(向发钧) #2017-03-09#
 *
 * @subjectId 	学科ID-Number
 */
exports.PlatformLevelApi_listPlatformSubjectPoints = function (data, callback) {
	servers.GET({
		url: "/platform/api/point/list_platform_points/"+data.subjectId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformLevelApi-listPlatformSubjectPoints",
		query: {
		}
	}, callback);
};
/** End PlatformLevelApi-listPlatformSubjectPoints */



/** 
 * Created by ExamScoreImportApi-downloadTemplate
 *
 * 下载成绩导入模板 (陈显官) #2017-03-22#
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目mongo-ID，网阅考试必需-String
 */
exports.ExamScoreImportApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/exam/api/score-import/download_template",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-downloadTemplate",
		query: {
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End ExamScoreImportApi-downloadTemplate */



/** 
 * Created by ExamSchoolDistrictApi-existByRegion
 *
 * 查询当前区县是否存在学区 (陈显官) #2017-04-14#
 *
 */
exports.ExamSchoolDistrictApi_existByRegion = function (data, callback) {
	servers.GET({
		url: "/exam/api/school-district/exist_by_region",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-existByRegion"
	}, callback);
};
/** End ExamSchoolDistrictApi-existByRegion */



/** 
 * Created by ExamCommonApi-findClassSubjects
 *
 * 根据班级ID查询班级的所有科目(向发钧) #2017-03-14#
 *
 * @classId 	班级ID-Number * @tenantId 	租户ID-Number
 */
exports.ExamCommonApi_findClassSubjects = function (data, callback) {
	servers.GET({
		url: "/platform/api/common/list_class_subjects/"+data.classId+"/"+data.tenantId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findClassSubjects",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findClassSubjects */



/** 
 * Created by AnalysisExcellentApi-exportRegionExcellent
 *
 * 导出区县特优生列表 #2017-03-16#
 *
 * @param 	特优生列表参数列表对象-Body
 */
exports.AnalysisExcellentApi_exportRegionExcellent = function (data, callback) {
	servers.POST({
		url: "/api/excellent/export_region_excellent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-exportRegionExcellent",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-exportRegionExcellent */



/** 
 * Created by AnalysisRegionPaperApi-exportSplitPaper
 *
 * 导出试卷主客观、分卷分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_exportSplitPaper = function (data, callback) {
	servers.POST({
		url: "/api/region-paper/export_split_paper",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportSplitPaper",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportSplitPaper */



/** 
 * Created by ExamIndexApi-count_org_level
 *
 * 首页 - 按考试级别统计考试数量 #2017-03-07#
 *
 */
exports.ExamIndexApi_count_org_level = function (data, callback) {
	servers.GET({
		url: "/api/index/count_org_level",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-count_org_level"
	}, callback);
};
/** End ExamIndexApi-count_org_level */



/** 
 * Created by AnalysisMobileSchoolApi-findExamCompare
 *
 * 学校-多次考试对比 #2017-03-30#
 *
 * @param 	参数列表-Body
 */
exports.AnalysisMobileSchoolApi_findExamCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/school/find_exam_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileSchoolApi-findExamCompare",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileSchoolApi-findExamCompare */



/** 
 * Created by ExamClassLevelApi-page
 *
 * 班级层次分页查询 (郑强) #2017-03-01#
 *
 * @pageableDto 	分页参数对象-Body
 */
exports.ExamClassLevelApi_page = function (data, callback) {
	servers.POST({
		url: "/api/setting-class-level/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-page",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamClassLevelApi-page */



/** 
 * Created by AnalysisPaperApi-findChoiceQuestion
 *
 * 选择题答案分布分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findChoiceQuestion = function (data, callback) {
	servers.POST({
		url: "/api/paper/find_choice_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findChoiceQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findChoiceQuestion */



/** 
 * Created by AnalysisSchoolApi-findRecentScoreLine
 *
 * 市级、区县、学校（返回的是班级分数线/平均分）最近一次学校分数线/平均分 #2017-04-25#
 *
 * @artCategory 	文理属性：0不分科，1文科，2理科，没有就不传-Number
 */
exports.AnalysisSchoolApi_findRecentScoreLine = function (data, callback) {
	servers.POST({
		url: "/api/school/find_recent_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-findRecentScoreLine",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisSchoolApi-findRecentScoreLine */



/** 
 * Created by ExamHideRatioRuleApi-remove
 *
 * 删除学校超越率显示设置 (郑强) #2017-03-15#
 *
 * @ratioRuleId 	学校超越率显示设置ID-String
 */
exports.ExamHideRatioRuleApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/api/setting-ratio-rule/remove/"+data.ratioRuleId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamHideRatioRuleApi-remove",
		query: {
		}
	}, callback);
};
/** End ExamHideRatioRuleApi-remove */



/** 
 * Created by ExamSchoolDistrictApi-remove
 *
 * 删除学区 (陈显官) #2017-03-10#
 *
 * @id 	学区ID-String
 */
exports.ExamSchoolDistrictApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/exam/api/school-district/remove/"+data.id,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-remove",
		query: {
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-remove */



/** 
 * Created by ExamQueryApi-listClasses
 *
 * 查询某次考试的所有参考班级 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_listClasses = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/list_classes/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-listClasses",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-listClasses */



/** 
 * Created by ExamScoreLineApi-listHeaders
 *
 * 根据考试id，查询分数线设置的表格头数据 (郑强) #2017-03-13#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_listHeaders = function (data, callback) {
	servers.GET({
		url: "/api/setting-score-line/list_headers/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-listHeaders",
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-listHeaders */



/** 
 * Created by PlatformAccountApi-findCurrentRole
 *
 * 查询当前用户角色信息(胡君) #2017-03-14#
 *
 */
exports.PlatformAccountApi_findCurrentRole = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/find_current_role",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformAccountApi-findCurrentRole"
	}, callback);
};
/** End PlatformAccountApi-findCurrentRole */



/** 
 * Created by AnalysisMobileSXTApi-findXbStudents
 *
 * 查询市级或者区县级考试的学霸人数和ID(刘世平) #2017-04-15#
 *
 * @examId 	考试ID-String
 * @tenantId 	租户ID-Number
 * @ratio 	学霸比率-Number
 */
exports.AnalysisMobileSXTApi_findXbStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/sxt/find_xb_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileSXTApi-findXbStudents",
		query: {
			examId: data.examId,
			tenantId: data.tenantId,
			ratio: data.ratio
		}
	}, callback);
};
/** End AnalysisMobileSXTApi-findXbStudents */



/** 
 * Created by ExamScoreLineApi-importData
 *
 * 上传分数线Excel数据 (郑强) #2017-03-17#
 *
 * @importParametters 	分数线上传参数数据-Body
 */
exports.ExamScoreLineApi_importData = function (data, callback) {
	servers.POST({
		url: "/api/setting-score-line/import_data",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-importData */



/** 
 * Created by PlatformAccountApi-findCurrentUser
 *
 * 查询当前用户信息(胡君) #2017-03-14#
 *
 */
exports.PlatformAccountApi_findCurrentUser = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/find_current_user",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformAccountApi-findCurrentUser"
	}, callback);
};
/** End PlatformAccountApi-findCurrentUser */



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
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "initAllAccountUsingPUT",
		query: {
			tenantid: data.tenantid
		}
	}, callback);
};
/** End initAllAccountUsingPUT */



/** 
 * Created by PlatformAccountApi-findClassSubjects
 *
 * 根据家长ID查询孩子(向发钧) #2017-03-14#
 *
 * @parentId 	家长ID-Number
 */
exports.PlatformAccountApi_findClassSubjects = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/find_child/"+data.parentId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformAccountApi-findClassSubjects",
		query: {
		}
	}, callback);
};
/** End PlatformAccountApi-findClassSubjects */



/** 
 * Created by AnalysisExcellentApi-findRegionExcellent
 *
 * 区县特优生列表 #2017-03-10#
 *
 * @param 	特优生列表参数列表对象-Body
 */
exports.AnalysisExcellentApi_findRegionExcellent = function (data, callback) {
	servers.POST({
		url: "/api/excellent/find_region_excellent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-findRegionExcellent",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-findRegionExcellent */



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
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "authorityUsingGET",
		query: {
			appId: data.appId,
			uri: data.uri
		}
	}, callback);
};
/** End authorityUsingGET */



/** 
 * Created by OrganizationApi-listSchools
 *
 * 查询一个区县的学校 (陈显官) #2017-03-31#
 *
 * @countyId 	区县ID-Number
 * @phase 	学段，为空时查询所有学段-Number
 */
exports.OrganizationApi_listSchools = function (data, callback) {
	servers.GET({
		url: "/platform/api/organization/list_schools",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listSchools",
		query: {
			countyId: data.countyId,
			phase: data.phase
		}
	}, callback);
};
/** End OrganizationApi-listSchools */



/** 
 * Created by PlatformClassApi-findByGrade
 *
 * 查询某校级年级的所有班级(胡君) #2017-04-06#
 *
 * @gradeId 	校级年级ID-Number
 */
exports.PlatformClassApi_findByGrade = function (data, callback) {
	servers.GET({
		url: "/platform/api/class/find_by_grade/"+data.gradeId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformClassApi-findByGrade",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findByGrade */



/** 
 * Created by ExamBasicApi-deleteExam
 *
 * 删除考试 (陈显官) #2017-03-15#
 *
 * @examId 	考试ID-String
 */
exports.ExamBasicApi_deleteExam = function (data, callback) {
	servers.DELETE({
		url: "/exam/api/basic/delete_exam/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBasicApi-deleteExam",
		query: {
		}
	}, callback);
};
/** End ExamBasicApi-deleteExam */



/** 
 * Created by AnalysisRegionApi-findPass
 *
 * 区县及格率分析 #2017-04-07#
 *
 * @param 	区县及格率分析参数列表-Body
 */
exports.AnalysisRegionApi_findPass = function (data, callback) {
	servers.POST({
		url: "/analysis/api/region/find_pass",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-findPass",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionApi-findPass */



/** 
 * Created by AnalysisPaperApi-findErrorStudents
 *
 * 做错学生列表 #2017-03-10#
 *
 * @classId 	班级ID-String * @questionId 	问题ID-String
 */
exports.AnalysisPaperApi_findErrorStudents = function (data, callback) {
	servers.GET({
		url: "/api/paper/find_error_students/"+data.classId+"/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findErrorStudents",
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findErrorStudents */



/** 
 * Created by AnalysisBrotherSchoolApi-exportScoreLine
 *
 * 导出兄弟学校分数线对比 #2017-03-16#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_exportScoreLine = function (data, callback) {
	servers.GET({
		url: "/api/brother-school/export_score_line/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-exportScoreLine",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-exportScoreLine */



/** 
 * Created by ExamTownApi-create
 *
 * 新建乡镇 (陈显官) #2017-03-10#
 *
 * @createDto 	待新建的乡镇信息-Body
 */
exports.ExamTownApi_create = function (data, callback) {
	servers.POST({
		url: "/exam/api/town/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamTownApi-create */



/** 
 * Created by ExamScoreLineApi-listByExam_1
 *
 * 根据考试ID查询分数线数据 (郑强) #2017-03-23#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_listByExam_1 = function (data, callback) {
	servers.GET({
		url: "/api/setting-score-line/list_score_lines/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-listByExam_1",
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-listByExam_1 */



/** 
 * Created by ExamQuestionApi-tempSave
 *
 * 暂时保存双向细目表列表数据,保存前会根据课程ID清除原有数据 (郑强) #2017-04-17#
 *
 * @questionDetailList 	双向细目表列表数据-Body * @courseId 	科目ID-String
 */
exports.ExamQuestionApi_tempSave = function (data, callback) {
	servers.POST({
		url: "/api/question/temp_save/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-tempSave",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-tempSave */



/** 
 * Created by ExamSXTApi-getClassIdByExamAndClassIds
 *
 * 从考试中查询出参数班级ID范围内的一个班级 (陈显官) #2017-04-25#
 *
 * @examId 	考试ID-String
 * @classIds 	多个班级ID-
 */
exports.ExamSXTApi_getClassIdByExamAndClassIds = function (data, callback) {
	servers.POST({
		url: "/exam/api/sxt-back/get_class_id_by_exam_and_classids",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSXTApi-getClassIdByExamAndClassIds",
		query: {
			examId: data.examId,
			classIds: data.classIds
		}
	}, callback);
};
/** End ExamSXTApi-getClassIdByExamAndClassIds */



/** 
 * Created by ExamClassPartApi-findAll
 *
 * 查询学校全部的学部数据 (郑强) #2017-03-15#
 *
 */
exports.ExamClassPartApi_findAll = function (data, callback) {
	servers.GET({
		url: "/api/setting-class-part/find_all",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-findAll"
	}, callback);
};
/** End ExamClassPartApi-findAll */



/** 
 * Created by AnalysisSchoolApi-exportSection
 *
 * 区县、学区、乡镇、学校分数段分析Excel导出 #2017-04-11#
 *
 * @param 	分数段分析参数列表-Body
 */
exports.AnalysisSchoolApi_exportSection = function (data, callback) {
	servers.POST({
		url: "/api/school/export_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-exportSection",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-exportSection */



/** 
 * Created by ExamCommonApi-findCityGradeBySchoolGradeId
 *
 * 根据校级年级ID查询市级年级(向发钧) #2017-03-17#
 *
 * @schoolGradeId 	校级年级ID-Number
 */
exports.ExamCommonApi_findCityGradeBySchoolGradeId = function (data, callback) {
	servers.GET({
		url: "/platform/api/common/find_city_grade/"+data.schoolGradeId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findCityGradeBySchoolGradeId",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findCityGradeBySchoolGradeId */



/** 
 * Created by AnalysisBrotherSchoolApi-findExtendStudents
 *
 * 有效上线优生分析接口 #2017-03-10#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisBrotherSchoolApi_findExtendStudents = function (data, callback) {
	servers.POST({
		url: "/api/brother-school/find_valid_extend_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-findExtendStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-findExtendStudents */



/** 
 * Created by PlatformAccountApi-listSubjectLeaders
 *
 * 根据学科ID列表查询教研员列表(胡君) #2017-03-09#
 *
 * @dto 	ParamSubjectsDTO-Body
 */
exports.PlatformAccountApi_listSubjectLeaders = function (data, callback) {
	servers.POST({
		url: "/platform/api/account/list_subject_leaders",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformAccountApi-listSubjectLeaders",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PlatformAccountApi-listSubjectLeaders */



/** 
 * Created by ExamPaperSplitApi-courseDropdown
 *
 * 根据考试ID查询自定义分卷下拉数据 (郑强) #2017-04-21#
 *
 * @examId 	考试ID-String
 */
exports.ExamPaperSplitApi_courseDropdown = function (data, callback) {
	servers.GET({
		url: "/api/setting-paper-split/course_dropdown/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-courseDropdown",
		query: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-courseDropdown */



/** 
 * Created by ExamSchoolGroupApi-listSchoolsPinyin
 *
 * 查询当前区县学校列表 (陈显官) #2017-04-11#
 *
 * @phases 	将要查询的多个学段-Body
 */
exports.ExamSchoolGroupApi_listSchoolsPinyin = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-group/list_schools_pinyin",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-listSchoolsPinyin",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamSchoolGroupApi-listSchoolsPinyin */



/** 
 * Created by ExamIndexApi-list_to_edit
 *
 * 首页 - 待编辑考试列表 #2017-03-08#
 *
 * @count 	返回记录数-Number
 */
exports.ExamIndexApi_list_to_edit = function (data, callback) {
	servers.GET({
		url: "/api/index/list_to_edit/"+data.count,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-list_to_edit",
		query: {
		}
	}, callback);
};
/** End ExamIndexApi-list_to_edit */



/** 
 * Created by ExamQuestionApi-downloadTemplate
 *
 * 下载双向细目表Excel导入模板 (郑强) #2017-03-17#
 *
 */
exports.ExamQuestionApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/api/question/download_template",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-downloadTemplate"
	}, callback);
};
/** End ExamQuestionApi-downloadTemplate */



/** 
 * Created by AnalysisBrotherSchoolApi-findExtendStudent
 *
 * 兄弟学校有效上线优生对比 #2017-03-11#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_findExtendStudent = function (data, callback) {
	servers.GET({
		url: "/api/brother-school/find_extend_students/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-findExtendStudent",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-findExtendStudent */



/** 
 * Created by AnalysisRegionPaperApi-exportClassQuestion
 *
 * 导出试卷小题分析 #2017-04-05#
 *
 * @examCourseId 	考试科目ID-String * @regionId 	区域ID-String
 */
exports.AnalysisRegionPaperApi_exportClassQuestion = function (data, callback) {
	servers.GET({
		url: "/api/region-paper/export_question/"+data.examCourseId+"/"+data.regionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportClassQuestion",
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportClassQuestion */



/** 
 * Created by AnalysisRegionPaperApi-findSplitPaper
 *
 * 试卷主客观、分卷分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_findSplitPaper = function (data, callback) {
	servers.POST({
		url: "/api/region-paper/find_split_paper",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findSplitPaper",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findSplitPaper */



/** 
 * Created by AnalysisMobileStudentApi-findStudentPoint
 *
 * 学生试卷知识点分析(刘世平) #2017-03-23#
 *
 * @classId 	班级id-String
 * @studentId 	学生id-String
 * @examCourseId 	考试科目id-String
 */
exports.AnalysisMobileStudentApi_findStudentPoint = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/student/find_student_point",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findStudentPoint",
		query: {
			classId: data.classId,
			studentId: data.studentId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findStudentPoint */



/** 
 * Created by AnalysisRegionPaperApi-exportRegionAbility
 *
 * 导出能力层次分析 #2017-04-05#
 *
 * @examCourseId 	考试科目ID-String * @regionId 	区域ID-String
 */
exports.AnalysisRegionPaperApi_exportRegionAbility = function (data, callback) {
	servers.GET({
		url: "/api/region-paper/export_region_ability/"+data.examCourseId+"/"+data.regionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportRegionAbility",
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportRegionAbility */



/** 
 * Created by ExamQueryApi-finishAnalysisSetting
 *
 * 分析设置完成后，改变考试状态 (陈显官) #2017-03-30#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_finishAnalysisSetting = function (data, callback) {
	servers.PUT({
		url: "/exam/api/basic/finish_analysis_setting/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-finishAnalysisSetting",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-finishAnalysisSetting */



/** 
 * Created by AnalysisPaperApi-exportChoiceQuestion
 *
 * 导出选择题答案分布分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_exportChoiceQuestion = function (data, callback) {
	servers.POST({
		url: "/api/paper/export_choice_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportChoiceQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportChoiceQuestion */



/** 
 * Created by AnalysisMobileTouchLineApi-findStudentScore
 *
 * 踩线生单科超越率、分数线列表 #2017-03-23#
 *
 * @studentId 	学生id-String
 * @examId 	考试id-String
 */
exports.AnalysisMobileTouchLineApi_findStudentScore = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/touch-line/find_student_score",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-findStudentScore",
		query: {
			studentId: data.studentId,
			examId: data.examId
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-findStudentScore */



/** 
 * Created by AnalysisSchoolApi-exportAverage
 *
 * 区县、学区、乡镇、学校平均分分析Excel导出 #2017-04-11#
 *
 * @param 	平均分分析参数列表-Body
 */
exports.AnalysisSchoolApi_exportAverage = function (data, callback) {
	servers.POST({
		url: "/api/school/export_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-exportAverage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-exportAverage */



/** 
 * Created by AnalysisMobileStudentApi-findSingleCompare
 *
 * 学生-学生的四次考试对比（孟加鑫） #2017-03-27#
 *
 * @studentId 	学生Id-String
 */
exports.AnalysisMobileStudentApi_findSingleCompare = function (data, callback) {
	servers.GET({
		url: "/analysis/api/mobile/student/find_single_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findSingleCompare",
		query: {
			studentId: data.studentId
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findSingleCompare */



/** 
 * Created by AnalysisMobileTouchLineApi-countStudents
 *
 * 踩线生统计 #2017-03-03#
 *
 * @schoolId 	学校ID-String * @examId 	考试ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisMobileTouchLineApi_countStudents = function (data, callback) {
	servers.GET({
		url: "/api/touch-line/count_students/"+data.schoolId+"/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-countStudents",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-countStudents */



/** 
 * Created by AnalysisPaperApi-findClassPoint
 *
 * 试卷知识点分析 #2017-03-23#
 *
 * @examCourseId 	考试科目id-String
 * @classId 	班级id-String
 */
exports.AnalysisPaperApi_findClassPoint = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/paper/find_class_point",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassPoint",
		query: {
			examCourseId: data.examCourseId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassPoint */



/** 
 * Created by AnalysisMobileStudentApi-findMultiCompare
 *
 * 学生-两个学生考试对比（孟加鑫） #2017-03-27#
 *
 * @param 	参数列表-Body
 */
exports.AnalysisMobileStudentApi_findMultiCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/student/find_multi_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findMultiCompare",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findMultiCompare */



/** 
 * Created by AnalysisStudentApi-findStudentCourseRatio
 *
 * 学生考试成绩概况学生学科得分率分析 #2017-04-26#
 *
 * @examId 	考试Id-String * @studentId 	学生Id-String
 */
exports.AnalysisStudentApi_findStudentCourseRatio = function (data, callback) {
	servers.GET({
		url: "/api/student/find_student_course_ratio/"+data.examId+"/"+data.studentId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentCourseRatio",
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentCourseRatio */



/** 
 * Created by AnalysisStudentApi-findStudentQuestionRatio
 *
 * 学生考试成绩概况学生小题得分率分析 #2017-03-20#
 *
 * @param 	学生小题得分率参数对象-Body
 */
exports.AnalysisStudentApi_findStudentQuestionRatio = function (data, callback) {
	servers.POST({
		url: "/api/student/find_student_question_ratio",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentQuestionRatio",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentQuestionRatio */



/** 
 * Created by AnalysisBrotherSchoolApi-exportExtendStudents
 *
 * 导出有效上线优生分析接口 #2017-03-16#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisBrotherSchoolApi_exportExtendStudents = function (data, callback) {
	servers.POST({
		url: "/api/brother-school/export_valid_extend_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-exportExtendStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-exportExtendStudents */



/** 
 * Created by AnalysisRegionPaperApi-exportSelectionQuestion
 *
 * 导出试卷选考题分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_exportSelectionQuestion = function (data, callback) {
	servers.POST({
		url: "/api/region-paper/export_selection_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportSelectionQuestion",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportSelectionQuestion */



/** 
 * Created by ExamPaperSplitApi-save
 *
 * 保存分卷设置 (郑强) #2017-03-15#
 *
 * @splitList 	考试计算规则列表数据-Body
 */
exports.ExamPaperSplitApi_save = function (data, callback) {
	servers.POST({
		url: "/api/setting-paper-split/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-save",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-save */



/** 
 * Created by ExamStudentImportApi-initCache
 *
 * 仅限测试 导入准考证提前缓存云平台数据 (龚德志) #2017-04-17# 
 *
 * @examId 	考试mongo-ID-String
 */
exports.ExamStudentImportApi_initCache = function (data, callback) {
	servers.POST({
		url: "/exam/api/examstudent/import_data/init_cache/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-initCache",
		query: {
		}
	}, callback);
};
/** End ExamStudentImportApi-initCache */



/** 
 * Created by ExamQueryApi-page
 *
 * 查询考试列表 (陈显官) #2017-04-12#
 *
 * @queryPageDto 	queryPageDto-Body
 */
exports.ExamQueryApi_page = function (data, callback) {
	servers.POST({
		url: "/exam/api/query/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-page",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-page */



/** 
 * Created by ExamBrotherSchoolApi-find
 *
 * 成绩分析设置 - 查询兄弟学校（龚德志) #2017-03-03#
 *
 * @orgId 	当前学校的机构ID-String
 */
exports.ExamBrotherSchoolApi_find = function (data, callback) {
	servers.GET({
		url: "/exam/api/setting-brother-school/find/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBrotherSchoolApi-find",
		query: {
		}
	}, callback);
};
/** End ExamBrotherSchoolApi-find */



/** 
 * Created by ExamSchoolDistrictApi-page
 *
 * 查询当前区县学区分页列表 (陈显官) #2017-03-10#
 *
 * @pageDto 	pageDto-Body
 */
exports.ExamSchoolDistrictApi_page = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-district/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-page",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-page */



/** 
 * Created by ExamBasicApi-modifyExam
 *
 * 修改考试 (陈显官) #2017-03-30#
 *
 * @modifyExam 	modifyExam-Body
 */
exports.ExamBasicApi_modifyExam = function (data, callback) {
	servers.PUT({
		url: "/exam/api/basic/modify_exam",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBasicApi-modifyExam",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamBasicApi-modifyExam */



/** 
 * Created by ExamScoreImportApi-listFail
 *
 * 查询导入失败的学生列表 (陈显官) #2017-03-27#
 *
 * @pageParamDTO 	pageParamDTO-Body
 */
exports.ExamScoreImportApi_listFail = function (data, callback) {
	servers.POST({
		url: "/exam/api/score-import/list_fail",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-listFail",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamScoreImportApi-listFail */



/** 
 * Created by AnalysisMobileClassApi-findStudentList
 *
 * 班级-学生分数排名 #2017-03-27#
 *
 * @examId 	考试Id-String
 * @classId 	班级Id-String
 * @examCourseId 	科目Id-String
 */
exports.AnalysisMobileClassApi_findStudentList = function (data, callback) {
	servers.GET({
		url: "/analysis/api/mobile/class/find_student_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileClassApi-findStudentList",
		query: {
			examId: data.examId,
			classId: data.classId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End AnalysisMobileClassApi-findStudentList */



/** 
 * Created by ExamScoreImportApi-saveMarkToDatabase
 *
 * 保存缓存中成绩数据到数据库中 (陈显官) #2017-03-22#测试使用
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreImportApi_saveMarkToDatabase = function (data, callback) {
	servers.GET({
		url: "/exam/api/score-import/save_mark_to_database/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-saveMarkToDatabase",
		query: {
		}
	}, callback);
};
/** End ExamScoreImportApi-saveMarkToDatabase */



/** 
 * Created by ExamTownApi-remove
 *
 * 删除乡镇 (陈显官) #2017-03-10#
 *
 * @id 	乡镇ID-String
 */
exports.ExamTownApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/exam/api/town/remove/"+data.id,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-remove",
		query: {
		}
	}, callback);
};
/** End ExamTownApi-remove */



/** 
 * Created by ExamIndexApi-list_recent
 *
 * 首页 - 查询近期考试列表 #2017-03-08#
 *
 * @count 	返回记录数, 默认6-Number
 */
exports.ExamIndexApi_list_recent = function (data, callback) {
	servers.GET({
		url: "/api/index/list_recent/"+data.count,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-list_recent",
		query: {
		}
	}, callback);
};
/** End ExamIndexApi-list_recent */



/** 
 * Created by ExamScoreLineApi-lineTypeDropdown
 *
 * 分数线类型下拉选择 (郑强) #2017-03-16#
 *
 */
exports.ExamScoreLineApi_lineTypeDropdown = function (data, callback) {
	servers.GET({
		url: "/api/setting-score-line/line_types",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-lineTypeDropdown"
	}, callback);
};
/** End ExamScoreLineApi-lineTypeDropdown */



/** 
 * Created by ExamClassPartApi-create
 *
 * 保存学部设置 (郑强) #2017-03-15#
 *
 * @classGroupList 	学部设置数据-Body
 */
exports.ExamClassPartApi_create = function (data, callback) {
	servers.POST({
		url: "/api/setting-class-part/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamClassPartApi-create */



/** 
 * Created by ProcessMainStartApi-startExamCalculation
 *
 * 所有计算触发入口 (向发钧) #2017-04-07#
 *
 * @examId 	examId-String
 */
exports.ProcessMainStartApi_startExamCalculation = function (data, callback) {
	servers.GET({
		url: "/process/api/basic/start/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ProcessMainStartApi-startExamCalculation",
		query: {
		}
	}, callback);
};
/** End ProcessMainStartApi-startExamCalculation */



/** 
 * Created by ExamQuestionApi-export
 *
 * 下载一个课程的双向细目表Excel数据 (郑强) #2017-03-17#
 *
 * @courseId 	考试课程ID-String
 */
exports.ExamQuestionApi_export = function (data, callback) {
	servers.GET({
		url: "/api/question/export/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-export",
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-export */



/** 
 * Created by AnalysisBrotherSchoolApi-findAverage
 *
 * 兄弟学校平均分对比 #2017-03-11#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_findAverage = function (data, callback) {
	servers.GET({
		url: "/api/brother-school/find_average/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-findAverage",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-findAverage */



/** 
 * Created by AnalysisMobileSchoolApi-findClassList
 *
 * 学校-考试所参加班级 #2017-03-29#
 *
 * @schoolId 	学校Id-String
 * @examId 	考试Id-String
 * @examCourseId 	科目Id-String
 */
exports.AnalysisMobileSchoolApi_findClassList = function (data, callback) {
	servers.GET({
		url: "/analysis/api/mobile/school/find_class_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileSchoolApi-findClassList",
		query: {
			schoolId: data.schoolId,
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End AnalysisMobileSchoolApi-findClassList */



/** 
 * Created by AnalysisClassApi-findClassSection
 *
 * 班级-分数段分析 #2017-04-17#
 *
 * @param 	班级-分数段分析参数列表-Body
 */
exports.AnalysisClassApi_findClassSection = function (data, callback) {
	servers.POST({
		url: "/api/class/find_class_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassSection",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassSection */



/** 
 * Created by AnalysisMobilePaperApi-findClassQuestion
 *
 * 试卷小题分析 #2017-03-23#
 *
 * @examCourseId 	考试科目id-String
 * @classId 	班级id-String
 */
exports.AnalysisMobilePaperApi_findClassQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/paper/find_class_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobilePaperApi-findClassQuestion",
		query: {
			examCourseId: data.examCourseId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisMobilePaperApi-findClassQuestion */



/** 
 * Created by AnalysisPaperApi-findClassPoint_1
 *
 * 试卷知识点分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findClassPoint_1 = function (data, callback) {
	servers.POST({
		url: "/api/paper/find_class_point",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassPoint_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassPoint_1 */



/** 
 * Created by ExamClassPartApi-page
 *
 * 学部分页查询 (郑强) #2017-03-01#
 *
 * @pageableDto 	分页参数对象-Body
 */
exports.ExamClassPartApi_page = function (data, callback) {
	servers.POST({
		url: "/api/setting-class-part/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-page",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamClassPartApi-page */



/** 
 * Created by ExamQuestionApi-remove
 *
 * 根据考试试题的ID进行考试试题删除操作 (郑强) #2017-03-17#
 *
 * @questionId 	试题ID-String
 */
exports.ExamQuestionApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/api/question/remove/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-remove",
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-remove */



/** 
 * Created by ExamSXTApi-getCityGradeExams
 *
 * 查询市级年级和已发布的考试 (陈显官) #2017-04-25#
 *
 * @orgId 	市级组织机构ID-String
 */
exports.ExamSXTApi_getCityGradeExams = function (data, callback) {
	servers.POST({
		url: "/exam/api/sxt-back/get_city_grade_exams",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSXTApi-getCityGradeExams",
		query: {
			orgId: data.orgId
		}
	}, callback);
};
/** End ExamSXTApi-getCityGradeExams */



/** 
 * Created by AnalysisMobileClassApi-findExamCompare
 *
 * 班级-多次考试对比 #2017-03-30#
 *
 * @param 	参数列表-Body
 */
exports.AnalysisMobileClassApi_findExamCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/class/find_exam_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileClassApi-findExamCompare",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileClassApi-findExamCompare */



/** 
 * Created by ExamScoreLineApi-remove
 *
 * 根据分数线的ID进行分数线删除操作 (郑强) #2017-03-01#
 *
 * @scoreLineId 	分数线的ID-String
 */
exports.ExamScoreLineApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/api/setting-score-line/remove/"+data.scoreLineId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-remove",
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-remove */



/** 
 * Created by AnalysisPaperApi-exportClassAbility
 *
 * 导出能力层次分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_exportClassAbility = function (data, callback) {
	servers.POST({
		url: "/api/paper/export_class_ability",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportClassAbility",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportClassAbility */



/** 
 * Created by AnalysisBrotherSchoolApi-exportAverage
 *
 * 导出兄弟学校平均分对比 #2017-03-16#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_exportAverage = function (data, callback) {
	servers.GET({
		url: "/api/brother-school/export_average/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-exportAverage",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-exportAverage */



/** 
 * Created by ExamStudentImportApi-listNoUpdate
 *
 * 查询无准考证学生列表 (龚德志) #2017-03-17#
 *
 * @pageReq 	查询无准考证学生列表参数对象-Body
 */
exports.ExamStudentImportApi_listNoUpdate = function (data, callback) {
	servers.POST({
		url: "/exam/api/examstudent/list_no_update",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-listNoUpdate",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamStudentImportApi-listNoUpdate */



/** 
 * Created by ExamIndexApi-countBySemester
 *
 * 首页 - 查询当前学期所有考试次数 #2017-03-08#
 *
 */
exports.ExamIndexApi_countBySemester = function (data, callback) {
	servers.GET({
		url: "/api/index/count_semester",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-countBySemester"
	}, callback);
};
/** End ExamIndexApi-countBySemester */



/** 
 * Created by ExamConsolidationApi-save
 *
 * 保存巩固率设置数据 (郑强) #2017-03-17#
 *
 * @consolidations 	巩固率设置数据-Body
 */
exports.ExamConsolidationApi_save = function (data, callback) {
	servers.POST({
		url: "/exam/api/consolidation/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamConsolidationApi-save",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamConsolidationApi-save */



/** 
 * Created by ExamSchoolGroupApi-existByRegion
 *
 * 查询当前区县是否存在学校分类 (陈显官) #2017-04-14#
 *
 */
exports.ExamSchoolGroupApi_existByRegion = function (data, callback) {
	servers.GET({
		url: "/exam/api/school-group/exist_by_region",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-existByRegion"
	}, callback);
};
/** End ExamSchoolGroupApi-existByRegion */



/** 
 * Created by ExamQueryApi-pageForStudent
 *
 * 查询学生考试列表 (陈显官) #2017-04-12#
 *
 * @queryPageForStudentDTO 	queryPageForStudentDTO-Body
 */
exports.ExamQueryApi_pageForStudent = function (data, callback) {
	servers.POST({
		url: "/exam/api/query/page_for_student",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-pageForStudent",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-pageForStudent */



/** 
 * Created by ExamIndexApi-hello-test
 *
 * 测试接口1
 *
 * @id 	id-Number
 */
exports.ExamIndexApi_hello_test = function (data, callback) {
	servers.GET({
		url: "/api/index/hello/"+data.id,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-hello-test",
		query: {
		}
	}, callback);
};
/** End ExamIndexApi-hello-test */



/** 
 * Created by ExamTargetSettingApi-downloadTemplate
 *
 * 成绩分析设置 - 目标参照模版下载（龚德志) #2017-03-13#
 *
 * @examId 	考试ID-String * @orgId 	当前学校ID-String * @artCategory 	0：不分科；1：文科；2：理科-Number
 */
exports.ExamTargetSettingApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/exam/api/target/download_template/"+data.examId+"/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-downloadTemplate",
		query: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End ExamTargetSettingApi-downloadTemplate */



/** 
 * Created by AnalysisStudentApi-findStudentGradeExamTrend
 *
 * 学生成绩走势年级排名 #2017-03-22#
 *
 * @param 	学生成绩走势年级级排名参数列表-Body
 */
exports.AnalysisStudentApi_findStudentGradeExamTrend = function (data, callback) {
	servers.POST({
		url: "/api/student/find_student_grade_exam_trend",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentGradeExamTrend",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentGradeExamTrend */



/** 
 * Created by ExamScoreLineApi-listByExamAndLineType
 *
 * 根据考试ID,分数线类型查询分数线设置的详细数据 (郑强) #2017-03-31#
 *
 * @examId 	考试ID-String * @lineType 	分数线类型-Number
 */
exports.ExamScoreLineApi_listByExamAndLineType = function (data, callback) {
	servers.GET({
		url: "/api/setting-score-line/list/"+data.examId+"/"+data.lineType,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-listByExamAndLineType",
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-listByExamAndLineType */



/** 
 * Created by AnalysisMobileExcellentApi-findStudents
 *
 * 本次考试特优生列表查询
 *
 * @params 	查询参数-Body
 */
exports.AnalysisMobileExcellentApi_findStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/api/mobile/excellent/find_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileExcellentApi-findStudents",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AnalysisMobileExcellentApi-findStudents */



/** 
 * Created by ExamSchoolDistrictApi-listSchoolsPinyin
 *
 * 查询当前区县学校列表 (陈显官) #2017-04-11#
 *
 * @phases 	将要查询的多个学段-Body
 */
exports.ExamSchoolDistrictApi_listSchoolsPinyin = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-district/list_schools_pinyin",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-listSchoolsPinyin",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-listSchoolsPinyin */



/** 
 * Created by ExamIndexApi-count_grade
 *
 * 首页 - 按考试年级统计考试数量 #2017-03-08#
 *
 */
exports.ExamIndexApi_count_grade = function (data, callback) {
	servers.GET({
		url: "/api/index/count_grade",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-count_grade"
	}, callback);
};
/** End ExamIndexApi-count_grade */



/** 
 * Created by ExamQueryApi-listCourses
 *
 * 查询一个考试的所有单科科目 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_listCourses = function (data, callback) {
	servers.GET({
		url: "/exam/api/query/list_courses/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-listCourses",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-listCourses */



/** 
 * Created by ExamSchoolGroupApi-create
 *
 * 新建学校分类 (陈显官) #2017-03-10#
 *
 * @createDto 	待新建学校分类信息-Body
 */
exports.ExamSchoolGroupApi_create = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-group/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamSchoolGroupApi-create */



/** 
 * Created by ExamScoreImportApi-importData
 *
 * 导入成绩 (陈显官) #2017-04-05#
 *
 * @examMarkImportDto 	成绩导入文件信息-Body
 */
exports.ExamScoreImportApi_importData = function (data, callback) {
	servers.POST({
		url: "/exam/api/score-import/import_data",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamScoreImportApi-importData */



/** 
 * Created by ExamPaperSplitApi-remove
 *
 * 根据分卷的ID进行分卷信息删除操作 (郑强) #2017-03-15#
 *
 * @splitId 	分卷ID-String
 */
exports.ExamPaperSplitApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/api/setting-paper-split/remove/"+data.splitId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-remove",
		query: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-remove */



/** 
 * Created by ExamClassLevelApi-modify
 *
 * 修改班级层次设置  (郑强) #2017-03-15#
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.ExamClassLevelApi_modify = function (data, callback) {
	servers.POST({
		url: "/api/setting-class-level/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamClassLevelApi-modify */



/** 
 * Created by ExamClassPartApi-remove
 *
 * 根据学部ID删除学部数据 (郑强) #2017-03-15#
 *
 * @classPartId 	学部ID-String
 */
exports.ExamClassPartApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/api/setting-class-part/remove/"+data.classPartId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-remove",
		query: {
		}
	}, callback);
};
/** End ExamClassPartApi-remove */



/** 
 * Created by ExamSXTApi-getPublishExamsByOrg
 *
 * 查询组织机构对应的已发布考试 (陈显官) #2017-04-25#
 *
 * @excludeExamIds 	不需要查询的考试ID-
 * @orgId 	市级或区县组织机构ID-String
 * @startTime 	考试时间-开始值（毫秒）-Number
 * @endTime 	考试时间-结束值（毫秒）-Number
 */
exports.ExamSXTApi_getPublishExamsByOrg = function (data, callback) {
	servers.POST({
		url: "/exam/api/sxt-back/get_publish_exams_by_org",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSXTApi-getPublishExamsByOrg",
		query: {
			excludeExamIds: data.excludeExamIds,
			orgId: data.orgId,
			startTime: data.startTime,
			endTime: data.endTime
		}
	}, callback);
};
/** End ExamSXTApi-getPublishExamsByOrg */



/** 
 * Created by ExamCalculateRuleApi-calculateRuleTypeDropdown
 *
 * 分析规则设置类型下拉选择 (郑强) type:[1:0分计算规则 2:小数点取舍规则 3:综合学科计算规则] #2017-04-14#
 *
 * @type 	计算规则类型-Number
 */
exports.ExamCalculateRuleApi_calculateRuleTypeDropdown = function (data, callback) {
	servers.GET({
		url: "/api/setting-calculate-rule/caculate_rule_types/"+data.type,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCalculateRuleApi-calculateRuleTypeDropdown",
		query: {
		}
	}, callback);
};
/** End ExamCalculateRuleApi-calculateRuleTypeDropdown */



/** 
 * Created by ExamSXTApi-getClassNewExams
 *
 * 查询多个班级最近几个考试 (陈显官) #2017-04-25#
 *
 * @classIds 	多个云平台班级ID-
 * @limit 	最多的记录数量-Number
 * @isJustPublish 	是否只查询发布的，默认false，查询所有考试-Boolean
 */
exports.ExamSXTApi_getClassNewExams = function (data, callback) {
	servers.POST({
		url: "/exam/api/sxt-back/get_class_new_exams",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSXTApi-getClassNewExams",
		query: {
			classIds: data.classIds,
			limit: data.limit,
			isJustPublish: data.isJustPublish
		}
	}, callback);
};
/** End ExamSXTApi-getClassNewExams */



/** 
 * Created by ExamQueryApi-getAnalysisInfo
 *
 * 分析页面使用，考试详情 (陈显官) #2017-04-13#
 *
 * @paramDto 	paramDto-Body
 */
exports.ExamQueryApi_getAnalysisInfo = function (data, callback) {
	servers.POST({
		url: "/exam/api/query/get_analysis_info",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-getAnalysisInfo",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-getAnalysisInfo */



/** 
 * Created by ExamStudentImportApi-getImportResult
 *
 * 导入任务的执行结果 (龚德志) #2017-03-17# 
 *
 * @examId 	考试ID-String * @taskId 	某一次导入的结果，不传则查询数据中当前状态-String
 */
exports.ExamStudentImportApi_getImportResult = function (data, callback) {
	servers.GET({
		url: "/exam/api/examstudent/import_data/result/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-getImportResult",
		query: {
			taskId: data.taskId
		}
	}, callback);
};
/** End ExamStudentImportApi-getImportResult */



/** 
 * Created by ExamQuestionApi-findQuestionNums
 *
 * 根据考试科目查询科目的试题数据,此接口供分卷选择题号使用 (郑强) #2017-03-17#
 *
 * @courseId 	考试课程ID-String
 */
exports.ExamQuestionApi_findQuestionNums = function (data, callback) {
	servers.GET({
		url: "/api/question/find_question_nums/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findQuestionNums",
		query: {
		}
	}, callback);
};
/** End ExamQuestionApi-findQuestionNums */



/** 
 * Created by ExamQueryApi-publish
 *
 * 发布成绩 (陈显官) #2017-03-30#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_publish = function (data, callback) {
	servers.PUT({
		url: "/exam/api/basic/publish/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-publish",
		query: {
		}
	}, callback);
};
/** End ExamQueryApi-publish */



/** 
 * Created by ExamScoreLineApi-save
 *
 * 保存分数线列表数据 (郑强) #2017-03-16#
 *
 * @scoreLineList 	分数线列表数据-Body
 */
exports.ExamScoreLineApi_save = function (data, callback) {
	servers.POST({
		url: "/api/setting-score-line/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-save",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamScoreLineApi-save */



/** 
 * Created by AnalysisMobileStudentApi-findScoreList
 *
 * 学生-成绩详情(孟加鑫) #2017-04-26#
 *
 * @examId 	考试Id-String
 * @studentId 	学生Id-String
 */
exports.AnalysisMobileStudentApi_findScoreList = function (data, callback) {
	servers.GET({
		url: "/analysis/api/mobile/student/find_score_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findScoreList",
		query: {
			examId: data.examId,
			studentId: data.studentId
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findScoreList */



/** 
 * Created by ExamStudentImportApi-importData
 *
 * 导入准考证 (龚德志) #2017-03-17#
 *
 * @importStudent 	OSS准考证文件信息-Body
 */
exports.ExamStudentImportApi_importData = function (data, callback) {
	servers.POST({
		url: "/exam/api/examstudent/import_data/oss",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ExamStudentImportApi-importData */



/** 
 * Created by ExamTownApi-existByRegion
 *
 * 查询当前区县是否存在乡镇 (陈显官) #2017-04-14#
 *
 */
exports.ExamTownApi_existByRegion = function (data, callback) {
	servers.GET({
		url: "/exam/api/town/exist_by_region",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-existByRegion"
	}, callback);
};
/** End ExamTownApi-existByRegion */



/** 
 * Created by ExamSchoolGroupApi-list
 *
 * 查询当前区县学校分类列表 (陈显官) #2017-03-10#
 *
 */
exports.ExamSchoolGroupApi_list = function (data, callback) {
	servers.POST({
		url: "/exam/api/school-group/list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-list"
	}, callback);
};
/** End ExamSchoolGroupApi-list */


