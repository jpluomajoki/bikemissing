const controller = require('../controllers/bikes');

module.exports = router => {
  router.get('/bikes', async ctx => {
    ctx.body = await controller.getAllBikes();
  });

  router.post('/bikes', async ctx => {
    try {
      controller.insertBike(ctx.request.body);
      ctx.status = 201;
      ctx.body = '';
    } catch (error) {
      console.error(error);
      ctx.throw(500);
    }
  });
};
