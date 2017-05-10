var path = require('path');

module.exports = {

	host: 'http://192.168.2.56',
	port: 3100,

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

	redis: {
		host: '192.168.2.56',
		port: '6378',
		pass: '123456',
		db: 8,
		prefix: 'sess', // 数据表前辍, 默认为 "sess:"
		ttl: 60*30 //session失效时间，30分钟
	},
	maxAge: 1000*60*30, // cookie 有效期30分钟

	webpackServer: {
		open: false,
		host: '/dist'
	},

	// mock设置 为 true 时，从mock服务器取数据，为 false 时从servers取数据
	mock: {
		open: true,
		host: "http://192.168.2.56:3300/mock/url/",
		headers: {
			'X-Custom-Header': 'Bumbaway atuna',
			'Content-Type': 'application/json'
		},
		saveApiHost: "http://192.168.2.56:3300/looks/writeApi/",
		p_id: "BJxrJ-PBde", // 项目id
		v_id: "SkWSkZwrdl" // 版本id
	}

};
