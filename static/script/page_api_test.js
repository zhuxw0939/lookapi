$(function(){
	var vm = new Vue({
		el: '#js_vue',
		delimiters: ['${', '}'],
		data: function() {
			return {
				apiId: $("#js_api_id").val(),
				data: {
					parameters: []
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
		},
		methods: {
			onClickAddParameter: function() {
				// 添加新参数
				console.info("onClickAddParameter");
				console.info(this.data.parameters);
				this.data.parameters.push({in_type: '', type: '', ismust: ''})
			},
			onChangeProject: function(value) {
				console.info("onChangeProject");
				this.ajaxGetProjectVersions(value);
			},
			onChangeVersion: function(value) {
				console.info("onChangeVersion");
				this.ajaxGetGroups(value);
			},
			onChangeGroup: function(value) {
				console.info("onChangeGroup");
				this.ajaxGetGroupChildrens(value);
			},
			ajaxGetProjectVersions: function(p_id) {
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
			}
		}

	});



	var isChangeFunName = false;
	$("body").on("change", "#js_fun_name", function(){
		isChangeFunName = true;
	});

	$("#js_saveapi").click(function(){
		$("#js_form").ajaxSubmit({
			success: function(data) {
				console.info(data);
				if(data.status==0){
					$.sx.alert("api修改成功，即将刷新页面！");
					setTimeout(function(){
						if(isChangeFunName){
							if($("#js_api_id").val()!=""){
								window.location.href='/api/detail/'+$("#js_api_id").val()+'?is_change=1';
							} else {
								window.location.href='/api/list?is_change=1&p_id='+$("#js_p_id").val()+'&v_id='+$("#js_v_id").val()+'';
							}
						} else {
							if($("#js_api_id").val()!=""){
								window.location.href='/api/detail/'+$("#js_api_id").val();
							} else {
								window.location.href='/api/list?p_id='+$("#js_p_id").val()+'&v_id='+$("#js_v_id").val()+'';
							}
						}
					}, 1500);
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
});
