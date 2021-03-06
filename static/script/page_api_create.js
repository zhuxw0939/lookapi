$(function(){
	var vm = new Vue({
		el: '#js_vue',
		delimiters: ['${', '}'],
		data: function() {
			return {
				apiId: $("#js_api_id").val(),
				data: {
					parameters: [],
					request_type: ""
				},
				group: {
					my: {},
					children: {},
					fathers: {}
				},
				versions: [],
				projects: [],
				configOptions: [],
				parameters: []
			}
		},
		created: function() {
			console.info(this.apiId);
			if(!this.apiId){
				// 创建api
				this.ajaxGetCreateDetail();
			} else {
				this.ajaxGetApiDetail(this.apiId);
			}
			
			var new_api_url = localStorage.getItem("new_api_url");
			var new_api_request_type = Number(localStorage.getItem("new_api_request_type"));
			var new_api_body = localStorage.getItem("new_api_body");
			
			if(new_api_url && new_api_request_type){
				console.info("1", new_api_backdate);
				this.data.url = new_api_url;
				this.data.request_type = new_api_request_type;
				// this.data.back_data = new_api_body;
				
				localStorage.removeItem("new_api_url");
				localStorage.removeItem("new_api_request_type");
				// localStorage.removeItem("new_api_body");
			}
			
			window.vm = this;
		},
		methods: {
			onClickAddParameter: function() {
				// 添加新参数
				console.info("onClickAddParameter");
				console.info(this.data.parameters);
				this.data.parameters.push({in_type: '', type: '', ismust: ''})
			},
			onClickAddCallHistory: function() {
				// 添加新参数
				console.info("onClickAddCallHistory");
				console.info(this.data.call_history);
				this.data.call_history.push({site: '', column: '', time: '', user: ''})
			},
			onChangeProject: function(value) {
				console.info("onChangeProject");
				$("#js_p_id").val(value);
				this.ajaxGetProjectVersions(value);
			},
			onChangeVersion: function(value) {
				console.info("onChangeVersion");
				$("#js_v_id").val(value);
				this.ajaxGetGroups(value);
			},
			onChangeGroup: function(value) {
				console.info("onChangeGroup");
				this.ajaxGetGroupChildrens(value);
			},
			ajaxGetProjectVersions: function(p_id) {
				if(!p_id){
					return this.versions = [];
				}
				this.$http.post("/project/getProjectVersions", {
					p_id: p_id
				}).then(function(data){
					data = data.body;
					if(data.status==0){
						data = data.data;
						if(data.length>0){
							this.versions = data;
							this.data.version_id = data[0].id;
							this.ajaxGetGroups(data[0].id);

							this.group.fathers = [];
							this.group.children = [];
							this.group.my.id = "";
							this.group.my.father_id = "";
						}
					} else {
						this.versions = [];
						console.info(data);
						alert(data.message);
					}
				}, function(error){
					console.info("返回失败：");
					console.error(error);
				});
			},
			ajaxGetGroups: function(v_id) {
				this.$http.post("/project/getGroupList", {
					level: "1",
					v_id: v_id
				}).then(function(data){
					data = data.body;
					console.info(data);
					if(data.status==0){
						data = data.data;
						if(data.length>0){
							this.group.fathers = data;
						}
					} else {
						this.group.children = [];
						alert(data.message);
					}
				}, function(error){
					console.info("返回失败：");
					console.error(error);
				});
			},
			ajaxGetGroupChildrens: function(g_id) {
				this.$http.post("/project/getGroupSonList", {
					f_id: g_id
				}).then(function(data){
					data = data.body;
					console.info(data);
					if(data.status==0){
						data = data.data;
						if(data.length>0){
							this.group.children = data;
							this.group.my.id = "";
						}
					} else {
						this.group.children = [];
						console.info(data);
						alert(data.message);
					}
				}, function(error){
					console.info("返回失败：");
					console.error(error);
				});
			},
			ajaxGetApiDetail: function() {
				this.$http.get("/api/get/apiDetail?id="+this.apiId).then(function(data){
					data = data.body;
					console.info(data)
					if(data.status==0){
						data = data.data;
						console.info(data);
						console.info(data.data.parameters);
						this.data = data.data;
						this.group = data.group;
						this.versions = data.versions;
						this.projects = data.projects;
						this.configOptions = data.configOptions;
						
						var new_api_backdate = localStorage.getItem("new_api_backdate");
						console.info("2", new_api_backdate);
						if(new_api_backdate){
							console.info("2", new_api_backdate);
							this.data.mock_template = new_api_backdate;
							localStorage.removeItem("new_api_backdate");
						}
					} else {
						console.info(data);
						alert(data.message);
					}
				}, function(error){
					console.info("返回失败：");
					console.error(error);
				});
			},
			ajaxGetCreateDetail: function() {
				console.info("ajaxGetCreateDetail");
				// 新建api时，根据p_id和v_id获取基本信息
				this.$http.post("/api/get/apiCreate", {
					p_id: $("#js_p_id").val(),
					v_id: $("#js_v_id").val(),
					g_id: $("#js_g_id").val()
				}).then(function(data){
					data = data.body;
					if(data.status==0){
						data = data.data;
						console.info(data);

						this.data.project_id = $("#js_p_id").val();
						// if(!this.data.project_id && data.projects && data.projects.length>0) {
						// 	this.data.project_id = data.projects[0].id;
						// }
						this.data.version_id = $("#js_v_id").val();
						// this.data.request_type = "";
						// this.$set(this.data, 'parameters', []);

						this.group = data.group;
						this.versions = data.versions;
						this.projects = data.projects;
						this.configOptions = data.configOptions;
						
					} else {
						console.info(data);
						alert(data.message);
					}
				}, function(error){
					console.info("返回失败：");
					console.error(error);
				});
			}
		}

	});


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

	// 格式化代码
	$("#js_avs_api_backinfo").click(function(){
		try {
			var myObj = JSON.parse($("#js_api_backinfo").val());
			$("#js_api_backinfo").val( JSON.stringify(myObj, null, "\t") );
		} catch (error) {
			$.sx.alert("不是标准的json格式，请检查！");
		}
		return false;
	});



	var isChangeFunName = false;
	$("body").on("change", "#js_fun_name", function(){
		isChangeFunName = true;
	});

	$("#js_saveapi").click(function(){
		console.info("ac");
		$("#js_form").ajaxSubmit({
			success: function(data) {
				console.info(data);
				if(data.status==0){
					console.info("修改api成功");
					if(isChangeFunName){
						console.info("isChangeFunName 1");

						if(!localStorage.out_apifunctions_url){
							var back_url = "http://xwcz.sxw.com:3005"
						} else {
							var back_url = localStorage.out_apifunctions_url
						}
						back_url += "/api/writeServersApi";
						console.info(back_url);
						$.ajax({
							url: "/makingapi/updateServersApiFile",
							type: "POST",
							dataType: "json",
							data: {
								id: $("#js_api_id").val(),
								swagger_id: $("#js_p_id").val(),
								v_id: $("#js_v_id").val()
							},
							success: function(data){
								console.info(data);
								if(data.status==0){
									console.info("更新ApiFunction.js成功");
									$.sx.confirm("更新ApiFunction.js成功，是否同步到本地？", "同步将会覆盖原函数！", function(){
										window.open(back_url);
										if($("#js_api_id").val()!=""){
											window.location.href='/api/detail/'+$("#js_api_id").val();
										} else {
											window.location.href='/api/list?p_id='+$("#js_p_id").val()+'&v_id='+$("#js_v_id").val()+'';
										}
									}, function(){
										if($("#js_api_id").val()!=""){
											window.location.href='/api/detail/'+$("#js_api_id").val();
										} else {
											window.location.href='/api/list?p_id='+$("#js_p_id").val()+'&v_id='+$("#js_v_id").val()+'';
										}
									});
								} else {
									console.info("更新ApiFunction.jsr失败");
									$.sx.alert(data.message);
								}
							},
							complete: function(o) {
							},
							error: function(o) {
								window.location.href='/api/detail/'+$("#js_api_id").val();
							}
						});
					} else {
						console.info("isChangeFunName 0");
						if($("#js_api_id").val()!=""){
							window.location.href='/api/detail/'+$("#js_api_id").val();
						} else {
							window.location.href='/api/list?p_id='+$("#js_p_id").val()+'&v_id='+$("#js_v_id").val()+'';
						}
					}
				} else if(data.status==3){
					var shtml = '<br>';
					for(var i=0;i<data.data.length;i++){
						shtml+='<a href="/api/detail/'+data.data[i].id+'" target="_blank" style="display: inline-block; font-size: 12px; margin-top: 10px; padding:0 5px;">点击查看</a>';
					}
					$.sx.alert(data.message+shtml);
				} else {
					$.sx.alert(data.message);
				}
			}
		});
		return false;
	});
	
	$("#js_form_tabs a").click(function(){
		if(!$(this).hasClass("current")){
			$(this).addClass("current").siblings("a").removeClass("current");
			$(".sx_content_a, .sx_content_b, .sx_content_c").hide();
			$("."+$(this).data("html")).show();
		}
		return false;
	})
	
	if($("#js_form_tabs_type").val()==1 || $("#js_form_tabs_type").val()==2){
		$("#js_form_tabs a").eq($("#js_form_tabs_type").val()).click();
	}
	
});
