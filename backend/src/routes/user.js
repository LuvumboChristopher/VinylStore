const { Router } = require('express')
const { updateUser } = require('../controllers/user')

const router = Router()

router.put('/', updateUser)


module.exports = router
