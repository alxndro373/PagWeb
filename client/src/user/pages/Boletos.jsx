import { useEffect, useState } from 'react'
import { useBoleto } from '../../hooks/useBoleto'
import logo from '../assets/ADU.png'
import Nav from '../components/Navbar'
import { useAuth } from '../../auth/AuthProvider'

export const Boleto = () => {

    const [boletos, setBoletos] = useState([])
    const [viaje, setViaje] = useState([])
    const { fetchBoletosByUser } = useBoleto()
    const { idUsuario,name } = useAuth()
    const {handleOriginAndDestination} = useBoleto()
    

    useEffect(() => {
        const loadBoletos = async () => {
            const res = await fetchBoletosByUser(idUsuario)
            const origenDestino = await Promise.all(res.data.map((data) => handleOriginAndDestination(data.idViaje)))
            console.log(origenDestino)
            setBoletos(res.data)
            setViaje(origenDestino)
        }
        loadBoletos()
    }, [boletos])
   

    return (
        <>
            < Nav />
            <div className='row row-cols-1 row-cols-md-2 g-4 '>
                {
                    boletos.map((boleto, key) => (
                        <div className='col' key={key}>
                            <div className="card mb-3 mt-5" style={{ maxWidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={logo} class="img-fluid rounded-start" alt="logo" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">BOLETO</h5>
                                            <p>{`${viaje[key].data.origen} - ${viaje[key].data.destino}`}</p>
                                            <p className="card-text">{`${boleto.fecha.split('T')[0]} ${boleto.hora} h`}</p>
                                            <p className="card-text">{`Asiento: ${boleto.asiento}`}</p>
                                            <p className="card-text">{`Precio: $${boleto.precio} mxn`}</p>
                                            <p className="card-text"><small className="text-body-secondary">{`Usuario: ${name}`}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}