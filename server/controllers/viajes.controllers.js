
import { pool } from "../db.js"

export const validOrigenAndDestino = async (req,res) => {
    try {
        const [origenRes] = await pool.query('SELECT idCiudad FROM ciudad WHERE estado = ?', [req.params.origen])
        const [destinoRes] = await pool.query('SELECT idCiudad FROM ciudad WHERE estado = ?', [req.params.destino])
        if (origenRes.length === 0 || destinoRes.length === 0) return res.status(404).json({ message: "origen o  destino no econtrado" })
        const idOrigen = origenRes[0].idCiudad
        const idDestino = destinoRes[0].idCiudad
        const [result] = await pool.query('SELECT idViaje,fecha,hora,precio FROM viaje WHERE idOrigen = ? && idDestino = ?', [idOrigen,idDestino])
        res.json(result)  
    } catch (error) {
        console.log(error)
    }
}

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
        const {idViaje, Origen, Destino, idCamion, fecha, hora,precio } = req.body
        const [origenRes] = await pool.query('SELECT idCiudad FROM ciudad where estado = ?', [Origen])
        const idOrigen = origenRes[0].idCiudad
        const [destinoRes] = await pool.query('SELECT idCiudad FROM ciudad where estado = ?', [Destino])
        const idDestino = destinoRes[0].idCiudad
        const [result] = await pool.query('INSERT INTO viaje(idViaje,idOrigen,idDestino,idCamion,fecha,hora,precio) values (?,?,?,?,?,?,?)', [idViaje,idOrigen,idDestino,idCamion,fecha,hora,precio])
        res.json({
            idViaje: result.insertId,
            idOrigen,
            idDestino,
            idCamion,
            fecha,
            hora,
            precio
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateViaje = async (req, res) => {
    try {
        const {Origen,Destino,idCamion,fecha,hora} = req.body
        const [origenRes] = await pool.query('SELECT idCiudad FROM ciudad where estado = ?', [Origen])
        const idOrigen = origenRes[0].idCiudad
        const [destinoRes] = await pool.query('SELECT idCiudad FROM ciudad where estado = ?', [Destino])
        const idDestino = destinoRes[0].idCiudad
        const [result] = await pool.query('UPDATE viaje SET idViaje=?,idOrigen=?,idDestino=?,idCamion=?,fecha=?,hora=? WHERE idViaje = ?', [req.params.id,idOrigen,idDestino,idCamion,fecha,hora,req.params.id])
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