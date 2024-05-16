import { useState } from "react"
import {createBoletoRequest,getBoletosRequest, deleteBoletoRequest, updateBoletoRequest, getBoletosByUserRequest, getOriginAndDestinationRequest, getAsientoByViajeRequest} from '../api/boletos.api'

export const useBoleto = () => {
    const [boletos, setBoletos] = useState([])

    const fetchBoletos = async () => {
        try {
            const res = await getBoletosRequest()
            setBoletos(res.data)
        } catch (error) {
            console.error("Error al obtener los boletos")
        }
    }
    const handleCreateBoleto = async (values) => {
        try {
            if (!values.idBoleto || !values.idUsuario || !values.idViaje || !values.asiento || !values.fecha || !values.hora || !values.precio) {
                alert("Todos los campos son obligatorios")
                return
            }
            
            const res = await createBoletoRequest(values) 

            if (res.status === 200) {
                fetchBoletos()
                alert("Boleto registrado correctamente")
            } else if (res.status === 400 && res.data.message === "El asiento ya está ocupado") {
                setDuplicateError(true)
            } else {
                alert("Error al registrar el boleto")
            }
        } catch (error) {
            console.error("Error al registrar el boleto", error)
            alert("Error al registrar el boleto")
        }
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
        try {
            await deleteBoletoRequest(id)
            fetchBoletos()
            alert("Boleto eliminado correctamente")
        } catch (error) {
            console.error("Error al eliminar el boleto", error)
            alert("Error al eliminar el boleto")
        }
    }
    const handleUpdateBoleto = async (id,fields) => {
        try {
            const result = await updateBoletoRequest(id,fields)
            if(result.status == 200 && result.data.affectedRows > 0){
                alert("Actualizado Correctamente")
            } else{
                alert("Actualizacion Fallida")
            } 
        } catch (error) {
            console.error("Error al actualizar el boleto", error)
            alert("Error al actualizar el boleto")
        }
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