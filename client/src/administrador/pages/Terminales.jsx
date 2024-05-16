import { useState} from 'react'
import { useTerminales } from '../../hooks/useTerminales.js'
import Table from '../components/Table.jsx'
import Nav from '../components/Navbar.jsx'
import Foorm from '../components/Form.jsx'

export const Terminales = () => {
    
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}

    const {terminales, fetchTerminales, handleCreateTerminales, handleDeleteTerminales, handleUpdateTerminales} = useTerminales()    
    
    let initalValues = {idTerminales: null,nombre: "", direccion: "", latitud:"", longitud:""}
    let fields = {idTerminales: null, Nombre:"", Direccion: "", Latitud:"", Longitud:""}
    return (
        <>
        <Nav />
        <div className='container w-50 rounded-3' style={{backgroundColor: "#eef6f7"}}>
            <h1 className='text-dark text-center pt-4 m-4'>Administrar Terminales</h1>
            <div>
                <Foorm initialValues={initalValues} fields={fields} holders={fields} handleCreate={handleCreateTerminales} fetch={fetchTerminales} action={action} saveAction={saveAction} showAction={showAction}
                    />
            </div>
        </div>
        
        {action != "" ? <Table title={'Lista de Terminales'} onFetch={fetchTerminales} onUpdate={handleUpdateTerminales} initialValues={initalValues} cols={fields} holders={fields} values={terminales} onDelete={handleDeleteTerminales}/> : null}       
        </>
    )
}