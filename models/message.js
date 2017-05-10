
var config = require("../common/config");


// 操作成功
module.exports.success = function (res, title, url, info) {
	res.render('message', {
		pageCurrent: 'message',
		data: {
			type: 'success',
			title: title,
			url: url,
			info: info
		}
	});
};

// 操作失败
module.exports.error = function (res, title, url, info) {
	res.render('message', {
		pageCurrent: 'message',
		data: {
			type: 'error',
			title: title,
			url: url,
			info: info
		}
	});
};

// 提示
module.exports.info = function (res, title, url, info) {
	res.render('message', {
		pageCurrent: 'message',
		data: {
			type: 'error',
			title: title,
			url: url,
			info: info
		}
	});
};







