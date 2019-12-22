'use strict';

const router = require('koa-router')();
const userControl = require('../control/user');


router.post('/createFile', userControl.createFile); // 创建文件
router.post('/getFile', userControl.getFile); // 创建文件



module.exports = router;
