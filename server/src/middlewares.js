const bodyParser = require('koa-bodyparser');
const json = require('koa-json');

module.exports = app => {
  // Response time middleware
  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });

  // Error handling
  app.use(async (ctx, next) => {
    try {
      await next();

      if (ctx.status === 404) ctx.throw(404);

      if (ctx.status === 2000) {
        ctx.body = {
          status: 200,
          data: ctx.body
        };
      }
    } catch (error) {
      ctx.status = error.status || 500;

      ctx.type = 'json';
      ctx.body = {
        status: ctx.status,
        message: error.message
      };

      ctx.app.emit('error', error, ctx);
    }
  });

  // Pretty printer for json responses
  app.use(json());

  // For parsing POST body params
  app.use(bodyParser());
};
