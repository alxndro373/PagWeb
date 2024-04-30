import { useState } from "react"
import {createUsuarioRequest,getUsuariosRequest, deleteUsuarioRequest, updateUsuarioRequest} from '../api/usuarios.api'

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
        await updateUsuarioRequest(id,fields)
    }

    return {
        usuarios,
        fetchUsuarios,
        handleCreateUsuario,
        handleDeleteUsuario,
        handleUpdateUsuario
    }
}