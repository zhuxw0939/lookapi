"use strict";

var express = require('express');
var router = express.Router();
var shortid = require('js-shortid');
var moment = require('moment');

var mongoDB = require('../../common/mongoDB');


var mydebug = require("debug")("mydebug:api");


/*
 *** 接口调试
 *
 *
 * */
router.get('/', function(req, res, next) {
	if(req.query.id){
		mongoDB.api.findOne({id: req.query.id}, function(err, doc){
			mydebug(doc);
			res.render('index', {
				title: 'Express',
				data: doc
			});
		});
	} else if(req.query.apisaveid){
		mongoDB.apiSave.findOne({id: req.query.apisaveid}, function(err, doc){
			mydebug(doc);
			res.render('index', {
				title: 'Express',
				data: doc
			});
		});
	} else {
		res.render('index', {
			title: 'Express'
		});
	}
});







/*
 *** 服务器配置
 *
 *
 * */
router.get('/servers', function(req, res, next) {
	mydebug("--------------------comming--------------");
	res.render('servers', {
		title: 'Express',
		serverURL: req.cookies["serverURL"] ? req.cookies["serverURL"] : "http://120.55.199.115:8881",
		sessionid: req.cookies["sessionid"] ? req.cookies["sessionid"] : "9694A31F211A46E6A425AF0CAFAFFDA1"
	});
});
/*writeServers*/
router.post('/api/writeServers', function(req, res, next) {
	mydebug("-------------------writeServers-------------");
	res.cookie("serverURL", req.body.url );
	res.cookie("sessionid", req.body.sessionid );

	/*DEVELOPMENT-测试环境下判断访问者身份使用，上线要删除*/
	res.cookie("myip", (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(":").pop());

	mydebug("-------------------ok-------------");
	res.end(JSON.stringify({
		status: 0,
		message: "设置成功"
	}));
});





/*
 *** 接口列表
 *
 *
 * */
router.get('/list', function(req, res, next) {
	mongoDB.api.find({}, { type:1, column:1, name:1, url:1, time:1, requests:1, id:1, _id:0 }, {sort:{time:-1}, limit: 50}, function(err, docs) {
		mydebug(docs);
		mydebug("-----------11111----------");
		for(var i=0;i<docs.length;i++){
			docs[i].times = moment(docs[i].time).format('YYYY-MM-DD HH:mm:ss');
		}
		mydebug("------------222222222---------");
		res.render('list', {
			title: 'Express',
			data: docs
		});
	});
});






/*
 *** 接口详情
 *
 *
 * */
router.get('/api', function(req, res, next) {
	mongoDB.api.find({}, { type:1, column:1, name:1, id:1, _id:0 }, {sort:{time:-1}, limit: 50}, function(err, docs){
		mydebug(docs);
		if(!req.query.id){
			res.render('api', {
				title: 'Express',
				query: req.query,
				datas: docs
			});
			return false;
		}
		mongoDB.api.findOne({id: req.query.id}, function(err, doc){
			mydebug(doc);
			var back = {
				title: 'Express',
				query: req.query,
				datas: docs,
				data: doc,
				parameter: JSON.parse(doc.parameter)
			};
			mydebug(back);
			res.render('api', back);
		});

	});
});




/* ajax获取接口列表 */
router.get('/api/getApiList', function(req, res, next) {
	mydebug("-----------------getApiList-----------------");
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	mongoDB.api.find({}, { type:1, name:1, id:1, _id:0 }, {sort:{time:-1}, limit: 50}, function(err, docs){
		res.end(JSON.stringify({
			status: 0,
			data: docs
		}));
	});
});

/* 保存一个接口 */
router.post('/api/writeApi', function(req, res, next) {
	mydebug("-----------------writeApi-----------------");
	if(req.body.id){
		//编辑
		var id = req.body.id;
		mongoDB.api.update({
			id: id
		}, {
			$set : {
				id: id,
				name: req.body.name,
				type: req.body.type,
				column: req.body.column,
				requests: req.body.requests,
				url: req.body.url,
				parameter: req.body.parameter,
				parameters: req.body.parameters,
				back: req.body.back,
				description: req.body.description,
				info: req.body.info,
				backinfo: req.body.backinfo
			}
		}, function(error, docs){
			mydebug(docs);
			if(error) {
				mydebug(error);
				res.end(JSON.stringify({
					status: 1,
					message: error
				}));
			} else {
				mydebug('save ok');
				res.end(JSON.stringify({
					status: 0,
					message: "Update ok",
					data: id
				}));
			}
		});
	} else {
		//新建
		var id = shortid.gen();
		mongoDB.api.create([
			{
				id: id,
				name: req.body.name,
				type: req.body.type,
				column: req.body.column,
				requests: req.body.requests,
				url: req.body.url,
				parameter: req.body.parameter,
				parameters: req.body.parameters,
				back: req.body.back,
				description: req.body.description,
				info: req.body.info,
				backinfo: req.body.backinfo
			}
		], function(error, docs) {
			mydebug(docs);
			if(error) {
				mydebug(error);
				res.end(JSON.stringify({
					status: 1,
					message: error
				}));
			} else {
				mydebug('save ok');
				res.end(JSON.stringify({
					status: 0,
					message: "save ok",
					data: id
				}));
			}
		});
	}

});

/*删除接口*/
router.post('/delApi', function(req, res, next) {
	mydebug("-----------------delApi-----------------");
	mydebug(req.body.id);
	mongoDB.api.remove({id: req.body.id}, function(error){
		if(error) {
			mydebug(error);
			res.end(JSON.stringify({
				status: 1,
				message: error
			}));
		} else {
			mydebug('Delete success!');
			res.end(JSON.stringify({
				status: 0,
				message: "Delete success"
			}));
		}
	});
});



/*查看最近访问的数据*/
router.get('/apiSave', function(req, res, next) {
	mongoDB.apiSave.find({}, {}, {sort:{time:-1}, limit: 50}, function(err, docs) {

		var looksApi = [];
		for(var i=0;i<docs.length;i++){
			docs[i].times = moment(docs[i].time).format('YYYY-MM-DD HH:mm:ss');
			looksApi.push(docs[i].id);
		}

		res.render('apiSaveList', {
			title: 'Express',
			looksApis: looksApi,
			data: docs
		});
	});
});
router.get('/apiSave/api', function(req, res, next) {
	if(!req.query.id) next("找不到");
	mongoDB.apiSave.findOne({id: req.query.id}, function(err, doc){
		mydebug(doc);
		doc.times = moment(doc.time).format('YYYY-MM-DD HH:mm:ss');
		var back = {
			title: 'Express',
			query: req.query,
			data: doc
		};
		mydebug(back);
		res.render('apiSaveDetail', back);
	});
});



module.exports = router;





















/* ucenter
 router.post('/ucenter', function(req, res) {
 var query = {name: req.body.name, password: req.body.password};
 (function(){
 user.count(query, function(err, doc){    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
 if(doc == 1){
 console.log(query.name + ": 登陆成功 " + new Date());
 res.render('ucenter', { title:'ucenter' });
 }else{
 console.log(query.name + ": 登陆失败 " + new Date());
 res.redirect('/');
 }
 });
 })(query);
 });
 */
