const Koa = require('koa');
const router = require('./routes');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const response = require('./middlewares/response.js');

const app = new Koa();

app.use(response)
   .use(cors())
   .use(bodyParser())
   .use(router.routes());

app.listen('8081', function() {
  console.log('服务器启动成功...8081...');
})