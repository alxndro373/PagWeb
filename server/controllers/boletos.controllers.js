import { pool } from "../db.js"

export const getBoletos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM boleto')
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener los boletos" })
    }
}
export const getAsientoByViaje = async (req,res) => {
    try {
        const [result] = await pool.query("SELECT asiento FROM boleto WHERE idViaje = ?", [req.params.idViaje])
        if (result.length === 0) return res.status(404).json({ message: "boleto no encontrado" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener los boletos" })
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

        // Verificar si el asiento ya esta ocupado para el viaje
        const [occupiedSeatsResult] = await pool.query('SELECT asiento FROM boleto WHERE idViaje = ?', [idViaje])
        const occupiedSeats = occupiedSeatsResult.map(boleto => boleto.asiento)
        if (occupiedSeats.includes(asiento)) {
            return res.status(400).json({ message: "El asiento ya está ocupado" })
        }

        const [existingBoletos] = await pool.query('SELECT * FROM boleto WHERE idBoleto = ?', [idBoleto])
        if (existingBoletos.length > 0) {
            return res.status(400).json({ message: "Ya existe una boleto con el mismo id o camion con el mismo asiento" })
        }
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
        res.status(500).json({ message: "Error al crear el boleto" })
    }
}

export const updateBoleto = async (req, res) => {
    try {
        const [existingBoletos] = await pool.query('SELECT * FROM boleto WHERE idBoleto = ?', [idBoleto])
        if (existingBoletos.length > 0) {
            return res.status(400).json({ message: "Ya existe una boleto con el mismo id" })
        }

        const [result] = await pool.query('UPDATE boleto SET ? WHERE idBoleto = ?', [req.body,req.params.id])
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al actualizar el boleto" });
    }
}

export const deleteBoleto = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM boleto WHERE idBoleto = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "boleto no encontrado" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al eliminar el boleto" });
    }
}