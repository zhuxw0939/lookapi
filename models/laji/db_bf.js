
var mydebug = require("debug")("mydebug:mongo");

var express = require('express');

var mongoose = require("mongoose");
// var db = mongoose.connect("mongodb://admin:admin@192.168.60.234:27017/data");
var db = mongoose.connect("mongodb://192.168.60.234:27017/test");
var TestSchema = new mongoose.Schema({
	name : { type:String },
	age  : { type:Number, default:0 },
	email: { type:String },
	time : { type:Date, default:Date.now }
});
var apiSchema = new mongoose.Schema({
	name : { type:String },
	url  : { type:String },
	type : { type:Number, default:0 },
	time : { type:Date, default:Date.now }
});
// var TempSchema = new mongoose.Schema;
// TempSchema.add({ name: 'String', email: 'String', age: 'Number' });
// var TestModel = db.model("test1", TestSchema );

exports.user = db.model('test1', TestSchema); //  与users集合关联


exports.api = db.model('api', apiSchema);




















/*
var TestEntity = new TestModel({
	name : "zxw",
	age  : 28,
	email: "zxw@qq.com"
});
TestEntity.save(function(error,doc){
	if(error){
		console.log("error :" + error);
	}else{
		console.log(doc);
	}
});
*/

/*
TestModel.find({}, function(error, docs){
	if(error){
		mydebug("error :" + error);
	}else{
		mydebug(docs); //docs: age为28的所有文档
	}
});*/
/*

TestModel.create({ name:"jack", age:26}, function(error,doc){
	if(error) {
		console.log(error);
	} else {
		console.log(doc);
	}
});
*/
/*

TestModel.update({name:"zxw"}, {$set : { age : 10 }}, function(error){
	if(error) {
		mydebug(error);
	} else {
		mydebug('Update success!');
	}
});

*/
/*

TestModel.find({}, function(error, docs){
	mydebug(docs);
	TestModel.remove({name: "jack"}, function(error){
		if(error) {
			mydebug(error);
		} else {
			mydebug('Delete success!');
			TestModel.find({}, function(error, docs){
				mydebug(docs);
			});
		}
	});
});
*/


/*

TestModel.create([
	{ name:"test1", age:20 },
	{ name:"test2", age:30 },
	{ name:"test3", age:24 },
	{ name:"test4", age:18 },
	{ name:"test5", age:60 },
	{ name:"test6", age:50, email:"t6@qq.com" },
	{ name:"test7", age:40, email:"t7@163.com" },
	{ name:"test8", age:27 },
	{ name:"test9", age:27, email:"t9@yeah.net" },
	{ name:"test10",age:65 }
], function(error,docs) {
	if(error) {
		console.log(error);
	} else {
		console.log('save ok');
	}
});
*/


/*

TestModel.find({},{name:1, _id:0},function(err,docs){
	mydebug(docs)
	mydebug(docs.length)
})
*/

/*

TestModel.find({ age: 27}, function (err, docs){
	mydebug(docs)
});

TestModel.findOne({ age: 27}, function (err, doc){
	mydebug(doc)
});
*/
/*
TestModel.find({"age":{"$gt":22,"$lt":48}},function(error,docs){
	mydebug(docs)
});
*/
/*

TestModel.find({name:{$ne:"zxw"},age:{$lt:20}},function(error,docs){
	mydebug(docs)
});
*/

/*
TestModel.find({
	age:{
		$in: [10,20,30,40,50]
	},
	email: {
		$ne: null
	}
}, {name:1, email:1, age:1, _id:0}, function(error,docs){
	mydebug(docs)
});

*/
/*

TestModel.find({"$or":[{"name":"zxw"},{"age":20}]},function(error,docs){
	mydebug(docs)
});

*/

/*

TestModel.find({email: {$exists: false}}, {name:1, _id:0, email:1, age:1}, function(error,docs){
	mydebug(docs)
});
*/


/*

TestModel.find({},null,{limit:5},function(err,docs){
	mydebug(docs)
});
TestModel.find({},null,{skip:15},function(err,docs){
	mydebug(docs)
});



 TestModel.find({},{name:1, age:1, _id:0},{sort:{age:1}, skip: 3},function(err,docs){
 console.log(docs)
 });



 var childSchema = new Schema({ name: 'string'}, {_id: false});

 var parentSchema = new Schema({
 children: [childSchema]
 })
 */

