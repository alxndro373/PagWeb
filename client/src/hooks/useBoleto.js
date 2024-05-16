import { useState } from "react"
import {createBoletoRequest,getBoletosRequest, deleteBoletoRequest, updateBoletoRequest, getBoletosByUserRequest, getOriginAndDestinationRequest, getAsientoByViajeRequest} from '../api/boletos.api'

export const useBoleto = () => {
    const [boletos, setBoletos] = useState([])

    const fetchBoletos = async () => {
        const res = await getBoletosRequest()
        setBoletos(res.data)
    }
    const handleCreateBoleto = async (values) => {
        await createBoletoRequest(values) 
        fetchBoletos()
    }
    const buyBoleto = async (values) => {
        const res = await createBoletoRequest(values)
        return res
    }
    const handleGetAsientoByViaje = async (idViaje) => {
        const res = await getAsientoByViajeRequest(idViaje)
        return res
    }
    const fetchBoletosByUser = async (idUsuario) => {
        const res = await getBoletosByUserRequest(idUsuario)
        return res
    }
    const handleOriginAndDestination = async (idViaje) => {
        const res = await getOriginAndDestinationRequest(idViaje)
        return res
    }

    const handleDeleteBoleto = async (id) => {
        await deleteBoletoRequest(id)
        fetchBoletos()
    }
    const handleUpdateBoleto = async (id,fields) => {
        const result = await updateBoletoRequest(id,fields)
        if(result.status == 200 && result.data.affectedRows > 0) alert("Actualizado Correctamente")
        else alert("Actualizacion Fallida")
    }

    return {
        boletos,
        fetchBoletos,
        handleCreateBoleto,
        handleDeleteBoleto,
        handleUpdateBoleto,
        buyBoleto,
        fetchBoletosByUser,
        handleOriginAndDestination,
        handleGetAsientoByViaje
    }
}