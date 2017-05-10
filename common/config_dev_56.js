var path = require('path');

module.exports = {

	host: 'http://192.168.2.56',
	port: 3300,

	static_host: "http://192.168.2.56:3006",

	debug: true,
	logger_level: 'DEBUG',

	servers: {
		host: '',
		headers: {
			'Content-Type': 'application/json'
		}
	},

	apiFunction: {
		host: 'http://xwcz.sxw.com:3004',
		backUrl: "/api/writeServersApi"
	},

	// mongodb: 'mongodb://lk:lk@192.168.2.56:27017/lk',
	mongodb: 'mongodb://lk:lk@192.168.2.25:27017/lk',
	// mongodb: 'mongodb://192.168.2.56:27016/lk',
	// mongodb: 'mongodb://mongo-ketang:Sxjy.ketang@192.168.2.56:27017/sxw_ku',

	redis: {
		host: '192.168.2.56',
		port: '6379',
		pass: 'Sxw@123456',
		db: 0,
		prefix: 'sess', // 数据表前辍, 默认为 "sess:"
		ttl: 60*60*72 //session失效时间，3天
	},
	maxAge: 1000*60*60*72, // cookie 有效期3天

	webpackServer: {
		open: true,
		host: 'http://127.0.0.1:8282/dist'
	},

	// mock设置 为 true 时，从mock服务器取数据，为 false 时从servers取数据
	mock: {
		open: false,
		host: "http://192.168.2.56:3300/mock/url/",
		headers: {
			'X-Custom-Header': 'Bumbaway atuna',
			'Content-Type': 'application/json'
		},
		saveApiHost: "",
		p_id: "BJxrJ-PBde", // 项目id
		v_id: "SkWSkZwrdl" // 版本id
	}

};
