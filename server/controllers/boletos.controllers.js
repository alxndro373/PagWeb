import { pool } from "../db.js"

export const getBoletos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM boleto')
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
export const getAsientoByViaje = async (req,res) => {
    try {
        const [result] = await pool.query("SELECT asiento FROM boleto WHERE idViaje = ?", [req.params.idViaje])
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
export const getBoletoByUser = async (req,res) => {
    try {
        const [result] = await pool.query("SELECT * FROM boleto where idUsuario = ?", [req.params.idUsuario])
        res.json(result) 
    } catch (error) {
        console.log(error)
    }
}
export const getOriginAndDestination = async (req,res) => {
    try {
        const [result] = await pool.query("SELECT * FROM viaje WHERE idViaje = ?", [req.params.id])
        const idOrigen = result[0].idOrigen
        const idDestino = result[0].idDestino
        const [origenRes] = await pool.query("SELECT estado FROM ciudad WHERE idCiudad = ?", [idOrigen])
        const [destinoRes] = await pool.query("SELECT estado FROM ciudad WHERE idCiudad = ?", [idDestino])
        const origen = origenRes[0].estado
        const destino = destinoRes[0].estado
        res.json({origen,destino})   
    } catch (error) {
        console.log(error)
    }
}

export const getBoleto = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM boleto WHERE idBoleto = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "ruta not found" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}

export const createBoleto = async (req, res) => {
    try {
        const {idBoleto, idUsuario,idViaje, asiento, fecha, hora, precio } = req.body
        const [result] = await pool.query('INSERT INTO boleto(idBoleto,idUsuario,idViaje,asiento,fecha,hora,precio) values (?,?,?,?,?,?,?)', [idBoleto,idUsuario,idViaje,asiento,fecha,hora,precio])
        res.json({
            idBoleto: result.insertId,
            idUsuario,
            idViaje,
            asiento,
            fecha,
            hora,
            precio
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateBoleto = async (req, res) => {
    try {
        const [result] = await pool.query('UPDATE boleto SET ? WHERE idBoleto = ?', [req.body,req.params.id])
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export const deleteBoleto = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM boleto WHERE idBoleto = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "ruta not found" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}