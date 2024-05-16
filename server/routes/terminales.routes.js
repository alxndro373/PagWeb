import { Router } from "express"
import {
    getTerminaleses,
    getTerminales,
    createTerminales,
    updateTerminales,
    deleteTerminales

} from '../controllers/terminales.controller.js'

const router = Router()

router.get('/terminaleses', getTerminaleses)
router.get('/terminales/:id', getTerminales)
router.post('/terminales', createTerminales)
router.put('/terminales/:id', updateTerminales)
router.delete('/terminales/:id', deleteTerminales)


export default router