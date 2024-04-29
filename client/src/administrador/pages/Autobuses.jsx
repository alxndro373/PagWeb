import Nav from '../components/Navbar.jsx'
import Foorm from '../components/Form.jsx'
import Table from '../components/Table.jsx'
import { useState } from 'react'
import {useAutobus} from '../../hooks/useAutobus.js'


export const Autobuses = () => {
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}
    const {autobuses, fetchAutobuses,handleCreateAutobus, handleDeleteAutobus} = useAutobus()
    let initialValues = {
        idcamion: null,
        placa: "",
        numAsientos: 0
    }
    let fields = {idCamion:null,placa:"", "Número de Asientos":0}

    return (
        <>
        <Nav />
        <div className='container w-50 rounded-3' style={{backgroundColor:"#eef6f7"}}>
            <h1 className='text-dark text-center pt-4 m-4'>Administrar Autobuses</h1>
            <div>
               <Foorm initialValues={initialValues} fields={fields} holders={fields} handleCreate={handleCreateAutobus} fetch={fetchAutobuses} action={action} saveAction={saveAction} showAction={showAction} />
            </div>
        </div>
        {action != "" ? <Table title={'Lista de Autobuses'} cols={fields} values={autobuses} onDelete={handleDeleteAutobus}/> : null}       
        </>
    )
}