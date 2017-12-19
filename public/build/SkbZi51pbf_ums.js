/**!
 * 重构微服务-swagger 用户管理服务-ums v0.1
 * 接口数量 148
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



/** 
 * Created by student-downloadExport
 *
 * 批量导出学生用户 #杨东锋#
 *
 * @taskId 	导出任务Id-String
 */
exports.student_downloadExport = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/download_export/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-downloadExport",
		query: {
		}
	}, callback);
};
/** End student-downloadExport */



/** 
 * Created by student-findByName
 *
 * 根据名称查询学生用户 #杨东锋#
 *
 * @name 	名称-String
 */
exports.student_findByName = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/find_by_id/"+data.name,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-findByName",
		query: {
		}
	}, callback);
};
/** End student-findByName */



/** 
 * Created by teacher-download-update-Template
 *
 * 下载更新导入的Excel模板 #杨东锋#
 *
 */
exports.teacher_download_update_Template = function (data, callback) {
	servers.GET({
		url: "/ums/api/teacher/download_update_template",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-download-update-Template"
	}, callback);
};
/** End teacher-download-update-Template */



/** 
 * Created by parent-batchDisable_1
 *
 * 批量禁用 #杨东锋#
 *
 * @ids 	需要禁用的id list-Body
 */
exports.parent_batchDisable_1 = function (data, callback) {
	servers.POST({
		url: "/ums/api/parent/batch_disable",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-batchDisable_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-batchDisable_1 */



/** 
 * Created by RoleApi-get
 *
 * 根据角色ID查询一个角色 #郑强/2017-11-24
 *
 * @roleId 	角色ID-String
 */
exports.RoleApi_get = function (data, callback) {
	servers.GET({
		url: "/ums/api/role/get/"+data.roleId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "RoleApi-get",
		query: {
		}
	}, callback);
};
/** End RoleApi-get */



/** 
 * Created by user-findById
 *
 * 根据Id查询用户 #杨东锋#
 *
 * @id 	ID-String
 */
exports.user_findById = function (data, callback) {
	servers.GET({
		url: "/ums/api/user/server/user/find_by_id/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "user-findById",
		query: {
		}
	}, callback);
};
/** End user-findById */



/** 
 * Created by student-deleteById
 *
 * 删除学生用户 #杨东锋/#
 *
 * @id 	ID-String
 */
exports.student_deleteById = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/delete_by_Id",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-deleteById",
		query: {
			id: data.id
		}
	}, callback);
};
/** End student-deleteById */



/** 
 * Created by administrative-downloadUpdateTemplate
 *
 * 下载更新导入的Excel模板 #杨东锋#
 *
 */
exports.administrative_downloadUpdateTemplate = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/download_update_template",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-downloadUpdateTemplate"
	}, callback);
};
/** End administrative-downloadUpdateTemplate */



/** 
 * Created by ServiceRoleRelApi-getByRole
 *
 * 根据角色ID查询角色关联的所有的服务 #郑强/2017-11-24
 *
 * @roleId 	角色ID-String
 */
exports.ServiceRoleRelApi_getByRole = function (data, callback) {
	servers.GET({
		url: "/ums/api/service-role-rel/get_by_role/"+data.roleId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceRoleRelApi-getByRole",
		query: {
		}
	}, callback);
};
/** End ServiceRoleRelApi-getByRole */



/** 
 * Created by RoleServiceResourceRelApi-getByRole
 *
 * 根据角色查询服务对应的所有服务资源ID集合 #郑强/2017-11-24
 *
 * @roleId 	角色ID-String
 */
exports.RoleServiceResourceRelApi_getByRole = function (data, callback) {
	servers.GET({
		url: "/ums/api/role-serviceresource-rel/get_by_role/"+data.roleId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "RoleServiceResourceRelApi-getByRole",
		query: {
		}
	}, callback);
};
/** End RoleServiceResourceRelApi-getByRole */



/** 
 * Created by ServiceResourceApi-get
 *
 * 根据服务资源ID查询一个服务资源 #郑强/2017-11-24
 *
 * @serviceResourceId 	服务资源ID-String
 */
exports.ServiceResourceApi_get = function (data, callback) {
	servers.GET({
		url: "/ums/api/service-resource/get/"+data.serviceResourceId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceResourceApi-get",
		query: {
		}
	}, callback);
};
/** End ServiceResourceApi-get */



/** 
 * Created by parent-student-deleteById
 *
 * 删除家长用户 #杨东锋/#
 *
 * @id 	ID-String
 */
exports.parent_student_deleteById = function (data, callback) {
	servers.GET({
		url: "/ums/api/parent/delete_by_Id",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-student-deleteById",
		query: {
			id: data.id
		}
	}, callback);
};
/** End parent-student-deleteById */



/** 
 * Created by AreaApi-create
 *
 * 创建一个行政区域 #郑强/2017-11-30#
 *
 * @areaDTO 	行政区域数据对象-Body
 */
exports.AreaApi_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/area/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AreaApi-create */



/** 
 * Created by tenant-remove
 *
 * 删除一个租户 #郑强/#
 *
 * @tenantId 	租户ID-String
 */
exports.tenant_remove = function (data, callback) {
	servers.DELETE({
		url: "/ums/api/tenant/remove/"+data.tenantId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "tenant-remove",
		query: {
		}
	}, callback);
};
/** End tenant-remove */



/** 
 * Created by RoleApi-getComplexRole
 *
 * 根据角色ID查询一个角色,包括了角色与应用的关联关系 #郑强/2017-11-24
 *
 * @roleId 	角色ID-String
 */
exports.RoleApi_getComplexRole = function (data, callback) {
	servers.GET({
		url: "/ums/api/role/get_complex_role/"+data.roleId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "RoleApi-getComplexRole",
		query: {
		}
	}, callback);
};
/** End RoleApi-getComplexRole */



/** 
 * Created by user-update
 *
 * 修改用户 #杨东锋/#
 *
 * @userDTO 	用户User对象-Body
 */
exports.user_update = function (data, callback) {
	servers.POST({
		url: "/ums/api/user/server/user/update",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "user-update",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End user-update */



/** 
 * Created by teacher-getErrorDatas
 *
 * 查询导入解析后错误的Excel数据 #杨东锋#
 *
 * @importTaskId 	导入任务Id-String * @pageNo 	数据页-Number
 */
exports.teacher_getErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/teacher/get_error_datas/"+data.importTaskId+"/"+data.pageNo,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-getErrorDatas",
		query: {
		}
	}, callback);
};
/** End teacher-getErrorDatas */



/** 
 * Created by ServiceRoleRelApi-getByService
 *
 * 根据服务ID查询服务关联的所有的角色 #郑强/2017-11-24
 *
 * @serviceId 	服务ID-String
 */
exports.ServiceRoleRelApi_getByService = function (data, callback) {
	servers.GET({
		url: "/ums/api/service-role-rel/get_by_service/"+data.serviceId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceRoleRelApi-getByService",
		query: {
		}
	}, callback);
};
/** End ServiceRoleRelApi-getByService */



/** 
 * Created by TenantAdminRelApi-list
 *
 * 租户管理员管理列表查询 #郑强/#
 *
 * @tenantAdminQueryDTO 	租户管理员管理列表查询参数-Body
 */
exports.TenantAdminRelApi_list = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant-admin-rel/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantAdminRelApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TenantAdminRelApi-list */



/** 
 * Created by student-exportData
 *
 * 根据区域+学段，年级，班级等学生属性+关键字导出学生用户 #杨东锋#
 *
 * @studentDTO 	学生dto-Body * @areaId 	区域ID-String * @keyword 	关键字-String
 */
exports.student_exportData = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/export_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-exportData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End student-exportData */



/** 
 * Created by tenant-get
 *
 * 根据租户ID查询一个租户 #郑强/#
 *
 * @tenantId 	租户ID-String
 */
exports.tenant_get = function (data, callback) {
	servers.GET({
		url: "/ums/api/tenant/get/"+data.tenantId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "tenant-get",
		query: {
		}
	}, callback);
};
/** End tenant-get */



/** 
 * Created by student-excelStatus
 *
 * 查询导入/导出状态 #杨东锋#
 *
 * @taskId 	导入/导出任务Id-String
 */
exports.student_excelStatus = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/excel_status/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-excelStatus",
		query: {
		}
	}, callback);
};
/** End student-excelStatus */



/** 
 * Created by administrative-findByName
 *
 * 根据名称查询教育局用户 #杨东锋#
 *
 * @name 	名称-String
 */
exports.administrative_findByName = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/find_by_name/"+data.name,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-findByName",
		query: {
		}
	}, callback);
};
/** End administrative-findByName */



/** 
 * Created by parent-findParentByAreaId
 *
 * 根据区域ID查询家长list #杨东锋#
 *
 * @areaId 	区域ID-String
 */
exports.parent_findParentByAreaId = function (data, callback) {
	servers.GET({
		url: "/ums/api/parent/find_by_area_id/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-findParentByAreaId",
		query: {
		}
	}, callback);
};
/** End parent-findParentByAreaId */



/** 
 * Created by teacher-excelStatus
 *
 * 查询导入状态 #杨东锋#
 *
 * @taskId 	导入任务Id-String
 */
exports.teacher_excelStatus = function (data, callback) {
	servers.GET({
		url: "/ums/api/teacher/excel_status/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-excelStatus",
		query: {
		}
	}, callback);
};
/** End teacher-excelStatus */



/** 
 * Created by testApi-get
 *
 * 根据Id查询数据  #杨东锋/#
 *
 * @id 	ID-String
 */
exports.testApi_get = function (data, callback) {
	servers.GET({
		url: "/ums/api/test/get/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "testApi-get",
		query: {
		}
	}, callback);
};
/** End testApi-get */



/** 
 * Created by administrative-importUpdateData
 *
 * 上传更新Excel数据,返回后台解析Excel任务ID #杨东锋#
 *
 * @importData 	教育局用户更新导入数据-Body
 */
exports.administrative_importUpdateData = function (data, callback) {
	servers.POST({
		url: "/ums/api/administrative/import_update_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-importUpdateData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End administrative-importUpdateData */



/** 
 * Created by student-getErrorDatas
 *
 * 查询导入解析后错误的Excel数据 #杨东锋#
 *
 * @importTaskId 	导入任务Id-String * @pageNo 	数据页-Number
 */
exports.student_getErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/get_error_datas/"+data.importTaskId+"/"+data.pageNo,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-getErrorDatas",
		query: {
		}
	}, callback);
};
/** End student-getErrorDatas */



/** 
 * Created by administrative-get-excel-response
 *
 * 查询导入/导出状态，文件OSS地址 #杨东锋#20171205#
 *
 * @taskId 	导入/导出任务Id-String
 */
exports.administrative_get_excel_response = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/get_excel_response/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-get-excel-response",
		query: {
		}
	}, callback);
};
/** End administrative-get-excel-response */



/** 
 * Created by parent-downloadExport
 *
 * 批量导出家长用户 #杨东锋#
 *
 * @taskId 	导出任务Id-String
 */
exports.parent_downloadExport = function (data, callback) {
	servers.GET({
		url: "/ums/api/parent/download_export/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-downloadExport",
		query: {
		}
	}, callback);
};
/** End parent-downloadExport */



/** 
 * Created by teacher-downloadErrorDatas
 *
 * 下载解析后错误的Excel数据，返回后台生成Excel的新的任务ID #杨东锋#
 *
 * @importTaskId 	导入任务Id-String
 */
exports.teacher_downloadErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/teacher/download_error_datas/"+data.importTaskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-downloadErrorDatas",
		query: {
		}
	}, callback);
};
/** End teacher-downloadErrorDatas */



/** 
 * Created by UserGroupAccountRelApi-remove
 *
 * 删除用户组与用户关联授权数据 #郑强/#
 *
 * @accountIDs 	用户账号ID集合-Body * @userGroupId 	用户组ID-String
 */
exports.UserGroupAccountRelApi_remove = function (data, callback) {
	servers.POST({
		url: "/ums/api/usergroup-account-rel/remove/"+data.userGroupId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupAccountRelApi-remove",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End UserGroupAccountRelApi-remove */



/** 
 * Created by teacher-findById
 *
 * 根据Id查询用户 #杨东锋#
 *
 * @id 	ID-String
 */
exports.teacher_findById = function (data, callback) {
	servers.GET({
		url: "/ums/api/teacher/find_by_id/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-findById",
		query: {
		}
	}, callback);
};
/** End teacher-findById */



/** 
 * Created by UserGroupApi-remove
 *
 * 逻辑删除一个用户组 #郑强/2017-11-30#
 *
 * @userGroupId 	用户组ID-String
 */
exports.UserGroupApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/ums/api/usergroup/remove/"+data.userGroupId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupApi-remove",
		query: {
		}
	}, callback);
};
/** End UserGroupApi-remove */



/** 
 * Created by parent-exportData
 *
 * 根据区域ID+学段，年级，班级等学生信息+关键字批量导出家长用户 #杨东锋#
 *
 * @studentDTO 	学生DTO对象-Body * @areaId 	区域ID-String * @keyword 	关键字-String
 */
exports.parent_exportData = function (data, callback) {
	servers.POST({
		url: "/ums/api/parent/export_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-exportData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-exportData */



/** 
 * Created by service-resource-getByServiceAndPidOfType
 *
 * 根据服务Id,上级资源ID,资源类型查询服务对应的所有服务资源 #郑强/2017-11-24
 *
 * @serviceId 	服务ID-String * @pid 	上级资源ID-String * @resourceType 	服务ID-Number
 */
exports.service_resource_getByServiceAndPidOfType = function (data, callback) {
	servers.GET({
		url: "/ums/api/service-resource/get_by_service_and_pid_of_type/"+data.serviceId+"/"+data.pid+"/"+data.resourceType,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "service-resource-getByServiceAndPidOfType",
		query: {
		}
	}, callback);
};
/** End service-resource-getByServiceAndPidOfType */



/** 
 * Created by administrative-downloadTemplate
 *
 * 下载新增导入的Excel模板 #杨东锋#20171208#
 *
 */
exports.administrative_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/download_template",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-downloadTemplate"
	}, callback);
};
/** End administrative-downloadTemplate */



/** 
 * Created by TenantServiceRelApi-reopen
 *
 * 重新开启租户的一个应用 #郑强/#
 *
 * @tenantServiceRelId 	租户应用关联对象ID-String
 */
exports.TenantServiceRelApi_reopen = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant-service-rel/reopen/"+data.tenantServiceRelId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantServiceRelApi-reopen",
		query: {
		}
	}, callback);
};
/** End TenantServiceRelApi-reopen */



/** 
 * Created by ServiceApi-modify
 *
 * 修改一个服务 #郑强/2017-11-24
 *
 * @serviceSimpleDTO 	服务数据对象-Body
 */
exports.ServiceApi_modify = function (data, callback) {
	servers.POST({
		url: "/ums/api/service/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ServiceApi-modify */



/** 
 * Created by administrative-update
 *
 * 修改教育局用户 #杨东锋/#
 *
 * @administrativeDTO 	教育局用户AdministrativeDTO对象-Body
 */
exports.administrative_update = function (data, callback) {
	servers.POST({
		url: "/ums/api/administrative/update",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-update",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End administrative-update */



/** 
 * Created by AreaApi-importData
 *
 * 上传Excel数据,返回后台解析Excel任务ID #郑强/#
 *
 * @importData 	Excel导入数据-Body
 */
exports.AreaApi_importData = function (data, callback) {
	servers.POST({
		url: "/ums/api/area/import_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AreaApi-importData */



/** 
 * Created by ServiceApi-remove
 *
 * 删除一个服务 #郑强/2017-11-24
 *
 * @serviceId 	服务ID-String
 */
exports.ServiceApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/ums/api/service/remove/"+data.serviceId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceApi-remove",
		query: {
		}
	}, callback);
};
/** End ServiceApi-remove */



/** 
 * Created by teacher-importSubmit
 *
 * 提交可以导入的数据  #杨东锋#
 *
 * @taskId 	导入任务Id-String
 */
exports.teacher_importSubmit = function (data, callback) {
	servers.POST({
		url: "/ums/api/teacher/import_submit/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-importSubmit",
		query: {
		}
	}, callback);
};
/** End teacher-importSubmit */



/** 
 * Created by teacher-creat
 *
 * 创建老师用户 #杨东锋/#
 *
 * @teacherDTO 	老师用户TeacherDTO对象-Body
 */
exports.teacher_creat = function (data, callback) {
	servers.POST({
		url: "/ums/api/teacher/creat",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-creat",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End teacher-creat */



/** 
 * Created by TenantAdminRelApi-getByTenant
 *
 * 根据租户ID查询一个租户已经授权的管理员列表数据 #郑强/#
 *
 * @tenantId 	租户ID-String
 */
exports.TenantAdminRelApi_getByTenant = function (data, callback) {
	servers.GET({
		url: "/ums/api/tenant-admin-rel/get_by_tenant/"+data.tenantId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantAdminRelApi-getByTenant",
		query: {
		}
	}, callback);
};
/** End TenantAdminRelApi-getByTenant */



/** 
 * Created by UserGroupApi-get
 *
 * 根据用户组ID查询一个用户组 #郑强/2017-11-30#
 *
 * @userGroupId 	用户组ID-String
 */
exports.UserGroupApi_get = function (data, callback) {
	servers.GET({
		url: "/ums/api/usergroup/get/"+data.userGroupId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupApi-get",
		query: {
		}
	}, callback);
};
/** End UserGroupApi-get */



/** 
 * Created by UserGroupAccountRelApi-create
 *
 * 创建用户组与用户关联授权数据 #郑强/#
 *
 * @accountIDs 	用户账号ID集合-Body * @userGroupId 	用户组ID-String
 */
exports.UserGroupAccountRelApi_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/usergroup-account-rel/create/"+data.userGroupId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupAccountRelApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End UserGroupAccountRelApi-create */



/** 
 * Created by AreaApi-findAreaByPid
 *
 * 根据父级ID查询下一级区域 #郑强/2017-11-30#
 *
 * @pid 	父级区域ID-String
 */
exports.AreaApi_findAreaByPid = function (data, callback) {
	servers.GET({
		url: "/ums/api/area/find_by_pid",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-findAreaByPid",
		query: {
			pid: data.pid
		}
	}, callback);
};
/** End AreaApi-findAreaByPid */



/** 
 * Created by AreaApi-remove
 *
 * 删除一个行政区域 #郑强/2017-11-30#
 *
 * @areaId 	行政区域ID-String
 */
exports.AreaApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/ums/api/area/remove/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-remove",
		query: {
		}
	}, callback);
};
/** End AreaApi-remove */



/** 
 * Created by ServiceApi-get
 *
 * 根据服务ID查询一个服务 #郑强/2017-11-24
 *
 * @serviceId 	服务ID-String
 */
exports.ServiceApi_get = function (data, callback) {
	servers.GET({
		url: "/ums/api/service/get/"+data.serviceId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceApi-get",
		query: {
		}
	}, callback);
};
/** End ServiceApi-get */



/** 
 * Created by RoleServiceResourceRelApi-create
 *
 * 创建角色与资源授权关联关系 #郑强/2017-11-24
 *
 * @roleId 	角色ID-String * @serviceResourceIDs 	资源ID集合-Body
 */
exports.RoleServiceResourceRelApi_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/role-serviceresource-rel/create/"+data.roleId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "RoleServiceResourceRelApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End RoleServiceResourceRelApi-create */



/** 
 * Created by UserGroupApi-getByType
 *
 * 查询指定类型的用户组 #郑强/2017-11-30#
 *
 * @userGroupType 	用户组类型-Number
 */
exports.UserGroupApi_getByType = function (data, callback) {
	servers.GET({
		url: "/ums/api/usergroup/get_by_type/"+data.userGroupType,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupApi-getByType",
		query: {
		}
	}, callback);
};
/** End UserGroupApi-getByType */



/** 
 * Created by ServiceResourceApi-getByService
 *
 * 根据服务ID查询服务对应的所有服务资源 #郑强/2017-11-24
 *
 * @serviceId 	服务ID-String
 */
exports.ServiceResourceApi_getByService = function (data, callback) {
	servers.GET({
		url: "/ums/api/service-resource/get_by_service/"+data.serviceId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceResourceApi-getByService",
		query: {
		}
	}, callback);
};
/** End ServiceResourceApi-getByService */



/** 
 * Created by UserGroupAccountRelApi-getByUserGroup
 *
 * 根据用户组ID查询一个用户组与用户关联对象的集合 #郑强/#
 *
 * @userGroupId 	用户组ID-String
 */
exports.UserGroupAccountRelApi_getByUserGroup = function (data, callback) {
	servers.GET({
		url: "/ums/api/usergroup-account-rel/get_by_usergroup/"+data.userGroupId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupAccountRelApi-getByUserGroup",
		query: {
		}
	}, callback);
};
/** End UserGroupAccountRelApi-getByUserGroup */



/** 
 * Created by administrative-exportData
 *
 * 根据区域Id+关键字批量导出教育局用户 #杨东锋#
 *
 * @areaIdAndKeyword 	参数，分页的不用填写-Body
 */
exports.administrative_exportData = function (data, callback) {
	servers.POST({
		url: "/ums/api/administrative/export_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-exportData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End administrative-exportData */



/** 
 * Created by student-creat
 *
 * 创建学生用户 #杨东锋/#
 *
 * @studentDTO 	家长用户studentDTO对象-Body
 */
exports.student_creat = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/creat",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-creat",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End student-creat */



/** 
 * Created by TenantApi-downloadTemplate
 *
 * 下载导入的Excel模板 #郑强/#
 *
 * @level 	导入级别（1:市，2:县，3:校）-String
 */
exports.TenantApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/ums/api/tenant/download_template/"+data.level,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantApi-downloadTemplate",
		query: {
		}
	}, callback);
};
/** End TenantApi-downloadTemplate */



/** 
 * Created by parent-update
 *
 * 修改家长用户 #杨东锋/#
 *
 * @parentDTO 	家长用户ParentDTO对象-Body
 */
exports.parent_update = function (data, callback) {
	servers.POST({
		url: "/ums/api/parent/update",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-update",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-update */



/** 
 * Created by parent-batchEnable_3
 *
 * 批量启用 #杨东锋#
 *
 * @ids 	需要启用的id list-Body
 */
exports.parent_batchEnable_3 = function (data, callback) {
	servers.POST({
		url: "/ums/api/teacher/batch_enable",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-batchEnable_3",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-batchEnable_3 */



/** 
 * Created by TenantServiceRelApi-getByTenant
 *
 * 根据租户ID查询一个租户开通的应用列表数据 #郑强/#
 *
 * @tenantId 	租户ID-String
 */
exports.TenantServiceRelApi_getByTenant = function (data, callback) {
	servers.GET({
		url: "/ums/api/tenant-service-rel/get_by_tenant/"+data.tenantId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantServiceRelApi-getByTenant",
		query: {
		}
	}, callback);
};
/** End TenantServiceRelApi-getByTenant */



/** 
 * Created by tenant-getByArea
 *
 * 根据区域查询区域下的租户数据 #郑强/#
 *
 * @areaId 	租户类型-String
 */
exports.tenant_getByArea = function (data, callback) {
	servers.GET({
		url: "/ums/api/tenant/get_by_area/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "tenant-getByArea",
		query: {
		}
	}, callback);
};
/** End tenant-getByArea */



/** 
 * Created by TenantApi-importSubmit
 *
 * 提交可以导入的数据 #郑强/#
 *
 * @taskId 	导入任务Id-String
 */
exports.TenantApi_importSubmit = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant/import_submit/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantApi-importSubmit",
		query: {
		}
	}, callback);
};
/** End TenantApi-importSubmit */



/** 
 * Created by administrative-importData
 *
 * 上传Excel数据,返回后台解析Excel任务ID #杨东锋#20171206#
 *
 * @importData 	教育局用户增加导入数据-Body
 */
exports.administrative_importData = function (data, callback) {
	servers.POST({
		url: "/ums/api/administrative/import_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End administrative-importData */



/** 
 * Created by parent-excelStatus
 *
 * 查询导入/导出状态 #杨东锋#
 *
 * @taskId 	导入/导出任务Id-String
 */
exports.parent_excelStatus = function (data, callback) {
	servers.GET({
		url: "/ums/api/parent/excel_status/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-excelStatus",
		query: {
		}
	}, callback);
};
/** End parent-excelStatus */



/** 
 * Created by service-resource-getByServiceAndPid
 *
 * 根据服务Id,上级资源ID查询服务对应的所有服务资源 #郑强/2017-11-24
 *
 * @serviceId 	服务ID-String * @pid 	上级资源ID-String
 */
exports.service_resource_getByServiceAndPid = function (data, callback) {
	servers.GET({
		url: "/ums/api/service-resource/get_by_service_and_pid/"+data.serviceId+"/"+data.pid,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "service-resource-getByServiceAndPid",
		query: {
		}
	}, callback);
};
/** End service-resource-getByServiceAndPid */



/** 
 * Created by parent-batchDisable_3
 *
 * 批量禁用 #杨东锋#
 *
 * @ids 	需要禁用的id list-Body
 */
exports.parent_batchDisable_3 = function (data, callback) {
	servers.POST({
		url: "/ums/api/teacher/batch_disable",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-batchDisable_3",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-batchDisable_3 */



/** 
 * Created by parent-findById
 *
 * 根据Id查询用户 #杨东锋#
 *
 * @id 	ID-String
 */
exports.parent_findById = function (data, callback) {
	servers.GET({
		url: "/ums/api/parent/find_by_id/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-findById",
		query: {
		}
	}, callback);
};
/** End parent-findById */



/** 
 * Created by tenant-modify
 *
 * 修改一个租户 #郑强/#
 *
 * @tenantSimpleDTO 	租户数据对象-Body
 */
exports.tenant_modify = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "tenant-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End tenant-modify */



/** 
 * Created by student-update
 *
 * 修改学生用户 #杨东锋/#
 *
 * @studentDTO 	学生用户StudentDTO对象-Body
 */
exports.student_update = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/update",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-update",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End student-update */



/** 
 * Created by UserGroupApi-getComplex
 *
 * 根据用户组ID查询一个用户组(包括授权角色ID集合数据) #郑强/2017-11-30#
 *
 * @userGroupId 	用户组ID-String
 */
exports.UserGroupApi_getComplex = function (data, callback) {
	servers.GET({
		url: "/ums/api/usergroup/get_complex/"+data.userGroupId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupApi-getComplex",
		query: {
		}
	}, callback);
};
/** End UserGroupApi-getComplex */



/** 
 * Created by teacher-importUpdateData
 *
 * 上传更新Excel数据,返回后台解析Excel任务ID #杨东锋#
 *
 * @importData 	老师用户更新导入数据-Body
 */
exports.teacher_importUpdateData = function (data, callback) {
	servers.POST({
		url: "/ums/api/teacher/import_update_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-importUpdateData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End teacher-importUpdateData */



/** 
 * Created by TenantApi-importData
 *
 * 上传Excel数据,返回后台解析Excel任务ID #郑强/#
 *
 * @importData 	Excel导入数据-Body
 */
exports.TenantApi_importData = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant/import_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantApi-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TenantApi-importData */



/** 
 * Created by administrative-getErrorDatas
 *
 * 查询导入解析后错误的Excel数据 #杨东锋#20171205#
 *
 * @importTaskId 	导入任务Id-String * @pageSize 	每页条数- * @pageNo 	数据页-
 */
exports.administrative_getErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/get_error_datas/"+data.importTaskId+"/"+data.pageNo+"/"+data.pageSize,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-getErrorDatas",
		query: {
		}
	}, callback);
};
/** End administrative-getErrorDatas */



/** 
 * Created by AreaApi-getErrorDatas
 *
 * 查询导入解析后错误的Excel数据 #郑强/#
 *
 * @importTaskId 	导入任务Id-String * @pageNo 	数据页-Number
 */
exports.AreaApi_getErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/area/get_error_datas/"+data.importTaskId+"/"+data.pageNo,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-getErrorDatas",
		query: {
		}
	}, callback);
};
/** End AreaApi-getErrorDatas */



/** 
 * Created by account-modifyPwd
 *
 * 修改密码 #杨东锋#
 *
 * @oldPwd 	旧密码-String * @newPwd 	新密码-String
 */
exports.account_modifyPwd = function (data, callback) {
	servers.POST({
		url: "/ums/api/account/modify_pwd",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "account-modifyPwd",
		query: {
		}
	}, callback);
};
/** End account-modifyPwd */



/** 
 * Created by student-importData
 *
 * 上传新增Excel数据,返回后台解析Excel任务ID #杨东锋#
 *
 * @importData 	学生新增用户导入数据-Body
 */
exports.student_importData = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/import_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End student-importData */



/** 
 * Created by parent-batchEnable_1
 *
 * 批量启用 #杨东锋#
 *
 * @ids 	需要启用的id list-Body
 */
exports.parent_batchEnable_1 = function (data, callback) {
	servers.POST({
		url: "/ums/api/parent/batch_enable",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-batchEnable_1",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-batchEnable_1 */



/** 
 * Created by student-findByAreaId
 *
 * 根据区域Id查询学生用户 #杨东锋#
 *
 * @areaId 	areaId-String * @id 	ID-String
 */
exports.student_findByAreaId = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/find_by_area_id/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-findByAreaId",
		query: {
		}
	}, callback);
};
/** End student-findByAreaId */



/** 
 * Created by teacher-deleteById
 *
 * 删除老师用户 #杨东锋/#
 *
 * @id 	ID-String
 */
exports.teacher_deleteById = function (data, callback) {
	servers.GET({
		url: "/ums/api/teacher/delete_by_Id",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-deleteById",
		query: {
			id: data.id
		}
	}, callback);
};
/** End teacher-deleteById */



/** 
 * Created by user-create
 *
 * 创建用户 #杨东锋/#
 *
 * @userDTO 	用户User对象-Body
 */
exports.user_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/user/server/user/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "user-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End user-create */



/** 
 * Created by AreaApi-downloadErrorDatas
 *
 * 下载解析后错误的Excel数据，返回后台生成Excel的新的任务ID #郑强/#
 *
 * @importTaskId 	导入任务Id-String
 */
exports.AreaApi_downloadErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/area/download_error_datas/"+data.importTaskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-downloadErrorDatas",
		query: {
		}
	}, callback);
};
/** End AreaApi-downloadErrorDatas */



/** 
 * Created by ServiceResourceApi-getByServiceAndType
 *
 * 根据服务ID,资源类型查询服务对应的所有服务资源 #郑强/2017-11-24
 *
 * @serviceId 	服务ID-String * @resourceType 	服务ID-Number
 */
exports.ServiceResourceApi_getByServiceAndType = function (data, callback) {
	servers.GET({
		url: "/ums/api/service-resource/get_by_service_and_type/"+data.serviceId+"/"+data.resourceType,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceResourceApi-getByServiceAndType",
		query: {
		}
	}, callback);
};
/** End ServiceResourceApi-getByServiceAndType */



/** 
 * Created by ServiceResourceApi-remove
 *
 * 删除一个服务资源 #郑强/2017-11-24
 *
 * @serviceResourceId 	服务资源ID-String
 */
exports.ServiceResourceApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/ums/api/service-resource/remove/"+data.serviceResourceId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceResourceApi-remove",
		query: {
		}
	}, callback);
};
/** End ServiceResourceApi-remove */



/** 
 * Created by student-findByAreaIdAndKeyword
 *
 * 根据区域Id+关键字查询学生用户 #杨东锋#
 *
 * @areaId 	区域ID-String * @keyword 	关键字-String
 */
exports.student_findByAreaIdAndKeyword = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/find_by_area_id_and_keyword",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-findByAreaIdAndKeyword",
		query: {
		}
	}, callback);
};
/** End student-findByAreaIdAndKeyword */



/** 
 * Created by parent-batchDisable_2
 *
 * 批量禁用 #杨东锋#
 *
 * @ids 	需要禁用的id list-Body
 */
exports.parent_batchDisable_2 = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/batch_disable",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-batchDisable_2",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-batchDisable_2 */



/** 
 * Created by TenantAdminRelApi-remove
 *
 * 取消授权租户管理员 #郑强/#
 *
 * @tenantId 	租户ID-String * @userIDs 	取消授权用户ID集合-Body
 */
exports.TenantAdminRelApi_remove = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant-admin-rel/remove/"+data.tenantId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantAdminRelApi-remove",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TenantAdminRelApi-remove */



/** 
 * Created by ServiceResourceApi-create
 *
 * 创建一个资源 #郑强/2017-11-24
 *
 * @serviceResourceDTO 	服务资源数据对象-Body
 */
exports.ServiceResourceApi_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/service-resource/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceResourceApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ServiceResourceApi-create */



/** 
 * Created by RoleApi-remove
 *
 * 删除一个角色 #郑强/2017-11-24
 *
 * @roleId 	角色ID-String
 */
exports.RoleApi_remove = function (data, callback) {
	servers.DELETE({
		url: "/ums/api/role/remove/"+data.roleId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "RoleApi-remove",
		query: {
		}
	}, callback);
};
/** End RoleApi-remove */



/** 
 * Created by UserGroupApi-getAllUserGroupTypes
 *
 * 获取所有的用户组类型 #郑强/2017-11-30#
 *
 */
exports.UserGroupApi_getAllUserGroupTypes = function (data, callback) {
	servers.GET({
		url: "/ums/api/usergroup/get_all_usergroup_types",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupApi-getAllUserGroupTypes"
	}, callback);
};
/** End UserGroupApi-getAllUserGroupTypes */



/** 
 * Created by teacher-update
 *
 * 修改老师用户 #杨东锋/#
 *
 * @teacherDTO 	老师用户TeacherDTO对象-Body
 */
exports.teacher_update = function (data, callback) {
	servers.POST({
		url: "/ums/api/teacher/update",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-update",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End teacher-update */



/** 
 * Created by parent-findParentByask
 *
 * 根据区域ID+学段，年级，班级等学生信息+关键字分页查询家长list #杨东锋#
 *
 * @studentDTO 	学生DTO对象-Body * @areaId 	区域ID-String * @keyword 	关键字-String * @pageQuery 	分页参数-
 */
exports.parent_findParentByask = function (data, callback) {
	servers.POST({
		url: "/ums/api/parent/find_parent_ask",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-findParentByask",
		body: data.body,
		query: {
			pageQuery: data.pageQuery
		}
	}, callback);
};
/** End parent-findParentByask */



/** 
 * Created by TenantApi-getErrorDatas
 *
 * 查询导入解析后错误的Excel数据 #郑强/#
 *
 * @importTaskId 	导入任务Id-String * @pageNo 	数据页-Number
 */
exports.TenantApi_getErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/tenant/get_error_datas/"+data.importTaskId+"/"+data.pageNo,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantApi-getErrorDatas",
		query: {
		}
	}, callback);
};
/** End TenantApi-getErrorDatas */



/** 
 * Created by administrative-findByAreaId
 *
 * 根据区域Id查询教育局用户 #杨东锋#
 *
 * @areaId 	areaId-String * @id 	ID-String
 */
exports.administrative_findByAreaId = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/find_by_area_id/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-findByAreaId",
		query: {
		}
	}, callback);
};
/** End administrative-findByAreaId */



/** 
 * Created by teacher-downloadTemplate
 *
 * 下载新增导入的Excel模板 #杨东锋#
 *
 */
exports.teacher_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/ums/api/teacher/download_template",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-downloadTemplate"
	}, callback);
};
/** End teacher-downloadTemplate */



/** 
 * Created by administrative-getSuccessDatas
 *
 * 查询导入解析后正确的的Excel数据 #杨东锋#
 *
 * @importTaskId 	导入任务Id-String * @pageSize 	每页条数- * @pageNo 	数据页-
 */
exports.administrative_getSuccessDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/get_success_datas/"+data.importTaskId+"/"+data.pageNo+"/"+data.pageSize,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-getSuccessDatas",
		query: {
		}
	}, callback);
};
/** End administrative-getSuccessDatas */



/** 
 * Created by parent-batchEnable_2
 *
 * 批量启用 #杨东锋#
 *
 * @ids 	需要启用的id list-Body
 */
exports.parent_batchEnable_2 = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/batch_enable",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-batchEnable_2",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-batchEnable_2 */



/** 
 * Created by TenantServiceRelApi-list
 *
 * 租户应用管理列表查询 #郑强/#
 *
 * @tenantServiceQueryDTO 	租户应用管理列表查询参数-Body
 */
exports.TenantServiceRelApi_list = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant-service-rel/list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantServiceRelApi-list",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TenantServiceRelApi-list */



/** 
 * Created by teacher-exportData
 *
 * 根据区域+关键字导出学生用户 #杨东锋#
 *
 * @areaId 	区域ID-String * @keyword 	关键字-String
 */
exports.teacher_exportData = function (data, callback) {
	servers.POST({
		url: "/ums/api/teacher/export_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-exportData",
		query: {
		}
	}, callback);
};
/** End teacher-exportData */



/** 
 * Created by TenantAdminRelApi-create
 *
 * 授权租户管理员 #郑强/#
 *
 * @userID 	userID- * @userIDs 	授权用户ID集合-Body * @tenantId 	租户ID-String
 */
exports.TenantAdminRelApi_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant-admin-rel/create/"+data.tenantId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantAdminRelApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TenantAdminRelApi-create */



/** 
 * Created by TenantApi-downloadTenants
 *
 * 下载课程数据，返回后台生成Excel的的任务ID #郑强/#
 *
 * @tenantQueryDTO 	tenantQueryDTO-Body
 */
exports.TenantApi_downloadTenants = function (data, callback) {
	servers.GET({
		url: "/ums/api/tenant/download_tenants",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantApi-downloadTenants",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TenantApi-downloadTenants */



/** 
 * Created by administrative-findById
 *
 * 根据Id查询教育局用户 #杨东锋#20171208#
 *
 * @id 	ID-String
 */
exports.administrative_findById = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/find_by_id/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-findById",
		query: {
		}
	}, callback);
};
/** End administrative-findById */



/** 
 * Created by AreaApi-listSchools
 *
 * 查询一个行政区域下指定学段的学校 #郑强/#
 *
 * @areaId 	行政区域ID-String * @periodId 	学段ID-String
 */
exports.AreaApi_listSchools = function (data, callback) {
	servers.GET({
		url: "/ums/api/area/list_schools/"+data.areaId+"/"+data.periodId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-listSchools",
		query: {
		}
	}, callback);
};
/** End AreaApi-listSchools */



/** 
 * Created by ServiceApi-create
 *
 * 创建一个服务 #郑强/2017-11-24
 *
 * @serviceSimpleDTO 	服务数据对象-Body
 */
exports.ServiceApi_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/service/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ServiceApi-create */



/** 
 * Created by teacher-findByAreaId
 *
 * 根据区域Id查询老师用户 #杨东锋#
 *
 * @areaId 	areaId-String * @id 	ID-String
 */
exports.teacher_findByAreaId = function (data, callback) {
	servers.GET({
		url: "/ums/api/teacher/find_by_area_id/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-findByAreaId",
		query: {
		}
	}, callback);
};
/** End teacher-findByAreaId */



/** 
 * Created by user-deleteById
 *
 * 删除用户 #杨东锋/#
 *
 * @id 	id-String
 */
exports.user_deleteById = function (data, callback) {
	servers.GET({
		url: "/ums/api/user/server/user/delete_by_Id",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "user-deleteById",
		query: {
			id: data.id
		}
	}, callback);
};
/** End user-deleteById */



/** 
 * Created by teacher-findByAreaIdAndKeyword
 *
 * 根据区域Id+关键字分页查询老师用户 #杨东锋#
 *
 * @areaId 	区域ID-String * @keyword 	关键字-String * @pageQuery 	分页参数-
 */
exports.teacher_findByAreaIdAndKeyword = function (data, callback) {
	servers.POST({
		url: "/ums/api/teacher/find_by_area_id_and_keyword",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-findByAreaIdAndKeyword",
		query: {
			pageQuery: data.pageQuery
		}
	}, callback);
};
/** End teacher-findByAreaIdAndKeyword */



/** 
 * Created by TenantServiceRelApi-close
 *
 * 关闭租户的一个应用 #郑强/#
 *
 * @tenantServiceRelId 	租户应用关联对象ID-String
 */
exports.TenantServiceRelApi_close = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant-service-rel/close/"+data.tenantServiceRelId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantServiceRelApi-close",
		query: {
		}
	}, callback);
};
/** End TenantServiceRelApi-close */



/** 
 * Created by parent-batchDisable
 *
 * 批量禁用 #杨东锋#20171207#
 *
 * @ids 	需要禁用的id list-Body
 */
exports.parent_batchDisable = function (data, callback) {
	servers.POST({
		url: "/ums/api/administrative/batch_disable",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-batchDisable",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-batchDisable */



/** 
 * Created by administrative-deleteById
 *
 * 删除教育局用户 #杨东锋/#
 *
 * @id 	id-String
 */
exports.administrative_deleteById = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/delete_by_Id",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-deleteById",
		query: {
			id: data.id
		}
	}, callback);
};
/** End administrative-deleteById */



/** 
 * Created by student-downloadExporte
 *
 * 批量导出老师用户 #杨东锋#
 *
 * @taskId 	导出任务Id-String
 */
exports.student_downloadExporte = function (data, callback) {
	servers.GET({
		url: "/ums/api/teacher/download_export/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-downloadExporte",
		query: {
		}
	}, callback);
};
/** End student-downloadExporte */



/** 
 * Created by student-importUpdateData
 *
 * 上传更新Excel数据,返回后台解析Excel任务ID #杨东锋#
 *
 * @importData 	学生更新用户导入数据-Body
 */
exports.student_importUpdateData = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/import_update_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-importUpdateData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End student-importUpdateData */



/** 
 * Created by UserGroupAccountRelApi-getByAccount
 *
 * 根据学段ID查询用户组与用户关联对象的集合 #郑强/#
 *
 * @accountId 	账号ID-String
 */
exports.UserGroupAccountRelApi_getByAccount = function (data, callback) {
	servers.GET({
		url: "/ums/api/usergroup-account-rel/get_by_account/"+data.accountId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupAccountRelApi-getByAccount",
		query: {
		}
	}, callback);
};
/** End UserGroupAccountRelApi-getByAccount */



/** 
 * Created by administrative-downloadErrorDatas
 *
 * 下载解析后错误的Excel数据，返回后台生成Excel的新的任务ID #杨东锋#20171206#
 *
 * @importTaskId 	导入任务Id-String
 */
exports.administrative_downloadErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/download_error_datas/"+data.importTaskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-downloadErrorDatas",
		query: {
		}
	}, callback);
};
/** End administrative-downloadErrorDatas */



/** 
 * Created by parent-findParentByAreaIdAndKeyword
 *
 * 根据区域ID+关键字查询家长list #杨东锋#
 *
 * @areaId 	区域ID-String * @keyword 	关键字-String
 */
exports.parent_findParentByAreaIdAndKeyword = function (data, callback) {
	servers.POST({
		url: "/ums/api/parent/find_by_area_id",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-findParentByAreaIdAndKeyword",
		query: {
		}
	}, callback);
};
/** End parent-findParentByAreaIdAndKeyword */



/** 
 * Created by student-downloadErrorDatas
 *
 * 下载解析后错误的Excel数据，返回后台生成Excel的新的任务ID #杨东锋#
 *
 * @importTaskId 	导入任务Id-String
 */
exports.student_downloadErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/download_error_datas/"+data.importTaskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-downloadErrorDatas",
		query: {
		}
	}, callback);
};
/** End student-downloadErrorDatas */



/** 
 * Created by parent-batchEnable
 *
 * 批量启用 #杨东锋#20171207#
 *
 * @ids 	需要启用的id list-Body
 */
exports.parent_batchEnable = function (data, callback) {
	servers.POST({
		url: "/ums/api/administrative/batch_enable",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-batchEnable",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End parent-batchEnable */



/** 
 * Created by parent-findParentByFId
 *
 * 根据学生ID查询家长list #杨东锋#
 *
 * @studentId 	学生ID-String
 */
exports.parent_findParentByFId = function (data, callback) {
	servers.GET({
		url: "/ums/api/parent/find_by_student_id/"+data.studentId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "parent-findParentByFId",
		query: {
		}
	}, callback);
};
/** End parent-findParentByFId */



/** 
 * Created by ServiceRoleRelApi-listServiceAndRoles
 *
 * 查询所有的服务及服务的角色数据 #郑强/2017-11-24
 *
 */
exports.ServiceRoleRelApi_listServiceAndRoles = function (data, callback) {
	servers.GET({
		url: "/ums/api/service-role-rel/list_service_and_roles",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceRoleRelApi-listServiceAndRoles"
	}, callback);
};
/** End ServiceRoleRelApi-listServiceAndRoles */



/** 
 * Created by AreaApi-get
 *
 * 根据行政区域ID查询一个行政区域 #郑强/2017-11-30#
 *
 * @areaId 	行政区域ID-String
 */
exports.AreaApi_get = function (data, callback) {
	servers.GET({
		url: "/ums/api/area/get/"+data.areaId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-get",
		query: {
		}
	}, callback);
};
/** End AreaApi-get */



/** 
 * Created by student-findByGraduateStudentAndKeyword
 *
 * 根据区域+学段，年级，班级等学生属性+关键字分页查询已毕业学生用户 #杨东锋#
 *
 * @studentDTO 	学生dto-Body * @areaId 	区域ID-String * @keyword 	关键字-String * @pageQuery 	分页参数-
 */
exports.student_findByGraduateStudentAndKeyword = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/find_by_graduate_student_and_keyword",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-findByGraduateStudentAndKeyword",
		body: data.body,
		query: {
			pageQuery: data.pageQuery
		}
	}, callback);
};
/** End student-findByGraduateStudentAndKeyword */



/** 
 * Created by student-downloadTemplate
 *
 * 下载新增导入的Excel模板 #杨东锋#
 *
 */
exports.student_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/download_template",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-downloadTemplate"
	}, callback);
};
/** End student-downloadTemplate */



/** 
 * Created by ServiceResourceApi-modify
 *
 * 修改一个服务资源 #郑强/2017-11-24
 *
 * @serviceResourceDTO 	服务资源数据对象-Body
 */
exports.ServiceResourceApi_modify = function (data, callback) {
	servers.POST({
		url: "/ums/api/service-resource/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceResourceApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ServiceResourceApi-modify */



/** 
 * Created by tenant-listByQeury
 *
 * 根据查询条件加载租户列表数据 #郑强/#
 *
 * @pageNo 	当前页-Number
 */
exports.tenant_listByQeury = function (data, callback) {
	servers.GET({
		url: "/ums/api/tenant/list_by_query/"+data.pageNo,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "tenant-listByQeury",
		query: {
		}
	}, callback);
};
/** End tenant-listByQeury */



/** 
 * Created by student-importSubmit
 *
 * 提交可以导入的数据  #杨东锋#
 *
 * @taskId 	导入任务Id-String
 */
exports.student_importSubmit = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/import_submit/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-importSubmit",
		query: {
		}
	}, callback);
};
/** End student-importSubmit */



/** 
 * Created by AreaApi-downloadTemplate
 *
 * 下载导入的Excel模板 #郑强/#
 *
 * @level 	导入级别（1:市，2:县，3:校）-String
 */
exports.AreaApi_downloadTemplate = function (data, callback) {
	servers.GET({
		url: "/ums/api/area/download_template/"+data.level,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-downloadTemplate",
		query: {
		}
	}, callback);
};
/** End AreaApi-downloadTemplate */



/** 
 * Created by administrative-findByAreaIdAndKeyword
 *
 * 根据各级区域Id+关键字分页查询教育局用户 #杨东锋#20171208#
 *
 * @areaIdAndKeyword 	分页参数-Body
 */
exports.administrative_findByAreaIdAndKeyword = function (data, callback) {
	servers.POST({
		url: "/ums/api/administrative/find_by_area_id_and_keyword",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-findByAreaIdAndKeyword",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End administrative-findByAreaIdAndKeyword */



/** 
 * Created by student-findByStudentAndKeyword
 *
 * 根据区域+学段，年级，班级等学生属性+关键字分页查询学生用户 #杨东锋#
 *
 * @studentDTO 	学生dto-Body * @areaId 	区域ID-String * @keyword 	关键字-String * @pageQuery 	分页参数-
 */
exports.student_findByStudentAndKeyword = function (data, callback) {
	servers.POST({
		url: "/ums/api/student/find_by_student_and_keyword",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-findByStudentAndKeyword",
		body: data.body,
		query: {
			pageQuery: data.pageQuery
		}
	}, callback);
};
/** End student-findByStudentAndKeyword */



/** 
 * Created by tenant-create
 *
 * 创建一个租户 #郑强/#
 *
 * @tenantSimpleDTO 	租户数据对象-Body
 */
exports.tenant_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "tenant-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End tenant-create */



/** 
 * Created by teacher-importData
 *
 * 上传新增Excel数据,返回后台解析Excel任务ID #杨东锋#
 *
 * @importData 	老师用户新增导入数据-Body
 */
exports.teacher_importData = function (data, callback) {
	servers.POST({
		url: "/ums/api/teacher/import_data",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "teacher-importData",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End teacher-importData */



/** 
 * Created by UserGroupApi-create
 *
 * 创建一个用户组,并返回创建ID #郑强/2017-11-30#
 *
 * @userGroupComplexDTO 	用户组复杂数据对象-Body
 */
exports.UserGroupApi_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/usergroup/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End UserGroupApi-create */



/** 
 * Created by administrative-downloadExport
 *
 * 批量导出教育局用户 #杨东锋#
 *
 * @taskId 	导出任务Id-String
 */
exports.administrative_downloadExport = function (data, callback) {
	servers.GET({
		url: "/ums/api/administrative/download_exporte/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-downloadExport",
		query: {
		}
	}, callback);
};
/** End administrative-downloadExport */



/** 
 * Created by UserGroupRoleRelApi-getRolesByUserGroup
 *
 * 根据用户组ID查询组内关联角色集合 #郑强/2017-11-30#
 *
 * @userGroupId 	用户组ID-String
 */
exports.UserGroupRoleRelApi_getRolesByUserGroup = function (data, callback) {
	servers.GET({
		url: "/ums/api/usergroup-role-rel/get_roles_by_usergroup/"+data.userGroupId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupRoleRelApi-getRolesByUserGroup",
		query: {
		}
	}, callback);
};
/** End UserGroupRoleRelApi-getRolesByUserGroup */



/** 
 * Created by UserGroupRoleRelApi-getUserGroupsByRole
 *
 * 根据学段ID查询用户组与角色关联的用户组对象的集合 #郑强/2017-11-30#
 *
 * @roleId 	用户ID-String
 */
exports.UserGroupRoleRelApi_getUserGroupsByRole = function (data, callback) {
	servers.GET({
		url: "/ums/api/usergroup-role-rel/get_usergroups_by_role/"+data.roleId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupRoleRelApi-getUserGroupsByRole",
		query: {
		}
	}, callback);
};
/** End UserGroupRoleRelApi-getUserGroupsByRole */



/** 
 * Created by RoleApi-modify
 *
 * 修改一个角色 #郑强/2017-11-24
 *
 * @roleComplexDTO 	角色数据对象-Body
 */
exports.RoleApi_modify = function (data, callback) {
	servers.POST({
		url: "/ums/api/role/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "RoleApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End RoleApi-modify */



/** 
 * Created by student-downloadUpdateTemplate
 *
 * 下载更新导入的Excel模板 #杨东锋#
 *
 */
exports.student_downloadUpdateTemplate = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/download_update_template",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-downloadUpdateTemplate"
	}, callback);
};
/** End student-downloadUpdateTemplate */



/** 
 * Created by RoleApi-create
 *
 * 创建一个角色,并返回创建ID #郑强/2017-11-24
 *
 * @roleComplexDTO 	角色数据对象-Body
 */
exports.RoleApi_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/role/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "RoleApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End RoleApi-create */



/** 
 * Created by AreaApi-importSubmit
 *
 * 提交可以导入的数据 #郑强/#
 *
 * @taskId 	导入任务Id-String
 */
exports.AreaApi_importSubmit = function (data, callback) {
	servers.POST({
		url: "/ums/api/area/import_submit/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-importSubmit",
		query: {
		}
	}, callback);
};
/** End AreaApi-importSubmit */



/** 
 * Created by UserGroupApi-modify
 *
 * 修改一个用户组 #郑强/2017-11-30#
 *
 * @userGroupComplexDTO 	用户组复杂数据对象-Body
 */
exports.UserGroupApi_modify = function (data, callback) {
	servers.POST({
		url: "/ums/api/usergroup/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "UserGroupApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End UserGroupApi-modify */



/** 
 * Created by TenantServiceRelApi-modify
 *
 * 租户一个应用续费 #郑强/#
 *
 * @tenantServiceRelDTO 	租户与服务关联对象数据对象-Body
 */
exports.TenantServiceRelApi_modify = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant-service-rel/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantServiceRelApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TenantServiceRelApi-modify */



/** 
 * Created by administrative-create
 *
 * 创建教育局用户 #杨东锋/#
 *
 * @administrativeDTO 	教育局用户AdministrativeDTO对象-Body
 */
exports.administrative_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/administrative/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End administrative-create */



/** 
 * Created by TenantServiceRelApi-create
 *
 * 租户开通一个应用 #郑强/#
 *
 * @tenantServiceRelDTO 	租户与服务关联对象数据对象-Body
 */
exports.TenantServiceRelApi_create = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant-service-rel/create",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantServiceRelApi-create",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End TenantServiceRelApi-create */



/** 
 * Created by tenant-createComplex
 *
 * 创建一个租户和管理员信息 #郑强/#
 *
 * @tenantComplexDTO 	租户数据对象-Body
 */
exports.tenant_createComplex = function (data, callback) {
	servers.POST({
		url: "/ums/api/tenant/create_complex",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "tenant-createComplex",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End tenant-createComplex */



/** 
 * Created by student-findById
 *
 * 根据Id查询用户 #杨东锋#
 *
 * @id 	ID-String
 */
exports.student_findById = function (data, callback) {
	servers.GET({
		url: "/ums/api/student/find_by_id/"+data.id,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "student-findById",
		query: {
		}
	}, callback);
};
/** End student-findById */



/** 
 * Created by administrative-importSubmit
 *
 * 提交可以导入的数据  #杨东锋#20171207#
 *
 * @taskId 	导入任务Id-String
 */
exports.administrative_importSubmit = function (data, callback) {
	servers.POST({
		url: "/ums/api/administrative/import_submit/"+data.taskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "administrative-importSubmit",
		query: {
		}
	}, callback);
};
/** End administrative-importSubmit */



/** 
 * Created by AreaApi-modify
 *
 * 修改一个行政区域 #郑强/2017-11-30#
 *
 * @areaDTO 	行政区域数据对象-Body
 */
exports.AreaApi_modify = function (data, callback) {
	servers.POST({
		url: "/ums/api/area/modify",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-modify",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End AreaApi-modify */



/** 
 * Created by ServiceApi-all
 *
 * 所有的服务列表 #郑强/2017-11-24
 *
 */
exports.ServiceApi_all = function (data, callback) {
	servers.GET({
		url: "/ums/api/service/all",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ServiceApi-all"
	}, callback);
};
/** End ServiceApi-all */



/** 
 * Created by AreaApi-findRecursiveAreasByPid
 *
 * 根据父级ID查询所有下级区域（递归查询） #郑强/2017-11-30#
 *
 * @pid 	父级区域ID-String
 */
exports.AreaApi_findRecursiveAreasByPid = function (data, callback) {
	servers.GET({
		url: "/ums/api/area/find_recursive_areas_by_pid",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "AreaApi-findRecursiveAreasByPid",
		query: {
			pid: data.pid
		}
	}, callback);
};
/** End AreaApi-findRecursiveAreasByPid */



/** 
 * Created by TenantApi-downloadErrorDatas
 *
 * 下载解析后错误的Excel数据，返回后台生成Excel的新的任务ID #郑强/#
 *
 * @importTaskId 	导入任务Id-String
 */
exports.TenantApi_downloadErrorDatas = function (data, callback) {
	servers.GET({
		url: "/ums/api/tenant/download_error_datas/"+data.importTaskId,
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "TenantApi-downloadErrorDatas",
		query: {
		}
	}, callback);
};
/** End TenantApi-downloadErrorDatas */


