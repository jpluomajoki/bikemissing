const Router = require('koa-router');
const bikeRoutes = require('./routes/bikes');
const helloRoutes = require('./routes/hello');

const router = new Router();

bikeRoutes(router);
helloRoutes(router);

module.exports = router;
