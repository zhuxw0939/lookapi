
var mydebug = require("debug")("mydebug:mongo");

var express = require('express');

var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://192.168.60.234:27017/test");

var autoinc = require('mongoose-id-autoinc');

// autoinc.init(db);





var apiSchema = new mongoose.Schema({
	id   : { type:Number },
	type : { type:Number, default:0 },
	name : { type:String },
	url  : { type:String },
	data : { type:String },
	back : { type:String },
	info : { type:String },
	time : { type:Date, default:Date.now }
});
// apiSchema.plugin(autoinc.plugin, { model: 'User' });
exports.api = db.model('myapi', apiSchema);


/*var countersDB = db.model('counters', apiSchema);
exports.getNextSequence = function(name){
	mydebug("~~~~~~~~~~~~~name~~~~~~~~~~~~~~");
	mydebug(name);
	var ret = countersDB.findAndModify(
		{
			query: { model: name },
			update: { $inc: { seq: 1 } },
			new: true
		}
	);
	mydebug("~~~~~~~~~~~~~ret~~~~~~~~~~~~~~");
	mydebug(ret);
	return ret.seq;


	// var ret = db.counters.find({ model: name}, function(err, datas){
	// 	mydebug(datas);
	// });
	// return ret.seq;
}*/





/*exports.api = db.model('api', apiSchema);

exports.getNextSequence = function(name){
	var ret = db.counters.findAndModify(
		{
			query: { _id: name },
			update: { $inc: { seq: 1 } },
			new: true
		}
	);
	return ret.seq;
}*/


//
//
// >db.user .save({
// 	uid: db.ids .findAndModify({
// 		update:{$inc:{'id':1}},
// 		query:{"name":"user"},
// 		new:true}).id, //让db.ids集合中的name="user"文档的id值加1并返回充当自增id
// 	username: "dotcoo",
// 	password:"dotcoo",
// 	info:"http://www.jb51.net/  "});
//
//
//
//
// var ids = new mongo.Collection(db, 'ids');
// var getNewID = function(callback){
// 	ids.findAndModify({"name":'collName'}, [['name','asc']], {$inc:{'id':1}},{new:true,upsert:true},callback);
// };
//
// ids是mongodb一个集合对象，
// findAndModify是集合的一个方法，
// {“name”:’collName’}是query条件，
// [['name','asc']]是排序条件，必须要有，但可以为空[],
// {$inc:{‘id’:1}} 是对ids集合中的字段id做累加1更新操作，
// {new:true,upsert:true}是可选项，new 指返回更新后的结果，upsert 是指如果没有符合查询条件的记录就直接insert .
	// 	callback 是回调方法，参数有两个error和obj，obj为更新后返回的记录，可以用obj.id取到最新生成的ID







