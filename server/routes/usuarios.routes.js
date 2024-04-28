import { Router } from "express"
import {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario

} from '../controllers/usuarios.controllers.js'

const router = Router()

router.get('/Usuarios', getUsuarios)
router.get('/Usuario/:id', getUsuario)
router.post('/Usuario', createUsuario)
router.put('/Usuario/:id', updateUsuario)
router.delete('/Usuario/:id', deleteUsuario)


export default router