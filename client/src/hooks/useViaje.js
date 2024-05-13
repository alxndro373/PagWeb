import { useState } from "react"
import {createViajeRequest,getViajesRequest, deleteViajeRequest, updateViajeRequest, validOriginAndDestination} from '../api/viajes.api'

export const useViaje = () => {
    const [viajes, setViajes] = useState([])

    const fetchViajes = async () => {
        const res = await getViajesRequest()
        setViajes(res.data)
    }
    const handleCreateViaje = async (values) => {
        await createViajeRequest(values)
        fetchViajes()
    }
    const handleDeleteViaje = async (id) => {
        await deleteViajeRequest(id)
        fetchViajes()
    }
    const handleUpdateViaje = async (id,fields) => {
        const result = await updateViajeRequest(id,fields)
        console.log("-->", result)
        if(result.status == 200 && result.data.affectedRows > 0) alert("Actualizado Correctamente")
        else alert("Actualizacion Fallida")
    }
    const handleValidOriginAndDestination = async (origin,destination) => {
        const result = await validOriginAndDestination(origin,destination)
        return result
    }

    return {
        viajes,
        fetchViajes,
        handleCreateViaje,
        handleDeleteViaje,
        handleUpdateViaje,
        handleValidOriginAndDestination
    }
}