
import { pool } from "../db.js"

export const getTerminaleses = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM terminales')
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener las terminales" })
    }
}

export const getTerminales = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM terminales WHERE idTerminales = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "terminal no encontrada" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener las terminales" })
    }
}

export const createTerminales = async (req, res) => {
    try {
        const { idTerminales,nombre,direccion,latitud,longitud } = req.body
        const [existingTerminales] = await pool.query('SELECT * FROM terminales WHERE idTerminales = ? OR nombre = ? OR direccion = ? OR latitud = ? OR longitud = ?', [idTerminales, nombre, direccion, latitud, longitud])
        if (existingTerminales.length > 0) {
            return res.status(400).json({ message: "Ya existe una terminal con el mismo id, nombre, direccion o locacion" })
        }
        const [result] = await pool.query('INSERT INTO terminales(idTerminales, nombre, direccion, latitud, longitud) values (?,?,?,?,?)', [idTerminales, nombre, direccion, latitud, longitud])
        res.json({
            idTerminales: result.insertId,
            nombre,
            direccion,
            latitud,
            longitud,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al registrar la terminal" })
    }
}

export const updateTerminales = async (req, res) => {
    try {
        const { idTerminales,nombre,direccion,latitud,longitud } = req.body
        const [existingTerminales] = await pool.query('SELECT * FROM terminales WHERE idTerminales = ? OR nombre = ? OR direccion = ? OR latitud = ? OR longitud = ?', [idTerminales, nombre, direccion, latitud, longitud])
        if (existingTerminales.length > 0) {
            return res.status(400).json({ message: "Ya existe una terminal con el mismo id, nombre, direccion o locacion" })
        }

        const [result] = await pool.query('UPDATE terminales SET ? WHERE idTerminales = ?', [req.body,req.params.id])
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al actualizar la terminal" });
    }
}

export const deleteTerminales = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM terminales WHERE idTerminales = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "terminal not found" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al eliminar la terminal" });
    }
}