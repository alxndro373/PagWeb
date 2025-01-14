import axios from 'axios'

export const getBoletosRequest = async () => await axios.get('http://localhost:4000/boletos')

export const createBoletoRequest = async (boleto) => await axios.post('http://localhost:4000/boleto', boleto)

export const updateBoletoRequest = async (id,newFields) => await axios.put(`http://localhost:4000/boleto/${id}`,newFields)

export const deleteBoletoRequest = async (id) => await axios.delete(`http://localhost:4000/boleto/${id}`)

export const getBoletosByUserRequest = async (idUsuario) => await axios.get(`http://localhost:4000/boletos/${idUsuario}`)

export const getOriginAndDestinationRequest = async (idViaje) => await axios.get(`http://localhost:4000/boletos/viaje/${idViaje}`)

export const getAsientoByViajeRequest = async (idViaje) => await axios.get(`http://localhost:4000/boletos/asientos/${idViaje}`)