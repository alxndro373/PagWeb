import { useState } from "react"
import {createUsuarioRequest,getUsuariosRequest, deleteUsuarioRequest} from '../api/usuarios.api'

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

    return {
        usuarios,
        fetchUsuarios,
        handleCreateUsuario,
        handleDeleteUsuario
    }
}