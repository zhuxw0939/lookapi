var path = require('path');

module.exports = {

	host: 'http://127.0.0.1',
	port: 3300,

	static_host: "http://211.149.151.88:3006",

	debug: true,
	logger_level: 'DEBUG',

	servers: {
		host: 'http://120.55.199.115:8881',
		headers: {
			'X-Custom-Header': 'Bumbaway atuna',
			'Content-Type': 'application/json',
			'Cookie': 'sessionid=FC26B24F50DD4D46BC21997A3310498C'
		}
	},

	apiFunction: {
		host: 'http://127.0.0.1:6001',
		backUrl: "/api/writeServersApi"
	},

	mongodb: 'mongodb://lk:lkpasw0rd@211.149.151.88:27017/lk?authSource=admin',

	redis: {
		host: '211.149.151.88',
		port: '6379',
		pass: 'ckteredis',
		db: 5,
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
