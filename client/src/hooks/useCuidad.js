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
        const result = await updateCuidadRequest(id,fields)
        console.log(result)
        if(result.status == 200 && result.data.affectedRows > 0) alert("Actualizado Correctamente")
        else alert("Actualizacion Fallida")
    }

    return {
        cuidades,
        fetchCuidades,
        handleCreateCuidad,
        handleDeleteCuidad,
        handleUpdateCuidad
    }
}