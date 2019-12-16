'use strict';

const router = require('koa-router')();
const userControl = require('../control/user');


router.post('/list', userControl.listUser); //测试


module.exports = router;
