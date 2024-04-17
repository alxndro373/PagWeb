import { useEffect, useState } from "react"
import {getAutobusesRequest} from "../../api/autobuses.api.js"
import { AutobusesForm } from "./AutobusesForm.jsx"
import Nav from '../components/Navbar.jsx'

export const Autobuses = () => {

    const [autobuses, setAutobuses] = useState([])

    useEffect(() => {
        async function loadAutobuses(){
            const res = await getAutobusesRequest()
            setAutobuses(res.data)
        }
        loadAutobuses()
    },[autobuses])

    return (
        <>
        <Nav />
        <AutobusesForm />
        <div className="container">
            <h2 className="mt-4 mb-4 text-primary">Lista de Autobuses</h2>
            <div className="border border-primary">
                <table className="table table-primary">
                    <thead>
                        <tr className="table-light">
                            <td>ID</td>
                            <td>Placa</td>
                            <td>Asientos</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            autobuses.map(autobus => (
                                <tr key={autobus.idcamion}>
                                    <td>{autobus.idcamion}</td>
                                    <td>{autobus.placa}</td>
                                    <td>{autobus.numAsientos}</td>
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