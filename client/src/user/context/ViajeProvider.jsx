import { createContext,useContext,useState } from "react"

const viajeContext = createContext()

export const ViajeProvider = ({children}) => {

    const [precioViaje, setPrecioViaje] = useState(null)
    const [horaViaje, setHoraViaje] = useState(null)
    const [fechaViaje, setFechaViaje] = useState(null)
    const updateHora = (hora) => {setHoraViaje(hora)}
    const updatePrecio = (precio) => {setPrecioViaje(precio)}
    const updateFecha = (fecha) => {setFechaViaje(fecha)}

    return (
        <viajeContext.Provider value={{precioViaje,horaViaje,updateHora,fechaViaje,updateFecha,updatePrecio}}>
            {children}
        </viajeContext.Provider>
    )
}

export const useViajeGlobal = () => useContext(viajeContext)