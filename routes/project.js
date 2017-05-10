"use strict";

var express = require('express');

var authModel = require('../models/auth');
var project = require('../controllers/project');
var localsModel = require('../models/locals');

var logger = require('../common/logger');

var router = express.Router();



router.get('/index', authModel.userMustLogin, project.index); // 我的项目
router.get('/create', authModel.userMustLogin, project.create); // 新建项目
router.get('/update', authModel.userMustLogin, localsModel.projectUpdate, project.update); // 编辑设置
router.get('/version', authModel.userMustLogin, localsModel.projectVersion, project.version); // 版本管理
router.get('/team', authModel.userMustLogin, localsModel.projectTeam, project.team); // 协作管理
router.get('/group/swagger_history', authModel.userMustLogin, localsModel.projectTeam, project.GroupSwaggerHistory); // 协作管理
// POST
router.post('/createPost', project.createPost); // 新建项目
router.post('/removeProject', project.removeProject); // 删除项目
router.post('/updatePost', project.updatePost); // 编辑项目
router.post('/createVersionPost', project.createVersionPost); // 创建版本
router.post('/removeVersionPost', project.removeVersionPost); // 删除版本
router.post('/setDefaultVersionPost', project.setDefaultVersionPost); // 设置某版本号为默认版本
router.post('/createGroupPost', project.createGroupPost); // 创建栏目
router.post('/updateGroupPost', project.updateGroupPost); // 编辑栏目
router.post('/removeGroupPost', project.removeGroupPost); // 删除栏目
router.post('/removeGroupsPost', project.removeGroupsPost); // 删除栏目
router.post('/getGroupList', project.getGroupList); // 获取所有一级栏目
router.post('/getGroupSonList', project.getGroupSonList); // 根据某一级栏目id获取该栏目的二级栏目
router.post('/getVersionList', project.getVersionList); // 根据pid获取该栏目下的所有版本号
router.post('/sendJoinTeamMessage', project.sendJoinTeamMessage); // 添加项目协作成员
router.post('/joinTeam', project.joinTeam); // 添加项目协作成员
router.post('/removeTeamAdmin', project.removeTeamAdmin); // 删除项目协作成员




module.exports = router;