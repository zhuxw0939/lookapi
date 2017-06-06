var path = require('path');

module.exports = {

	host: 'http://192.168.2.56',
	port: 3200,

	static_host: "/",

	debug: true,
	logger_level: 'DEBUG',

	// mongodb: 'mongodb://lk:lk@192.168.2.56:27017/lk',
	// mongodb: 'mongodb://192.168.2.56:27016/lk',
	// mongodb: 'mongodb://mongo-ketang:Sxjy.ketang@192.168.2.56:27017/sxw_ku',
	// mongodb: 'mongodb://lk:lkpasw0rd@211.149.151.88:27017/lk?authSource=admin',
	mongodb: 'mongodb://lk:lk@192.168.2.25:27017/lk',

	redis: {
		host: '192.168.2.56',
		port: '6379',
		pass: 'Sxw@123456',
		db: 0,
		prefix: 'sxF:lookapi:sess:', // 数据表前辍, 默认为 "sess:"
		ttl: 60*60*72 //session失效时间，3天
	},
	maxAge: 1000*60*60*72, // cookie 有效期3天

	apiFunction: {
		// host: 'http://xwcz.sxw.com:3004',
		host: 'http://127.0.0.1:6001',
		backUrl: "/api/writeServersApi"
	}

};
