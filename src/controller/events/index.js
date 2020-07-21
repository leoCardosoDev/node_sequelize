const express = require('express')
const router = express.Router()

router.get('/', require('./find'))
router.get('/new', require('./new'))
router.get('/edit/:id', require('./edit'))
router.get('/:id', require('./show'))
router.put('/:id', require('./update'))
router.delete('/:id', require('./remove'))
router.post('/', require('./create'))

module.exports = router
