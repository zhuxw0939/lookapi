/**!
 * swagger导入测试-第一轮 v1.2
 * 接口数量 116
 * http://192.168.60.98:3300/api/list?p_id=SylTlo0ocx&v_id=SJgJ$BX8ox&g_id=rkecWjULjl
 *
 * 2017-03-25 13:20:49 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../common/servers');



/** 
 * Created by AnalysisExcellentApi-saveExcellent
 *
 * 保存特优生 #2017-03-18#
 *
 * @students 	特优生-Body
 */
exports.AnalysisExcellentApi_saveExcellent = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/excellent/save_excellent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-saveExcellent",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-saveExcellent */



/** 
 * Created by AnalysisStudentApi-findStudentRank
 *
 * 学生考试成绩概况学生全市、校、班排名 #2017-03-20#
 *
 * @schoolId 	学校Id-String * @studentId 	学生Id-String
 */
exports.AnalysisStudentApi_findStudentRank = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/student/find_student_rank/"+data.schoolId+"/"+data.studentId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentRank",
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentRank */



/** 
 * Created by AnalysisStudentApi-exportStudentQuestionRatio
 *
 * 学生考试成绩概况学生小题得分率分析Excel导出 #2017-03-20#
 *
 * @param 	学生小题得分率参数对象-Body
 */
exports.AnalysisStudentApi_exportStudentQuestionRatio = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/student/export_student_question_ratio",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-exportStudentQuestionRatio",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-exportStudentQuestionRatio */



/** 
 * Created by AnalysisRegionPaperApi-exportChoiceQuestion
 *
 * 导出选择题答案分布分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_exportChoiceQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region-paper/export_choice_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportChoiceQuestion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportChoiceQuestion */



/** 
 * Created by AnalysisRegionApi-findConsolidation
 *
 * 学区、乡镇、学校人员巩固率分析 #2017-03-15#
 *
 * @param 	人员巩固率分析参数列表-Body
 */
exports.AnalysisRegionApi_findConsolidation = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/find_consolidation",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-findConsolidation",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-findConsolidation */



/** 
 * Created by AnalysisClassApi-findClassCompare
 *
 * 班级-对比成绩分析 #2017-03-24#
 *
 * @param 	班级-对比成绩参数列表-Body
 */
exports.AnalysisClassApi_findClassCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/class/find_class_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassCompare",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassCompare */



/** 
 * Created by AnalysisStudentApi-exportStudentPointRatio
 *
 * 学生考试成绩概况学生知识点得分率Excel导出 #2017-03-20#
 *
 * @param 	学生知识点得分率参数列表-Body
 */
exports.AnalysisStudentApi_exportStudentPointRatio = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/student/export_student_point_ratio",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-exportStudentPointRatio",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-exportStudentPointRatio */



/** 
 * Created by AnalysisExcellentApi-findHistoryExcellents
 *
 * 历次考试特优生列表 #2017-03-18#
 *
 * @examId 	本次考试ID-String
 */
exports.AnalysisExcellentApi_findHistoryExcellents = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/excellent/find_history_excellents/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-findHistoryExcellents",
		form: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-findHistoryExcellents */



/** 
 * Created by AnalysisSchoolApi-findProminent
 *
 * 学校-优生统计 #2017-03-20#
 *
 * @param 	优生统计参数列表-Body
 */
exports.AnalysisSchoolApi_findProminent = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/school/find_prominent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-findProminent",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-findProminent */



/** 
 * Created by AnalysisMobileTouchLineApi-exportByRegion
 *
 * 导出区县踩线生列表 #2017-03-16#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisMobileTouchLineApi_exportByRegion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/touch-line/export_by_region",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-exportByRegion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-exportByRegion */



/** 
 * Created by AnalysisRegionApi-findScoreLine
 *
 * 区县-学校分数线分析 #2017-03-20#
 *
 * @param 	分数线分析参数列表-Body
 */
exports.AnalysisRegionApi_findScoreLine = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/find_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-findScoreLine",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-findScoreLine */



/** 
 * Created by AnalysisPaperApi-exportClassPoint
 *
 * 导出试卷知识点分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_exportClassPoint = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/paper/export_class_point",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportClassPoint",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportClassPoint */



/** 
 * Created by AnalysisRegionApi-findSection
 *
 * 区县-学校分数段分析 #2017-03-15#
 *
 * @param 	分数段分析参数列表-Body
 */
exports.AnalysisRegionApi_findSection = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/find_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-findSection",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-findSection */



/** 
 * Created by AnalysisTeacherApi-findAnalysisTeachers
 *
 * 任课教师分析 #2017-03-24#
 *
 * @param 	任课教师参数对象-Body
 */
exports.AnalysisTeacherApi_findAnalysisTeachers = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/teacher/find_analysis_teachers",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisTeacherApi-findAnalysisTeachers",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisTeacherApi-findAnalysisTeachers */



/** 
 * Created by AnalysisRegionPaperApi-exportClassQuestion
 *
 * 导出试卷小题分析 #2017-03-17#
 *
 * @examId 	考试ID-String * @examCourseId 	考试科目ID-String
 */
exports.AnalysisRegionPaperApi_exportClassQuestion = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/region-paper/export_class_question/"+data.examId+"/"+data.examCourseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportClassQuestion",
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportClassQuestion */



/** 
 * Created by AnalysisPaperApi-exportClassAbility
 *
 * 导出能力层次分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_exportClassAbility = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/paper/export_class_ability",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportClassAbility",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportClassAbility */



/** 
 * Created by AnalysisPaperApi-findStudentQuestion
 *
 * 学生试卷小题分析 #2017-03-23#
 *
 * @studentId 	学生id-String
 * @classId 	班级id-String
 */
exports.AnalysisPaperApi_findStudentQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/student/find_student_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findStudentQuestion",
		form: {
			studentId: data.studentId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisPaperApi-findStudentQuestion */



/** 
 * Created by AnalysisMobileTargetApi-exportClassTargets
 *
 * 导出目标参照列表 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisMobileTargetApi_exportClassTargets = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/target/export_class_targets",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTargetApi-exportClassTargets",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisMobileTargetApi-exportClassTargets */



/** 
 * Created by AnalysisClassApi-findClassScoreLine
 *
 * 班级-分数线分析 #2017-03-24#
 *
 * @param 	班级分数线参数列表-Body
 */
exports.AnalysisClassApi_findClassScoreLine = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/class/find_class_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassScoreLine",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassScoreLine */



/** 
 * Created by AnalysisPaperApi-findStudentPoint
 *
 * 学生试卷知识点分析 #2017-03-23#
 *
 * @studentId 	学生id-String
 * @classId 	班级id-String
 */
exports.AnalysisPaperApi_findStudentPoint = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/student/find_student_point",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findStudentPoint",
		form: {
			studentId: data.studentId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisPaperApi-findStudentPoint */



/** 
 * Created by AnalysisSchoolApi-exportAverage
 *
 * 区县、学区、乡镇、学校（校级）平均分分析Excel导出 #2017-03-24#
 *
 * @param 	平均分分析参数列表-Body
 */
exports.AnalysisSchoolApi_exportAverage = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/school/export_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-exportAverage",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-exportAverage */



/** 
 * Created by AnalysisTeacherApi-exportAnalysisTeachers
 *
 * 任课教师分析 #2017-03-24#
 *
 * @param 	任课教师参数对象-Body
 */
exports.AnalysisTeacherApi_exportAnalysisTeachers = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/teacher/export_analysis_teachers",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisTeacherApi-exportAnalysisTeachers",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisTeacherApi-exportAnalysisTeachers */



/** 
 * Created by AnalysisStudentApi-findStudent
 *
 * 学生考试成绩概况 #2017-03-20#
 *
 * @examId 	考试Id-String * @studentId 	学生Id-String
 */
exports.AnalysisStudentApi_findStudent = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/student/find_student/"+data.examId+"/"+data.studentId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudent",
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudent */



/** 
 * Created by AnalysisClassApi-exportClassAverage
 *
 * 班级-平均分分析Excel导出 #2017-03-24#
 *
 * @param 	班级平均分参数列表-Body
 */
exports.AnalysisClassApi_exportClassAverage = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/class/export_class_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-exportClassAverage",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisClassApi-exportClassAverage */



/** 
 * Created by AnalysisBrotherSchoolApi-exportExtendStudent
 *
 * 导出兄弟学校有效上线优生对比 #2017-03-16#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_exportExtendStudent = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/brother-school/export_extend_students/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-exportExtendStudent",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-exportExtendStudent */



/** 
 * Created by AnalysisRegionApi-exportSection
 *
 * 区县-学校分数段分析Excel导出 #2017-03-16#
 *
 * @param 	分数段分析参数列表-Body
 */
exports.AnalysisRegionApi_exportSection = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/export_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-exportSection",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-exportSection */



/** 
 * Created by AnalysisRegionApi-exportScoreLine
 *
 * 区县-学校分数线分析Excel导出 #2017-03-20#
 *
 * @param 	分数线分析参数列表-Body
 */
exports.AnalysisRegionApi_exportScoreLine = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/export_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-exportScoreLine",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-exportScoreLine */



/** 
 * Created by AnalysisRegionPaperApi-exportSelectionQuestion
 *
 * 导出试卷选考题分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_exportSelectionQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region-paper/export_selection_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportSelectionQuestion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportSelectionQuestion */



/** 
 * Created by AnalysisRegionPaperApi-findChoiceQuestion
 *
 * 选择题答案分布分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_findChoiceQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/region-paper/find_choice_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findChoiceQuestion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findChoiceQuestion */



/** 
 * Created by AnalysisRegionPaperApi-exportRegionAbility
 *
 * 导出能力层次分析 #2017-03-17#
 *
 * @examId 	考试ID-String * @examCourseId 	考试科目ID-String
 */
exports.AnalysisRegionPaperApi_exportRegionAbility = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/region-paper/export_region_ability/"+data.examId+"/"+data.examCourseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportRegionAbility",
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportRegionAbility */



/** 
 * Created by AnalysisMobileTargetApi-findClassTargets_1
 *
 * 目标参照列表 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisMobileTargetApi_findClassTargets_1 = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/target/find_class_targets",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTargetApi-findClassTargets_1",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisMobileTargetApi-findClassTargets_1 */



/** 
 * Created by AnalysisRegionApi-exportAverage
 *
 * 区县-学校平均分分析Excel导出 #2017-03-16#
 *
 * @param 	平均分分析参数列表-Body
 */
exports.AnalysisRegionApi_exportAverage = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/export_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-exportAverage",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-exportAverage */



/** 
 * Created by AnalysisBrotherSchoolApi-exportAverage
 *
 * 导出兄弟学校平均分对比 #2017-03-16#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_exportAverage = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/brother-school/export_average/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-exportAverage",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-exportAverage */



/** 
 * Created by AnalysisCustomReportApi-findReports
 *
 * 自定义报表列表 #2017-03-21#
 *
 * @param 	自定义报表参数对象-Body
 */
exports.AnalysisCustomReportApi_findReports = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/report/find_reports",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisCustomReportApi-findReports",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisCustomReportApi-findReports */



/** 
 * Created by AnalysisRegionApi-exportConsolidation
 *
 * 学区、乡镇、学校人员巩固率分析Excel导出 #2017-03-15#
 *
 * @param 	人员巩固率分析参数列表-Body
 */
exports.AnalysisRegionApi_exportConsolidation = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/export_consolidation",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-exportConsolidation",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-exportConsolidation */



/** 
 * Created by AnalysisPaperApi-findChoiceQuestion
 *
 * 选择题答案分布分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findChoiceQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/paper/find_choice_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findChoiceQuestion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findChoiceQuestion */



/** 
 * Created by AnalysisExcellentApi-findRegionExcellent
 *
 * 市级、区县特优生列表 #2017-03-10#
 *
 * @param 	特优生列表参数列表对象-Body
 */
exports.AnalysisExcellentApi_findRegionExcellent = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/excellent/find_region_excellent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-findRegionExcellent",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-findRegionExcellent */



/** 
 * Created by AnalysisPaperApi-exportSplitPaper
 *
 * 导出试卷主客观、分卷分析 #2017-03-17#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisPaperApi_exportSplitPaper = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/paper/export_split_paper",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportSplitPaper",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportSplitPaper */



/** 
 * Created by AnalysisMobileExcellentApi-findStudents
 *
 * 本次考试班级特优生列表查询
 *
 * @examId 	考试id-String
 * @classId 	班级id-String
 */
exports.AnalysisMobileExcellentApi_findStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/excellent/find_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileExcellentApi-findStudents",
		form: {
			examId: data.examId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisMobileExcellentApi-findStudents */



/** 
 * Created by AnalysisTouchLineApi-findByRegion
 *
 * 市级、区县踩线生列表 #2017-03-10#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisTouchLineApi_findByRegion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/touch-line/find_by_region",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisTouchLineApi-findByRegion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisTouchLineApi-findByRegion */



/** 
 * Created by AnalysisStudentApi-findStudents
 *
 * 学生分析 #2017-03-22#
 *
 * @param 	学生分析参数列表-Body
 */
exports.AnalysisStudentApi_findStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/student/find_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudents */



/** 
 * Created by AnalysisSchoolApi-exportProminent
 *
 * 学校-优生统计Excel导出 #2017-03-20#
 *
 * @param 	优生统计参数列表-Body
 */
exports.AnalysisSchoolApi_exportProminent = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/school/export_prominent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-exportProminent",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-exportProminent */



/** 
 * Created by AnalysisPaperApi-exportChoiceQuestion
 *
 * 导出选择题答案分布分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_exportChoiceQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/paper/export_choice_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportChoiceQuestion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportChoiceQuestion */



/** 
 * Created by AnalysisExcellentApi-findStudents
 *
 * 特优生列表查询 #2017-03-10#
 *
 * @params 	查询参数-Body
 */
exports.AnalysisExcellentApi_findStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/excellent/find_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-findStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-findStudents */



/** 
 * Created by AnalysisExamCompareApi-findExamCompare
 *
 * 历次考试对比 #2017-03-22#
 *
 * @param 	历次考试对比参数列表-Body
 */
exports.AnalysisExamCompareApi_findExamCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/exam-compare/find_exam_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExamCompareApi-findExamCompare",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisExamCompareApi-findExamCompare */



/** 
 * Created by AnalysisPaperApi-exportSelectionQuestion
 *
 * 导出试卷选考题分析 #2017-03-17#
 *
 * @schoolId 	学校ID-String * @examCourseId 	考试科目ID-String * @classId 	班级ID-String
 */
exports.AnalysisPaperApi_exportSelectionQuestion = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/paper/export_selection_question/"+data.schoolId+"/"+data.examCourseId+"/"+data.classId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportSelectionQuestion",
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportSelectionQuestion */



/** 
 * Created by AnalysisRegionPaperApi-exportSplitPaper
 *
 * 导出试卷主客观、分卷分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_exportSplitPaper = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region-paper/export_split_paper",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportSplitPaper",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportSplitPaper */



/** 
 * Created by AnalysisMobileStudentApi-findSingleCompare
 *
 * 学生-学生的四次考试对比（孟加鑫） #2017-03-23#
 *
 * @studentId 	学生Id-String
 */
exports.AnalysisMobileStudentApi_findSingleCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/student/find_single_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findSingleCompare",
		form: {
			studentId: data.studentId
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findSingleCompare */



/** 
 * Created by AnalysisExcellentApi-exportStudents
 *
 * 导出学校特优生列表 #2017-03-16#
 *
 * @params 	查询参数-Body
 */
exports.AnalysisExcellentApi_exportStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/excellent/export_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-exportStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-exportStudents */



/** 
 * Created by AnalysisMobileStudentApi-findScoreList
 *
 * 学生-成绩详情 #2017-03-23#
 *
 * @examId 	考试Id-String
 * @studentId 	学生Id-String
 */
exports.AnalysisMobileStudentApi_findScoreList = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/mobile/student/find_score_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findScoreList",
		form: {
			examId: data.examId,
			studentId: data.studentId
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findScoreList */



/** 
 * Created by AnalysisMobileClassApi-findExamCompare
 *
 * 班级-多次考试对比 #2017-03-23#
 *
 * @param 	参数列表-Body
 */
exports.AnalysisMobileClassApi_findExamCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/class/find_exam_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileClassApi-findExamCompare",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisMobileClassApi-findExamCompare */



/** 
 * Created by AnalysisExcellentApi-exportRegionExcellent
 *
 * 导出区县特优生列表 #2017-03-16#
 *
 * @param 	特优生列表参数列表对象-Body
 */
exports.AnalysisExcellentApi_exportRegionExcellent = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/excellent/export_region_excellent",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-exportRegionExcellent",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-exportRegionExcellent */



/** 
 * Created by AnalysisClassApi-findClassAverage
 *
 * 班级-平均分分析 #2017-03-24#
 *
 * @param 	班级平均分参数列表-Body
 */
exports.AnalysisClassApi_findClassAverage = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/class/find_class_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassAverage",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassAverage */



/** 
 * Created by AnalysisPaperApi-findSelectionQuestion
 *
 * 试卷选考题分析 #2017-03-10#
 *
 * @schoolId 	学校ID-String * @examCourseId 	考试科目ID-String * @classId 	班级ID-String
 */
exports.AnalysisPaperApi_findSelectionQuestion = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/v1/paper/find_selection_question/"+data.schoolId+"/"+data.examCourseId+"/"+data.classId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findSelectionQuestion",
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findSelectionQuestion */



/** 
 * Created by AnalysisRegionPaperApi-findSelectionQuestion
 *
 * 试卷选考题分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_findSelectionQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/region-paper/find_selection_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findSelectionQuestion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findSelectionQuestion */



/** 
 * Created by AnalysisPaperApi-exportClassQuestion
 *
 * 导出试卷小题分析 #2017-03-17#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_exportClassQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/paper/export_class_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-exportClassQuestion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-exportClassQuestion */



/** 
 * Created by AnalysisRegionApi-findPass
 *
 * 区县及格率分析 #2017-03-15#
 *
 * @param 	区县及格率分析参数列表-Body
 */
exports.AnalysisRegionApi_findPass = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/find_pass",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-findPass",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-findPass */



/** 
 * Created by AnalysisBrotherSchoolApi-findExtendStudent
 *
 * 兄弟学校有效上线优生对比 #2017-03-11#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_findExtendStudent = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/v1/brother-school/find_extend_students/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-findExtendStudent",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-findExtendStudent */



/** 
 * Created by AnalysisMobileStudentApi-findTrend
 *
 * 学生-两个学生全校排名走势（孟加鑫） #2017-03-23#
 *
 * @studentIds 	学生Id集合-
 */
exports.AnalysisMobileStudentApi_findTrend = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/student/find_trend",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findTrend",
		form: {
			studentIds: data.studentIds
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findTrend */



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
		url: "/analysis/code/api/mobile/touch-line/find_student_score",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-findStudentScore",
		form: {
			studentId: data.studentId,
			examId: data.examId
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-findStudentScore */



/** 
 * Created by AnalysisRegionPaperApi-exportRegionPoint
 *
 * 导出试卷知识点分析 #2017-03-17#
 *
 * @examId 	考试ID-String * @examCourseId 	考试科目ID-String
 */
exports.AnalysisRegionPaperApi_exportRegionPoint = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/region-paper/export_region_point/"+data.examId+"/"+data.examCourseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-exportRegionPoint",
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-exportRegionPoint */



/** 
 * Created by AnalysisMobileClassApi-findExamTotal
 *
 * 班级-总分平均分、（平均分/分数线）上线人数 #2017-03-23#
 *
 * @examId 	考试Id-String
 * @classId 	班级Id-String
 */
exports.AnalysisMobileClassApi_findExamTotal = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/mobile/class/find_exam_total",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileClassApi-findExamTotal",
		form: {
			examId: data.examId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisMobileClassApi-findExamTotal */



/** 
 * Created by AnalysisMobileStudentApi-findMultiCompare
 *
 * 学生-两个学生考试对比（孟加鑫） #2017-03-23#
 *
 * @param 	参数列表-Body
 */
exports.AnalysisMobileStudentApi_findMultiCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/student/find_multi_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileStudentApi-findMultiCompare",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisMobileStudentApi-findMultiCompare */



/** 
 * Created by AnalysisClassApi-findClassExamTrend
 *
 * 班级-成绩走势排名 #2017-03-24#
 *
 * @param 	班级-成绩走势排名参数列表-Body
 */
exports.AnalysisClassApi_findClassExamTrend = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/class/find_class_exam_trend",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassExamTrend",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassExamTrend */



/** 
 * Created by AnalysisBrotherSchoolApi-exportScoreLine
 *
 * 导出兄弟学校分数线对比 #2017-03-16#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_exportScoreLine = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/brother-school/export_score_line/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-exportScoreLine",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-exportScoreLine */



/** 
 * Created by AnalysisSchoolApi-findAverage
 *
 * 区县、学区、乡镇、学校（校级）平均分分析 #2017-03-24#
 *
 * @param 	平均分分析参数列表-Body
 */
exports.AnalysisSchoolApi_findAverage = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/school/find_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-findAverage",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-findAverage */



/** 
 * Created by AnalysisMobileTouchLineApi-exportStudents
 *
 * 导出踩线生列表 #2017-03-16#
 *
 * @params 	查询参数-Body
 */
exports.AnalysisMobileTouchLineApi_exportStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/touch-line/export_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-exportStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-exportStudents */



/** 
 * Created by AnalysisPaperApi-findClassQuestion
 *
 * 试卷小题分析 #2017-03-23#
 *
 * @examCourseId 	考试科目id-String
 * @classId 	班级id-String
 */
exports.AnalysisPaperApi_findClassQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/paper/find_class_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassQuestion",
		form: {
			examCourseId: data.examCourseId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassQuestion */



/** 
 * Created by AnalysisClassApi-findClassSection
 *
 * 班级-分数段分析 #2017-03-24#
 *
 * @param 	班级-分数段分析参数列表-Body
 */
exports.AnalysisClassApi_findClassSection = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/class/find_class_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-findClassSection",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisClassApi-findClassSection */



/** 
 * Created by AnalysisExcellentApi-countStudents
 *
 * 特优生总数、比例统计 #2017-03-03#
 *
 * @schoolId 	学校ID-String * @examId 	考试ID-String
 */
exports.AnalysisExcellentApi_countStudents = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/v1/excellent/count_students/"+data.schoolId+"/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisExcellentApi-countStudents",
		form: {
		}
	}, callback);
};
/** End AnalysisExcellentApi-countStudents */



/** 
 * Created by AnalysisMobileTargetApi-countClassTargets
 *
 * 目标参照列表统计 #2017-03-03#
 *
 * @examId 	考试ID-String * @schoolId 	学校ID-String
 */
exports.AnalysisMobileTargetApi_countClassTargets = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/target/count_class_targets/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTargetApi-countClassTargets",
		form: {
		}
	}, callback);
};
/** End AnalysisMobileTargetApi-countClassTargets */



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
		url: "/analysis/code/api/mobile/paper/find_class_point",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassPoint",
		form: {
			examCourseId: data.examCourseId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassPoint */



/** 
 * Created by AnalysisMobileTouchLineApi-findStudents
 *
 * 踩线生列表查询 #2017-03-10#
 *
 * @params 	查询参数-Body
 */
exports.AnalysisMobileTouchLineApi_findStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/touch-line/find_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-findStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-findStudents */



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
		url: "/analysis/code/api/mobile/paper/find_class_ability",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassAbility",
		form: {
			examCourseId: data.examCourseId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassAbility */



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
		url: "/analysis/code/api/mobile/touch-line/find_student",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-findStudent",
		form: {
			schoolId: data.schoolId,
			examId: data.examId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-findStudent */



/** 
 * Created by AnalysisTargetApi-findClassTargets
 *
 * 目标参照列表 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisTargetApi_findClassTargets = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/target/find_class_targets",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisTargetApi-findClassTargets",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisTargetApi-findClassTargets */



/** 
 * Created by AnalysisSchoolApi-findSection
 *
 * 区县、学区、乡镇、学校（校级）分数段分析 #2017-03-24#
 *
 * @param 	分数段分析参数列表-Body
 */
exports.AnalysisSchoolApi_findSection = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/school/find_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-findSection",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-findSection */



/** 
 * Created by AnalysisMobileTouchLineApi-countStudents
 *
 * 踩线生统计 #2017-03-03#
 *
 * @schoolId 	学校ID-String * @examId 	考试ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisMobileTouchLineApi_countStudents = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/touch-line/count_students/"+data.schoolId+"/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-countStudents",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-countStudents */



/** 
 * Created by AnalysisBrotherSchoolApi-findScoreLine
 *
 * 兄弟学校分数线对比 #2017-03-11#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_findScoreLine = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/v1/brother-school/find_score_line/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-findScoreLine",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-findScoreLine */



/** 
 * Created by AnalysisSchoolApi-findScoreLine
 *
 * 区县、学区、乡镇、学校（校级）分数线分析 #2017-03-24#
 *
 * @param 	分数线分析参数列表-Body
 */
exports.AnalysisSchoolApi_findScoreLine = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/school/find_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-findScoreLine",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-findScoreLine */



/** 
 * Created by AnalysisSchoolApi-exportSection
 *
 * 区县、学区、乡镇、学校（校级）分数段分析Excel导出 #2017-03-24#
 *
 * @param 	分数段分析参数列表-Body
 */
exports.AnalysisSchoolApi_exportSection = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/school/export_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-exportSection",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-exportSection */



/** 
 * Created by AnalysisPaperApi-findStudentAbility
 *
 * 学生能力层次分析 #2017-03-23#
 *
 * @studentId 	学生id-String
 * @classId 	班级id-String
 */
exports.AnalysisPaperApi_findStudentAbility = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/student/find_student_ability",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findStudentAbility",
		form: {
			studentId: data.studentId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisPaperApi-findStudentAbility */



/** 
 * Created by AnalysisStudentApi-findStudentCourseRatio
 *
 * 学生考试成绩概况学生学科得分率分析 #2017-03-20#
 *
 * @examId 	考试Id-String * @studentId 	学生Id-String
 */
exports.AnalysisStudentApi_findStudentCourseRatio = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/student/find_student_course_ratio/"+data.examId+"/"+data.studentId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentCourseRatio",
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentCourseRatio */



/** 
 * Created by AnalysisClassApi-exportClassScoreLine
 *
 * 班级-分数线分析Excel导出 #2017-03-24#
 *
 * @param 	班级分数线参数列表-Body
 */
exports.AnalysisClassApi_exportClassScoreLine = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/class/export_class_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-exportClassScoreLine",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisClassApi-exportClassScoreLine */



/** 
 * Created by AnalysisPaperApi-findClassQuestion_1
 *
 * 试卷小题分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findClassQuestion_1 = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/paper/find_class_question",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassQuestion_1",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassQuestion_1 */



/** 
 * Created by AnalysisStudentApi-findStudentPointRatio
 *
 * 学生考试成绩概况学生知识点得分率 #2017-03-20#
 *
 * @param 	学生知识点得分率参数列表-Body
 */
exports.AnalysisStudentApi_findStudentPointRatio = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/student/find_student_point_ratio",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentPointRatio",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentPointRatio */



/** 
 * Created by AnalysisRegionApi-exportPass
 *
 * 区县及格率分析Excel导出 #2017-03-16#
 *
 * @param 	区县及格率分析参数列表-Body
 */
exports.AnalysisRegionApi_exportPass = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/export_pass",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-exportPass",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-exportPass */



/** 
 * Created by AnalysisPaperApi-findErrorStudents
 *
 * 做错学生列表 #2017-03-10#
 *
 * @classId 	班级ID-String * @questionId 	问题ID-String
 */
exports.AnalysisPaperApi_findErrorStudents = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/v1/paper/find_error_students/"+data.classId+"/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findErrorStudents",
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findErrorStudents */



/** 
 * Created by AnalysisStudentApi-findStudentGradeExamTrend
 *
 * 学生成绩走势年级排名 #2017-03-22#
 *
 * @param 	学生成绩走势年级级排名参数列表-Body
 */
exports.AnalysisStudentApi_findStudentGradeExamTrend = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/student/find_student_grade_exam_trend",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentGradeExamTrend",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentGradeExamTrend */



/** 
 * Created by AnalysisRegionPaperApi-findQuestionStatistical
 *
 * 小题得分分布情况 #2017-03-03#
 *
 * @questionId 	题目ID-String
 */
exports.AnalysisRegionPaperApi_findQuestionStatistical = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/v1/region-paper/find_question_statistical/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findQuestionStatistical",
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findQuestionStatistical */



/** 
 * Created by AnalysisMobileExcellentApi-findHistoryExcellents
 *
 * 本班历次考试特优生列表
 *
 * @classId 	班级id-String
 */
exports.AnalysisMobileExcellentApi_findHistoryExcellents = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/mobile/excellent/find_history_excellents/"+data.classId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileExcellentApi-findHistoryExcellents",
		form: {
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisMobileExcellentApi-findHistoryExcellents */



/** 
 * Created by AnalysisPaperApi-findClassAbility_1
 *
 * 能力层次分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findClassAbility_1 = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/paper/find_class_ability",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassAbility_1",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassAbility_1 */



/** 
 * Created by AnalysisRegionApi-findAverage
 *
 * 区县-学校平均分分析 #2017-03-20#
 *
 * @param 	平均分分析参数列表-Body
 */
exports.AnalysisRegionApi_findAverage = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/region/find_average",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionApi-findAverage",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionApi-findAverage */



/** 
 * Created by AnalysisRegionPaperApi-findRegionAbility
 *
 * 能力层次分析 #2017-03-10#
 *
 * @examId 	考试ID-String * @examCourseId 	考试科目ID-String
 */
exports.AnalysisRegionPaperApi_findRegionAbility = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/region-paper/find_region_ability/"+data.examId+"/"+data.examCourseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findRegionAbility",
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findRegionAbility */



/** 
 * Created by AnalysisTouchLineApi-countStudents
 *
 * 踩线生统计 #2017-03-03#
 *
 * @schoolId 	学校ID-String * @examId 	考试ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisTouchLineApi_countStudents = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/v1/touch-line/count_students/"+data.schoolId+"/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisTouchLineApi-countStudents",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisTouchLineApi-countStudents */



/** 
 * Created by AnalysisStudentApi-findStudentClassExamTrend
 *
 * 学生成绩走势班级排名 #2017-03-22#
 *
 * @param 	学生成绩走势班级排名参数列表-Body
 */
exports.AnalysisStudentApi_findStudentClassExamTrend = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/student/find_student_class_exam_trend",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentClassExamTrend",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentClassExamTrend */



/** 
 * Created by AnalysisPaperApi-findSplitPaper
 *
 * 试卷主客观、分卷分析 #2017-03-10#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisPaperApi_findSplitPaper = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/paper/find_split_paper",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findSplitPaper",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findSplitPaper */



/** 
 * Created by AnalysisStudentApi-exportStudents
 *
 * 学生分析Excel导出 #2017-03-22#
 *
 * @param 	学生分析参数列表-Body
 */
exports.AnalysisStudentApi_exportStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/student/export_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-exportStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-exportStudents */



/** 
 * Created by AnalysisStudentApi-findStudentQuestionRatio
 *
 * 学生考试成绩概况学生小题得分率分析 #2017-03-20#
 *
 * @param 	学生小题得分率参数对象-Body
 */
exports.AnalysisStudentApi_findStudentQuestionRatio = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/student/find_student_question_ratio",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentQuestionRatio",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentQuestionRatio */



/** 
 * Created by AnalysisMobileClassApi-findStudentList
 *
 * 班级-学生分数排名 #2017-03-23#
 *
 * @examId 	考试Id-String
 * @classId 	班级Id-String
 * @examCourseId 	科目Id-String
 */
exports.AnalysisMobileClassApi_findStudentList = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/mobile/class/find_student_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileClassApi-findStudentList",
		form: {
			examId: data.examId,
			classId: data.classId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End AnalysisMobileClassApi-findStudentList */



/** 
 * Created by AnalysisPaperApi-findChoiceQuestionStudents
 *
 * 选择题选项人数列表 #2017-03-09#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findChoiceQuestionStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/paper/find_choice_question_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findChoiceQuestionStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findChoiceQuestionStudents */



/** 
 * Created by AnalysisRegionPaperApi-findSplitPaper
 *
 * 试卷主客观、分卷分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisRegionPaperApi_findSplitPaper = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/region-paper/find_split_paper",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findSplitPaper",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findSplitPaper */



/** 
 * Created by AnalysisBrotherSchoolApi-exportExtendStudents
 *
 * 导出有效上线优生分析接口 #2017-03-16#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisBrotherSchoolApi_exportExtendStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/brother-school/export_valid_extend_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-exportExtendStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-exportExtendStudents */



/** 
 * Created by AnalysisSchoolApi-exportScoreLine
 *
 * 区县、学区、乡镇、学校（校级）分数线分析Excel导出 #2017-03-24#
 *
 * @param 	分数线分析参数列表-Body
 */
exports.AnalysisSchoolApi_exportScoreLine = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/school/export_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisSchoolApi-exportScoreLine",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisSchoolApi-exportScoreLine */



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
		url: "/analysis/code/api/mobile/class/find_exam_single",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileClassApi-findExamSingle",
		form: {
			examId: data.examId,
			classId: data.classId
		}
	}, callback);
};
/** End AnalysisMobileClassApi-findExamSingle */



/** 
 * Created by AnalysisRegionPaperApi-findRegionPoint
 *
 * 试卷知识点分析 #2017-03-10#
 *
 * @examId 	考试ID-String * @examCourseId 	考试科目ID-String
 */
exports.AnalysisRegionPaperApi_findRegionPoint = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/region-paper/find_region_point/"+data.examId+"/"+data.examCourseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findRegionPoint",
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findRegionPoint */



/** 
 * Created by AnalysisMobileTouchLineApi-findByRegion
 *
 * 区县踩线生列表 #2017-03-10#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisMobileTouchLineApi_findByRegion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/touch-line/find_by_region",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTouchLineApi-findByRegion",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisMobileTouchLineApi-findByRegion */



/** 
 * Created by AnalysisStudentApi-findStudentCompare
 *
 * 学生成绩对比 #2017-03-20#
 *
 * @param 	学生成绩对比参数列表-Body
 */
exports.AnalysisStudentApi_findStudentCompare = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/student/find_student_compare",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisStudentApi-findStudentCompare",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisStudentApi-findStudentCompare */



/** 
 * Created by AnalysisTargetApi-countClassTargets
 *
 * 目标参照列表统计 #2017-03-03#
 *
 * @examId 	考试ID-String * @schoolId 	学校ID-String
 */
exports.AnalysisTargetApi_countClassTargets = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/v1/target/count_class_targets/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisTargetApi-countClassTargets",
		form: {
		}
	}, callback);
};
/** End AnalysisTargetApi-countClassTargets */



/** 
 * Created by AnalysisBrotherSchoolApi-findExtendStudents
 *
 * 有效上线优生分析接口 #2017-03-10#
 *
 * @param 	查询参数-Body
 */
exports.AnalysisBrotherSchoolApi_findExtendStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/brother-school/find_valid_extend_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-findExtendStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-findExtendStudents */



/** 
 * Created by AnalysisPaperApi-findClassPoint_1
 *
 * 试卷知识点分析 #2017-03-10#
 *
 * @params 	参数-Body
 */
exports.AnalysisPaperApi_findClassPoint_1 = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/paper/find_class_point",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisPaperApi-findClassPoint_1",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisPaperApi-findClassPoint_1 */



/** 
 * Created by AnalysisTouchLineApi-findStudents
 *
 * 踩线生列表查询 #2017-03-10#
 *
 * @params 	查询参数-Body
 */
exports.AnalysisTouchLineApi_findStudents = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/touch-line/find_students",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisTouchLineApi-findStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisTouchLineApi-findStudents */



/** 
 * Created by AnalysisClassApi-exportClassSection
 *
 * 班级-分数段分析Excel导出 #2017-03-24#
 *
 * @param 	班级-分数段分析参数列表-Body
 */
exports.AnalysisClassApi_exportClassSection = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/class/export_class_section",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisClassApi-exportClassSection",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End AnalysisClassApi-exportClassSection */



/** 
 * Created by AnalysisBrotherSchoolApi-findAverage
 *
 * 兄弟学校平均分对比 #2017-03-11#
 *
 * @examId 	考试ID-String * @schoolId 	本校ID-String * @artCategory 	文理科-Number
 */
exports.AnalysisBrotherSchoolApi_findAverage = function (data, callback) {
	servers.GET({
		url: "/analysis/code/api/v1/brother-school/find_average/"+data.examId+"/"+data.schoolId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisBrotherSchoolApi-findAverage",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End AnalysisBrotherSchoolApi-findAverage */



/** 
 * Created by AnalysisMobileTargetApi-findClassTargets
 *
 * 目标参照列表 #2017-03-22#
 *
 * @examId 	考试id-String
 * @classId 	班级id-String
 * @examCourseId 	考试id-String
 */
exports.AnalysisMobileTargetApi_findClassTargets = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/mobile/target/find_class_targets",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisMobileTargetApi-findClassTargets",
		form: {
			examId: data.examId,
			classId: data.classId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End AnalysisMobileTargetApi-findClassTargets */



/** 
 * Created by AnalysisRegionPaperApi-findClassQuestion
 *
 * 试卷小题分析 #2017-03-10#
 *
 * @examId 	考试ID-String * @examCourseId 	考试科目ID-String
 */
exports.AnalysisRegionPaperApi_findClassQuestion = function (data, callback) {
	servers.POST({
		url: "/analysis/code/api/v1/region-paper/find_class_question/"+data.examId+"/"+data.examCourseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "AnalysisRegionPaperApi-findClassQuestion",
		form: {
		}
	}, callback);
};
/** End AnalysisRegionPaperApi-findClassQuestion */


