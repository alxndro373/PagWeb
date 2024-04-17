
import { pool } from "../db.js"

export const getCuidades = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM cuidad')
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getCuidad = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM cuidad WHERE idcuidad = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "ruta not found" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}

export const createCuidad = async (req, res) => {
    try {
        const { idcuidad, nombre, estado } = req.body
        const [result] = await pool.query('INSERT INTO cuidad(idcuidad,nombre,estado) values (?,?,?)', [idcuidad, nombre, estado])
        res.json({
            idcuidad: result.insertId,
            nombre,
            estado
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCuidad = async (req, res) => {
    try {
        const [result] = await pool.query('UPDATE cuidad SET ? WHERE idcuidad = ?', [req.body,req.params.id])
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const deleteCuidad = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM cuidad WHERE idcuidad = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "ruta not found" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}