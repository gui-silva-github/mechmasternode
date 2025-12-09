import express from "express"

import { getAddOS, postAddOS, getAllOS, getEditOS, postEditOS, postDeleteOS } from "../controllers/admin.js"

const router = express.Router()

router.get('/add-os', getAddOS)

router.post('/add-os', postAddOS)

router.get('/os', getAllOS)

router.get('/edit-os/:id', getEditOS)

router.post('/edit-os', postEditOS)

router.post('/delete-os', postDeleteOS)

export default router
