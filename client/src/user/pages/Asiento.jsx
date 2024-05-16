import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import asientoImg from '../assets/asiento.svg';
import logo from '../assets/ADU.png'
import Nav from '../components/Navbar';
import { useViajeGlobal } from '../context/ViajeProvider';
import { useBoleto } from '../../hooks/useBoleto';
import { useAuth } from '../../auth/AuthProvider';

export const Asiento = () => {
    const numAsientos = 45;
    const {origen,destino} = useParams()
    const navigate = useNavigate()
    const [asiento, setAsientoSeleccionado] = useState(0)
    const [asientosOcupados,setAsientosOcupados] = useState([])
    const {idViaje,precio, hora, fecha} = useViajeGlobal()
    const {idUsuario} = useAuth()
    const {buyBoleto,handleGetAsientoByViaje} = useBoleto()

    useEffect(() => {
        const loadAsientos = async () => {
            const res = await handleGetAsientoByViaje(idViaje)
            setAsientosOcupados(res.data)
        }
        loadAsientos()
    },[])

    const estiloAsiento = (asientoNumero) => {
        if (asiento === asientoNumero) {
            return "brightness(150%) saturate(150%) hue-rotate(55deg)" 
            
        } else if (asientosOcupados.some(data => data.asiento === asientoNumero)) {
            return "brightness(150%) saturate(150%) hue-rotate(250deg)"
        } else {
            return "none" 
        }
    }

    const seleccionarAsiento = (asientoNumero) => {
        if(asientosOcupados.some(data => data.asiento === asientoNumero)) return
        if (asiento === asientoNumero) {
            // Deseleccionar el asiento si ya estaba seleccionado
            setAsientoSeleccionado(null);
        } else {
            // Seleccionar el asiento
            setAsientoSeleccionado(asientoNumero);
        }
    }
    const comprarBoleto = async () => {
        try {
            let result
            const idBoleto = Math.floor(Math.random() * 100)
            const values = {idBoleto,idUsuario,idViaje,asiento,fecha,hora,precio}
            if(asiento > 0) result = await buyBoleto(values)
            else alert("Selecciona un boleto")
            if(result.status === 200){
                alert("Compra Exitosa")
                navigate("/Boletos")
            }else alert("Fallo la compra")
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <>
            < Nav />
            <div className='container'>
                <div className="row mt-3">
                <div className="card mb-5 mt-4">
                    <img src={logo} className="card-img-top" alt="logo" style={{ width: "150px",height:"60px", objectFit:"cover"}} />
                    <div className="card-body">
                        <h5 className="card-title">{`01 Adulto(s) $${precio}`}</h5>
                        <p className="card-text">{`${fecha} ${hora} h`}</p>
                        <p>{`Origen: ${origen}`}</p>
                        <p>{`Destino: ${destino}`}</p>
                        <p className='card-text'>{`Número de Asiento:${asiento}`}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={comprarBoleto} className='btn btn-danger'>Confirmar Compra</button>
                    </div>
                </div>
                    {Array.from({ length: numAsientos }, (_, index) => index + 1).map((asientoNumero, index) => (
                        <div key={index} className="col-auto mb-3">
                            <div
                                style={{ position: "relative", width: "50px", height: "50px", cursor: "pointer" }}
                                onClick={() => seleccionarAsiento(asientoNumero)}
                            >
                                <img src={asientoImg} alt="asiento" style={{ width: "100%", height: "100%", filter: estiloAsiento(asientoNumero)}} />
                                <span className='fw-bold' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "14px" }}>{asientoNumero}</span>
                            </div>
                        </div>
                    ))}
                    <div className='mt-4 d-flex justify-content-center align-items-center'>
                        <img src={asientoImg} alt="" style={{filter:"brightness(150%) saturate(150%) hue-rotate(55deg)"}}/>
                        <span className='me-3'> Seleccionado </span>
                        <img src={asientoImg} alt="" />
                        <span className='me-3'> Libre</span>
                        <img src={asientoImg} alt="" style={{filter:"brightness(150%) saturate(150%) hue-rotate(300deg)"}}/>
                        <span>Ocupado</span>
                    </div>
                </div>
                
            </div>
        </>
    )
}
