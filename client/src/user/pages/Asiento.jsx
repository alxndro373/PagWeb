import { useState } from 'react';
import { useParams } from 'react-router-dom';
import asiento from '../assets/asiento.svg';
import logo from '../assets/ADU.png'
import Nav from '../components/Navbar';
import { useViajeGlobal } from '../context/ViajeProvider';

export const Asiento = () => {
    const numAsientos = 45;
    const {origen,destino} = useParams()
    const [asientoSeleccionado, setAsientoSeleccionado] = useState(null)
    const {precioViaje, horaViaje, fechaViaje} = useViajeGlobal()

    const seleccionarAsiento = (asientoNumero) => {
        if (asientoSeleccionado === asientoNumero) {
            // Deseleccionar el asiento si ya estaba seleccionado
            setAsientoSeleccionado(null);
        } else {
            // Seleccionar el asiento
            setAsientoSeleccionado(asientoNumero);
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
                        <h5 className="card-title">{`01 Adulto(s) $${precioViaje}`}</h5>
                        <p className="card-text">{`${fechaViaje} ${horaViaje} h`}</p>
                        <p>{`Origen: ${origen}`}</p>
                        <p>{`Destino: ${destino}`}</p>
                        <p className='card-text'>{`Número de Asiento:${asientoSeleccionado}`}</p>
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-danger'>Confirmar Compra</button>
                    </div>
                </div>
                    {Array.from({ length: numAsientos }, (_, index) => index + 1).map((asientoNumero, index) => (
                        <div key={index} className="col-auto mb-3">
                            <div
                                style={{ position: "relative", width: "50px", height: "50px", cursor: "pointer" }}
                                onClick={() => seleccionarAsiento(asientoNumero)}
                            >
                                <img src={asiento} alt="asiento" style={{ width: "100%", height: "100%", filter: asientoSeleccionado === asientoNumero ? "brightness(150%) saturate(150%) hue-rotate(55deg)" : "none" }} />
                                <span className='fw-bold' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "14px" }}>{asientoNumero}</span>
                            </div>
                        </div>
                    ))}
                    <div className='mt-4 d-flex justify-content-center align-items-center'>
                        <img src={asiento} alt="" style={{filter:"brightness(150%) saturate(150%) hue-rotate(55deg)"}}/>
                        <span className='me-3'> Seleccionado </span>
                        <img src={asiento} alt="" />
                        <span className='me-3'> Libre</span>
                        <img src={asiento} alt="" style={{filter:"brightness(150%) saturate(150%) hue-rotate(300deg)"}}/>
                        <span>Ocupado</span>
                    </div>
                </div>
                
            </div>
        </>
    )
}
