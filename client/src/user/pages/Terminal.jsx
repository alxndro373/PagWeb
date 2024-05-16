import React, { useState, useEffect } from 'react'
import Nav from '../components/Navbar'
import Maps from '../components/Maps'
import { DropDown } from '../components/DropDown.jsx'
import { useCuidad } from '../../hooks/useCuidad.js'
import i1 from '../assets/busIcon.png'

export const Terminal = () => {
    const { ciudades, fetchCuidades } = useCuidad()
    const [selectedCity, setSelectedCity] = useState("")

    const handleSelectEstado = (value) => {
        setSelectedCity(value)
    }

    useEffect(() => {
        fetchCuidades()
    }, [])

    return(
        <>
            <Nav />
            <div className='' style={{fontFamily: "Oswal, sans-serif"}}>
                <div className='mx-auto mt-5' style={{background:"white", maxWidth:"80%"}}>
                    <div className='' style={{fontSize:"19px"}}>
                        <h2 className='fw-bold' style={{marginLeft:"10%"}}>Terminales</h2>
                        <p style={{marginLeft:"20px"}}>Comienza un gran viaje desde nuestras terminales, conoce toda su información para sentirte en casa. <img src={i1} style={{width:"35", height:"35px"}}/> </p> 
                    </div>
                </div>

                <div className='' style={{maxWidth:"30%", marginLeft:"10%", fontSize:"19px"}}>
                    <label htmlFor="origen">¿Dónde te encuentras?</label>
                    <DropDown title={"Selecciona una opción"} items={ciudades} onChange={handleSelectEstado}/>
                    <div className='' style={{ marginTop: "-10%", transform: "translate(650px, -30px)" }}>
                        <Maps selectedCity={selectedCity} />
                    </div>
                </div>  
            </div>
        </>
    );
};
