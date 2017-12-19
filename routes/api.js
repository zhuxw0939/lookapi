"use strict";

var express = require('express');

var config = require('../common/config');
var authModel = require('../models/auth');
var localsModel = require('../models/locals');
var api = require('../controllers/api');

var logger = require('../common/logger');

var router = express.Router();


router.get('/list', api.list); // 列表
router.get('/detail/:id', api.detail); // 详情


router.get('/create', authModel.userMustLogin, localsModel.apiCreate, api.create); // 创建Api
router.get('/update', authModel.userMustLogin, localsModel.apiUpdate, api.update); // 编辑Api
router.get('/test', localsModel.apiTest, api.test); // 接口测试

router.get('/maketest', api.maketest); // 接口测试

router.get('/getApiList', api.getApiList); // 接口测试

router.get('/get/apiDetail', api.getApiDetail); // 获取data-编辑Api
router.post('/get/apiCreate', api.apiCreate); // 获取data-创建Api


// POST
router.post('/createPost', authModel.userMustLogin, api.createPost); // 创建Api
router.post('/updatePost', authModel.userMustLogin, api.updatePost); // 编辑Api
router.post('/removeApiPost', authModel.userMustLogin, api.removeApiPost); // 删除Api
router.post('/removeApisPost', authModel.userMustLogin, api.removeApisPost); // 一次删除多个Api
router.post('/removeNogroupApisPost', authModel.userMustLogin, api.removeNogroupApisPost); // 一次删除多个Api
router.post('/loseApiPost', authModel.userMustLogin, api.loseApiPost); // 设置某个Api过期
router.post('/testFunName', authModel.userMustLogin, api.testFunName); // 判断fun_name是否重复
router.post('/runApiCompleteState', authModel.userMustLogin, api.runApiCompleteState); // 扫描本页接口完成情况
router.post('/testSend', api.testSend); // 接口测试
router.post('/testSend2', api.testSend2); // 接口测试
router.get('/testSend2', api.testSend2); // 接口测试

// router.post('/importApi', api.importApi); // 导入apis



module.exports = router;