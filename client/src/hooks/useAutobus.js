import { useState } from "react"
import {createAutobusRequest,getAutobusesRequest, deleteAutobusRequest} from '../api/autobuses.api'

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

    return {
        autobuses,
        fetchAutobuses,
        handleCreateAutobus,
        handleDeleteAutobus
    }
}