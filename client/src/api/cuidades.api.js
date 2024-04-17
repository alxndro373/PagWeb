import axios from 'axios'

export const getCuidadesRequest = async () => await axios.get('http://localhost:4000/cuidades')

export const createCuidadRequest = async (cuidad) => await axios.post('http://localhost:4000/cuidad', cuidad)

export const updateCuidadRequest = async (id,newFields) => await axios.put(`http://localhost:4000/cuidad/${id}`,newFields)


export const deleteCuidadRequest = async (id) => await axios.delete(`http://localhost:4000/cuidad/${id}`)
