import { pool } from "../db.js"

export const getUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM usuario')
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getUsuario = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM usuario WHERE idUsuario = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "usuario not found" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}

export const createUsuario = async (req, res) => {
    try {
        const { idUsuario, nombre, correo, numeroCelular, contraseña } = req.body
        const [result] = await pool.query('INSERT INTO usuario(idUsuario,nombre,correo,numeroCelular,contraseña) values (?,?,?,?,?)', [idUsuario, nombre, correo, numeroCelular, contraseña])
        res.json({
            idUsuario: result.insertId,
            nombre,
            correo,
            numeroCelular,
            contraseña
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateUsuario = async (req, res) => {
    try {
        
        const [result] = await pool.query('UPDATE usuario SET ? WHERE idUsuario = ?', [req.body,req.params.id])
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM usuario WHERE idUsuario = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "usuario not found" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}

export const getPasswordAndName = async (req,res) => {
    try {
        const [result] = await pool.query('SELECT nombre,contraseña FROM usuario WHERE correo = ?',[req.params.correo])
        if (result.length === 0) return res.status(404).json({ message: "password not found" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}