/**!
 * 重构微服务-swagger 教学管理服务-tms v0.1
 * 接口数量 74
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



/** 
 * Created by TermYearApi-modify
 *
 * 修改学期结束时间(公司接口) #孟加鑫/2017-12-11#
 *
 * @yearId 	学年Id-String * @endDate 	上学期结束时间-
 */
exports.TermYearApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/term-year/modify/"+data.yearId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TermYearApi-modify",
		query: {
			endDate: data.endDate
		}
	}, callback);
};
/** End TermYearApi-modify */



/** 
 * Created by SubjectApi-create
 *
 * 添加学科(公司接口) #孟加鑫/2017-11-27#
 *
 * @param 	学科添加对象-Body
 */
exports.SubjectApi_create = function (data, callback) {
	servers.POST({
		url: "/tms/api/subject/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SubjectApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End SubjectApi-create */



/** 
 * Created by CourseApi-downloadCourses
 *
 * 下载课程数据，返回后台生成Excel的的任务ID #郑强/#
 *
 * @courseExportDTO 	courseExportDTO-Body
 */
exports.CourseApi_downloadCourses = function (data, callback) {
	servers.GET({
		url: "/tms/api/course/download_courses",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-downloadCourses",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End CourseApi-downloadCourses */



/** 
 * Created by KnowledgeLevelApi-remove
 *
 * 删除能力层次(公司接口) #孟加鑫#
 *
 * @levelId 	能力层次Id-String
 */
exports.KnowledgeLevelApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/tms/api/knowledge-level/remove/"+data.levelId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "KnowledgeLevelApi-remove",
		query: {
		}
	}, callback);
};
/** End KnowledgeLevelApi-remove */



/** 
 * Created by GradeLeaderApi-get
 *
 * 根据ID查询年级组长 #杨东锋#
 *
 * @id 	年级组长ID-String
 */
exports.GradeLeaderApi_get = function (data, callback) {
	servers.GET({
		url: "/tms/api/grade-leader/get/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "GradeLeaderApi-get",
		query: {
		}
	}, callback);
};
/** End GradeLeaderApi-get */



/** 
 * Created by ClassApi-modify
 *
 * 修改一个班级 #郑强/#
 *
 * @classDTO 	班级数据对象-Body
 */
exports.ClassApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/class/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ClassApi-modify */



/** 
 * Created by KnowledgePointApi-tree
 *
 * 知识点树形数据查询(通用接口) #孟加鑫#
 *
 * @areaId 	区域Id（公司级查询传100000）-String
 */
exports.KnowledgePointApi_tree = function (data, callback) {
	servers.GET({
		url: "/tms/api/knowledge-point/tree/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "KnowledgePointApi-tree",
		query: {
		}
	}, callback);
};
/** End KnowledgePointApi-tree */



/** 
 * Created by CourseApi-create
 *
 * 创建课程数据 #郑强/#
 *
 * @courseRelDTO 	需要创建的课程数据-Body
 */
exports.CourseApi_create = function (data, callback) {
	servers.POST({
		url: "/tms/api/course/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End CourseApi-create */



/** 
 * Created by ClassApi-downloadTemplate
 *
 * 下载导入的Excel模板 #郑强/#
 *
 */
exports.ClassApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/tms/api/class/download_template",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-downloadTemplate"
	}, callback);
};
/** End ClassApi-downloadTemplate */



/** 
 * Created by ClassApi-createBatch
 *
 * 批量创建班级数据 #郑强/#
 *
 * @classListDTO 	需要创建的班级数据-Body
 */
exports.ClassApi_createBatch = function (data, callback) {
	servers.POST({
		url: "/tms/api/class/create_batch",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-createBatch",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ClassApi-createBatch */



/** 
 * Created by KnowledgePointApi-modify
 *
 * 修改知识点(公司接口) #孟加鑫#
 *
 * @param 	知识点对象-Body
 */
exports.KnowledgePointApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/knowledge-point/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "KnowledgePointApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End KnowledgePointApi-modify */



/** 
 * Created by PeriodApi-isOperate
 *
 * 编辑删除时校验当前学段是否可以操作(公司接口) #孟加鑫/2017-11-23#
 *
 * @periodId 	学段Id-String
 */
exports.PeriodApi_isOperate = function (data, callback) {
	servers.GET({
		url: "/tms/api/period/is_operate/"+data.periodId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-isOperate",
		query: {
		}
	}, callback);
};
/** End PeriodApi-isOperate */



/** 
 * Created by GradeLeaderApi-create
 *
 * 添加年级组长 #杨东锋#
 *
 * @gradeLeaderRelDTO 	年级组长-Body
 */
exports.GradeLeaderApi_create = function (data, callback) {
	servers.POST({
		url: "/tms/api/grade-leader/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "GradeLeaderApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End GradeLeaderApi-create */



/** 
 * Created by KnowledgeLevelApi-modify
 *
 * 修改能力层次(公司接口) #孟加鑫#
 *
 * @param 	能力层次对象-Body
 */
exports.KnowledgeLevelApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/knowledge-level/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "KnowledgeLevelApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End KnowledgeLevelApi-modify */



/** 
 * Created by CourseApi-listCourseByQuery
 *
 * 加载课程数据 #郑强/#
 *
 * @courseQueryDTO 	加载课程数据固定查询条件-Body
 */
exports.CourseApi_listCourseByQuery = function (data, callback) {
	servers.POST({
		url: "/tms/api/course/list_course_by_query",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-listCourseByQuery",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End CourseApi-listCourseByQuery */



/** 
 * Created by PeriodApi-allocation
 *
 * 区域配置对应的学段(区域接口) #孟加鑫/2017-11-23#
 *
 * @param 	学段配置对象-Body
 */
exports.PeriodApi_allocation = function (data, callback) {
	servers.POST({
		url: "/tms/api/period/allocation",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-allocation",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PeriodApi-allocation */



/** 
 * Created by TechMaterialVersionApi-list
 *
 * 查询教材版本列表(公司接口) #孟加鑫/2017-12-04#
 *
 */
exports.TechMaterialVersionApi_list = function (data, callback) {
	servers.GET({
		url: "/tms/api/tech-material-version/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialVersionApi-list"
	}, callback);
};
/** End TechMaterialVersionApi-list */



/** 
 * Created by TechMaterialChapterApi-create
 *
 * 添加教材章节(公司接口) #孟加鑫/2017-12-05#
 *
 * @param 	教材章节对象-Body
 */
exports.TechMaterialChapterApi_create = function (data, callback) {
	servers.POST({
		url: "/tms/api/tech-material-chapter/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialChapterApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TechMaterialChapterApi-create */



/** 
 * Created by TechMaterialApi-get
 *
 * 单个教材的详细信息(公司接口) #孟加鑫/2017-11-30#
 *
 * @materialId 	教材Id-String
 */
exports.TechMaterialApi_get = function (data, callback) {
	servers.GET({
		url: "/tms/api/tech-material/get/"+data.materialId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialApi-get",
		query: {
		}
	}, callback);
};
/** End TechMaterialApi-get */



/** 
 * Created by GradeLeaderApi-update
 *
 * 修改年级组长 #杨东锋#
 *
 * @gradeLeaderRelDTO 	年级组长-Body
 */
exports.GradeLeaderApi_update = function (data, callback) {
	servers.POST({
		url: "/tms/api/grade-leader/update",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "GradeLeaderApi-update",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End GradeLeaderApi-update */



/** 
 * Created by CourseApi-downloadTemplate
 *
 * 下载导入的Excel模板 #郑强/#
 *
 */
exports.CourseApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/tms/api/course/download_template",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-downloadTemplate"
	}, callback);
};
/** End CourseApi-downloadTemplate */



/** 
 * Created by SubjectApi-findByGradeLevelId
 *
 * 根据年级级别获取对应的学科(通用接口) #孟加鑫/2017-11-28#
 *
 * @gradeLevelId 	年级级别-String
 */
exports.SubjectApi_findByGradeLevelId = function (data, callback) {
	servers.GET({
		url: "/tms/api/subject/find_by_grade_level_id/"+data.gradeLevelId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SubjectApi-findByGradeLevelId",
		query: {
		}
	}, callback);
};
/** End SubjectApi-findByGradeLevelId */



/** 
 * Created by PeriodApi-modify
 *
 * 修改学段，请先调用PeriodApi-isOperate校验(公司接口) #孟加鑫/2017-11-23#
 *
 * @param 	学段添加对象-Body
 */
exports.PeriodApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/period/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PeriodApi-modify */



/** 
 * Created by PeriodApi-remove
 *
 * 删除学段，请先调用PeriodApi-isOperate校验(公司接口) #孟加鑫/2017-11-23#
 *
 * @periodId 	学段Id-String
 */
exports.PeriodApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/tms/api/period/remove/"+data.periodId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-remove",
		query: {
		}
	}, callback);
};
/** End PeriodApi-remove */



/** 
 * Created by TechMaterialApi-remove
 *
 * 删除教材(公司接口) #孟加鑫/2017-11-30#
 *
 * @materialId 	教材Id-String
 */
exports.TechMaterialApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/tms/api/tech-material/remove/"+data.materialId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialApi-remove",
		query: {
		}
	}, callback);
};
/** End TechMaterialApi-remove */



/** 
 * Created by PeriodApi-get
 *
 * 单个学段的详细信息(通用接口) #孟加鑫/2017-11-23#
 *
 * @periodId 	学段Id-String
 */
exports.PeriodApi_get = function (data, callback) {
	servers.GET({
		url: "/tms/api/period/get/"+data.periodId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-get",
		query: {
		}
	}, callback);
};
/** End PeriodApi-get */



/** 
 * Created by PeriodApi-isAdd
 *
 * 添加学段时校验学段名称和学制是否已存在(公司接口) #孟加鑫/2017-11-23#
 *
 * @name 	学段名称-String
 * @yearLevel 	学制(该学段是几年制)-Number
 */
exports.PeriodApi_isAdd = function (data, callback) {
	servers.GET({
		url: "/tms/api/period/is_add",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-isAdd",
		query: {
			name: data.name,
			yearLevel: data.yearLevel
		}
	}, callback);
};
/** End PeriodApi-isAdd */



/** 
 * Created by TechMaterialVersionApi-create
 *
 * 添加教材版本(公司接口) #孟加鑫/2017-12-04#
 *
 * @param 	教材版本对象-Body
 */
exports.TechMaterialVersionApi_create = function (data, callback) {
	servers.POST({
		url: "/tms/api/tech-material-version/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialVersionApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TechMaterialVersionApi-create */



/** 
 * Created by ClassApi-importSubmit
 *
 * 提交可以导入的数据 #郑强/#
 *
 * @taskId 	导入任务Id-String
 */
exports.ClassApi_importSubmit = function (data, callback) {
	servers.POST({
		url: "/tms/api/class/import_submit/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-importSubmit",
		query: {
		}
	}, callback);
};
/** End ClassApi-importSubmit */



/** 
 * Created by TechMaterialApi-modify
 *
 * 修改教材(公司接口) #孟加鑫/2017-11-30#
 *
 * @param 	教材版本对象-Body
 */
exports.TechMaterialApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/tech-material/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TechMaterialApi-modify */



/** 
 * Created by TechMaterialApi-create
 *
 * 添加教材(公司接口) #孟加鑫/2017-11-30#
 *
 * @param 	教材版本对象-Body
 */
exports.TechMaterialApi_create = function (data, callback) {
	servers.POST({
		url: "/tms/api/tech-material/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TechMaterialApi-create */



/** 
 * Created by KnowledgePointApi-create
 *
 * 添加子知识点(公司接口) #孟加鑫#
 *
 * @param 	知识点对象-Body
 */
exports.KnowledgePointApi_create = function (data, callback) {
	servers.POST({
		url: "/tms/api/knowledge-point/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "KnowledgePointApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End KnowledgePointApi-create */



/** 
 * Created by PeriodApi-findPeriodBySubjectId
 *
 * 根据学科Id获取对应的学段Id和学段名称(通用接口) #孟加鑫/2017-11-23#
 *
 * @subjectId 	学科Id-String
 */
exports.PeriodApi_findPeriodBySubjectId = function (data, callback) {
	servers.GET({
		url: "/tms/api/period/find_period_by_subject_id/"+data.subjectId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-findPeriodBySubjectId",
		query: {
		}
	}, callback);
};
/** End PeriodApi-findPeriodBySubjectId */



/** 
 * Created by TechMaterialVersionApi-remove
 *
 * 删除教材版本(公司接口) #孟加鑫/2017-12-04#
 *
 * @versionId 	教材版本Id-String
 */
exports.TechMaterialVersionApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/tms/api/tech-material-version/remove/"+data.versionId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialVersionApi-remove",
		query: {
		}
	}, callback);
};
/** End TechMaterialVersionApi-remove */



/** 
 * Created by KnowledgeLevelApi-create
 *
 * 添加能力层次(公司接口) #孟加鑫#
 *
 * @param 	能力层次对象-Body
 */
exports.KnowledgeLevelApi_create = function (data, callback) {
	servers.POST({
		url: "/tms/api/knowledge-level/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "KnowledgeLevelApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End KnowledgeLevelApi-create */



/** 
 * Created by TechMaterialChapterApi-modify
 *
 * 修改教材章节(公司接口) #孟加鑫/2017-12-05#
 *
 * @param 	教材章节对象-Body
 */
exports.TechMaterialChapterApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/tech-material-chapter/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialChapterApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TechMaterialChapterApi-modify */



/** 
 * Created by CourseApi-getErrorDatas
 *
 * 查询导入解析后错误的Excel数据 #郑强/#
 *
 * @importTaskId 	导入任务Id-String * @pageNo 	数据页-Number
 */
exports.CourseApi_getErrorDatas = function (data, callback) {
	servers.GET({
		url: "/tms/api/course/get_error_datas/"+data.importTaskId+"/"+data.pageNo,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-getErrorDatas",
		query: {
		}
	}, callback);
};
/** End CourseApi-getErrorDatas */



/** 
 * Created by CourseApi-downloadErrorDatas
 *
 * 下载解析后错误的Excel数据，返回后台生成Excel的新的任务ID #郑强/#
 *
 * @importTaskId 	导入任务Id-String
 */
exports.CourseApi_downloadErrorDatas = function (data, callback) {
	servers.GET({
		url: "/tms/api/course/download_error_datas/"+data.importTaskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-downloadErrorDatas",
		query: {
		}
	}, callback);
};
/** End CourseApi-downloadErrorDatas */



/** 
 * Created by class-searchByGradeAndKeyword
 *
 * 查询指定年级的班级 #郑强/#
 *
 * @classConditionDTO 	classConditionDTO-Body
 */
exports.class_searchByGradeAndKeyword = function (data, callback) {
	servers.POST({
		url: "/tms/api/class/search_by_condition",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "class-searchByGradeAndKeyword",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End class-searchByGradeAndKeyword */



/** 
 * Created by TechMaterialVersionApi-modify
 *
 * 修改教材版本(公司接口) #孟加鑫/2017-12-04#
 *
 * @param 	教材版本对象-Body
 */
exports.TechMaterialVersionApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/tech-material-version/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialVersionApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TechMaterialVersionApi-modify */



/** 
 * Created by SubjectApi-allocation
 *
 * 区域配置对应的学科(区域接口) #孟加鑫/2017-11-27#
 *
 * @param 	学科配置对象-Body
 */
exports.SubjectApi_allocation = function (data, callback) {
	servers.POST({
		url: "/tms/api/subject/allocation",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SubjectApi-allocation",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End SubjectApi-allocation */



/** 
 * Created by GradeLeaderApi-listByAreaId
 *
 * 根据ID查询年级组长 #杨东锋#
 *
 * @areaId 	区域ID-String
 */
exports.GradeLeaderApi_listByAreaId = function (data, callback) {
	servers.GET({
		url: "/tms/api/grade-leader/list_by_area_id/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "GradeLeaderApi-listByAreaId",
		query: {
		}
	}, callback);
};
/** End GradeLeaderApi-listByAreaId */



/** 
 * Created by PeriodApi-create
 *
 * 添加学段，请先调用PeriodApi-isAdd校验(公司接口) #孟加鑫/2017-11-23#
 *
 * @param 	学段添加对象-Body
 */
exports.PeriodApi_create = function (data, callback) {
	servers.POST({
		url: "/tms/api/period/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PeriodApi-create */



/** 
 * Created by ExcelApi-excelStatus
 *
 * 查询Excel操作状态 #郑强/#
 *
 * @taskId 	任务Id-String
 */
exports.ExcelApi_excelStatus = function (data, callback) {
	servers.GET({
		url: "/tms/api/excel/excel_status/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ExcelApi-excelStatus",
		query: {
		}
	}, callback);
};
/** End ExcelApi-excelStatus */



/** 
 * Created by CourseApi-importSubmit
 *
 * 提交可以导入的数据 #郑强/#
 *
 * @taskId 	导入任务Id-String
 */
exports.CourseApi_importSubmit = function (data, callback) {
	servers.POST({
		url: "/tms/api/course/import_submit/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-importSubmit",
		query: {
		}
	}, callback);
};
/** End CourseApi-importSubmit */



/** 
 * Created by TechMaterialChapterApi-get
 *
 * 单个教材章节的详细信息(通用接口) #孟加鑫/2017-12-05#
 *
 * @chapterId 	教材章节Id-String
 */
exports.TechMaterialChapterApi_get = function (data, callback) {
	servers.GET({
		url: "/tms/api/tech-material-chapter/get/"+data.chapterId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialChapterApi-get",
		query: {
		}
	}, callback);
};
/** End TechMaterialChapterApi-get */



/** 
 * Created by TechMaterialApi-page
 *
 * 分页查询教材列表(公司接口) #孟加鑫/2017-11-30#
 *
 * @param 	教材列表查询参数-Body
 */
exports.TechMaterialApi_page = function (data, callback) {
	servers.POST({
		url: "/tms/api/tech-material/page",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialApi-page",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TechMaterialApi-page */



/** 
 * Created by ClassApi-importData
 *
 * 上传Excel数据,返回后台解析Excel任务ID #郑强/#
 *
 * @importData 	班级导入数据-Body
 */
exports.ClassApi_importData = function (data, callback) {
	servers.POST({
		url: "/tms/api/class/import_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ClassApi-importData */



/** 
 * Created by SubjectApi-remove
 *
 * 删除学科(公司接口) #孟加鑫/2017-11-27#
 *
 * @subjectId 	学科Id-String
 */
exports.SubjectApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/tms/api/subject/remove/"+data.subjectId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SubjectApi-remove",
		query: {
		}
	}, callback);
};
/** End SubjectApi-remove */



/** 
 * Created by CourseApi-importData
 *
 * 上传Excel数据,返回后台解析Excel任务ID #郑强/#
 *
 * @importData 	Excel导入数据-Body
 */
exports.CourseApi_importData = function (data, callback) {
	servers.POST({
		url: "/tms/api/course/import_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End CourseApi-importData */



/** 
 * Created by CourseApi-modify
 *
 * 修改一个课程 #郑强/#
 *
 * @courseRelDTO 	需要修改的课程数据-Body
 */
exports.CourseApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/course/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End CourseApi-modify */



/** 
 * Created by SubjectApi-page
 *
 * 分页查询学科列表(通用接口) #孟加鑫/2017-11-28#
 *
 * @areaId 	区域Id（公司级查询传100000）-String * @pageableDto 	分页对象-Body
 */
exports.SubjectApi_page = function (data, callback) {
	servers.POST({
		url: "/tms/api/subject/page/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SubjectApi-page",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End SubjectApi-page */



/** 
 * Created by ClassApi-get
 *
 * 根据班级ID查询一个班级 #郑强/#
 *
 * @classId 	班级ID-String
 */
exports.ClassApi_get = function (data, callback) {
	servers.GET({
		url: "/tms/api/class/get/"+data.classId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-get",
		query: {
		}
	}, callback);
};
/** End ClassApi-get */



/** 
 * Created by PeriodApi-autoCreateGrade
 *
 * 自动生成年级(定时任务) #孟加鑫/2017-11-23#
 *
 * @year 	当前年份，如：2017-Number
 */
exports.PeriodApi_autoCreateGrade = function (data, callback) {
	servers.GET({
		url: "/tms/api/period/auto_create_grade",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-autoCreateGrade",
		query: {
			year: data.year
		}
	}, callback);
};
/** End PeriodApi-autoCreateGrade */



/** 
 * Created by KnowledgePointApi-remove
 *
 * 删除知识点(公司接口) #孟加鑫#
 *
 * @pointId 	知识点Id-String
 */
exports.KnowledgePointApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/tms/api/knowledge-point/remove/"+data.pointId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "KnowledgePointApi-remove",
		query: {
		}
	}, callback);
};
/** End KnowledgePointApi-remove */



/** 
 * Created by GradeLeaderApi-delete
 *
 * 删除年级组长 #杨东锋#
 *
 * @id 	年级组长ID-String
 */
exports.GradeLeaderApi_delete = function (data, callback) {
	servers.DELETE({
		url: "/tms/api/grade-leader/delete/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "GradeLeaderApi-delete",
		query: {
		}
	}, callback);
};
/** End GradeLeaderApi-delete */



/** 
 * Created by ClassApi-getErrorDatas
 *
 * 查询导入解析后错误的Excel数据 #郑强/#
 *
 * @taskId 	taskId-String * @importTaskId 	导入任务Id-String * @pageNo 	数据页-Number
 */
exports.ClassApi_getErrorDatas = function (data, callback) {
	servers.GET({
		url: "/tms/api/class/get_error_datas/"+data.importTaskId+"/"+data.pageNo,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-getErrorDatas",
		query: {
		}
	}, callback);
};
/** End ClassApi-getErrorDatas */



/** 
 * Created by TermYearApi-list
 *
 * 查询学期信息列表(通用接口) #孟加鑫/2017-12-11#
 *
 */
exports.TermYearApi_list = function (data, callback) {
	servers.GET({
		url: "/tms/api/term-year/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TermYearApi-list"
	}, callback);
};
/** End TermYearApi-list */



/** 
 * Created by ClassApi-downloadErrorDatas
 *
 * 下载解析后错误的Excel数据，返回后台生成Excel的新的任务ID #郑强/#
 *
 * @taskId 	taskId-String * @importTaskId 	导入任务Id-String
 */
exports.ClassApi_downloadErrorDatas = function (data, callback) {
	servers.GET({
		url: "/tms/api/class/download_error_datas/"+data.importTaskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-downloadErrorDatas",
		query: {
		}
	}, callback);
};
/** End ClassApi-downloadErrorDatas */



/** 
 * Created by TechMaterialChapterApi-remove
 *
 * 删除教材章节(公司接口) #孟加鑫/2017-12-05#
 *
 * @chapterId 	教材章节Id-String
 */
exports.TechMaterialChapterApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/tms/api/tech-material-chapter/remove/"+data.chapterId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialChapterApi-remove",
		query: {
		}
	}, callback);
};
/** End TechMaterialChapterApi-remove */



/** 
 * Created by ClassApi-get_1
 *
 * 查询一个班级的学生 #郑强/#
 *
 * @classId 	班级ID-String
 */
exports.ClassApi_get_1 = function (data, callback) {
	servers.GET({
		url: "/tms/api/class/get_students/"+data.classId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-get_1",
		query: {
		}
	}, callback);
};
/** End ClassApi-get_1 */



/** 
 * Created by TechMaterialChapterApi-tree
 *
 * 教材章节树形数据查询(通用接口) #孟加鑫/2017-12-05#
 *
 * @materialId 	教材Id-String
 */
exports.TechMaterialChapterApi_tree = function (data, callback) {
	servers.GET({
		url: "/tms/api/tech-material-chapter/tree/"+data.materialId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TechMaterialChapterApi-tree",
		query: {
		}
	}, callback);
};
/** End TechMaterialChapterApi-tree */



/** 
 * Created by SubjectApi-get
 *
 * 单个学科的详细信息(公司接口) #孟加鑫/2017-11-28#
 *
 * @subjectId 	学科Id-String
 */
exports.SubjectApi_get = function (data, callback) {
	servers.GET({
		url: "/tms/api/subject/get/"+data.subjectId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SubjectApi-get",
		query: {
		}
	}, callback);
};
/** End SubjectApi-get */



/** 
 * Created by KnowledgePointApi-get
 *
 * 单个知识点的详细信息(通用接口) #孟加鑫#
 *
 * @pointId 	知识点Id-String
 */
exports.KnowledgePointApi_get = function (data, callback) {
	servers.GET({
		url: "/tms/api/knowledge-point/get/"+data.pointId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "KnowledgePointApi-get",
		query: {
		}
	}, callback);
};
/** End KnowledgePointApi-get */



/** 
 * Created by TermYearApi-autoCreateTermYear
 *
 * 自动生成年级(定时任务) #孟加鑫/2017-12-11#
 *
 * @year 	当前年份，如：2017-Number
 */
exports.TermYearApi_autoCreateTermYear = function (data, callback) {
	servers.GET({
		url: "/tms/api/term-year/auto_create_term_year",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TermYearApi-autoCreateTermYear",
		query: {
			year: data.year
		}
	}, callback);
};
/** End TermYearApi-autoCreateTermYear */



/** 
 * Created by KnowledgeLevelApi-list
 *
 * 查询能力层次列表(公司接口) #孟加鑫#
 *
 * @periodId 	学段Id-String
 * @subjectId 	学科Id-String
 */
exports.KnowledgeLevelApi_list = function (data, callback) {
	servers.GET({
		url: "/tms/api/knowledge-level/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "KnowledgeLevelApi-list",
		query: {
			periodId: data.periodId,
			subjectId: data.subjectId
		}
	}, callback);
};
/** End KnowledgeLevelApi-list */



/** 
 * Created by PeriodApi-findPeriod
 *
 * 查询所有的学段Id和名称(通用接口) #孟加鑫/2017-11-23#
 *
 */
exports.PeriodApi_findPeriod = function (data, callback) {
	servers.GET({
		url: "/tms/api/period/find_period",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-findPeriod"
	}, callback);
};
/** End PeriodApi-findPeriod */



/** 
 * Created by PeriodApi-findGradeLevel
 *
 * 根据学段Id获取年级级别Id和年级级别名称(通用接口) #孟加鑫/2017-11-23#
 *
 * @periodId 	学段Id-String
 */
exports.PeriodApi_findGradeLevel = function (data, callback) {
	servers.GET({
		url: "/tms/api/period/find_grade_level/"+data.periodId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-findGradeLevel",
		query: {
		}
	}, callback);
};
/** End PeriodApi-findGradeLevel */



/** 
 * Created by ClassApi-removeBatch
 *
 * 批量删除班级数据 #郑强/#
 *
 * @classIDs 	需要创建的班级数据-Body
 */
exports.ClassApi_removeBatch = function (data, callback) {
	servers.POST({
		url: "/tms/api/class/remove_batch",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-removeBatch",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ClassApi-removeBatch */



/** 
 * Created by CourseApi-remove
 *
 * 删除课程数据 #郑强/#
 *
 * @courseId 	课程ID-String
 */
exports.CourseApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/tms/api/course/remove/"+data.courseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-remove",
		query: {
		}
	}, callback);
};
/** End CourseApi-remove */



/** 
 * Created by ClassApi-modifyArtOrScienceBatch
 *
 * 批量修改班级文理属性 #郑强/#
 *
 * @type 	文理属性-String * @classIDs 	需要创建的班级数据-Body
 */
exports.ClassApi_modifyArtOrScienceBatch = function (data, callback) {
	servers.POST({
		url: "/tms/api/class/modify_artorscience_batch/"+data.type,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ClassApi-modifyArtOrScienceBatch",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ClassApi-modifyArtOrScienceBatch */



/** 
 * Created by SubjectApi-modify
 *
 * 修改学科(公司接口) #孟加鑫/2017-11-27#
 *
 * @param 	学科添加对象-Body
 */
exports.SubjectApi_modify = function (data, callback) {
	servers.POST({
		url: "/tms/api/subject/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "SubjectApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End SubjectApi-modify */



/** 
 * Created by CourseApi-get
 *
 * 根据课程ID查询一个课程 #郑强/#
 *
 * @courseId 	课程ID-String
 */
exports.CourseApi_get = function (data, callback) {
	servers.GET({
		url: "/tms/api/course/get/"+data.courseId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "CourseApi-get",
		query: {
		}
	}, callback);
};
/** End CourseApi-get */



/** 
 * Created by PeriodApi-list
 *
 * 根据区域Id查询所对应的学段列表(通用接口) #孟加鑫/2017-11-23#
 *
 * @areaId 	区域Id（公司级查询传100000）-String
 */
exports.PeriodApi_list = function (data, callback) {
	servers.GET({
		url: "/tms/api/period/list/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PeriodApi-list",
		query: {
		}
	}, callback);
};
/** End PeriodApi-list */


