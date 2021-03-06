$(function(){

	// $("#js_fx_html").text($(".column_api ._left .current a").text());

	// 初始化left_menu
	if($(".column_api ._left .current").hasClass("level_1")){
		console.info("level_1");
		$("._ul_first").hide();
		console.info($(".column_api ._left .current"));
		var uls = $(".column_api ._left .current").next("._ul");
		console.info(uls);
		if(uls){
			uls.show();
		}
	} else if ($(".column_api ._left .current").hasClass("level_2")){
		console.info("level_2");
		$("._ul_first").hide();
		console.info($(".column_api ._left .current"));
		$(".column_api ._left .current").closest("._ul").show();
		$(".column_api ._left .current").closest("._ul").prev("h4").addClass("active, active_1");
	}

	// 展开全部栏目
	$("#js_showall_group").click(function(){
		$(".column_api ._left ul._ul").slideToggle();
		return false;
	});

	// 点击展示
	$(".column_api ._left h4 i.iconfont").click(function(e){
		e.stopPropagation();
		console.info("click iconfont ");
		var $this = $(this).closest("h4");
		if($this.hasClass("level_1")){
			$this.next("._ul").slideToggle();
		}
		$this.toggleClass("active");
		return false;
	});

	// 循环-查看是否有子栏目
	$(".column_api ._left h4").each(function(e){
		if($(this).next("._ul").find("li").length<=0){
			$(this).find("i.iconfont").remove();
		}
	});

	// 删除所有api
	$("#js_del_apis").click(function(){
		var newArray = [];
		$(".api_id").each(function(){
			newArray.push($(this).data("id"));
		});
		$.sx.confirm("确定删除所有api？", "删除api后，将无法恢复。", function(){
			$.ajax({
				url: "/api/removeApisPost",
				type: "POST",
				dataType: "json",
				data: {
					ids: newArray.join(",")
				},
				success: function(data){
					if(data.status==0){
						$.sx.alert("操作成功！");
						setTimeout(function(){
							window.location.reload();
						}, 1500);
					} else {
						$.sx.alert(data.message);
					}
				}
			});
		});
		return false;
	});
	
	
	// 删除本页无栏目的api
	$("#js_del_nogroup_apis").click(function(){
		var newArray = [];
		$(".api_id").each(function(){
			newArray.push($(this).data("id"));
		});
		$.sx.confirm("确定删除本页无栏目的所有api？", "删除api后，将无法恢复。", function(){
			$.ajax({
				url: "/api/removeNogroupApisPost",
				type: "POST",
				dataType: "json",
				data: {
					ids: newArray.join(",")
				},
				success: function(data){
					if(data.status==0){
						$.sx.alert("操作成功！");
						setTimeout(function(){
							window.location.reload();
						}, 1500);
					} else {
						$.sx.alert(data.message);
					}
				}
			});
		});
		return false;
	});
	
	// 扫描本页接口完成情况 js_run_api_complete_state
	$("#js_run_api_complete_state").click(function(){
		var newArray = [];
		$(".api_id").each(function(){
			newArray.push($(this).data("id"));
		});
		var v_id = $(this).data("v_id");
		$.sx.confirm("确定扫描本页所有接口？", "预计耗时5秒！", function(){
			$.sx.progress("正在扫描本页接口完成情况", "数据处理中...");
			
			$.ajax({
				url: "/api/runApiCompleteState",
				type: "POST",
				dataType: "json",
				data: {
					v_id: v_id,
					ids: newArray.join(",")
				},
				success: function(data){
					if(data.status===0){
						$.sx.confirm("恭喜，扫描本页接口完成情况成功！", data.message, function(){
							window.location.reload();
						});
					} else {
						$.sx.alertAutoClosed(data.message, "success");
					}
				}
			});
		});
		return false;
	});
	
	// 导出本页所有api
	$("#js_write_apifunction").click(function(){
		var newArray = [];
		$(".api_id").each(function(){
			newArray.push($(this).data("id"));
		});
		var v_id = $(this).data("v_id");
		// var back_url = $(this).data("back_url");
		if(!localStorage.out_apifunctions_url){
			var back_url = "http://xwcz.sxw.com:3005"
		} else {
			var back_url = localStorage.out_apifunctions_url
			$("#js_input_back_url_hidden").val(back_url)
		}

		$.sx.confirm("确定导出所有api？", "预计耗时5秒！", function(){
			$.sx.progress("导出ApiFunction.js", "数据处理中...");

			$.ajax({
				url: "/makingapi/getServersApiFile",
				type: "POST",
				dataType: "json",
				data: {
					v_id: v_id,
					ids: newArray.join(","),
					b_name: $("#js_before_text_name").val()+" "+$("#js_g_name").val(),
					b_gateway_name: $("#js_g_gateway_name").val(),
					b_vname: $("#js_before_text_vname").val(),
					b_bnumber: $("#js_before_text_vnumber").val(),
					b_host: document.location.href
				},
				success: function(data){
					console.info(data);
					if(data.status==0){
						$.sx.confirm("恭喜，导出ApiFunction.js成功，是否同步到本地？", '<br><br>同步将会覆盖原文件！您也可以点此<a href="/build/'+data.fileName+'_'+$("#js_g_gateway_name").val()+'.js" target="_blank">查看生成的文件</a>，手动进行更新。<br><br>导出地址：<input type="text" class="form-control form-control-inline" value="'+back_url+'" style="width: 300px;" id="js_input_back_url" placeholder="不能为空"><br><br>', function(){
							if(!$("#js_input_back_url_hidden").val()){
								alert("导出地址不能为空！");
							} else {
								localStorage.setItem('out_apifunctions_url', $("#js_input_back_url_hidden").val());
								window.location.href = $("#js_input_back_url_hidden").val()+"/api/updateApis?gateway_name="+$("#js_g_gateway_name").val();
							}
						});
					} else {
						$.sx.alertAutoClosed(data.message,"success");
					}
				}
			});
		});
		return false;
	});
	
	$("#js_get_all_gateways").click(function(){
		if(!localStorage.out_apifunctions_url){
			var back_url = "http://xwcz.sxw.com:3005"
		} else {
			var back_url = localStorage.out_apifunctions_url
			$("#js_input_back_url_hidden").val(back_url)
		}
		
		$.sx.confirm("确定导出所有微服务Api？", "预计耗时5秒！", function(){
			$.sx.progress("导出ApiFunction.js", "数据处理中...");
			
			$.ajax({
				url: "/makingapi/getServersApiFiles",
				type: "POST",
				dataType: "json",
				data: {
					v_id: $("#js_v_id").val(),
					b_name: $("#js_before_text_name").val(),
					b_vname: $("#js_before_text_vname").val(),
					b_host: document.location.href
				},
				success: function(data){
					// 这儿的处理流程和上面的一模一样
					console.info(data);
					if(data.status==0){
						$.sx.confirm("恭喜，导出ApiFunction.js成功，是否同步到本地？", '<br><br>同步将会覆盖原文件！您也可以点此<a href="/build/'+data.fileName+'_'+$("#js_g_gateway_name").val()+'.js" target="_blank">查看生成的文件</a>，手动进行更新。<br><br>导出地址：<input type="text" class="form-control form-control-inline" value="'+back_url+'" style="width: 300px;" id="js_input_back_url" placeholder="不能为空"><br><br>', function(){
							if(!$("#js_input_back_url_hidden").val()){
								alert("导出地址不能为空！");
							} else {
								localStorage.setItem('out_apifunctions_url', $("#js_input_back_url_hidden").val());
								window.location.href = $("#js_input_back_url_hidden").val()+"/api/updateApis?gateway_name="+$("#js_g_gateway_name").val();
							}
						});
					} else {
						$.sx.alertAutoClosed(data.message,"success");
					}
				}
			});
			
		});
		return false;
	});
	

	$("body").on("change", "#js_input_back_url", function(){
		if(!$(this).val()){
			if(!localStorage.out_apifunctions_url){
				$("#js_input_back_url_hidden").val("")
			} else {
				$("#js_input_back_url_hidden").val(localStorage.out_apifunctions_url)
			}
		} else {
			$("#js_input_back_url_hidden").val($(this).val())
		}
	});


	// swagger导入
	$("#js_swagger").click(function(){
		$.sx.dialog({
			opentitle: "swagger导入api",
			html: $("#tpl_swagger").html()
		});
		console.info("click click");
		var tags = $("._left .current").find("a.edit_group");
		console.info($("._left .current"));
		console.info($("._left .current").find("a.edit_group"));
		console.info(tags.data("name"));
		console.info(tags.data("swagger_url"));
		$("#js_import_name").val(tags.data("name"));
		$("#js_import_swagger_url").val(tags.data("swagger_url"));
//		$("#js_import_servers_api_path").val(tags.data("servers_api_path"));
	});

	// 编辑栏目-提交
	$("body").on("click", "#js_submit3", function(){
		$("#js_form3").ajaxSubmit({
			success: function(data) {
				console.info(data);
				if(data.status==0){
					$.sx.dialogClosed();
					$.sx.confirm("导入成功，是否刷新页面？", "swagger导入成功，您可以点此查看<a href='/build/"+data.data+".txt' target='_blank'>导入记录</a>，也可以刷新获取最新数据！", function(){
						window.location.reload();
					});

//					$.sx.alert("swagger导入成功，请刷新页面查看，！");
					/*setTimeout(function(){
					 window.location.reload();
					 }, 1500);*/
				} else {
					$.sx.alert(data.message);
				}
			}
		});
		return false;
	});

	// swagger扫描
	$("#js_swagger_run").click(function(){
		$.sx.dialog({
			opentitle: "swagger扫描，检查是否有重复或无效的api",
			html: $("#tpl_swagger2").html()
		});
		//
		$.ajax({
			url: "/project/getGroupInfo",
			type: "POST",
			dataType: "json",
			data: {
				g_id: $("#js_g_id").val()
			},
			success: function(data){
				if(data.status===0 && data.data && data.data.swagger_url){
					console.info("data ok");
					console.info(data);
					$("#swagger_url_input2").val(data.data.swagger_url);
				} else {
					console.warn(data);
				}
			}
		});
		return false;
	});
	// 提交
	$("body").on("click", "#js_submit4", function(){
		$("#js_form4").ajaxSubmit({
			success: function(data) {
				console.info(data);
				if(data.status==0){
					data = data.data;
					if(data.length>0){
						var html = '<ul class="run_api">';
						for(var i=0;i<data.length;i++){
							html += '<li><a href="/api/detail/'+data[i]+'" target="_blank">'+data[i]+'</a> </li>';
						}
						html += '</ul>';
						$.sx.dialog({
							opentitle: "扫描成功，共检测出"+data.length+"个无效api！",
							html: html
						});
					} else {
						$.sx.alert("扫描成功，没有检测出无效api！");
					}
				} else {
					$.sx.alert(data.message);
				}
			}
		});
		return false;
	});


	// 改变版本号
	$("#js_version_select").change(function(){
		if($("js_g_id").val()){
			window.location.href = "/api/list?p_id="+$("#js_p_id").val()+"&v_id="+$(this).val()+"&g_id="+$("#js_g_id").val();
		} else {
			window.location.href = "/api/list?p_id="+$("#js_p_id").val()+"&v_id="+$(this).val()
		}
	});

	// 创建新栏目
	$("#js_add_group").click(function(){
		$.sx.dialog({
			opentitle: "创建新栏目",
			html: $("#tpl_add_group").html()
		});
		return false;
	});

	// 创建新栏目
	$("#js_edit_group").click(function(){
		$("#js_column_api_left").toggleClass("_left_editer")
		return false;
	});



	// 添加子栏目
	$("a.add_son").click(function(){
		$.sx.dialog({
			opentitle: "创建新版本",
			html: $("#tpl_add_group").html()
		});
		$("#js_father_id").val($(this).data("id"));
		return false;
	});

	// 新建栏目和添加子栏目-提交
	$("body").on("click", "#js_submit", function(){
		$("#js_form").ajaxSubmit({
			success: function(data) {
				console.info(data);
				if(data.status==0){
					$.sx.alert("创建栏目成功，即将刷新页面！");
					setTimeout(function(){
						window.location.reload();
					}, 1500);
				} else {
					$.sx.alert(data.message);
				}
			}
		});
		return false;
	});

	// 编辑栏目
	$("a.edit_group").click(function(){
		$.sx.dialog({
			opentitle: "编辑栏目",
			html: $("#tpl_edit_group").html()
		});
		if($(this).data("edit_children")===1){
			$("#js_edit_group_servers_api_path_box, #js_edit_group_swagger_url_box, #js_edit_group_servers_api_gateway_name").hide();
		} else {
			$("#js_edit_group_servers_api_path_box, #js_edit_group_swagger_url_box, #js_edit_group_servers_api_gateway_name").show();
		}
		$("#edit_group_name").val($(this).data("name"));
		$("#edit_group_group_sort").val($(this).data("sort"));
		$("#edit_group_servers_api_gateway_name").val($(this).data("servers_api_gateway_name"));
		$("#edit_group_servers_api_path").val($(this).data("servers_api_path"));
		$("#edit_group_swagger_url").val($(this).data("swagger_url"));
		$("#edit_group_id").val($(this).data("id"));
		return false;
	});

	// 编辑栏目-提交
	$("body").on("click", "#js_submit2", function(){
		$("#js_form2").ajaxSubmit({
			success: function(data) {
				console.info(data);
				if(data.status==0){
					$.sx.alert("编辑栏目成功，即将刷新页面！");
					setTimeout(function(){
						window.location.reload();
					}, 1500);
				} else {
					$.sx.alert(data.message);
				}
			}
		});
		return false;
	});

	// 删除栏目
	$("a.del_group").click(function(){
		var id = $(this).data("id");
		if($(this).closest("li").hasClass("level_1") && $(this).closest("li").next("li").hasClass("level_2")){
			$.sx.confirm("确定删除该栏目？", "删除栏目后，该栏目所对应的子栏目将同时删除。", function(){
				ajaxDelGroupById(id);
			});
		} else {
			$.sx.confirm("确定删除该栏目？", function(){
				ajaxDelGroupById(id);
			});
		}
		return false;
	});

	// 删除所有子栏目
	$("a.del_son_groups").click(function(){
		var uls = $(this).closest("h4").next("._ul");
		if(uls){
			var newArray = [];
			uls.find("li").each(function(){
				newArray.push($(this).find(".del_group").data("id"));
			});
		}
		if(newArray.length>0){
			var ids = newArray.join(",");


			if($(this).data("edit_noapis_groups")===1){
				// 删除为空的子栏目
				$.sx.confirm("确定删除该栏目下的所有api为空的子栏目？", "删除后，将无法恢复！", function(){
					ajaxDelNoApisGroupByIds(ids);
				});
			} else {
				// 删除所有子栏目
				$.sx.confirm("确定删除该栏目下的所有子栏目？", "删除后，该栏目所对应的子栏目将同时删除。", function(){
					ajaxDelGroupByIds(ids);
				});
			}
		} else {
			$.sx.alert("子栏目为空");
		}
		return false;
	});



	function ajaxDelGroupById(id){
		$.ajax({
			url: "/project/removeGroupPost",
			type: "POST",
			dataType: "json",
			data: {
				id: id
			},
			success: function(data){
				if(data.status==0){
					$.sx.alert("操作成功！");
					setTimeout(function(){
						window.location.reload();
					}, 1500);
				} else {
					$.sx.alert(data.message);
				}
			}
		});
	}

	function ajaxDelGroupByIds(ids){
		$.ajax({
			url: "/project/removeGroupsPost",
			type: "POST",
			dataType: "json",
			data: {
				ids: ids
			},
			success: function(data){
				if(data.status==0){
					$.sx.alert("操作成功！");
					setTimeout(function(){
						window.location.reload();
					}, 1500);
				} else {
					$.sx.alert(data.message);
				}
			}
		});
	}

	function ajaxDelNoApisGroupByIds(ids){
		$.ajax({
			url: "/project/removeNoApisGroupsPost",
			type: "POST",
			dataType: "json",
			data: {
				ids: ids
			},
			success: function(data){
				if(data.status==0){
					$.sx.alert("操作成功！");
					setTimeout(function(){
						window.location.reload();
					}, 1500);
				} else {
					$.sx.alert(data.message);
				}
			}
		});
	}

	// 删除api
	$("a.btn_del_api").click(function(){
		var id = $(this).data("id");
		$.sx.confirm("确定删除api？", "删除api后，将无法恢复。", function(){
			$.ajax({
				url: "/api/removeApiPost",
				type: "POST",
				dataType: "json",
				data: {
					id: id
				},
				success: function(data){
					if(data.status==0){
						$.sx.alert("操作成功！");
						setTimeout(function(){
							window.location.reload();
						}, 1500);
					} else {
						$.sx.alert(data.message);
					}
				}
			});
		});
		return false;
	});

	
	
	
	/*操作api*/
	// 删除api
	$("a.btn_del_api").click(function(){
		var id = $(this).data("id");
		$.sx.confirm("确定删除api？", "删除api后，将无法恢复。", function(){
			$.ajax({
				url: "/api/removeApiPost",
				type: "POST",
				dataType: "json",
				data: {
					id: id
				},
				success: function(data){
					if(data.status==0){
						$.sx.alert("操作成功！");
						setTimeout(function(){
							window.history.go(-1);
						}, 1500);
					} else {
						$.sx.alert(data.message);
					}
				}
			});
		});
		return false;
	});
	
	// 设置api为过期
	$(".js_api_lose").click(function(){
		var id = $(this).data("id");
		$.sx.confirm("确定设置api为过期？", "设置后，可在过期接口栏目中查询到。", function(){
			$.ajax({
				url: "/api/loseApiPost",
				type: "POST",
				dataType: "json",
				data: {
					id: id
				},
				success: function(data){
					if(data.status==0){
						$.sx.alert("操作成功！");
						setTimeout(function(){
							window.history.go(-1);
						}, 1500);
					} else {
						$.sx.alert(data.message);
					}
				}
			});
		});
		return false;
	});
	
	
	
	
});