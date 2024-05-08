
import { pool } from "../db.js"

export const getViajes = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM viaje')
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getViaje = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM viaje WHERE idViaje = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "ruta not found" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}

export const createViaje = async (req, res) => {
    try {
        const {idViaje, Origen, Destino, idCamion, fecha, hora } = req.body
        const [origenRes] = await pool.query('SELECT idCiudad FROM ciudad where estado = ?', [Origen])
        const idOrigen = origenRes[0].idCiudad
        const [destinoRes] = await pool.query('SELECT idCiudad FROM ciudad where estado = ?', [Destino])
        const idDestino = destinoRes[0].idCiudad
        const [result] = await pool.query('INSERT INTO viaje(idViaje,idOrigen,idDestino,idCamion,fecha,hora) values (?,?,?,?,?,?)', [idViaje,idOrigen,idDestino,idCamion,fecha,hora])
        res.json({
            idViaje: result.insertId,
            idOrigen,
            idDestino,
            idCamion,
            fecha,
            hora
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateViaje = async (req, res) => {
    try {
        const {idViaje,Origen,Destino,idCamion,fecha,hora} = req.body
        const [origenRes] = await pool.query('SELECT idCiudad FROM ciudad where estado = ?', [Origen])
        const idOrigen = origenRes[0].idCiudad
        const [destinoRes] = await pool.query('SELECT idCiudad FROM ciudad where estado = ?', [Destino])
        const idDestino = destinoRes[0].idCiudad
        const [result] = await pool.query('UPDATE viaje SET idViaje=?,idOrigen=?,idDestino=?,idCamion=?,fecha=?,hora=? WHERE idViaje = ?', [idViaje,idOrigen,idDestino,idCamion,fecha,hora,req.params.id])
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export const deleteViaje = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM viaje WHERE idViaje = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "ruta not found" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}