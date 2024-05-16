import { createContext,useContext,useState } from "react"

const viajeContext = createContext()

export const ViajeProvider = ({children}) => {

    const [idViaje, setIdViaje] = useState(null)
    const [precio, setPrecioViaje] = useState(null)
    const [hora, setHoraViaje] = useState(null)
    const [fecha, setFechaViaje] = useState(null)
    const updateIdViaje = (idViaje) => {setIdViaje(idViaje)}
    const updateHora = (hora) => {setHoraViaje(hora)}
    const updatePrecio = (precio) => {setPrecioViaje(precio)}
    const updateFecha = (fecha) => {setFechaViaje(fecha)}

    return (
        <viajeContext.Provider value={{idViaje,updateIdViaje,precio,hora,updateHora,fecha,updateFecha,updatePrecio}}>
            {children}
        </viajeContext.Provider>
    )
}

export const useViajeGlobal = () => useContext(viajeContext)