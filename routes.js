const express = require('express')
const router = express.Router()
const ctrl = require('./controller.js')


router.get('/movies', ctrl.getAll )
router.get('/movies/:id', ctrl.getOne )
router.post('/movies', ctrl.create )
router.put('/movies/:id', ctrl.update)
router.delete('/movies/:id', ctrl.remove)





module.exports = router