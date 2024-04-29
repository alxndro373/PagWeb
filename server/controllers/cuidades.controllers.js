
import { pool } from "../db.js"

export const getCiudades = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM ciudad')
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getCiudad = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM ciudad WHERE idCiudad = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "ruta not found" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}

export const createCiudad = async (req, res) => {
    try {
        const { idCiudad,estado } = req.body
        const [result] = await pool.query('INSERT INTO ciudad(idCiudad,estado) values (?,?)', [idCiudad, estado])
        res.json({
            idCiudad: result.insertId,
            estado,
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCiudad = async (req, res) => {
    try {
        const [result] = await pool.query('UPDATE ciudad SET ? WHERE idCiudad = ?', [req.body,req.params.id])
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const deleteCiudad = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM ciudad WHERE idCiudad = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "ruta not found" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}