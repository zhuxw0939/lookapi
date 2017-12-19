"use strict";

var express = require('express');

var authModel = require('../models/auth');
var user = require('../controllers/user');

var logger = require('../common/logger');

var router = express.Router();



router.get('/center', authModel.userMustLogin, user.center); // 个人中心
router.get('/changePassword', authModel.userMustLogin, user.changePassword); // 修改密码
router.get('/login', authModel.userMustLogout, user.login); // 进入登录页面
router.get('/register', authModel.userMustLogout, user.register); // 进入注册页面
router.get('/logout', user.logout); // 退出登录
router.get('/env', authModel.userMustLogin, user.env); // 我的测试环境
router.get('/message', authModel.userMustLogin, user.message); // 我的消息


// POST
router.post('/updatePost', user.updatePost); // 修改个人资料Post
router.post('/changePasswordPost', user.changePasswordPost); // 修改密码Post
router.post('/loginPost', user.loginPost); // 登录校验Post
router.post('/registerPost', user.registerPost); // 注册校验Post
router.post('/createEnvPost', user.createEnvPost); // 添加环境
router.post('/removeEnvPost', user.removeEnvPost); // 删除环境
router.post('/updateEnvPost', user.updateEnvPost); // 编辑环境
router.post('/getMyNewMessageNumber', user.getMyNewMessageNumber); // 获取新消息数量
router.post('/removeMessage', user.removeMessage); // 删除消息

router.post('/get/token', user.getToken); // 获取sxw-token



module.exports = router;