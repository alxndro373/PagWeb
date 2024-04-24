import { useState } from "react"
import {createCuidadRequest,getCuidadesRequest, deleteCuidadRequest} from '../api/cuidades.api'

export const useCuidad = () => {
    const [cuidades, setCuidades] = useState([])

    const fetchCuidades = async () => {
        const res = await getCuidadesRequest()
        setCuidades(res.data)
    }
    const handleCreateCuidad = async (values) => {
        await createCuidadRequest(values)
        fetchCuidades()
    }
    const handleDeleteCuidad = async (id) => {
        await deleteCuidadRequest(id)
        fetchCuidades()
    }

    return {
        cuidades,
        fetchCuidades,
        handleCreateCuidad,
        handleDeleteCuidad
    }
}