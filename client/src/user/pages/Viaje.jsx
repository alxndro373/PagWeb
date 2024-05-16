import { useParams, useNavigate, Link } from "react-router-dom"
import logo from "../assets/ADU.png"
import Nav from "../components/Navbar"
import { useViaje } from "../../hooks/useViaje"
import { useEffect, useState } from "react"
import { useViajeGlobal } from "../context/ViajeProvider"

export const Viaje = () => {
    const { origen, destino } = useParams()
    const navigate = useNavigate()
    const [viajeData, setViajeData] = useState([])
    const { handleValidOriginAndDestination } = useViaje()
    const {updateIdViaje,updateHora,updatePrecio,updateFecha} = useViajeGlobal()
    useEffect(() => {
        const loadData = async () => {
            const res = await handleValidOriginAndDestination(origen, destino)
            setViajeData(res.data)
        }
        loadData()
    }, [])

    const fechaActual = new Date()

    if (viajeData.length == 0) return <p className="display-2">Viajes no econtrados</p>

    const viajeSeleccionado = (idViaje,hora,precio,fecha) => {
        updateIdViaje(idViaje)
        updateHora(hora)
        updatePrecio(precio)
        updateFecha(fecha)
        navigate('asientos')
    }

    return (
        <>
            < Nav />
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    viajeData.map((data, key) => (
                        data.fecha.split('T')[0] >= fechaActual.toISOString().split('T')[0]
                        &&
                        <div key={key} className="col">
                            <div className="card ">
                                <img src={logo} className="card-img-top" alt="logo" style={{ width: "150px", height: "60px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{`${origen} a ${destino}`}</h5>
                                    <p className="card-text">{`Fecha: ${data.fecha.split('T')[0]} Hora: ${data.hora}`}</p>
                                    <button onClick={() => viajeSeleccionado(data.idViaje,data.hora,data.precio,data.fecha.split('T')[0])} className="btn btn-outline-danger">{`Comprar por $${data.precio} mxn`}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}