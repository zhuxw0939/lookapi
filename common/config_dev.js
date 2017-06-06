var path = require('path');

module.exports = {

	host: 'http://127.0.0.1',
	port: 3200,

	static_host: "/",

	debug: true,
	logger_level: 'DEBUG',

	mongodb: 'mongodb://lk:lkpasw0rd@211.149.151.88:27017/lk?authSource=admin',

	redis: {
		host: '211.149.151.88',
		port: '6379',
		pass: 'ckteredis',
		db: 2,
		prefix: 'sess', // 数据表前辍, 默认为 "sess:"
		ttl: 60*60*72 //session失效时间，3天
	},
	maxAge: 1000*60*60*72, // cookie 有效期3天

	apiFunction: {
		host: 'http://127.0.0.1:6001',
		backUrl: "/api/writeServersApi"
	}

};
