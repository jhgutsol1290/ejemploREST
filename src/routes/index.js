const {Router} = require('express')
const tasks = require('./tasks')

const router = Router()


router.use(tasks)


module.exports = router