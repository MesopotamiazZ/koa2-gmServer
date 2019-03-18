const router = require('koa-router')();
const controllers = require('../controllers');

// 获取首页table
router.get('/homeTable', controllers.getAllUser);

router.post('/register', controllers.register)

module.exports = router;