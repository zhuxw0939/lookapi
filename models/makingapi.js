
/**
 * Models User.
 */
var eventproxy = require('eventproxy');
var mongoDB = require('../common/mongoDB');
var apiModel = require('../models/api');
var projectModel = require('../models/project');
var logger = require('../common/logger');



/**
 * 生成makingServersApiFunctionCode
 */
exports.makingServersApiFunctionCode = function (id, types, callback) {



	var ep = new eventproxy();
	ep.fail(callback);


	apiModel.getApiById( id, ep.done('getApiData') );
	ep.all('getApiData', function (data) {
		// logger.warn("getApiData back ***");
		projectModel.getGroupById(data.group_id, ep.done('getApiGroupData'))
	});
	ep.all('getApiGroupData', function (data) {
		// logger.warn("getApiGroupData back ***");
		if(!data || !data.father_id){
			ep.emit('getApiFatherGroupData', data);
		} else {
			projectModel.getGroupById(data.father_id, ep.done('getApiFatherGroupData'))
		}
	});

	ep.all('getApiData', 'getApiFatherGroupData', function (data, groupData) {
		if(groupData==undefined || !groupData || (!groupData.servers_api_path || groupData.servers_api_path=="undefined")){
			groupData = "";
		} else {
			groupData = groupData.servers_api_path;
		}

		// 是否对url进行ptah参数替换
		if(1){
			var yesUrl = [];
			var postUrl = data.url;
			// logger.info("start *** *** *** ");
			// logger.info(postUrl);

			// /api/v1/student/find_student/{abcId}/{examId}/{studentId}-{questionId}-{teacherId}
			// /api/v1/student/find_student
			// /api/v1/student/find_student/'+data.examId+'/'+data.studentId
			// /api/v1/student/find_student/'+data.examId+'/'+data.studentId+'-'+data.questionId+'-'+data.teacherId

			var full_url = postUrl.split("/{");
			full_url = full_url[0];

			// 正则查找
			var regtxt = "/{[\\s\\S]*?}/g";
			var URL_REG = eval(regtxt);
			var urlIndex = 0;
			var post_url = postUrl.replace(URL_REG, function(data){
				// logger.info(data);
				urlIndex++;
				//logger.info(index);
				//data = data.replace(/[{|}]/g, "");
				//logger.info(data);

			});
			// logger.info(urlIndex);
			var forIndex = 0;
			post_url = postUrl.replace(URL_REG, function(data){
				forIndex++;
				data = data.replace(/[{|}]/g, "");
				// logger.info(data);
				yesUrl.push(data);
				if(forIndex == urlIndex){
					return '"+data.'+data;
				} else {
					return '"+data.'+data+'+"';
				}
			});
			if(urlIndex==0){
				post_url = '"'+groupData+post_url+'"';
			} else {
				post_url = '"'+groupData+post_url;
			}
			// logger.info(yesUrl);
			// logger.info(full_url);
			// logger.info(post_url);
			// logger.info("end *** *** *** ");
		}

		var apiFunctionName = "";
		if(data.fun_name){
			apiFunctionName = data.fun_name;
		} else if(data.swagger_id){
			apiFunctionName = data.swagger_id.replace(/-/g, "_");
		} else {
			apiFunctionName = data.id;
		}

		var requestType;
		if(data.request_type==1){
			requestType = "POST";
		} else if(data.request_type==2){
			requestType = "GET";
		}  else if(data.request_type==3){
			requestType = "PUT";
		} else if(data.request_type==4){
			requestType = "DELETE";
		} else {
			requestType = "UNSUPPORTEDREQUESTTYPE";
		}
		// logger.info("-------------------data.parameters------------------");
		// logger.info(data.parameters);

		var parametersA = ""; // 参数注释
		var parametersB = []; // 参数判断
		var parametersForm = ""; // 参数传值-form
		var parametersBody = ""; // 参数传值-body
		var parametersSwaggerId = ""; // 参数传值-mock
		var parametersUrls = []; // get或delete请求时/{examId}-{questionId}传参段
		var lastUrls = ''; // 最终传参
		if(data.parameters!=undefined && data.parameters.length>0 && data.parameters[0]!=""){
			parametersForm +=	',\r\n\t\t';
			parametersForm +=			'query: {';
			for(var i=0;i<data.parameters.length;i++){

				// 参数类型
				var parametersD = "";
				if(data.parameters[i].type==1){
					parametersD = "Number"
				} else if(data.parameters[i].type==2){
					parametersD = "String"
				} else if(data.parameters[i].type==3){
					parametersD = "Boolean"
				} else if(data.parameters[i].type==6){
					parametersD = "Body";
					parametersBody = ',\r\n\t\tbody: data.body';
					// parametersBody = ',\r\n\t\tbody: data.'+data.parameters[i].name;
				}
				parametersA += ' * @'+data.parameters[i].name+' 	'+data.parameters[i].info+'-'+parametersD;

				/*if(i==0){
				 parametersB += 'data.'+data.parameters[i].name+'==undefined';
				 } else {
				 parametersB += ' || data.'+data.parameters[i].name+'==undefined';
				 }*/
				if(data.parameters[i].auth!=undefined && data.parameters[i].auth!=0){
					if(data.parameters[i].auth==1){ //非空
						parametersB.push('data.'+data.parameters[i].name+'==undefined');
					} else if(data.parameters[i].auth==2){ //Number
						parametersB.push('!/^[0-9]*$/.test(data.'+data.parameters[i].name+')');
					} else if(data.parameters[i].auth==3){ //整数>0
						parametersB.push('!/^\\+?[1-9][0-9]*$/.test(data.'+data.parameters[i].name+')');
					} else if(data.parameters[i].auth==4){ //String
						parametersB.push('!/^[A-Za-z0-9]+$/.test(data.'+data.parameters[i].name+')');
					} else if(data.parameters[i].auth==5){ //汉字
						parametersB.push('!/^[\\u4e00-\\u9fa5],{0,}$/.test(data.'+data.parameters[i].name+')');
					} else if(data.parameters[i].auth==6){ //身份证号
						parametersB.push('!/^\\d{15}|\\d{}18$/.test(data.'+data.parameters[i].name+')');
					} else if(data.parameters[i].auth==7){ //手机号
						parametersB.push('!/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\\d{8})$/.test(data.'+data.parameters[i].name+')');
					}
				}

				// 参数为body类型
				// if(data.parameters[i].type!=6 || !yesUrl.findIndex(item => item==data.parameters[i].name)==-1){
				if(data.parameters[i].in_type=="query"){
					if(i==data.parameters.length-1){
						parametersForm += '\r\n\t\t\t';
						parametersForm += data.parameters[i].name+': data.'+data.parameters[i].name;
					} else {
						parametersA += '\r\n';
						parametersForm += '\r\n\t\t\t';
						parametersForm += data.parameters[i].name+': data.'+data.parameters[i].name+',';
					}
				}


				// logger.info("findIndex: "+data.parameters[i].name);


				// 这个元素还没有添加到数组中时
				if(yesUrl.findIndex(item => item==data.parameters[i].name)==-1){
					// logger.info("yes");
				} else {
					// logger.info("no");
					parametersUrls.push('+data.'+data.parameters[i].name);
				}

				// if(i==0){
				//
				// 	// parametersUrls += '+data.'+data.parameters[i].name;
				// } else {
				// 	// parametersUrls += '+"-"+data.'+data.parameters[i].name;
				// }

			}
			parametersForm +=	'\r\n\t\t';
			parametersForm +=			'}\r\n';
		} else {
			parametersForm +=			'\r\n';
		}

		parametersUrls = parametersUrls.join('+"-"');

		if(data.url_full!=undefined && data.url_full!=""){
			lastUrls = '"'+data.url_full+'/"'+parametersUrls;
		} else {
			lastUrls = '"'+data.url+'"';
		}
		// 2017.3.7-新加
		lastUrls = post_url;
		if(data.swagger_id!=undefined && data.swagger_id!=""){
			parametersSwaggerId = '"'+data.swagger_id+'"';
		} else {
			parametersSwaggerId = '""';
		}


		// logger.info(parametersB);
		if(parametersB.length==1){
			parametersB = parametersB[0]
		} else if(parametersB.length>1){
			parametersB = parametersB.join(" || ");
		} else {
			parametersB = "";
		}
		// logger.info(parametersB);

		/*exports.rk1MRGyLbce = function (data, callback) {
		 servers.POST({
		 url: "/api/v1/class/find_class_score_line",
		 body: data.examId,
		 form: {
		 examCourseId: data.examCourseId,
		 classLevel: data.classLevel,
		 pageableDto: data.pageableDto
		 }
		 }, callback);
		 };*/

		var txt = '';
		if(types==1){
			txt +=	'\r\n';
			txt +=	'/** \r\n';
			txt +=	' * Created by '+(data.swagger_id?data.swagger_id:data.id);
		}
		txt +=	'\r\n';
		txt +=	' *';
		txt +=	'\r\n';
		txt +=	' * '+data.name+'\r\n';
		txt +=	' *\r\n';
		if(parametersA!=""){
			txt +=	parametersA+'\r\n';
		}
		txt +=	' */\r\n';

		txt +=	'exports.'+apiFunctionName+' = function (data, callback) {';
		if(parametersB!=""){
			txt +=	'\r\n\t';
			txt +=		'if('+parametersB+'){';
			txt +=	'\r\n\t\t';
			txt +=			'return callback("参数错误");';
			txt +=	'\r\n\t';
			txt +=		'}';
		}
		txt +=	'\r\n\t';
		txt +=		'servers.'+requestType+'({\r\n';
		txt +=	'\t\t';
		txt +=			'url: '+lastUrls+'';
		txt +=	',\r\n\t\t';
		txt +=			'token: data.TOKEN!=undefined?data.TOKEN:""';
		txt +=	',\r\n\t\t';
		txt +=			'swaggerId: '+parametersSwaggerId;
		txt +=				parametersBody;
		txt +=				parametersForm;
		txt +=	'\t';
		txt +=		'}, callback);';
		txt +=	'\r\n';
		txt +=	'};';
		txt +=	'\r\n';
		txt +=	'/** ';
		if(types==1){
			txt +=	'End '+(data.swagger_id?data.swagger_id:data.id)+' */';
			txt += '\r\n\r\n\r\n';
		}
		// logger.info(txt);

		callback(null ,{txt: txt, swagger_id: (data.swagger_id?data.swagger_id:data.id)});
	});


	return false;



	apiModel.getApiById(id, function(error, data){

		if(error){
			logger.error(error);
			callback(error);
			return false;
		} else if(!data){
			logger.error("没有找到这个id");
			callback("没有找到这个id");
			return false;
		}




	});

};


/**
 * 生成makingApiFunctionAjaxCode
 */
exports.makingApiFunctionAjaxCode = function (id, callback) {
	// logger.info(id);

	apiModel.getApiById(id, function(error, data) {
		// logger.info(error);
		// logger.info(data);

		var postUrl = "/api/servers/";
		if (data.fun_name){
			postUrl += data.fun_name;
		} else if(data.swagger_id) {
			postUrl += data.swagger_id.replace(/-/g, "_");
		} else {
			postUrl += data.id;
		}

		var parameters = ""; // 参数
		if(data.parameters!=undefined && data.parameters.length>0 && data.parameters[0]!="" ){
			parameters += ', {'+'\r\n';
			for(var i=0;i<data.parameters.length;i++){
				// 参数类型
				var parametersType = "";
				if(data.parameters[i].type==1){
					parametersType = '"Number"'
				} else if(data.parameters[i].type==2){
					parametersType = '"String"'
				} else if(data.parameters[i].type==3){
					parametersType = '"Boolean"'
				} else if(data.parameters[i].type==6){
					parametersType = '"Body"'
				} else {
					parametersType = '""'
				}
				if(i==data.parameters.length-1){
					if(data.parameters[i].type==6){
						parameters += '\tbody: '+parametersType+'\r\n';
					} else {
						parameters += '\t'+data.parameters[i].name+': '+parametersType+'\r\n';
					}
				} else {
					if(data.parameters[i].type==6){
						parameters += '\tbody: '+parametersType+',\r\n';
					} else {
						parameters += '\t'+data.parameters[i].name+': '+parametersType+',\r\n';
					}
				}
			}
			parameters +=	'}';
		}

		var txt = "";
		txt +=	'\r\n';
		txt +=	'// '+data.name+'\r\n';
		txt +=	'this.$http.post("'+postUrl+'"';
		txt +=	parameters;
		txt +=	').then(function(data){'+'\r\n';
		txt +=	'\t'+'data = data.body;'+'\r\n';
		txt +=	'\t'+'if(data.code==200){'+'\r\n';
		txt +=	'\t\t'+'data = data.data;'+'\r\n';
		txt +=	'\t\t'+'console.info(data);'+'\r\n';
		txt +=	'\t\t'+'// do something'+'\r\n';
		txt +=	'\t'+'} else {'+'\r\n';
		txt +=	'\t\t'+'console.warn(data);'+'\r\n';
		txt +=	'\t'+'}'+'\r\n';
		txt +=	'}, function(error){'+'\r\n';
		txt +=	'\t'+'console.error(error);'+'\r\n';
		txt +=	'});'+'\r\n\r\n';

		callback(null ,txt);

	});
};


/**
 * 生成makingApiFunctionNodeCode
 */
exports.makingApiFunctionNodeCode = function (id, callback) {
	// logger.info(id);

	apiModel.getApiById(id, function(error, data) {
		// logger.info(error);
		// logger.info(data);

		var postUrl = "";
		if (data.fun_name){
			postUrl += data.fun_name;
		} else if(data.swagger_id) {
			postUrl += data.swagger_id.replace(/-/g, "_");
		} else {
			postUrl += data.id;
		}

		var parameters = ""; // 参数
		if(data.parameters!=undefined && data.parameters.length>0 && data.parameters[0]!="" ){
			parameters = '\r\n';
			for(var i=0;i<data.parameters.length;i++){
				logger.info(data.parameters[i].type);
				// 参数类型
				var parametersType = "";
				if(data.parameters[i].type==1){
					parametersType = '"Number"'
				} else if(data.parameters[i].type==2){
					parametersType = '"String"'
				} else if(data.parameters[i].type==3){
					parametersType = '"Boolean"'
				} else if(data.parameters[i].type==6){
					// logger.info("yes");
					parametersType = '"Body"'
				} else {
					parametersType = '""'
				}
				if(i==data.parameters.length-1){
					if(data.parameters[i].type==6){
						// logger.info("yes1");
						parameters += '\tbody: '+parametersType+'\r\n';
					} else {
						// logger.info("yes11");
						parameters += '\t'+data.parameters[i].name+': '+parametersType+'\r\n';
					}
				} else {
					if(data.parameters[i].type==6){
						// logger.info("yes2");
						parameters += '\tbody: '+parametersType+',\r\n';
					} else {
						// logger.info("yes22");
						parameters += '\t'+data.parameters[i].name+': '+parametersType+',\r\n';
					}
				}
				// logger.info(parameters);
			}
		}
		// logger.info(parameters);

		var txt = "";
		txt +=	'\r\n';
		txt +=	'// '+data.name+'\r\n';
		txt +=	'serversApi.'+postUrl+'({';
		txt +=	'\r\n\tTOKEN: req.session.user.token,';
		txt +=	parameters;
		txt +=	'}, function(error, data){'+'\r\n';
		txt +=	'\t'+'if(error){'+'\r\n';
		txt +=	'\t\t'+'next(error);'+'\r\n';
		txt +=	'\t'+'} else {'+'\r\n';
		txt +=	'\t\t'+'// do something'+'\r\n';
		txt +=	'\t'+'}'+'\r\n';
		txt +=	'});'+'\r\n\r\n';

		callback(null ,txt);

	});
};





exports.makingServersApiFunctionUrl = function (id, callback) {

	var ep = new eventproxy();
	ep.fail(callback);


	apiModel.getApiById( id, ep.done('getApiData') );
	ep.all('getApiData', function (data) {
		// logger.warn("getApiData back ***");
		projectModel.getGroupById(data.group_id, ep.done('getApiGroupData'))
	});
	ep.all('getApiGroupData', function (data) {
		// logger.warn("getApiGroupData back ***");
		if(!data.father_id){
			ep.emit('getApiFatherGroupData', data);
		} else {
			projectModel.getGroupById(data.father_id, ep.done('getApiFatherGroupData'))
		}
	});

	ep.all('getApiData', 'getApiFatherGroupData', function (data, groupData) {
		if(groupData==undefined || !groupData || (!groupData.servers_api_path || groupData.servers_api_path=="undefined")){
			groupData = "";
		} else {
			groupData = groupData.servers_api_path;
		}

		// 是否对url进行ptah参数替换
		if(1){
			var yesUrl = [];
			var postUrl = data.url;
			// logger.info("start *** *** *** ");
			// logger.info(postUrl);

			// /api/v1/student/find_student/{abcId}/{examId}/{studentId}-{questionId}-{teacherId}
			// /api/v1/student/find_student
			// /api/v1/student/find_student/'+data.examId+'/'+data.studentId
			// /api/v1/student/find_student/'+data.examId+'/'+data.studentId+'-'+data.questionId+'-'+data.teacherId

			var full_url = postUrl.split("/{");
			full_url = full_url[0];

			// 正则查找
			var regtxt = "/{[\\s\\S]*?}/g";
			var URL_REG = eval(regtxt);
			var urlIndex = 0;
			var post_url = postUrl.replace(URL_REG, function(data){
				// logger.info(data);
				urlIndex++;
				//logger.info(index);
				//data = data.replace(/[{|}]/g, "");
				//logger.info(data);

			});
			// logger.info(urlIndex);
			var forIndex = 0;
			post_url = postUrl.replace(URL_REG, function(data){
				forIndex++;
				data = data.replace(/[{|}]/g, "");
				// logger.info(data);
				yesUrl.push(data);
				if(forIndex == urlIndex){
					// return '"+data.'+data;
					return data;
				} else {
					// return '"+data.'+data+'+"';
					return data;
				}
			});
			if(urlIndex==0){
				// post_url = '"'+groupData+post_url+'"';
				post_url = groupData+post_url;
			} else {
				// post_url = '"'+groupData+post_url;
				post_url = groupData+post_url;
			}
			// logger.info(yesUrl);
			// logger.info(full_url);
			// logger.info(post_url);
			// logger.info("end *** *** *** ");
		}

		logger.warn("********************************");
		logger.info(yesUrl);
		logger.info(data.url);
		logger.info(full_url);
		logger.info(post_url);
		logger.info("end *** *** *** ");
		post_url = data.url;

		var queryObj = []; // 参数
		if(data.parameters!=undefined && data.parameters.length>0 && data.parameters[0]!=""){
			for(var i=0;i<data.parameters.length;i++){
				let item = data.parameters[i];
				if(item.in_type=="query"){
					if(item.type==1) {
						item.type = "Number"
					} else if(item.type==2){
						item.type = "String"
					} else if(item.type==3){
						item.type = "Boolean"
					} else if(item.type==6){
						item.type = "Body"
					} else{
						item.type = ""
					}
					queryObj.push(item);
				}
			}
		}
		logger.info(queryObj);
		if(queryObj.length>0){
			var formPropsIndex=0;
			for(var formProps in queryObj){
				if(formPropsIndex==0){
					post_url += "?"+queryObj[formProps].name+"="+'"'+queryObj[formProps].type+'"'
				} else {
					post_url += "&"+queryObj[formProps].name+"="+'"'+queryObj[formProps].type+'"'
				}
				formPropsIndex ++ ;
			}
		}
		logger.info(post_url);

		callback(null , post_url);

	});


	return false;

};