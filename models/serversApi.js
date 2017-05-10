/**!
 * swagger导入测试-第一轮 v1.2
 * 接口数量 282
 * http://192.168.2.56:3300/api/list?p_id=SylTlo0ocx&v_id=SJgJ$BX8ox
 *
 * 2017-03-24 19:54:02 (c) sxApi Foundation, Inc.
 *
 **/
var servers = require('../common/servers');



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
 * Created by ExamIndexApi-hello_3
 *
 * 测试接口4
 *
 */
exports.ExamIndexApi_hello_3 = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/index/hello4",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-hello_3"
	}, callback);
};
/** End ExamIndexApi-hello_3 */



/**
 * Created by ExamQuestionApi-findByCourse
 *
 * 根据考试科目查询双向细目表列表数据,不包含数据操作类型 (郑强) #2017-03-17#
 *
 * @courseId 	考试课程ID-String
 */
exports.ExamQuestionApi_findByCourse = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/question/find_by_course/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findByCourse",
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-findByCourse */



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
 * Created by ExamScoreLineApi-courseDropdown
 *
 * 根据考试ID查询双向细目表下拉数据 (郑强) #2017-03-20#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_courseDropdown = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/question/course_dropdown/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-courseDropdown",
		form: {
		}
	}, callback);
};
/** End ExamScoreLineApi-courseDropdown */



/**
 * Created by ExamQuestionApi-findLevels
 *
 * 根据考试试题查询与试题相关的能力层次列表数据 (郑强) #2017-03-17#
 *
 * @questionId 	试题ID-String
 */
exports.ExamQuestionApi_findLevels = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/question/find_levels/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findLevels",
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-findLevels */



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
 * Created by ExamClassLevelApi-modify
 *
 * 修改班级层次设置  (郑强) #2017-03-15#
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.ExamClassLevelApi_modify = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-class-level/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-modify",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamClassLevelApi-modify */



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
 * Created by ExamStudentImportApi-importData
 *
 * 导入准考证 (龚德志) #2017-03-17#
 *
 * @importStudent 	OSS准考证文件信息-Body
 */
exports.ExamStudentImportApi_importData = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/examstudent/import_data/oss",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-importData",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamStudentImportApi-importData */



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
 * Created by ExamCommonApi-findCityGradeBySchoolGradeId
 *
 * 根据校级年级ID查询市级年级(向发钧) #2017-03-17#
 *
 * @schoolGradeId 	校级年级ID-Number
 */
exports.ExamCommonApi_findCityGradeBySchoolGradeId = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/common/find_city_grade/"+data.schoolGradeId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findCityGradeBySchoolGradeId",
		form: {
		}
	}, callback);
};
/** End ExamCommonApi-findCityGradeBySchoolGradeId */



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
 * Created by ExamScoreImportApi-submitHeaders
 *
 * 导入成绩时提交缺失表头的对应数据 (陈显官) #2017-03-22#
 *
 * @headersDTO 	headersDTO-Body
 */
exports.ExamScoreImportApi_submitHeaders = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/score-import/submit_headers",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-submitHeaders",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamScoreImportApi-submitHeaders */



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
 * Created by ExamQuestionApi-downloadTemplate
 *
 * 下载双向细目表Excel导入模板 (郑强) #2017-03-17#
 *
 */
exports.ExamQuestionApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/question/download_template",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-downloadTemplate"
	}, callback);
};
/** End ExamQuestionApi-downloadTemplate */



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
 * Created by ExamIndexApi-hello_1
 *
 * 测试接口2
 *
 */
exports.ExamIndexApi_hello_1 = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/index/hello2",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-hello_1"
	}, callback);
};
/** End ExamIndexApi-hello_1 */



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
 * Created by ExamStudentImportApi-downloadTemplate
 *
 * 下载准考证导入模板 (龚德志) #2017-03-17#
 *
 * @examId 	考试mongo-ID-String
 */
exports.ExamStudentImportApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/examstudent/download_template/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-downloadTemplate",
		form: {
		}
	}, callback);
};
/** End ExamStudentImportApi-downloadTemplate */



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
 * Created by ExamQuestionApi-findQuestions
 *
 * 根据考试科目查询科目的试题数据 (郑强) #2017-03-17#
 *
 * @courseId 	考试课程ID-String
 */
exports.ExamQuestionApi_findQuestions = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/question/find_questions/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findQuestions",
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-findQuestions */



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
 * Created by ExamStudentImportApi-listNoUpdate
 *
 * 查询无准考证学生列表 (龚德志) #2017-03-17#
 *
 * @pageReq 	查询无准考证学生列表参数对象-Body
 */
exports.ExamStudentImportApi_listNoUpdate = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/examstudent/list_no_update",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-listNoUpdate",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamStudentImportApi-listNoUpdate */



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
 * Created by OrganizationApi-listCountyAndSchools
 *
 * 查询某市级组织机构下所有的区县和学校(胡君) #2017-03-16#
 *
 * @orgId 	市级组织机构ID-Number
 */
exports.OrganizationApi_listCountyAndSchools = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/organization/list_county_and_schools/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listCountyAndSchools",
		form: {
		}
	}, callback);
};
/** End OrganizationApi-listCountyAndSchools */



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
 * Created by ExamQueryApi-unPublish
 *
 * 撤销考试发布 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_unPublish = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/query/un_publish/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-unPublish",
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-unPublish */



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
 * Created by ExamClassLevelApi-create
 *
 * 保存班级层次设置 (郑强) #2017-03-15#
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.ExamClassLevelApi_create = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-class-level/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamClassLevelApi-create */



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
 * Created by PlatformClassApi-findNowByTeacher
 *
 * 查询某个老师当前学期所教班级(胡君) #2017-03-23#
 *
 * @teacherId 	老师ID-Number * @tenantId 	租户ID-Number
 */
exports.PlatformClassApi_findNowByTeacher = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/class/find_now_by_teacher/"+data.teacherId+"/"+data.tenantId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformClassApi-findNowByTeacher",
		form: {
		}
	}, callback);
};
/** End PlatformClassApi-findNowByTeacher */



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
 * Created by PlatformClassApi-findByTeacher
 *
 * 查询某个老师某个学期所教班级(胡君) #2017-03-15#
 *
 * @teacherId 	老师ID-Number * @termId 	学期ID-Number
 */
exports.PlatformClassApi_findByTeacher = function (data, callback) {
	servers.POST({
		url: "/yun/cab/api/v1/class/find_by_teacher/"+data.teacherId+"/"+data.termId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformClassApi-findByTeacher",
		form: {
		}
	}, callback);
};
/** End PlatformClassApi-findByTeacher */



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
 * Created by refreshTokenUsingGET
 *
 * 用户刷新token（龚德志） #2017-03-13#
 *
 * @TOKEN 	登录获取到的刷新token-String * @roleId 	用户要使用的角色ID-Number
 * @appId 	子系统ID,roleId不为空的时候，appId也不能为空-String
 */
exports.refreshTokenUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/auth/refresh_token",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "refreshTokenUsingGET",
		form: {
			roleId: data.roleId,
			appId: data.appId
		}
	}, callback);
};
/** End refreshTokenUsingGET */



/**
 * Created by ExamConsolidationApi-list
 *
 * 根据类型查询巩固率设置数据 (郑强) #2017-03-17#
 *
 * @examId 	考试ID-String * @type 	巩固率类型[1:学区, 2:乡镇, 3:学校]-Number
 */
exports.ExamConsolidationApi_list = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/consolidation/list/"+data.examId+"/"+data.type,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamConsolidationApi-list",
		form: {
		}
	}, callback);
};
/** End ExamConsolidationApi-list */



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
 * Created by ExamPaperSplitApi-show
 *
 * 根据分卷ID查询分卷设置 (郑强) #2017-03-15#
 *
 * @splitId 	分卷ID-String
 */
exports.ExamPaperSplitApi_show = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-paper-split/show/"+data.splitId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-show",
		form: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-show */



/**
 * Created by listUsingGET
 *
 * 导入准考证号 - 查看准考证导入情况 - 成功导入名单数据加载
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.listUsingGET = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/ticket/list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "listUsingGET",
		form: {
		}
	}, callback);
};
/** End listUsingGET */



/**
 * Created by ExamQuestionApi-save
 *
 * 保存双向细目表列表数据,保存前会根据课程ID清除原有数据 (郑强) #2017-03-20#
 *
 * @questionDetailList 	双向细目表列表数据-Body * @courseId 	科目ID-String
 */
exports.ExamQuestionApi_save = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/question/save/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-save */



/**
 * Created by ExamIndexApi-countBySemester
 *
 * 首页 - 查询当前学期所有考试次数 #2017-03-08#
 *
 */
exports.ExamIndexApi_countBySemester = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/index/count_semester",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-countBySemester"
	}, callback);
};
/** End ExamIndexApi-countBySemester */



/**
 * Created by ExamScoreLineApi-listByExam
 *
 * 根据考试ID查询分数线设置的详细数据 (郑强) #2017-03-10#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_listByExam = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-score-line/list/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-listByExam",
		form: {
		}
	}, callback);
};
/** End ExamScoreLineApi-listByExam */



/**
 * Created by ExamBrotherSchoolApi-find
 *
 * 成绩分析设置 - 查询兄弟学校（龚德志) #2017-03-03#
 *
 * @orgId 	当前学校的机构ID-String
 */
exports.ExamBrotherSchoolApi_find = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-brother-school/find/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBrotherSchoolApi-find",
		form: {
		}
	}, callback);
};
/** End ExamBrotherSchoolApi-find */



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
 * Created by ExamIndexApi-hello_2
 *
 * 测试接口3
 *
 */
exports.ExamIndexApi_hello_2 = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/index/hello3",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-hello_2"
	}, callback);
};
/** End ExamIndexApi-hello_2 */



/**
 * Created by ExamTownApi-modifyByCreate
 *
 * 修改乡镇 (陈显官) #2017-03-10#
 *
 * @modifyDto 	待修改的乡镇信息-Body
 */
exports.ExamTownApi_modifyByCreate = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/town/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-modifyByCreate",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamTownApi-modifyByCreate */



/**
 * Created by ExamClassPartApi-create
 *
 * 保存学部设置 (郑强) #2017-03-15#
 *
 * @classGroupList 	学部设置数据-Body
 */
exports.ExamClassPartApi_create = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-class-part/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamClassPartApi-create */



/**
 * Created by ExamCalculateRuleApi-calculateRuleTypeDropdown
 *
 * 分析规则设置类型下拉选择 (郑强) type:[1:0分计算规则 2:小数点取舍规则 3:综合学科计算规则] #2017-03-14#
 *
 * @type 	type-String
 */
exports.ExamCalculateRuleApi_calculateRuleTypeDropdown = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-calculate-rule/caculate_rule_types/"+data.type,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCalculateRuleApi-calculateRuleTypeDropdown",
		form: {
		}
	}, callback);
};
/** End ExamCalculateRuleApi-calculateRuleTypeDropdown */



/**
 * Created by downloadTemplateUsingGET
 *
 * 导入准考证 - 模版下载
 *
 */
exports.downloadTemplateUsingGET = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/ticket/download_template",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "downloadTemplateUsingGET"
	}, callback);
};
/** End downloadTemplateUsingGET */



/**
 * Created by ExamTownApi-list
 *
 * 查询当前区县乡镇列表 (陈显官) #2017-03-10#
 *
 */
exports.ExamTownApi_list = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/town/list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-list"
	}, callback);
};
/** End ExamTownApi-list */



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
 * Created by ExamHideRatioRuleApi-remove
 *
 * 删除学校超越率显示设置 (郑强) #2017-03-15#
 *
 * @ratioRuleId 	学校超越率显示设置ID-String
 */
exports.ExamHideRatioRuleApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/v1/setting-ratio-rule/remove/"+data.ratioRuleId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamHideRatioRuleApi-remove",
		form: {
		}
	}, callback);
};
/** End ExamHideRatioRuleApi-remove */



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
		url: "/abc/cde/api/v1/touched/find/"+data.examId+"/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTouchedLineApi-find",
		form: {
			artCategory: data.artCategory,
		}
	}, callback);
};
/** End ExamTouchedLineApi-find */



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
 * Created by ExamQueryApi-getCurrentExamLevels
 *
 * 查询当前角色可使用的考试级别 (陈显官) #2017-03-16#
 *
 */
exports.ExamQueryApi_getCurrentExamLevels = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/query/get_current_exam_levels",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-getCurrentExamLevels"
	}, callback);
};
/** End ExamQueryApi-getCurrentExamLevels */



/**
 * Created by ExamSchoolDistrictApi-page
 *
 * 查询当前区县学区分页列表 (陈显官) #2017-03-10#
 *
 * @pageDto 	pageDto-Body
 */
exports.ExamSchoolDistrictApi_page = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-district/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-page",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-page */



/**
 * Created by ExamScoreLineApi-listHeaders
 *
 * 根据考试id，查询分数线设置的表格头数据 (郑强) #2017-03-13#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_listHeaders = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-score-line/list_headers/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-listHeaders",
		form: {
		}
	}, callback);
};
/** End ExamScoreLineApi-listHeaders */



/**
 * Created by PlatformLevelApi-listPlatformSubjectPoints
 *
 * 根据学科ID查询知识点(向发钧) #2017-03-09#
 *
 * @subjectId 	学科ID-Number
 */
exports.PlatformLevelApi_listPlatformSubjectPoints = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/point/list_platform_points/"+data.subjectId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformLevelApi-listPlatformSubjectPoints",
		form: {
		}
	}, callback);
};
/** End PlatformLevelApi-listPlatformSubjectPoints */



/**
 * Created by errorHtmlUsingGET
 *
 * errorHtml
 *
 */
exports.errorHtmlUsingGET = function (data, callback) {
	servers.GET({
		url: "/abc/cde/error",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "errorHtmlUsingGET"
	}, callback);
};
/** End errorHtmlUsingGET */



/**
 * Created by ExamExcellentApi-save
 *
 * 成绩分析设置 - 特优生筛选线设置（龚德志) #2017-03-03#
 *
 * @excellentLine 	特优生筛选线-Body
 */
exports.ExamExcellentApi_save = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-excellent/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamExcellentApi-save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamExcellentApi-save */



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
		url: "/abc/cde/api/score-import/list_table_header",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-listTableHeader",
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End ExamScoreImportApi-listTableHeader */



/**
 * Created by listNotFoundUsingGET
 *
 * 导入准考证号 - 查看准考证导入情况 - 未在基础数据找到数据加载
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.listNotFoundUsingGET = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/ticket/list_not_found/"+data.importId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "listNotFoundUsingGET",
		form: {
		}
	}, callback);
};
/** End listNotFoundUsingGET */



/**
 * Created by ExamIndexApi-count_grade
 *
 * 首页 - 按考试年级统计考试数量 #2017-03-08#
 *
 */
exports.ExamIndexApi_count_grade = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/index/count_grade",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-count_grade"
	}, callback);
};
/** End ExamIndexApi-count_grade */



/**
 * Created by ExamCommonApi-listPhaseGrades
 *
 * 查询一个租户下某一个学段的市级年级(向发钧) #2017-03-09#
 *
 * @tenantId 	租户唯一ID-Number
 * @phase 	学段-Number
 */
exports.ExamCommonApi_listPhaseGrades = function (data, callback) {
	servers.POST({
		url: "/yun/cab/api/v1/common/list_phase_grades",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-listPhaseGrades",
		form: {
			tenantId: data.tenantId,
			phase: data.phase
		}
	}, callback);
};
/** End ExamCommonApi-listPhaseGrades */



/**
 * Created by ExamStudentImportApi-listNotFound
 *
 * 查询未在基础数据找到的学生列表 (龚德志) #2017-03-17#
 *
 * @pageReq 	查查询未在基础数据找到的学生参数对象-Body
 */
exports.ExamStudentImportApi_listNotFound = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/examstudent/list_not_found",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-listNotFound",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamStudentImportApi-listNotFound */



/**
 * Created by ExamSchoolGroupApi-list
 *
 * 查询当前区县学校分类列表 (陈显官) #2017-03-10#
 *
 */
exports.ExamSchoolGroupApi_list = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-group/list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-list"
	}, callback);
};
/** End ExamSchoolGroupApi-list */



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
 * Created by ExamScoreImportApi-downloadTemplate
 *
 * 下载成绩导入模板 (陈显官) #2017-03-22#
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目mongo-ID，网阅考试必需-String
 */
exports.ExamScoreImportApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/score-import/download_template",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-downloadTemplate",
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End ExamScoreImportApi-downloadTemplate */



/**
 * Created by ExamIndexApi-count_org_level
 *
 * 首页 - 按考试级别统计考试数量 #2017-03-07#
 *
 */
exports.ExamIndexApi_count_org_level = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/index/count_org_level",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-count_org_level"
	}, callback);
};
/** End ExamIndexApi-count_org_level */



/**
 * Created by ExamSchoolDistrictApi-create
 *
 * 新建学区 (陈显官) #2017-03-10#
 *
 * @createDto 	待新建学区信息-Body
 */
exports.ExamSchoolDistrictApi_create = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-district/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-create */



/**
 * Created by OrganizationApi-listSchoolFirstWords
 *
 * 查询某学段所有学校首字母列表(胡君) #2017-03-09#
 *
 * @dto 	ParamListSchoolDTO-Body
 */
exports.OrganizationApi_listSchoolFirstWords = function (data, callback) {
	servers.POST({
		url: "/yun/cab/api/v1/organization/list_school_first_words",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listSchoolFirstWords",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End OrganizationApi-listSchoolFirstWords */



/**
 * Created by ExamCommonApi-listPhases
 *
 * 查询所有的学段(向发钧) #2017-03-09#
 *
 */
exports.ExamCommonApi_listPhases = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/common/list_phases",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-listPhases"
	}, callback);
};
/** End ExamCommonApi-listPhases */



/**
 * Created by ExamScoreLineApi-importData
 *
 * 上传分数线Excel数据 (郑强) #2017-03-17#
 *
 * @importParametters 	分数线上传参数数据-Body
 */
exports.ExamScoreLineApi_importData = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/setting-score-line/import_data",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-importData",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamScoreLineApi-importData */



/**
 * Created by ExamClassLevelApi-find
 *
 * 根据班级层次ID查询班级层次数据 (郑强) #2017-03-14#
 *
 * @classLevelId 	班级层次ID-String
 */
exports.ExamClassLevelApi_find = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-class-level/find/"+data.classLevelId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-find",
		form: {
		}
	}, callback);
};
/** End ExamClassLevelApi-find */



/**
 * Created by getUserAppRolesUsingGET
 *
 * 获取用户拥有的角色（龚德志） #2017-03-13#
 *
 * @TOKEN 	登录获取到的刷新token-String * @appId 	子系统ID-String
 */
exports.getUserAppRolesUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/role/get-userapp-role/"+data.appId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getUserAppRolesUsingGET",
		form: {
		}
	}, callback);
};
/** End getUserAppRolesUsingGET */



/**
 * Created by ExamQueryApi-getAnalysisInfo
 *
 * 分析页面使用，考试详情
 *
 * @requestParamDTO 	查询条件-Body
 */
exports.ExamQueryApi_getAnalysisInfo = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/query/get_analysis_info",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-getAnalysisInfo",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-getAnalysisInfo */



/**
 * Created by ExamScoreLineApi-save
 *
 * 保存分数线列表数据 (郑强) #2017-03-16#
 *
 * @scoreLineList 	分数线列表数据-Body
 */
exports.ExamScoreLineApi_save = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/setting-score-line/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamScoreLineApi-save */



/**
 * Created by ExamStudentImportApi-downloadFail
 *
 * 下载未导入准考证的人员名单 (龚德志) #2017-03-16#
 *
 * @examId 	考试ID-String
 */
exports.ExamStudentImportApi_downloadFail = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/examstudent/download_fail/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-downloadFail",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End ExamStudentImportApi-downloadFail */



/**
 * Created by updateAccountRolesUsingPUT
 *
 * 更新用户的角色
 *
 * @accountId 	用户账号ID-Number * @appId 	子系统ID-String * @appType 	子系统类型，0=应用系统,-1=云平台管理系统-Number
 */
exports.updateAccountRolesUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/api/v1/user-auth-notify/user-roles",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "updateAccountRolesUsingPUT",
		form: {
		}
	}, callback);
};
/** End updateAccountRolesUsingPUT */



/**
 * Created by ExamScoreImportApi-importData
 *
 * 导入成绩 (陈显官) #2017-03-22#
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID，网阅考试必需-String
 * @fileRemotePath 	成绩Excel文件OSS路径，仅key，非全路径-String
 */
exports.ExamScoreImportApi_importData = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/score-import/import_data",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-importData",
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			fileRemotePath: data.fileRemotePath
		}
	}, callback);
};
/** End ExamScoreImportApi-importData */



/**
 * Created by downloadToUpdateUsingGET
 *
 * 导入准考证号 - 查看准考证导入情况 - 下载未更新准考证数据
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.downloadToUpdateUsingGET = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/ticket/download_update/"+data.importId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "downloadToUpdateUsingGET",
		form: {
		}
	}, callback);
};
/** End downloadToUpdateUsingGET */



/**
 * Created by ExamCommonApi-findClassSubjects_1
 *
 * 根据老师ID查询当前学期老师所教科目(向发钧) #2017-03-14#
 *
 * @teacherId 	老师ID-Number
 */
exports.ExamCommonApi_findClassSubjects_1 = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/common/list_teacher_subject/"+data.teacherId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findClassSubjects_1",
		form: {
		}
	}, callback);
};
/** End ExamCommonApi-findClassSubjects_1 */



/**
 * Created by ExamIndexApi-hello
 *
 * 测试接口
 *
 * @id 	id-Number
 */
exports.ExamIndexApi_hello = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/index/hello/"+data.id,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-hello",
		form: {
		}
	}, callback);
};
/** End ExamIndexApi-hello */



/**
 * Created by ExamClassPartApi-modify
 *
 * 修改学部设置 (郑强) #2017-03-15#
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.ExamClassPartApi_modify = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-class-part/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-modify",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamClassPartApi-modify */



/**
 * Created by ExamQuestionApi-findQuestionNums
 *
 * 根据考试科目查询科目的试题数据,此接口供分卷选择题号使用 (郑强) #2017-03-17#
 *
 * @courseId 	考试课程ID-String
 */
exports.ExamQuestionApi_findQuestionNums = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/question/find_question_nums/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findQuestionNums",
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-findQuestionNums */



/**
 * Created by ExamQueryApi-unpublish
 *
 * 撤销考试发布 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_unpublish = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/query/un_publish/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-unpublish",
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-unpublish */



/**
 * Created by ExamBasicApi-deleteExam
 *
 * 删除考试 (陈显官) #2017-03-15#
 *
 * @examId 	考试ID-String
 */
exports.ExamBasicApi_deleteExam = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/v1/basic/delete_exam/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBasicApi-deleteExam",
		form: {
		}
	}, callback);
};
/** End ExamBasicApi-deleteExam */



/**
 * Created by ExamTownApi-create
 *
 * 新建乡镇 (陈显官) #2017-03-10#
 *
 * @createDto 	待新建的乡镇信息-Body
 */
exports.ExamTownApi_create = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/town/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamTownApi-create */



/**
 * Created by ExamIndexApi-list_recent
 *
 * 首页 - 查询近期考试列表 #2017-03-08#
 *
 * @count 	返回记录数, 默认6-Number
 */
exports.afdsadfsaf = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/index/list_recent/"+data.count,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-list_recent",
		form: {
		}
	}, callback);
};
/** End ExamIndexApi-list_recent */



/**
 * Created by ExamClassPartApi-page
 *
 * 学部分页查询 (郑强) #2017-03-01#
 *
 * @pageableDto 	分页参数对象-Body
 */
exports.ExamClassPartApi_page = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-class-part/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-page",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamClassPartApi-page */



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
 * Created by ExamStudentImportApi-listFail
 *
 * 查询导入失败的学生列表 (龚德志) #2017-03-17#
 *
 * @taskId 	某一次导入的结果，不传则查询数据中当前状态-String
 */
exports.ExamStudentImportApi_listFail = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/examstudent/list_fail/"+data.taskId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-listFail",
		form: {
		}
	}, callback);
};
/** End ExamStudentImportApi-listFail */



/**
 * Created by ExamQueryApi-publish
 *
 * 发布成绩 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_publish = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/query/publish/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-publish",
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-publish */



/**
 * Created by ExamHideRatioRuleApi-showSchoolRatioRule
 *
 * 查询学校超越率显示设置 (郑强) #2017-03-15#
 *
 */
exports.ExamHideRatioRuleApi_showSchoolRatioRule = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-ratio-rule/find_school_ratio_rule",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamHideRatioRuleApi-showSchoolRatioRule"
	}, callback);
};
/** End ExamHideRatioRuleApi-showSchoolRatioRule */



/**
 * Created by ExamSchoolDistrictApi-modifyByCreate
 *
 * 修改学区 (陈显官) #2017-03-10#
 *
 * @modifyDto 	待修改的学区信息-Body
 */
exports.ExamSchoolDistrictApi_modifyByCreate = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-district/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-modifyByCreate",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-modifyByCreate */



/**
 * Created by ExamCalculateRuleApi-save
 *
 * 保存考试的计算规则 (郑强) #2017-03-14#
 *
 * @calculateRulesList 	考试计算规则列表数据-Body
 */
exports.ExamCalculateRuleApi_save = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-calculate-rule/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCalculateRuleApi-save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamCalculateRuleApi-save */



/**
 * Created by examIndex-count_school_year
 *
 * 首页 - 按学年统计考试数量 #2017-03-13#
 *
 * @start 	开始日期-Number * @end 	结束日期-Number
 */
exports.examIndex_count_school_year = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/index/count_school_year/"+data.start+"/"+data.end,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "examIndex-count_school_year",
		form: {
		}
	}, callback);
};
/** End examIndex-count_school_year */



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
 * Created by ExamStudentImportApi-getImportResult
 *
 * 导入任务的执行结果 (龚德志) #2017-03-17#
 *
 * @examId 	考试ID-String * @taskId 	某一次导入的结果，不传则查询数据中当前状态-String
 */
exports.ExamStudentImportApi_getImportResult = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/examstudent/import_data/"+data.examId/result,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-getImportResult",
		form: {
			taskId: data.taskId
		}
	}, callback);
};
/** End ExamStudentImportApi-getImportResult */



/**
 * Created by ExamTargetSettingApi-save
 *
 * 成绩分析设置 - 目标参照设置创建（龚德志) #2017-03-03#
 *
 * @classTargetTable 	参照目标集合-Body
 */
exports.ExamTargetSettingApi_save = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/target/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamTargetSettingApi-save */



/**
 * Created by ExamScoreImportApi-listFail
 *
 * 查询导入失败的学生列表 (陈显官) #2017-03-22#
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID，网阅考试必需-String
 * @pageableDto 	分页参数对象-Body
 */
exports.ExamScoreImportApi_listFail = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/score-import/list_fail",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-listFail",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End ExamScoreImportApi-listFail */



/**
 * Created by ExamBasicApi-getExamDetail
 *
 * 考试详情查询 (陈显官) #2017-03-13#
 *
 * @examId 	考试ID-String
 */
exports.ExamBasicApi_getExamDetail = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/basic/get_exam_detail/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBasicApi-getExamDetail",
		form: {
		}
	}, callback);
};
/** End ExamBasicApi-getExamDetail */



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
		url: "/api/v1/auth/authority",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "authorityUsingGET",
		form: {
			appId: data.appId,
			uri: data.uri
		}
	}, callback);
};
/** End authorityUsingGET */



/**
 * Created by ExamSchoolGroupApi-listSchoolsPinyin
 *
 * 查询当前区县学校列表 (陈显官) #2017-03-10#
 *
 * @phases 	将要查询的多个学段，不传值时查询所有学段-
 */
exports.ExamSchoolGroupApi_listSchoolsPinyin = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-group/list_schools_pinyin",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-listSchoolsPinyin",
		form: {
			phases: data.phases
		}
	}, callback);
};
/** End ExamSchoolGroupApi-listSchoolsPinyin */



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
 * Created by updateRolesResourceUsingPUT
 *
 * 更新用户的资源
 *
 * @roleId 	用户角色ID-Number * @appId 	子系统ID-String * @appType 	子系统类型，0=应用系统,-1=云平台管理系统-Number
 */
exports.updateRolesResourceUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/api/v1/user-auth-notify/role-resources",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "updateRolesResourceUsingPUT",
		form: {
		}
	}, callback);
};
/** End updateRolesResourceUsingPUT */



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
 * Created by PlatformAccountApi-findCurrentRole
 *
 * 查询当前用户角色信息(胡君) #2017-03-14#
 *
 */
exports.PlatformAccountApi_findCurrentRole = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/account/find_current_role",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformAccountApi-findCurrentRole"
	}, callback);
};
/** End PlatformAccountApi-findCurrentRole */



/**
 * Created by ExamQuestionApi-importData
 *
 * 上传双向细目表Excel数据 (郑强) #2017-03-20#
 *
 * @importData 	双向细目表导入数据-Body
 */
exports.ExamQuestionApi_importData = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/question/import_data",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-importData",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-importData */



/**
 * Created by ExamBasicApi-modifyExam
 *
 * 修改考试 (陈显官) #2017-03-13#
 *
 * @modifyExam 	modifyExam-Body
 */
exports.ExamBasicApi_modifyExam = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/basic/modify_exam",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBasicApi-modifyExam",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamBasicApi-modifyExam */



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
 * Created by ExamStudentImportApi-importData_1
 *
 * 导入准考证-修改错误数据 (龚德志) #2017-03-17#
 *
 * @taskId 	taskId-String * @examId 	考试ID-String * @studentList 	考试集合-
 */
exports.ExamStudentImportApi_importData_1 = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/examstudent/import_data/update_error_data/"+data.taskId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-importData_1",
		form: {
		}
	}, callback);
};
/** End ExamStudentImportApi-importData_1 */



/**
 * Created by ExamIndexApi-countAllSemester
 *
 * 首页 - 查询校级下指定学期考试次数 #2017-03-13#
 *
 */
exports.ExamIndexApi_countAllSemester = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/index/count_semester_list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-countAllSemester"
	}, callback);
};
/** End ExamIndexApi-countAllSemester */



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
 * Created by PlatformAccountApi-listSubjectLeaders
 *
 * 根据学科ID列表查询教研员列表(胡君) #2017-03-09#
 *
 * @dto 	ParamSubjectsDTO-Body
 */
exports.PlatformAccountApi_listSubjectLeaders = function (data, callback) {
	servers.POST({
		url: "/yun/cab/api/v1/account/list_subject_leaders",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformAccountApi-listSubjectLeaders",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End PlatformAccountApi-listSubjectLeaders */



/**
 * Created by ExamQuestionApi-findPoints
 *
 * 根据考试试题查询与试题相关的知识点列表数据 (郑强) #2017-03-17#
 *
 * @questionId 	试题ID-String
 */
exports.ExamQuestionApi_findPoints = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/question/find_points/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findPoints",
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-findPoints */



/**
 * Created by ExamQueryApi-page
 *
 * 查询考试列表 (陈显官) (搞不定，各个角色太复杂了)
 *
 * @queryPageDto 	queryPageDto-Body
 */
exports.ExamQueryApi_page = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/query/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-page",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-page */



/**
 * Created by ExamExcellentApi-searchStudents
 *
 * 成绩分析设置 - 特优生 - 搜索学生
 *
 * @studentInfo 	学生搜索条件-Body
 */
exports.ExamExcellentApi_searchStudents = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-excellent/student/search",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamExcellentApi-searchStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamExcellentApi-searchStudents */



/**
 * Created by ExamScoreLineApi-listByExam_1
 *
 * 根据考试ID查询分数线数据 (郑强) #2017-03-23#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_listByExam_1 = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/setting-score-line/list_score_lines/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-listByExam_1",
		form: {
		}
	}, callback);
};
/** End ExamScoreLineApi-listByExam_1 */



/**
 * Created by ExamSchoolGroupApi-remove
 *
 * 删除学校分类 (陈显官) #2017-03-10#
 *
 * @id 	学校分类ID-String
 */
exports.ExamSchoolGroupApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/v1/school-group/remove/"+data.id,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-remove",
		form: {
		}
	}, callback);
};
/** End ExamSchoolGroupApi-remove */



/**
 * Created by PlatformLevelApi-listPlatformSubjectLevels
 *
 * 根据学科ID查询能力层次(向发钧) #2017-03-09#
 *
 * @subjectId 	学科ID-Number
 */
exports.PlatformLevelApi_listPlatformSubjectLevels = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/level/list_platform_levels/"+data.subjectId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformLevelApi-listPlatformSubjectLevels",
		form: {
		}
	}, callback);
};
/** End PlatformLevelApi-listPlatformSubjectLevels */



/**
 * Created by updateAccountUsingPUT
 *
 * 更新用户信息
 *
 * @accountId 	用户账号ID-Number
 */
exports.updateAccountUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/api/v1/user-auth-notify/account",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "updateAccountUsingPUT",
		form: {
		}
	}, callback);
};
/** End updateAccountUsingPUT */



/**
 * Created by ExamPaperSplitApi-list
 *
 * 根据考试科目ID查询科目的分卷设置数据 (郑强) #2017-03-15#
 *
 * @courseId 	科目ID-String
 */
exports.ExamPaperSplitApi_list = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-paper-split/list/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-list",
		form: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-list */



/**
 * Created by downloadNotFoundUsingGET
 *
 * 导入准考证号 - 查看准考证导入情况 - 下载未在基础数据找到数据
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.downloadNotFoundUsingGET = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/ticket/download_not_found/"+data.importId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "downloadNotFoundUsingGET",
		form: {
		}
	}, callback);
};
/** End downloadNotFoundUsingGET */



/**
 * Created by ExamIndexApi-list_to_edit
 *
 * 首页 - 待编辑考试列表 #2017-03-08#
 *
 * @count 	返回记录数-Number
 */
exports.ExamIndexApi_list_to_edit = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/index/list_to_edit/"+data.count,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-list_to_edit",
		form: {
		}
	}, callback);
};
/** End ExamIndexApi-list_to_edit */



/**
 * Created by ExamIndexApi-hello_4
 *
 * 测试接口5
 *
 * @id 	id-Number
 */
exports.ExamIndexApi_hello_4 = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/index/hello5/"+data.id,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-hello_4",
		form: {
		}
	}, callback);
};
/** End ExamIndexApi-hello_4 */



/**
 * Created by ExamTownApi-page
 *
 * 查询当前区县乡镇分页列表 (陈显官) #2017-03-10#
 *
 * @pageDto 	pageDto-Body
 */
exports.ExamTownApi_page = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/town/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-page",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamTownApi-page */



/**
 * Created by ExamCommonApi-findByTenantIdAndPhase
 *
 * 根据租户ID和学段查询所有学科(向发钧) #2017-03-09#
 *
 * @tenantId 	租户ID-Number * @phase 	学段-Number
 */
exports.ExamCommonApi_findByTenantIdAndPhase = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/common/list_subjects/"+data.tenantId+"/"+data.phase,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findByTenantIdAndPhase",
		form: {
		}
	}, callback);
};
/** End ExamCommonApi-findByTenantIdAndPhase */



/**
 * Created by ExamIndexApi-analysis_recent_score_line
 *
 * 首页 - 最近一次考试分数线人数、比例对比
 *
 */
exports.ExamIndexApi_analysis_recent_score_line = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/index/analysis_recent_score_line",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamIndexApi-analysis_recent_score_line"
	}, callback);
};
/** End ExamIndexApi-analysis_recent_score_line */



/**
 * Created by ExamPaperSplitApi-remove
 *
 * 根据分卷的ID进行分卷信息删除操作 (郑强) #2017-03-15#
 *
 * @splitId 	分卷ID-String
 */
exports.ExamPaperSplitApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/v1/setting-paper-split/remove/"+data.splitId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-remove",
		form: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-remove */



/**
 * Created by ExamScoreLineApi-remove
 *
 * 根据分数线的ID进行分数线删除操作 (郑强) #2017-03-01#
 *
 * @scoreLineId 	分数线的ID-String
 */
exports.ExamScoreLineApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/v1/setting-score-line/remove/"+data.scoreLineId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-remove",
		form: {
		}
	}, callback);
};
/** End ExamScoreLineApi-remove */



/**
 * Created by ExamSchoolDistrictApi-remove
 *
 * 删除学区 (陈显官) #2017-03-10#
 *
 * @id 	学区ID-String
 */
exports.ExamSchoolDistrictApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/v1/school-district/remove/"+data.id,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-remove",
		form: {
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-remove */



/**
 * Created by ExamPaperSplitApi-validate
 *
 * 验证分卷设置数据 (郑强) #2017-03-18#
 *
 * @splitList 	考试计算规则列表数据-Body
 */
exports.ExamPaperSplitApi_validate = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/setting-paper-split/validate",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-validate",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-validate */



/**
 * Created by ExamExcellentApi-addExcellentStudents
 *
 * 成绩分析设置 - 添加特优生（龚德志) #2017-03-06#
 *
 * @students 	学需要添加的学生-Body
 */
exports.ExamExcellentApi_addExcellentStudents = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-excellent/student/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamExcellentApi-addExcellentStudents",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamExcellentApi-addExcellentStudents */



/**
 * Created by ExamCommonApi-findClassSubjects
 *
 * 根据班级ID查询班级的所有科目(向发钧) #2017-03-14#
 *
 * @classId 	班级ID-Number
 */
exports.ExamCommonApi_findClassSubjects = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/common/list_class_subjects/"+data.classId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findClassSubjects",
		form: {
		}
	}, callback);
};
/** End ExamCommonApi-findClassSubjects */



/**
 * Created by ExamTargetSettingApi-downloadTemplate
 *
 * 成绩分析设置 - 目标参照模版下载（龚德志) #2017-03-13#
 *
 * @examId 	考试ID-String * @orgId 	当前学校ID-String * @artCategory 	0：不分科；1：文科；2：理科-Number
 */
exports.ExamTargetSettingApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/target/download_template/"+data.examId+"/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-downloadTemplate",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End ExamTargetSettingApi-downloadTemplate */



/**
 * Created by PlatformClassApi-findBySchool
 *
 * 查询某学校某年级所有班级(胡君) #2017-03-09#
 *
 * @schoolId 	学校ID-Number * @gradeId 	年级ID-Number
 */
exports.PlatformClassApi_findBySchool = function (data, callback) {
	servers.POST({
		url: "/yun/cab/api/v1/class/find_by_school/"+data.schoolId+"/"+data.gradeId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformClassApi-findBySchool",
		form: {
		}
	}, callback);
};
/** End PlatformClassApi-findBySchool */



/**
 * Created by ExamTownApi-listSchoolsPinyin
 *
 * 查询当前区县学校列表 (陈显官) #2017-03-10#
 *
 * @phases 	将要查询的多个学段，不传值时查询所有学段-
 */
exports.ExamTownApi_listSchoolsPinyin = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/town/list_schools_pinyin",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-listSchoolsPinyin",
		form: {
			phases: data.phases
		}
	}, callback);
};
/** End ExamTownApi-listSchoolsPinyin */



/**
 * Created by ExamQuestionApi-findQuestion
 *
 * 根据考试试题ID查询试题 (郑强) #2017-03-17#
 *
 * @questionId 	试题ID-String
 */
exports.ExamQuestionApi_findQuestion = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/question/find_question/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-findQuestion",
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-findQuestion */



/**
 * Created by ExamBrotherSchoolApi-save
 *
 * 成绩分析设置 - 添加兄弟学校（龚德志) #2017-03-03#
 *
 * @orgId 	当前学校的机构ID-String * @myBrotherSchools 	兄弟学校集合-Body
 */
exports.ExamBrotherSchoolApi_save = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-brother-school/save/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBrotherSchoolApi-save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamBrotherSchoolApi-save */



/**
 * Created by PlatformAccountApi-findCurrentUser
 *
 * 查询当前用户信息(胡君) #2017-03-14#
 *
 */
exports.PlatformAccountApi_findCurrentUser = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/account/find_current_user",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformAccountApi-findCurrentUser"
	}, callback);
};
/** End PlatformAccountApi-findCurrentUser */



/**
 * Created by ExamClassPartApi-remove
 *
 * 根据学部ID删除学部数据 (郑强) #2017-03-15#
 *
 * @classPartId 	学部ID-String
 */
exports.ExamClassPartApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/v1/setting-class-part/remove/"+data.classPartId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-remove",
		form: {
		}
	}, callback);
};
/** End ExamClassPartApi-remove */



/**
 * Created by ExamCalculateRuleApi-myValidate
 *
 * 验证考试的计算规则 (郑强) #2017-03-14#
 *
 * @calculateRulesList 	考试计算规则列表数据-Body
 */
exports.ExamCalculateRuleApi_myValidate = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-calculate-rule/validate",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCalculateRuleApi-myValidate",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamCalculateRuleApi-myValidate */



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
 * Created by ExamTouchedLineApi-save
 *
 * 成绩分析设置 - 踩线生筛选线设置（龚德志) #2017-03-10#
 *
 * @orgTouchedLine 	分数线设置数据集合-Body
 */
exports.ExamTouchedLineApi_save = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/touched/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTouchedLineApi-save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamTouchedLineApi-save */



/**
 * Created by ExamClassPartApi-find
 *
 * 根据学部ID查询学部数据 (郑强) #2017-03-15#
 *
 * @classPartId 	学部ID-String
 */
exports.ExamClassPartApi_find = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-class-part/find/"+data.classPartId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-find",
		form: {
		}
	}, callback);
};
/** End ExamClassPartApi-find */



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
 * Created by getRolesResourceUsingPOST
 *
 * 获取用户的资源
 *
 * @accountId 	用户账号ID-Number * @appId 	子系统ID-String * @appType 	子系统类型，0=应用系统,-1=云平台管理系统-Number
 */
exports.getRolesResourceUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/user-auth-notify/user-resources",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getRolesResourceUsingPOST",
		form: {
		}
	}, callback);
};
/** End getRolesResourceUsingPOST */



/**
 * Created by ExamClassLevelApi-remove
 *
 * 根据班级层次ID删除班级层次数据 (郑强) #2017-03-15#
 *
 * @classLevelId 	根据班级层次ID-String
 */
exports.ExamClassLevelApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/v1/setting-class-level/remove/"+data.classLevelId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-remove",
		form: {
		}
	}, callback);
};
/** End ExamClassLevelApi-remove */



/**
 * Created by ExamHideRatioRuleApi-create
 *
 * 保存学校超越率显示设置 (郑强) #2017-03-01#
 *
 * @examHideRatioRule 	学校超越率显示设置-Body
 */
exports.ExamHideRatioRuleApi_create = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-ratio-rule/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamHideRatioRuleApi-create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamHideRatioRuleApi-create */



/**
 * Created by ExamQuestionApi-export
 *
 * 下载一个课程的双向细目表Excel数据 (郑强) #2017-03-17#
 *
 * @courseId 	考试课程ID-String
 */
exports.ExamQuestionApi_export = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/question/export/"+data.courseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-export",
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-export */



/**
 * Created by ExamQueryApi-listClasses
 *
 * 查询某次考试的所有参考班级 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_listClasses = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/query/list_classes/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-listClasses",
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-listClasses */



/**
 * Created by PlatformClassApi-findCurrentClass
 *
 * 查询当前用户的班级信息，学生端APP(胡君) #2017-03-09#
 *
 */
exports.PlatformClassApi_findCurrentClass = function (data, callback) {
	servers.POST({
		url: "/yun/cab/api/v1/class/find_current_class",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformClassApi-findCurrentClass"
	}, callback);
};
/** End PlatformClassApi-findCurrentClass */



/**
 * Created by ExamScoreImportApi-listSuccess
 *
 * 查询导入成功的学生成绩列表 (陈显官) #2017-03-22#
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID，网阅考试必需-String
 * @pageableDto 	分页参数对象-Body
 */
exports.ExamScoreImportApi_listSuccess = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/score-import/list_success",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-listSuccess",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End ExamScoreImportApi-listSuccess */



/**
 * Created by ExamSchoolDistrictApi-listSchoolsPinyin
 *
 * 查询当前区县学校列表 (陈显官) #2017-03-10#
 *
 * @phases 	将要查询的多个学段-
 */
exports.ExamSchoolDistrictApi_listSchoolsPinyin = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-district/list_schools_pinyin",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-listSchoolsPinyin",
		form: {
			phases: data.phases
		}
	}, callback);
};
/** End ExamSchoolDistrictApi-listSchoolsPinyin */



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
 * Created by ExamConsolidationApi-save
 *
 * 保存巩固率设置数据 (郑强) #2017-03-17#
 *
 * @consolidations 	巩固率设置数据-Body
 */
exports.ExamConsolidationApi_save = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/consolidation/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamConsolidationApi-save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamConsolidationApi-save */



/**
 * Created by ExamQueryApi-getCourse
 *
 * 查询一个考试科目详情 (陈显官) #2017-03-02#
 *
 * @examCourseId 	考试科目mongo-ID-String
 */
exports.ExamQueryApi_getCourse = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/query/get_course/"+data.examCourseId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-getCourse",
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-getCourse */



/**
 * Created by OrganizationApi-findCurrentOrg
 *
 * 查询当前用户的组织机构(胡君) #2017-03-14#
 *
 */
exports.OrganizationApi_findCurrentOrg = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/organization/find_current_org/",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-findCurrentOrg"
	}, callback);
};
/** End OrganizationApi-findCurrentOrg */



/**
 * Created by loginUsingPOST
 *
 * 用户登录（龚德志） #2017-03-13#
 *
 * @user 	登录参数-Body
 */
exports.loginUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/auth/login",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "loginUsingPOST",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End loginUsingPOST */



/**
 * Created by ExamExcellentApi-find
 *
 * 成绩分析设置 - 特优生筛选线查询（龚德志) #2017-03-03#
 *
 * @examId 	考试ID-String * @artCategory 	0：不分科；1：文科；2：理科-Number
 * @orgId 	当前机构ID-String
 */
exports.ExamExcellentApi_find = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-excellent/show/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamExcellentApi-find",
		form: {
			artCategory: data.artCategory,
			orgId: data.orgId
		}
	}, callback);
};
/** End ExamExcellentApi-find */



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
 * Created by getUserAppUsingPOST
 *
 * 获取用户拥有的系统（龚德志） #2017-03-13#
 *
 * @TOKEN 	登录获取到的刷新token-String
 */
exports.getUserAppUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/app/get-userapp",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "getUserAppUsingPOST",
		form: {
		}
	}, callback);
};
/** End getUserAppUsingPOST */



/**
 * Created by ExamScoreImportApi-listSuccessMark
 *
 * 查询导入成功的学生成绩试题分数列表 (陈显官) #2017-03-22#测试使用
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID，网阅考试必需-String
 * @pageableDto 	分页参数对象-Body
 */
exports.ExamScoreImportApi_listSuccessMark = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/score-import/list_success_mark",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-listSuccessMark",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End ExamScoreImportApi-listSuccessMark */



/**
 * Created by ExamTargetSettingApi-importDataOssFile
 *
 * 成绩分析设置 - 目标参照Excel上传（龚德志) #2017-03-09#
 *
 * @classTargets 	目标设置数据-Body
 */
exports.ExamTargetSettingApi_importDataOssFile = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/target/import-oss",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-importDataOssFile",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamTargetSettingApi-importDataOssFile */



/**
 * Created by OrganizationApi-listSchools
 *
 * 查询某学段所有学校(胡君) #2017-03-09#
 *
 * @dto 	ParamListSchoolDTO-Body
 */
exports.OrganizationApi_listSchools = function (data, callback) {
	servers.POST({
		url: "/yun/cab/api/v1/organization/list_schools",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listSchools",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End OrganizationApi-listSchools */



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
 * Created by ExamQueryApi-isCalculateOver
 *
 * 查询成绩计算是否完成 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_isCalculateOver = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/query/is_calculate_over/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-isCalculateOver",
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-isCalculateOver */



/**
 * Created by ExamPaperSplitApi-save
 *
 * 保存分卷设置 (郑强) #2017-03-15#
 *
 * @splitList 	考试计算规则列表数据-Body
 */
exports.ExamPaperSplitApi_save = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-paper-split/save",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamPaperSplitApi-save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamPaperSplitApi-save */



/**
 * Created by PlatformAccountApi-findClassSubjects
 *
 * 根据家长ID查询孩子(向发钧) #2017-03-14#
 *
 * @parentId 	家长ID-Number
 */
exports.PlatformAccountApi_findClassSubjects = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/account/find_child/"+data.parentId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "PlatformAccountApi-findClassSubjects",
		form: {
		}
	}, callback);
};
/** End PlatformAccountApi-findClassSubjects */



/**
 * Created by ExamScoreLineApi-lineTypeDropdown
 *
 * 分数线类型下拉选择 (郑强) #2017-03-16#
 *
 */
exports.ExamScoreLineApi_lineTypeDropdown = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/setting-score-line/line_types",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-lineTypeDropdown"
	}, callback);
};
/** End ExamScoreLineApi-lineTypeDropdown */



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
		url: "/abc/cde/api/v1/target/import/"+data.examId+"/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-importData",
		form: {
			artCategory: data.artCategory,
		}
	}, callback);
};
/** End ExamTargetSettingApi-importData */



/**
 * Created by ExamScoreLineApi-downloadTemplate
 *
 * 下载分数线Excel导入模板,返回下载地址URI (郑强) #2017-03-17#
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreLineApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/setting-score-line/download_template/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-downloadTemplate",
		form: {
		}
	}, callback);
};
/** End ExamScoreLineApi-downloadTemplate */



/**
 * Created by ExamSchoolDistrictApi-list
 *
 * 查询当前区县学区列表 (陈显官) #2017-03-10#
 *
 */
exports.ExamSchoolDistrictApi_list = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-district/list",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolDistrictApi-list"
	}, callback);
};
/** End ExamSchoolDistrictApi-list */



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
 * Created by ExamBasicApi-createExam
 *
 * 创建考试 (陈显官) #2017-03-23#
 *
 * @examCreateDTO 	examCreateDTO-Body
 */
exports.ExamBasicApi_createExam = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/basic/create_exam",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamBasicApi-createExam",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamBasicApi-createExam */



/**
 * Created by ExamClassLevelApi-page
 *
 * 班级层次分页查询 (郑强) #2017-03-01#
 *
 * @pageableDto 	分页参数对象-Body
 */
exports.ExamClassLevelApi_page = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/setting-class-level/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassLevelApi-page",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamClassLevelApi-page */



/**
 * Created by ExamSchoolGroupApi-modifyByCreate
 *
 * 修改学校分类 (陈显官) #2017-03-10#
 *
 * @modifyDto 	待修改的学校分类信息-Body
 */
exports.ExamSchoolGroupApi_modifyByCreate = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-group/modify",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-modifyByCreate",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamSchoolGroupApi-modifyByCreate */



/**
 * Created by ExamCommonApi-findByTimeAndCount
 *
 * 通过一个时间来查询学期(向发钧) #2017-03-09#
 *
 * @time 	时间-Number
 * @count 	数量-Number
 * @tenantId 	租户ID-Number
 */
exports.ExamCommonApi_findByTimeAndCount = function (data, callback) {
	servers.POST({
		url: "/yun/cab/api/v1/common/find_time",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-findByTimeAndCount",
		form: {
			time: data.time,
			count: data.count,
			tenantId: data.tenantId
		}
	}, callback);
};
/** End ExamCommonApi-findByTimeAndCount */



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
		url: "/abc/cde/api/score-import/download_fail",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-downloadFail",
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End ExamScoreImportApi-downloadFail */



/**
 * Created by ExamTownApi-remove
 *
 * 删除乡镇 (陈显官) #2017-03-10#
 *
 * @id 	乡镇ID-String
 */
exports.ExamTownApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/v1/town/remove/"+data.id,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTownApi-remove",
		form: {
		}
	}, callback);
};
/** End ExamTownApi-remove */



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
 * Created by ExamQuestionApi-remove
 *
 * 根据考试试题的ID进行考试试题删除操作 (郑强) #2017-03-17#
 *
 * @questionId 	试题ID-String
 */
exports.ExamQuestionApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/abc/cde/api/question/remove/"+data.questionId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQuestionApi-remove",
		form: {
		}
	}, callback);
};
/** End ExamQuestionApi-remove */



/**
 * Created by ExamCalculateRuleApi-list
 *
 * 根据考试ID查询考试的计算规则设置 (郑强) #2017-03-14#
 *
 * @examId 	考试ID-String
 */
exports.ExamCalculateRuleApi_list = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-calculate-rule/list/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCalculateRuleApi-list",
		form: {
		}
	}, callback);
};
/** End ExamCalculateRuleApi-list */



/**
 * Created by listToUpdateUsingGET
 *
 * 导入准考证号 - 查看准考证导入情况 - 未更新准考证数据加载
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.listToUpdateUsingGET = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/ticket/list_update/"+data.importId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "listToUpdateUsingGET",
		form: {
		}
	}, callback);
};
/** End listToUpdateUsingGET */



/**
 * Created by initAllAccountUsingPUT
 *
 * 初始全部用户信息
 *
 */
exports.initAllAccountUsingPUT = function (data, callback) {
	servers.PUT({
		url: "/api/v1/user-auth-notify/accounts/init",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "initAllAccountUsingPUT"
	}, callback);
};
/** End initAllAccountUsingPUT */



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
 * Created by OrganizationApi-listChildren
 *
 * 查询机构ID查询该层的所有子机构列表(胡君) #2017-03-09#
 *
 * @orgId 	组织机构ID-Number
 */
exports.OrganizationApi_listChildren = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/organization/list_children/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listChildren",
		form: {
		}
	}, callback);
};
/** End OrganizationApi-listChildren */



/**
 * Created by ExamClassPartApi-findAll
 *
 * 查询学校全部的学部数据 (郑强) #2017-03-15#
 *
 */
exports.ExamClassPartApi_findAll = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/setting-class-part/find_all",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamClassPartApi-findAll"
	}, callback);
};
/** End ExamClassPartApi-findAll */



/**
 * Created by ExamQueryApi-listCourses
 *
 * 查询某次考试的所有科目 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_listCourses = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/query/list_courses/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-listCourses",
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-listCourses */



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
		url: "/abc/cde/api/score-import/find_not_match_header",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-findNotMatchHeader",
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End ExamScoreImportApi-findNotMatchHeader */



/**
 * Created by ExamTargetSettingApi-find
 *
 * 成绩分析设置 - 目标参照设置加载（龚德志) #2017-03-03#
 *
 * @examId 	考试ID-String * @orgId 	当前学校ID-String * @artCategory 	0：不分科；1：文科；2：理科-Number
 */
exports.ExamTargetSettingApi_find = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/target/find/"+data.examId+"/"+data.orgId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamTargetSettingApi-find",
		form: {
			artCategory: data.artCategory
		}
	}, callback);
};
/** End ExamTargetSettingApi-find */



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
 * Created by ExamCommonApi-listPlatformTerms
 *
 * 通过租户ID查询学期 (向发钧) #2017-03-09#
 *
 * @tenantId 	租户唯一ID-Number
 */
exports.ExamCommonApi_listPlatformTerms = function (data, callback) {
	servers.GET({
		url: "/yun/cab/api/v1/common/list_platform_terms/"+data.tenantId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamCommonApi-listPlatformTerms",
		form: {
		}
	}, callback);
};
/** End ExamCommonApi-listPlatformTerms */



/**
 * Created by ExamStudentImportApi-listSuccess
 *
 * 查询导入成功的学生列表 (龚德志) #2017-03-17#
 *
 * @pageReq 	查询导入成功的学生参数对象-Body
 */
exports.ExamStudentImportApi_listSuccess = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/examstudent/list_success",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamStudentImportApi-listSuccess",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamStudentImportApi-listSuccess */



/**
 * Created by ExamSchoolGroupApi-page
 *
 * 查询当前区县学校分类分页列表 (陈显官) #2017-03-10#
 *
 * @pageDto 	pageDto-Body
 */
exports.ExamSchoolGroupApi_page = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-group/page",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-page",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamSchoolGroupApi-page */



/**
 * Created by ExamScoreLineApi-validate
 *
 * 验证分数线列表数据 (郑强) #2017-03-18#
 *
 * @scoreLineList 	分数线列表数据-Body
 */
exports.ExamScoreLineApi_validate = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/setting-score-line/validate",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreLineApi-validate",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamScoreLineApi-validate */



/**
 * Created by ExamQueryApi-listSchools
 *
 * 查询某次考试的所有参考学校 (陈显官) #2017-03-02#
 *
 * @examId 	考试ID-String
 */
exports.ExamQueryApi_listSchools = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/v1/query/list_schools/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamQueryApi-listSchools",
		form: {
		}
	}, callback);
};
/** End ExamQueryApi-listSchools */



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
 * Created by OrganizationApi-listWordAndSchools
 *
 * 查询某学段所有学校首字母和学校列表的关系(胡君) #2017-03-10#
 *
 * @dto 	ParamListSchoolDTO-Body
 */
exports.OrganizationApi_listWordAndSchools = function (data, callback) {
	servers.POST({
		url: "/yun/cab/api/v1/organization/list_word_and_schools",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "OrganizationApi-listWordAndSchools",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End OrganizationApi-listWordAndSchools */



/**
 * Created by ExamScoreImportApi-saveMarkToDatabase
 *
 * 保存缓存中成绩数据到数据库中 (陈显官) #2017-03-22#测试使用
 *
 * @examId 	考试ID-String
 */
exports.ExamScoreImportApi_saveMarkToDatabase = function (data, callback) {
	servers.GET({
		url: "/abc/cde/api/score-import/save_mark_to_database/"+data.examId,
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamScoreImportApi-saveMarkToDatabase",
		form: {
		}
	}, callback);
};
/** End ExamScoreImportApi-saveMarkToDatabase */



/**
 * Created by importDataUsingPOST
 *
 * 导入准考证 - 准考证Excel上传
 *
 * @examId 	考试ID-String
 * @file 	文件form-data数据流-
 */
exports.importDataUsingPOST = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/ticket/import_data",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "importDataUsingPOST",
		form: {
			examId: data.examId,
		}
	}, callback);
};
/** End importDataUsingPOST */



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
 * Created by ExamSchoolGroupApi-create
 *
 * 新建学校分类 (陈显官) #2017-03-10#
 *
 * @createDto 	待新建学校分类信息-Body
 */
exports.ExamSchoolGroupApi_create = function (data, callback) {
	servers.POST({
		url: "/abc/cde/api/v1/school-group/create",
		token: data.TOKEN!=undefined?data.TOKEN:"",
		swaggerId: "ExamSchoolGroupApi-create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ExamSchoolGroupApi-create */

