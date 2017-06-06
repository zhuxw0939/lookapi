
/**
 * 认证模块
 */


var eventproxy = require('eventproxy');

var config = require('../common/config');
var userModel = require('../models/user');

var logger = require('../common/logger');


/**
 * 需要管理员权限
 */
exports.adminRequired = function (req, res, next) {
	// if (!req.session.user) {
	// 	return res.render('message', { '你还没有登录。' });
	// }
	//
	// if (!req.session.user.is_admin) {
	// 	return res.render('message', { '需要管理员权限。' });
	// }

	next();
};

/**
 * 需要登录才能访问，跳到登录页面
 */
exports.userMustLogin = function (req, res, next) {
	// 客户端cookies里有user_id并且user_id和session中的一致
	// if(req.cookies && req.session.user && (req.cookies.user_id === req.session.user.id)){
	if(req.session.user){
		next();
	} else if(req.method=="POST") {
		res.send({
			status: -2,
			message: "请登录后再操作"
		});
	} else {
		// 跳至登录页面
		if(req.originalUrl){
			res.redirect("/user/login?backurl="+req.originalUrl);
		} else {
			res.redirect("/user/login");
		}
	}
};

/**
 * 登录后就不能访问，跳到首页，比如注册页面
 */
exports.userMustLogout = function (req, res, next) {
	// 客户端cookies里有user_id并且user_id和session中的一致
	// if(req.cookies && req.session.user && (req.cookies.user_id === req.session.user.id)){
	if(req.session.user){
		// 跳至首页
		res.redirect("/");
	} else {
		next();
	}
};

/**
 * 每次刷新页面时检查登录状态，暂时用于app.js
 * 登录时刷新登录状态，未登录时暂无操作
 */
exports.authUser = function (req, res, next) {

	res.locals.static_host = config.static_host;
	res.locals.query = req.query;

	var myip = "▃▃▃ "+(req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(":").pop()+" ▃▃▃";

	// 如果服务端有session，检查该用户是否登录，刷新cookies
	if(req.session.user){
		// 永远获取最新的用户信息，并放入session中
		userModel.getUserById(req.session.user.id, function(err, data){
			if(err) {
				next(err);
			} else {
				if(data){
					// 设置user信息
					res.locals.user = req.session.user = data;

					// 刷新cookies
					res.cookie('session_id', req.cookies.session_id, {maxAge: config.maxAge});
					// res.cookie('user_id', req.cookies.user_id, {maxAge: config.maxAge});
					logger.debug(myip, '已登录用户:', (req.session.user.id).green);
					next();
				} else {
					logger.debug(myip, '没有查到这个用户');
					delete req.session.user;
					next();
				}
			}
		});
	} else {
		logger.debug(myip, '未登录用户');
		next();
	}

/*


	logger.debug(req.session.user);
	if(req.session.user){
		logger.debug(req.session.user.id);
	}
	next();
	return false;




	if (config.debug && req.cookies['mock_user']) {
		var mockUser = JSON.parse(req.cookies['mock_user']);
		req.session.user = new UserModel(mockUser);
		if (mockUser.is_admin) {
			req.session.user.is_admin = true;
		}
		return next();
	}


	var ep = new eventproxy();
	ep.fail(next);

	ep.all('get_user', function (data) {
		logger.debug("---------------------------get_user------------------------");
		logger.debug(data);
		next();
	});



	// 如果是登录状态，就去获取用户信息
	if (req.session.user){
		logger.debug("---------------------------1------------------------");
		ep.emit('get_user', req.session.user);
	} else {
		logger.debug("---------------------------2------------------------");
		logger.debug(req.cookies.session_id);
		userModel.getUserById(req.cookies.user_id, ep.done('get_user'));

		// return false;
		//
		// var auth_token = req.signedCookies[config.auth_cookie_name];
		// if (!auth_token) {
		// 	return next();
		// }
		//
		// var auth = auth_token.split('$$$$');
		// var user_id = auth[0];
		// UserProxy.getUserById(user_id, ep.done('get_user'));

		// userModel.getUserById(req.cookies.user_id, ep.done('get_user'));
	}
*/
};


/**
 * 写入用户登录session
 */
exports.writeUserSession = function (req, res, data) {
	// 写入session
	req.session.user = data;

	// 将用户的登录id写入cookie
	// res.cookie('user_id', data.id, {maxAge: config.maxAge});
};

/**
 * 删除用户登录session
 */
exports.delUserSession = function (req, res) {
	// 删除session
	delete req.session.user;

	// 删除user用户信息
	// delete res.locals.user;

	// 删除用户的cookie.user_id
	// res.cookie('user_id', "");

};
