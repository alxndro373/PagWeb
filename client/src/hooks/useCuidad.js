import { useState } from "react"
import {createCuidadRequest,getCuidadesRequest, deleteCuidadRequest, updateCuidadRequest} from '../api/cuidades.api'

export const useCuidad = () => {
    const [ciudades, setCuidades] = useState([])

    const fetchCuidades = async () => {
        try {
            const res = await getCuidadesRequest()
            setCuidades(res.data)
        } catch (error) {
            console.error("Error al obtener las ciudades")
        }
    }
    const handleCreateCuidad = async (values) => {
        try {
            if (values.idCiudad || !values.estado || !values.latitud || !values.longitud) {
                alert("Todos los campos son obligatorios")
                return
            }
            await createCuidadRequest(values)
            fetchCuidades()
            alert("Ciudad registrada correctamente")
        } catch (error) {
            console.error("Error al registrar la ciudad", error)
            alert("Error al registrar la ciudad")
        }
    }
    const handleDeleteCuidad = async (id) => {
        try {
            await deleteCuidadRequest(id)
            fetchCuidades()
            alert("Ciudad eliminada correctamente")
        } catch (error) {
            console.error("Error al eliminar la ciudad", error)
            alert("Error al eliminar la ciudad")
        }
    }
    const handleUpdateCuidad = async (id,fields) => {
        try {
            const result = await updateCuidadRequest(id, fields);
            if (result.status === 200 && result.data.affectedRows > 0) {
                alert("Actualizado correctamente.");
            } else {
                alert("No se pudo actualizar la ciudad.");
            }
        } catch (error) {
            console.error("Error al actualizar la ciudad:", error);
            alert("Error al actualizar la ciudad.");
        }
    }

    return {
        ciudades,
        fetchCuidades,
        handleCreateCuidad,
        handleDeleteCuidad,
        handleUpdateCuidad,
    }
}