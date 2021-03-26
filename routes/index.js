const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const search = require('./modules/search')
const sort = require('./modules/sort')
const crud = require('./modules/crud')

router.use('/', home)
router.use('/restaurants/search', search)
router.use('/sort', sort)
router.use('/restaurants', crud)

module.exports = router