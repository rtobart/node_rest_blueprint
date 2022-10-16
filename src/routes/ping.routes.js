import express from 'express'
const router = express.Router()
import { ping, servicesTest } from '../controllers/ping.controller.js'


router.get('/', ping)
router.get('/service', servicesTest)


export default router
