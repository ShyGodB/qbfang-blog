'use strict';

const router = require('koa-router')();
const orderControl = require('../control/order');


router.post('/list', orderControl.listOrder); //测试


module.exports = router;
