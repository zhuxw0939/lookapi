"use strict";

var express = require('express');
var router = express.Router();

var makingApi = require('../controllers/makingapi');



// swagger导入
router.post('/swaggerImport', makingApi.swaggerImport);
// swagger扫描
router.post('/swaggerRun', makingApi.swaggerRun);


// 根据v_id导出所有api的serversApi.js文件
router.post('/getServersApiFile', makingApi.writeServersApiFile);
// 根据api_id导出某个api的serversApi.js文件
router.post('/updateServersApiFile', makingApi.updateServersApiFile);


// 获取api调用Code的各种接口
router.post('/getServersApiFunctionCode', makingApi.getServersApiFunctionCode);
router.get('/getServersApiFunctionUrl', makingApi.getServersApiFunctionUrl);
router.get('/getApiFunctionAjaxCode', makingApi.getApiFunctionAjaxCode);
router.get('/getApiFunctionNodejsCode', makingApi.getApiFunctionNodejsCode);

// 重新导入api
router.get('/importApiAgain', makingApi.importApiAgain); // 重新导入api


module.exports = router;



