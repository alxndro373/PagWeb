import Nav from '../components/Navbar.jsx'
import Foorm from '../components/Form.jsx'
import Table from '../components/Table.jsx'
import { useState } from 'react'
import {useAutobus} from '../../hooks/useAutobus.js'


export const AutobusesForm = () => {
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}
    const {autobuses, fetchAutobuses,handleCreateAutobus, handleDeleteAutobus} = useAutobus()
    let fields = {
        idcamion: null,
        placa: "",
        numAsientos: 0
    }
    return (
        <>
        <Nav />
        <div className='container'>
            <h1 className='text-primary  mt-4 mb-4'>Administrar Autobuses</h1>
            <div className='border border-primary' style={{backgroundColor: "#cfe2ff"}} >
               <Foorm fields={fields} handleCreate={handleCreateAutobus} fetch={fetchAutobuses} action={action} saveAction={saveAction} showAction={showAction} />
            </div>
        </div>
        {action != "" ? <Table title={'Lista de Autobuses'} cols={fields} values={autobuses} onDelete={handleDeleteAutobus}/> : null}       
        </>
    )
}