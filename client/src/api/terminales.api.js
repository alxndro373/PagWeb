import axios from 'axios'

export const getTerminalesRequest = async () => await axios.get('http://localhost:4000/terminaleses')

export const createTerminalesRequest = async (terminales) => await axios.post('http://localhost:4000/terminales', terminales)

export const updateTerminalesRequest = async (id,newFields) => await axios.put(`http://localhost:4000/terminales/${id}`,newFields)

export const deleteTerminalesRequest = async (id) => await axios.delete(`http://localhost:4000/terminales/${id}`)


