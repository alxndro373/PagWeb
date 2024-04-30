import { useState } from "react"
import {createBoletoRequest,getBoletosRequest, deleteBoletoRequest, updateBoletoRequest} from '../api/boletos.api'

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
    const handleDeleteBoleto = async (id) => {
        await deleteBoletoRequest(id)
        fetchBoletos()
    }
    const handleUpdateBoleto = async (id,fields) => {
        await updateBoletoRequest(id,fields)
    }

    return {
        boletos,
        fetchBoletos,
        handleCreateBoleto,
        handleDeleteBoleto,
        handleUpdateBoleto
    }
}