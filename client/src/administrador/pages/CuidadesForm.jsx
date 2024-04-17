import {Form, Formik} from 'formik'
import {createCuidadRequest, updateCuidadRequest, deleteCuidadRequest} from '../../api/cuidades.api.js'


export const CuidadesForm = () => {
    let action = ""
    return (
        <div className='container'>
            <h1 className='text-primary  mt-4 mb-4'>Administrar Cuidades</h1>
            <div className='border border-primary' style={{backgroundColor: "#cfe2ff"}} >
                <Formik
                    initialValues={
                        {
                            idcuidad : null,
                            nombre : "",
                            estado: "",
                            
                        }
                    }
                    onSubmit={async (values) => {
                        try {
                            switch(action){
                                case 'Guardar':
                                    await createCuidadRequest(values)
                                break;
                                case 'Actualizar':
                                    const {idcuidad, ...res} = values
                                    await updateCuidadRequest(idcuidad, res)
                                break;
                                case 'Eliminar':
                                    await deleteCuidadRequest(values.idcuidad)
                                break;
                                
                            }
                        
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                >
                {({handleChange, handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                    <label className='form-label'>ID Cuidad</label>
                    <input className='form-control' type="text" name='idcuidad' onChange={handleChange} placeholder="ID Cuidad"/>
                    <label className='form-label'>Nombre</label>
                    <input className='form-control' type="text" name='nombre' onChange={handleChange} placeholder="Nombre"/>
                    <label className='form-label'>Estado</label>
                    <input className='form-control' type="text" name='estado' onChange={handleChange} placeholder="Estado"/>
                    <div className='grid text-center'>
                        <button className='m-3 btn btn-light btn-outline-primary ' type='submit' onClick={() => action = 'Guardar'}>Guardar</button>
                        <button className='m-3 btn btn-light btn-outline-primary ' type='submit'>Buscar</button>
                        <button className='m-3 btn btn-light btn-outline-primary ' type='submit' onClick={() => action = 'Actualizar'}>Actualizar</button>
                        <button className='m-3 btn btn-light btn-outline-primary ' type='submit' onClick={() => action = 'Eliminar'}>Eliminar</button>
                    </div>
                </Form>
                )}
                </Formik>
            </div>
        </div>
    )
}