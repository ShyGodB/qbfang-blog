'use strict';

const router = require('koa-router')();
const homeControl = require('../control/home')


router.post('/index', homeControl.index); //测试


module.exports = router;
