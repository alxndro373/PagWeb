import { useState } from "react"
import {createAutobusRequest,getAutobusesRequest, deleteAutobusRequest, updateAutobusRequest} from '../api/autobuses.api'

export const useAutobus = () => {
    const [autobuses, setAutobuses] = useState([])

    const fetchAutobuses = async () => {
        const res = await getAutobusesRequest()
        setAutobuses(res.data)
    }
    const handleCreateAutobus = async (values) => {
        await createAutobusRequest(values)
        fetchAutobuses()
    }
    const handleDeleteAutobus = async (id) => {
        await deleteAutobusRequest(id)
        fetchAutobuses()
    }
    const handleUpdateAutobus = async (id,fields) => {
        await updateAutobusRequest(id,fields)
    }

    return {
        autobuses,
        fetchAutobuses,
        handleCreateAutobus,
        handleDeleteAutobus,
        handleUpdateAutobus
    }
}