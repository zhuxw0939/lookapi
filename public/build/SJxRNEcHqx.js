/**!
 * 晓我成长成绩分析系统-swagger版 v1.1
 * 接口数量 115
 * http://192.168.60.98:3300/api/list?p_id=SklRa0r$qg&v_id=SJxRNEcHqx
 *
 * 2017-03-07 20:47:28 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../common/servers');



/** 
 * Created by listOrgSchoolYearUsingGET
 *
 * 查询一个租户的所有学年
 *
 * @orgId 	租户唯一ID-String
 */
exports.getMySchoolYears = function (data, callback) {
	servers.GET({
		url: "/api/v1/organization/list_school_year/"+data.orgId,
		swaggerId: "listOrgSchoolYearUsingGET",
		form: {
			orgId: data.orgId
		}
	}, callback);
};
/** End listOrgSchoolYearUsingGET */



/** 
 * Created by downloadTemplateUsingGET_4
 *
 * 导入准考证 - 模版下载
 *
 */
exports.importTicket = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/download_template",
		swaggerId: "downloadTemplateUsingGET_4"
	}, callback);
};
/** End downloadTemplateUsingGET_4 */



/** 
 * Created by removeUsingDELETE_2
 *
 * 删除学校超越率显示设置 (郑强) #2017-03-01#
 *
 * @ratioRuleId 	学校超越率显示设置ID-String
 */
exports.removeUsingDELETE_2 = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-ratio-rule/remove/"+data.ratioRuleId,
		swaggerId: "removeUsingDELETE_2",
		form: {
			ratioRuleId: data.ratioRuleId
		}
	}, callback);
};
/** End removeUsingDELETE_2 */



/** 
 * Created by importDataUsingPOST_4
 *
 * 导入准考证 - 准考证Excel上传
 *
 * @examId 	考试ID-String
 * @file 	文件form-data数据流-
 */
exports.importTicket = function (data, callback) {
	servers.POST({
		url: "/api/v1/ticket/import_data",
		swaggerId: "importDataUsingPOST_4",
		form: {
			examId: data.examId,
			file: data.file
		}
	}, callback);
};
/** End importDataUsingPOST_4 */



/** 
 * Created by createUsingPOST_9
 *
 * 新建乡镇
 *
 * @examTown 	待新建的乡镇信息-Body
 */
exports.createUsingPOST_9 = function (data, callback) {
	servers.POST({
		url: "/api/v1/town/create",
		swaggerId: "createUsingPOST_9",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createUsingPOST_9 */



/** 
 * Created by listClassesUsingGET
 *
 * 查询某学校某年级所有班级
 *
 * @schoolId 	学校id-String
 * @gradeId 	市级年级ID-String
 */
exports.listClasses = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_classes/"+data.schoolId+"-"+data.gradeId,
		swaggerId: "listClassesUsingGET",
		form: {
			schoolId: data.schoolId,
			gradeId: data.gradeId
		}
	}, callback);
};
/** End listClassesUsingGET */



/** 
 * Created by downloadFailUsingGET
 *
 * 下载未导入成绩的人员名单
 *
 * @importId 	成绩导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.scoreImportFail = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/download_fail/"+data.importId,
		swaggerId: "downloadFailUsingGET",
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End downloadFailUsingGET */



/** 
 * Created by unPublishUsingPOST
 *
 * 撤销考试发布
 *
 * @examId 	考试ID-String
 */
exports.unPublishUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/query/un_publish/"+data.examId,
		swaggerId: "unPublishUsingPOST",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End unPublishUsingPOST */



/** 
 * Created by saveUsingPOST
 *
 * 保存考试的计算规则 (郑强) #2017-03-01#
 *
 * @calculateRulesList 	考试计算规则列表数据-Body * @examId 	考试ID-String
 */
exports.saveUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-calculate-rule/save/"+data.examId,
		swaggerId: "saveUsingPOST",
		body: data.body,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End saveUsingPOST */



/** 
 * Created by getUsingGET
 *
 * 通过用户ID查询一个租户对象
 *
 * @userId 	用户ID-String
 */
exports.getUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/organization/get/"+data.userId,
		swaggerId: "getUsingGET",
		form: {
			userId: data.userId
		}
	}, callback);
};
/** End getUsingGET */



/** 
 * Created by listFailUsingGET
 *
 * 查询导入失败的学生列表
 *
 * @pageableDto 	分页参数对象-Body * @importId 	成绩导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.listFailUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/list_fail",
		swaggerId: "listFailUsingGET",
		body: data.body,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End listFailUsingGET */



/** 
 * Created by saveUsingPOST_2
 *
 * 保存分数线列表数据 (郑强) #2017-03-01#
 *
 * @scoreLineList 	分数线列表数据-Body * @examId 	考试ID-String
 */
exports.saveUsingPOST_2 = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-score-line/save/"+data.examId,
		swaggerId: "saveUsingPOST_2",
		body: data.body,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End saveUsingPOST_2 */



/** 
 * Created by downloadToUpdateUsingGET
 *
 * 导入准考证号 - 查看准考证导入情况 - 下载未更新准考证数据
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.downloadUpdateTicket = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/download_update/"+data.importId,
		swaggerId: "downloadToUpdateUsingGET",
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End downloadToUpdateUsingGET */



/** 
 * Created by removeUsingDELETE_7
 *
 * 根据分数线的ID进行分数线删除操作 (郑强) #2017-03-01#
 *
 * @scoreLineId 	分数线的ID-String
 */
exports.removeUsingDELETE_7 = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-score-line/remove/"+data.scoreLineId,
		swaggerId: "removeUsingDELETE_7",
		form: {
			scoreLineId: data.scoreLineId
		}
	}, callback);
};
/** End removeUsingDELETE_7 */



/** 
 * Created by createRegionExamUsingPOST
 *
 * 创建区县考试
 *
 * @exam 	ExamCreateDTO-Body
 */
exports.createRegionExamUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/basic/create_region_exam",
		swaggerId: "createRegionExamUsingPOST",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createRegionExamUsingPOST */



/** 
 * Created by listTableHeaderUsingGET
 *
 * 查询导入成功的学生成绩列表的表头
 *
 * @importId 	成绩导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.listTableHeaderUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/list_header/"+data.importId,
		swaggerId: "listTableHeaderUsingGET",
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End listTableHeaderUsingGET */



/** 
 * Created by listUsingGET
 *
 * 根据考试ID查询考试的计算规则设置 (郑强) #2017-03-01#
 *
 * @examId 	考试ID-String
 */
exports.listUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-calculate-rule/list/"+data.examId,
		swaggerId: "listUsingGET",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End listUsingGET */



/** 
 * Created by modifyUsingPOST
 *
 * 修改班级层次设置
 *
 * @classGroupList 	classGroupList-Body * @classGroupList (郑强) #2017-03-01# 	班级层次设置数据-Body
 */
exports.modifyUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-level/modify",
		swaggerId: "modifyUsingPOST",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End modifyUsingPOST */



/** 
 * Created by createUsingPOST_8
 *
 * 成绩分析设置 - 踩线生筛选线设置
 *
 * @examId 	考试ID-String
 * @touchedLineListDTOs 	分数线设置数据集合-Body
 */
exports.createUsingPOST_8 = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-touched-line/create/"+data.examId,
		swaggerId: "createUsingPOST_8",
		body: data.body,
		form: {
			examId: data.examId,
		}
	}, callback);
};
/** End createUsingPOST_8 */



/** 
 * Created by findQuestionsUsingGET
 *
 * 根据考试科目查询科目的试题数据 (郑强) #2017-03-01#
 *
 * @courseId 	考试课程ID-String
 */
exports.findQuestionsUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_questions/"+data.courseId,
		swaggerId: "findQuestionsUsingGET",
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End findQuestionsUsingGET */



/** 
 * Created by listRegionsUsingGET
 *
 * 查询区县
 *
 */
exports.listRegionsUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_regions",
		swaggerId: "listRegionsUsingGET"
	}, callback);
};
/** End listRegionsUsingGET */



/** 
 * Created by r1xWaKiI9l
 *
 * TEST - 成绩分析 - 获取班级分数段数据
 *
 * @category 	-
 * @examid 	-
 * @level 	-
 */
exports.getEChartData = function (data, callback) {
	servers.POST({
		url: "/test/1/getEChartData",
		swaggerId: "",
		form: {
			category: data.category,
			examid: data.examid,
			level: data.level
		}
	}, callback);
};
/** End r1xWaKiI9l */



/** 
 * Created by findPointsUsingGET
 *
 * 根据考试试题查询与试题相关的知识点列表数据 (郑强) #2017-03-01#
 *
 * @questionId 	试题ID-String
 */
exports.findPointsUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_points/"+data.questionId,
		swaggerId: "findPointsUsingGET",
		form: {
			questionId: data.questionId
		}
	}, callback);
};
/** End findPointsUsingGET */



/** 
 * Created by listSuccessUsingGET
 *
 * 查询导入成功的学生成绩列表
 *
 * @pageableDto 	分页参数对象-Body * @importId 	成绩导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.listSuccessUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/list_success",
		swaggerId: "listSuccessUsingGET",
		body: data.body,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End listSuccessUsingGET */



/** 
 * Created by listTermsUsingGET
 *
 * 查询学期
 *
 */
exports.listTerms = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_terms",
		swaggerId: "listTermsUsingGET"
	}, callback);
};
/** End listTermsUsingGET */



/** 
 * Created by removeUsingDELETE_3
 *
 * 根据分卷的ID进行分卷信息删除操作 (郑强) #2017-03-01#
 *
 * @splitId 	分卷ID-String
 */
exports.removeUsingDELETE_3 = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-paper-split/remove/"+data.splitId,
		swaggerId: "removeUsingDELETE_3",
		form: {
			splitId: data.splitId
		}
	}, callback);
};
/** End removeUsingDELETE_3 */



/** 
 * Created by helloUsingGET
 *
 * 测试接口
 *
 * @id 	id-Number
 */
exports.helloUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/hello/"+data.id,
		swaggerId: "helloUsingGET",
		form: {
			id: data.id
		}
	}, callback);
};
/** End helloUsingGET */



/** 
 * Created by findAllUsingGET
 *
 * 查询学校全部的学部数据 (郑强) #2017-03-01#
 *
 */
exports.findAllUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-class-part/find_all",
		swaggerId: "findAllUsingGET"
	}, callback);
};
/** End findAllUsingGET */



/** 
 * Created by findQuestionUsingGET
 *
 * 根据考试试题ID查询试题 (郑强) #2017-03-01#
 *
 * @questionId 	试题ID-String
 */
exports.findQuestionUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_question/"+data.questionId,
		swaggerId: "findQuestionUsingGET",
		form: {
			questionId: data.questionId
		}
	}, callback);
};
/** End findQuestionUsingGET */



/** 
 * Created by modifyUsingPOST_1
 *
 * 修改学部设置 (郑强) #2017-03-01#
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.modifyUsingPOST_1 = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-part/modify",
		swaggerId: "modifyUsingPOST_1",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End modifyUsingPOST_1 */



/** 
 * Created by createUsingPOST_1
 *
 * 保存班级层次设置
 *
 * @classGroupList 	classGroupList-Body * @classGroupList (郑强) #2017-03-01# 	班级层次设置数据-Body
 */
exports.createUsingPOST_1 = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-level/create",
		swaggerId: "createUsingPOST_1",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createUsingPOST_1 */



/** 
 * Created by findUsingGET_3
 *
 * 成绩分析设置 - 特优生筛选线查询
 *
 * @examId 	考试ID-String
 */
exports.findUsingGET_3 = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-excellent/show/"+data.examId,
		swaggerId: "findUsingGET_3",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End findUsingGET_3 */



/** 
 * Created by findUsingGET_1
 *
 * 根据班级层次ID查询班级层次数据 (郑强) #2017-03-01#
 *
 * @classLevelId 	班级层次ID-String
 */
exports.findUsingGET_1 = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-class-level/find/"+data.classLevelId,
		swaggerId: "findUsingGET_1",
		form: {
			classLevelId: data.classLevelId
		}
	}, callback);
};
/** End findUsingGET_1 */



/** 
 * Created by listSchoolsUsingGET
 *
 * 查询某个区县某学段所有学校
 *
 * @phase 	云平台学段-Number
 * @regionOrgId 	云平台区县ID-String
 */
exports.listSchools = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_schools/"+data.phase+"-"+data.regionOrgId,
		swaggerId: "listSchoolsUsingGET",
		form: {
			phase: data.phase,
			regionOrgId: data.regionOrgId
		}
	}, callback);
};
/** End listSchoolsUsingGET */



/** 
 * Created by createUsingPOST_3
 *
 * 成绩分析设置 - 特优生筛选线设置
 *
 * @examId 	考试ID-String
 * @rank 	名次-Number
 */
exports.createUsingPOST_3 = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-excellent/create",
		swaggerId: "createUsingPOST_3",
		form: {
			examId: data.examId,
			rank: data.rank
		}
	}, callback);
};
/** End createUsingPOST_3 */



/** 
 * Created by importDataUsingPOST_1
 *
 * 导入成绩
 *
 * @examCourseId 	考试科目ID-String
 * @file 	成绩Excel文件-
 */
exports.scoreImport = function (data, callback) {
	servers.POST({
		url: "/api/v1/score-import/import_data/",
		swaggerId: "importDataUsingPOST_1",
		form: {
			examCourseId: data.examCourseId,
			file: data.file
		}
	}, callback);
};
/** End importDataUsingPOST_1 */



/** 
 * Created by errorUsingGET
 *
 * error
 *
 */
exports.errorUsingGET = function (data, callback) {
	servers.GET({
		url: "/error",
		swaggerId: "errorUsingGET"
	}, callback);
};
/** End errorUsingGET */



/** 
 * Created by removeUsingDELETE_6
 *
 * 删除学校分类
 *
 * @id 	学校分类ID-String
 */
exports.deleteSchool = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/school-group/remove/"+data.id,
		swaggerId: "removeUsingDELETE_6",
		form: {
			id: data.id
		}
	}, callback);
};
/** End removeUsingDELETE_6 */



/** 
 * Created by downloadTemplateUsingGET_2
 *
 * 下载分数线Excel导入模板,返回下载地址URI
 *
 */
exports.downloadTemplateUsingGET_2 = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-score-line/download_template",
		swaggerId: "downloadTemplateUsingGET_2"
	}, callback);
};
/** End downloadTemplateUsingGET_2 */



/** 
 * Created by removeUsingDELETE_5
 *
 * 删除学区
 *
 * @id 	学区ID-String
 */
exports.deleteRegion = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/school-district/remove/"+data.id,
		swaggerId: "removeUsingDELETE_5",
		form: {
			id: data.id
		}
	}, callback);
};
/** End removeUsingDELETE_5 */



/** 
 * Created by listSubjectPointsUsingGET
 *
 * 根据学科查询知识点
 *
 * @subjectId 	云平台市级学科-String
 */
exports.listSubjectPointsUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_subject_points/"+data.subjectId,
		swaggerId: "listSubjectPointsUsingGET",
		form: {
			subjectId: data.subjectId
		}
	}, callback);
};
/** End listSubjectPointsUsingGET */



/** 
 * Created by createCityExamUsingPOST
 *
 * 创建市级考试
 *
 * @exam 	ExamCreateDTO-Body
 */
exports.createCityExamUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/basic/create_city_exam",
		swaggerId: "createCityExamUsingPOST",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createCityExamUsingPOST */



/** 
 * Created by listToUpdateUsingGET
 *
 * 导入准考证号 - 查看准考证导入情况 - 未更新准考证数据加载
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.ticketListUpdate = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/list_update/"+data.importId,
		swaggerId: "listToUpdateUsingGET",
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End listToUpdateUsingGET */



/** 
 * Created by findCoursesUsingGET
 *
 * 根据考试查询此次考试的考试科目数据 (郑强) #2017-03-01#
 *
 * @examId 	试题ID-String
 */
exports.findCoursesUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_courses/"+data.examId,
		swaggerId: "findCoursesUsingGET",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End findCoursesUsingGET */



/** 
 * Created by ryl3ZtOqce
 *
 * TODO -- 根据某次考试的科目id获取能力层级数据池-zxw
 *
 */
exports.ryl3ZtOqce = function (data, callback) {
	servers.POST({
		url: "/todo/levelsOptions",
		swaggerId: ""
	}, callback);
};
/** End ryl3ZtOqce */



/** 
 * Created by createUsingPOST_6
 *
 * 新建学校分类
 *
 * @examSchoolGroup 	待新建学校分类信息-Body
 */
exports.createUsingPOST_6 = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-group/create",
		swaggerId: "createUsingPOST_6",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createUsingPOST_6 */



/** 
 * Created by analysisRecentScoreLineUsingGET
 *
 * 首页 - 最近一次考试分数线人数、比例对比
 *
 */
exports.analysisRecentScoreLineUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/analysis_recent_score_line",
		swaggerId: "analysisRecentScoreLineUsingGET"
	}, callback);
};
/** End analysisRecentScoreLineUsingGET */



/** 
 * Created by listSchoolsUsingGET_1
 *
 * 查询某学段所有学校
 *
 * @phase 	云平台学段-Number
 */
exports.listSchoolsUsingGET_1 = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_schools/"+data.phase,
		swaggerId: "listSchoolsUsingGET_1",
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End listSchoolsUsingGET_1 */



/** 
 * Created by listUsingGET_3
 *
 * 查询当前区县学校分类列表
 *
 */
exports.schoolList = function (data, callback) {
	servers.GET({
		url: "/api/v1/school-group/list",
		swaggerId: "listUsingGET_3"
	}, callback);
};
/** End listUsingGET_3 */



/** 
 * Created by createUsingPOST_2
 *
 * 保存学部设置 (郑强) #2017-03-01#
 *
 * @classGroupList 	学部设置数据-Body
 */
exports.saveDeparment = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-part/create",
		swaggerId: "createUsingPOST_2",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createUsingPOST_2 */



/** 
 * Created by listToEditExamUsingGET
 *
 * 首页 - 待编辑考试列表
 *
 * @count 	返回记录数-Number
 */
exports.getToEditerExamList = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/list_to_edit/"+data.count,
		swaggerId: "listToEditExamUsingGET",
		form: {
			count: data.count
		}
	}, callback);
};
/** End listToEditExamUsingGET */



/** 
 * Created by listUsingGET_2
 *
 * 查询当前区县学区列表
 *
 */
exports.listUsingGET_2 = function (data, callback) {
	servers.GET({
		url: "/api/v1/school-district/list",
		swaggerId: "listUsingGET_2"
	}, callback);
};
/** End listUsingGET_2 */



/** 
 * Created by findUsingGET_2
 *
 * 根据学部ID查询学部数据 (郑强) #2017-03-01#
 *
 * @classPartId 	学部ID-String
 */
exports.findUsingGET_2 = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-class-part/find/"+data.classPartId,
		swaggerId: "findUsingGET_2",
		form: {
			classPartId: data.classPartId
		}
	}, callback);
};
/** End findUsingGET_2 */



/** 
 * Created by getCourseUsingGET
 *
 * 查询一个考试科目详情
 *
 * @examCourseId 	考试科目mongo-ID-String
 */
exports.getCourseUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/get_course/"+data.examCourseId,
		swaggerId: "getCourseUsingGET",
		form: {
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End getCourseUsingGET */



/** 
 * Created by listRecentUsingGET
 *
 * 首页 - 查询近期考试列表
 *
 * @count 	返回记录数, 默认6-Number
 */
exports.getRecentExamList = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/list_recent/"+data.count,
		swaggerId: "listRecentUsingGET",
		form: {
			count: data.count
		}
	}, callback);
};
/** End listRecentUsingGET */



/** 
 * Created by createSchoolExamUsingPOST
 *
 * 创建校级考试
 *
 * @exam 	ExamCreateSchoolLevelDTO-Body
 */
exports.createSchoolExamUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/basic/create_school_exam",
		swaggerId: "createSchoolExamUsingPOST",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createSchoolExamUsingPOST */



/** 
 * Created by listSchoolsPinyinUsingPOST_1
 *
 * 查询当前区县学校列表
 *
 * @phases 	将要查询的多个学段，不传值时查询所有学段-
 */
exports.listSchoolsPinyinUsingPOST_1 = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-group/list_schools_pinyin",
		swaggerId: "listSchoolsPinyinUsingPOST_1",
		form: {
			phases: data.phases
		}
	}, callback);
};
/** End listSchoolsPinyinUsingPOST_1 */



/** 
 * Created by modifyByCreateUsingPOST_1
 *
 * 修改学校分类
 *
 * @examSchoolGroup 	待修改的学校分类信息-Body
 */
exports.modifyByCreateUsingPOST_1 = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-group/modify",
		swaggerId: "modifyByCreateUsingPOST_1",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End modifyByCreateUsingPOST_1 */



/** 
 * Created by listGradesUsingGET
 *
 * 查询某学段市级年级
 *
 * @phase 	云平台学段-Number
 */
exports.listGradesUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_grades/"+data.phase,
		swaggerId: "listGradesUsingGET",
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End listGradesUsingGET */



/** 
 * Created by listSchoolsPinyinUsingPOST
 *
 * 查询当前区县学校列表
 *
 * @phases 	将要查询的多个学段，不传值时查询所有学段-
 */
exports.regionList = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-district/list_schools_pinyin",
		swaggerId: "listSchoolsPinyinUsingPOST",
		form: {
			phases: data.phases
		}
	}, callback);
};
/** End listSchoolsPinyinUsingPOST */



/** 
 * Created by listCoursesUsingGET
 *
 * 查询某学段所有科目
 *
 * @phase 	云平台学段-Number
 */
exports.listCoursesUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_courses/"+data.phase,
		swaggerId: "listCoursesUsingGET",
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End listCoursesUsingGET */



/** 
 * Created by listSubjectLevelsUsingGET
 *
 * 根据学科查询能力层次
 *
 * @subjectId 	云平台市级学科-String
 */
exports.listSubjectLevelsUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_subject_levels/"+data.subjectId,
		swaggerId: "listSubjectLevelsUsingGET",
		form: {
			subjectId: data.subjectId
		}
	}, callback);
};
/** End listSubjectLevelsUsingGET */



/** 
 * Created by downloadNotFoundUsingGET
 *
 * 导入准考证号 - 查看准考证导入情况 - 下载未在基础数据找到数据
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.downloadNotFoundTicket = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/download_not_found/"+data.importId,
		swaggerId: "downloadNotFoundUsingGET",
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End downloadNotFoundUsingGET */



/** 
 * Created by listSchoolsUsingGET_2
 *
 * 查询某次考试的所有参考学校
 *
 * @examId 	考试ID-String
 */
exports.listSchoolsUsingGET_2 = function (data, callback) {
	servers.GET({
		url: "/api/v1/query/list_schools/"+data.examId,
		swaggerId: "listSchoolsUsingGET_2",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End listSchoolsUsingGET_2 */



/** 
 * Created by listUsingGET_5
 *
 * 查询当前区县乡镇列表
 *
 */
exports.listUsingGET_5 = function (data, callback) {
	servers.GET({
		url: "/api/v1/town/list",
		swaggerId: "listUsingGET_5"
	}, callback);
};
/** End listUsingGET_5 */



/** 
 * Created by pageUsingPOST
 *
 * 班级层次分页查询 (郑强) #2017-03-01#
 *
 * @pageableDto 	分页参数对象-Body
 */
exports.classList = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-level/page",
		swaggerId: "pageUsingPOST",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End pageUsingPOST */



/** 
 * Created by findUsingGET
 *
 * 成绩分析设置 - 查询兄弟学校
 *
 * @schoolId 	当前学校ID-String
 */
exports.findUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-brother-school/find/"+data.schoolId,
		swaggerId: "findUsingGET",
		form: {
			schoolId: data.schoolId
		}
	}, callback);
};
/** End findUsingGET */



/** 
 * Created by Syg4pbL5ql
 *
 * TODO -- 根据token获取用户信息
 *
 * @token 	token-String
 */
exports.getUserInfoByToken = function (data, callback) {
	servers.POST({
		url: "/test/getUserInfoByToken",
		swaggerId: "",
		form: {
			token: data.token
		}
	}, callback);
};
/** End Syg4pbL5ql */



/** 
 * Created by listRegionSchoolsUsingGET
 *
 * 查询当前区县某学段所有学校
 *
 * @phase 	云平台学段-Number
 */
exports.listRegionSchools = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_region_schools/"+data.phase,
		swaggerId: "listRegionSchoolsUsingGET",
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End listRegionSchoolsUsingGET */



/** 
 * Created by modifyByCreateUsingPOST_2
 *
 * 修改乡镇
 *
 * @examTown 	待修改的乡镇信息-Body
 */
exports.modifyByCreateUsingPOST_2 = function (data, callback) {
	servers.POST({
		url: "/api/v1/town/modify",
		swaggerId: "modifyByCreateUsingPOST_2",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End modifyByCreateUsingPOST_2 */



/** 
 * Created by downloadTemplateUsingGET_3
 *
 * 考试管理 - 目标参照模版下载
 *
 */
exports.downloadTemplateUsingGET_3 = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-target-reference/download_template",
		swaggerId: "downloadTemplateUsingGET_3"
	}, callback);
};
/** End downloadTemplateUsingGET_3 */



/** 
 * Created by listCoursesUsingGET_1
 *
 * 查询某次考试的所有科目
 *
 * @examId 	考试ID-String
 */
exports.getCoursesByExamId = function (data, callback) {
	servers.GET({
		url: "/api/v1/query/list_courses/"+data.examId,
		swaggerId: "listCoursesUsingGET_1",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End listCoursesUsingGET_1 */



/** 
 * Created by showUsingGET
 *
 * 根据考试ID,计算规则类型查询考试的计算规则 (郑强) #2017-03-01#
 *
 * @examId 	考试ID-String
 * @ruleType 	规则类型-String
 */
exports.showUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-calculate-rule/show/"+data.examId+"/"+data.ruleType,
		swaggerId: "showUsingGET",
		form: {
			examId: data.examId,
			ruleType: data.ruleType
		}
	}, callback);
};
/** End showUsingGET */



/** 
 * Created by downloadTemplateUsingGET
 *
 * 下载双向细目表Excel导入模板
 *
 */
exports.downloadTemplateUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/download_template",
		swaggerId: "downloadTemplateUsingGET"
	}, callback);
};
/** End downloadTemplateUsingGET */



/** 
 * Created by findByCourseUsingGET
 *
 * 根据考试科目查询双向细目表列表数据,不包含数据操作类型 (郑强) #2017-03-01#
 *
 * @courseId 	考试课程ID-String
 */
exports.getQuestionsByCourseId = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_by_course/"+data.courseId,
		swaggerId: "findByCourseUsingGET",
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End findByCourseUsingGET */



/** 
 * Created by pageUsingPOST_2
 *
 * 查询考试列表
 *
 * @queryPageDTO 	queryPageDTO-Body
 */
exports.examlist = function (data, callback) {
	servers.POST({
		url: "/api/v1/query/page",
		swaggerId: "pageUsingPOST_2",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End pageUsingPOST_2 */



/** 
 * Created by importDataUsingPOST_2
 *
 * 上传分数线Excel数据
 *
 * @examId 	考试ID-String
 * @file 	分数线上传文件（Excel数据）-
 */
exports.importDataUsingPOST_2 = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-score-line/import_data/"+data.examId,
		swaggerId: "importDataUsingPOST_2",
		form: {
			examId: data.examId,
			file: data.file
		}
	}, callback);
};
/** End importDataUsingPOST_2 */



/** 
 * Created by isCalculateOverUsingGET
 *
 * 查询成绩计算是否完成
 *
 * @examId 	考试ID-String
 */
exports.isCalculateOverUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/query/is_calculate_over/"+data.examId,
		swaggerId: "isCalculateOverUsingGET",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End isCalculateOverUsingGET */



/** 
 * Created by listClassesUsingGET_1
 *
 * 查询某次考试的所有参考班级
 *
 * @examId 	考试ID-String
 */
exports.listClassesUsingGET_1 = function (data, callback) {
	servers.GET({
		url: "/api/v1/query/list_classes/"+data.examId,
		swaggerId: "listClassesUsingGET_1",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End listClassesUsingGET_1 */



/** 
 * Created by createUsingPOST_7
 *
 * 考试管理 - 目标参照设置创建
 *
 * @examId 	考试ID-String
 */
exports.createUsingPOST_7 = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-target-reference/create",
		swaggerId: "createUsingPOST_7",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End createUsingPOST_7 */



/** 
 * Created by downloadTemplateUsingGET_1
 *
 * 下载成绩导入模板
 *
 * @examCourseId 	考试科目mongo-ID-String
 */
exports.downloadTemplateUsingGET_1 = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/download_template/"+data.examCourseId,
		swaggerId: "downloadTemplateUsingGET_1",
		form: {
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End downloadTemplateUsingGET_1 */



/** 
 * Created by saveUsingPOST_1
 *
 * 保存分卷设置 (郑强) #2017-03-01#
 *
 * @splitList 	考试计算规则列表数据-Body * @courseId 	考试课程ID-String
 */
exports.saveUsingPOST_1 = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-paper-split/save/"+data.courseId,
		swaggerId: "saveUsingPOST_1",
		body: data.body,
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End saveUsingPOST_1 */



/** 
 * Created by showSchoolRatioRuleUsingGET
 *
 * 查询学校超越率显示设置 (郑强) #2017-03-01#
 *
 */
exports.searchOther = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-ratio-rule/find_school_ratio_rule",
		swaggerId: "showSchoolRatioRuleUsingGET"
	}, callback);
};
/** End showSchoolRatioRuleUsingGET */



/** 
 * Created by publishUsingPOST
 *
 * 发布成绩
 *
 * @examId 	考试ID-String
 */
exports.publishUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/query/publish/"+data.examId,
		swaggerId: "publishUsingPOST",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End publishUsingPOST */



/** 
 * Created by listSchoolsPinyinUsingPOST_2
 *
 * 查询当前区县学校列表
 *
 * @phases 	将要查询的多个学段，不传值时查询所有学段-
 */
exports.countryList = function (data, callback) {
	servers.POST({
		url: "/api/v1/town/list_schools_pinyin",
		swaggerId: "listSchoolsPinyinUsingPOST_2",
		form: {
			phases: data.phases
		}
	}, callback);
};
/** End listSchoolsPinyinUsingPOST_2 */



/** 
 * Created by listByTypeUsingGET
 *
 * 根据考试ID,分数线类型查询分数线设置的详细数据 (郑强) #2017-03-01#
 *
 * @examId 	考试ID-String
 * @lineType 	分数线类型-Number
 */
exports.listByTypeUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-score-line/list/"+data.examId+"/"+data.lineType,
		swaggerId: "listByTypeUsingGET",
		form: {
			examId: data.examId,
			lineType: data.lineType
		}
	}, callback);
};
/** End listByTypeUsingGET */



/** 
 * Created by removeUsingDELETE
 *
 * 根据班级层次ID删除班级层次数据 (郑强) #2017-03-01#
 *
 * @classLevelId 	根据班级层次ID-String
 */
exports.deleteClass = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-class-level/remove/"+data.classLevelId,
		swaggerId: "removeUsingDELETE",
		form: {
			classLevelId: data.classLevelId
		}
	}, callback);
};
/** End removeUsingDELETE */



/** 
 * Created by saveAllUsingPOST
 *
 * 保存双向细目表列表数据,保存前会根据课程ID清除原有数据 (郑强) #2017-03-01#
 *
 * @questionDetailList 	双向细目表列表数据-Body * @courseId 	科目ID-String
 */
exports.saveAllUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/question/save/"+data.courseId,
		swaggerId: "saveAllUsingPOST",
		body: data.body,
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End saveAllUsingPOST */



/** 
 * Created by createClassExamUsingPOST
 *
 * 创建班级考试
 *
 * @exam 	ExamCreateClassLevelDTO-Body
 */
exports.createClassExamUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/basic/create_class_exam",
		swaggerId: "createClassExamUsingPOST",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createClassExamUsingPOST */



/** 
 * Created by createUsingPOST_4
 *
 * 保存学校超越率显示设置 (郑强) #2017-03-01#
 *
 * @examHideRatioRule 	学校超越率显示设置-Body
 */
exports.other = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-ratio-rule/create",
		swaggerId: "createUsingPOST_4",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createUsingPOST_4 */



/** 
 * Created by listUsingGET_4
 *
 * 导入准考证号 - 查看准考证导入情况 - 成功导入名单数据加载
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.ticketListSuccess = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/list",
		swaggerId: "listUsingGET_4",
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End listUsingGET_4 */



/** 
 * Created by importDataUsingPOST
 *
 * 上传双向细目表Excel数据 (郑强) #2017-03-01#
 *
 * @courseId 	考试课程ID-String
 * @file 	双向细目表上传文件（Excel数据）-
 */
exports.importDataUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/question/import_data/"+data.courseId,
		swaggerId: "importDataUsingPOST",
		form: {
			courseId: data.courseId,
			file: data.file
		}
	}, callback);
};
/** End importDataUsingPOST */



/** 
 * Created by showUsingGET_1
 *
 * 根据考试ID查询考试的计算规则设置 (郑强) #2017-03-01#
 *
 * @splitId 	分卷ID-String
 */
exports.showUsingGET_1 = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-paper-split/show/"+data.splitId,
		swaggerId: "showUsingGET_1",
		form: {
			splitId: data.splitId
		}
	}, callback);
};
/** End showUsingGET_1 */



/** 
 * Created by listSubjectLevelsOfPhaseUsingGET
 *
 * 根据学科、学段查询能力层次
 *
 * @subjectId 	云平台市级学科-Number
 * @phase 	云平台学段-String
 */
exports.listSubjectLevelsOfPhaseUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_subject_levels/"+data.subjectId+"/"+data.phase,
		swaggerId: "listSubjectLevelsOfPhaseUsingGET",
		form: {
			subjectId: data.subjectId,
			phase: data.phase
		}
	}, callback);
};
/** End listSubjectLevelsOfPhaseUsingGET */



/** 
 * Created by countByGradeUsingGET
 *
 * 首页 - 按考试班级统计考试数量
 *
 */
exports.getCountGradeExamNumber = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/count_grade",
		swaggerId: "countByGradeUsingGET"
	}, callback);
};
/** End countByGradeUsingGET */



/** 
 * Created by createUsingPOST
 *
 * 成绩分析设置 - 添加兄弟学校
 *
 * @brotherSchoolDTOs 	兄弟学校集合-Body
 */
exports.createUsingPOST = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-brother-school/create",
		swaggerId: "createUsingPOST",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createUsingPOST */



/** 
 * Created by listNotFoundUsingGET
 *
 * 导入准考证号 - 查看准考证导入情况 - 未在基础数据找到数据加载
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.ticketListNotFound = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/list_not_found/"+data.importId,
		swaggerId: "listNotFoundUsingGET",
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End listNotFoundUsingGET */



/** 
 * Created by exportUsingGET
 *
 * 下载一个课程的双向细目表Excel数据
 *
 * @courseId 	考试课程ID-String
 */
exports.exportUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/export/"+data.courseId,
		swaggerId: "exportUsingGET",
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End exportUsingGET */



/** 
 * Created by createUsingPOST_5
 *
 * 新建学区
 *
 * @examSchoolDistrict 	待新建学区信息-Body
 */
exports.createRegion = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-district/create",
		swaggerId: "createUsingPOST_5",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End createUsingPOST_5 */



/** 
 * Created by listUsingGET_1
 *
 * 根据考试科目ID查询科目的分卷设置数据 (郑强) #2017-03-01#
 *
 * @courseId 	科目ID-String
 */
exports.listUsingGET_1 = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-paper-split/list/"+data.courseId,
		swaggerId: "listUsingGET_1",
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End listUsingGET_1 */



/** 
 * Created by pageUsingPOST_1
 *
 * 学部分页查询 (郑强) #2017-03-01#
 *
 * @pageableDto 	分页参数对象-Body
 */
exports.departmentList = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-part/page",
		swaggerId: "pageUsingPOST_1",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End pageUsingPOST_1 */



/** 
 * Created by removeUsingDELETE_4
 *
 * 根据考试试题的ID进行考试试题删除操作 (郑强) #2017-03-01#
 *
 * @questionId 	试题ID-String
 */
exports.removeUsingDELETE_4 = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/question/remove/"+data.questionId,
		swaggerId: "removeUsingDELETE_4",
		form: {
			questionId: data.questionId
		}
	}, callback);
};
/** End removeUsingDELETE_4 */



/** 
 * Created by importDataUsingPOST_3
 *
 * 导入准考证 - 目标参照Excel上传
 *
 * @examId 	考试ID-String
 * @file 	文件form-data数据流-
 */
exports.importDataUsingPOST_3 = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-target-reference/import_data",
		swaggerId: "importDataUsingPOST_3",
		form: {
			examId: data.examId,
			file: data.file
		}
	}, callback);
};
/** End importDataUsingPOST_3 */



/** 
 * Created by HJesfQiB9l
 *
 * TODO -- 根据某次考试的科目id获取知识点数据池-zxw
 *
 */
exports.ByxZxIxXqx = function (data, callback) {
	servers.POST({
		url: "/todo/getpointsOptions",
		swaggerId: ""
	}, callback);
};
/** End HJesfQiB9l */



/** 
 * Created by removeUsingDELETE_8
 *
 * 删除乡镇
 *
 * @id 	乡镇ID-String
 */
exports.deleteCountry = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/town/remove/"+data.id,
		swaggerId: "removeUsingDELETE_8",
		form: {
			id: data.id
		}
	}, callback);
};
/** End removeUsingDELETE_8 */



/** 
 * Created by countBySchoolYearUsingPOST
 *
 * 首页 - 按学年统计考试数量
 *
 * @schoolYearId 	学年唯一ID-String
 */
exports.getSchoolYearExamCount = function (data, callback) {
	servers.POST({
		url: "/api/v1/index/count_school_year",
		swaggerId: "countBySchoolYearUsingPOST",
		form: {
			schoolYearId: data.schoolYearId
		}
	}, callback);
};
/** End countBySchoolYearUsingPOST */



/** 
 * Created by listGradesUsingGET_1
 *
 * 查询市级年级
 *
 */
exports.listGrades = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_grades",
		swaggerId: "listGradesUsingGET_1"
	}, callback);
};
/** End listGradesUsingGET_1 */



/** 
 * Created by countByOrgLevelUsingGET
 *
 * 首页 - 按考试级别统计考试数量
 *
 */
exports.getCountOrgExamNumber = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/count_org_level",
		swaggerId: "countByOrgLevelUsingGET"
	}, callback);
};
/** End countByOrgLevelUsingGET */



/** 
 * Created by removeUsingDELETE_1
 *
 * 根据学部ID删除学部数据 (郑强) #2017-03-01#
 *
 * @classPartId 	学部ID-String
 */
exports.removeDepartment = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-class-part/remove/"+data.classPartId,
		swaggerId: "removeUsingDELETE_1",
		form: {
			classPartId: data.classPartId
		}
	}, callback);
};
/** End removeUsingDELETE_1 */



/** 
 * Created by modifyByCreateUsingPOST
 *
 * 修改学区
 *
 * @examSchoolDistrict 	待修改的学区信息-Body
 */
exports.editRegion = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-district/modify",
		swaggerId: "modifyByCreateUsingPOST",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End modifyByCreateUsingPOST */



/** 
 * Created by findUsingGET_4
 *
 * 成绩分析设置 - 目标参照设置加载
 *
 * @examId 	考试ID-String
 */
exports.findUsingGET_4 = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-target-reference/find/"+data.examId,
		swaggerId: "findUsingGET_4",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End findUsingGET_4 */



/** 
 * Created by findLevelsUsingGET
 *
 * 根据考试试题查询与试题相关的能力层次列表数据 (郑强) #2017-03-01#
 *
 * @questionId 	试题ID-String
 */
exports.findLevelsUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_levels/"+data.questionId,
		swaggerId: "findLevelsUsingGET",
		form: {
			questionId: data.questionId
		}
	}, callback);
};
/** End findLevelsUsingGET */



/** 
 * Created by findUsingGET_5
 *
 * 成绩分析设置 - 根据考试查询单个踩线设置
 *
 * @examId 	考试ID-String
 */
exports.findUsingGET_5 = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-touched-line/find/"+data.examId,
		swaggerId: "findUsingGET_5",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End findUsingGET_5 */



/** 
 * Created by listSubjectPointsOfPhaseUsingGET
 *
 * 根据学科、学段查询知识点
 *
 * @subjectId 	云平台市级学科-String
 * @phase 	云平台学段-Number
 */
exports.listSubjectPointsOfPhaseUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_subject_points/"+data.subjectId+"/"+data.phase,
		swaggerId: "listSubjectPointsOfPhaseUsingGET",
		form: {
			subjectId: data.subjectId,
			phase: data.phase
		}
	}, callback);
};
/** End listSubjectPointsOfPhaseUsingGET */



/** 
 * Created by listInstructorsUsingGET
 *
 * 查询某学段所有教研员
 *
 * @phase 	云平台学段-Number
 */
exports.listInstructorsUsingGET = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_instructors/"+data.phase,
		swaggerId: "listInstructorsUsingGET",
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End listInstructorsUsingGET */


