$(function(){




	/*/!*选择接口*!/*/
	$("#js_xuanzeurl").click(function() {
		$.ajax({
			url:  "/api/getApiList",
			type: 'GET',
			success: function(data) {
				console.info(data);
				var html = '';
				if(data.status==0){
					html += '<ul>';
					for(var i=0;i<data.data.length;i++){
						html += '<li><a href="/api/test?id='+data.data[i].id+'">'+data.data[i].name+'<br>'+data.data[i].url+'</a></li>'
					}
					html += '</ul>';
				}
				$.sx.dialog({
					opentitle: "选择接口",
					layerclass: "lookapi_dialog_list",
					html: html
				});
			},
			complete: function() {
			}
		});
		return false;
	});







	/*
	$("body").on("click", "#js_open_backtxt", function(e){
		if($(this).text()=="添加返回说明"){
			$(this).text("收起返回说明");
			$("li.backtxt").show();
		} else {
			$(this).text("添加返回说明");
			$("li.backtxt").hide();
		}
		return false;
	});

	$("body").on("click", "#js_saveapi", function(e){
		var parametersArray = [];
		$("li.parameter").each(function(){
			parametersArray.push({
				name: $(this).find(".parameter_name").val(),
				type: $(this).find(".parameter_type").val(),
				ismust: $(this).find(".parameter_ismust").val(),
				info: $(this).find(".parameter_info").val(),
				default: $(this).find(".parameter_defaultvalue").val()
			});
		});
		$.ajax({
			url:  "/lookapi/api/writeApi",
			type: 'POST',
			dataType: 'json',
			data: {
				id          : $("#js_apihidden_id").val(),
				name        : $("#js_api_name").val(),
				type		: $("#js_api_type").val(),
				column      : $("#js_api_column").val(),
				requests    : $("#js_api_requests").val(),
				url         : $("#js_api_url").val(),
				parameter   : JSON.stringify(parametersArray),
				parameters  : replaceHTML($("#js_senddata").val()),
				back        : $("#js_backdata").val(),
				description : $("#js_api_description").val(),
				info        : $("#js_api_info").val(),
				backinfo    : $("#js_api_backinfo").val()
			},
			success: function(data) {
				console.info(data);
				if(data.status==0){
					$.sx.dialogClosed();
					$.sx.confirm("保存成功，是否查看该接口？", function(){
						window.location.href="/lookapi/api?id="+data.data;
					});
				} else {
					alert(JSON.stringify(data.message.message));
				}
			},
			complete: function() {
			}
		})
		return false;
	});




	$("#js_writeDAta").click(function(e){
		$.sx.dialog({
			opentitle: "保存接口",
			html: $("#tpl_apihtml").html()
		});
		$("#js_api_name").val($("#js_apihidden_name").val());
		$("#js_api_url").val($("#js_api_url").val());

		$("#js_api_type").val($("#js_apihidden_type").val()==""?0:$("#js_apihidden_type").val());
		$("#js_api_column").val($("#js_apihidden_column").val()==""?0:$("#js_apihidden_column").val());
		$("#js_api_requests").val($("#js_apihidden_requests").val()==""?0:$("#js_apihidden_requests").val());

		$("#js_api_info").val($("#js_apihidden_info").val());
		$("#js_api_backinfo").val($("#js_apihidden_backinfo").val());
		$("#js_api_description").val($("#js_apihidden_description").val());
		try {
			var parameters = JSON.parse(replaceHTML($("#js_senddata").val()));
			var indexs = 0;
			$.each(parameters, function(n, value) {
				var parameter = $('<li class="parameter">'+$("#tpl_parameterhtml").html()+'</li>');
				if(indexs==0){
					parameter.find(".field").text("请求参数：");
				}
				indexs ++;
				parameter.find(".parameter_name").val(n);
				if(typeof(value)=="number"){
					parameter.find(".parameter_type").val(1);
				} else if(typeof(value)=="string"){
					parameter.find(".parameter_type").val(2);
				} else {
					parameter.find(".parameter_type").val(0);
				}
				parameter.find(".parameter_defaultvalue").val(value);
				parameter.insertBefore("#js_add_parameter");
			});
		} catch(error) {
			console.info(error);
		}
		return false;
	});
	*/

	/*测试-发送请求*/
	$("#js_ajax").click(function (e) {
		console.info("clcik");
		console.info(parametersVue.sendData);
			// var jsons = "";
			// if($("#js_senddata").val()!=""){
			// 	jsons = JSON.parse(replaceHTML($("#js_senddata").val()));
			//
			// 	try {
			// 		$("#js_senddata").val(JSON.stringify(jsons, null, "\t"));
			// 	} catch(error) {
			// 		console.info(error);
			// 	}
			// }

		try {
			var jsons = JSON.stringify(parametersVue.sendData);
		} catch(error) {
			console.info(error);
			alert("参数格式错误，无法发送请求！");
			return false;
		}




		$("#data").html("开始请求..");
		$("#js_jsonp").text("");
		$("#js_backdata").val("");

		$("#myform").ajaxSubmit({
			success: function(data) {
				console.info(data);
				if(data.status==0){
					//$("#data").html(JSON.stringify(data.data));
					try {
						$("#js_backdata").val(JSON.stringify(data.data));
						$("#data").JSONView(data.data);
					} catch (error){
						console.info("请求成功，返回结果转为json时失败！");
						// $("#js_backdata").val(data.data);
						$("#data").text(data.data);
					}
				} else if(data.status==-1){
					$("#data").text(data.message+"<br>请设置接口服务器地址或sessionid");
				} else {
					// console.info(data.data.indexOf("jQuery"));

					if(data.data && typeof(data.data)==="string" && data.data.indexOf("jQuery")===0){
						var backs = data.data.split("(")[1].split(")")[0];
						console.info(backs);
						$("#js_jsonp").text("返回数据为jsonp格式");
						$("#js_backdata").val(backs);
						$("#data").JSONView(backs);
					} else if(data.data) {
						if(typeof(data.data)=="object"){
							$("#data").text(data.message+"<br>"+JSON.stringify(data.data));
						} else {
							$("#data").text(data.message+"<br>"+data.data);
						}
					} else {
						$("#data").text(data.message+"<br>");
					}
				}
			}
		});
		return false;
	});

	$('#toggle-btn').on('click', function() {
		$('#data').JSONView('toggle');
		return false;
	});
	$('#toggle-level1-btn').on('click', function() {
		$('#data').JSONView('toggle', 2);
		return false;
	});


	/*去掉换行符和html标签*/
	function replaceHTML(text){
		text = text.replace(/(\n)/g, "");
		text = text.replace(/(\t)/g, "");
		text = text.replace(/(\r)/g, "");
		text = text.replace(/<\/?[^>]*>/g, "");
		text = text.replace(/\s*/g, "");
		return text;
	}
});