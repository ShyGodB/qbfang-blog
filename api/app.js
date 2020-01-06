const Koa = require('koa');
const route = require('./api/route');
const bodyParser = require('koa-bodyparser')
const parse = require('./api/parse')
const mongodb = require('./config/mongodb');
const app = new Koa();
const port = 3000;

app.use(bodyParser())
app.use(parse)
app.use(route);


(async () => {
  await mongodb.connect();
  app.listen(port, () => {
    console.log(`The servier is running at http:127.0.0.1:${port}`);
  });
})();
