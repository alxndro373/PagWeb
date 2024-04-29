import Nav from '../components/Navbar.jsx'
import Foorm from '../components/Form.jsx'
import Table from '../components/Table.jsx'
import { useState } from 'react'
import {useViaje} from '../../hooks/useViaje.js'


export const Viajes = () => {
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}
    const {viajes, fetchViajes,handleCreateViaje, handleDeleteViaje} = useViaje()
    
    let fields = {idViaje: null,Origen:"",Destino:"",fecha:"",hora:""}
    let initialValues = {idViaje: null,idOrigen:null,idDestino:null,fecha:"",hora:""}
    let holders = {idViaje:null,Origen:"",Destino:"","AAAA-MM-DD":"","HH-MM-SS":""}
    return (
        <>
        <Nav />
        <div className='container w-50 rounded-3' style={{backgroundColor:"#eef6f7"}}>
            <h1 className='text-dark text-center pt-4 m-4'>Administrar Viajes</h1>
            <div>
               <Foorm initialValues={initialValues} fields={fields} holders={holders} handleCreate={handleCreateViaje} fetch={fetchViajes} action={action} saveAction={saveAction} showAction={showAction} />
            </div>
        </div>
        {action != "" ? <Table title={'Lista de Viajes'} cols={fields} values={viajes} onDelete={handleDeleteViaje}/> : null}       
        </>
    )
}