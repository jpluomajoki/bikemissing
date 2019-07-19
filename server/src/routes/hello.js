const controller = require('../controllers/hello');

module.exports = router => {
  router.get('/hello', async ctx => {
    const helloMessage = controller.getHelloMessage();
    ctx.body = helloMessage;
  });
};
