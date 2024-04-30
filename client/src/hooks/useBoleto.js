import { useState } from "react"
import {createBoletoRequest,getBoletosRequest, deleteBoletoRequest} from '../api/boletos.api'

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

    return {
        boletos,
        fetchBoletos,
        handleCreateBoleto,
        handleDeleteBoleto
    }
}