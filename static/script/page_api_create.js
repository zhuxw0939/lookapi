$(function(){






	$("#js_group_select").change(function(){
		ajaxGetGroupSonList($(this).val());
	});
	if(!$("#js_groupson_select").val()){
		ajaxGetGroupSonList($("#js_group_select").val());
	}

	function ajaxGetGroupSonList(g_id){
		if(!g_id){
			console.info("g_id不能为空");
			return false;
		}
		$.ajax({
			url: "/project/getGroupSonList",
			type: "POST",
			dataType: "json",
			data: {
				f_id: g_id
			},
			success: function(data){
				if(data.status==0){
					data = data.data;
					if(data.length==0){
						$("#js_groupson_select").hide();
						return false;
					}
					var html = '<option value="">--选择栏目--</option>';
					for(var i=0;i<data.length;i++){
						html += '<option value="'+data[i].id+'">'+data[i].name+'</option>'
					}
					$("#js_groupson_select").html(html).show();
				} else {
					console.info(data.message);
				}
			}
		});
	}






	/*这个两个页面都要用的js*/
	// console.info(localStorage.getItem("api_id"));
	// console.info(localStorage.getItem("api_url"));
	// console.info(localStorage.getItem("api_request_type"));
	// console.info(localStorage.getItem("api_parameters"));
	// console.info(localStorage.getItem("api_back_data"));

	// var api_id = '{{data.id}}';
	var api_id = $("#js_api_id").val();
	console.info(api_id);

	// 保存刚调试过的接口，把返回值及参数带过来
	if( api_id!=undefined){
		if(api_id==localStorage.getItem("api_id")){
			console.info("update old");

			// $("#js_api_url").val(localStorage.getItem("api_url"));
			$("#js_mock_template").val(localStorage.getItem("api_back_data"));
/*

			try {
				var myjson = JSON.parse(localStorage.getItem("api_parameters"));
			} catch (error){
				console.info(error);
				return false;
			}

			console.info(myjson);
			var myArray = [];
			for(var prop in myjson){
				myArray.push({
					name: prop,
					default: myjson[prop]
				});
			}
			console.info(myArray);
*/

			// $("#js_parametersinput").val(JSON.stringify(myArray));
		} else if(api_id==0){
			console.info("create new");

			/*和上面一样的*/
			// $("#js_api_url").val(localStorage.getItem("api_url"));
			$("#js_mock_template").val(localStorage.getItem("api_back_data"));

			/*try {
				var myjson = JSON.parse(localStorage.getItem("api_parameters"));
			} catch (error){
				console.info(error);
				return false;
			}
			console.info(myjson);
			var myArray = [];
			for(var prop in myjson){
				myArray.push({
					name: prop,
					default: myjson[prop]
				});
			}
			console.info(myArray);*/

			// $("#js_parametersinput").val(JSON.stringify(myArray));
			// parametersArray = myArray;
		} else {
			console.info("id错误，不执行任何操作");
			//return false;
		}
	}



});





