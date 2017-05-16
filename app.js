
/**
 * Module dependencies.
 */


var colors = require('colors');
var config = require('./common/config');
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var swig = require('swig');

var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var authModel = require('./models/auth');
var logger = require('./common/logger');
var mongooseLog = require('./common/logger-mongoose');
var requestLog = require('./common/logger-request');

var site = require('./routes/site');
var user = require('./routes/user');
var project = require('./routes/project');
var api = require('./routes/api');
var makingApi = require('./routes/makingapi');
var mock = require('./routes/mock');
var looks = require('./routes/looks');

var app = express();

app.use(compression());

// view engine setup
// swig.init();
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
// app.engine('html', ejs);
// app.locals._layoutFile = 'layout.html';
// app.enable('trust proxy'); 反向代理？

// Request logger。请求时间
app.use(requestLog);

// 静态资源
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'static')));

// 通用的中间件
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: false }));
app.use(cookieParser());
app.use(session({
	store: new RedisStore(config.redisStoreOptions),
	name: "session_id",
	secret: 'lookapi-app-secret',
	resave: true,
	saveUninitialized: false,
	cookie: {maxAge: config.maxAge} //20分钟
}));

// auth 验证用户登录状态
app.use(authModel.authUser);




// routes
app.use('/', site);
app.use('/user', user);
app.use('/project', project);
app.use('/api', api);
app.use('/makingApi', makingApi);
app.use('/mock', mock);
app.use('/looks', looks);




// error handler
// if (config.debug) {
// 	// app.use(errorhandler());
// 	app.use(function (err, req, res, next) {
// 		logger.error(err);
// 		return res.status(500).send('500 status');
// 	});
// } else {
// 	app.use(function (err, req, res, next) {
// 		logger.error(err);
// 		return res.status(500).send('500 status');
// 	});
// }


// 错误处理
// app.use(function(req, res, next) {
// 	var err = new Error('Not Found');
// 	err.status = 404;
// 	next(err);
// });


// 开发环境
// if (app.get('env') === 'development') {
// if (app.get('env').indexOf('development')!=-1) {
if (config.debug) {
	app.use(function(err, req, res, next) {
		logger.error(err);
		if(err.status === 404){
			res.status(err.status || 404);
			res.render('404', {
				env: "development",
				message: err.message,
				error: err
			});
		} else {
			res.status(err.status || 500);
			res.render('500', {
				env: "development",
				message: err.message,
				error: err
			});
		}
	});
}

// 生产环境
// app.use(function(err, req, res, next) {
// 	res.status(err.status || 500);
// 	res.render('500', {
// 		env: "production",
// 		message: err.message,
// 		error: {}
// 	});
// });



// start
if (!module.parent) {
	app.listen(config.port, function () {
		logger.info('Listen on provided ' + config.host + ' port:' + config.port);
	});
}

module.exports = app;


