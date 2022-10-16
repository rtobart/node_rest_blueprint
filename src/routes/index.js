import express from 'express'

const router = express.Router()
router.use(express.urlencoded({ extended: true }))
router.use(express.json())

import ping from './ping.routes.js'

router.use('/ping', ping)

export default router
