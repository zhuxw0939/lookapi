/**!
 * 重构微服务-swagger 云平台(旧)-platform v0.1
 * 接口数量 43
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformClassApi-findByTeacher",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findByTeacher */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ExamCommonApi-findClassSubjects_1",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findClassSubjects_1 */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OrganizationApi-listCountyAndSchools",
		query: {
		}
	}, callback);
};
/** End OrganizationApi-listCountyAndSchools */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformLevelApi-listPlatformSubjectLevels",
		query: {
		}
	}, callback);
};
/** End PlatformLevelApi-listPlatformSubjectLevels */



/** 
 * Created by AccountClient-checkPhoneNumberUseStatus
 *
 * 根据电话号码，排除的账号ID查询有没有冲突的账号(如果有冲突，则返回账号数据;如果无冲突，则不返回账号),返回修改操作的随机码 (郑强) #2017-11-28#
 *
 * @phoneNumber 	查询的电话号码-String
 */
exports.AccountClient_checkPhoneNumberUseStatus = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/check_phonenumber_use_status/"+data.phoneNumber,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AccountClient-checkPhoneNumberUseStatus",
		query: {
		}
	}, callback);
};
/** End AccountClient-checkPhoneNumberUseStatus */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OrganizationApi-listChildren",
		query: {
		}
	}, callback);
};
/** End OrganizationApi-listChildren */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OrganizationApi-listWordAndSchools",
		query: {
			countyId: data.countyId,
			phase: data.phase
		}
	}, callback);
};
/** End OrganizationApi-listWordAndSchools */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformGradeApi-findBySchoolAndPhase",
		query: {
		}
	}, callback);
};
/** End PlatformGradeApi-findBySchoolAndPhase */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ExamCommonApi-listPhaseGrades",
		query: {
			tenantId: data.tenantId,
			phase: data.phase
		}
	}, callback);
};
/** End ExamCommonApi-listPhaseGrades */



/** 
 * Created by PlatformSubjectApi-findManagerSubjects
 *
 * 查询教研员或学科组长管理的学科 (陈显官) #2017-07-28#
 *
 * @type 	类型：city-市级教研员，county-区县教研员，school-学校学科组长-String * @accountId 	账号ID-Number
 */
exports.PlatformSubjectApi_findManagerSubjects = function (data, callback) {
	servers.GET({
		url: "/platform/api/subject/find_manager_subjects/"+data.type+"/"+data.accountId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformSubjectApi-findManagerSubjects",
		query: {
		}
	}, callback);
};
/** End PlatformSubjectApi-findManagerSubjects */



/** 
 * Created by PlatformClassApi-findStudentClass
 *
 * 查询学生的班级信息，学生端APP(向发钧) #2017-10-24#
 *
 * @accountId 	accountId-String
 */
exports.PlatformClassApi_findStudentClass = function (data, callback) {
	servers.GET({
		url: "/platform/api/class/find_student_class/"+data.accountId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformClassApi-findStudentClass",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findStudentClass */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformLevelApi-listPlatformSubjectPoints",
		query: {
		}
	}, callback);
};
/** End PlatformLevelApi-listPlatformSubjectPoints */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ExamCommonApi-listPlatformTerms",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-listPlatformTerms */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OrganizationApi-listSchoolFirstWords",
		query: {
			countyId: data.countyId,
			phase: data.phase
		}
	}, callback);
};
/** End OrganizationApi-listSchoolFirstWords */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ExamCommonApi-findByTenantIdAndPhase",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findByTenantIdAndPhase */



/** 
 * Created by ExamCommonApi-listPhases
 *
 * 查询所有的学段(向发钧) #2017-03-09#
 *
 */
exports.ExamCommonApi_listPhases = function (data, callback) {
	servers.GET({
		url: "/platform/api/common/list_phases",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ExamCommonApi-listPhases"
	}, callback);
};
/** End ExamCommonApi-listPhases */



/** 
 * Created by PlatformAccountApi-findCurrentRole
 *
 * 查询当前用户角色信息(胡君) #2017-03-14#
 *
 */
exports.PlatformAccountApi_findCurrentRole = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/find_current_role",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformAccountApi-findCurrentRole"
	}, callback);
};
/** End PlatformAccountApi-findCurrentRole */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformClassApi-findNowByTeacher",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findNowByTeacher */



/** 
 * Created by PlatformTenantApi-findAll
 *
 * 查询所有的租户数据,无根结点数据 (郑强) #2017-12-05#
 *
 */
exports.PlatformTenantApi_findAll = function (data, callback) {
	servers.GET({
		url: "/platform/api/tenant/find_all",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformTenantApi-findAll"
	}, callback);
};
/** End PlatformTenantApi-findAll */



/** 
 * Created by AccountClient-classStudentPage
 *
 * 班级学生的分页列表查询 (郑强) #2017-12-05#
 *
 * @accountSearchDTO 	分页对象-Body * @classID 	班级ID-Number
 */
exports.AccountClient_classStudentPage = function (data, callback) {
	servers.POST({
		url: "/platform/api/account/class_students_page/"+data.classID,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AccountClient-classStudentPage",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AccountClient-classStudentPage */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformPointApi-searchPlatformSubjectPoints",
		query: {
		}
	}, callback);
};
/** End PlatformPointApi-searchPlatformSubjectPoints */



/** 
 * Created by OrganizationApi-findCurrentOrg
 *
 * 首页--查询当前用户的组织机构(胡君) #2017-03-14#
 *
 */
exports.OrganizationApi_findCurrentOrg = function (data, callback) {
	servers.GET({
		url: "/platform/api/organization/find_current_org",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OrganizationApi-findCurrentOrg"
	}, callback);
};
/** End OrganizationApi-findCurrentOrg */



/** 
 * Created by PlatformAccountApi-findCurrentRole_1
 *
 * 首页--查询当前用户角色信息列表(郑强) #2017-04-25#
 *
 */
exports.PlatformAccountApi_findCurrentRole_1 = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/find_current_roles",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformAccountApi-findCurrentRole_1"
	}, callback);
};
/** End PlatformAccountApi-findCurrentRole_1 */



/** 
 * Created by PlatformGradeApi-findByTime
 *
 * 查询某学生所有学期 (向发钧) #2017-06-09#
 *
 * @time 	传入时间-Number * @count 	数量-Number * @tenantId 	租户ID-Number
 */
exports.PlatformGradeApi_findByTime = function (data, callback) {
	servers.GET({
		url: "/platform/api/term/find_time/"+data.tenantId+"/"+data.count+"/"+data.time,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformGradeApi-findByTime",
		query: {
		}
	}, callback);
};
/** End PlatformGradeApi-findByTime */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformClassApi-findBySchool",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findBySchool */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformGradeApi-findBySchool_1",
		query: {
		}
	}, callback);
};
/** End PlatformGradeApi-findBySchool_1 */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OrganizationApi-listSchools",
		query: {
			countyId: data.countyId,
			phase: data.phase
		}
	}, callback);
};
/** End OrganizationApi-listSchools */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformGradeApi-findBySchoolGradeLeader",
		query: {
		}
	}, callback);
};
/** End PlatformGradeApi-findBySchoolGradeLeader */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformClassApi-findByGrade",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findByGrade */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformAccountApi-listSubjectLeaders",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End PlatformAccountApi-listSubjectLeaders */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ExamCommonApi-findCityGradeBySchoolGradeId",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findCityGradeBySchoolGradeId */



/** 
 * Created by PlatformAccountApi-getAccountInfo
 *
 * 查询用户信息(郑强) #2017-11-27#
 *
 */
exports.PlatformAccountApi_getAccountInfo = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/get_account_info",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformAccountApi-getAccountInfo"
	}, callback);
};
/** End PlatformAccountApi-getAccountInfo */



/** 
 * Created by PlatformClassApi-findCurrentClass
 *
 * 查询当前用户的班级信息，学生端APP(胡君) #2017-03-09#
 *
 */
exports.PlatformClassApi_findCurrentClass = function (data, callback) {
	servers.GET({
		url: "/platform/api/class/find_current_class",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformClassApi-findCurrentClass"
	}, callback);
};
/** End PlatformClassApi-findCurrentClass */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ExamCommonApi-findByTimeAndCount",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findByTimeAndCount */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformAccountApi-findClassSubjects",
		query: {
		}
	}, callback);
};
/** End PlatformAccountApi-findClassSubjects */



/** 
 * Created by PlatformClassApi-findGradesAndClassesBySchool
 *
 * 查询一个学校的所有年级及班级数据(郑强) #2017-12-05#
 *
 * @schoolId 	学校ID-Number
 */
exports.PlatformClassApi_findGradesAndClassesBySchool = function (data, callback) {
	servers.GET({
		url: "/platform/api/class/find_grades_and_classes_by_school/"+data.schoolId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformClassApi-findGradesAndClassesBySchool",
		query: {
		}
	}, callback);
};
/** End PlatformClassApi-findGradesAndClassesBySchool */



/** 
 * Created by PlatformAccountApi-checkBindPhone
 *
 * 查询是否是账号绑定的电话号码(郑强) #2017-10-30#
 *
 * @accountId 	账号ID-Number * @phoneNumber 	电话号码-String
 */
exports.PlatformAccountApi_checkBindPhone = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/check_bind_phone/"+data.accountId+"/"+data.phoneNumber,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformAccountApi-checkBindPhone",
		query: {
		}
	}, callback);
};
/** End PlatformAccountApi-checkBindPhone */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ExamCommonApi-findClassSubjects",
		query: {
		}
	}, callback);
};
/** End ExamCommonApi-findClassSubjects */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OrganizationApi-listBrotherSchools",
		query: {
		}
	}, callback);
};
/** End OrganizationApi-listBrotherSchools */



/** 
 * Created by PlatformAccountApi-findCurrentRolesOfSXCW
 *
 * 首页--查询当前用户财务系统角色信息列表(郑强) #2017-12-04#
 *
 */
exports.PlatformAccountApi_findCurrentRolesOfSXCW = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/find_current_roles_of_sxcw",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformAccountApi-findCurrentRolesOfSXCW"
	}, callback);
};
/** End PlatformAccountApi-findCurrentRolesOfSXCW */



/** 
 * Created by PlatformAccountApi-findCurrentUser
 *
 * 首页--查询当前用户信息(胡君) #2017-03-14#
 *
 */
exports.PlatformAccountApi_findCurrentUser = function (data, callback) {
	servers.GET({
		url: "/platform/api/account/find_current_user",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformAccountApi-findCurrentUser"
	}, callback);
};
/** End PlatformAccountApi-findCurrentUser */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "PlatformGradeApi-findBySchool",
		query: {
		}
	}, callback);
};
/** End PlatformGradeApi-findBySchool */



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
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "OrganizationApi-listCountyAndSchoolsByOrgAndPhase",
		query: {
		}
	}, callback);
};
/** End OrganizationApi-listCountyAndSchoolsByOrgAndPhase */


