import { Router } from "express"
import {
    getCuidades,
    getCuidad,
    createCuidad,
    updateCuidad,
    deleteCuidad

} from '../controllers/cuidades.controllers.js'

const router = Router()

router.get('/cuidades', getCuidades)
router.get('/cuidad/:id', getCuidad)
router.post('/cuidad', createCuidad)
router.put('/cuidad/:id', updateCuidad)
router.delete('/cuidad/:id', deleteCuidad)


export default router