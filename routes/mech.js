import express from 'express'

import { getIndex, getOS } from "../controllers/mech.js"

const router = express.Router()

router.get('/', getIndex)

router.get('/os/:id', getOS)

export default router