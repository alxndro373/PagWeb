import { useState} from 'react'
import { useCuidad } from '../../hooks/useCuidad.js'
import Table from '../components/Table.jsx'
import Nav from '../components/Navbar.jsx'
import Foorm from '../components/Form.jsx'

export const CuidadesForm = () => {
    
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}

    const {cuidades, fetchCuidades, handleCreateCuidad,handleDeleteCuidad} = useCuidad()    
    
    let fields = {
        idcuidad: null,
        nombre: "",
        estado: ""
    }
    return (
        <>
        <Nav />
        <div className='container'>
            <h1 className='text-primary  mt-4 mb-4'>Administrar Cuidades</h1>
            <div className='border border-primary' style={{backgroundColor: "#cfe2ff"}} >
                <Foorm fields={fields} handleCreate={handleCreateCuidad} fetch={fetchCuidades} action={action} saveAction={saveAction} showAction={showAction}
                    />
            </div>
        </div>
        
        {action != "" ? <Table title={'Lista de Cuidades'} cols={fields} values={cuidades} onDelete={handleDeleteCuidad}/> : null}       
        </>
    )
}