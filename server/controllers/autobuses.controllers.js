
import { pool } from "../db.js"

export const getAutobuses = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM camion')
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getAutobus = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM camion WHERE idcamion = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "ruta not found" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}

export const createAutobus = async (req, res) => {
    try {
        const { idcamion, placa, numAsientos } = req.body
        const [result] = await pool.query('INSERT INTO camion(idcamion,placa,numAsientos) values (?,?,?)', [idcamion, placa, numAsientos])
        res.json({
            idcamion: result.insertId,
            placa,
            numAsientos
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateAutobus = async (req, res) => {
    try {
        
        const [result] = await pool.query('UPDATE camion SET ? WHERE idcamion = ?', [req.body,req.params.id])
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export const deleteAutobus = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM camion WHERE idcamion = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "ruta not found" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}