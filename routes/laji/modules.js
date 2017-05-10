"use strict";

var express = require('express');
var router = express.Router();
var api = require('../data/db').api;

var mydebug = require("debug")("mydebug:api");


/* apitest */
router.get('/', function(req, res, next) {
	res.render('api', {
		title: 'Express'
	});
});


/* apitest */
router.get('/api', function(req, res, next) {
	mydebug("-----------------api-----------------");
	api.find({}, null, {sort:{time:-1}, limit: 20}, function(err, docs){
		mydebug(docs);
		res.render('api', {
			title: 'Express',
			data: docs
		});
	});
});


router.post('/writeApi', function(req, res, next) {
	mydebug("-----------------writeApi-----------------");
	api.create([
		{
			name: req.body.name,
			type: req.body.type,
			url: req.body.url,
			data: req.body.data,
			info: req.body.info
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
				message: "save ok"
			}));
		}
	});
});


router.post('/delApi', function(req, res, next) {
	mydebug("-----------------writeApi-----------------");
	api.remove({_id: eval(req.body.id)}, function(error){
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

/* ucenter */
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


module.exports = router;
