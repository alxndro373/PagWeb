import { useState } from "react"
import { useUsuario } from "../../hooks/useUsuario"
import Nav from '../components/Navbar.jsx'
import Table from '../components/Table.jsx'
import Foorm from '../components/Form.jsx'

export const Usuario = () => {

    const {usuarios, fetchUsuarios, handleCreateUsuario, handleDeleteUsuario} = useUsuario()
    const [action, setAction] = useState("")
    const saveAction = () => {setAction('Guardar')}
    const showAction = () => {setAction('Consultar')}
    let fields = {
        idUsuario: null,
        nombre: "",
        correo: "",
        numeroCelular: "",
        contraseña: ""
    }

    return (
        <>
        <Nav />
        <div className='container w-50 rounded-3' style={{backgroundColor:"#eef6f7"}}>
            <h1 className='text-dark text-center pt-4 m-4'>Administrar Usuarios</h1>
            <div>
               <Foorm fields={fields} handleCreate={handleCreateUsuario} fetch={fetchUsuarios} action={action} saveAction={saveAction} showAction={showAction} />
            </div>
        </div>
        {action != "" ? <Table title={'Lista de Usuarios'} cols={fields} values={usuarios} onDelete={handleDeleteUsuario}/> : null}       
        </>
    )
}