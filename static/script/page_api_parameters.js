
var parametersVue;

$(function(){

	/*
	* 绑定事件
	*
	* */

	// 格式化代码
	$("#js_avs_api_back").click(function(){
		try {
			var myObj = JSON.parse($("#js_api_back").val());
			if(typeof(myObj)=="string"){
				myObj = JSON.parse(myObj);
			}
			$("#js_api_back").val( JSON.stringify(myObj, null, "\t") );
		} catch (error) {
			$.sx.alert("不是标准的json格式，请检查！");
		}
		return false;
	});

	// 格式化代码
	$("#js_avs_mock_template").click(function(){
		try {
			var myObj = JSON.parse($("#js_mock_template").val());
			$("#js_mock_template").val( JSON.stringify(myObj, null, "\t") );
		} catch (error) {
			$.sx.alert("不是标准的json格式，请检查！");
		}
		return false;
	});

	// 添加参数
	$("#js_parameters_chose .goright a").click(function(){
		if($(this).hasClass("current")) return false;
		$(this).addClass("current").siblings().removeClass("current");
		if($(this).index()==0){
			$("#js_parameters_box").removeClass("parameters_showjson");
		} else {
			$("#js_parameters_box").addClass("parameters_showjson");
		}
		return false;
	});
	// 添加参数
	$(document).on("click", "#js_add_par", function(){
		parametersVue.parameters.push({});
		// setTimeout(parameterChange, 10);
		return false;
	});
	// 删除参数
	$(document).on("click", "a.del_par_html", function(){
		parametersVue.parameters.splice($(this).closest("li").index(), 1);
		setTimeout(parameterChange, 10);
		return false;
	});

	/*参数发生变化时*/
	$(document).on("change", "input[name=parameter_name], input[name=parameter_defaultvalue]", function(){
		console.info("change -1");
		parameterChange();
	});
	/*参数请求json发生变化时*/
	$(document).on("change", "#js_senddata", function(){
		console.info("change -2");
		sendDataChange();
		MakeParp($(this));
	});
	/*默认格式化一次*/
	MakeParp( $("#js_senddata") );

	/*请求url变化时*/
	$("#js_api_url").change(function(){
		if($(this).val()) $(this).val(getAnalysisUrl($(this).val()));
	});
	$("#js_api_url").change();




	/*
	 * 初始化vue
	 *
	 * */
	var parametersJson = [];
	try {
		// parametersJson = JSON.parse($("#js_parametersinput").val());
		parametersJson = parametersArray;
	} catch(error) {
		console.info("后端返回的参数有错误，不是一个标准json");
		console.info(error);
	}
	// bug
	if(parametersJson.length==1 && parametersJson[0]==""){
		parametersJson = [];
	}
	console.info("vue -------------------------- ++++++++++++++++++++++++++++");
	console.info(parametersArray);
	console.info(parametersJson);
	var sendData = {};
	for(var i=0;i<parametersJson.length;i++) {
		sendData[parametersJson[i].name]=parametersJson[i].default;
		// console.info(parametersJson[i].name);
		// console.info(parametersJson[i].default);
	}
	if($.isEmptyObject(sendData)) sendData = "";
	console.info(sendData);
	console.info("vue -------------------------- ++++++++++++++++++++++++++++");
	console.info(parametersJson);
	console.info(sendData);
	// parametersVue = new Vue({
	// 	el: '#js_parameters_box',
	// 	delimiters: ['${', '}'],
	// 	data: {
	// 		parameters: parametersJson,
	// 		sendData: sendData,
	// 		types: typesJson,
	// 		musts: mustsJson,
	// 		auths : authJson
	// 	}
	// });



	/*
	 * 提供的函数
	 *
	 * */

	// 参数发生变化时
	function parameterChange(){
		if(checkParameters(1)) return false; //如果有重复参数直接返回
		var newObiect = {};
		$("#js_parameters_box li").each(function(){
			newObiect[$(this).find("input[name=parameter_name]").val()] = $(this).find("input[name=parameter_defaultvalue]").val();
		});
		parametersVue.sendData=newObiect;
	}

	// 参数请求json发生变化时
	function sendDataChange(){
		if(checkParameters(-1)) return false; //如果有重复参数直接返回
		try {
			var mysends = JSON.parse(parametersVue.sendData);
		} catch (error){
			console.info(error);
			if($.trim(parametersVue.sendData)!="") {
				alert("参数对象不是一个标准的json格式!");
			}
			return false;
		}
		var myps = parametersVue.parameters;
		if(getPropertyCount(mysends)==myps.length){
			var index = 0;
			for(var item in mysends){
				myps[index].name = item;
				myps[index].default = mysends[item];
				index++;
			}
		} else {
			parametersVue.parameters=[];
			for(var i=0;i<getPropertyCount(mysends);i++){

				var itName = getItemName(i+1, mysends);
				var itValue = mysends[itName];
				var pushObj = {
					name: itName,
					default: itValue
				};
				if(itValue==""){
					pushObj.ismust = 2;
				} else {
					pushObj.ismust = 1;
					if(typeof(itValue)=="number"){
						pushObj.type = 1;
					} else if(typeof(itValue)=="string"){
						pushObj.type = 2;
					} else {
						pushObj.type = 0;
					}
				}
				parametersVue.parameters.push(pushObj);
			}
		}
	}




	/*检查请求参数是否重复*/
	function checkParameters(type){
		var vnames = [];
		var backData ;
		if(type===1){ // 请求参数改变时
			var myps = parametersVue.parameters;
			for(var i=0;i<myps.length;i++){
				vnames.push(myps[i].name);
			}
			backData = isRepeat(vnames);
		} else if(type===-1){ // 参数对象改变时
			try {
				var mysends = JSON.parse(parametersVue.sendData);
				if(parametersVue.sendData.split(",").length===getPropertyCount(mysends)){
					backData = false;
				} else {
					backData = true;
				}
			} catch (error){
				console.info(error);
				return false;
			}
		}
		if(backData){
			alert("请求参数不能重复！");
		}
		return backData;

	}

	/*获取一个对象的所有属性名*/
	function getItemsArr(o){
		var tmpArr = [];
		for(var item in o){
			tmpArr.push(item);
		}
		return tmpArr;
	}
	/*根据index获取对象的某一个属性名*/
	function getItemName(idx, obj){
		return getItemsArr(obj)[idx-1];
	}
	// alert("obj 中第三项的属性名为 :"+ getItemName(3,obj))

	/*获取对象的长度（即属性个数）*/
	function getPropertyCount(o){
		var n, count = 0;
		for(n in o){
			if(o.hasOwnProperty(n)){
				count++;
			}
		}
		return count;
	}

	/*验证数组中是否存在相同的元素*/
	function isRepeat(arr){
		var hash = {};
		for(var i in arr) {
			if(hash[arr[i]])
				return true;
			hash[arr[i]] = true;
		}
		return false;
	}

	/*强制格式化为json*/
	function MakeParp(obj){
		if($.trim(obj.val())=="") return false;
		try {
			obj.val(JSON.stringify(JSON.parse(obj.val()), null, "\t"));
		} catch(error) {
			console.info(error);
			console.info("转化json失败");
		}
	}


	/*分析url*/
	// 一般用于有新的url复制进来后更新参数修改
	function getAnalysisUrl(urls) {
		urls = $.trim(urls);
		if(urls.substr(0,7).toLowerCase()=="http://"){ //过滤http
//			    console.info("yes");
			urls = urls.replace(/^http:\/\//i, '');
			urls = urls.split("/")
//			    console.info(urls);
			urls.shift()
//			    console.info(urls);
			urls = urls.join("/")
//			    console.info(urls);
		} else if(urls.substr(0,8).toLowerCase()=="https://"){
//			    console.info("yes");
			urls = urls.replace(/^https:\/\//i, '');
			urls = urls.split("/")
//			    console.info(urls);
			urls.shift()
//			    console.info(urls);
			urls = urls.join("/")
//			    console.info(urls);
		}
		if(urls.substr(0,1).toLowerCase()!="/") {
			urls = "/"+ urls;
		}
		console.info(urls);

		var url = urls.split("?");
		if(url.length==1){ //不含参数
			return urls;
		} else {
			var parp = url[1].split("&");
			var jsontxt = "{";
			for(i=0;i<parp.length;i++){
				var parpArr = parp[i].split("=");
				if(isNaN(parseInt(parpArr[1]))){
					jsontxt += '"'+parpArr[0]+'": "'+parpArr[1]+'"';
				} else {
					jsontxt += '"'+parpArr[0]+'": '+parpArr[1];
				}
				if(i!=parp.length-1) jsontxt += ','
			}
			jsontxt += '}';
			try {
				console.info("--------------------------------------");

				// 更新参数值
				parametersVue.sendData = JSON.stringify(JSON.parse(jsontxt), null, "\t");

				// 激活change事件，迫使parameter变化
				$("#js_senddata").change();

				// 激活change事件，迫使parameter变化


				// $("#js_senddata").val(JSON.stringify(JSON.parse(jsontxt), null, "\t"));
			} catch (error){
				console.info(error);
				console.info("url参数转json失败");
			}
			return url[0];
		}
	}

});





