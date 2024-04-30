import { useState } from "react"
import {createCuidadRequest,getCuidadesRequest, deleteCuidadRequest, updateCuidadRequest} from '../api/cuidades.api'

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
    const handleUpdateCuidad = async (id,fields) => {
        await updateCuidadRequest(id,fields)
    }

    return {
        cuidades,
        fetchCuidades,
        handleCreateCuidad,
        handleDeleteCuidad,
        handleUpdateCuidad
    }
}