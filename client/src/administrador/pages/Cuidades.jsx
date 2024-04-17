import { useEffect, useState } from "react"
import {getCuidadesRequest} from "../../api/cuidades.api.js"
import { CuidadesForm } from "./CuidadesForm"
import Nav from '../components/Navbar.jsx'

export const Cuidades = () => {

    const [cuidades, setCuidades] = useState([])

    useEffect(() => {
        async function loadCuidades(){
            const res = await getCuidadesRequest()
            setCuidades(res.data)
        }
        loadCuidades()
    },[cuidades])

    return (
        <>
        <Nav />
        <CuidadesForm />
        <div className="container">
            <h2 className="mt-4 mb-4 text-primary">Lista de Cuidades</h2>
            <div className="border border-primary">
                <table className="table table-primary">
                    <thead>
                        <tr className="table-light">
                            <td>ID</td>
                            <td>Nombre</td>
                            <td>Estado</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cuidades.map(cuidad => (
                                <tr key={cuidad.idcuidad}>
                                    <td>{cuidad.idcuidad}</td>
                                    <td>{cuidad.nombre}</td>
                                    <td>{cuidad.estado}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
        </>
    )
}