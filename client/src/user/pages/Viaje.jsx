import { useParams } from "react-router-dom"
import logo from "../assets/ADU.png"
import Nav from "../components/Navbar"
import { useViaje } from "../../hooks/useViaje"
import { useEffect, useState } from "react"


export const Viaje = () => {
    const { origen, destino } = useParams()
    const [viajeData, setViajeData] = useState([])
    const { handleValidOriginAndDestination } = useViaje()
    useEffect(() => {
        const loadData = async () => {
            const res = await handleValidOriginAndDestination(origen, destino)
            setViajeData(res.data)
        }
        loadData()
    }, [])

    if (viajeData.length == 0) return <p className="display-2">Viajes no econtrados</p>

    return (
        <>
            < Nav />
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    viajeData.map((data, key) => (
                        <div key={key} className="col">
                            <div className="card ">
                                <img src={logo} className="card-img-top" alt="logo" style={{ width: "150px", height: "60px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{`${origen} a ${destino}`}</h5>
                                    <p className="card-text">{`Hora: ${data.hora}`}</p>
                                    <button className="btn btn-outline-danger">{`Comprar por $${data.precio} mxn`}</button>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}