const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const middleware = require('./middlewares');
const config = require('./config');

const host = process.env.HOST || config.server.host;
const port = process.env.port || config.server.port;

middleware(app);
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(host, port);
