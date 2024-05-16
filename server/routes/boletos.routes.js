import { Router } from "express"
import {
    getBoletos,
    getBoleto,
    createBoleto,
    updateBoleto,
    deleteBoleto,
    getBoletoByUser,
    getOriginAndDestination,
    getAsientoByViaje

} from '../controllers/boletos.controllers.js'

const router = Router()

router.get('/boletos', getBoletos)
router.get('/boletos/:idUsuario', getBoletoByUser)
router.get('/boletos/viaje/:id', getOriginAndDestination)
router.get('/boletos/asientos/:idViaje',getAsientoByViaje)
router.get('/boleto/:id', getBoleto)
router.post('/boleto', createBoleto)
router.put('/boleto/:id', updateBoleto)
router.delete('/boleto/:id', deleteBoleto)


export default router