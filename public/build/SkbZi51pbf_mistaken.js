/**!
 * 重构微服务-swagger 晓我课堂错题集-mistaken v0.1
 * 接口数量 6
 * http://127.0.0.1:3220/api/list?p_id=BJeZiqk6Wf&v_id=SkbZi51pbf
 *
 * 2017-12-14 14:51:15 (c) sxApi Foundation, Inc.
 *
 **/ 
var servers = require('../../servers');



/** 
 * Created by ErrorLibraryClient-saveGroupPracticeResult
 *
 * 保存组题练习结果 #李超#
 *
 * @paramSaveGroupPracticeResultDTO 	保存组题练习结果传入参数-Body
 */
exports.ErrorLibraryClient_saveGroupPracticeResult = function (data, callback) {
	servers.POST({
		url: "/mistaken/api/error_library/save_group_practice_result",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ErrorLibraryClient-saveGroupPracticeResult",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ErrorLibraryClient-saveGroupPracticeResult */



/** 
 * Created by ErrorLibraryClient-getGroupPractice
 *
 * 组题练习筛选 #李超#
 *
 * @paramGetGroupPracticeDTO 	组题练习筛选传入参数-Body
 */
exports.ErrorLibraryClient_getGroupPractice = function (data, callback) {
	servers.POST({
		url: "/mistaken/api/error_library/get_group_practice",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ErrorLibraryClient-getGroupPractice",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ErrorLibraryClient-getGroupPractice */



/** 
 * Created by ErrorLibraryClient-saveErrorLibraryList
 *
 * 保存或更新错题 #李超#
 *
 * @paramSaveErrorLibraryListDTO 	保存或更新错题传入参数-Body
 */
exports.ErrorLibraryClient_saveErrorLibraryList = function (data, callback) {
	servers.POST({
		url: "/mistaken/api/error_library/save_error_library_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ErrorLibraryClient-saveErrorLibraryList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ErrorLibraryClient-saveErrorLibraryList */



/** 
 * Created by ErrorLibraryClient-getErrorQuestionNum
 *
 * 组题的错题题数查询 #李超#
 *
 * @paramGetErrorQuestionNumDTO 	组题的错题题数查询传入参数-Body
 */
exports.ErrorLibraryClient_getErrorQuestionNum = function (data, callback) {
	servers.POST({
		url: "/mistaken/api/error_library/get_error_question_num",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ErrorLibraryClient-getErrorQuestionNum",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ErrorLibraryClient-getErrorQuestionNum */



/** 
 * Created by ErrorLibraryClient-saveSingleErrorQuestionResult
 *
 * 错题单题重做 #李超#
 *
 * @paramSaveSingleErrorQuestionResultDTO 	错题单题重做传入参数-Body
 */
exports.ErrorLibraryClient_saveSingleErrorQuestionResult = function (data, callback) {
	servers.POST({
		url: "/mistaken/api/error_library/save_single_error_question_result",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ErrorLibraryClient-saveSingleErrorQuestionResult",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ErrorLibraryClient-saveSingleErrorQuestionResult */



/** 
 * Created by ErrorLibraryClient-getErrorQuestionList
 *
 * 分页查询错题列表 #李超#
 *
 * @paramGetErrorQuestionListDTO 	分页查询错题列表传入参数-Body
 */
exports.ErrorLibraryClient_getErrorQuestionList = function (data, callback) {
	servers.POST({
		url: "/mistaken/api/error_library/get_error_question_list",
		token: !data.TOKEN?"":data.TOKEN,
		mock: !data.mock?false:data.mock,
		swaggerId: "ErrorLibraryClient-getErrorQuestionList",
		body: data.body,
		query: {
		}
	}, callback);
};
/** End ErrorLibraryClient-getErrorQuestionList */


