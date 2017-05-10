
var mongoose = require("mongoose");
var config = require("../../common/config");

var mydebug = require("debug")("mydebug:init");


module.exports.showMessage = function (res, title, info, url, type) {
	res.render('message', {
		page: 'message',
		data: {
			title : title,
			info : info,
			url : url,
			type : type
		}
	});
	// res.redirect("/")


};










