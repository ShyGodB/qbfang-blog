'use strict';

const homeRoute = require('./home');
const orderRoute = require('./order');
const userRoute = require('./user');




module.exports = (router) => {
    router.use('/api/client/home', homeRoute.routes(), homeRoute.allowedMethods());
    router.use('/api/client/order', orderRoute.routes(), orderRoute.allowedMethods());
    router.use('/api/client/user', userRoute.routes(), userRoute.allowedMethods());

};
