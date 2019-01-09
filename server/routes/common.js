const router = require('koa-router')()
const db = require('monk')('localhost:27017/secoo')
const common = db.get('common')

router.prefix('/common')

router.get('/', async (ctx, next) => {
    const content = {}
    await common.find()
        .then((docs) => {
            content.status = 0
            content.msg = "返回成功"
            content.data = docs
        })
        .catch((err) => {
            content.status = 1
            content.msg = "返回失败"
            content.data = ''
        });
    ctx.body = content
})
router.get('/string', async (ctx, next) => {
    ctx.body = 'this is  common string interface'
})

module.exports = router
