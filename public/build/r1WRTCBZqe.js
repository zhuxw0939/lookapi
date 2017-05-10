/**!
 * 晓我成长成绩分析系统-swagger版 v1.0
 * 接口数量 162
 * http://192.168.60.98:3300/api/list?p_id=SklRa0r$qg&v_id=r1WRTCBZqe
 *
 * 2017-03-01 16:35:35 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../common/servers');



/** 
 * Created by Hy9$7xwtZ5l
 *
 * 小题得分分布情况
 *
 * @examId 	考试ID-String
 * @questionId 	题目ID-String
 */
exports.ghghjhj = function (data, callback) {
	if(data.examId==undefined || !/^[0-9]*$/.test(data.questionId)){
		return callback("参数错误");
	}
	servers.GET({
		url: "/api/v1/region-paper/find_question_statistical/"+data.examId+"-"+data.questionId,
		form: {
			examId: data.examId,
			questionId: data.questionId
		}
	}, callback);
};
/** End Hy9$7xwtZ5l */



/** 
 * Created by HyS$QgPFWqe
 *
 * 选择题选项人数列表
 *
 * @examId 	考试ID-String
 * @questionId 	题目ID-String
 */
exports.HyS$QgPFWqe = function (data, callback) {
	servers.GET({
		url: "/api/v1/region-paper/find_choice_question_students/"+data.examId+"-"+data.questionId,
		form: {
			examId: data.examId,
			questionId: data.questionId
		}
	}, callback);
};
/** End HyS$QgPFWqe */



/** 
 * Created by Hkx$QeDF$qx
 *
 * 学生成绩走势年级排名
 *
 * @studentIds 	对比学生Id-Body
 */
exports.Hkx$QeDF$qx = function (data, callback) {
	servers.GET({
		url: "/api/v1/student/find_student_grade_exam_trend/"+data.studentIds,
		body: data.body,
		form: {
		}
	}, callback);
};
/** End Hkx$QeDF$qx */



/** 
 * Created by SJsxQlwFZ9g
 *
 * 试卷选考题分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.SJsxQlwFZ9g = function (data, callback) {
	servers.POST({
		url: "/api/v1/region-paper/find_selection_question",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End SJsxQlwFZ9g */



/** 
 * Created by SJIxQxPF$qg
 *
 * 历次考试对比
 *
 * @param 	历次考试对比参数列表-Body * @pageableDto 	分页参数对象-Body
 */
exports.SJIxQxPF$qg = function (data, callback) {
	servers.POST({
		url: "/api/v1/exam-compare/find_exam_compare",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End SJIxQxPF$qg */



/** 
 * Created by ry$xXlvY$9e
 *
 * 特优生总数、比例统计
 *
 * @params 	查询参数-Body * @pageableDto 	分页对象ID-Body
 */
exports.ry$xXlvY$9e = function (data, callback) {
	servers.POST({
		url: "/api/v1/excellent/count_students",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ry$xXlvY$9e */



/** 
 * Created by r1ejMkgXcl
 *
 * TODO -- 根据某次考试的科目id获取能力层级数据池-zxw
 *
 */
exports.r1ejMkgXcl = function (data, callback) {
	servers.POST({
		url: "/todo/levelsOptions"
	}, callback);
};
/** End r1ejMkgXcl */



/** 
 * Created by r1DZQeDKb5e
 *
 * 做错学生列表
 *
 * @classId 	班级ID-String
 * @questionId 	问题ID-String
 */
exports.r1DZQeDKb5e = function (data, callback) {
	servers.GET({
		url: "/api/v1/paper/find_error_students/"+data.classId+"-"+data.questionId,
		form: {
			classId: data.classId,
			questionId: data.questionId
		}
	}, callback);
};
/** End r1DZQeDKb5e */



/** 
 * Created by SJMbQeDKb5x
 *
 * 兄弟学校有效扩优生对比
 *
 * @examId 	考试ID-String
 * @schoolId 	本校ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.SJMbQeDKb5x = function (data, callback) {
	servers.POST({
		url: "/api/v1/brother-school/find_extend_student",
		body: data.body,
		form: {
			examId: data.examId,
			schoolId: data.schoolId,
		}
	}, callback);
};
/** End SJMbQeDKb5x */



/** 
 * Created by SJal7lDF$9g
 *
 * 市级、区县踩线生列表
 *
 * @params 	查询参数-Body * @pageableDto 	分页对象ID-Body
 */
exports.SJal7lDF$9g = function (data, callback) {
	servers.POST({
		url: "/api/v1/touch-line/find_by_region",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End SJal7lDF$9g */



/** 
 * Created by rJul7gDYb5e
 *
 * 目标参照列表统计
 *
 * @examId 	考试ID-String
 * @artCategory 	文理分科-Number
 * @examCourseId 	考试科目ID-String
 */
exports.rJul7gDYb5e = function (data, callback) {
	servers.GET({
		url: "/api/v1/target/count_class_targets/"+data.examId+"-"+data.artCategory+"-"+data.examCourseId,
		form: {
			examId: data.examId,
			artCategory: data.artCategory,
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End rJul7gDYb5e */



/** 
 * Created by BJXgmgwtZ5e
 *
 * 学生考试成绩概况学生知识点得分率
 *
 * @examId 	考试Id-String
 * @studentId 	学生Id-String
 * @examCourseId 	科目Id-String
 * @pageableDto 	分页参数对象-Body
 */
exports.BJXgmgwtZ5e = function (data, callback) {
	servers.POST({
		url: "/api/v1/student/find_student_point_ratio",
		body: data.body,
		form: {
			examId: data.examId,
			studentId: data.studentId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End BJXgmgwtZ5e */



/** 
 * Created by HkC7gPYZce
 *
 * 踩线生列表查询
 *
 * @params 	查询参数-Body * @pageableDto 	分页对象ID-Body
 */
exports.HkC7gPYZce = function (data, callback) {
	servers.POST({
		url: "/api/v1/touch-line/find_students",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End HkC7gPYZce */



/** 
 * Created by HJK7gwFZ9g
 *
 * 踩线生统计
 *
 * @params 	查询参数-Body
 */
exports.HJK7gwFZ9g = function (data, callback) {
	servers.POST({
		url: "/api/v1/touch-line/count_students",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End HJK7gwFZ9g */



/** 
 * Created by HyF$7lPtb9e
 *
 * 试卷知识点分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classId 	班级ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.HyF$7lPtb9e = function (data, callback) {
	servers.POST({
		url: "/api/v1/paper/find_class_point",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classId: data.classId,
		}
	}, callback);
};
/** End HyF$7lPtb9e */



/** 
 * Created by ry4ZQlwtZ5e
 *
 * 班级-分数段分析
 *
 * @param 	班级-分数段分析参数列表-Body * @pageableDto 	分页参数对象-Body
 */
exports.ry4ZQlwtZ5e = function (data, callback) {
	servers.POST({
		url: "/api/v1/class/find_class_section",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ry4ZQlwtZ5e */



/** 
 * Created by Hy1$XlDY$ce
 *
 * 班级-成绩走势排名
 *
 * @schoolId 	学校ID-String
 * @classIds 	对比的班级列表，数组（1,2,3）-Body
 */
exports.Hy1$XlDY$ce = function (data, callback) {
	servers.GET({
		url: "/api/v1/class/find_class_exam_trend/"+data.classIds,
		body: data.body,
		form: {
			schoolId: data.schoolId,
		}
	}, callback);
};
/** End Hy1$XlDY$ce */



/** 
 * Created by SJce7ePYZ9g
 *
 * 班级-分数线分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classLevel 	班级层次-String
 * @pageableDto 	分页参数对象-Body
 */
exports.SJce7ePYZ9g = function (data, callback) {
	servers.POST({
		url: "/api/v1/class/find_class_score_line",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classLevel: data.classLevel,
		}
	}, callback);
};
/** End SJce7ePYZ9g */



/** 
 * Created by BJrgQgwt$qx
 *
 * 试卷知识点分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.BJrgQgwt$qx = function (data, callback) {
	servers.POST({
		url: "/api/v1/region-paper/find_region_point",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End BJrgQgwt$qx */



/** 
 * Created by SylgXlDtWqe
 *
 * 目标参照列表
 *
 * @examId 	考试ID-String
 * @artCategory 	文理分科-Number
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.SylgXlDtWqe = function (data, callback) {
	servers.POST({
		url: "/api/v1/target/find_class_targets",
		body: data.body,
		form: {
			examId: data.examId,
			artCategory: data.artCategory,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End SylgXlDtWqe */



/** 
 * Created by S1iXgvYbcg
 *
 * 学生考试成绩概况学生学科得分率分析
 *
 * @examId 	考试Id-String
 * @studentId 	学生Id-String
 */
exports.S1iXgvYbcg = function (data, callback) {
	servers.GET({
		url: "/api/v1/student/find_student_course_ratio",
		form: {
			examId: data.examId,
			studentId: data.studentId
		}
	}, callback);
};
/** End S1iXgvYbcg */



/** 
 * Created by rk87evFb5e
 *
 * 试卷选考题分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classId 	班级ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.rk87evFb5e = function (data, callback) {
	servers.POST({
		url: "/api/v1/paper/find_selection_question",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classId: data.classId,
		}
	}, callback);
};
/** End rk87evFb5e */



/** 
 * Created by ByxZxIxXqx
 *
 * TODO -- 根据某次考试的科目id获取知识点数据池-zxw
 *
 */
exports.ByxZxIxXqx = function (data, callback) {
	servers.POST({
		url: "/todo/getpointsOptions"
	}, callback);
};
/** End ByxZxIxXqx */



/** 
 * Created by S1d$XgwtWcx
 *
 * 学生分析
 *
 * @param 	学生分析参数列表-Body * @pageableDto 	分页参数对象-Body
 */
exports.S1d$XgwtWcx = function (data, callback) {
	servers.POST({
		url: "/api/v1/student/find_students",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End S1d$XgwtWcx */



/** 
 * Created by Sk7W7lwKZce
 *
 * 自定义报表列表-查看 - 参数不确定
 *
 */
exports.Sk7W7lwKZce = function (data, callback) {
	servers.POST({
		url: "/api/v1/report/find_report_view"
	}, callback);
};
/** End Sk7W7lwKZce */



/** 
 * Created by rkCxQePYbcx
 *
 * 学生成绩对比
 *
 * @examId 	学校ID-String
 * @studentIds 	对比学生Id-Body
 */
exports.rkCxQePYbcx = function (data, callback) {
	servers.GET({
		url: "/api/v1/student/find_student_compare/"+data.examId+"-"+data.studentIds,
		body: data.body,
		form: {
			examId: data.examId,
		}
	}, callback);
};
/** End rkCxQePYbcx */



/** 
 * Created by BJKeXlvt$cl
 *
 * 选择题选项人数列表
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classId 	班级ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.BJKeXlvt$cl = function (data, callback) {
	servers.POST({
		url: "/api/v1/paper/find_choice_question_students",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classId: data.classId,
		}
	}, callback);
};
/** End BJKeXlvt$cl */



/** 
 * Created by By4gQgvtZcx
 *
 * 市级、区县特优生列表
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.By4gQgvtZcx = function (data, callback) {
	servers.POST({
		url: "/api/v1/excellent/find_school_excellents",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End By4gQgvtZcx */



/** 
 * Created by BkyxmxPtW9l
 *
 * 学校-优生统计
 *
 * @pageableDto 	分页参数对象-Body * @examId 	考试ID-String
 * @analysisType 	分析类型; 0 :应届 1:往届 2:不分应往届-String
 * @schoolType 	学校分类（区县里面查询学校分数线时，使用这个字段） 如：A类学校，B类学校-String
 */
exports.BkyxmxPtW9l = function (data, callback) {
	servers.POST({
		url: "/api/v1/school/find_prominent",
		body: data.body,
		form: {
			examId: data.examId,
			analysisType: data.analysisType,
			schoolType: data.schoolType
		}
	}, callback);
};
/** End BkyxmxPtW9l */



/** 
 * Created by HksW7lPKZ5l
 *
 * 能力层次分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.findRegion = function (data, callback) {
	servers.POST({
		url: "/api/v1/region-paper/find_region_ability",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End HksW7lPKZ5l */



/** 
 * Created by BkIWmxPY$qe
 *
 * 市级、区县特优生列表
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.BkIWmxPY$qe = function (data, callback) {
	servers.POST({
		url: "/api/v1/excellent/find_region_excellents",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End BkIWmxPY$qe */



/** 
 * Created by S1$bmgvFW5g
 *
 * 试卷小题分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.S1$bmgvFW5g = function (data, callback) {
	servers.POST({
		url: "/api/v1/region-paper/find_class_question",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End S1$bmgvFW5g */



/** 
 * Created by HJhlXgDYbqx
 *
 * 任课教师分析
 *
 * @examId 	考试Id-String
 * @examCourseId 	科目Id-String
 * @schoolId 	学校Id-Body * @pageableDto 	分页参数对象-Body
 */
exports.HJhlXgDYbqx = function (data, callback) {
	servers.POST({
		url: "/api/v1/teacher/find_analysis_teachers",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End HJhlXgDYbqx */



/** 
 * Created by rJvemxPK$9l
 *
 * 学生考试成绩概况
 *
 * @examId 	考试Id-String
 * @studentId 	学生Id-String
 */
exports.rJvemxPK$9l = function (data, callback) {
	servers.GET({
		url: "/api/v1/student/find_student/"+data.examId+"-"+data.studentId,
		form: {
			examId: data.examId,
			studentId: data.studentId
		}
	}, callback);
};
/** End rJvemxPK$9l */



/** 
 * Created by HJfgQgPYZcx
 *
 * 试卷分卷分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.HJfgQgPYZcx = function (data, callback) {
	servers.POST({
		url: "/api/v1/region-paper/find_split_paper",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End HJfgQgPYZcx */



/** 
 * Created by Sy27gDtZce
 *
 * 学校-平均分分析
 *
 * @param 	平均分分析参数列表-Body * @pageableDto 	分页参数对象-Body
 */
exports.Sy27gDtZce = function (data, callback) {
	servers.POST({
		url: "/api/v1/school/find_average",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End Sy27gDtZce */



/** 
 * Created by ByDmxvK$5x
 *
 * 选择题答案分布分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classId 	班级ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.ByDmxvK$5x = function (data, callback) {
	servers.POST({
		url: "/api/v1/paper/find_choice_question",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classId: data.classId,
		}
	}, callback);
};
/** End ByDmxvK$5x */



/** 
 * Created by rJGXlwtZ9l
 *
 * 试卷小题分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classId 	班级ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.rJGXlwtZ9l = function (data, callback) {
	servers.POST({
		url: "/api/v1/paper/find_class_question",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classId: data.classId,
		}
	}, callback);
};
/** End rJGXlwtZ9l */



/** 
 * Created by r1zeMeDYZ9g
 *
 * 学生成绩走势班级排名
 *
 * @studentIds 	对比学生Id-Body
 */
exports.r1zeMeDYZ9g = function (data, callback) {
	servers.GET({
		url: "/api/v1/student/find_student_class_exam_trend/"+data.studentIds,
		body: data.body,
		form: {
		}
	}, callback);
};
/** End r1zeMeDYZ9g */



/** 
 * Created by SJazePtbcg
 *
 * 有效扩优生列表
 *
 * @examId 	考试ID-String
 * @schoolId 	本校ID-String
 * @scoreLineId 	分数线ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.SJazePtbcg = function (data, callback) {
	servers.POST({
		url: "/api/v1/brother-school/find_extend_students",
		body: data.body,
		form: {
			examId: data.examId,
			schoolId: data.schoolId,
			scoreLineId: data.scoreLineId,
		}
	}, callback);
};
/** End SJazePtbcg */



/** 
 * Created by SJsI$CLtWqe
 *
 * 查询近期考试列表
 *
 * @count 	返回记录数, 默认6-Number
 */
exports.SJsI$CLtWqe = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/list_recent/"+data.count,
		form: {
			count: data.count
		}
	}, callback);
};
/** End SJsI$CLtWqe */



/** 
 * Created by ryU8$RIY$5l
 *
 * 查询某学校某年级所有班级
 *
 * @schoolId 	学校id-Number
 * @gradeId 	市级年级ID-Number
 */
exports.ryU8$RIY$5l = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_classes/"+data.schoolId+"-"+data.gradeId,
		form: {
			schoolId: data.schoolId,
			gradeId: data.gradeId
		}
	}, callback);
};
/** End ryU8$RIY$5l */



/** 
 * Created by SJ$UWALYbcl
 *
 * 待编辑考试列表
 *
 * @count 	返回记录数-Number
 */
exports.SJ$UWALYbcl = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/list_to_edit/"+data.count,
		form: {
			count: data.count
		}
	}, callback);
};
/** End SJ$UWALYbcl */



/** 
 * Created by By3r$RIYbqe
 *
 * 列表，按考试试题顺序进行排序
 *
 * @courseId 	考试课程ID-String
 */
exports.By3r$RIYbqe = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_questions/"+data.courseId,
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End By3r$RIYbqe */



/** 
 * Created by BJPS$08Ybqg
 *
 * 上传双向细目表Excel数据
 *
 * @courseId 	考试课程ID-String
 * @file 	双向细目表上传文件（Excel数据）-
 */
exports.BJPS$08Ybqg = function (data, callback) {
	servers.POST({
		url: "/api/v1/question/import_data/"+data.courseId,
		form: {
			courseId: data.courseId,
			file: data.file
		}
	}, callback);
};
/** End BJPS$08Ybqg */



/** 
 * Created by HkzBWRLKW5g
 *
 * 单个对象
 *
 */
exports.HkzBWRLKW5g = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-ratio-rule/find_school_ratio_rule"
	}, callback);
};
/** End HkzBWRLKW5g */



/** 
 * Created by Syp4Z08FWcl
 *
 * 保存考试的计算规则
 *
 * @calculateRulesList 	考试计算规则列表数据-Body
 */
exports.Syp4Z08FWcl = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-calculate-rule/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End Syp4Z08FWcl */



/** 
 * Created by BJdE$C8YZcl
 *
 * 单个对象
 *
 * @classLevelId 	班级层次ID-String
 */
exports.BJdE$C8YZcl = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-class-level/find/"+data.classLevelId,
		form: {
			classLevelId: data.classLevelId
		}
	}, callback);
};
/** End BJdE$C8YZcl */



/** 
 * Created by HJmE$RIKZqg
 *
 * 查询当前租户所有区县
 *
 */
exports.HJmE$RIKZqg = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_regions"
	}, callback);
};
/** End HJmE$RIKZqg */



/** 
 * Created by BkRXWR8FZqe
 *
 * 列表数据
 *
 * @splitId 	分卷ID-String
 */
exports.BkRXWR8FZqe = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-paper-split/show/"+data.splitId,
		form: {
			splitId: data.splitId
		}
	}, callback);
};
/** End BkRXWR8FZqe */



/** 
 * Created by S1KXb0UF$qx
 *
 * 列表数据
 *
 * @examId 	考试ID-String
 */
exports.S1KXb0UF$qx = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-calculate-rule/list/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End S1KXb0UF$qx */



/** 
 * Created by BkV7WCUY$9x
 *
 * 撤销考试发布
 *
 * @examId 	考试ID-String
 */
exports.BkV7WCUY$9x = function (data, callback) {
	servers.POST({
		url: "/api/v1/query/un_publish/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End BkV7WCUY$9x */



/** 
 * Created by r1yQ$ALt$cg
 *
 * 单个对象
 *
 * @classPartId 	学部ID-String
 */
exports.r1yQ$ALt$cg = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-class-part/find/"+data.classPartId,
		form: {
			classPartId: data.classPartId
		}
	}, callback);
};
/** End r1yQ$ALt$cg */



/** 
 * Created by rJ9zbALFZ5g
 *
 * 根据条件查询考试列表，会根据用户当前选择角色返回对应的数据
 *
 * @queryPageDTO 	queryPageDTO-Body * @examQueryPageDTO 	分页查询对象-Body
 */
exports.rJ9zbALFZ5g = function (data, callback) {
	servers.POST({
		url: "/api/v1/query/page",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End rJ9zbALFZ5g */



/** 
 * Created by H1rfbALYb9x
 *
 * 修改学部设置
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.H1rfbALYb9x = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-part/modify",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End H1rfbALYb9x */



/** 
 * Created by SklGWRLYb5l
 *
 * 查询当前区县参数学段范围内学校列表，并且一个学校会按学段拆分成多个
 *
 * @phases 	将要查询的多个学段，不传值时查询所有学段-
 */
exports.SklGWRLYb5l = function (data, callback) {
	servers.POST({
		url: "/api/v1/town/list_schools_pinyin",
		form: {
			phases: data.phases
		}
	}, callback);
};
/** End SklGWRLYb5l */



/** 
 * Created by rki$$RUKW9e
 *
 * 下载分数线Excel导入模板,返回下载地址URI
 *
 */
exports.rki$$RUKW9e = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-score-line/download_template"
	}, callback);
};
/** End rki$$RUKW9e */



/** 
 * Created by HyUW$0UKW5g
 *
 * 特优生筛选线设置
 *
 * @examId 	考试ID-String
 * @rank 	名次-Number
 */
exports.HyUW$0UKW5g = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-excellent/create",
		form: {
			examId: data.examId,
			rank: data.rank
		}
	}, callback);
};
/** End HyUW$0UKW5g */



/** 
 * Created by rJWZb0ItW9e
 *
 * 新建学区
 *
 * @examSchoolDistrict 	待新建学区信息-Body
 */
exports.rJWZb0ItW9e = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-district/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End rJWZb0ItW9e */



/** 
 * Created by S13gZRUY$5g
 *
 * 查看准考证导入情况 - 下载未在基础数据找到数据，返回文件下载URI
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.S13gZRUY$5g = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/download_not_found/"+data.importId,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End S13gZRUY$5g */



/** 
 * Created by ryPxWCLYbqx
 *
 * 列表数据
 *
 * @examId 	考试ID-String
 * @lineType 	分数线类型-Number
 */
exports.ryPxWCLYbqx = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-score-line/list/{examId}/"+data.lineType,
		form: {
			examId: data.examId,
			lineType: data.lineType
		}
	}, callback);
};
/** End ryPxWCLYbqx */



/** 
 * Created by B14XewFWcx
 *
 * 学校-分数线分析
 *
 * @param 	分数线分析参数列表-Body * @pageableDto 	分页参数对象-Body
 */
exports.B14XewFWcx = function (data, callback) {
	servers.POST({
		url: "/api/v1/school/find_score_line",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End B14XewFWcx */



/** 
 * Created by S1QlPYb5e
 *
 * 能力层次分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classId 	班级ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.S1QlPYb5e = function (data, callback) {
	servers.POST({
		url: "/api/v1/paper/find_class_ability",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classId: data.classId,
		}
	}, callback);
};
/** End S1QlPYb5e */



/** 
 * Created by ByklMlDt$qg
 *
 * 兄弟学校平均分对比
 *
 * @examId 	考试ID-String
 * @schoolId 	本校ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.ByklMlDt$qg = function (data, callback) {
	servers.POST({
		url: "/api/v1/brother-school/find_average",
		body: data.body,
		form: {
			examId: data.examId,
			schoolId: data.schoolId,
		}
	}, callback);
};
/** End ByklMlDt$qg */



/** 
 * Created by SJaU$C8tWcg
 *
 * 删除学区
 *
 * @id 	学区ID-String
 */
exports.SJaU$C8tWcg = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/school-district/remove/"+data.id,
		form: {
			id: data.id
		}
	}, callback);
};
/** End SJaU$C8tWcg */



/** 
 * Created by ByuUWAUY$5e
 *
 * 导入成绩，返回Boolean值为异步加入队列的状态
 *
 * @examCourseId 	考试科目ID-String
 * @file 	成绩Excel文件-
 */
exports.ByuUWAUY$5e = function (data, callback) {
	servers.POST({
		url: "/api/v1/score-import/import_data/",
		form: {
			examCourseId: data.examCourseId,
			file: data.file
		}
	}, callback);
};
/** End ByuUWAUY$5e */



/** 
 * Created by HymLZC8tb5e
 *
 * 查询当前租户所有市级年级
 *
 */
exports.HymLZC8tb5e = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_grades"
	}, callback);
};
/** End HymLZC8tb5e */



/** 
 * Created by rk0H$RUK$qg
 *
 * 列表，按考试试题顺序进行排序
 *
 * @courseId 	考试课程ID-String
 */
exports.rk0H$RUK$qg = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_by_course/v2/"+data.courseId,
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End rk0H$RUK$qg */



/** 
 * Created by ByKSZAItb9x
 *
 * 模版下载，返回模版文件URI
 *
 */
exports.ByKSZAItb9x = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/download_template"
	}, callback);
};
/** End ByKSZAItb9x */



/** 
 * Created by rkVrZALtb5l
 *
 * 根据学科查询知识点
 *
 * @subjectId 	云平台市级学科-Number
 */
exports.rkVrZALtb5l = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_subject_points/"+data.subjectId,
		form: {
			subjectId: data.subjectId
		}
	}, callback);
};
/** End rkVrZALtb5l */



/** 
 * Created by HkyHWA8FW5g
 *
 * 修改乡镇
 *
 * @examTown 	待修改的乡镇信息-Body
 */
exports.HkyHWA8FW5g = function (data, callback) {
	servers.POST({
		url: "/api/v1/town/modify",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End HkyHWA8FW5g */



/** 
 * Created by H15VbA8KZ9x
 *
 * 查询导入成功的学生成绩列表
 *
 * @pageableDto 	分页参数对象-Body * @importId 	成绩导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.H15VbA8KZ9x = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/list_success",
		body: data.body,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End H15VbA8KZ9x */



/** 
 * Created by r1BNWRIKWcg
 *
 * 保存前会删除原有的数据，所以前台需要传递全部数据
 *
 * @scoreLineList 	分数线列表数据-Body * @examId 	考试ID-String
 */
exports.r1BNWRIKWcg = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-score-line/save/"+data.examId,
		body: data.body,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End r1BNWRIKWcg */



/** 
 * Created by B1lNZ0UFZ5g
 *
 * 删除学校超越率显示设置
 *
 * @ratioRuleId 	学校超越率显示设置ID-String
 */
exports.B1lNZ0UFZ5g = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-ratio-rule/remove/"+data.ratioRuleId,
		form: {
			ratioRuleId: data.ratioRuleId
		}
	}, callback);
};
/** End B1lNZ0UFZ5g */



/** 
 * Created by BksQ$R8Y$9l
 *
 * 发布成绩，会先检查是否计算完成
 *
 * @examId 	考试ID-String
 */
exports.BksQ$R8Y$9l = function (data, callback) {
	servers.POST({
		url: "/api/v1/query/publish/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End BksQ$R8Y$9l */



/** 
 * Created by SJIX$C8Y$5g
 *
 * 删除学校分类
 *
 * @id 	学校分类ID-String
 */
exports.SJIX$C8Y$5g = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/school-group/remove/"+data.id,
		form: {
			id: data.id
		}
	}, callback);
};
/** End SJIX$C8Y$5g */



/** 
 * Created by rkZ7WCUKbce
 *
 * 根据学部ID删除学部数据
 *
 * @classPartId 	学部ID-String
 */
exports.rkZ7WCUKbce = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-class-part/remove/"+data.classPartId,
		form: {
			classPartId: data.classPartId
		}
	}, callback);
};
/** End rkZ7WCUKbce */



/** 
 * Created by SJ3fZAUY$5g
 *
 * 下载一个课程的双向细目表Excel数据
 *
 * @courseId 	考试课程ID-String
 */
exports.SJ3fZAUY$5g = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/export/"+data.courseId,
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End SJ3fZAUY$5g */



/** 
 * Created by rJPzWR8KWql
 *
 * 按学期统计考试数量
 *
 * @startDate 	学期开始时间戳-Number
 * @endDate 	学期结束时间戳-Number
 */
exports.getIndexExamCounts = function (data, callback) {
	servers.POST({
		url: "/api/v1/index/count_semester",
		form: {
			startDate: data.startDate,
			endDate: data.endDate
		}
	}, callback);
};
/** End rJPzWR8KWql */



/** 
 * Created by SkGzZRItWcg
 *
 * 查询当前区县学校分类列表
 *
 */
exports.SkGzZRItWcg = function (data, callback) {
	servers.GET({
		url: "/api/v1/school-group/list"
	}, callback);
};
/** End SkGzZRItWcg */



/** 
 * Created by rk6$ZCUtWce
 *
 * 根据学科、学段查询知识点
 *
 * @subjectId 	云平台市级学科-Number
 * @phase 	云平台学段-Number
 */
exports.rk6$ZCUtWce = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_subject_points/{subjectId}/"+data.phase,
		form: {
			subjectId: data.subjectId,
			phase: data.phase
		}
	}, callback);
};
/** End rk6$ZCUtWce */



/** 
 * Created by rkuW$CLKZ5x
 *
 * 根据分卷的ID进行分卷信息删除操作
 *
 * @splitId 	分卷ID-String
 */
exports.rkuW$CLKZ5x = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-paper-split/remove/"+data.splitId,
		form: {
			splitId: data.splitId
		}
	}, callback);
};
/** End rkuW$CLKZ5x */



/** 
 * Created by r1mZZCLtZ9e
 *
 * 添加兄弟学校
 *
 * @schoolId 	当前学校ID-Number
 */
exports.r1mZZCLtZ9e = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-brother-school/find/"+data.schoolId,
		form: {
			schoolId: data.schoolId
		}
	}, callback);
};
/** End r1mZZCLtZ9e */



/** 
 * Created by S1RxZCLFZ5e
 *
 * 保存学校超越率显示设置
 *
 * @examHideRatioRule 	学校超越率显示设置-Body
 */
exports.S1RxZCLFZ5e = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-ratio-rule/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End S1RxZCLFZ5e */



/** 
 * Created by r1tgZA8Fbce
 *
 * 根据考试查询此次考试的考试科目数据
 *
 * @examId 	试题ID-String
 */
exports.r1tgZA8Fbce = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_courses/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End r1tgZA8Fbce */



/** 
 * Created by SJ4lW08KW9g
 *
 * 查询当前租户某学段所有教研员，教研员角色代码通过其他方式获取
 *
 * @phase 	云平台学段-Number
 */
exports.SJ4lW08KW9g = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_instructors/"+data.phase,
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End SJ4lW08KW9g */



/** 
 * Created by By5mxDFb5x
 *
 * 班级-平均分分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classLevel 	班级层次-String
 * @pageableDto 	分页参数对象-Body
 */
exports.By5mxDFb5x = function (data, callback) {
	servers.POST({
		url: "/api/v1/class/find_class_average",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classLevel: data.classLevel,
		}
	}, callback);
};
/** End By5mxDFb5x */



/** 
 * Created by SyHQgPKbcx
 *
 * 学生考试成绩概况学生小题得分率分析
 *
 * @examId 	考试Id-String
 * @studentId 	学生Id-String
 * @examCourseId 	科目Id-String
 * @pageableDto 	分页参数对象-Body
 */
exports.SyHQgPKbcx = function (data, callback) {
	servers.POST({
		url: "/api/v1/student/find_student_question_ratio",
		body: data.body,
		form: {
			examId: data.examId,
			studentId: data.studentId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End SyHQgPKbcx */



/** 
 * Created by ryg7xwKZ9x
 *
 * 试卷分卷分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classId 	班级ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.ryg7xwKZ9x = function (data, callback) {
	servers.POST({
		url: "/api/v1/paper/find_split_paper",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classId: data.classId,
		}
	}, callback);
};
/** End ryg7xwKZ9x */



/** 
 * Created by BygxMxwKZ5e
 *
 * 学生考试成绩概况学生全市、校、班排名
 *
 * @examId 	考试Id-String
 * @studentId 	学生Id-String
 */
exports.BygxMxwKZ5e = function (data, callback) {
	servers.GET({
		url: "/api/v1/student/find_student_rank",
		form: {
			examId: data.examId,
			studentId: data.studentId
		}
	}, callback);
};
/** End BygxMxwKZ5e */



/** 
 * Created by rJRIZRUYWqx
 *
 * 查看准考证导入情况 - 成功导入名单数据加载
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.rJRIZRUYWqx = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/list",
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End rJRIZRUYWqx */



/** 
 * Created by SkY8bC8t$5g
 *
 * 查询当前区县某学段所有学校
 *
 * @phase 	云平台学段-Number
 */
exports.SkY8bC8t$5g = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_region_schools/"+data.phase,
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End SkY8bC8t$5g */



/** 
 * Created by B1V8ZALtZ9x
 *
 * 根据考试试题查询与试题相关的知识点列表数据
 *
 * @questionId 	试题ID-String
 */
exports.B1V8ZALtZ9x = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_points/"+data.questionId,
		form: {
			questionId: data.questionId
		}
	}, callback);
};
/** End B1V8ZALtZ9x */



/** 
 * Created by rkkIWC8t$qe
 *
 * 查询导入失败的学生列表
 *
 * @pageableDto 	分页参数对象-Body * @importId 	成绩导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.rkkIWC8t$qe = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/list_fail",
		body: data.body,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End rkkIWC8t$qe */



/** 
 * Created by HkqrWRLKbqg
 *
 * 根据班级层次ID删除班级层次数据
 *
 * @classLevelId 	根据班级层次ID-String
 */
exports.HkqrWRLKbqg = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-class-level/remove/"+data.classLevelId,
		form: {
			classLevelId: data.classLevelId
		}
	}, callback);
};
/** End HkqrWRLKbqg */



/** 
 * Created by r1Hr$R8K$ce
 *
 * 列表，按考试试题顺序进行排序
 *
 * @courseId 	考试课程ID-String
 */
exports.r1Hr$R8K$ce = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_by_course/v1/"+data.courseId,
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End r1Hr$R8K$ce */



/** 
 * Created by r1lHWRIFb9x
 *
 * 根据考试试题查询与试题相关的能力层次列表数据
 *
 * @questionId 	试题ID-String
 */
exports.r1lHWRIFb9x = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_levels/"+data.questionId,
		form: {
			questionId: data.questionId
		}
	}, callback);
};
/** End r1lHWRIFb9x */



/** 
 * Created by r1iVWRItZ9l
 *
 * 分页查询
 *
 * @pageableDto 	分页参数对象-Body
 */
exports.r1iVWRItZ9l = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-part/page",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End r1iVWRItZ9l */



/** 
 * Created by HJLEWRIYb5e
 *
 * 查询当前区县乡镇列表
 *
 */
exports.HJLEWRIYb5e = function (data, callback) {
	servers.GET({
		url: "/api/v1/town/list"
	}, callback);
};
/** End HJLEWRIYb5e */



/** 
 * Created by BJWNbCUtZ9x
 *
 * 保存双向细目表列表数据,保存前会根据课程ID清除原有数据
 *
 * @questionDetailList 	双向细目表列表数据-Body * @courseId 	科目ID-String
 */
exports.BJWNbCUtZ9x = function (data, callback) {
	servers.POST({
		url: "/api/v1/question/save/"+data.courseId,
		body: data.body,
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End BJWNbCUtZ9x */



/** 
 * Created by ry3Q$AIKZqg
 *
 * 查询当前租户某学段所有学校
 *
 * @phase 	云平台学段-Number
 */
exports.ry3Q$AIKZqg = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_schools/"+data.phase,
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End ry3Q$AIKZqg */



/** 
 * Created by rkvm$08tW5x
 *
 * 目标参照模版下载
 *
 */
exports.rkvm$08tW5x = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-target-reference/download_template"
	}, callback);
};
/** End rkvm$08tW5x */



/** 
 * Created by HyMXZRUYb9x
 *
 * 查询当前租户所有学期
 *
 */
exports.HyMXZRUYb9x = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_terms"
	}, callback);
};
/** End HyMXZRUYb9x */



/** 
 * Created by ByaGW0IF$cl
 *
 * 查看准考证导入情况 - 下载未更新准考证数据, 返回文件下载URI
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.ByaGW0IF$cl = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/download_update/"+data.importId,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End ByaGW0IF$cl */



/** 
 * Created by Sy_GbC8F$ce
 *
 * 查询能力层次
 *
 * @subjectId 	云平台市级学科-Number
 */
exports.Sy_GbC8F$ce = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_subject_levels/"+data.subjectId,
		form: {
			subjectId: data.subjectId
		}
	}, callback);
};
/** End Sy_GbC8F$ce */



/** 
 * Created by By7G$RItW9l
 *
 * 保存分卷设置
 *
 * @paperSplitDetail 	考试计算规则列表数据-Body
 */
exports.By7G$RItW9l = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-paper-split/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End By7G$RItW9l */



/** 
 * Created by ry0$bR8Fb9g
 *
 * 修改班级层次设置
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.ry0$bR8Fb9g = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-level/modify",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ry0$bR8Fb9g */



/** 
 * Created by ryFbWAIF$ql
 *
 * 目标参照Excel上传，返回Boolean值为异步加入队列的状态
 *
 * @examId 	考试ID-String
 * @file 	文件form-data数据流-
 */
exports.ryFbWAIF$ql = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-target-reference/import_data",
		form: {
			examId: data.examId,
			file: data.file
		}
	}, callback);
};
/** End ryFbWAIF$ql */



/** 
 * Created by Hk4$bA8Fb5x
 *
 * 查询一个考试科目详情
 *
 * @examCourseId 	考试科目mongo-ID-String
 */
exports.Hk4$bA8Fb5x = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/get_course/"+data.examCourseId,
		form: {
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End Hk4$bA8Fb5x */



/** 
 * Created by SkkZbRUYW5g
 *
 * 上传分数线Excel数据
 *
 * @examId 	考试ID-String
 * @file 	分数线上传文件（Excel数据）-
 */
exports.SkkZbRUYW5g = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-score-line/import_data/"+data.examId,
		form: {
			examId: data.examId,
			file: data.file
		}
	}, callback);
};
/** End SkkZbRUYW5g */



/** 
 * Created by r19g$AUtW5l
 *
 * 保存班级层次设置
 *
 * @classGroupList 	班级层次设置数据-Body
 */
exports.r19g$AUtW5l = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-level/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End r19g$AUtW5l */



/** 
 * Created by rJBlbC8Y$5x
 *
 * 踩线生筛选线设置
 *
 * @examId 	考试ID-String
 * @touchedLineListDTOs 	分数线设置数据集合-Body
 */
exports.rJBlbC8Y$5x = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-touched-line/create/"+data.examId,
		body: data.body,
		form: {
			examId: data.examId,
		}
	}, callback);
};
/** End rJBlbC8Y$5x */



/** 
 * Created by HJTXxDtW5e
 *
 * 试卷主客观分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @classId 	班级ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.HJTXxDtW5e = function (data, callback) {
	servers.POST({
		url: "/api/v1/paper/find_class_subjectivism",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
			classId: data.classId,
		}
	}, callback);
};
/** End HJTXxDtW5e */



/** 
 * Created by HyXXgwYZce
 *
 * 学校-分数段分析
 *
 * @param 	分数段分析参数列表-Body * @pageableDto 	分页参数对象-Body
 */
exports.HyXXgwYZce = function (data, callback) {
	servers.POST({
		url: "/api/v1/school/find_section",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End HyXXgwYZce */



/** 
 * Created by SkXgfxDF$9g
 *
 * 班级-对比成绩分析
 *
 * @examId 	考试ID-String
 * @classIds 	对比的班级列表，数组（1,2,3）-Body
 */
exports.SkXgfxDF$9g = function (data, callback) {
	servers.GET({
		url: "/api/v1/class/find_class_compare/"+data.examId+"-"+data.classIds,
		body: data.body,
		form: {
			examId: data.examId,
		}
	}, callback);
};
/** End SkXgfxDF$9g */



/** 
 * Created by SyAflvFZql
 *
 * 特优生列表查询
 *
 * @params 	查询参数-Body * @pageableDto 	分页对象ID-Body
 */
exports.SyAflvFZql = function (data, callback) {
	servers.POST({
		url: "/api/v1/excellent/find_students",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End SyAflvFZql */



/** 
 * Created by r128$0IYZ9e
 *
 * 新建学校分类
 *
 * @examSchoolGroup 	待新建学校分类信息-Body
 */
exports.r128$0IYZ9e = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-group/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End r128$0IYZ9e */



/** 
 * Created by HyvIZCLKZ9g
 *
 * 查询成绩计算是否完成
 *
 * @examId 	考试ID-String
 */
exports.HyvIZCLKZ9g = function (data, callback) {
	servers.GET({
		url: "/api/v1/query/is_calculate_over/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End HyvIZCLKZ9g */



/** 
 * Created by rk_mxPFW5x
 *
 * 兄弟学校分数线对比
 *
 * @examId 	考试ID-String
 * @schoolId 	本校ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.rk_mxPFW5x = function (data, callback) {
	servers.POST({
		url: "/api/v1/brother-school/find_score_line",
		body: data.body,
		form: {
			examId: data.examId,
			schoolId: data.schoolId,
		}
	}, callback);
};
/** End rk_mxPFW5x */



/** 
 * Created by ByzL$R8FZ5l
 *
 * 特优生筛选线查询
 *
 * @examId 	考试ID-String
 */
exports.ByzL$R8FZ5l = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-excellent/show/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End ByzL$R8FZ5l */



/** 
 * Created by HkuBWRIY$ce
 *
 * 查询当前区县参数学段范围内学校列表，并且一个学校会按学段拆分成多个
 *
 * @phases 	将要查询的多个学段，不传值时查询所有学段-
 */
exports.HkuBWRIY$ce = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-district/list_schools_pinyin",
		form: {
			phases: data.phases
		}
	}, callback);
};
/** End HkuBWRIY$ce */



/** 
 * Created by S1ar$C8Y$9g
 *
 * 添加兄弟学校
 *
 * @brotherSchoolDTOs 	兄弟学校集合-Body
 */
exports.S1ar$C8Y$9g = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-brother-school/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End S1ar$C8Y$9g */



/** 
 * Created by ryQH$0It$5x
 *
 * 最近一次考试分数线人数、比例对比
 *
 */
exports.ryQH$0It$5x = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/analysis_recent_score_line"
	}, callback);
};
/** End ryQH$0It$5x */



/** 
 * Created by rkAVb0LY$5x
 *
 * 查询某次考试的所有参考班级
 *
 * @examId 	考试ID-String
 */
exports.rkAVb0LY$5x = function (data, callback) {
	servers.GET({
		url: "/api/v1/query/list_classes/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End rkAVb0LY$5x */



/** 
 * Created by rJYEZ08Y$ce
 *
 * 按考试级别统计考试数量
 *
 */
exports.rJYEZ08Y$ce = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/count_org_level"
	}, callback);
};
/** End rJYEZ08Y$ce */



/** 
 * Created by ByNNW0LKW9l
 *
 * 查看准考证导入情况 - 未在基础数据找到数据加载
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.ByNNW0LKW9l = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/list_not_found/"+data.importId,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End ByNNW0LKW9l */



/** 
 * Created by BJkNb08Kbqg
 *
 * 查询当前租户某学段所有科目
 *
 * @phase 	云平台学段-Number
 */
exports.BJkNb08Kbqg = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_courses/"+data.phase,
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End BJkNb08Kbqg */



/** 
 * Created by BJ9XWC8K$qg
 *
 * 查询当前区县参数学段范围内学校列表，并且一个学校会按学段拆分成多个
 *
 * @phases 	将要查询的多个学段，不传值时查询所有学段-
 */
exports.BJ9XWC8K$qg = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-group/list_schools_pinyin",
		form: {
			phases: data.phases
		}
	}, callback);
};
/** End BJ9XWC8K$qg */



/** 
 * Created by r1H7$RLKWql
 *
 * 目标参照设置创建
 *
 * @examId 	考试ID-String
 */
exports.r1H7$RLKWql = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-target-reference/create",
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End r1H7$RLKWql */



/** 
 * Created by BklmZ08YZ5x
 *
 * 查询当前租户某个区县某学段所有学校
 *
 * @phase 	云平台学段-Number
 * @regionOrgId 	云平台区县ID-Number
 */
exports.BklmZ08YZ5x = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_schools/"+data.phase+"-"+data.regionOrgId,
		form: {
			phase: data.phase,
			regionOrgId: data.regionOrgId
		}
	}, callback);
};
/** End BklmZ08YZ5x */



/** 
 * Created by S1jGZAIY$9x
 *
 * 删除乡镇
 *
 * @id 	乡镇ID-String
 */
exports.S1jGZAIY$9x = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/town/remove/"+data.id,
		form: {
			id: data.id
		}
	}, callback);
};
/** End S1jGZAIY$9x */



/** 
 * Created by SJLMbR8Kb5l
 *
 * 根据学科、学段查询能力层次
 *
 * @subjectId 	云平台市级学科-Number
 * @phase 	云平台学段-Number
 */
exports.SJLMbR8Kb5l = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_subject_levels/{subjectId}/"+data.phase,
		form: {
			subjectId: data.subjectId,
			phase: data.phase
		}
	}, callback);
};
/** End SJLMbR8Kb5l */



/** 
 * Created by HyZMb08Kbcl
 *
 * 单个数据
 *
 * @examId 	考试ID-String
 * @ruleType 	规则类型-String
 */
exports.HyZMb08Kbcl = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-calculate-rule/show/"+data.examId+"-"+data.ruleType,
		form: {
			examId: data.examId,
			ruleType: data.ruleType
		}
	}, callback);
};
/** End HyZMb08Kbcl */



/** 
 * Created by r12ZbCLKb9l
 *
 * 查询某次考试的所有科目
 *
 * @examId 	考试ID-String
 */
exports.r12ZbCLKb9l = function (data, callback) {
	servers.GET({
		url: "/api/v1/query/list_courses/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End r12ZbCLKb9l */



/** 
 * Created by ByP$Z0Lt$qe
 *
 * 修改学区
 *
 * @examSchoolDistrict 	待修改的学区信息-Body
 */
exports.ByP$Z0Lt$qe = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-district/modify",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ByP$Z0Lt$qe */



/** 
 * Created by rkGZb08tW5e
 *
 * 根据分数线的ID进行分数线删除操作
 *
 * @scoreLineId 	分数线的ID-String
 */
exports.rkGZb08tW5e = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/setting-score-line/remove/"+data.scoreLineId,
		form: {
			scoreLineId: data.scoreLineId
		}
	}, callback);
};
/** End rkGZb08tW5e */



/** 
 * Created by Hypg$RItZ9l
 *
 * 新建乡镇
 *
 * @examTown 	待新建的乡镇信息-Body
 */
exports.Hypg$RItZ9l = function (data, callback) {
	servers.POST({
		url: "/api/v1/town/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End Hypg$RItZ9l */



/** 
 * Created by rJOlbCLKZqe
 *
 * 保存学部设置
 *
 * @classGroupList 	学部设置数据-Body
 */
exports.rJOlbCLKZqe = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-part/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End rJOlbCLKZqe */



/** 
 * Created by HJZXlwtW5g
 *
 * 选择题答案分布分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.HJZXlwtW5g = function (data, callback) {
	servers.POST({
		url: "/api/v1/region-paper/find_choice_question",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End HJZXlwtW5g */



/** 
 * Created by rJZgMgPKWqg
 *
 * 自定义报表列表 - 参数不确定
 *
 * @pageableDto 	分页参数对象-Body
 */
exports.rJZgMgPKWqg = function (data, callback) {
	servers.POST({
		url: "/api/v1/report/find_reports",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End rJZgMgPKWqg */



/** 
 * Created by S12GxPY$cl
 *
 * 试卷主观题分析
 *
 * @examId 	考试ID-String
 * @examCourseId 	考试科目ID-String
 * @pageableDto 	分页对象ID-Body
 */
exports.S12GxPY$cl = function (data, callback) {
	servers.POST({
		url: "/api/v1/region-paper/find_class_subjectivism",
		body: data.body,
		form: {
			examId: data.examId,
			examCourseId: data.examCourseId,
		}
	}, callback);
};
/** End S12GxPY$cl */



/** 
 * Created by Hk5L$CUYbce
 *
 * 目标参照设置加载
 *
 * @examId 	考试ID-String
 */
exports.Hk5L$CUYbce = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-target-reference/find/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End Hk5L$CUYbce */



/** 
 * Created by SJgIWALKbqx
 *
 * 查询某次考试的所有参考学校
 *
 * @examId 	考试ID-String
 */
exports.SJgIWALKbqx = function (data, callback) {
	servers.GET({
		url: "/api/v1/query/list_schools/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End SJgIWALKbqx */



/** 
 * Created by SyLSbRUKZ9e
 *
 * list对象
 *
 */
exports.SyLSbRUKZ9e = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-class-part/find_all"
	}, callback);
};
/** End SyLSbRUKZ9e */



/** 
 * Created by HJrU$AItWqe
 *
 * 列表数据
 *
 * @courseId 	科目ID-String
 */
exports.HJrU$AItWqe = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-paper-split/list/"+data.courseId,
		form: {
			courseId: data.courseId
		}
	}, callback);
};
/** End HJrU$AItWqe */



/** 
 * Created by HkbHbCIYZqg
 *
 * 查询导入成功的学生成绩列表的表头
 *
 * @importId 	成绩导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.HkbHbCIYZqg = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/list_header/"+data.importId,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End HkbHbCIYZqg */



/** 
 * Created by r1oSZR8F$5e
 *
 * 下载双向细目表Excel导入模板
 *
 */
exports.r1oSZR8F$5e = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/download_template"
	}, callback);
};
/** End r1oSZR8F$5e */



/** 
 * Created by HyhVbAIFZ9x
 *
 * 下载未导入成绩的人员名单, 返回文件下载地址
 *
 * @importId 	成绩导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.HyhVbAIFZ9x = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/download_fail/"+data.importId,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End HyhVbAIFZ9x */



/** 
 * Created by ByPVb08tZ9e
 *
 * 查询当前区县学区列表
 *
 */
exports.ByPVb08tZ9e = function (data, callback) {
	servers.GET({
		url: "/api/v1/school-district/list"
	}, callback);
};
/** End ByPVb08tZ9e */



/** 
 * Created by HyG4ZAIKW9g
 *
 * 保存双向细目表列表数据
 *
 * @questionDetailList 	双向细目表列表数据-Body
 */
exports.HyG4ZAIKW9g = function (data, callback) {
	servers.POST({
		url: "/api/v1/question/save",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End HyG4ZAIKW9g */



/** 
 * Created by r1Om$ALt$9e
 *
 * 根据考试查询单个踩线设置
 *
 * @examId 	考试ID-String
 */
exports.r1Om$ALt$9e = function (data, callback) {
	servers.GET({
		url: "/api/v1/setting-touched-line/find/"+data.examId,
		form: {
			examId: data.examId
		}
	}, callback);
};
/** End r1Om$ALt$9e */



/** 
 * Created by BJQQWCIF$9g
 *
 * 根据考试试题的ID进行考试试题删除操作
 *
 * @questionId 	试题ID-String
 */
exports.BJQQWCIF$9g = function (data, callback) {
	servers.DELETE({
		url: "/api/v1/question/remove/"+data.questionId,
		form: {
			questionId: data.questionId
		}
	}, callback);
};
/** End BJQQWCIF$9g */



/** 
 * Created by ryCM$AIF$qg
 *
 * 分页查询
 *
 * @pageableDto 	分页参数对象-Body
 */
exports.ryCM$AIF$qg = function (data, callback) {
	servers.POST({
		url: "/api/v1/setting-class-level/page",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End ryCM$AIF$qg */



/** 
 * Created by H1KMbA8Y$5l
 *
 * 准考证Excel上传，返回Boolean值为异步加入队列的状态
 *
 * @examId 	考试ID-String
 * @file 	文件form-data数据流-
 */
exports.H1KMbA8Y$5l = function (data, callback) {
	servers.POST({
		url: "/api/v1/ticket/import_data",
		form: {
			examId: data.examId,
			file: data.file
		}
	}, callback);
};
/** End H1KMbA8Y$5l */



/** 
 * Created by HyqZWALFbce
 *
 * 下载成绩导入模板，返回文件下载地址
 *
 * @examCourseId 	考试科目mongo-ID-String
 */
exports.HyqZWALFbce = function (data, callback) {
	servers.GET({
		url: "/api/v1/score-import/download_template/"+data.examCourseId,
		form: {
			examCourseId: data.examCourseId
		}
	}, callback);
};
/** End HyqZWALFbce */



/** 
 * Created by B1EzWAIKb9g
 *
 * 查看准考证导入情况 - 未更新准考证数据加载
 *
 * @importId 	准考证导入 Task 唯一编号，可通过该ID反查导入历史数据-String
 */
exports.B1EzWAIKb9g = function (data, callback) {
	servers.GET({
		url: "/api/v1/ticket/list_update/"+data.importId,
		form: {
			importId: data.importId
		}
	}, callback);
};
/** End B1EzWAIKb9g */



/** 
 * Created by B1yfZ0LYbqx
 *
 * 修改学校分类
 *
 * @examSchoolGroup 	待修改的学校分类信息-Body
 */
exports.B1yfZ0LYbqx = function (data, callback) {
	servers.POST({
		url: "/api/v1/school-group/modify",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End B1yfZ0LYbqx */



/** 
 * Created by HJp7Z0UtZqx
 *
 * 根据考试试题ID查询试题
 *
 * @questionId 	试题ID-String
 */
exports.HJp7Z0UtZqx = function (data, callback) {
	servers.GET({
		url: "/api/v1/question/find_question/"+data.questionId,
		form: {
			questionId: data.questionId
		}
	}, callback);
};
/** End HJp7Z0UtZqx */



/** 
 * Created by SyxbZ0IFbcg
 *
 * hello
 *
 */
exports.SyxbZ0IFbcg = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/hello"
	}, callback);
};
/** End SyxbZ0IFbcg */



/** 
 * Created by r18eWCIt$cl
 *
 * 查询当前租户某学段市级年级
 *
 * @phase 	云平台学段-Number
 */
exports.r18eWCIt$cl = function (data, callback) {
	servers.GET({
		url: "/api/v1/common/list_grades/"+data.phase,
		form: {
			phase: data.phase
		}
	}, callback);
};
/** End r18eWCIt$cl */



/** 
 * Created by r1B$bCItWce
 *
 * 创建考试
 *
 * @exam 	待新建的考试信息-Body
 */
exports.r1B$bCItWce = function (data, callback) {
	servers.POST({
		url: "/api/v1/basic/create",
		body: data.body,
		form: {
		}
	}, callback);
};
/** End r1B$bCItWce */



/** 
 * Created by SJoxW0Utbce
 *
 * 按考试班级统计考试数量
 *
 */
exports.SJoxW0Utbce = function (data, callback) {
	servers.GET({
		url: "/api/v1/index/count_grade"
	}, callback);
};
/** End SJoxW0Utbce */


