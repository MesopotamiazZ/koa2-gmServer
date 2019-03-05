const router = require('koa-router')();
const controllers = require('../controllers');

router.get('/', controllers.getAllUser);

module.exports = router;