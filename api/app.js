const Koa = require('koa');
const json = require('koa-json');
const route = require('./api/route');
const bodyParser = require('koa-bodyparser');
const validate = require('koa-validate');
const mongodb = require('./config/mongodb');
const app = new Koa();
const port = 3000;

app.use(json());
app.use(route);
app.use(bodyParser());
validate(app);

(async () => {
    await mongodb.connect();
    app.listen(port, () => {
        console.log(`The servier is running at http:127.0.0.1:${port}`);
    });
})();
