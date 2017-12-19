
var path = require('path');
var logger = require('./logger');

var siteConfig;
if(process.env.NODE_ENV === 'development') {
	// 本地开发环境
	siteConfig = require('./config.development');
} else if(process.env.NODE_ENV === 'test') {
	// 211.149.151.88
	siteConfig = require('./config.test');
} else {
	// 线上环境
	siteConfig = require('./config.development');
}

module.exports = {

	// 域名
	host: siteConfig.host,
	// 程序运行的端口
	port: siteConfig.port,
	// 项目名称
	name: "lookapi.cn",
	// 版本号
	v: "0.1.2",

	// debug 为 true 时，用于node后端本地windows开发环境调试
	debug: siteConfig.debug,
	logger_level: siteConfig.logger_level,

	static_host: siteConfig.static_host,

	// 往客户端写cookies的生效时间
	maxAge: siteConfig.maxAge, // cookie 有效期30分钟

	mongodb: {
		host: siteConfig.mongodb,
		// dir: "lk_"
		dir: "sx_lk_"
	},

	// Redis
	redis: {
		host: siteConfig.redis.host,
		port: siteConfig.redis.port,
		pass: siteConfig.redis.pass
	},
	redisStoreOptions: {
		host: siteConfig.redis.host,
		port: siteConfig.redis.port,
		pass: siteConfig.redis.pass,
		db: Number(siteConfig.redis.db),
		prefix: siteConfig.redis.prefix,
		ttl: siteConfig.redis.ttl
	},
	redisClientOptions: {
		host: siteConfig.redis.host,
		port: siteConfig.redis.port,
		password: siteConfig.redis.pass,
		db: Number(siteConfig.redis.db)
	},

	// apiFunction
	apiFunction: siteConfig.apiFunction,

	options: {
		apiRequestType: [
			{
				name: "--请选择--",
				value: ""
			}, {
				name: "POST",
				value: 1
			}, {
				name: "GET",
				value: 2
			}, {
				name: "PUT",
				value: 3
			}, {
				name: "DELETE",
				value: 4
			}, {
				name: "HEAD",
				value: 5
			}, {
				name: "OPTIONS",
				value: 6
			}, {
				name: "PATCH",
				value: 7
			}
		],
		apiParametersInType: [
			{
				name: "--请选择--",
				value: ""
			}, {
				name: "path",
				value: "path"
			}, {
				name: "query",
				value: "query"
			}, {
				name: "body",
				value: "body"
			}, {
				name: "form",
				value: "form"
			}
		],
		apiParametersType: [
			{
				name: "--请选择--",
				value: ""
			}, {
				name: "Number",
				value: 1
			}, {
				name: "String",
				value: 2
			}, {
				name: "Boolean",
				value: 3
			}, {
				name: "Date",
				value: 4
			}, {
				name: "null",
				value: 5
			}, {
				name: "body",
				value: 6
			}
		],
		apiParametersMust: [
			{
				name: "--请选择--",
				value: ""
			}, {
				name: "必填",
				value: 1
			}, {
				name: "选填",
				value: 2
			}
		],
		apiCallHistory: [
			{
				name: "--请选择--",
				value: ""
			}, {
				name: "用户中心",
				value: "用户中心"
			}, {
				name: "云平台",
				value: "云平台"
			}, {
				name: "成绩分析",
				value: "成绩分析"
			}, {
				name: "财务系统",
				value: "财务系统"
			}, {
				name: "珍藏档案馆",
				value: "珍藏档案馆"
			}, {
				name: "云阅卷",
				value: "云阅卷"
			}, {
				name: "生学堂H5",
				value: "生学堂H5"
			}, {
				name: "管控中心",
				value: "管控中心"
			}
		],
		apiParametersAuth: [
			{
				name: "--禁止验证--",
				value: 0
			}, {
				name: "不能为空",
				value: 1
			}, {
				name: "只能为Number",
				value: 2
			}, {
				name: "只能为整数>0",
				value: 3
			}, {
				name: "只能为String",
				value: 4
			}, {
				name: "只能为汉字",
				value: 5
			}, {
				name: "只能为身份证号",
				value: 6
			}, {
				name: "只能为手机号",
				value: 7
			}
		]
	},
	mail_opts: {
		host: 'smtp.163.com',
		port: 465,
		auth: {
			user: 'zhuxw0939@163.com',
			pass: 'zxw7531199999'
		},
		ignoreTLS: true
	}
};
