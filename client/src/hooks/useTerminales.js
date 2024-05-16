import { useState } from "react"
import {createTerminalesRequest, getTerminalesRequest, deleteTerminalesRequest, updateTerminalesRequest} from '../api/terminales.api'

export const useTerminales = () => {
    const [terminales, setTerminales] = useState([])

    const fetchTerminales = async () => {
        try {
            const res = await getTerminalesRequest()
            setTerminales(res.data)
        } catch (error) {
            console.error("Error al obtener las ciudades")
        }
    }
    const handleCreateTerminales = async (values) => {
        try {
            if (values.idTerminales || !values.nombre || !values.direccion || !values.latitud || !values.longitud) {
                alert("Todos los campos son obligatorios")
                return
            }
            await createTerminalesRequest(values)
            fetchTerminales()
            alert("Terminal registrada correctamente")
        } catch (error) {
            console.error("Error al registrar la terminal", error)
            alert("Error al registrar la terminal")
        }
    } 
    const handleDeleteTerminales = async (id) => {
        try {
            await deleteTerminalesRequest(id)
            fetchTerminales()
            alert("Terminal eliminada correctamente")
        } catch (error) {
            console.error("Error al eliminar la terminal", error)
            alert("Error al eliminar la terminal")
        }
    }
    const handleUpdateTerminales = async (id,fields) => {
        try {
            const result = await updateTerminalesRequest(id,fields)
            if (result.status == 200 && result.data.affectedRows > 0) {
                alert("Actualizado Correctamente")  
            } else{
                alert("No se pudo actualizar la terminal")
            }
        } catch (error) {
            console.error("Error al actualizar la terminal", error)
            alert("Error al actualizar la terminal")
        }
    }

    return {
        terminales,
        fetchTerminales,
        handleCreateTerminales,
        handleDeleteTerminales,
        handleUpdateTerminales,
    }
}