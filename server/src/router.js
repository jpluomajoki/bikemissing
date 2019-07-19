const Router = require('koa-router');
const router = new Router();
const bikeroutes = require('./routes/bikes')

// bikeroutes(router);

router.get('/hello', async ctx => {
  ctx.body = { text: 'Hello World!' };
});

module.exports = router;