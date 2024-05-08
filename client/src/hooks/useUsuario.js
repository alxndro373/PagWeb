import { useState } from "react"
import {createUsuarioRequest,getUsuariosRequest, deleteUsuarioRequest, updateUsuarioRequest,getPasswordAndNameRequest} from '../api/usuarios.api'

export const useUsuario = () => {
    const [usuarios, setUsuarios] = useState([])

    const fetchUsuarios = async () => {
        const res = await getUsuariosRequest()
        setUsuarios(res.data)
    }
    const handleCreateUsuario = async (values) => {
        await createUsuarioRequest(values)
        fetchUsuarios()
    }
    const handleDeleteUsuario = async (id) => {
        await deleteUsuarioRequest(id)
        fetchUsuarios()
    }
    const handleUpdateUsuario = async (id,fields) => {
        const result = await updateUsuarioRequest(id,fields)
        if(result.status == 200 && result.data.affectedRows > 0) alert("Actualizado Correctamente")
        else alert("Actualizacion Fallida")
    }
    const handleGetPasswordAndName = async (correo) => {
        const result = await getPasswordAndNameRequest(correo)
        return result
    }

    return {
        usuarios,
        fetchUsuarios,
        handleCreateUsuario,
        handleDeleteUsuario,
        handleUpdateUsuario,
        handleGetPasswordAndName
    }
}