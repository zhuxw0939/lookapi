/**
 * SXUI MODULES
 *
 * DIALOG JS
 *
 * Copyright (c) 2015-2016 生学教育 (http://www.sxw.cn)
 *
 */

;(function($) {

	/*
	 * dialog-弹出窗
	 *
	 */
	$.sx.dialog = function(options){

		this.dialogTIME = 2000;
		this.dialogTIMELOCK = null;
		this.dialogAJAXLOCK = null;

		/* 居中 */
		this.dialogCenter = function(obj) {
			if (obj == undefined || typeof(obj)!="object") obj = $("#js_dialoghtml-box");
			var left = ($.sx.windowWidth() - obj.innerWidth()) / 2;
			var top = ($.sx.windowHeight() - obj.innerHeight()) / 2;
			if (top < 20) top = 20;
			obj.css({
				left: left,
				top: top
			});
			return false;
		};

		/* 关闭 */
		this.dialogClosed = function(type) {
			if ($.sx.documentHeight() > $.sx.windowHeight() && !$("body").hasClass('nocroll')) {
				$("html").css("overflow", "auto");
				$(document.body).css("border-right", '0');
			}

			if (type == 1 || type == "alert") {
				if ($("#js_dialogalert-box").hasClass('alert-animate-slide')) {
					$("#js_dialogalert-box").animate({
						opacity: 0,
						top: $.sx.windowHeight()
					}, 350, function() {
						$("#js_dialogalert-bg").fadeOut(function() {
							$("#js_dialogalert-bg, #js_dialogalert-box").remove();
						});
					});
				} else {
					$("#js_dialogalert-bg, #js_dialogalert-box").remove();
				}
			} else {
				$("#js_dialog-bg, #js_dialog-box").remove();
				$("#js_dialogalert-bg, #js_dialogalert-box").remove();
			}

			clearTimeout($.sx.dialogTIMELOCK);
			return false;
		};


		var defaults = {
			opentype: "html", // iframe, ajax, html, alert  默认为html
			opentitle: "", // false时不显示
			openAnimate: "", // slide, fade  进入动画，默认无
			layerclass: "", // class
			bgcolor: "", // false表示不要背景颜色，否则就是class名
			isbgshow: true, // 是否显示背景框
			isbgclosed: false, // 点击背景会关闭弹出层 默认不关闭
			isabsolute: false, // 默认false为fixed,true为absolute(流式窗口)
			isShowClose: true, // 是否显示关闭按钮
			isHideScrollBar: true, // 是否隐藏滚动条，让滚动条不能滚
			iframeWidth: 800, // 如果是iframe的话
			iframeHeight: 450, // 如果是iframe的话
			iframeSrc: "", // 如果是iframe的话
			ajaxWidth: "", // ajaxWidth
			ajaxHeight: "", // ajaxHeight
			html: ""
		};
		this.options = $.extend(defaults, options);

		// 先删掉可能存在的弹出窗html
		this.dialogClosed(this.options.opentype);
		//this.dialogCenter();


		// 加type的class
		this.options.layerclass += " dialog" + this.options.opentype + "-box";
		// 加fixed的class
		if (this.options.isabsolute === true) this.options.layerclass += " dialog-box-absolute";

		// make html
		var dialogHtml = "";

		var showClose = "";
		if (this.options.isShowClose === true) {
			showClose = '<a href="javascript:void(0)" class="dialog-closed" onClick="$.sx.dialogClosed(' + (this.options.opentype == "alert" ? 1 : "") + ')" title="关闭"><i class="iconfont">&#xe602;</i></a>';
		}

		var showOpentitle = "";
		if (this.options.opentitle !== false) {
			showOpentitle = '<div class="dialog-title">' + this.options.opentitle + '</div>';
		}

		if (this.options.bgcolor === false) {
			this.options.bgcolor = "dialog-bg-no";
		}

		if (this.options.isbgclosed === true) {
			this.options.isbgclosed = ' onClick="$.sx.dialogClosed(' + (this.options.opentype == "alert" ? 1 : "") + ')"';
		} else {
			this.options.isbgclosed = '';
		}

		if (this.options.opentype == "iframe") {
			dialogHtml = '<iframe id="js_dialogframe" name="dialogframe" class="dialogframe" frameborder="0" width="' + this.options.iframeWidth + '" height="' + this.options.iframeHeight + '" src="' + this.options.iframeSrc + '"></iframe>';
		} else if (this.options.opentype == "ajax") {
			dialogHtml = '<div id="js_dialogajax" class="dialogajax" style="width: ' + this.options.ajaxWidth + 'px; height: ' + this.options.ajaxHeight + 'px;"><img src="' + imagePATH + 'img/loading2.gif" class="dialogajax-img"></div>';
		} else {
			if (this.options.html != "") {
				dialogHtml = this.options.html;
			}
		}

		dialogHtml = '<div class="dialog-box ' + this.options.layerclass + '" id="js_dialog' + (this.options.opentype == "alert" ? "alert" : "") + '-box">' + showClose + showOpentitle + '<div class="dialog-content" id="js_dialog' + this.options.opentype + '-content">' + dialogHtml + '</div></div>';


		if (this.options.isbgshow === true) {

			dialogHtml += '<div class="dialog-bg dialog' + this.options.opentype + '-bg ' + this.options.bgcolor + '" id="js_dialog' + (this.options.opentype == "alert" ? "alert" : "") + '-bg"' + this.options.isbgclosed + '></div>';
		}



		// 打开弹出层
		$(dialogHtml).appendTo("body");

		if (this.options.isHideScrollBar == false) {
			//alerts_min 不隐藏滚动条
		} else if ($.sx.documentHeight() > $.sx.windowHeight() && !$("body").hasClass('nocroll')) { //有滚动条
			$("html").css("overflow", "hidden");
			$(document.body).css("border-right", $.sx.getScrollBarWidth() + 'px solid transparent');
		}

		// $('#js_dialog' + this.options.opentype + '-bg, #js_dialog' + this.options.opentype + '-box').show();
		// 居中
		//$.sx.dialogCenter($('#js_dialog' + this.options.opentype + '-box'));

		var obj1 = $('#js_dialog' + (this.options.opentype == "alert" ? "alert" : "") + '-bg');
		var obj2 = $('#js_dialog' + (this.options.opentype == "alert" ? "alert" : "") + '-box');
		if (this.options.openAnimate == "slide") {
			obj1.fadeIn(200, function() {
				obj2.show().css({
					opacity: 0,
					top: $.sx.windowHeight(),
					left: ($.sx.windowWidth() - obj2.innerWidth()) / 2
				}).addClass('alert-animate-slide');
				obj2.animate({
					opacity: 1,
					top: ($.sx.windowHeight() - obj2.innerHeight()) / 2
				}, 350);
			});
		} else if (this.options.openAnimate == "fade") {
			$.sx.dialogCenter(obj2);
			obj1.fadeIn(200);
			obj2.fadeIn(600);
		} else {
			obj1.show();
			obj2.show();
			$.sx.dialogCenter(obj2);
		}

	};


	/* alert */
	$.sx.alert = function(title, txt, type) {
		var html = '';
		html += '<div class="alert-type">';
		if (type == "info" || txt == "info") {
			html += '<span class="info"><i class="iconfont">&#xe654;</i></span>';
		} else if (type == "success" || txt == "success") {
			html += '<span class="success"><i class="iconfont">&#xe601;</i></span>';
		} else if (type == "error" || txt == "error") {
			html += '<span class="error"><i class="iconfont">&#xe602;</i></span>';
		} else if (type == "warning" || txt == "warning") {
			html += '<span class="warning"><i class="iconfont">&#xe616;</i></span>';
		}
		html += '</div>';
		if (txt != undefined) {
			if ((txt == "info" || txt == "success" || txt == "error" || txt == "warning")) {
				html += '<div class="alert-title alert-title-only">' + title + '</div>';
			} else {
				html += '<div class="alert-title">' + title + '</div>';
				html += '<div class="alert-cont">' + txt + '</div>';
			}
		} else {
			html += '<div class="alert-title alert-title-only">' + title + '</div>';
		}
		html += '<div class="alert-btns"><a href="javascript:void(0)" class="btn btn-secondary" onClick="$.sx.dialogClosed(1)">确定</a></div>';
		$.sx.dialog({
			opentype: "alert",
			openAnimate: "slide",
			opentitle: false,
			layerclass: "alert",
			html: html
		});
		return false;
	};

	/* confirm-确认操作 */
	$.sx.confirm = function(title, txt, fun) {
		if ($.isFunction(txt)) {
			fun = txt;
			txt = undefined;
		}
		var html = '';
		if (txt != undefined) {
			if ((txt == "info" || txt == "success" || txt == "error" || txt == "warning")) {
				html += '<div class="alert-title alert-title-only">' + title + '</div>';
			} else {
				html += '<div class="alert-title">' + title + '</div>';
				html += '<div class="alert-cont">' + txt + '</div>';
			}
		} else {
			html += '<div class="alert-title alert-title-only">' + title + '</div>';
		}
		html += '<div class="alert-btns"><a href="javascript:void(0)" class="btn btn-primary" id="js_confirm-fun">确定</a><a href="javascript:void(0)" class="btn btn-secondary" onClick="$.sx.dialogClosed(1)">取消</a></div>';
		$.sx.dialog({
			opentype: "alert",
			opentitle: false,
			openAnimate: "fade",
			layerclass: "alert",
			html: html
		});

		$("#js_confirm-fun").unbind('click').bind("click", function(e) {
			$.sx.dialogClosed(1);
			if ($.isFunction(fun)) {
				fun();
			}
			return false;
		});

		return false;
	};

	/* progress 操作进行中提示 */
	$.sx.progress = function(title, txt) {
		var html = '';
		if (txt != undefined) {
			if ((txt == "info" || txt == "success" || txt == "error" || txt == "warning")) {
				html += '<div class="alert-title alert-title-only">' + title + '</div>';
			} else {
				html += '<div class="alert-title">' + title + '</div>';
				html += '<div class="alert-cont">' + txt + '</div>';
			}
		} else {
			html += '<div class="alert-title alert-title-only">' + title + '</div>';
		}
		if ($.sx.browser.versions.webKit == true) {
			html += '<div class="alert-loading"><span></span><span></span><span></span><span></span><span></span></div>';
		} else {
			html += '<div class="alert-loading-img"><img width="140" height="28" src="' + imagePATH + 'img/loading.gif"></div>';
		}
		$.sx.dialog({
			opentype: "alert",
			openAnimate: "fade",
			isShowClose: false,
			opentitle: false,
			layerclass: "alert",
			html: html
		});
		return false;
	};

	/*自动关闭*/
	$.sx.alertAutoClosed = function(title, type, fun) {
		var html = '';
		html += '<div class="alert-type">';
		if (type == "info") {
			html += '<span class="info"><i class="iconfont">&#xe654;</i></span>';
		} else if (type == "success") {
			html += '<span class="success"><i class="iconfont">&#xe601;</i></span>';
		} else if (type == "error") {
			html += '<span class="error"><i class="iconfont">&#xe602;</i></span>';
		} else if (type == "warning") {
			html += '<span class="warning"><i class="iconfont">&#xe616;</i></span>';
		}
		html += '</div>';
		html += '<div class="alert-title alert-title-only">' + title + '</div>';
		$.sx.dialog({
			opentype: "alert",
			openAnimate: "slide",
			opentitle: false,
			layerclass: "alert",
			html: html
		});

		if ($.isFunction(type)) fun = type;
		clearTimeout($.sx.dialogTIMELOCK);
		$.sx.dialogTIMELOCK = setTimeout(function() {
			$.sx.dialogClosed(1);
			if ($.isFunction(fun)) {
				fun();
			};
			$.sx.dialogTIMELOCK = null;
		}, $.sx.dialogTIME);
		return false;
	};

	/* dialogAjax */
	$.sx.dialogAjax = function(obj) {
		if (typeof(obj) == "string") obj = { url: obj };
		obj = $.extend({
			opentitle: "新建窗口",
			ajaxWidth: "900",
			ajaxHeight: "480",
			url: "",
			type: "get",
			data: "",
			dataType: 'json',
			success: function() {
				// do something
			}
		}, obj);
		console.info(obj);
		$.sx.dialog({
			opentype: "ajax",
			opentitle: obj.opentitle,
			layerclass: obj.layerclass,
			ajaxWidth: obj.ajaxWidth,
			ajaxHeight: obj.ajaxHeight,
			html: ""
		});
		if ($.sx.dialogAJAXLOCK != null) $.sx.dialogAJAXLOCK.abort();
		$.sx.dialogAJAXLOCK = $.ajax({
			url: obj.url,
			type: obj.type,
			data: obj.data,
			dataType: obj.dataType,
			success: function(data) {
				console.info("success");
				console.info(data);
				if ($.sx.dialogAJAXLOCK != null) {
					setTimeout(function() {
						$("#js_dialogajax").html(data.html);
					}, 2000)
				}
			},
			complete: function(o) {
				$.sx.dialogAJAXLOCK = null;
				console.info("complete");
			},
			error: function(o) {
				console.info("error");
				console.info(o);
			}
		});
	};


	/* dialogform */
	$.sx.dialogform = function(obj, fun) {

		var html = '';
		var html_bottom = '';
		var submitid = '';

		$.each(obj, function(k, v) {
			//console.info(k);
			if (v.span != -1) {
				v.span = '<span class="span">' + v.span + '</span>';
			} else {
				v.span = "";
			}
			if (v.type == "form") {
				html += '<form class="dialog-form ' + (v.classname != undefined ? v.classname : "") + '" name="' + (v.name != undefined ? v.name : "") + '" id="' + (v.name != undefined ? "js_" + v.name : "") + '" method="' + (v.method != undefined ? v.method : "") + '" action="' + (v.action != undefined ? v.action : "") + '">';
				html_bottom = '</form>';
			} else if (v.type == "text") {
				html += '<p>' + v.span + '<input class="input ' + (v.classname != undefined ? v.classname : "") + '" type="text" name="' + (v.name != undefined ? v.name : "") + '" id="' + (v.name != undefined ? "js_" + v.name : "") + '" value="' + (v.value != undefined ? v.value : "") + '"></p>';
			} else if (v.type == "textarea") {
				html += '<p>' + v.span + '<textarea class="textarea ' + (v.classname != undefined ? v.classname : "") + '" name="' + (v.name != undefined ? v.name : "") + '" id="' + (v.name != undefined ? "js_" + v.name : "") + '">' + (v.value != undefined ? v.value : "") + '</textarea></p>';
			} else if (v.type == "select") {
				html += '<p>' + v.span + '<select class="select" name="' + (v.name != undefined ? v.name : "") + '" id="' + (v.name != undefined ? "js_" + v.name : "") + '">' + (v.value != undefined ? v.value : "") + '</select></p>';
			} else if (v.type == "checkbox") {
				html += '<p>' + v.span + '' + (v.value != undefined ? v.value : "") + '</p>';
			} else if (v.type == "onlytxt") {
				html += '<p>' + v.span + '' + (v.value != undefined ? v.value : "") + '</p>';
			} else if (v.type == "file") {
				html += '<p>' + v.span + '<input type="file" class="file" name="' + (v.name != undefined ? v.name : "") + '" id="' + (v.name != undefined ? "js_" + v.name : "") + '">';
			} else if (v.type == "file_ajaxload") {
				html += '<p>' + v.span + '<label class="file_box js_file_ajaxup"><label class="file_chose js_file_ajaxup_auto"><input type="text" class="input" autocomplete="off"><input type="button" class="file_browse" value="浏览"><input type="file" class="file" name="file" autocomplete="off"><input type="hidden" value="" class="file_hidden" autocomplete="off"></label><label class="file_up"><input type="submit" class="submit_file" value="上传"></label></label></p>';
			} else if (v.type == "file_ajaxload_auto") {
				html += '<p>' + v.span + '<label class="file_box js_file_ajaxup_auto"><label class="file_chose js_file_ajaxup_auto"><input type="text" class="input" autocomplete="off"><input type="button" class="file_browse" value="浏览"><input type="file" class="file" name="file" autocomplete="off"><input type="hidden" value="" class="file_hidden" autocomplete="off"></label><label class="file_up"></label></label></p>';
			}

		});

		html += '<p class="error_p"><span class="span"> </span><b></b></p>';
		if ($.isFunction(fun)) {
			alerts_form_FUN = fun;
			html += '<p class="submit_p"><span class="span"> </span><a href="javascript:void(0)" onClick="alerts_form_FUN()" class="btns btns_long btns-green">确 定</a> <a href="#" class="btns btns-gray2" value="">取 消</a></p>';
		} else {
			html += '<p class="submit_p"><span class="span"> </span><input type="submit" class="btns btns-green" value="确 定"> <a href="#" class="btns btns-gray2" value="">取 消</a></p>';
		}

		html += html_bottom;
		console.info(html);

		$.sx.dialog({
			opentitle: "新加员工",
			layerclass: obj[0].classname == undefined ? "alerts_form" : "alerts_form alerts_form_" + obj[0].classname,
			html: html
		});

	};




})(jQuery);


/* 窗口大小改变时 */
$(window).resize(function() {

	/* 弹窗自动居中 */
	if ($("#js_dialogalert-box").length) {
		$.sx.dialogCenter($("#js_dialogalert-box"));
	} else if($("#js_dialog-box").length) {
		$.sx.dialogCenter($("#js_dialog-box"));
	}
});
