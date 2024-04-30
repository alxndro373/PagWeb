import { useState } from "react"
import {createViajeRequest,getViajesRequest, deleteViajeRequest} from '../api/viajes.api'

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

    return {
        viajes,
        fetchViajes,
        handleCreateViaje,
        handleDeleteViaje
    }
}