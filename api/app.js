const Koa = require('koa');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const regRouter = require('./route/');
const mongodb = require('./config/mongodb');
const app = new Koa();
const port = 3000;


app.use(json());
app.use(bodyParser());



regRouter(router);
app.use(router.routes()).use(router.allowedMethods({ throw: true }));



(async () => {
    await mongodb.connect();
    app.listen(port, () => {
        console.log(`The servier is running at http:127.0.0.1:${port}`);
    });
})();
