const controller = require('../controllers/bikes');

module.exports = router => {
  router.get('/bikes', async ctx => {
    controller.getAllBikes();
    ctx.body = [];
  });
};
